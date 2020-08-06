webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./styles/modules/LazyLoad.module.css":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./styles/modules/LazyLoad.module.css ***!
  \***********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".LazyLoad_lazy-load__2ftxY {\n  transition: all 0.75s ease-in-out;\n}\n\n.LazyLoad_lazy-load__2ftxY > *:first-child {\n  transition: all 0.75s ease-in-out;\n}\n\n.LazyLoad_hide__a6iXR > *:first-child {\n  opacity: 0;\n}\n\n.LazyLoad_show__1LB9j > *:first-child {\n  transform: translateY(0);\n  opacity: 1;\n}\n\n.LazyLoad_hide__a6iXR.LazyLoad_top__12Hvi > *:first-child {\n  transform: translateY(-25px);\n}\n\n.LazyLoad_show__1LB9j.LazyLoad_top__12Hvi > *:first-child {\n  transform: translateY(0);\n}\n\n.LazyLoad_hide__a6iXR.LazyLoad_bottom__1WQ80 > *:first-child {\n  transform: translateY(25px);\n}\n\n.LazyLoad_show__1LB9j.LazyLoad_bottom__1WQ80 > *:first-child {\n  transform: translateY(0);\n}\n\n.LazyLoad_hide__a6iXR.LazyLoad_left__1R4vf > *:first-child {\n  transform: translateX(-25px);\n}\n\n.LazyLoad_show__1LB9j.LazyLoad_left__1R4vf > *:first-child {\n  transform: translateX(0);\n}\n\n/* .hide.right > *:first-child {\n    transform: translateX(25px);\n}\n\n.show.right > *:first-child {\n    transform: translateX(0);\n} */", "",{"version":3,"sources":["/home/rakumairu/projects/rakumairu/rakumairu-dev/styles/modules/LazyLoad.module.css"],"names":[],"mappings":"AAAA;EACI,iCAAiC;AACrC;;AAEA;EACI,iCAAiC;AACrC;;AAEA;EACI,UAAU;AACd;;AAEA;EACI,wBAAwB;EACxB,UAAU;AACd;;AAEA;EACI,4BAA4B;AAChC;;AAEA;EACI,wBAAwB;AAC5B;;AAEA;EACI,2BAA2B;AAC/B;;AAEA;EACI,wBAAwB;AAC5B;;AAEA;EACI,4BAA4B;AAChC;;AAEA;EACI,wBAAwB;AAC5B;;AAEA;;;;;;GAMG","file":"LazyLoad.module.css","sourcesContent":[".lazy-load {\n    transition: all 0.75s ease-in-out;\n}\n\n.lazy-load > *:first-child {\n    transition: all 0.75s ease-in-out;\n}\n\n.hide > *:first-child {\n    opacity: 0;\n}\n\n.show > *:first-child {\n    transform: translateY(0);\n    opacity: 1;\n}\n\n.hide.top > *:first-child {\n    transform: translateY(-25px);\n}\n\n.show.top > *:first-child {\n    transform: translateY(0);\n}\n\n.hide.bottom > *:first-child {\n    transform: translateY(25px);\n}\n\n.show.bottom > *:first-child {\n    transform: translateY(0);\n}\n\n.hide.left > *:first-child {\n    transform: translateX(-25px);\n}\n\n.show.left > *:first-child {\n    transform: translateX(0);\n}\n\n/* .hide.right > *:first-child {\n    transform: translateX(25px);\n}\n\n.show.right > *:first-child {\n    transform: translateX(0);\n} */"]}]);
// Exports
exports.locals = {
	"lazy-load": "LazyLoad_lazy-load__2ftxY",
	"hide": "LazyLoad_hide__a6iXR",
	"show": "LazyLoad_show__1LB9j",
	"top": "LazyLoad_top__12Hvi",
	"bottom": "LazyLoad_bottom__1WQ80",
	"left": "LazyLoad_left__1R4vf"
};
module.exports = exports;


/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout_Main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout/Main */ "./components/Layout/Main.tsx");
/* harmony import */ var _components_LazyLoad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/LazyLoad */ "./components/LazyLoad.tsx");
var _this = undefined,
    _jsxFileName = "/home/rakumairu/projects/rakumairu/rakumairu-dev/pages/index.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var meta = {
  title: "Hi! Welcome to my page | Rakumairu DEV",
  description: "Hello there, I'm a Frontend Developer, you can see my work and my contact here, I also have some article that might interest you",
  url: "http://localhost:3000"
};

