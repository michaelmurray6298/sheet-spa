'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '../../src/utils/utils.js'; /* eslint-disable react/jsx-filename-extension */

exports.default = injectWidgetId;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function injectWidgetId(Component) {
  var _this = this;

  var Wrapper = function Wrapper(props, context) {
    return _react2.default.createElement(Component, Object.assign({}, props, { widgetId: context.widgetId, __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: _this
    }));
  };

  Wrapper.contextTypes = { widgetId: _propTypes2.default.string };
  return Wrapper;
}