import { combineReducers } from 'redux';
import { SHEET_RETRIEVED } from '../actions';

function sheet(state = { range: '', majorDimension: '', header: { headerCellIds: [], headerCellsById: {} }, rowIds: [], rowsById: {} }, action) {
  switch (action.type) {
    case SHEET_RETRIEVED:
      return {
        range: action.range,
        majorDimension: action.majorDimension,
        header: { headerCellIds: action.header.map((value, idx) => idx + 1),
          headerCellsById: action.header.reduce((result, value, idx) => {
            const cells = result;
            cells[idx + 1] = value;
            return result;
          }, {}) },
        rowIds: action.rows.map((row, idx) => idx + 1),
        rowsById: action.rows.reduce((result2, value, idx) => {
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

export default combineReducers({
  sheet,
});
