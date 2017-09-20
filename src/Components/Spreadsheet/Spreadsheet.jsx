import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchSheet } from '../../actions';
import HeaderCell from '../HeaderCell/HeaderCell';
import Row from '../Row/Row';


class Spreadsheet extends Component {
  componentDidMount() {
    this.props.fetchSheet();
  }
  /* eslint-disable max-len */


  render() {
    const headerCellIds = this.props.sheet.header.headerCellIds;
    const rowIds = this.props.sheet.rowIds;

    return (
      <div className="spreadsheet">
        <Table celled striped>
          <Table.Header>
            <Table.Row>
              { headerCellIds.map(headerCellId => <HeaderCell key={headerCellId} headerCellId={headerCellId} />) }
            </Table.Row>
          </Table.Header>
          <Table.Body>
            { rowIds.map(rowId => <Row key={rowId} rowId={rowId} />) }
          </Table.Body>
        </Table>
      </div>
    );
  }
}

Spreadsheet.propTypes = {
  fetchSheet: PropTypes.func.isRequired,
  sheet: PropTypes.shape({ range: '', majorDimension: '', header: { headerCellIds: [], headerCellsById: {} }, rowIds: [], rowsById: {} }).isRequired,
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
