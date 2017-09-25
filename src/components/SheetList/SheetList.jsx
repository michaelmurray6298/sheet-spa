import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'semantic-ui-react';
import { connect } from 'react-redux';
import SheetTab from '../SheetTab/SheetTab';
import injectWidgetId from '../../utils/utils';
import WIDGET_ID from '../../constants/index';
/* eslint-disable max-len, react/forbid-prop-types */

export const SheetList = ({ sheetList }) => (
  <List id="sheet-list" centered animated divided horizontal selection size="huge">
    {sheetList.map(sheet => <SheetTab sheetName={sheet} />)}
  </List>
);

SheetList.defaultProps = {
  widgetId: WIDGET_ID,
};
SheetList.propTypes = {
  sheetList: PropTypes.array.isRequired,
};
const mapStateToProps = (state, ownProps) => {
  const id = ownProps.widgetId;
  const sheetList = state.widgets.byId[id].sheet.sheetList;
  return {
    sheetList,
  };
};

export default injectWidgetId(connect(mapStateToProps)(SheetList));
