import React from "react";
import { Table } from "reactstrap";

export default class ExpTable extends React.Component {
  render() {
    return (
      <Table size="sm" responsive striped>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Method</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
          </tr>
          <tr>
            <th scope="row">2</th>
          </tr>
          <tr>
            <th scope="row">3</th>
          </tr>
        </tbody>
      </Table>
    );
  }
}
