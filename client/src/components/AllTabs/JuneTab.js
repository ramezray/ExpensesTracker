import React, { Component } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Table,
  Badge,
  Alert
} from "reactstrap";

class June extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      date: "",
      description: "",
      method: "",
      amount: "",
      rowData: [
        {
          id: 1,
          date: "01/01/01",
          description: "food",
          method: "cash",
          amount: "25.25"
        },
        {
          id: 2,
          date: "02/02/02",
          description: "gas",
          method: "card",
          amount: "45"
        }
      ]
    };
  }
  handleDateChange = event => {
    this.setState({ date: event.target.value });
  };
  handleDescChange = event => {
    this.setState({ description: event.target.value });
  };
  handleMethodChange = event => {
    this.setState({ method: event.target.value });
  };
  handleAmountChange = event => {
    this.setState({ amount: event.target.value });
  };
  handleaddingNewRow = event => {
    if (
      this.state.date === "" ||
      this.state.description === "" ||
      this.state.method === "" ||
      this.state.amount === ""
    ) {
      this.onShowAlert();
    } else {
      const newEntryRow = {
        date: this.state.date,
        description: this.state.description,
        method: this.state.method,
        amount: this.state.amount
      };
      let rowDate = this.state.rowData;
      rowDate.push(newEntryRow);
      this.setState({ rowData: rowDate });
    }
  };
  onShowAlert = () => {
    this.setState({ visible: true }, () => {
      window.setTimeout(() => {
        this.setState({ visible: false });
      }, 3000);
    });
  };

  render() {
    return (
      <div>
        <Alert color="danger" isOpen={this.state.visible}>
          Please fill in all field to add your entry!
        </Alert>
        <Form inline className="p-2">
          <FormGroup className="p-2">
            {" "}
            <Label for="date" hidden>
              Date
            </Label>
            <Input
              type="date"
              name="date"
              id="date"
              placeholder="Date"
              value={this.state.date}
              onChange={this.handleDateChange}
            />
          </FormGroup>
          <FormGroup className="p-2">
            <Label for="description" hidden>
              Description
            </Label>
            <Input
              type="description"
              name="description"
              id="description"
              placeholder="Description"
              value={this.state.description}
              onChange={this.handleDescChange}
            />
          </FormGroup>{" "}
          <FormGroup className="p-2">
            <Label for="method" hidden>
              Select
            </Label>
            <Input
              type="select"
              name="selec"
              id="method"
              value={this.state.method}
              onChange={this.handleMethodChange}
            >
              <option>Payment Method</option>
              <option>Cash</option>
              <option>Debit</option>
              <option>Credit</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="amount" hidden>
              Amount
            </Label>
            <Input
              type="number"
              name="amount"
              id="amount"
              placeholder="How much Did You Pay"
              value={this.state.amount}
              onChange={this.handleAmountChange}
            />
          </FormGroup>{" "}
          <Button
            color="success"
            onClick={this.handleaddingNewRow}
            className="ml-3"
          >
            Add New Expense
          </Button>
        </Form>
        <hr />
        <Badge className="mb-3" color="success" pill>
          June's Expenses
        </Badge>
        {/* tables */}
        <Table bordered>
          <thead>
            <tr>
              <th>#</th>
              <th>Date</th>
              <th>Description</th>
              <th>Method</th>
              <th>Amount</th>
              <th>Edit/Delete</th>
            </tr>
          </thead>
          <tbody id={"row"}>
            {this.state.rowData.map((obj, id) => (
              <tr key={id}>
                <th scope="row">{id + 1}</th>
                <td>{obj.date}</td>
                <td>{obj.description}</td>
                <td>{obj.method}</td>
                <td>${obj.amount}</td>
                <td>
                  <Button outline color="primary" className="mr-2">
                    Edit
                  </Button>
                  <Button outline color="danger">
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default June;
