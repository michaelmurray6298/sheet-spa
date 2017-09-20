import {
  RENDER_LOGIN,
} from '../actions/loginAction';

const renderPage = (state = { render: 'login', range: '', majorDimension: '', header: { headerCellIds: [], headerCellsById: {} }, rowIds: [], rowsById: {} }, action) => {
  switch (action.type) {
    case RENDER_LOGIN:
      return { ...state, render: 'login' };

    default:
      return state;
  }
};

export default renderPage;
