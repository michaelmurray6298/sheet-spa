import React from 'react';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import renderIf from 'render-if';
import PropTypes from 'prop-types';
import BackButton from '../BackButton/BackButton';
import Logout from '../Logout/Logout';
import SheetList from '../SheetList/SheetList';
import WIDGET_ID from '../../constants/index';
/* eslint-disable no-shadow */
export const NavBar = ({ currentPage }) => (
  <Grid verticalAlign={'top'} >
    <Grid.Row centered columns="4">
      {renderIf(currentPage === 'sheets')(<Grid.Column width="4" verticalAlign={'middle'}><BackButton />
      </Grid.Column>)}
      {renderIf(currentPage === 'sheets')(<Grid.Column width="4" verticalAlign={'middle'}><SheetList />
      </Grid.Column>)}
      {renderIf(currentPage !== 'login')(<Grid.Column width="4" verticalAlign={'middle'}>
        <Logout />
      </Grid.Column>)}
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
