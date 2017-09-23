import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';
import { connect } from 'react-redux';
import injectWidgetId from '../../utils/utils';
import WIDGET_ID from '../../constants/index';


const Cell = ({ cellId, cellsById }) => (
  <Table.Cell>
    {`${cellsById[cellId]}`}
  </Table.Cell>
);


Cell.propTypes = {
  cellId: PropTypes.number.isRequired,
  cellsById: PropTypes.shape({ 1: 'Cell A2' }).isRequired,
};
Cell.defaultProps = {
  widgetId: WIDGET_ID,
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.widgetId;
  const cellIds = state.widgets.byId[id].sheet.rowsById[ownProps.rowId].cellIds;
  const cellsById = state.widgets.byId[id].sheet.rowsById[ownProps.rowId].cellsById;
  return {
    cellIds,
    cellsById,
  };
};


export default injectWidgetId(connect(mapStateToProps)(Cell));
