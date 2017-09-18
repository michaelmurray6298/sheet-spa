import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers';
import SHEET_API from './utils/Api';

/* eslint-disable no-underscore-dangle */

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunkMiddleware.withExtraArgument({ SHEET_API })),
  logger,
);


export default store;
