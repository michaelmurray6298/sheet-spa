'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '../../src/components/Row/Row.jsx';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _semanticUiReact = require('semantic-ui-react');

var _reactRedux = require('react-redux');

var _Cell = require('../Cell/Cell');

var _Cell2 = _interopRequireDefault(_Cell);

var _utils = require('../../utils/utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Row = function Row(props) {
  return _react2.default.createElement(
    _semanticUiReact.Table.Row,
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: undefined
    },
    props.rowsById['' + props.rowId].cellIds.map(function (cellId) {
      return _react2.default.createElement(_Cell2.default, { key: cellId, cellId: cellId, rowId: props.rowId, __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: undefined
      });
    })
  );
};

Row.propTypes = {
  rowId: _propTypes2.default.number.isRequired,
  rowsById: _propTypes2.default.shape({ cellIds: [], cellsById: {} }).isRequired
};

var mapStateToProps = function mapStateToProps(state, ownProps) {
  var id = ownProps.widgetId;
  var rowIds = state.widgets.byId[id].rowIds;
  var rowsById = state.widgets.byId[id].rowsById;
  return {
    rowIds: rowIds,
    rowsById: rowsById
  };
};

exports.default = (0, _utils2.default)((0, _reactRedux.connect)(mapStateToProps)(Row));