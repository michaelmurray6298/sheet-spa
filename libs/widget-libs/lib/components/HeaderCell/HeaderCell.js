'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '../../src/components/HeaderCell/HeaderCell.jsx';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _semanticUiReact = require('semantic-ui-react');

var _reactRedux = require('react-redux');

var _utils = require('../../utils/utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HeaderCell = function HeaderCell(_ref) {
  var headerCellId = _ref.headerCellId,
      headerCellsById = _ref.headerCellsById;
  return _react2.default.createElement(
    _semanticUiReact.Table.HeaderCell,
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: undefined
    },
    '' + headerCellsById[headerCellId]
  );
};

HeaderCell.propTypes = {
  headerCellId: _propTypes2.default.number.isRequired,
  headerCellsById: _propTypes2.default.shape({ 1: 'Header A' }).isRequired
};

var mapStateToProps = function mapStateToProps(state, ownProps) {
  var id = ownProps.widgetId;
  var headerCellIds = state.widgets.byId[id].header.headerCellIds;
  var headerCellsById = state.widgets.byId[id].header.headerCellsById;
  return {
    headerCellIds: headerCellIds,
    headerCellsById: headerCellsById
  };
};

exports.default = (0, _utils2.default)((0, _reactRedux.connect)(mapStateToProps)(HeaderCell));