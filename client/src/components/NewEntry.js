import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

export default class NewEntry extends React.Component {
  render() {
    return (
      <Form inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="exampleEmail" className="mr-sm-2">
            Date
          </Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="DD/MM/YYYY"
          />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="examplePassword" className="mr-sm-2">
            Description
          </Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="don't tell!"
          />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="examplePassword" className="mr-sm-2">
            Method
          </Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="Cash, Card, or Check"
          />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="examplePassword" className="mr-sm-2">
            Amount
          </Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="$$$"
          />
        </FormGroup>
        <Button>Add</Button>
      </Form>
    );
  }
}
