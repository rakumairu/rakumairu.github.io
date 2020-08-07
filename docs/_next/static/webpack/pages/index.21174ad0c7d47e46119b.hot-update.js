webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Layout/Main.tsx":
/*!************************************!*\
  !*** ./components/Layout/Main.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./components/Layout/Header.tsx");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer */ "./components/Layout/Footer.tsx");
/* harmony import */ var _utils_StaticData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/StaticData */ "./utils/StaticData.ts");
var _this = undefined,
    _jsxFileName = "/home/rakumairu/projects/rakumairu/rakumairu-dev/components/Layout/Main.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Main = function Main(_ref) {
  var children = _ref.children,
      meta = _ref.meta;

  var _ref2 = meta || _utils_StaticData__WEBPACK_IMPORTED_MODULE_4__["defaultMeta"],
      title = _ref2.title,
      description = _ref2.description,
      image = _ref2.image,
      url = _ref2.url;

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, __jsx("meta", {
    charSet: "UTF-8",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }), __jsx("meta", {
    httpEquiv: "X-UA-Compatible",
    content: "IE=edge",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }), __jsx("meta", {
    name: "viewport",
    content: "height=device-height,width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  }), __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }, title || ''), __jsx("meta", {
    name: "description",
    content: description || '',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }), __jsx("meta", {
    name: "author",
    content: "Demaspira Aulia",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }), __jsx("meta", {
    property: "og:site_name",
    content: "Rakumairu DEV",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }), __jsx("meta", {
    property: "og:url",
    content: url || "http://localhost:3000",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }), __jsx("meta", {
    property: "og:title",
    content: title || '',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }), __jsx("meta", {
    property: "og:description",
    content: description || '',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }), __jsx("meta", {
    property: "og:image",
    content: image || "".concat("http://localhost:3000", "/assets/images/default-thumbnail.jpg"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }), __jsx("meta", {
    name: "base_url",
    content: "http://localhost:3000",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }), __jsx("link", {
    rel: "canonical",
    href: url,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }), __jsx("link", {
    rel: "alternate",
    hrefLang: "id",
    href: url,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }), __jsx("link", {
    rel: "alternate",
    hrefLang: "en",
    href: url,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }), __jsx("link", {
    rel: "alternate",
    hrefLang: "x-default",
    href: url,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }), __jsx("meta", {
    name: "mobile-web-app-capable",
    content: "yes",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }), __jsx("link", {
    rel: "shortcut icon",
    href: "".concat("http://localhost:3000", "/favicon.ico"),
    type: "image/x-icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }), __jsx("link", {
    rel: "apple-touch-icon",
    href: "".concat("http://localhost:3000", "/assets/images/mobile-favicon.png"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }), __jsx("link", {
    rel: "apple-touch-icon",
    sizes: "72x72",
    href: "".concat("http://localhost:3000", "/assets/images/mobile-favicon.png"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }), __jsx("link", {
    rel: "apple-touch-icon",
    sizes: "114x114",
    href: "".concat("http://localhost:3000", "/assets/images/mobile-favicon.png"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }), __jsx("link", {
    rel: "apple-touch-icon",
    sizes: "128x128",
    href: "".concat("http://localhost:3000", "/assets/images/mobile-favicon.png"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }), __jsx("link", {
    rel: "preconnect",
    href: "https://fonts.gstatic.com/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap",
    rel: "stylesheet",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "\\https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;1,400&display=swap",
    rel: "stylesheet",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap",
    rel: "stylesheet",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }, __jsx(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "min-h-screen",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 17
    }
  }, children), __jsx(_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 17
    }
  })));
};

_c = Main;
/* harmony default export */ __webpack_exports__["default"] = (Main);

var _c;

