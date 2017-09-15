import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';
import { connect } from 'react-redux';


const HeaderCell = ({ headerCellId, headerCellsById }) => (
  <Table.HeaderCell>{`${headerCellsById[headerCellId]}`}</Table.HeaderCell>
);


HeaderCell.propTypes = {
  headerCellId: PropTypes.number.isRequired,
  headerCellsById: PropTypes.shape({ 1: 'Header A' }).isRequired,
};

const mapStateToProps = (state) => {
  const headerCellIds = state.sheet.header.headerCellIds;
  const headerCellsById = state.sheet.header.headerCellsById;
  return {
    headerCellIds,
    headerCellsById,
  };
};

export default connect(
  mapStateToProps,
)(HeaderCell);
