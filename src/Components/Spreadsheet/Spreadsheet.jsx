import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchSheet } from '../../actions';
import data from '../../seeds';


class Spreadsheet extends Component {
  componentDidMount() {
    this.props.fetchSheet();
  }


  render() {
    const header = data.values[0];
    const rows = data.values.slice(1, data.values.length);
    return (
      <div className="spreadsheet">
        <Table celled striped definition>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell />
              {header.map(cell => <div>{cell}</div>)}
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {rows.map(row => <div>{row.map(cell => <div>{cell}</div>)}</div>)}
          </Table.Body>
        </Table>
      </div>
    );
  }
}

Spreadsheet.propTypes = {
  fetchSheet: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const sheet = state.sheet;
  return {
    sheet,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchSheet,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Spreadsheet);
