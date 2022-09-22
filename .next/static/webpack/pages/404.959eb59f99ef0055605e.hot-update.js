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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvNDA0LmpzIl0sIm5hbWVzIjpbIlBvc3RDYXJkIiwiY29udGFjdG8iLCJMaW5rZWRJblVSTCIsImN1c3RvbTQwNCIsImNvbnRhY3RvcyIsImkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVc7QUFBQSxNQUFHQyxRQUFILFFBQUdBLFFBQUg7QUFBQTtBQUFBO0FBQ2pCO0FBQ0k7QUFBSyxlQUFTLEVBQUMsTUFBZjtBQUFBLDZCQU9JO0FBQUcsWUFBSSxFQUFFQSxRQUFRLENBQUNDLFdBQWxCO0FBQStCLGNBQU0sRUFBQyxRQUF0QztBQUErQyxpQkFBUyxFQUFDLDJCQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGYTtBQUFBLENBQWpCOztLQUFNRixROztBQWNOLElBQU1HLFNBQVMsR0FBRSxTQUFYQSxTQUFXLEdBQU07QUFDbkIsc0JBQ0UsOERBQUMsc0RBQUQ7QUFBUSxTQUFLLEVBQUMsU0FBZDtBQUF3QixVQUFNLEVBQUUsSUFBaEM7QUFBc0MsUUFBSSxNQUExQztBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLEtBQWY7QUFBQSxnQkFDR0MsbURBQUEsQ0FBYyxVQUFDSCxRQUFELEVBQVdJLENBQVg7QUFBQSw0QkFDYiw4REFBQyxRQUFEO0FBQVUsa0JBQVEsRUFBRUo7QUFBcEIsV0FBbUNJLENBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGE7QUFBQSxPQUFkO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVNELENBVkg7O0FBWUUsK0RBQWVGLFNBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvNDA0Ljk1OWViNTlmOTllZjAwNTU2MDVlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnQvTGF5b3V0XCI7XHJcbi8vIGltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbi8vIGNvbnN0IGN1c3RvbTQwNCA9ICgpID0+IChcclxuLy8gICAgIDxMYXlvdXQ+XHJcbi8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4vLyAgICAgICAgIDxoMT40MDQ8L2gxPlxyXG4vLyAgICAgICAgIDxwPkVzdGEgcGFnaW5hIG5vIGV4aXN0ZS4gUG9yIGZhdm9yIHJldG9ybmUgYWwgXHJcbi8vICAgICAgICAgICAgIDxMaW5rICBocmVmPVwiL1wiPlxyXG4vLyAgICAgICAgICAgICAgICAgPGE+SG9tZTwvYT5cclxuLy8gICAgICAgICAgICAgPC9MaW5rPlxyXG4vLyAgICAgICAgIDwvcD5cclxuLy8gICAgICAgICA8L2Rpdj5cclxuLy8gICAgIDwvTGF5b3V0PlxyXG4vLyApXHJcbi8vIGV4cG9ydCBkZWZhdWx0IGN1c3RvbTQwNFxyXG5cclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnQvTGF5b3V0XCI7XHJcbmltcG9ydCB7IGNvbnRhY3RvcyB9IGZyb20gXCIuLi9wcm9maWxlXCI7XHJcblxyXG5jb25zdCBQb3N0Q2FyZCA9ICh7IGNvbnRhY3RvIH0pID0+IChcclxuLy8gICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3dcIj4gKi99XHJcbiAgICAgICAgey8qIDxpbWcgc3JjPXtwb3N0LmltYWdlVVJMfSBhbHQ9XCJcIiBjbGFzc05hbWU9XCJjYXJkLWltZy10b3BcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICA8aDE+e3Bvc3QudGl0bGV9PC9oMT5cclxuICAgICAgICA8cD57cG9zdC5jb250ZW50fTwvcD4gKi99XHJcbiAgICAgICAgPGEgaHJlZj17Y29udGFjdG8uTGlua2VkSW5VUkx9IHRhcmdldD1cIl9ibGFua1wiIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIj5MaW5rZWRJbjwvYT5cclxuICAgICAgIHsvKiA8L2Rpdj4gKi99XHJcbiAgICB7LyogPC9kaXY+ICovfVxyXG4gIDwvZGl2PlxyXG4pO1xyXG5jb25zdCBjdXN0b200MDQ9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxMYXlvdXQgdGl0bGU9XCJNeSBCbG9nXCIgZm9vdGVyPXt0cnVlfSBkYXJrPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICB7Y29udGFjdG9zLm1hcCgoY29udGFjdG8sIGkpID0+IChcclxuICAgICAgICAgICAgPFBvc3RDYXJkIGNvbnRhY3RvPXtjb250YWN0b30ga2V5PXtpfSAvPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgKTtcclxuICB9O1xyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IGN1c3RvbTQwNDsiXSwic291cmNlUm9vdCI6IiJ9