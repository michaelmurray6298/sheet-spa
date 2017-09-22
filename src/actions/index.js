import { RENDER_SHEETS } from './renderActions';

export const SHEET_RETRIEVED = 'SHEET_RETRIEVED';
export const STORE_SHEET_DATA = 'STORE_SHEET_DATA';

export function fetchSheet(spreadsheetId, sheetName) {
  const queryString =
  `{
      sheets(spreadsheetId:"${spreadsheetId}", sheetName:"${sheetName}") {
        spreadsheetId
        sheets {
          sheetName
          majorDimension
          range
          values
        }
      }
    }`;
  const request = { query: queryString };
  return (dispatch, getState, { SHEETS_API }) => {
    SHEETS_API.fetchData(request)
      .then(response => response.data)
      .then((sheet) => {
        dispatch({
          type: SHEET_RETRIEVED,
          sheetData: sheet,
        });
        dispatch({
          type: RENDER_SHEETS,
        });
      });
  };
}

export function storeSheetData(spreadsheetId, sheetName) {
  return (dispatch) => {
    dispatch({
      type: STORE_SHEET_DATA,
      spreadsheetId,
      sheetName,
    });
    dispatch(fetchSheet(spreadsheetId, sheetName));
  };
}
