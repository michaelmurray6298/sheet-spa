import data from '../seeds'
export const SHEET_RETRIEVED = 'SHEET_RETRIEVED'

export function fetchSheet() {
  return async (dispatch, getState) => {
    const range = data.range;
    const majorDimension = data.majorDimension;
    const header = data.values[0];
    const rows = data.values.slice(1, data.values.length)
    await dispatch({
      type: SHEET_RETRIEVED,
      range: range,
      majorDimension: majorDimension,
      header: header,
      rows: rows,
    })
  }
}
