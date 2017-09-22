import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';
import { connect } from 'react-redux';
import injectWidgetId from '../../utils/utils';
import WIDGET_ID from '../../constants/index';


const HeaderCell = ({ headerCellId, headerCellsById }) => (
  <Table.HeaderCell>{`${headerCellsById[headerCellId]}`}</Table.HeaderCell>
);


HeaderCell.propTypes = {
  headerCellId: PropTypes.number.isRequired,
  headerCellsById: PropTypes.shape({ 1: 'Header A' }).isRequired,
};
HeaderCell.defaultProps = {
  widgetId: WIDGET_ID,
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.widgetId;
  const headerCellIds = state.widgets.byId[id].sheet.header.headerCellIds;
  const headerCellsById = state.widgets.byId[id].sheet.header.headerCellsById;
  return {
    headerCellIds,
    headerCellsById,
  };
};

export default injectWidgetId(connect(mapStateToProps)(HeaderCell));
