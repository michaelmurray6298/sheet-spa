import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';
import { connect } from 'react-redux';
import Cell from '../Cell/Cell';

const Row = props => (
  <Table.Row>
    { props.rowsById[`${props.rowId}`].cellIds.map(cellId => <Cell key={cellId} cellId={cellId} rowId={props.rowId} />) }
  </Table.Row>
);


Row.propTypes = {
  rowId: PropTypes.number.isRequired,
  rowsById: PropTypes.shape({ cellIds: [], cellsById: {} }).isRequired,
};

const mapStateToProps = (state) => {
  const rowIds = state.sheet.rowIds;
  const rowsById = state.sheet.rowsById;
  return {
    rowIds,
    rowsById,
  };
};

export default connect(
  mapStateToProps,
)(Row);
