'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SHEETS_API = exports.rootReducer = undefined;
var _jsxFileName = '../../src/index.js';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = require('react-redux');

var _index = require('./reducers/index');

require('./index.css');

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

var _Api = require('./utils/Api');

var _Api2 = _interopRequireDefault(_Api);

var _store = require('./store');

var _store2 = _interopRequireDefault(_store);

var _registerServiceWorker = require('./registerServiceWorker');

var _registerServiceWorker2 = _interopRequireDefault(_registerServiceWorker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable react/jsx-filename-extension */

_reactDom2.default.render(_react2.default.createElement(
  _reactRedux.Provider,
  { store: _store2.default, __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  },
  _react2.default.createElement(_App2.default, { widgetId: 'sheets', __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  })
), document.getElementById('root'));
(0, _registerServiceWorker2.default)();

exports.default = _App2.default;
exports.rootReducer = _index.sheets;
exports.SHEETS_API = _Api2.default;