$RefreshReg$(_c, "Main");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQvTWFpbi50c3giXSwibmFtZXMiOlsiTWFpbiIsImNoaWxkcmVuIiwibWV0YSIsImRlZmF1bHRNZXRhIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImltYWdlIiwidXJsIiwicHJvY2VzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7QUFPQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUFnQztBQUFBLE1BQTdCQyxRQUE2QixRQUE3QkEsUUFBNkI7QUFBQSxNQUFuQkMsSUFBbUIsUUFBbkJBLElBQW1COztBQUFBLGNBQ0VBLElBQUksSUFBSUMsNkRBRFY7QUFBQSxNQUNqQ0MsS0FEaUMsU0FDakNBLEtBRGlDO0FBQUEsTUFDMUJDLFdBRDBCLFNBQzFCQSxXQUQwQjtBQUFBLE1BQ2JDLEtBRGEsU0FDYkEsS0FEYTtBQUFBLE1BQ05DLEdBRE0sU0FDTkEsR0FETTs7QUFFekMsU0FDSSxtRUFDSSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFNLFdBQU8sRUFBQyxPQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEQSxFQUVJO0FBQU0sYUFBUyxFQUFDLGlCQUFoQjtBQUFrQyxXQUFPLEVBQUMsU0FBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLEVBR0k7QUFBTSxRQUFJLEVBQUMsVUFBWDtBQUFzQixXQUFPLEVBQUMsaUdBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFISixFQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBU0gsS0FBSyxJQUFJLEVBQWxCLENBSkosRUFLSTtBQUFNLFFBQUksRUFBQyxhQUFYO0FBQXlCLFdBQU8sRUFBRUMsV0FBVyxJQUFJLEVBQWpEO0FB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aENKLEVBa0NJO0FBQU0sT0FBRyxFQUFDLFlBQVY7QUFBdUIsUUFBSSxFQUFDLDRCQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBbENKLEVBbUNJO0FBQU0sUUFBSSxFQUFDLDZHQUFYO0FBQXlILE9BQUcsRUFBQyxZQUE3SDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBbkNKLEVBb0NJO0FBQU0sUUFBSSxFQUFDLDJHQUFYO0FBQXNILE9BQUcsRUFBQyxZQUExSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBcENKLEVBcUNJO0FBQU0sUUFBSSxFQUFDLG1FQUFYO0FBQStFLE9BQUcsRUFBQyxZQUFuRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBckNKLENBREosRUF3REk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUk7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tQLFFBREwsQ0FGSixFQUtJLE1BQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxKLENBeERKLENBREo7QUFrRUgsQ0FwRUQ7O0tBQU1ELEk7QUFzRVNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjIxMTc0YWQwYzdkNDdlNDYxMTliLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vRm9vdGVyJztcbmltcG9ydCB7IElNZXRhIH0gZnJvbSAnLi4vLi4vdXRpbHMvSW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBkZWZhdWx0TWV0YSB9IGZyb20gJy4uLy4uL3V0aWxzL1N0YXRpY0RhdGEnO1xuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlXG4gICAgbWV0YT86IElNZXRhXG59XG5cbmNvbnN0IE1haW4gPSAoeyBjaGlsZHJlbiwgbWV0YSB9OiBJUHJvcHMpID0+IHtcbiAgICBjb25zdCB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgaW1hZ2UsIHVybCB9ID0gbWV0YSB8fCBkZWZhdWx0TWV0YVxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJVVEYtOFwiIC8+XG4gICAgICAgICAgICAgICAgPG1ldGEgaHR0cEVxdWl2PVwiWC1VQS1Db21wYXRpYmxlXCIgY29udGVudD1cIklFPWVkZ2VcIiAvPlxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJoZWlnaHQ9ZGV2aWNlLWhlaWdodCx3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wLCBtYXhpbXVtLXNjYWxlPTEuMCwgdXNlci1zY2FsYWJsZT1ub1wiIC8+XG4gICAgICAgICAgICAgICAgPHRpdGxlPnsgdGl0bGUgfHwgJyd9PC90aXRsZT5cbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtkZXNjcmlwdGlvbiB8fCAnJ30gLz5cbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiYXV0aG9yXCIgY29udGVudD1cIkRlbWFzcGlyYSBBdWxpYVwiIC8+XG4gICAgICAgICAgICAgICAgey8qIDxtZXRhIG5hbWU9XCJnb29nbGUtc2l0ZS12ZXJpZmljYXRpb25cIiBjb250ZW50PVwicGNjbkZlZkxJWTVNa2xLSWs5QklkVEdHQUFDNUx1UmsyYW51M1F1YmVFMFwiIC8+ICovfVxuICAgICAgICAgICAgICAgIHsvKiA8bWV0YSBuYW1lPVwiYWhyZWZzLXNpdGUtdmVyaWZpY2F0aW9uXCIgY29udGVudD1cImVmZDljNTM4NTYwMGZkODQyNWY3NWQwMDZmNTU2YjRiMjcxYjg4ZTU0ZDExNDUwMmU3ZWY0NmVjYmQxZGUzMzVcIiAvPiAqL31cbiAgICAgICAgICAgICAgICB7LyogPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y2FyZFwiIGNvbnRlbnQ9XCJzdW1tYXJ5XCIgLz5cbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpzaXRlXCIgY29udGVudD1cIkBqZW5kZWxhMzYwXCIgLz5cbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpjcmVhdG9yXCIgY29udGVudD1cIkBqZW5kZWxhMzYwXCIgLz4gKi99XG4gICAgICAgICAgICAgICAgey8qIDxtZXRhIHByb3BlcnR5PVwiZmI6YXBwX2lkXCIgY29udGVudD1cIjI2MDE4MDA4MTEwNjAwNFwiIC8+ICovfVxuICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6c2l0ZV9uYW1lXCIgY29udGVudD1cIlJha3VtYWlydSBERVZcIiAvPlxuICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD17dXJsIHx8IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1VSTH0gLz5cbiAgICAgICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17dGl0bGUgfHwgJyd9IC8+XG4gICAgICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Rlc2NyaXB0aW9uIHx8ICcnfSAvPlxuICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PXtpbWFnZSB8fCBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19VUkx9L2Fzc2V0cy9pbWFnZXMvZGVmYXVsdC10aHVtYm5haWwuanBnYH0gLz5cbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiYmFzZV91cmxcIiBjb250ZW50PXtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19VUkx9IC8+XG4gICAgICAgICAgICAgICAgey8qIDxtZXRhIG5hbWU9XCJfdG9rZW5cIiBjb250ZW50PVwiRmo2MFVlM0dwMENHYzlhUFVVVFFlVDdYemVVeU55aFpFQUhvaGVjU1wiIC8+ICovfVxuXG5cbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJjYW5vbmljYWxcIiBocmVmPXt1cmx9IC8+XG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiYWx0ZXJuYXRlXCIgaHJlZkxhbmc9XCJpZFwiIGhyZWY9e3VybH0gLz5cbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJhbHRlcm5hdGVcIiBocmVmTGFuZz1cImVuXCIgaHJlZj17dXJsfSAvPlxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImFsdGVybmF0ZVwiIGhyZWZMYW5nPVwieC1kZWZhdWx0XCIgaHJlZj17dXJsfSAvPlxuXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cIm1vYmlsZS13ZWItYXBwLWNhcGFibGVcIiBjb250ZW50PVwieWVzXCIgLz5cbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzaG9ydGN1dCBpY29uXCIgaHJlZj17YCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfVVJMfS9mYXZpY29uLmljb2B9IHR5cGU9XCJpbWFnZS94LWljb25cIiAvPlxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBocmVmPXtgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19VUkx9L2Fzc2V0cy9pbWFnZXMvbW9iaWxlLWZhdmljb24ucG5nYH0gLz5cbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCI3Mng3MlwiIGhyZWY9e2Ake3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1VSTH0vYXNzZXRzL2ltYWdlcy9tb2JpbGUtZmF2aWNvbi5wbmdgfSAvPlxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjExNHgxMTRcIiBocmVmPXtgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19VUkx9L2Fzc2V0cy9pbWFnZXMvbW9iaWxlLWZhdmljb24ucG5nYH0gLz5cbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCIxMjh4MTI4XCIgaHJlZj17YCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfVVJMfS9hc3NldHMvaW1hZ2VzL21vYmlsZS1mYXZpY29uLnBuZ2B9IC8+XG5cbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vXCIgLz5cbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOml0YWwsd2dodEAwLDQwMDswLDYwMDswLDcwMDsxLDQwMDsxLDYwMDsxLDcwMCZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cbiAgICAgICAgICAgICAgICA8bGluayBocmVmPVwiXFxodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2FuczppdGFsLHdnaHRAMCwzMDA7MCw0MDA7MCw2MDA7MCw3MDA7MSw0MDAmZGlzcGxheT1zd2FwXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG4gICAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvK01vbm8mZGlzcGxheT1zd2FwXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG5cbiAgICAgICAgICAgICAgICB7LyogPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL3d3dy5nb29nbGUtYW5hbHl0aWNzLmNvbVwiIC8+ICovfVxuXG4gICAgICAgICAgICAgICAgey8qIEdvb2dsZSBBbmFseXRpY3MgKi99XG4gICAgICAgICAgICAgICAgey8qIDxzY3JpcHQgYXN5bmMgc3JjPXtgaHR0cHM6Ly93d3cuZ29vZ2xldGFnbWFuYWdlci5jb20vZ3RhZy9qcz9pZD0keyBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19UUkFDS0lOR19JRCB9YH0+PC9zY3JpcHQ+XG4gICAgICAgICAgICAgICAgPHNjcmlwdFxuICAgICAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgX19odG1sOiBgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmRhdGFMYXllciA9IHdpbmRvdy5kYXRhTGF5ZXIgfHwgW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gZ3RhZygpe2RhdGFMYXllci5wdXNoKGFyZ3VtZW50cyk7fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGd0YWcoJ2pzJywgbmV3IERhdGUoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBndGFnKCdjb25maWcnLCAnJHsgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfVFJBQ0tJTkdfSUQgfScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+ICovfVxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haW4iXSwic291cmNlUm9vdCI6IiJ9