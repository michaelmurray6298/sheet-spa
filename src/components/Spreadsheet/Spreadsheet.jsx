import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';
import { connect } from 'react-redux';
import HeaderCell from '../HeaderCell/HeaderCell';
import Row from '../Row/Row';
import WIDGET_ID from '../../constants/index';
import injectWidgetId from '../../utils/utils';
/* eslint-disable max-len */


export const Spreadsheet = ({ sheet }) => {
  const headerCellIds = sheet.header.headerCellIds;
  const rowIds = sheet.rowIds;
  if (!rowIds) {
    return (<div>Loading</div>);
  }
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
};

Spreadsheet.propTypes = {
  sheet: PropTypes.shape({ range: '', majorDimension: '', header: { headerCellIds: {}, headerCellsById: {} }, rowIds: {}, rowsById: {} }).isRequired,
};
Spreadsheet.defaultProps = {
  widgetId: WIDGET_ID,
};
const mapStateToProps = (state, ownProps) => {
  const id = ownProps.widgetId;
  const sheet = state.widgets.byId[id].sheet;
  return {
    sheet,
  };
};

export default injectWidgetId(connect(mapStateToProps)(Spreadsheet));
