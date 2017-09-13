/* eslint-disable import/no-named-as-default, no-shadow, consistent-return */

import React, { Component } from 'react';
import cookie from 'react-cookies';
import { Grid, Card, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
// NOTE all commented out code will be used in future mapping of state, dispatching of actions etc
// import { renderSheets } from '../../actions/renderActions';
// import injectWidgetId from '../../utils/utils';
import './Login.css';

export class Login extends Component {
  // componentDidMount() {
  //   if (cookie.load('userName') !== undefined) {
  //     const name = cookie.load('userName');
  //     this.props.renderSheets();
  //   }
  // }
  render() {
    const GOOGLE_AUTH_URL = process.env.REACT_APP_GOOGLE_AUTH_URL;
    return (
      <Grid verticalAlign={'middle'}>
        <Grid.Row centered verticalAlign={'middle'}>
          <Grid.Column centered verticalAlign={'middle'}>
            <Card raised centered className="island">
              <Card.Content>
                <Button
                  as="a"
                  href={`${GOOGLE_AUTH_URL}`}
                  className="butterButton"
                  size="massive"
                  content="Login with Google"
                  icon="google"
                />
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

// Login.propTypes = {
//   /* eslint-disable react/no-unused-prop-types, react/require-default-props */
//   renderLogin: PropTypes.func.isRequired,
//   userName: PropTypes.string,
// };
//
// export const mapStateToProps = (state, ownProps) => {
//   const id = ownProps.widgetId;
//   const currentPage = state.widgets.byId[id].currentPage.render;
//   const userName = state.widgets.byId[id].currentPage.userName;
//
//   return {
//     currentPage,
//     userName,
//   };
// };
//
// export const mapDispatchToProps = dispatch => bindActionCreators({
//   renderLogin,
// }, dispatch);
export default Login;
// export default injectWidgetId(connect(mapStateToProps, mapDispatchToProps)(Login));
