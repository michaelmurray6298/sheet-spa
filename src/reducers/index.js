import { combineReducers } from 'redux'
import { SHEET_RETRIEVED } from '../actions'

function sheet(state = { range: '', majorDimension: '', header: {cellIds: [], cellsById: {}}, rowIds: [],  rowsById: {}}, action) {
  switch (action.type) {
    case SHEET_RETRIEVED:
    const { range, majorDimension, header, rows } = action
    return {
      range: range,
      majorDimension: majorDimension,
      header: {cellIds: header.map((value, idx) => {return idx + 1}), cellsById: header.reduce((result, value, idx) => {
          result[idx + 1] = value;
          return result
        }, {})}, rowIds: rows.map((row, idx) => {return idx}), rowsById: rows.reduce((result, value, idx) => {
          result[idx + 1] = {cellIds: value.map((value, cellIdx) => {return cellIdx + 1}), cellsById: value.reduce((result, cellValue, cellIdx) => {
              result[cellIdx + 1] = cellValue;
              return result
            }, {})}
          return result
        }, {})
      }

    default:
    return state
  }
}

export default combineReducers({
  sheet,
})
