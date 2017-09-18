'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '../../src/components/Cell/Cell.jsx';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _semanticUiReact = require('semantic-ui-react');

var _reactRedux = require('react-redux');

var _utils = require('../../utils/utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Cell = function Cell(_ref) {
  var cellId = _ref.cellId,
      cellsById = _ref.cellsById;
  return _react2.default.createElement(
    _semanticUiReact.Table.Cell,
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: undefined
    },
    '' + cellsById[cellId]
  );
};

Cell.propTypes = {
  cellId: _propTypes2.default.number.isRequired,
  cellsById: _propTypes2.default.shape({ 1: 'Cell A2' }).isRequired
};

var mapStateToProps = function mapStateToProps(state, ownProps) {
  var id = ownProps.widgetId;
  var cellIds = state.widgets.byId[id].rowsById[ownProps.rowId].cellIds;
  var cellsById = state.widgets.byId[id].rowsById[ownProps.rowId].cellsById;
  return {
    cellIds: cellIds,
    cellsById: cellsById
  };
};

exports.default = (0, _utils2.default)((0, _reactRedux.connect)(mapStateToProps)(Cell));