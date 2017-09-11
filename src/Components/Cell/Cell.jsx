import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


const Cell = ({ cellId, cellsById }) => (
  <div>
    {`${cellsById[cellId]}`}
  </div>
);


Cell.propTypes = {
  cellId: PropTypes.number.isRequired,
  cellsById: PropTypes.shape({ 1: 'Cell A2' }).isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const cellIds = state.sheet.rowsById[ownProps.rowId].cellIds;
  const cellsById = state.sheet.rowsById[ownProps.rowId].cellsById;
  return {
    cellIds,
    cellsById,
  };
};


export default connect(
  mapStateToProps,
)(Cell);
