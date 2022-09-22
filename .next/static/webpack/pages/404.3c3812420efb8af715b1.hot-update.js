self["webpackHotUpdate_N_E"]("pages/404",{

/***/ "./pages/404.js":
/*!**********************!*\
  !*** ./pages/404.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _component_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/Layout */ "./component/Layout.js");
/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../profile */ "./profile.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Martin Figueroa\\Desktop\\Portfoilio\\pages\\404.js",
    _this = undefined;

// import Layout from "../component/Layout";
// import Link from "next/link";
// const custom404 = () => (
//     <Layout>
//         <div className="text-center">
//         <h1>404</h1>
//         <p>Esta pagina no existe. Por favor retorne al 
//             <Link  href="/">
//                 <a>Home</a>
//             </Link>
//         </p>
//         </div>
//     </Layout>
// )
// export default custom404




var PostCard = function PostCard(_ref) {
  var contacto = _ref.contacto;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "col-md-4",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "overflow",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: contacto.LinkedInURL,
        target: "_blank",
        className: "btn btn-outline-secondary",
        children: "LinkedIn"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 3
  }, _this);
};

_c = PostCard;

var custom404 = function custom404() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Layout__WEBPACK_IMPORTED_MODULE_2__.default, {
    title: "My Blog",
    footer: true,
    dark: true,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "row",
      children: _profile__WEBPACK_IMPORTED_MODULE_3__.contactos.map(function (contacto, i) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PostCard, {
          contacto: contacto
        }, i, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 7
  }, _this);
};

/* harmony default export */ __webpack_exports__["default"] = (custom404);

var _c;

$RefreshReg$(_c, "PostCard");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvNDA0LmpzIl0sIm5hbWVzIjpbIlBvc3RDYXJkIiwiY29udGFjdG8iLCJMaW5rZWRJblVSTCIsImN1c3RvbTQwNCIsImNvbnRhY3RvcyIsImkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVc7QUFBQSxNQUFHQyxRQUFILFFBQUdBLFFBQUg7QUFBQSxzQkFDZjtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUEsMkJBRUk7QUFBSyxlQUFTLEVBQUMsVUFBZjtBQUFBLDZCQU1FO0FBQUcsWUFBSSxFQUFFQSxRQUFRLENBQUNDLFdBQWxCO0FBQStCLGNBQU0sRUFBQyxRQUF0QztBQUErQyxpQkFBUyxFQUFDLDJCQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRGU7QUFBQSxDQUFqQjs7S0FBTUYsUTs7QUFjTixJQUFNRyxTQUFTLEdBQUUsU0FBWEEsU0FBVyxHQUFNO0FBQ25CLHNCQUNFLDhEQUFDLHNEQUFEO0FBQVEsU0FBSyxFQUFDLFNBQWQ7QUFBd0IsVUFBTSxFQUFFLElBQWhDO0FBQXNDLFFBQUksTUFBMUM7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQyxLQUFmO0FBQUEsZ0JBQ0dDLG1EQUFBLENBQWMsVUFBQ0gsUUFBRCxFQUFXSSxDQUFYO0FBQUEsNEJBQ2IsOERBQUMsUUFBRDtBQUFVLGtCQUFRLEVBQUVKO0FBQXBCLFdBQW1DSSxDQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURhO0FBQUEsT0FBZDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFTRCxDQVZIOztBQVlFLCtEQUFlRixTQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzLzQwNC4zYzM4MTI0MjBlZmI4YWY3MTViMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50L0xheW91dFwiO1xyXG4vLyBpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG4vLyBjb25zdCBjdXN0b200MDQgPSAoKSA9PiAoXHJcbi8vICAgICA8TGF5b3V0PlxyXG4vLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuLy8gICAgICAgICA8aDE+NDA0PC9oMT5cclxuLy8gICAgICAgICA8cD5Fc3RhIHBhZ2luYSBubyBleGlzdGUuIFBvciBmYXZvciByZXRvcm5lIGFsIFxyXG4vLyAgICAgICAgICAgICA8TGluayAgaHJlZj1cIi9cIj5cclxuLy8gICAgICAgICAgICAgICAgIDxhPkhvbWU8L2E+XHJcbi8vICAgICAgICAgICAgIDwvTGluaz5cclxuLy8gICAgICAgICA8L3A+XHJcbi8vICAgICAgICAgPC9kaXY+XHJcbi8vICAgICA8L0xheW91dD5cclxuLy8gKVxyXG4vLyBleHBvcnQgZGVmYXVsdCBjdXN0b200MDRcclxuXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50L0xheW91dFwiO1xyXG5pbXBvcnQgeyBjb250YWN0b3MgfSBmcm9tIFwiLi4vcHJvZmlsZVwiO1xyXG5cclxuY29uc3QgUG9zdENhcmQgPSAoeyBjb250YWN0byB9KSA9PiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxyXG4gICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPiAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvd1wiPlxyXG4gICAgICAgIHsvKiA8aW1nIHNyYz17cG9zdC5pbWFnZVVSTH0gYWx0PVwiXCIgY2xhc3NOYW1lPVwiY2FyZC1pbWctdG9wXCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgPGgxPntwb3N0LnRpdGxlfTwvaDE+XHJcbiAgICAgICAgPHA+e3Bvc3QuY29udGVudH08L3A+ICovfVxyXG4gICAgICAgIDxhIGhyZWY9e2NvbnRhY3RvLkxpbmtlZEluVVJMfSB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCI+TGlua2VkSW48L2E+XHJcbiAgICAgICB7LyogPC9kaXY+ICovfVxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbik7XHJcbmNvbnN0IGN1c3RvbTQwND0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExheW91dCB0aXRsZT1cIk15IEJsb2dcIiBmb290ZXI9e3RydWV9IGRhcms+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgIHtjb250YWN0b3MubWFwKChjb250YWN0bywgaSkgPT4gKFxyXG4gICAgICAgICAgICA8UG9zdENhcmQgY29udGFjdG89e2NvbnRhY3RvfSBrZXk9e2l9IC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICApO1xyXG4gIH07XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgY3VzdG9tNDA0OyJdLCJzb3VyY2VSb290IjoiIn0=