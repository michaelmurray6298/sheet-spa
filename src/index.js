import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
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
