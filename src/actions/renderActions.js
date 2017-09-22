export const RENDER_LOGIN = 'RENDER_LOGIN';
export const RENDER_FORM = 'RENDER_FORM';
export const RENDER_SHEETS = 'RENDER_SHEETS';
export const LOGOUT = 'LOGOUT';

export const displayLogin = (dispatch) => {
  dispatch({
    type: RENDER_LOGIN,
  });
};
export const displayForm = () => (dispatch) => {
  dispatch({
    type: RENDER_FORM,
  });
};

export const logout = () => ({
  type: LOGOUT,
});
