"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_error",{

/***/ "./component/Layout.js":
/*!*****************************!*\
  !*** ./component/Layout.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavBar */ \"./component/NavBar.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nprogress */ \"./node_modules/nprogress/nprogress.js\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_5__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar Layout = function(param) {\n    var children = param.children, _footer = param.footer, footer = _footer === void 0 ? true : _footer;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        var handleRouteChange = function(url) {\n            console.log(url);\n            nprogress__WEBPACK_IMPORTED_MODULE_5___default().start();\n        };\n        router.events.on(\"routeChangeStart\", handleRouteChange);\n        router.events.on(\"routeChangeComplete\", function() {\n            return nprogress__WEBPACK_IMPORTED_MODULE_5___default().done();\n        });\n        return function() {\n            router.events.off(\"routeChangeStart\", handleRouteChange);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavBar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Martin Figueroa\\\\Desktop\\\\Portfoilio\\\\component\\\\Layout.js\",\n                lineNumber: 25,\n                columnNumber: 5\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"container py-4\",\n                children: children\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Martin Figueroa\\\\Desktop\\\\Portfoilio\\\\component\\\\Layout.js\",\n                lineNumber: 26,\n                columnNumber: 5\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: \"bg-dark text-light text-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container p-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: \"\\xa9 Martin Figueroa Portfolio\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Martin Figueroa\\\\Desktop\\\\Portfoilio\\\\component\\\\Layout.js\",\n                            lineNumber: 31,\n                            columnNumber: 9\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"2022 - \",\n                                new Date().getFullYear()\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Martin Figueroa\\\\Desktop\\\\Portfoilio\\\\component\\\\Layout.js\",\n                            lineNumber: 32,\n                            columnNumber: 9\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Martin Figueroa\\\\Desktop\\\\Portfoilio\\\\component\\\\Layout.js\",\n                    lineNumber: 30,\n                    columnNumber: 7\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Martin Figueroa\\\\Desktop\\\\Portfoilio\\\\component\\\\Layout.js\",\n                lineNumber: 29,\n                columnNumber: 5\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(Layout, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnQvTGF5b3V0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7QUFBOEI7QUFDRDtBQUNLO0FBQ007QUFDTjtBQUVsQyxJQUFNSyxNQUFNLEdBQUcsZ0JBQWlDO1FBQTlCQyxRQUFRLFNBQVJBLFFBQVEsa0JBQUVDLE1BQU0sRUFBTkEsTUFBTSx3QkFBRyxJQUFJOztJQUV6QyxJQUFNQyxNQUFNLEdBQUdMLHNEQUFTLEVBQUU7SUFFeEJELGdEQUFTLENBQUMsV0FBSTtRQUNaLElBQU1PLGlCQUFpQixHQUFHQyxTQUFBQSxHQUFHLEVBQUc7WUFDN0JDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixHQUFHLENBQUM7WUFDaEJOLHNEQUFlLEVBQUUsQ0FBQztRQUNuQixDQUFDO1FBQ0hJLE1BQU0sQ0FBQ00sTUFBTSxDQUFDQyxFQUFFLENBQUMsa0JBQWtCLEVBQUVOLGlCQUFpQixDQUFDO1FBQ3ZERCxNQUFNLENBQUNNLE1BQU0sQ0FBQ0MsRUFBRSxDQUFDLHFCQUFxQixFQUFDO21CQUFLWCxxREFBYyxFQUFFO1NBQUEsQ0FBQztRQUM3RCxPQUFNLFdBQUk7WUFDUkksTUFBTSxDQUFDTSxNQUFNLENBQUNHLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRVIsaUJBQWlCLENBQUM7UUFDMUQsQ0FBQztJQUNILENBQUMsRUFBQyxFQUFFLENBQUM7SUFFUCxxQkFDRTs7MEJBQ0UsOERBQUNULCtDQUFNOzs7O3FCQUFHOzBCQUNWLDhEQUFDa0IsTUFBSTtnQkFBQ0MsU0FBUyxFQUFDLGdCQUFnQjswQkFDM0JiLFFBQVE7Ozs7O3FCQUNOOzBCQUNQLDhEQUFDQyxRQUFNO2dCQUFDWSxTQUFTLEVBQUMsZ0NBQWdDOzBCQUNoRCw0RUFBQ0MsS0FBRztvQkFBQ0QsU0FBUyxFQUFDLGVBQWU7O3NDQUM1Qiw4REFBQ0UsSUFBRTtzQ0FBQyxnQ0FBZ0M7Ozs7O2lDQUFLO3NDQUN6Qyw4REFBQ0MsR0FBQzs7Z0NBQUMsU0FBTztnQ0FBQyxJQUFJQyxJQUFJLEVBQUUsQ0FBQ0MsV0FBVyxFQUFFOzs7Ozs7aUNBQUs7Ozs7Ozt5QkFDcEM7Ozs7O3FCQUNDOztvQkFDUixDQUNIO0FBQ0YsQ0FBQztHQTlCS25CLE1BQU07O1FBRUdGLGtEQUFTOzs7QUFGbEJFLEtBQUFBLE1BQU07QUErQlosK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnQvTGF5b3V0LmpzP2VkYTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5hdkJhciBmcm9tIFwiLi9OYXZCYXJcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBOUHJvZ3Jlc3MgZnJvbSBcIm5wcm9ncmVzc1wiO1xyXG5cclxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4sIGZvb3RlciA9IHRydWUgfSkgPT4ge1xyXG5cclxuY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgY29uc3QgaGFuZGxlUm91dGVDaGFuZ2UgPSB1cmwgPT57XHJcbiAgICAgICBjb25zb2xlLmxvZyh1cmwpXHJcbiAgICAgICBOUHJvZ3Jlc3Muc3RhcnQoKTtcclxuICAgICAgfVxyXG4gICAgcm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VTdGFydCcsIGhhbmRsZVJvdXRlQ2hhbmdlKVxyXG4gICAgcm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VDb21wbGV0ZScsKCk9PiBOUHJvZ3Jlc3MuZG9uZSgpKVxyXG4gICAgcmV0dXJuKCk9PntcclxuICAgICAgcm91dGVyLmV2ZW50cy5vZmYoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBoYW5kbGVSb3V0ZUNoYW5nZSlcclxuICAgIH1cclxuICB9LFtdKVxyXG5cclxucmV0dXJuKFxyXG4gIDw+XHJcbiAgICA8TmF2QmFyIC8+XHJcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJjb250YWluZXIgcHktNFwiPlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvbWFpbj5cclxuICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiYmctZGFyayB0ZXh0LWxpZ2h0IHRleHQtY2VudGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHAtNFwiPlxyXG4gICAgICAgIDxoMT4mY29weTsgTWFydGluIEZpZ3Vlcm9hIFBvcnRmb2xpbzwvaDE+XHJcbiAgICAgICAgPHA+MjAyMiAtIHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZm9vdGVyPlxyXG4gIDwvPlxyXG4pO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDtcclxuIl0sIm5hbWVzIjpbIk5hdkJhciIsIkhlYWQiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJOUHJvZ3Jlc3MiLCJMYXlvdXQiLCJjaGlsZHJlbiIsImZvb3RlciIsInJvdXRlciIsImhhbmRsZVJvdXRlQ2hhbmdlIiwidXJsIiwiY29uc29sZSIsImxvZyIsInN0YXJ0IiwiZXZlbnRzIiwib24iLCJkb25lIiwib2ZmIiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiIsImgxIiwicCIsIkRhdGUiLCJnZXRGdWxsWWVhciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./component/Layout.js\n"));

/***/ })

});