import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
// import logger from 'redux-logger';
import rootReducer from './reducers/index';
import SHEETS_API from './utils/Api';
/* eslint-disable no-underscore-dangle */
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
// logger,

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware.withExtraArgument({ SHEETS_API })),
);


export default store;
