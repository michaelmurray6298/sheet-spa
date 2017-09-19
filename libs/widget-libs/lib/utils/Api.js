'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var apiUrl = 'http://localhost:8003/graphql';

var SHEETS_API = function () {
  function SHEETS_API() {
    _classCallCheck(this, SHEETS_API);
  }

  _createClass(SHEETS_API, null, [{
    key: 'fetchData',
    value: function fetchData(request) {
      return fetch('' + apiUrl, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(request)
      }).then(function (response) {
        return response.json();
      }).catch(function (err) {
        throw err;
      });
    }
  }]);

  return SHEETS_API;
}();

exports.default = SHEETS_API;