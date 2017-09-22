import React, { Component } from 'react';
import PropTypes from 'prop-types';
import renderIf from 'render-if';
import { connect } from 'react-redux';
import { Segment, Container } from 'semantic-ui-react';
import SheetForm from './components/SheetForm/SheetForm';
import Login from './components/Login/Login';
import Spreadsheet from './components/Spreadsheet/Spreadsheet';
import NavBar from './components/NavBar/NavBar';
import WIDGET_ID from './constants/index';

export class App extends Component {
  getChildContext() {
    return { widgetId: this.props.widgetId };
  }
  render() {
    const { currentPage } = this.props;
    return (
      <div className="App">
        <Container >

          {renderIf(currentPage === 'login')(<Login />)}
          {renderIf(currentPage !== 'login')(<NavBar />)}
          {renderIf(currentPage === 'form')(<SheetForm />)}
          {renderIf(currentPage === 'sheets')(<Segment>
            <Spreadsheet />
          </Segment>)}
        </Container>
      </div>
    );
  }
}
App.propTypes = {
  currentPage: PropTypes.string.isRequired,
  widgetId: PropTypes.string.isRequired,
};

App.defaultProps = {
  currentPage: '',
  widgetId: WIDGET_ID,
};

App.childContextTypes = {
  widgetId: PropTypes.string,
};

export const mapStateToProps = (state, ownProps) => {
  const id = ownProps.widgetId;
  const currentPage = state.widgets.byId[id].currentPage.render;

  return {
    currentPage,
  };
};

export default connect(mapStateToProps)(App);
