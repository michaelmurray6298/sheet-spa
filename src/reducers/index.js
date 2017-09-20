import { combineReducers } from 'redux';
import { SHEET_RETRIEVED } from '../actions';
/* eslint-disable max-len */
function sheet(state = { range: '', majorDimension: '', header: { headerCellIds: [], headerCellsById: {} }, rowIds: [], rowsById: {} }, action) {
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
    default:
      return state;
  }
}
export const sheets = sheet;
const initialState = {
  ids: ['sheets'],
  byId: {},
};

const widgets = (state = initialState, action) => ({
  ...state,
  byId: {
    sheets: sheet(state.byId.sheet, action),
  },
});

const rootReducer = combineReducers({
  widgets,
});

export default rootReducer;
