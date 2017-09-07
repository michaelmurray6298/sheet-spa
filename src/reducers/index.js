import { combineReducers } from 'redux';
import { SHEET_RETRIEVED } from '../actions';

function sheet(state = { range: '', majorDimension: '', header: { cellIds: [], cellsById: {} }, rowIds: [], rowsById: {} }, action) {
  switch (action.type) {
    case SHEET_RETRIEVED:
      return {
        range: action.range,
        majorDimension: action.majorDimension,
        header: { cellIds: action.header.map((value, idx) => idx + 1),
          cellsById: action.header.reduce((result, value, idx) => {
            const cells = result;
            cells[idx + 1] = value;
            return result;
          }, {}) },
        rowIds: action.rows.map((row, idx) => idx + 1),
        rowsById: action.rows.reduce((result, value, idx) => {
          const cells = result;
          cells[idx + 1] = { cellIds: value.map((val, cellIdx) => cellIdx + 1),
            cellsById: value.reduce((result2, cellValue, cellIdx) => {
              const cellResult = result2;
              cellResult[cellIdx + 1] = cellValue;
              return result;
            }, {}) };
          return result;
        }, {}),
      };
    default:
      return state;
  }
}

export default combineReducers({
  sheet,
});