var Home = function Home() {
  return __jsx(_components_Layout_Main__WEBPACK_IMPORTED_MODULE_1__["default"], {
    meta: meta,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "relative h-screen md:pb-32 bg-gray-ea",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "h-full bg-cover bg-no-repeat",
    style: {
      backgroundImage: 'url(/static/images/splash.jpg)',
      filter: 'brightness(.4)'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "absolute inset-0 flex flex-col items-center justify-center md:pb-40",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "font-mono flex flex-col w-full md:w-auto px-5 md:px-0 tracking-tight",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 21
    }
  }, __jsx("h1", {
    className: "text-4xl md:text-6xl text-white leading-tight",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 25
    }
  }, "Hello!"), __jsx("h1", {
    className: "text-4xl md:text-6xl text-white leading-tight",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 25
    }
  }, "I'm ", __jsx("span", {
    className: "text-main",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 33
    }
  }, "Demas"), "pira"), __jsx("div", {
    className: "flex items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 25
    }
  }, __jsx("h1", {
    className: "text-4xl md:text-6xl text-white leading-tight",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 29
    }
  }, "aka ", __jsx("span", {
    className: "text-main",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 37
    }
  }, "rakumairu"), __jsx("span", {
    className: "blink",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 81
    }
  }, "_"))))), __jsx("div", {
    className: "hidden md:flex absolute bottom-0 w-full container left-0 right-0 items-stretch justify-center pb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "card bg-main-dark text-white rounded shadow-5-layer flex flex-col items-start p-4 mx-8 transition duration-200 ease-linear hover:bg-accent hover:text-black",
    style: {
      width: '25%'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 21
    }
  }, __jsx("h5", {
    className: "text-2xl font-semibold pb-2 mb-4 border-b-2 border-white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 25
    }
  }, "Job Offer?"), __jsx("p", {
    className: "text-white opacity-75 mb-8",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 25
    }
  }, "I'm currently not open for job but let's keep in touch!"), __jsx("button", {
    className: "mt-auto bg-white rounded-lg px-4 py-2 text-black text-lg font-semibold shadow-4-layer outline-none focus:outline-none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 25
    }
  }, "Contact Me!")), __jsx("div", {
    className: "card bg-main-dark text-white rounded shadow-5-layer flex flex-col items-start p-4 mx-8 transition duration-200 ease-linear hover:bg-accent hover:text-black",
    style: {
      width: '25%'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 21
    }
  }, __jsx("h5", {
    className: "text-2xl font-semibold pb-2 mb-4 border-b-2 border-white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 25
    }
  }, "Dedicated Project?"), __jsx("p", {
    className: "text-white opacity-75 mb-8",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 25
    }
  }, "If you have a project that you want to realize, let's discuss it together!"), __jsx("button", {
    className: "mt-auto bg-white rounded-lg px-4 py-2 text-black text-lg font-semibold shadow-4-layer outline-none focus:outline-none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 25
    }
  }, "Hit Me Up!")), __jsx("div", {
    className: "card bg-main-dark text-white rounded shadow-5-layer flex flex-col items-start p-4 mx-8 transition duration-200 ease-linear hover:bg-accent hover:text-black",
    style: {
      width: '25%'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 21
    }
  }, __jsx("h5", {
    className: "text-2xl font-semibold pb-2 mb-4 border-b-2 border-white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 25
    }
  }, "Just Wanna be Friends?"), __jsx("p", {
    className: "text-white opacity-75 mb-8",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 25
    }
  }, "Let's be friends and talk about all the things that we like!"), __jsx("button", {
    className: "mt-auto bg-white rounded-lg px-4 py-2 text-black text-lg font-semibold shadow-4-layer outline-none focus:outline-none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 25
    }
  }, "DM Me!"))), __jsx("div", {
    className: "flex md:hidden items-center sticky -mt-12 bottom-0 justify-end -ml-4 w-full",
    style: {
      filter: 'brightness(0) saturate(100%) invert(100%) sepia(3%) saturate(12%) hue-rotate(103deg) brightness(105%) contrast(105%)'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "https://github.com/rakumairu",
    className: "bounce mb-4",
    target: "__blank",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/static/icons/github.svg",
    alt: "linkedin",
    className: "w-8 mr-4 transition-transform duration-150 ease-linear transform hover:-translate-y-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 25
    }
  })), __jsx("a", {
    href: "https://www.linkedin.com/in/demaspira/",
    className: "bounce-alt mb-4",
    target: "__blank",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "/static/icons/linkedin.svg",
    alt: "linkedin",
    className: "w-8 transition-transform duration-150 ease-linear transform hover:-translate-y-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 25
    }
  })))), __jsx("div", {
    className: "pt-24 md:pt-32 pb-32 md:pb-40 bg-gray-ea clip",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "lg:mx-32 relative",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 21
    }
  }, __jsx(_components_LazyLoad__WEBPACK_IMPORTED_MODULE_2__["default"], {
    direction: "top",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 25
    }
  }, __jsx("h3", {
    className: "z-10 absolute left-0 top-0 section-header text-center -mt-12 md:-mt-20 ml-1 md:ml-0 font-bold whitespace-no-wrap",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 29
    }
  }, "What I do ?")), __jsx(_components_LazyLoad__WEBPACK_IMPORTED_MODULE_2__["default"], {
    direction: "left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "flex flex-col md:flex-row items-stretch shadow-5-layer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "bg-main-dark w-full md:w-1/2 text-white p-8 md:p-10",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 33
    }
  }, __jsx("h5", {
    className: "text-3xl md:text-5xl leading-tight md:leading-snug font-bold mb-10 md:mb-16",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 37
    }
  }, "I'm a Frontend Web Developer"), __jsx("span", {
    className: "border-b-4 border-white block mb-6 md:mb-8",
    style: {
      width: 64
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 37
    }
  }), __jsx("p", {
    className: "text-sm md:text-base text-opacity-25",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 37
    }
  }, "With 1 year experience in developing website for my company and some side projects. I also have some experience in backend development (just the basic tho).")), __jsx("div", {
    className: "bg-white flex w-full md:w-1/2 p-8 md:p-10 pb-6 flex-col justify-between",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "flex items-center self-start flex-wrap justify-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 37
    }
  }, __jsx("a", {
    href: "https://reactjs.org/",
    target: "__blank",
    className: "brand-logo mx-4 my-2 transform transition-transform duration-300 ease-in-out hover:scale-150",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 41
    }
  }, __jsx("img", {
    src: "/static/icons/react-logo.svg",
    alt: "react-logo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 45
    }
  })), __jsx("a", {
    href: "https://nextjs.org/",
    target: "__blank",
    className: "brand-logo mx-4 my-2 transform transition-transform duration-300 ease-in-out hover:scale-150",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 41
    }
  }, __jsx("img", {
    src: "/static/icons/nextjs-logo.svg",
    alt: "nextjs-logo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 45
    }
  })), __jsx("a", {
    href: "https://vuejs.org/",
    target: "__blank",
    className: "brand-logo mx-4 my-2 transform transition-transform duration-300 ease-in-out hover:scale-150",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 41
    }
  }, __jsx("img", {
    src: "/static/icons/vue-logo.png",
    alt: "vuejs-logo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 45
    }
  })), __jsx("a", {
    href: "https://nuxtjs.org/",
    target: "__blank",
    className: "brand-logo mx-4 my-2 transform transition-transform duration-300 ease-in-out hover:scale-150",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 41
    }
  }, __jsx("img", {
    src: "/static/icons/nuxtjs-logo.svg",
    alt: "nuxtjs-logo",
    className: "p-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 45
    }
  })), __jsx("a", {
    href: "https://laravel.com/",
    target: "__blank",
    className: "brand-logo mx-4 my-2 transform transition-transform duration-300 ease-in-out hover:scale-150",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 41
    }
  }, __jsx("img", {
    src: "/static/icons/laravel-logo.png",
    alt: "laravel-logo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 45
    }
  })), __jsx("a", {
    href: "https://codeigniter.com/",
    target: "__blank",
    className: "brand-logo mx-4 my-2 transform transition-transform duration-300 ease-in-out hover:scale-150",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 41
    }
  }, __jsx("img", {
    src: "/static/icons/codeigniter-logo.png",
    alt: "codeigniter-logo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 45
    }
  })), __jsx("a", {
    href: "https://flask.palletsprojects.com/",
    target: "__blank",
    className: "brand-logo mx-4 my-2 transform transition-transform duration-300 ease-in-out hover:scale-150",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 41
    }
  }, __jsx("img", {
    src: "/static/icons/flask-logo.png",
    alt: "flask-logo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 45
    }
  })), __jsx("a", {
    href: "https://bottlepy.org/",
    target: "__blank",
    className: "brand-logo mx-4 my-2 transform transition-transform duration-300 ease-in-out hover:scale-150",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 41
    }
  }, __jsx("img", {
    src: "/static/icons/bottle-logo.png",
    alt: "bottle-logo",
    className: "p-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 45
    }
  })), __jsx("a", {
    href: "https://material-ui.com/",
    target: "__blank",
    className: "brand-logo mx-4 my-2 transform transition-transform duration-300 ease-in-out hover:scale-150",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 41
    }
  }, __jsx("img", {
    src: "/static/icons/materialui-logo.svg",
    alt: "materialui-logo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 45
    }
  })), __jsx("a", {
    href: "https://getbootstrap.com/",
    target: "__blank",
    className: "brand-logo mx-4 my-2 transform transition-transform duration-300 ease-in-out hover:scale-150",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 41
    }
  }, __jsx("img", {
    src: "/static/icons/bootstrap-logo.svg",
    alt: "bootstrap-logo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 45
    }
  })), __jsx("a", {
    href: "https://tailwindcss.com/",
    target: "__blank",
    className: "brand-logo mx-4 my-2 transform transition-transform duration-300 ease-in-out hover:scale-150",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 41
    }
  }, __jsx("img", {
    src: "/static/icons/tailwindcss-logo.svg",
    alt: "tailwindcss-logo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 45
    }
  })), __jsx("a", {
    href: "https://bulma.io/",
    target: "__blank",
    className: "brand-logo mx-4 my-2 transform transition-transform duration-300 ease-in-out hover:scale-150",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 41
    }
  }, __jsx("img", {
    src: "/static/icons/bulma-logo.png",
    alt: "bulma-logo",
    className: "p-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 45
    }
  })), __jsx("a", {
    href: "https://www.mysql.com/",
    target: "__blank",
    className: "brand-logo mx-4 my-2 transform transition-transform duration-300 ease-in-out hover:scale-150",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 41
    }
  }, __jsx("img", {
    src: "/static/icons/mysql-logo.svg",
    alt: "mysql-logo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 45
    }
  })), __jsx("a", {
    href: "https://www.postgresql.org/",
    target: "__blank",
    className: "brand-logo mx-4 my-2 transform transition-transform duration-300 ease-in-out hover:scale-150",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 41
    }
  }, __jsx("img", {
    src: "/static/icons/postgresql-logo.png",
    alt: "postgresql-logo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 45
    }
  }))), __jsx("p", {
    className: "text-xs text-black-48 mt-8 md:mt-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 37
    }
  }, "*Most used: reactjs, next js, laravel, tailwindcss, material-ui, mysql"))))))), __jsx("div", {
    className: "pt-24 md:pt-32 pb-24 md:pb-40 bg-white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "lg:mx-32 relative",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 21
    }
  }, __jsx(_components_LazyLoad__WEBPACK_IMPORTED_MODULE_2__["default"], {
    direction: "top",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 25
    }
  }, __jsx("h3", {
    className: "absolute left-0 top-0 section-header text-center -mt-12 md:-mt-20 ml-1 md:ml-0 font-bold whitespace-no-wrap z-10",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 29
    }
  }, "Projects .")), __jsx(_components_LazyLoad__WEBPACK_IMPORTED_MODULE_2__["default"], {
    direction: "left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "flex flex-col md:flex-row items-stretch shadow-5-layer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "bg-accent w-full md:w-1/2 text-white p-8 md:p-10",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 33
    }
  }, __jsx("h5", {
    className: "text-3xl md:text-5xl leading-tight md:leading-snug font-bold mb-10 md:mb-16",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 37
    }
  }, "My Past / Recent Projects"), __jsx("span", {
    className: "border-b-4 border-white block mb-6 md:mb-8",
    style: {
      width: 64
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 37
    }
  }), __jsx("p", {
    className: "text-opacity-25",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 37
    }
  }, "Some of my notable projects since my college year, including my final projects for graduation.")), __jsx("div", {
    className: "bg-white flex w-full md:w-1/2 p-8 md:p-10 flex-col justify-center items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 33
    }
  }, __jsx("p", {
    className: "text-lg text-black-48",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 37
    }
  }, "Coming Soon"))))))), __jsx("div", {
    className: "pb-16 md:pb-32 bg-white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "lg:mx-32",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 21
    }
  }, __jsx(_components_LazyLoad__WEBPACK_IMPORTED_MODULE_2__["default"], {
    direction: "left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 25
    }
  }, __jsx("h3", {
    className: "font-bold section-header text-black mb-10 text-right md:text-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 29
    }
  }, "Experience .")), __jsx("div", {
    className: "w-full flex flex-col",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "flex -mx-5 md:-mx-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "w-8 md:w-1/2 flex justify-end",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "hidden md:flex w-auto items-center justify-center px-8 cursor-default",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 37
    }
  }, __jsx(_components_LazyLoad__WEBPACK_IMPORTED_MODULE_2__["default"], {
    direction: "top",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 41
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 45
    }
  }, __jsx("p", {
    className: "section-header font-bold text-black text-opacity-25 transition duration-200 ease-in-out hover:text-main hover:text-opacity-100",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 49
    }
  }, "2018")))), __jsx("div", {
    className: "w-8 bg-main px-2 py-8",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "hidden md:flex flex-col items-center h-full justify-center text-lg text-white font-bold leading-none text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 41
    }
  }, "~"), __jsx("span", {
    className: "flex md:hidden flex-col items-center h-full justify-center text-lg text-white font-bold leading-none text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 41
    }
  }, "2", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 45
    }
  }), "0", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 45
    }
  }), "1", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 45
    }
  }), "8"))), __jsx("div", {
    className: "w-auto md:w-1/2 flex justify-start",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 33
    }
  }, __jsx(_components_LazyLoad__WEBPACK_IMPORTED_MODULE_2__["default"], {
    direction: "bottom",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "h-full bg-white flex flex-col text-lg px-2 py-8 justify-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 41
    }
  }, __jsx("h5", {
    className: "text-xl font-semibold text-main",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 45
    }
  }, "Process Mining Research"), __jsx("p", {
    className: "mb-4 text-black-48",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 45
    }
  }, "Contribute in my lecturer's research as Fullstack Developer about process mining."), __jsx("h5", {
    className: "text-xl font-semibold text-main",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 45
    }
  }, "Aid Other Final Project"), __jsx("p", {
    className: "mb-4 text-black-48",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 45
    }
  }, "Develop an app for warehouse administration for a Civil Engineering student."), __jsx("h5", {
    className: "text-xl font-semibold text-main",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 45
    }
  }, "Started My Final Project"), __jsx("p", {
    className: "text-black-48",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 45
    }
  }, "Started my Final Project for graduation about process mining which use Angular for the frontend and using Flask for the backend and calculation."))))), __jsx("div", {
    className: "flex -mx-5 md:-mx-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "w-8 md:w-1/2 flex justify-end md:justify-start md:order-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "w-8 bg-accent px-2 py-8",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "hidden md:flex flex-col items-center h-full justify-center text-lg text-white font-bold leading-none text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 41
    }
  }, "~"), __jsx("span", {
    className: "flex md:hidden flex-col items-center h-full justify-center text-lg text-white font-bold leading-none text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 41
    }
  }, "2", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 45
    }
  }), "0", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 45
    }
  }), "1", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 45
    }
  }), "9")), __jsx("div", {
    className: "w-auto hidden md:flex items-center justify-center px-8 cursor-default",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 37
    }
  }, __jsx(_components_LazyLoad__WEBPACK_IMPORTED_MODULE_2__["default"], {
    direction: "top",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 41
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 45
    }
  }, __jsx("p", {
    className: "section-header font-bold text-black text-opacity-25 transition duration-200 ease-in-out hover:text-accent hover:text-opacity-100",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 49
    }
  }, "2019"))))), __jsx("div", {
    className: "w-auto md:w-1/2 flex justify-start md:justify-end md:order-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 33
    }
  }, __jsx(_components_LazyLoad__WEBPACK_IMPORTED_MODULE_2__["default"], {
    direction: "bottom",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "h-full bg-white flex flex-col text-lg px-2 py-8 md:text-right justify-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 41
    }
  }, __jsx("h5", {
    className: "text-xl font-semibold text-accent",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 45
    }
  }, "Finish My Final Project"), __jsx("p", {
    className: "mb-4 text-black-48",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 45
    }
  }, "Finishes my final project for graduation and publish the results as a journal article in ", __jsx("a", {
    className: "text-accent hover:text-accent-dark",
    href: "http://journals.ums.ac.id/index.php/khif",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 168
    }
  }, "KHIF"), ", and here is the link to ", __jsx("a", {
    className: "text-accent hover:text-accent-dark",
    href: "https://www.researchgate.net/publication/339382239_The_Design_of_Exploratory_Application_and_Preprocessing_of_Event_Log_Data_in_LMS_Moodle-Based_Online_Learning_Activities_for_Process_Mining",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 300
    }
  }, "My Article"), "."), __jsx("h5", {
    className: "text-xl font-semibold text-accent",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 45
    }
  }, "Fraud Detection Research"), __jsx("p", {
    className: "mb-4 text-black-48",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 45
    }
  }, "Contribute in my lecturer's research as Frontend Developer about fraud detection using Isolation Forest Algorithm."), __jsx("h5", {
    className: "text-xl font-semibold text-accent mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 45
    }
  }, "Graduated College!!!"), __jsx("h5", {
    className: "text-xl font-semibold text-accent",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 45
    }
  }, "First Full-time Work"), __jsx("p", {
    className: "text-black-48",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 45
    }
  }, "I join Emporia Digital as Frontend Developer, we're using Laravel and Lumen here."))))), __jsx("div", {
    className: "flex -mx-5 md:-mx-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "w-8 md:w-1/2 flex justify-end",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "hidden md:flex w-auto items-center justify-center px-8",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 37
    }
  }, __jsx(_components_LazyLoad__WEBPACK_IMPORTED_MODULE_2__["default"], {
    direction: "top",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 41
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 45
    }
  }, __jsx("p", {
    className: "section-header font-bold text-black text-opacity-25 transition duration-200 ease-in-out hover:text-main hover:text-opacity-100 cursor-default",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 49
    }
  }, "2020")))), __jsx("div", {
    className: "w-8 bg-main px-2 py-8",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 37
    }
  }, __jsx("span", {
    className: "hidden md:flex flex-col items-center h-full justify-center text-lg text-white font-bold leading-none text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 41
    }
  }, "~"), __jsx("span", {
    className: "flex md:hidden flex-col items-center h-full justify-center text-lg text-white font-bold leading-none text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 41
    }
  }, "2", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 45
    }
  }), "0", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 45
    }
  }), "2", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 45
    }
  }), "0"))), __jsx("div", {
    className: "w-auto md:w-1/2 flex justify-start",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 33
    }
  }, __jsx(_components_LazyLoad__WEBPACK_IMPORTED_MODULE_2__["default"], {
    direction: "bottom",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "h-full bg-white flex flex-col text-lg px-2 py-8 justify-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 41
    }
  }, __jsx("h5", {
    className: "text-xl font-semibold text-main",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 45
    }
  }, "Mutated to Child Company"), __jsx("p", {
    className: "mb-4 text-black-48",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 45
    }
  }, "Got mutated to other child company as fullstack developer and network engineering."), __jsx("h5", {
    className: "text-xl font-semibold text-main",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 45
    }
  }, "Join Jendela360"), __jsx("p", {
    className: "mb-4 text-black-48",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 45
    }
  }, "Join ", __jsx("a", {
    className: "text-main hover:text-main-dark",
    href: "https://jendela360.com/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 84
    }
  }, "Jendela360"), " as Frontend Developer, we're using React and NextJs here."), __jsx("h5", {
    className: "text-xl font-semibold text-main",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 45
    }
  }, "Create My First Portfolio Page!!!"))))), __jsx("div", {
    className: "flex -mx-5 md:-mx-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "w-8 md:w-1/2 flex justify-end md:justify-start md:order-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "w-8 h-full bg-accent flex flex-col items-center justify-center text-lg text-white font-bold leading-none px-2 py-8 text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 37
    }
  }, ".", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 42
    }
  }), ".", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 48
    }
  }), "."), __jsx("div", {
    className: "w-auto hidden md:flex items-center justify-center px-8",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 37
    }
  }, __jsx(_components_LazyLoad__WEBPACK_IMPORTED_MODULE_2__["default"], {
    direction: "top",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 41
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 45
    }
  }, __jsx("p", {
    className: "section-header font-bold text-black text-opacity-25 transition duration-200 ease-in-out hover:text-accent hover:text-opacity-100 cursor-default",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 49
    }
  }, ". . ."))))), __jsx("div", {
    className: "w-auto md:w-1/2 flex justify-start md:justify-end md:order-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 33
    }
  }, __jsx(_components_LazyLoad__WEBPACK_IMPORTED_MODULE_2__["default"], {
    direction: "bottom",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "h-full bg-white flex flex-col text-lg px-2 py-8 text-right justify-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 41
    }
  }, __jsx("h5", {
    className: "text-xl font-semibold text-accent",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 45
    }
  }, "Let's see where I'll go next!"))))))))));
};

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL21vZHVsZXMvTGF6eUxvYWQubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIm1ldGEiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwidXJsIiwicHJvY2VzcyIsIk5FWFRfUFVCTElDX1VSTCIsIkhvbWUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJmaWx0ZXIiLCJ3aWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyx3R0FBbUQ7QUFDN0Y7QUFDQTtBQUNBLGNBQWMsUUFBUywrQkFBK0Isc0NBQXNDLEdBQUcsZ0RBQWdELHNDQUFzQyxHQUFHLDJDQUEyQyxlQUFlLEdBQUcsMkNBQTJDLDZCQUE2QixlQUFlLEdBQUcsK0RBQStELGlDQUFpQyxHQUFHLCtEQUErRCw2QkFBNkIsR0FBRyxrRUFBa0UsZ0NBQWdDLEdBQUcsa0VBQWtFLDZCQUE2QixHQUFHLGdFQUFnRSxpQ0FBaUMsR0FBRyxnRUFBZ0UsNkJBQTZCLEdBQUcsb0NBQW9DLGtDQUFrQyxHQUFHLGlDQUFpQywrQkFBK0IsR0FBRyxVQUFVLDBJQUEwSSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxVQUFVLGtFQUFrRSx3Q0FBd0MsR0FBRyxnQ0FBZ0Msd0NBQXdDLEdBQUcsMkJBQTJCLGlCQUFpQixHQUFHLDJCQUEyQiwrQkFBK0IsaUJBQWlCLEdBQUcsK0JBQStCLG1DQUFtQyxHQUFHLCtCQUErQiwrQkFBK0IsR0FBRyxrQ0FBa0Msa0NBQWtDLEdBQUcsa0NBQWtDLCtCQUErQixHQUFHLGdDQUFnQyxtQ0FBbUMsR0FBRyxnQ0FBZ0MsK0JBQStC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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBRyxhQUFTLEVBQUMsaUpBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLENBREosQ0FESixDQUpKLENBREosRUFhSTtBQUFLLGFBQVMsRUFBQyw4REFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw0REFBRDtBQUFVLGFBQVMsRUFBQyxRQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsMkVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUksYUFBUyxFQUFDLG1DQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUNBREosQ0FESixDQURKLENBYkosQ0FoSEosQ0FKSixDQURKLENBREosQ0FwSUosQ0FESjtBQXNSSCxDQXZSRDs7S0FBTUgsSTtBQXlSU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMWFmNTIwYWEzZGE5ZWRmNjIxN2MuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5MYXp5TG9hZF9sYXp5LWxvYWRfXzJmdHhZIHtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjc1cyBlYXNlLWluLW91dDtcXG59XFxuXFxuLkxhenlMb2FkX2xhenktbG9hZF9fMmZ0eFkgPiAqOmZpcnN0LWNoaWxkIHtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjc1cyBlYXNlLWluLW91dDtcXG59XFxuXFxuLkxhenlMb2FkX2hpZGVfX2E2aVhSID4gKjpmaXJzdC1jaGlsZCB7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4uTGF6eUxvYWRfc2hvd19fMUxCOWogPiAqOmZpcnN0LWNoaWxkIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5MYXp5TG9hZF9oaWRlX19hNmlYUi5MYXp5TG9hZF90b3BfXzEySHZpID4gKjpmaXJzdC1jaGlsZCB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTI1cHgpO1xcbn1cXG5cXG4uTGF6eUxvYWRfc2hvd19fMUxCOWouTGF6eUxvYWRfdG9wX18xMkh2aSA+ICo6Zmlyc3QtY2hpbGQge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbn1cXG5cXG4uTGF6eUxvYWRfaGlkZV9fYTZpWFIuTGF6eUxvYWRfYm90dG9tX18xV1E4MCA+ICo6Zmlyc3QtY2hpbGQge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDI1cHgpO1xcbn1cXG5cXG4uTGF6eUxvYWRfc2hvd19fMUxCOWouTGF6eUxvYWRfYm90dG9tX18xV1E4MCA+ICo6Zmlyc3QtY2hpbGQge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbn1cXG5cXG4uTGF6eUxvYWRfaGlkZV9fYTZpWFIuTGF6eUxvYWRfbGVmdF9fMVI0dmYgPiAqOmZpcnN0LWNoaWxkIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjVweCk7XFxufVxcblxcbi5MYXp5TG9hZF9zaG93X18xTEI5ai5MYXp5TG9hZF9sZWZ0X18xUjR2ZiA+ICo6Zmlyc3QtY2hpbGQge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbn1cXG5cXG4vKiAuaGlkZS5yaWdodCA+ICo6Zmlyc3QtY2hpbGQge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjVweCk7XFxufVxcblxcbi5zaG93LnJpZ2h0ID4gKjpmaXJzdC1jaGlsZCB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG59ICovXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL2hvbWUvcmFrdW1haXJ1L3Byb2plY3RzL3Jha3VtYWlydS9yYWt1bWFpcnUtZGV2L3N0eWxlcy9tb2R1bGVzL0xhenlMb2FkLm1vZHVsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxpQ0FBaUM7QUFDckM7O0FBRUE7RUFDSSxpQ0FBaUM7QUFDckM7O0FBRUE7RUFDSSxVQUFVO0FBQ2Q7O0FBRUE7RUFDSSx3QkFBd0I7RUFDeEIsVUFBVTtBQUNkOztBQUVBO0VBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0VBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0VBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0VBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0VBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0VBQ0ksd0JBQXdCO0FBQzVCOztBQUVBOzs7Ozs7R0FNR1wiLFwiZmlsZVwiOlwiTGF6eUxvYWQubW9kdWxlLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubGF6eS1sb2FkIHtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNzVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ubGF6eS1sb2FkID4gKjpmaXJzdC1jaGlsZCB7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjc1cyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmhpZGUgPiAqOmZpcnN0LWNoaWxkIHtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuXFxuLnNob3cgPiAqOmZpcnN0LWNoaWxkIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uaGlkZS50b3AgPiAqOmZpcnN0LWNoaWxkIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yNXB4KTtcXG59XFxuXFxuLnNob3cudG9wID4gKjpmaXJzdC1jaGlsZCB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG59XFxuXFxuLmhpZGUuYm90dG9tID4gKjpmaXJzdC1jaGlsZCB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyNXB4KTtcXG59XFxuXFxuLnNob3cuYm90dG9tID4gKjpmaXJzdC1jaGlsZCB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG59XFxuXFxuLmhpZGUubGVmdCA+ICo6Zmlyc3QtY2hpbGQge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTI1cHgpO1xcbn1cXG5cXG4uc2hvdy5sZWZ0ID4gKjpmaXJzdC1jaGlsZCB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG59XFxuXFxuLyogLmhpZGUucmlnaHQgPiAqOmZpcnN0LWNoaWxkIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI1cHgpO1xcbn1cXG5cXG4uc2hvdy5yaWdodCA+ICo6Zmlyc3QtY2hpbGQge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxufSAqL1wiXX1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcImxhenktbG9hZFwiOiBcIkxhenlMb2FkX2xhenktbG9hZF9fMmZ0eFlcIixcblx0XCJoaWRlXCI6IFwiTGF6eUxvYWRfaGlkZV9fYTZpWFJcIixcblx0XCJzaG93XCI6IFwiTGF6eUxvYWRfc2hvd19fMUxCOWpcIixcblx0XCJ0b3BcIjogXCJMYXp5TG9hZF90b3BfXzEySHZpXCIsXG5cdFwiYm90dG9tXCI6IFwiTGF6eUxvYWRfYm90dG9tX18xV1E4MFwiLFxuXHRcImxlZnRcIjogXCJMYXp5TG9hZF9sZWZ0X18xUjR2ZlwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiaW1wb3J0IE1haW4gZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0L01haW5cIjtcbmltcG9ydCB7IElNZXRhIH0gZnJvbSAnLi4vdXRpbHMvSW50ZXJmYWNlcyc7XG5pbXBvcnQgTGF6eUxvYWQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF6eUxvYWRcIjtcblxuY29uc3QgbWV0YTogSU1ldGEgPSB7XG4gICAgdGl0bGU6IFwiSGkhIFdlbGNvbWUgdG8gbXkgcGFnZSB8IFJha3VtYWlydSBERVZcIixcbiAgICBkZXNjcmlwdGlvbjogXCJIZWxsbyB0aGVyZSwgSSdtIGEgRnJvbnRlbmQgRGV2ZWxvcGVyLCB5b3UgY2FuIHNlZSBteSB3b3JrIGFuZCBteSBjb250YWN0IGhlcmUsIEkgYWxzbyBoYXZlIHNvbWUgYXJ0aWNsZSB0aGF0IG1pZ2h0IGludGVyZXN0IHlvdVwiLFxuICAgIHVybDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfVVJMXG59XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPE1haW5cbiAgICAgICAgICAgIG1ldGE9e21ldGF9XG4gICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgaC1zY3JlZW4gbWQ6cGItMzIgYmctZ3JheS1lYVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1mdWxsIGJnLWNvdmVyIGJnLW5vLXJlcGVhdFwiIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogJ3VybCgvc3RhdGljL2ltYWdlcy9zcGxhc2guanBnKScsIGZpbHRlcjogJ2JyaWdodG5lc3MoLjQpJyB9fSAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtZDpwYi00MFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtbW9ubyBmbGV4IGZsZXgtY29sIHctZnVsbCBtZDp3LWF1dG8gcHgtNSBtZDpweC0wIHRyYWNraW5nLXRpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgbWQ6dGV4dC02eGwgdGV4dC13aGl0ZSBsZWFkaW5nLXRpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSGVsbG8hXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIG1kOnRleHQtNnhsIHRleHQtd2hpdGUgbGVhZGluZy10aWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEknbSA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW1haW5cIj5EZW1hczwvc3Bhbj5waXJhXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBtZDp0ZXh0LTZ4bCB0ZXh0LXdoaXRlIGxlYWRpbmctdGlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWthIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbWFpblwiPnJha3VtYWlydTwvc3Bhbj48c3BhbiBjbGFzc05hbWU9XCJibGlua1wiPl88L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBtZDpmbGV4IGFic29sdXRlIGJvdHRvbS0wIHctZnVsbCBjb250YWluZXIgbGVmdC0wIHJpZ2h0LTAgaXRlbXMtc3RyZXRjaCBqdXN0aWZ5LWNlbnRlciBwYi00XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBiZy1tYWluLWRhcmsgdGV4dC13aGl0ZSByb3VuZGVkIHNoYWRvdy01LWxheWVyIGZsZXggZmxleC1jb2wgaXRlbXMtc3RhcnQgcC00IG14LTggdHJhbnNpdGlvbiBkdXJhdGlvbi0yMDAgZWFzZS1saW5lYXIgaG92ZXI6YmctYWNjZW50IGhvdmVyOnRleHQtYmxhY2tcIiBzdHlsZT17eyB3aWR0aDogJzI1JScgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1zZW1pYm9sZCBwYi0yIG1iLTQgYm9yZGVyLWItMiBib3JkZXItd2hpdGVcIj5Kb2IgT2ZmZXI/PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgb3BhY2l0eS03NSBtYi04XCI+SSdtIGN1cnJlbnRseSBub3Qgb3BlbiBmb3Igam9iIGJ1dCBsZXQncyBrZWVwIGluIHRvdWNoITwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibXQtYXV0byBiZy13aGl0ZSByb3VuZGVkLWxnIHB4LTQgcHktMiB0ZXh0LWJsYWNrIHRleHQtbGcgZm9udC1zZW1pYm9sZCBzaGFkb3ctNC1sYXllciBvdXRsaW5lLW5vbmUgZm9jdXM6b3V0bGluZS1ub25lXCI+Q29udGFjdCBNZSE8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBiZy1tYWluLWRhcmsgdGV4dC13aGl0ZSByb3VuZGVkIHNoYWRvdy01LWxheWVyIGZsZXggZmxleC1jb2wgaXRlbXMtc3RhcnQgcC00IG14LTggdHJhbnNpdGlvbiBkdXJhdGlvbi0yMDAgZWFzZS1saW5lYXIgaG92ZXI6YmctYWNjZW50IGhvdmVyOnRleHQtYmxhY2tcIiBzdHlsZT17eyB3aWR0aDogJzI1JScgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1zZW1pYm9sZCBwYi0yIG1iLTQgYm9yZGVyLWItMiBib3JkZXItd2hpdGVcIj5EZWRpY2F0ZWQgUHJvamVjdD88L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBvcGFjaXR5LTc1IG1iLThcIj5JZiB5b3UgaGF2ZSBhIHByb2plY3QgdGhhdCB5b3Ugd2FudCB0byByZWFsaXplLCBsZXQncyBkaXNjdXNzIGl0IHRvZ2V0aGVyITwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibXQtYXV0byBiZy13aGl0ZSByb3VuZGVkLWxnIHB4LTQgcHktMiB0ZXh0LWJsYWNrIHRleHQtbGcgZm9udC1zZW1pYm9sZCBzaGFkb3ctNC1sYXllciBvdXRsaW5lLW5vbmUgZm9jdXM6b3V0bGluZS1ub25lXCI+SGl0IE1lIFVwITwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGJnLW1haW4tZGFyayB0ZXh0LXdoaXRlIHJvdW5kZWQgc2hhZG93LTUtbGF5ZXIgZmxleCBmbGV4LWNvbCBpdGVtcy1zdGFydCBwLTQgbXgtOCB0cmFuc2l0aW9uIGR1cmF0aW9uLTIwMCBlYXNlLWxpbmVhciBob3ZlcjpiZy1hY2NlbnQgaG92ZXI6dGV4dC1ibGFja1wiIHN0eWxlPXt7IHdpZHRoOiAnMjUlJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LXNlbWlib2xkIHBiLTIgbWItNCBib3JkZXItYi0yIGJvcmRlci13aGl0ZVwiPkp1c3QgV2FubmEgYmUgRnJpZW5kcz88L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBvcGFjaXR5LTc1IG1iLThcIj5MZXQncyBiZSBmcmllbmRzIGFuZCB0YWxrIGFib3V0IGFsbCB0aGUgdGhpbmdzIHRoYXQgd2UgbGlrZSE8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm10LWF1dG8gYmctd2hpdGUgcm91bmRlZC1sZyBweC00IHB5LTIgdGV4dC1ibGFjayB0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgc2hhZG93LTQtbGF5ZXIgb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZVwiPkRNIE1lITwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbWQ6aGlkZGVuIGl0ZW1zLWNlbnRlciBzdGlja3kgLW10LTEyIGJvdHRvbS0wIGp1c3RpZnktZW5kIC1tbC00IHctZnVsbFwiIHN0eWxlPXt7IGZpbHRlcjogJ2JyaWdodG5lc3MoMCkgc2F0dXJhdGUoMTAwJSkgaW52ZXJ0KDEwMCUpIHNlcGlhKDMlKSBzYXR1cmF0ZSgxMiUpIGh1ZS1yb3RhdGUoMTAzZGVnKSBicmlnaHRuZXNzKDEwNSUpIGNvbnRyYXN0KDEwNSUpJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9yYWt1bWFpcnVcIiBjbGFzc05hbWU9XCJib3VuY2UgbWItNFwiIHRhcmdldD1cIl9fYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pY29ucy9naXRodWIuc3ZnXCIgYWx0PVwibGlua2VkaW5cIiBjbGFzc05hbWU9XCJ3LTggbXItNCB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi0xNTAgZWFzZS1saW5lYXIgdHJhbnNmb3JtIGhvdmVyOi10cmFuc2xhdGUteS0xXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2RlbWFzcGlyYS9cIiBjbGFzc05hbWU9XCJib3VuY2UtYWx0IG1iLTRcIiB0YXJnZXQ9XCJfX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaWNvbnMvbGlua2VkaW4uc3ZnXCIgYWx0PVwibGlua2VkaW5cIiBjbGFzc05hbWU9XCJ3LTggdHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tMTUwIGVhc2UtbGluZWFyIHRyYW5zZm9ybSBob3ZlcjotdHJhbnNsYXRlLXktMVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0yNCBtZDpwdC0zMiBwYi0zMiBtZDpwYi00MCBiZy1ncmF5LWVhIGNsaXBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOm14LTMyIHJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGF6eUxvYWQgZGlyZWN0aW9uPVwidG9wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInotMTAgYWJzb2x1dGUgbGVmdC0wIHRvcC0wIHNlY3Rpb24taGVhZGVyIHRleHQtY2VudGVyIC1tdC0xMiBtZDotbXQtMjAgbWwtMSBtZDptbC0wIGZvbnQtYm9sZCB3aGl0ZXNwYWNlLW5vLXdyYXBcIj5XaGF0IEkgZG8gPzwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xhenlMb2FkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExhenlMb2FkIGRpcmVjdGlvbj1cImxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cgaXRlbXMtc3RyZXRjaCBzaGFkb3ctNS1sYXllclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLW1haW4tZGFyayB3LWZ1bGwgbWQ6dy0xLzIgdGV4dC13aGl0ZSBwLTggbWQ6cC0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInRleHQtM3hsIG1kOnRleHQtNXhsIGxlYWRpbmctdGlnaHQgbWQ6bGVhZGluZy1zbnVnIGZvbnQtYm9sZCBtYi0xMCBtZDptYi0xNlwiPkknbSBhIEZyb250ZW5kIFdlYiBEZXZlbG9wZXI8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYm9yZGVyLWItNCBib3JkZXItd2hpdGUgYmxvY2sgbWItNiBtZDptYi04XCIgc3R5bGU9e3sgd2lkdGg6IDY0IH19Pjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gbWQ6dGV4dC1iYXNlIHRleHQtb3BhY2l0eS0yNVwiPldpdGggMSB5ZWFyIGV4cGVyaWVuY2UgaW4gZGV2ZWxvcGluZyB3ZWJzaXRlIGZvciBteSBjb21wYW55IGFuZCBzb21lIHNpZGUgcHJvamVjdHMuIEkgYWxzbyBoYXZlIHNvbWUgZXhwZXJpZW5jZSBpbiBiYWNrZW5kIGRldmVsb3BtZW50IChqdXN0IHRoZSBiYXNpYyB0aG8pLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgZmxleCB3LWZ1bGwgbWQ6dy0xLzIgcC04IG1kOnAtMTAgcGItNiBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc2VsZi1zdGFydCBmbGV4LXdyYXAganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9yZWFjdGpzLm9yZy9cIiB0YXJnZXQ9XCJfX2JsYW5rXCIgY2xhc3NOYW1lPVwiYnJhbmQtbG9nbyBteC00IG15LTIgdHJhbnNmb3JtIHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dCBob3ZlcjpzY2FsZS0xNTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ljb25zL3JlYWN0LWxvZ28uc3ZnXCIgYWx0PVwicmVhY3QtbG9nb1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL25leHRqcy5vcmcvXCIgdGFyZ2V0PVwiX19ibGFua1wiIGNsYXNzTmFtZT1cImJyYW5kLWxvZ28gbXgtNCBteS0yIHRyYW5zZm9ybSB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXQgaG92ZXI6c2NhbGUtMTUwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pY29ucy9uZXh0anMtbG9nby5zdmdcIiBhbHQ9XCJuZXh0anMtbG9nb1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3Z1ZWpzLm9yZy9cIiB0YXJnZXQ9XCJfX2JsYW5rXCIgY2xhc3NOYW1lPVwiYnJhbmQtbG9nbyBteC00IG15LTIgdHJhbnNmb3JtIHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dCBob3ZlcjpzY2FsZS0xNTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ljb25zL3Z1ZS1sb2dvLnBuZ1wiIGFsdD1cInZ1ZWpzLWxvZ29cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9udXh0anMub3JnL1wiIHRhcmdldD1cIl9fYmxhbmtcIiBjbGFzc05hbWU9XCJicmFuZC1sb2dvIG14LTQgbXktMiB0cmFuc2Zvcm0gdHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0IGhvdmVyOnNjYWxlLTE1MFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaWNvbnMvbnV4dGpzLWxvZ28uc3ZnXCIgYWx0PVwibnV4dGpzLWxvZ29cIiBjbGFzc05hbWU9XCJwLTJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9sYXJhdmVsLmNvbS9cIiB0YXJnZXQ9XCJfX2JsYW5rXCIgY2xhc3NOYW1lPVwiYnJhbmQtbG9nbyBteC00IG15LTIgdHJhbnNmb3JtIHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dCBob3ZlcjpzY2FsZS0xNTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ljb25zL2xhcmF2ZWwtbG9nby5wbmdcIiBhbHQ9XCJsYXJhdmVsLWxvZ29cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9jb2RlaWduaXRlci5jb20vXCIgdGFyZ2V0PVwiX19ibGFua1wiIGNsYXNzTmFtZT1cImJyYW5kLWxvZ28gbXgtNCBteS0yIHRyYW5zZm9ybSB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXQgaG92ZXI6c2NhbGUtMTUwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pY29ucy9jb2RlaWduaXRlci1sb2dvLnBuZ1wiIGFsdD1cImNvZGVpZ25pdGVyLWxvZ29cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9mbGFzay5wYWxsZXRzcHJvamVjdHMuY29tL1wiIHRhcmdldD1cIl9fYmxhbmtcIiBjbGFzc05hbWU9XCJicmFuZC1sb2dvIG14LTQgbXktMiB0cmFuc2Zvcm0gdHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0IGhvdmVyOnNjYWxlLTE1MFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaWNvbnMvZmxhc2stbG9nby5wbmdcIiBhbHQ9XCJmbGFzay1sb2dvXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vYm90dGxlcHkub3JnL1wiIHRhcmdldD1cIl9fYmxhbmtcIiBjbGFzc05hbWU9XCJicmFuZC1sb2dvIG14LTQgbXktMiB0cmFuc2Zvcm0gdHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0IGhvdmVyOnNjYWxlLTE1MFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaWNvbnMvYm90dGxlLWxvZ28ucG5nXCIgYWx0PVwiYm90dGxlLWxvZ29cIiBjbGFzc05hbWU9XCJwLTJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9tYXRlcmlhbC11aS5jb20vXCIgdGFyZ2V0PVwiX19ibGFua1wiIGNsYXNzTmFtZT1cImJyYW5kLWxvZ28gbXgtNCBteS0yIHRyYW5zZm9ybSB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXQgaG92ZXI6c2NhbGUtMTUwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pY29ucy9tYXRlcmlhbHVpLWxvZ28uc3ZnXCIgYWx0PVwibWF0ZXJpYWx1aS1sb2dvXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2V0Ym9vdHN0cmFwLmNvbS9cIiB0YXJnZXQ9XCJfX2JsYW5rXCIgY2xhc3NOYW1lPVwiYnJhbmQtbG9nbyBteC00IG15LTIgdHJhbnNmb3JtIHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dCBob3ZlcjpzY2FsZS0xNTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2ljb25zL2Jvb3RzdHJhcC1sb2dvLnN2Z1wiIGFsdD1cImJvb3RzdHJhcC1sb2dvXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL1wiIHRhcmdldD1cIl9fYmxhbmtcIiBjbGFzc05hbWU9XCJicmFuZC1sb2dvIG14LTQgbXktMiB0cmFuc2Zvcm0gdHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0IGhvdmVyOnNjYWxlLTE1MFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaWNvbnMvdGFpbHdpbmRjc3MtbG9nby5zdmdcIiBhbHQ9XCJ0YWlsd2luZGNzcy1sb2dvXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vYnVsbWEuaW8vXCIgdGFyZ2V0PVwiX19ibGFua1wiIGNsYXNzTmFtZT1cImJyYW5kLWxvZ28gbXgtNCBteS0yIHRyYW5zZm9ybSB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXQgaG92ZXI6c2NhbGUtMTUwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pY29ucy9idWxtYS1sb2dvLnBuZ1wiIGFsdD1cImJ1bG1hLWxvZ29cIiBjbGFzc05hbWU9XCJwLTJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cubXlzcWwuY29tL1wiIHRhcmdldD1cIl9fYmxhbmtcIiBjbGFzc05hbWU9XCJicmFuZC1sb2dvIG14LTQgbXktMiB0cmFuc2Zvcm0gdHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0IGhvdmVyOnNjYWxlLTE1MFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaWNvbnMvbXlzcWwtbG9nby5zdmdcIiBhbHQ9XCJteXNxbC1sb2dvXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LnBvc3RncmVzcWwub3JnL1wiIHRhcmdldD1cIl9fYmxhbmtcIiBjbGFzc05hbWU9XCJicmFuZC1sb2dvIG14LTQgbXktMiB0cmFuc2Zvcm0gdHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0IGhvdmVyOnNjYWxlLTE1MFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaWNvbnMvcG9zdGdyZXNxbC1sb2dvLnBuZ1wiIGFsdD1cInBvc3RncmVzcWwtbG9nb1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtYmxhY2stNDggbXQtOCBtZDptdC0wXCI+Kk1vc3QgdXNlZDogcmVhY3RqcywgbmV4dCBqcywgbGFyYXZlbCwgdGFpbHdpbmRjc3MsIG1hdGVyaWFsLXVpLCBteXNxbDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xhenlMb2FkPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0yNCBtZDpwdC0zMiBwYi0yNCBtZDpwYi00MCBiZy13aGl0ZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6bXgtMzIgcmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYXp5TG9hZCBkaXJlY3Rpb249XCJ0b3BcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC0wIHRvcC0wIHNlY3Rpb24taGVhZGVyIHRleHQtY2VudGVyIC1tdC0xMiBtZDotbXQtMjAgbWwtMSBtZDptbC0wIGZvbnQtYm9sZCB3aGl0ZXNwYWNlLW5vLXdyYXAgei0xMFwiPlByb2plY3RzIC48L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MYXp5TG9hZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYXp5TG9hZCBkaXJlY3Rpb249XCJsZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IGl0ZW1zLXN0cmV0Y2ggc2hhZG93LTUtbGF5ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1hY2NlbnQgdy1mdWxsIG1kOnctMS8yIHRleHQtd2hpdGUgcC04IG1kOnAtMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBtZDp0ZXh0LTV4bCBsZWFkaW5nLXRpZ2h0IG1kOmxlYWRpbmctc251ZyBmb250LWJvbGQgbWItMTAgbWQ6bWItMTZcIj5NeSBQYXN0IC8gUmVjZW50IFByb2plY3RzPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJvcmRlci1iLTQgYm9yZGVyLXdoaXRlIGJsb2NrIG1iLTYgbWQ6bWItOFwiIHN0eWxlPXt7IHdpZHRoOiA2NCB9fT48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW9wYWNpdHktMjVcIj5Tb21lIG9mIG15IG5vdGFibGUgcHJvamVjdHMgc2luY2UgbXkgY29sbGVnZSB5ZWFyLCBpbmNsdWRpbmcgbXkgZmluYWwgcHJvamVjdHMgZm9yIGdyYWR1YXRpb24uPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBmbGV4IHctZnVsbCBtZDp3LTEvMiBwLTggbWQ6cC0xMCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgdGV4dC1ibGFjay00OFwiPkNvbWluZyBTb29uPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGF6eUxvYWQ+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiLTE2IG1kOnBiLTMyIGJnLXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzpteC0zMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExhenlMb2FkIGRpcmVjdGlvbj1cImxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHNlY3Rpb24taGVhZGVyIHRleHQtYmxhY2sgbWItMTAgdGV4dC1yaWdodCBtZDp0ZXh0LWxlZnRcIj5FeHBlcmllbmNlIC48L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MYXp5TG9hZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggLW14LTUgbWQ6LW14LTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTggbWQ6dy0xLzIgZmxleCBqdXN0aWZ5LWVuZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6ZmxleCB3LWF1dG8gaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB4LTggY3Vyc29yLWRlZmF1bHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGF6eUxvYWQgZGlyZWN0aW9uPVwidG9wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzZWN0aW9uLWhlYWRlciBmb250LWJvbGQgdGV4dC1ibGFjayB0ZXh0LW9wYWNpdHktMjUgdHJhbnNpdGlvbiBkdXJhdGlvbi0yMDAgZWFzZS1pbi1vdXQgaG92ZXI6dGV4dC1tYWluIGhvdmVyOnRleHQtb3BhY2l0eS0xMDBcIj4yMDE4PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xhenlMb2FkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctOCBiZy1tYWluIHB4LTIgcHktOFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhpZGRlbiBtZDpmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBoLWZ1bGwganVzdGlmeS1jZW50ZXIgdGV4dC1sZyB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBsZWFkaW5nLW5vbmUgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgflxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4IG1kOmhpZGRlbiBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgaC1mdWxsIGp1c3RpZnktY2VudGVyIHRleHQtbGcgdGV4dC13aGl0ZSBmb250LWJvbGQgbGVhZGluZy1ub25lIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1hdXRvIG1kOnctMS8yIGZsZXgganVzdGlmeS1zdGFydFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhenlMb2FkIGRpcmVjdGlvbj1cImJvdHRvbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1mdWxsIGJnLXdoaXRlIGZsZXggZmxleC1jb2wgdGV4dC1sZyBweC0yIHB5LTgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1zZW1pYm9sZCB0ZXh0LW1haW5cIj5Qcm9jZXNzIE1pbmluZyBSZXNlYXJjaDwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTQgdGV4dC1ibGFjay00OFwiPkNvbnRyaWJ1dGUgaW4gbXkgbGVjdHVyZXIncyByZXNlYXJjaCBhcyBGdWxsc3RhY2sgRGV2ZWxvcGVyIGFib3V0IHByb2Nlc3MgbWluaW5nLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1zZW1pYm9sZCB0ZXh0LW1haW5cIj5BaWQgT3RoZXIgRmluYWwgUHJvamVjdDwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTQgdGV4dC1ibGFjay00OFwiPkRldmVsb3AgYW4gYXBwIGZvciB3YXJlaG91c2UgYWRtaW5pc3RyYXRpb24gZm9yIGEgQ2l2aWwgRW5naW5lZXJpbmcgc3R1ZGVudC48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgdGV4dC1tYWluXCI+U3RhcnRlZCBNeSBGaW5hbCBQcm9qZWN0PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ibGFjay00OFwiPlN0YXJ0ZWQgbXkgRmluYWwgUHJvamVjdCBmb3IgZ3JhZHVhdGlvbiBhYm91dCBwcm9jZXNzIG1pbmluZyB3aGljaCB1c2UgQW5ndWxhciBmb3IgdGhlIGZyb250ZW5kIGFuZCB1c2luZyBGbGFzayBmb3IgdGhlIGJhY2tlbmQgYW5kIGNhbGN1bGF0aW9uLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGF6eUxvYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCAtbXgtNSBtZDotbXgtMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctOCBtZDp3LTEvMiBmbGV4IGp1c3RpZnktZW5kIG1kOmp1c3RpZnktc3RhcnQgbWQ6b3JkZXItMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTggYmctYWNjZW50IHB4LTIgcHktOFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhpZGRlbiBtZDpmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBoLWZ1bGwganVzdGlmeS1jZW50ZXIgdGV4dC1sZyB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBsZWFkaW5nLW5vbmUgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgflxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4IG1kOmhpZGRlbiBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgaC1mdWxsIGp1c3RpZnktY2VudGVyIHRleHQtbGcgdGV4dC13aGl0ZSBmb250LWJvbGQgbGVhZGluZy1ub25lIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1hdXRvIGhpZGRlbiBtZDpmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweC04IGN1cnNvci1kZWZhdWx0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhenlMb2FkIGRpcmVjdGlvbj1cInRvcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic2VjdGlvbi1oZWFkZXIgZm9udC1ib2xkIHRleHQtYmxhY2sgdGV4dC1vcGFjaXR5LTI1IHRyYW5zaXRpb24gZHVyYXRpb24tMjAwIGVhc2UtaW4tb3V0IGhvdmVyOnRleHQtYWNjZW50IGhvdmVyOnRleHQtb3BhY2l0eS0xMDBcIj4yMDE5PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xhenlMb2FkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctYXV0byBtZDp3LTEvMiBmbGV4IGp1c3RpZnktc3RhcnQgbWQ6anVzdGlmeS1lbmQgbWQ6b3JkZXItMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhenlMb2FkIGRpcmVjdGlvbj1cImJvdHRvbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1mdWxsIGJnLXdoaXRlIGZsZXggZmxleC1jb2wgdGV4dC1sZyBweC0yIHB5LTggbWQ6dGV4dC1yaWdodCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkIHRleHQtYWNjZW50XCI+RmluaXNoIE15IEZpbmFsIFByb2plY3Q8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi00IHRleHQtYmxhY2stNDhcIj5GaW5pc2hlcyBteSBmaW5hbCBwcm9qZWN0IGZvciBncmFkdWF0aW9uIGFuZCBwdWJsaXNoIHRoZSByZXN1bHRzIGFzIGEgam91cm5hbCBhcnRpY2xlIGluIDxhIGNsYXNzTmFtZT1cInRleHQtYWNjZW50IGhvdmVyOnRleHQtYWNjZW50LWRhcmtcIiBocmVmPVwiaHR0cDovL2pvdXJuYWxzLnVtcy5hYy5pZC9pbmRleC5waHAva2hpZlwiPktISUY8L2E+LCBhbmQgaGVyZSBpcyB0aGUgbGluayB0byA8YSBjbGFzc05hbWU9XCJ0ZXh0LWFjY2VudCBob3Zlcjp0ZXh0LWFjY2VudC1kYXJrXCIgaHJlZj1cImh0dHBzOi8vd3d3LnJlc2VhcmNoZ2F0ZS5uZXQvcHVibGljYXRpb24vMzM5MzgyMjM5X1RoZV9EZXNpZ25fb2ZfRXhwbG9yYXRvcnlfQXBwbGljYXRpb25fYW5kX1ByZXByb2Nlc3Npbmdfb2ZfRXZlbnRfTG9nX0RhdGFfaW5fTE1TX01vb2RsZS1CYXNlZF9PbmxpbmVfTGVhcm5pbmdfQWN0aXZpdGllc19mb3JfUHJvY2Vzc19NaW5pbmdcIj5NeSBBcnRpY2xlPC9hPi48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgdGV4dC1hY2NlbnRcIj5GcmF1ZCBEZXRlY3Rpb24gUmVzZWFyY2g8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi00IHRleHQtYmxhY2stNDhcIj5Db250cmlidXRlIGluIG15IGxlY3R1cmVyJ3MgcmVzZWFyY2ggYXMgRnJvbnRlbmQgRGV2ZWxvcGVyIGFib3V0IGZyYXVkIGRldGVjdGlvbiB1c2luZyBJc29sYXRpb24gRm9yZXN0IEFsZ29yaXRobS48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgdGV4dC1hY2NlbnQgbWItNFwiPkdyYWR1YXRlZCBDb2xsZWdlISEhPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1zZW1pYm9sZCB0ZXh0LWFjY2VudFwiPkZpcnN0IEZ1bGwtdGltZSBXb3JrPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ibGFjay00OFwiPkkgam9pbiBFbXBvcmlhIERpZ2l0YWwgYXMgRnJvbnRlbmQgRGV2ZWxvcGVyLCB3ZSdyZSB1c2luZyBMYXJhdmVsIGFuZCBMdW1lbiBoZXJlLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGF6eUxvYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCAtbXgtNSBtZDotbXgtMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctOCBtZDp3LTEvMiBmbGV4IGp1c3RpZnktZW5kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBtZDpmbGV4IHctYXV0byBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHgtOFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYXp5TG9hZCBkaXJlY3Rpb249XCJ0b3BcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNlY3Rpb24taGVhZGVyIGZvbnQtYm9sZCB0ZXh0LWJsYWNrIHRleHQtb3BhY2l0eS0yNSB0cmFuc2l0aW9uIGR1cmF0aW9uLTIwMCBlYXNlLWluLW91dCBob3Zlcjp0ZXh0LW1haW4gaG92ZXI6dGV4dC1vcGFjaXR5LTEwMCBjdXJzb3ItZGVmYXVsdFwiPjIwMjA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGF6eUxvYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy04IGJnLW1haW4gcHgtMiBweS04XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGlkZGVuIG1kOmZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGgtZnVsbCBqdXN0aWZ5LWNlbnRlciB0ZXh0LWxnIHRleHQtd2hpdGUgZm9udC1ib2xkIGxlYWRpbmctbm9uZSB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXggbWQ6aGlkZGVuIGZsZXgtY29sIGl0ZW1zLWNlbnRlciBoLWZ1bGwganVzdGlmeS1jZW50ZXIgdGV4dC1sZyB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBsZWFkaW5nLW5vbmUgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWF1dG8gbWQ6dy0xLzIgZmxleCBqdXN0aWZ5LXN0YXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGF6eUxvYWQgZGlyZWN0aW9uPVwiYm90dG9tXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLWZ1bGwgYmctd2hpdGUgZmxleCBmbGV4LWNvbCB0ZXh0LWxnIHB4LTIgcHktOCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkIHRleHQtbWFpblwiPk11dGF0ZWQgdG8gQ2hpbGQgQ29tcGFueTwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTQgdGV4dC1ibGFjay00OFwiPkdvdCBtdXRhdGVkIHRvIG90aGVyIGNoaWxkIGNvbXBhbnkgYXMgZnVsbHN0YWNrIGRldmVsb3BlciBhbmQgbmV0d29yayBlbmdpbmVlcmluZy48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgdGV4dC1tYWluXCI+Sm9pbiBKZW5kZWxhMzYwPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItNCB0ZXh0LWJsYWNrLTQ4XCI+Sm9pbiA8YSBjbGFzc05hbWU9XCJ0ZXh0LW1haW4gaG92ZXI6dGV4dC1tYWluLWRhcmtcIiBocmVmPVwiaHR0cHM6Ly9qZW5kZWxhMzYwLmNvbS9cIj5KZW5kZWxhMzYwPC9hPiBhcyBGcm9udGVuZCBEZXZlbG9wZXIsIHdlJ3JlIHVzaW5nIFJlYWN0IGFuZCBOZXh0SnMgaGVyZS48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgdGV4dC1tYWluXCI+Q3JlYXRlIE15IEZpcnN0IFBvcnRmb2xpbyBQYWdlISEhPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGF6eUxvYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCAtbXgtNSBtZDotbXgtMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctOCBtZDp3LTEvMiBmbGV4IGp1c3RpZnktZW5kIG1kOmp1c3RpZnktc3RhcnQgbWQ6b3JkZXItMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTggaC1mdWxsIGJnLWFjY2VudCBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LWxnIHRleHQtd2hpdGUgZm9udC1ib2xkIGxlYWRpbmctbm9uZSBweC0yIHB5LTggdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuPGJyLz4uPGJyLz4uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1hdXRvIGhpZGRlbiBtZDpmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweC04XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhenlMb2FkIGRpcmVjdGlvbj1cInRvcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic2VjdGlvbi1oZWFkZXIgZm9udC1ib2xkIHRleHQtYmxhY2sgdGV4dC1vcGFjaXR5LTI1IHRyYW5zaXRpb24gZHVyYXRpb24tMjAwIGVhc2UtaW4tb3V0IGhvdmVyOnRleHQtYWNjZW50IGhvdmVyOnRleHQtb3BhY2l0eS0xMDAgY3Vyc29yLWRlZmF1bHRcIj4uIC4gLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MYXp5TG9hZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWF1dG8gbWQ6dy0xLzIgZmxleCBqdXN0aWZ5LXN0YXJ0IG1kOmp1c3RpZnktZW5kIG1kOm9yZGVyLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYXp5TG9hZCBkaXJlY3Rpb249XCJib3R0b21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtZnVsbCBiZy13aGl0ZSBmbGV4IGZsZXgtY29sIHRleHQtbGcgcHgtMiBweS04IHRleHQtcmlnaHQganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1zZW1pYm9sZCB0ZXh0LWFjY2VudFwiPkxldCdzIHNlZSB3aGVyZSBJJ2xsIGdvIG5leHQhPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGF6eUxvYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTWFpbj5cbiAgICApXG59XG4gICAgXG5leHBvcnQgZGVmYXVsdCBIb21lIl0sInNvdXJjZVJvb3QiOiIifQ==