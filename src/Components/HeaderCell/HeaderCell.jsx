import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';
import { connect } from 'react-redux';
import injectWidgetId from '../../utils/utils';


const HeaderCell = ({ headerCellId, headerCellsById }) => (
  <Table.HeaderCell>{`${headerCellsById[headerCellId]}`}</Table.HeaderCell>
);


HeaderCell.propTypes = {
  headerCellId: PropTypes.number.isRequired,
  headerCellsById: PropTypes.shape({ 1: 'Header A' }).isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.widgetId;
  const headerCellIds = state.widgets.byId[id].header.headerCellIds;
  const headerCellsById = state.widgets.byId[id].header.headerCellsById;
  return {
    headerCellIds,
    headerCellsById,
  };
};

export default injectWidgetId(connect(mapStateToProps)(HeaderCell));
