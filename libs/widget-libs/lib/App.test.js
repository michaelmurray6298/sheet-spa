'use strict';

var _jsxFileName = '../../src/App.test.jsx';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

it('renders without crashing', function () {
  var div = document.createElement('div');
  _reactDom2.default.render(_react2.default.createElement(_App2.default, { widgetId: 'sheets', __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }), div);
});