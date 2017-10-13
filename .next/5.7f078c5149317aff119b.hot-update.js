webpackHotUpdate(5,{

/***/ 394:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _MyLayout = __webpack_require__(415);

var _MyLayout2 = _interopRequireDefault(_MyLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Joe\\Desktop\\UCLA-Extension-Files\\Github-Repos\\Joseph-Mulick-Portfolio-Next-JS\\pages\\index.js?entry';

exports.default = function () {
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, _react2.default.createElement(_MyLayout2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, 'Hello Next.js')));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJMYXlvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVksQUFFbkI7Ozs7Ozs7O2tCQUFlLFlBQUE7eUJBQ2IsY0FBQTs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEsR0FBQSxrQkFDRSxBQUFDOztnQkFBRDtrQkFBQSxBQUNBO0FBREE7QUFBQSxxQkFDQSxjQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FIVyxBQUNiLEFBQ0UsQUFDQTtBQUhKIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkM6L1VzZXJzL0pvZS9EZXNrdG9wL1VDTEEtRXh0ZW5zaW9uLUZpbGVzL0dpdGh1Yi1SZXBvcy9Kb3NlcGgtTXVsaWNrLVBvcnRmb2xpby1OZXh0LUpTIn0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\Users\\Joe\\Desktop\\UCLA-Extension-Files\\Github-Repos\\Joseph-Mulick-Portfolio-Next-JS\\pages\\index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Joe\\Desktop\\UCLA-Extension-Files\\Github-Repos\\Joseph-Mulick-Portfolio-Next-JS\\pages\\index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 415:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _Header = __webpack_require__(414);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Joe\\Desktop\\UCLA-Extension-Files\\Github-Repos\\Joseph-Mulick-Portfolio-Next-JS\\components\\MyLayout.js';


var layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

var Layout = function Layout(props) {
  return _react2.default.createElement('div', { style: layoutStyle, __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement(_Header2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), props.children);
};

exports.default = Layout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXE15TGF5b3V0LmpzIl0sIm5hbWVzIjpbIkhlYWRlciIsImxheW91dFN0eWxlIiwibWFyZ2luIiwicGFkZGluZyIsImJvcmRlciIsIkxheW91dCIsInByb3BzIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVk7Ozs7Ozs7OztBQUVuQixJQUFNO1VBQWMsQUFDVixBQUNSO1dBRmtCLEFBRVQsQUFDVDtVQUhGLEFBQW9CLEFBR1Y7QUFIVSxBQUNsQjs7QUFLRixJQUFNLFNBQVMsU0FBVCxBQUFTLE9BQUEsQUFBQyxPQUFEO3lCQUNiLGNBQUEsU0FBSyxPQUFMLEFBQVk7Z0JBQVo7a0JBQUEsQUFDRTtBQURGO0dBQUEsa0JBQ0UsQUFBQzs7Z0JBQUQ7a0JBREYsQUFDRSxBQUNDO0FBREQ7QUFBQSxZQUZXLEFBQ2IsQUFFUztBQUhYLEFBT0E7O2tCQUFBLEFBQWUiLCJmaWxlIjoiTXlMYXlvdXQuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvSm9lL0Rlc2t0b3AvVUNMQS1FeHRlbnNpb24tRmlsZXMvR2l0aHViLVJlcG9zL0pvc2VwaC1NdWxpY2stUG9ydGZvbGlvLU5leHQtSlMifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\Users\\Joe\\Desktop\\UCLA-Extension-Files\\Github-Repos\\Joseph-Mulick-Portfolio-Next-JS\\components\\MyLayout.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Joe\\Desktop\\UCLA-Extension-Files\\Github-Repos\\Joseph-Mulick-Portfolio-Next-JS\\components\\MyLayout.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS43ZjA3OGM1MTQ5MzE3YWZmMTE5Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/NDA3YTVkNiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL015TGF5b3V0LmpzPzQwN2E1ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0LmpzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxyXG4gIDxkaXY+XHJcbiAgICA8TGF5b3V0PlxyXG4gICAgPHA+SGVsbG8gTmV4dC5qczwvcD5cclxuICAgIDwvTGF5b3V0PlxyXG4gIDwvZGl2PlxyXG4pXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiLCJpbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJ1xyXG5cclxuY29uc3QgbGF5b3V0U3R5bGUgPSB7XHJcbiAgbWFyZ2luOiAyMCxcclxuICBwYWRkaW5nOiAyMCxcclxuICBib3JkZXI6ICcxcHggc29saWQgI0RERCdcclxufVxyXG5cclxuY29uc3QgTGF5b3V0ID0gKHByb3BzKSA9PiAoXHJcbiAgPGRpdiBzdHlsZT17bGF5b3V0U3R5bGV9PlxyXG4gICAgPEhlYWRlciAvPlxyXG4gICAge3Byb3BzLmNoaWxkcmVufVxyXG4gIDwvZGl2PlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL015TGF5b3V0LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTs7Ozs7OztBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFIQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTs7Ozs7Ozs7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFLQTtBQUNBO0FBREE7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==