'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchSheet = fetchSheet;
var SHEET_RETRIEVED = exports.SHEET_RETRIEVED = 'SHEET_RETRIEVED';
/* eslint-disable no-debugger */

function fetchSheet(spreadsheetId, sheetName) {
  var queryString = '{\n      sheets(spreadsheetId:"' + spreadsheetId + '", sheetName:"' + sheetName + '") {\n        spreadsheetId\n        sheets {\n          sheetName\n          majorDimension\n          range\n          values\n        }\n      }\n    }';
  var request = { query: queryString };
  return function (dispatch, getState, _ref) {
    var SHEETS_API = _ref.SHEETS_API;

    SHEETS_API.fetchData(request).then(function (response) {
      return response.data;
    }).then(function (sheet) {
      dispatch({
        type: SHEET_RETRIEVED,
        sheetData: sheet
      });
    });
  };
}