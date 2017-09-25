
import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import injectWidgetId from '../../utils/utils';
import WIDGET_ID from '../../constants/index';
import { storeSheetData } from '../../actions';
/* eslint-disable max-len */

export class SheetForm extends Component {
  constructor(props) {
    super(props);
    this.handleForm = this.handleForm.bind(this);
  }
  handleForm(e) {
    e.preventDefault();
    this.props.storeSheetData(e.target.id.value, e.target.name.value);
  }

  render() {
    return (
      <Form size="large" onSubmit={this.handleForm}>
        <Form.Field>
          <input type="string" name="id" placeholder="Enter Spreadsheet ID" />
        </Form.Field>
        <Form.Field>
          <input type="string" name="name" placeholder="Enter Sheet Name" />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}

SheetForm.propTypes = {
  storeSheetData: PropTypes.func.isRequired,
};

SheetForm.defaultProps = {
  widgetId: WIDGET_ID,
};

export const mapStateToProps = (state, ownProps) => {
  const id = ownProps.widgetId;
  const currentPage = state.widgets.byId[id].currentPage.render;

  return {
    currentPage,
  };
};
const mapDispatchToProps = dispatch => bindActionCreators({
  storeSheetData,
}, dispatch);


export default injectWidgetId(connect(mapStateToProps, mapDispatchToProps)(SheetForm));
