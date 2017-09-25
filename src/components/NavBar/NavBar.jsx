import React from 'react';
import { Grid,
  Card } from 'semantic-ui-react';
import { connect } from 'react-redux';
import renderIf from 'render-if';
import PropTypes from 'prop-types';
import BackButton from '../BackButton/BackButton';
import Logout from '../Logout/Logout';
import WIDGET_ID from '../../constants/index';
/* eslint-disable no-shadow */
export const NavBar = ({ currentPage }) => (
  <Grid verticalAlign={'top'} >
    <Grid.Row >
      <Grid.Column verticalAlign={'middle'}>
        <Card.Content>
          {renderIf(currentPage === 'sheets')(<BackButton />)}
          {renderIf(currentPage !== 'login')(<Logout />)}
        </Card.Content>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);


NavBar.propTypes = {
  currentPage: PropTypes.string.isRequired,
};
export const mapStateToProps = (state) => {
  const id = WIDGET_ID;
  const currentPage = state.widgets.byId[id].currentPage.render;

  return {
    currentPage,
  };
};

export default connect(mapStateToProps)(NavBar);
