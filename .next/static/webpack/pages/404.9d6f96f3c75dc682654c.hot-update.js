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
  return (
    /*#__PURE__*/
    //   <div className="col-md-4">
    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "card",
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
      lineNumber: 24,
      columnNumber: 5
    }, _this)
  );
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvNDA0LmpzIl0sIm5hbWVzIjpbIlBvc3RDYXJkIiwiY29udGFjdG8iLCJMaW5rZWRJblVSTCIsImN1c3RvbTQwNCIsImNvbnRhY3RvcyIsImkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVc7QUFBQSxNQUFHQyxRQUFILFFBQUdBLFFBQUg7QUFBQTtBQUFBO0FBQ2pCO0FBQ0k7QUFBSyxlQUFTLEVBQUMsTUFBZjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyxVQUFmO0FBQUEsK0JBTUU7QUFBRyxjQUFJLEVBQUVBLFFBQVEsQ0FBQ0MsV0FBbEI7QUFBK0IsZ0JBQU0sRUFBQyxRQUF0QztBQUErQyxtQkFBUyxFQUFDLDJCQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRmE7QUFBQSxDQUFqQjs7S0FBTUYsUTs7QUFjTixJQUFNRyxTQUFTLEdBQUUsU0FBWEEsU0FBVyxHQUFNO0FBQ25CLHNCQUNFLDhEQUFDLHNEQUFEO0FBQVEsU0FBSyxFQUFDLFNBQWQ7QUFBd0IsVUFBTSxFQUFFLElBQWhDO0FBQXNDLFFBQUksTUFBMUM7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQyxLQUFmO0FBQUEsZ0JBQ0dDLG1EQUFBLENBQWMsVUFBQ0gsUUFBRCxFQUFXSSxDQUFYO0FBQUEsNEJBQ2IsOERBQUMsUUFBRDtBQUFVLGtCQUFRLEVBQUVKO0FBQXBCLFdBQW1DSSxDQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURhO0FBQUEsT0FBZDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFTRCxDQVZIOztBQVlFLCtEQUFlRixTQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzLzQwNC45ZDZmOTZmM2M3NWRjNjgyNjU0Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50L0xheW91dFwiO1xyXG4vLyBpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG4vLyBjb25zdCBjdXN0b200MDQgPSAoKSA9PiAoXHJcbi8vICAgICA8TGF5b3V0PlxyXG4vLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuLy8gICAgICAgICA8aDE+NDA0PC9oMT5cclxuLy8gICAgICAgICA8cD5Fc3RhIHBhZ2luYSBubyBleGlzdGUuIFBvciBmYXZvciByZXRvcm5lIGFsIFxyXG4vLyAgICAgICAgICAgICA8TGluayAgaHJlZj1cIi9cIj5cclxuLy8gICAgICAgICAgICAgICAgIDxhPkhvbWU8L2E+XHJcbi8vICAgICAgICAgICAgIDwvTGluaz5cclxuLy8gICAgICAgICA8L3A+XHJcbi8vICAgICAgICAgPC9kaXY+XHJcbi8vICAgICA8L0xheW91dD5cclxuLy8gKVxyXG4vLyBleHBvcnQgZGVmYXVsdCBjdXN0b200MDRcclxuXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50L0xheW91dFwiO1xyXG5pbXBvcnQgeyBjb250YWN0b3MgfSBmcm9tIFwiLi4vcHJvZmlsZVwiO1xyXG5cclxuY29uc3QgUG9zdENhcmQgPSAoeyBjb250YWN0byB9KSA9PiAoXHJcbi8vICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3dcIj5cclxuICAgICAgICB7LyogPGltZyBzcmM9e3Bvc3QuaW1hZ2VVUkx9IGFsdD1cIlwiIGNsYXNzTmFtZT1cImNhcmQtaW1nLXRvcFwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgIDxoMT57cG9zdC50aXRsZX08L2gxPlxyXG4gICAgICAgIDxwPntwb3N0LmNvbnRlbnR9PC9wPiAqL31cclxuICAgICAgICA8YSBocmVmPXtjb250YWN0by5MaW5rZWRJblVSTH0gdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiPkxpbmtlZEluPC9hPlxyXG4gICAgICAgPC9kaXY+XHJcbiAgICB7LyogPC9kaXY+ICovfVxyXG4gIDwvZGl2PlxyXG4pO1xyXG5jb25zdCBjdXN0b200MDQ9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxMYXlvdXQgdGl0bGU9XCJNeSBCbG9nXCIgZm9vdGVyPXt0cnVlfSBkYXJrPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICB7Y29udGFjdG9zLm1hcCgoY29udGFjdG8sIGkpID0+IChcclxuICAgICAgICAgICAgPFBvc3RDYXJkIGNvbnRhY3RvPXtjb250YWN0b30ga2V5PXtpfSAvPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgKTtcclxuICB9O1xyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IGN1c3RvbTQwNDsiXSwic291cmNlUm9vdCI6IiJ9