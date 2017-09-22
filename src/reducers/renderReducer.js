import { RENDER_LOGIN, RENDER_FORM, RENDER_SHEETS, LOGOUT,
} from '../actions/renderActions';

const initialState = {
  render: 'login',
};

/* eslint-disable no-debugger */

const currentPage = (state = initialState, action) => {
  // debugger;
  switch (action.type) {
    case RENDER_LOGIN:
      return { ...state, render: 'login' };

    case RENDER_FORM:
      return { ...state, render: 'form' };

    case RENDER_SHEETS:

      return { ...state, render: 'sheets' };

    case LOGOUT:
      return initialState;

    default:
      return state;
  }
};

export default currentPage;
