import React from 'react';
import { Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import cookie from 'react-cookies';
import PropTypes from 'prop-types';
import { logout } from '../../actions/renderActions';
/* eslint-disable no-shadow */

export const triggerLogout = (logout) => {
  cookie.remove('userName');
  logout();
};
export const Logout = ({ logout }) => (

  <Button
    floated="right"
    as="a"
    onClick={() => { triggerLogout(logout); }}
    className="hand peace icon"
    size="medium"
    content="Logout"
    icon="hand peace"
  />

);


Logout.propTypes = {
  logout: PropTypes.func.isRequired,
};
export const mapDispatchToProps = dispatch => bindActionCreators({
  logout,
}, dispatch);

export default connect(null, mapDispatchToProps)(Logout);
