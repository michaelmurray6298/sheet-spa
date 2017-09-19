'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sheets = undefined;

var _redux = require('redux');

var _actions = require('../actions');

/* eslint-disable max-len */
function sheet() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { range: '', majorDimension: '', header: { headerCellIds: [], headerCellsById: {} }, rowIds: [], rowsById: {} };
  var action = arguments[1];

  switch (action.type) {
    case _actions.SHEET_RETRIEVED:
      return {
        range: action.sheetData.sheets.sheets[0].range,
        majorDimension: action.sheetData.sheets.sheets[0].majorDimension,
        header: { headerCellIds: action.sheetData.sheets.sheets[0].values[0].map(function (value, idx) {
            return idx + 1;
          }),
          headerCellsById: action.sheetData.sheets.sheets[0].values[0].reduce(function (result, value, idx) {
            var cells = result;
            cells[idx + 1] = value;
            return result;
          }, {}) },
        rowIds: action.sheetData.sheets.sheets[0].values.slice(1, action.sheetData.sheets.sheets[0].values.length).map(function (row, idx) {
          return idx + 1;
        }),
        rowsById: action.sheetData.sheets.sheets[0].values.slice(1, action.sheetData.sheets.sheets[0].values.length).reduce(function (result2, value, idx) {
          var cells = result2;
          cells[idx + 1] = { cellIds: value.map(function (val, cellIdx) {
              return cellIdx + 1;
            }),
            cellsById: value.reduce(function (result3, cellValue, cellIdx) {
              var cellResult = result3;
              cellResult[cellIdx + 1] = cellValue;
              return result3;
            }, {}) };
          return result2;
        }, {})
      };
    default:
      return state;
  }
}
var sheets = exports.sheets = (0, _redux.combineReducers)({
  sheet: sheet
});
var initialState = {
  ids: ['sheets'],
  byId: {}
};

var widgets = function widgets() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];
  return Object.assign({}, state, {
    byId: {
      sheets: sheet(state.byId.sheet, action)
    }
  });
};

var rootReducer = (0, _redux.combineReducers)({
  widgets: widgets
});

exports.default = rootReducer;