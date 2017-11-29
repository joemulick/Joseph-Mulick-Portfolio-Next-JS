'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('next\\node_modules\\babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('next\\node_modules\\babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('next\\node_modules\\babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('next\\node_modules\\babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('next\\node_modules\\babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next\\dist\\lib\\head.js');

var _head2 = _interopRequireDefault(_head);

var _reactstrap = require('reactstrap');

var _analytics = require('../utils/analytics');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Joe\\Desktop\\UCLA-Extension-Files\\Github-Repos\\Joseph-Mulick-Portfolio-Next-JS\\components\\MyLayout.js';


var Layout = function (_React$Component) {
  (0, _inherits3.default)(Layout, _React$Component);

  function Layout() {
    (0, _classCallCheck3.default)(this, Layout);

    return (0, _possibleConstructorReturn3.default)(this, (Layout.__proto__ || (0, _getPrototypeOf2.default)(Layout)).apply(this, arguments));
  }

  (0, _createClass3.default)(Layout, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!window.GA_INITIALIZED) {
        (0, _analytics.initGA)();
        window.GA_INITIALIZED = true;
      }
      (0, _analytics.logPageView)();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, _react2.default.createElement('title', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, 'Joe Mulick Portolio & Blog || React.js / Next.js '), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }), _react2.default.createElement('meta', { name: 'google-site-verification', content: 'f_tg1hS9okaYh61Se_ln5zu_MKJDI_EnmLR72icNWIU', __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      })), _react2.default.createElement(_reactstrap.Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, this.props.children));
    }
  }]);

  return Layout;
}(_react2.default.Component);

exports.default = Layout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXE15TGF5b3V0LmpzIl0sIm5hbWVzIjpbIkhlYWQiLCJDb250YWluZXIiLCJpbml0R0EiLCJsb2dQYWdlVmlldyIsIkxheW91dCIsIndpbmRvdyIsIkdBX0lOSVRJQUxJWkVEIiwicHJvcHMiLCJjaGlsZHJlbiIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBUzs7QUFDVCxBQUFTLEFBQVEsQUFBbUI7Ozs7Ozs7SSxBQUVmOzs7Ozs7Ozs7Ozt3Q0FDRSxBQUNuQjtVQUFJLENBQUMsT0FBTCxBQUFZLGdCQUFnQixBQUMxQjtBQUNBO2VBQUEsQUFBTyxpQkFBUCxBQUF3QixBQUN6QjtBQUNEO0FBQ0Q7Ozs7NkJBQ1MsQUFDUjs2QkFDSSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSw4RkFBTSxNQUFOLEFBQVcsWUFBVyxTQUF0QixBQUE4QjtvQkFBOUI7c0JBRkYsQUFFRSxBQUNBO0FBREE7a0RBQ00sS0FBTixBQUFVLGNBQWEsTUFBdkIsQUFBNEI7b0JBQTVCO3NCQUhGLEFBR0UsQUFDQTtBQURBO2tEQUNNLE1BQU4sQUFBVyw0QkFBMkIsU0FBdEMsQUFBOEM7b0JBQTlDO3NCQUxKLEFBQ0UsQUFJRSxBQUVGO0FBRkU7MkJBRUYsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRztBQURIO0FBQUEsY0FDRyxBQUFLLE1BVGQsQUFDSSxBQU9FLEFBQ2MsQUFJckI7Ozs7O0VBdEJpQyxnQkFBTSxBOztrQkFBckIsQSIsImZpbGUiOiJNeUxheW91dC5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9Kb2UvRGVza3RvcC9VQ0xBLUV4dGVuc2lvbi1GaWxlcy9HaXRodWItUmVwb3MvSm9zZXBoLU11bGljay1Qb3J0Zm9saW8tTmV4dC1KUyJ9