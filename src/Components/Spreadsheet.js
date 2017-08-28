import React, { Component } from 'react';
import { Table } from 'semantic-ui-react'

const Spreadsheet = () => (
  <div className="spreadsheet">
    <Table celled striped definition>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell />
          {/* needs a function for creating alpha header */}
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {/* needs a function for creating numbered rows */}
      </Table.Body>
    </Table>
  </div>
);

export default Spreadsheet;
