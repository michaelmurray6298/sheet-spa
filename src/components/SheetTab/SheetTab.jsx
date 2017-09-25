import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchSheet } from '../../actions';
import injectWidgetId from '../../utils/utils';
import WIDGET_ID from '../../constants/index';
/* eslint-disable no-shadow, max-len */


export class SheetTab extends Component {
  getChildContext() {
    return { sheetName: this.props.sheetName };
  }
  render() {
    const { spreadsheetId, sheetName, fetchSheet } = this.props;
    return (
      <List.Item as="a" id="sheet-list" animated divided horizontal selection size="huge" onClick={() => fetchSheet(spreadsheetId, sheetName)}>
        {sheetName}
      </List.Item>
    );
  }
}


SheetTab.propTypes = {
  fetchSheet: PropTypes.func.isRequired,
  spreadsheetId: PropTypes.string.isRequired,
  sheetName: PropTypes.string.isRequired,
};

SheetTab.defaultProps = {
  widgetId: WIDGET_ID,
};
SheetTab.childContextTypes = {
  sheetName: PropTypes.string,
};
export const mapStateToProps = (state, ownProps) => {
  const id = ownProps.widgetId;
  const sheetName = ownProps.sheetName;
  const spreadsheetId = state.widgets.byId[id].sheet.spreadsheetId;

  return {
    spreadsheetId,
    sheetName,
  };
};
const mapDispatchToProps = dispatch => bindActionCreators({
  fetchSheet,
}, dispatch);


export default injectWidgetId(connect(mapStateToProps, mapDispatchToProps)(SheetTab));
