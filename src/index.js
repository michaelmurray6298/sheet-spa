import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { sheets as rootReducer } from './reducers/index';
import './index.css';
import App from './App';
import SHEETS_API from './utils/Api';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

/* eslint-disable react/jsx-filename-extension */

ReactDOM.render(
  <Provider store={store}>
    <App widgetId="sheets" />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();

export { rootReducer, SHEETS_API };
