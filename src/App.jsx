import React, { Component } from 'react';
import { Segment, Container } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Spreadsheet from './components/Spreadsheet/Spreadsheet';

class App extends Component {
  getChildContext() {
    return { widgetId: this.props.widgetId };
  }
  render() {
    return (
      <div className="App">
        <Container>
          <Segment>
            <Spreadsheet />
          </Segment>
        </Container>
      </div>
    );
  }
}
App.propTypes = {
  widgetId: PropTypes.string.isRequired,
};

App.defaultProps = {
  widgetId: 'sheets',
};

App.childContextTypes = {
  widgetId: PropTypes.string,
};

export default App;
