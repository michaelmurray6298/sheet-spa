import { combineReducers } from 'redux';
import { SHEET_RETRIEVED, STORE_SHEET_DATA } from '../actions';
import WIDGET_ID from '../constants/index';
import currentPage from './renderReducer';
/* eslint-disable max-len */
function sheet(state = { range: '', majorDimension: '', header: { headerCellIds: [], headerCellsById: {} }, rowIds: [], rowsById: {}, spreadsheetId: '', sheetName: '' }, action) {
  switch (action.type) {
    case SHEET_RETRIEVED:
      return {
        range: action.sheetData.sheets.sheets[0].range,
        majorDimension: action.sheetData.sheets.sheets[0].majorDimension,
        header: { headerCellIds: action.sheetData.sheets.sheets[0].values[0].map((value, idx) => idx + 1),
          headerCellsById: action.sheetData.sheets.sheets[0].values[0].reduce((result, value, idx) => {
            const cells = result;
            cells[idx + 1] = value;
            return result;
          }, {}) },
        rowIds: action.sheetData.sheets.sheets[0].values.slice(1, action.sheetData.sheets.sheets[0].values.length).map((row, idx) => idx + 1),
        rowsById: action.sheetData.sheets.sheets[0].values.slice(1, action.sheetData.sheets.sheets[0].values.length).reduce((result2, value, idx) => {
          const cells = result2;
          cells[idx + 1] = { cellIds: value.map((val, cellIdx) => cellIdx + 1),
            cellsById: value.reduce((result3, cellValue, cellIdx) => {
              const cellResult = result3;
              cellResult[cellIdx + 1] = cellValue;
              return result3;
            }, {}) };
          return result2;
        }, {}),
      };
    case STORE_SHEET_DATA:
      return {
        ...state,
        spreadsheetId: action.spreadsheetId,
        sheetName: action.sheetName,
      };
    default:
      return state;
  }
}
export const sheets = combineReducers({
  sheet,
  currentPage,
});
const initialState = {
  ids: [WIDGET_ID],
  byId: {},
};

const widgets = (state = initialState, action) => ({
  ...state,
  byId: {
    [WIDGET_ID]: sheets(state.byId[WIDGET_ID], action),
  },
});

const rootReducer = combineReducers({
  widgets,
});

export default rootReducer;
