export const SHEET_RETRIEVED = 'SHEET_RETRIEVED';
/* eslint-disable no-debugger */

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
      });
  };
}
