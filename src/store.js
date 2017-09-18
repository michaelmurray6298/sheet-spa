import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';
import SHEET_API from './utils/Api';

/* eslint-disable no-underscore-dangle */

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware.withExtraArgument({ SHEET_API })),
);


export default store;
