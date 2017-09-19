'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '../../src/App.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Spreadsheet = require('./components/Spreadsheet/Spreadsheet');

var _Spreadsheet2 = _interopRequireDefault(_Spreadsheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return { widgetId: this.props.widgetId };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'App', __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          },
          __self: this
        },
        _react2.default.createElement(
          _semanticUiReact.Container,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 13
            },
            __self: this
          },
          _react2.default.createElement(
            _semanticUiReact.Segment,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 14
              },
              __self: this
            },
            _react2.default.createElement(_Spreadsheet2.default, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 15
              },
              __self: this
            })
          )
        )
      );
    }
  }]);

  return App;
}(_react.Component);

App.propTypes = {
  widgetId: _propTypes2.default.string.isRequired
};

App.defaultProps = {
  widgetId: 'sheets'
};

App.childContextTypes = {
  widgetId: _propTypes2.default.string
};

exports.default = App;