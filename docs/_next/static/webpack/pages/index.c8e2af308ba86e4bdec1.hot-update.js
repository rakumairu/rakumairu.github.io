webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Layout/Header.tsx":
/*!**************************************!*\
  !*** ./components/Layout/Header.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "/home/rakumairu/projects/rakumairu/rakumairu-dev/components/Layout/Header.tsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Header = function Header() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isScrolled = _useState[0],
      setScrolled = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    window.addEventListener('scroll', handleScrollThrottled);
    return function () {
      window.removeEventListener('scroll', handleScrollThrottled);
    };
  }, []);

  var handleScroll = function handleScroll() {
    setScrolled(document.documentElement.scrollTop > 0 && !isScrolled);
  };

  var handleScrollThrottled = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(lodash__WEBPACK_IMPORTED_MODULE_1___default.a.throttle(handleScroll, 500), []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "fixed top-0 w-full z-20 transition-colors duration-300 ease-in-out border-b text-white ".concat(isScrolled ? 'bg-black-light' : 'border-transparent'),
    style: {
      height: 63
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flex relative items-center container h-full",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: process.env.NEXT_PUBLIC_URL,
    className: "cursor-pointer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 21
    }
  }, "Rakumairu DEV"), __jsx("div", {
    className: "ml-auto flex items-center h-full",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 21
    }
  }, __jsx("a", {
    href: "#",
    className: "px-4 flex items-center font-semibold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 25
    }
  }, "BLOG")))));
};

_s(Header, "8Y/KYct25HQkXbscXpX3lolsquA=");

_c = Header;
/* harmony default export */ __webpack_exports__["default"] = (Header);

var _c;

$RefreshReg$(_c, "Header");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQvSGVhZGVyLnRzeCJdLCJuYW1lcyI6WyJIZWFkZXIiLCJ1c2VTdGF0ZSIsImlzU2Nyb2xsZWQiLCJzZXRTY3JvbGxlZCIsInVzZUVmZmVjdCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVTY3JvbGxUaHJvdHRsZWQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaGFuZGxlU2Nyb2xsIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUb3AiLCJ1c2VDYWxsYmFjayIsIl8iLCJ0aHJvdHRsZSIsImhlaWdodCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19VUkwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUFBLGtCQUNpQkMsc0RBQVEsQ0FBQyxLQUFELENBRHpCO0FBQUEsTUFDVkMsVUFEVTtBQUFBLE1BQ0VDLFdBREY7O0FBR2pCQyx5REFBUyxDQUFDLFlBQU07QUFDWkMsVUFBTSxDQUFDQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ0MscUJBQWxDO0FBQ0EsV0FBTyxZQUFNO0FBQ1RGLFlBQU0sQ0FBQ0csbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNELHFCQUFyQztBQUNILEtBRkQ7QUFHSCxHQUxRLEVBS04sRUFMTSxDQUFUOztBQU9BLE1BQU1FLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDdkJOLGVBQVcsQ0FBQ08sUUFBUSxDQUFDQyxlQUFULENBQXlCQyxTQUF6QixHQUFxQyxDQUFyQyxJQUEwQyxDQUFDVixVQUE1QyxDQUFYO0FBQ0gsR0FGRDs7QUFJQSxNQUFNSyxxQkFBcUIsR0FBR00seURBQVcsQ0FBQ0MsNkNBQUMsQ0FBQ0MsUUFBRixDQUFXTixZQUFYLEVBQXlCLEdBQXpCLENBQUQsRUFBZ0MsRUFBaEMsQ0FBekM7QUFFQSxTQUNJLG1FQUNJO0FBQUssYUFBUyxtR0FBNkZQLFVBQVUsR0FBRyxnQkFBSCxHQUFzQixvQkFBN0gsQ0FBZDtBQUFtSyxTQUFLLEVBQUU7QUFBRWMsWUFBTSxFQUFFO0FBQVYsS0FBMUs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUywrQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBRyxRQUFJLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxlQUFyQjtBQUFzQyxhQUFTLGtCQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLEVBSUk7QUFBSyxhQUFTLEVBQUMsa0NBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUcsUUFBSSxFQUFDLEdBQVI7QUFBWSxhQUFTLEVBQUMsc0NBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixDQUpKLENBREosQ0FESixDQURKO0FBY0gsQ0E5QkQ7O0dBQU1uQixNOztLQUFBQSxNO0FBZ0NTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jOGUyYWYzMDhiYTg2ZTRiZGVjMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIlxuXG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiAgICBjb25zdCBbaXNTY3JvbGxlZCwgc2V0U2Nyb2xsZWRdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsVGhyb3R0bGVkKVxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbFRocm90dGxlZClcbiAgICAgICAgfVxuICAgIH0sIFtdKVxuXG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuICAgICAgICBzZXRTY3JvbGxlZChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID4gMCAmJiAhaXNTY3JvbGxlZClcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVTY3JvbGxUaHJvdHRsZWQgPSB1c2VDYWxsYmFjayhfLnRocm90dGxlKGhhbmRsZVNjcm9sbCwgNTAwKSwgW10pXG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZml4ZWQgdG9wLTAgdy1mdWxsIHotMjAgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0IGJvcmRlci1iIHRleHQtd2hpdGUgJHsgaXNTY3JvbGxlZCA/ICdiZy1ibGFjay1saWdodCcgOiAnYm9yZGVyLXRyYW5zcGFyZW50J31gfSBzdHlsZT17eyBoZWlnaHQ6IDYzIH19PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZmxleCByZWxhdGl2ZSBpdGVtcy1jZW50ZXIgY29udGFpbmVyIGgtZnVsbGB9PlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19VUkx9IGNsYXNzTmFtZT17YGN1cnNvci1wb2ludGVyYH0+XG4gICAgICAgICAgICAgICAgICAgICAgICBSYWt1bWFpcnUgREVWXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC1hdXRvIGZsZXggaXRlbXMtY2VudGVyIGgtZnVsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJweC00IGZsZXggaXRlbXMtY2VudGVyIGZvbnQtc2VtaWJvbGRcIj5CTE9HPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlciJdLCJzb3VyY2VSb290IjoiIn0=