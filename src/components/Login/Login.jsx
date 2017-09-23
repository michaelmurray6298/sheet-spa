/* eslint-disable import/no-named-as-default, no-shadow, consistent-return */
import React, { Component } from 'react';
import cookie from 'react-cookies';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { displayForm } from '../../actions/renderActions';
import injectWidgetId from '../../utils/utils';
import WIDGET_ID from '../../constants/index';

export class Login extends Component {
  componentDidMount() {
    if (cookie.load('userName') !== undefined) {
      this.props.displayForm();
    }
  }
  render() {
    const BASE_URL = process.env.REACT_APP_SHEETS_API_URL;
    return (
      <Button
        as="a"
        href={`${BASE_URL}/auth/google`}
        className="butterButton"
        size="large"
        content="Login with Google"
        icon="google"
      />

    );
  }
}
Login.propTypes = {
  displayForm: PropTypes.func.isRequired,
};

Login.defaultProps = {
  widgetId: WIDGET_ID,
};

export const mapStateToProps = (state, ownProps) => {
  const id = ownProps.widgetId;

  return {
    id,
  };
};
const mapDispatchToProps = dispatch => bindActionCreators({
  displayForm,
}, dispatch);


export default injectWidgetId(connect(mapStateToProps, mapDispatchToProps)(Login));
