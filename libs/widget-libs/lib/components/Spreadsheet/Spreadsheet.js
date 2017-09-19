'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '../../src/components/Spreadsheet/Spreadsheet.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _semanticUiReact = require('semantic-ui-react');

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _actions = require('../../actions');

var _HeaderCell = require('../HeaderCell/HeaderCell');

var _HeaderCell2 = _interopRequireDefault(_HeaderCell);

var _Row = require('../Row/Row');

var _Row2 = _interopRequireDefault(_Row);

var _utils = require('../../utils/utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Spreadsheet = function (_Component) {
  _inherits(Spreadsheet, _Component);

  function Spreadsheet() {
    _classCallCheck(this, Spreadsheet);

    return _possibleConstructorReturn(this, (Spreadsheet.__proto__ || Object.getPrototypeOf(Spreadsheet)).apply(this, arguments));
  }

  _createClass(Spreadsheet, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.fetchSheet('1UcfQsQGTAAtjvyxv948z3hf0qiUnMNZF90-GcD7MF9g', 'Sheet1');
    }
    /* eslint-disable max-len */

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var headerCellIds = this.props.sheet.header.headerCellIds;
      var rowIds = this.props.sheet.rowIds;

      return _react2.default.createElement(
        'div',
        { className: 'spreadsheet', __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: this
        },
        _react2.default.createElement(
          _semanticUiReact.Table,
          { celled: true, striped: true, definition: true, __source: {
              fileName: _jsxFileName,
              lineNumber: 25
            },
            __self: this
          },
          _react2.default.createElement(
            _semanticUiReact.Table.Header,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 26
              },
              __self: this
            },
            _react2.default.createElement(
              _semanticUiReact.Table.Row,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 27
                },
                __self: this
              },
              headerCellIds.map(function (headerCellId) {
                return _react2.default.createElement(_HeaderCell2.default, { key: headerCellId, headerCellId: headerCellId, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                  },
                  __self: _this2
                });
              })
            )
          ),
          _react2.default.createElement(
            _semanticUiReact.Table.Body,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 31
              },
              __self: this
            },
            rowIds.map(function (rowId) {
              return _react2.default.createElement(_Row2.default, { key: rowId, rowId: rowId, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 32
                },
                __self: _this2
              });
            })
          )
        )
      );
    }
  }]);

  return Spreadsheet;
}(_react.Component);

Spreadsheet.propTypes = {
  fetchSheet: _propTypes2.default.func.isRequired,
  sheet: _propTypes2.default.shape({ range: '', majorDimension: '', header: { headerCellIds: {}, headerCellsById: {} }, rowIds: {}, rowsById: {} }).isRequired
};

var mapStateToProps = function mapStateToProps(state, ownProps) {
  var id = ownProps.widgetId;
  var sheet = state.widgets.byId[id];
  return {
    sheet: sheet
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    fetchSheet: _actions.fetchSheet
  }, dispatch);
};

exports.default = (0, _utils2.default)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Spreadsheet));