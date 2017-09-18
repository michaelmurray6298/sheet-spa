export const SHEET_RETRIEVED = 'SHEET_RETRIEVED';

export function fetchSheet(spreadsheetId, sheetName) {
  const queryString = `{
  sheets(spreadsheetId:${spreadsheetId}, sheetName:${sheetName}) {
    spreadsheetId
    sheets{
      sheetName
      majorDimension
      range
      values
    }
  }
}`;
  const request = { query: queryString };
  return (dispatch, { SHEET_API }) => {
    SHEET_API.fetchData(request)
      .then(response => response.data.sheets)
      .then((sheets) => {
        dispatch({
          type: SHEET_RETRIEVED,
          sheet: sheets,
        });
      });
  };
}
