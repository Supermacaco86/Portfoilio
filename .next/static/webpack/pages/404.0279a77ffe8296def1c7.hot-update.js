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
  var post = _ref.post;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "col-md-4",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "card",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "overflow",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: post.imageURL,
          alt: "",
          className: "card-img-top"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 9
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 7
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "card-body",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          children: post.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: post.content
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: post.docu,
          target: "_blank",
          className: "btn btn-outline-secondary",
          children: "Documentacion"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 9
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 7
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 3
  }, _this);
};

_c = PostCard;

var blog = function blog() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Layout__WEBPACK_IMPORTED_MODULE_2__.default, {
    title: "My Blog",
    footer: false,
    dark: true,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "row",
      children: _profile__WEBPACK_IMPORTED_MODULE_3__.posts.map(function (post, i) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PostCard, {
          post: post
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

/* harmony default export */ __webpack_exports__["default"] = (blog);

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


/***/ }),

/***/ "./profile.js":
/*!********************!*\
  !*** ./profile.js ***!
  \********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "habilidades": function() { return /* binding */ habilidades; },
/* harmony export */   "experiencias": function() { return /* binding */ experiencias; },
/* harmony export */   "proyectos": function() { return /* binding */ proyectos; },
/* harmony export */   "posts": function() { return /* binding */ posts; },
/* harmony export */   "contactos": function() { return /* binding */ contactos; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
var habilidades = [{
  habilidades: 'Javascript',
  percentage: 88
}, {
  habilidades: 'React',
  percentage: 70
}, {
  habilidades: 'Redux',
  percentage: 76
}, {
  habilidades: 'Express',
  percentage: 70
}, {
  habilidades: 'Sequelize',
  percentage: 80
}, {
  habilidades: 'Postgres',
  percentage: 75
}];
var experiencias = [{
  titulo: 'Full Stack Teaching Assistant',
  donde: 'Henry Bootcamp, Buenos Aires, Argentina.',
  descripcion: 'Coordinacion de un grupo de estudiantes para lograr la integración al equipo de estudio, asistir a la resolución de ejercicios y promover la colaboracion grupal ',
  fecha: 'Mayo 7 - julio 7.'
}];
var proyectos = [{
  titulo: 'Full Stack Web Developer -  App Más Salud',
  // donde: 'Henry Bootcamp, Buenos Aires, Argentina',
  descripcion: 'App de Salud, cuyos usuarios son pacientes y médicos, los cuales pueden gestionar turnos, búsquedas de profesionales filtrados por especialidad y locación, entre sus funcionalidades se encuentran la de login con Google Login, respuesta automática vía mail con Nodemailer, un calendario implementado con @material-ui/pickers, pasarela de pago para MercadoPago.',
  url: 'https://app-clinica.vercel.app',
  fecha: 'Agosto 12 - Septiembre 8',
  imagen: "appSalud.png"
}, {
  titulo: 'Full Stack Web Developer - Dogs App',
  donde: 'Henry Bootcamp, Buenos Aires, Argentina.',
  descripcion: 'Diseñar y desarrollar una App de perros que incluía: búsquedas, filtrados, ordenamientos y creación.Desarrollar la app usando para el Front React, Redux, CSS puro y Back desarrollado en Node.js con Express. Base de datos en PostgreSQL y Sequelize. Deploy realizado con Heroku y Vercel.',
  url: 'https://pi-dog-nu.vercel.app',
  fecha: 'Julio 15 - Agosto 4',
  imagen: "CapturaDog.png"
}, {
  titulo: 'Full Stack Web Developer - Food App',
  donde: 'Henry Bootcamp, Buenos Aires, Argentina. ',
  descripcion: 'Diseñar y desarrollar una App de gastronomía que incluía: búsquedas, filtrados, ordenamientos y creación. Desarrollar la app usando para el Front React, Redux, CSS puro y Back desarrollado en Node.js con Express. Base de datos en PostgreSQL y Sequelize. Deploy realizado con Heroku y Vercel.',
  url: 'https://pi-food-three.vercel.app',
  fecha: 'Junio 1 - Julio 7',
  imagen: "CapturaFood.png"
}];
var posts = [{
  title: "Javascript",
  content: "Descripcion",
  imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
  docu: "https://developer.mozilla.org/es/docs/Web/JavaScript"
}, {
  title: "React",
  content: "Descripcion",
  imageURL: "https://reactjs.org/logo-og.png",
  docu: "https://es.reactjs.org/docs/getting-started.html"
}, {
  title: "Redux",
  content: "Descripcion",
  imageURL: "https://cdn.worldvectorlogo.com/logos/redux.svg",
  docu: "https://es.redux.js.org/"
}, {
  title: "Express",
  content: "Descripcion",
  imageURL: "https://fd-development.com/images/expressjs.png",
  docu: "https://expressjs.com/es/"
}, {
  title: "Sequelize",
  content: "Descripcion",
  imageURL: "https://google.github.io/sqlcommenter/images/sequelize-logo.png",
  docu: "https://sequelize.org/"
}, {
  title: "PostgreSQL",
  content: "Descripcion",
  imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/640px-Postgresql_elephant.svg.png",
  docu: "https://www.postgresql.org/docs/"
}];
var contactos = [{
  LinkedInURL: "https://www.linkedin.com/in/martin--figueroa/ "
}];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvNDA0LmpzIiwid2VicGFjazovL19OX0UvLi9wcm9maWxlLmpzIl0sIm5hbWVzIjpbIlBvc3RDYXJkIiwicG9zdCIsImltYWdlVVJMIiwidGl0bGUiLCJjb250ZW50IiwiZG9jdSIsImJsb2ciLCJwb3N0cyIsImkiLCJoYWJpbGlkYWRlcyIsInBlcmNlbnRhZ2UiLCJleHBlcmllbmNpYXMiLCJ0aXR1bG8iLCJkb25kZSIsImRlc2NyaXBjaW9uIiwiZmVjaGEiLCJwcm95ZWN0b3MiLCJ1cmwiLCJpbWFnZW4iLCJjb250YWN0b3MiLCJMaW5rZWRJblVSTCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVztBQUFBLE1BQUdDLElBQUgsUUFBR0EsSUFBSDtBQUFBLHNCQUNmO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQyxNQUFmO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDLFVBQWY7QUFBQSwrQkFDRTtBQUFLLGFBQUcsRUFBRUEsSUFBSSxDQUFDQyxRQUFmO0FBQXlCLGFBQUcsRUFBQyxFQUE3QjtBQUFnQyxtQkFBUyxFQUFDO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFJRTtBQUFLLGlCQUFTLEVBQUMsV0FBZjtBQUFBLGdDQUNFO0FBQUEsb0JBQUtELElBQUksQ0FBQ0U7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBQSxvQkFBSUYsSUFBSSxDQUFDRztBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsZUFHRTtBQUFHLGNBQUksRUFBRUgsSUFBSSxDQUFD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QixFQWFqQjtBQUNJRixPQUFLLEVBQUMsT0FEVjtBQUVJQyxTQUFPLEVBQUMsYUFGWjtBQUdJRixVQUFRLEVBQUMsaURBSGI7QUFJSUcsTUFBSSxFQUFDO0FBSlQsQ0FiaUIsRUFtQmpCO0FBQ0lGLE9BQUssRUFBQyxTQURWO0FBRUlDLFNBQU8sRUFBQyxhQUZaO0FBR0lGLFVBQVEsRUFBQyxpREFIYjtBQUlJRyxNQUFJLEVBQUM7QUFKVCxDQW5CaUIsRUF5QmpCO0FBQ0lGLE9BQUssRUFBQyxXQURWO0FBRUlDLFNBQU8sRUFBQyxhQUZaO0FBR0lGLFVBQVEsRUFBQyxpRUFIYjtBQUlJRyxNQUFJLEVBQUM7QUFKVCxDQXpCaUIsRUErQmpCO0FBQ0lGLE9BQUssRUFBQyxZQURWO0FBRUlDLFNBQU8sRUFBQyxhQUZaO0FBR0lGLFVBQVEsRUFBQyxxSEFIYjtBQUlJRyxNQUFJLEVBQUM7QUFKVCxDQS9CaUIsQ0FBZDtBQXVDQSxJQUFNYyxTQUFTLEdBQUcsQ0FDckI7QUFDSUMsYUFBVyxFQUFDO0FBRGhCLENBRHFCLENBQWxCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzLzQwNC4wMjc5YTc3ZmZlODI5NmRlZjFjNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50L0xheW91dFwiO1xyXG4vLyBpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG4vLyBjb25zdCBjdXN0b200MDQgPSAoKSA9PiAoXHJcbi8vICAgICA8TGF5b3V0PlxyXG4vLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuLy8gICAgICAgICA8aDE+NDA0PC9oMT5cclxuLy8gICAgICAgICA8cD5Fc3RhIHBhZ2luYSBubyBleGlzdGUuIFBvciBmYXZvciByZXRvcm5lIGFsIFxyXG4vLyAgICAgICAgICAgICA8TGluayAgaHJlZj1cIi9cIj5cclxuLy8gICAgICAgICAgICAgICAgIDxhPkhvbWU8L2E+XHJcbi8vICAgICAgICAgICAgIDwvTGluaz5cclxuLy8gICAgICAgICA8L3A+XHJcbi8vICAgICAgICAgPC9kaXY+XHJcbi8vICAgICA8L0xheW91dD5cclxuLy8gKVxyXG4vLyBleHBvcnQgZGVmYXVsdCBjdXN0b200MDRcclxuXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50L0xheW91dFwiO1xyXG5pbXBvcnQgeyBwb3N0cyB9IGZyb20gXCIuLi9wcm9maWxlXCI7XHJcblxyXG5jb25zdCBQb3N0Q2FyZCA9ICh7IHBvc3QgfSkgPT4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTRcIj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93XCI+XHJcbiAgICAgICAgPGltZyBzcmM9e3Bvc3QuaW1hZ2VVUkx9IGFsdD1cIlwiIGNsYXNzTmFtZT1cImNhcmQtaW1nLXRvcFwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgIDxoMT57cG9zdC50aXRsZX08L2gxPlxyXG4gICAgICAgIDxwPntwb3N0LmNvbnRlbnR9PC9wPlxyXG4gICAgICAgIDxhIGhyZWY9e3Bvc3QuZG9jdX0gdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiPkRvY3VtZW50YWNpb248L2E+XHJcbiAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4pO1xyXG5jb25zdCBibG9nID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExheW91dCB0aXRsZT1cIk15IEJsb2dcIiBmb290ZXI9e2ZhbHNlfSBkYXJrPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICB7cG9zdHMubWFwKChwb3N0LCBpKSA9PiAoXHJcbiAgICAgICAgICAgIDxQb3N0Q2FyZCBwb3N0PXtwb3N0fSBrZXk9e2l9IC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICApO1xyXG4gIH07XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgYmxvZzsiLCJleHBvcnQgY29uc3QgaGFiaWxpZGFkZXMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgaGFiaWxpZGFkZXM6ICdKYXZhc2NyaXB0JyxcclxuICAgICAgICBwZXJjZW50YWdlOiA4OCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaGFiaWxpZGFkZXM6ICdSZWFjdCcsXHJcbiAgICAgICAgcGVyY2VudGFnZTogNzAsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGhhYmlsaWRhZGVzOiAnUmVkdXgnLFxyXG4gICAgICAgIHBlcmNlbnRhZ2U6IDc2LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBoYWJpbGlkYWRlczogJ0V4cHJlc3MnLFxyXG4gICAgICAgIHBlcmNlbnRhZ2U6IDcwLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBoYWJpbGlkYWRlczogJ1NlcXVlbGl6ZScsXHJcbiAgICAgICAgcGVyY2VudGFnZTogODAsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGhhYmlsaWRhZGVzOiAnUG9zdGdyZXMnLFxyXG4gICAgICAgIHBlcmNlbnRhZ2U6IDc1LFxyXG4gICAgfSxcclxuXHJcbl1cclxuXHJcbmV4cG9ydCBjb25zdCBleHBlcmllbmNpYXMgPVtcclxuICAgIFxyXG4gICAge1xyXG4gICAgICAgIHRpdHVsbzogJ0Z1bGwgU3RhY2sgVGVhY2hpbmcgQXNzaXN0YW50JyxcclxuICAgICAgICBkb25kZTonSGVucnkgQm9vdGNhbXAsIEJ1ZW5vcyBBaXJlcywgQXJnZW50aW5hLicsXHJcbiAgICAgICAgZGVzY3JpcGNpb246J0Nvb3JkaW5hY2lvbiBkZSB1biBncnVwbyBkZSBlc3R1ZGlhbnRlcyBwYXJhIGxvZ3JhciBsYSBpbnRlZ3JhY2nDs24gYWwgZXF1aXBvIGRlIGVzdHVkaW8sIGFzaXN0aXIgYSBsYSByZXNvbHVjacOzbiBkZSBlamVyY2ljaW9zIHkgcHJvbW92ZXIgbGEgY29sYWJvcmFjaW9uIGdydXBhbCAnLFxyXG4gICAgICAgIGZlY2hhOidNYXlvIDcgLSBqdWxpbyA3LicsXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbl1cclxuXHJcbmV4cG9ydCBjb25zdCBwcm95ZWN0b3MgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgdGl0dWxvOiAnRnVsbCBTdGFjayBXZWIgRGV2ZWxvcGVyIC0gIEFwcCBNw6FzIFNhbHVkJyxcclxuICAgICAgICAvLyBkb25kZTogJ0hlbnJ5IEJvb3RjYW1wLCBCdWVub3MgQWlyZXMsIEFyZ2VudGluYScsXHJcbiAgICAgICAgZGVzY3JpcGNpb246J0FwcCBkZSBTYWx1ZCwgY3V5b3MgdXN1YXJpb3Mgc29uIHBhY2llbnRlcyB5IG3DqWRpY29zLCBsb3MgY3VhbGVzIHB1ZWRlbiBnZXN0aW9uYXIgdHVybm9zLCBiw7pzcXVlZGFzIGRlIHByb2Zlc2lvbmFsZXMgZmlsdHJhZG9zIHBvciBlc3BlY2lhbGlkYWQgeSBsb2NhY2nDs24sIGVudHJlIHN1cyBmdW5jaW9uYWxpZGFkZXMgc2UgZW5jdWVudHJhbiBsYSBkZSBsb2dpbiBjb24gR29vZ2xlIExvZ2luLCByZXNwdWVzdGEgYXV0b23DoXRpY2EgdsOtYSBtYWlsIGNvbiBOb2RlbWFpbGVyLCB1biBjYWxlbmRhcmlvIGltcGxlbWVudGFkbyBjb24gQG1hdGVyaWFsLXVpL3BpY2tlcnMsIHBhc2FyZWxhIGRlIHBhZ28gcGFyYSBNZXJjYWRvUGFnby4nLFxyXG4gICAgICAgIHVybDonaHR0cHM6Ly9hcHAtY2xpbmljYS52ZXJjZWwuYXBwJyxcclxuICAgICAgICBmZWNoYTonQWdvc3RvIDEyIC0gU2VwdGllbWJyZSA4JyxcclxuICAgICAgICBpbWFnZW46XCJhcHBTYWx1ZC5wbmdcIlxyXG4gICAgICAgIFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXR1bG86ICdGdWxsIFN0YWNrIFdlYiBEZXZlbG9wZXIgLSBEb2dzIEFwcCcsXHJcbiAgICAgICAgZG9uZGU6J0hlbnJ5IEJvb3RjYW1wLCBCdWVub3MgQWlyZXMsIEFyZ2VudGluYS4nLFxyXG4gICAgICAgIGRlc2NyaXBjaW9uOidEaXNlw7FhciB5IGRlc2Fycm9sbGFyIHVuYSBBcHAgZGUgcGVycm9zIHF1ZSBpbmNsdcOtYTogYsO6c3F1ZWRhcywgZmlsdHJhZG9zLCBvcmRlbmFtaWVudG9zIHkgY3JlYWNpw7NuLkRlc2Fycm9sbGFyIGxhIGFwcCB1c2FuZG8gcGFyYSBlbCBGcm9udCBSZWFjdCwgUmVkdXgsIENTUyBwdXJvIHkgQmFjayBkZXNhcnJvbGxhZG8gZW4gTm9kZS5qcyBjb24gRXhwcmVzcy4gQmFzZSBkZSBkYXRvcyBlbiBQb3N0Z3JlU1FMIHkgU2VxdWVsaXplLiBEZXBsb3kgcmVhbGl6YWRvIGNvbiBIZXJva3UgeSBWZXJjZWwuJyxcclxuICAgICAgICB1cmw6ICdodHRwczovL3BpLWRvZy1udS52ZXJjZWwuYXBwJyxcclxuICAgICAgICBmZWNoYTonSnVsaW8gMTUgLSBBZ29zdG8gNCcsXHJcbiAgICAgICAgaW1hZ2VuOlwiQ2FwdHVyYURvZy5wbmdcIlxyXG4gICAgICAgIFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXR1bG86ICdGdWxsIFN0YWNrIFdlYiBEZXZlbG9wZXIgLSBGb29kIEFwcCcsXHJcbiAgICAgICAgZG9uZGU6J0hlbnJ5IEJvb3RjYW1wLCBCdWVub3MgQWlyZXMsIEFyZ2VudGluYS4gJyxcclxuICAgICAgICBkZXNjcmlwY2lvbjonRGlzZcOxYXIgeSBkZXNhcnJvbGxhciB1bmEgQXBwIGRlIGdhc3Ryb25vbcOtYSBxdWUgaW5jbHXDrWE6IGLDunNxdWVkYXMsIGZpbHRyYWRvcywgb3JkZW5hbWllbnRvcyB5IGNyZWFjacOzbi4gRGVzYXJyb2xsYXIgbGEgYXBwIHVzYW5kbyBwYXJhIGVsIEZyb250IFJlYWN0LCBSZWR1eCwgQ1NTIHB1cm8geSBCYWNrIGRlc2Fycm9sbGFkbyBlbiBOb2RlLmpzIGNvbiBFeHByZXNzLiBCYXNlIGRlIGRhdG9zIGVuIFBvc3RncmVTUUwgeSBTZXF1ZWxpemUuIERlcGxveSByZWFsaXphZG8gY29uIEhlcm9rdSB5IFZlcmNlbC4nLFxyXG4gICAgICAgIHVybDonaHR0cHM6Ly9waS1mb29kLXRocmVlLnZlcmNlbC5hcHAnLFxyXG4gICAgICAgIGZlY2hhOidKdW5pbyAxIC0gSnVsaW8gNycsXHJcbiAgICAgICAgaW1hZ2VuOiBcIkNhcHR1cmFGb29kLnBuZ1wiXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG5dXHJcblxyXG5leHBvcnQgY29uc3QgcG9zdHMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6XCJKYXZhc2NyaXB0XCIsXHJcbiAgICAgICAgY29udGVudDpcIkRlc2NyaXBjaW9uXCIsXHJcbiAgICAgICAgaW1hZ2VVUkw6XCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iLzkvOTkvVW5vZmZpY2lhbF9KYXZhU2NyaXB0X2xvZ29fMi5zdmcvMTIwMHB4LVVub2ZmaWNpYWxfSmF2YVNjcmlwdF9sb2dvXzIuc3ZnLnBuZ1wiLFxyXG4gICAgICAgIGRvY3U6XCJodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lcy9kb2NzL1dlYi9KYXZhU2NyaXB0XCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6XCJSZWFjdFwiLFxyXG4gICAgICAgIGNvbnRlbnQ6XCJEZXNjcmlwY2lvblwiLFxyXG4gICAgICAgIGltYWdlVVJMOlwiaHR0cHM6Ly9yZWFjdGpzLm9yZy9sb2dvLW9nLnBuZ1wiLFxyXG4gICAgICAgIGRvY3U6XCJodHRwczovL2VzLnJlYWN0anMub3JnL2RvY3MvZ2V0dGluZy1zdGFydGVkLmh0bWxcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTpcIlJlZHV4XCIsXHJcbiAgICAgICAgY29udGVudDpcIkRlc2NyaXBjaW9uXCIsXHJcbiAgICAgICAgaW1hZ2VVUkw6XCJodHRwczovL2Nkbi53b3JsZHZlY3RvcmxvZ28uY29tL2xvZ29zL3JlZHV4LnN2Z1wiLFxyXG4gICAgICAgIGRvY3U6XCJodHRwczovL2VzLnJlZHV4LmpzLm9yZy9cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTpcIkV4cHJlc3NcIixcclxuICAgICAgICBjb250ZW50OlwiRGVzY3JpcGNpb25cIixcclxuICAgICAgICBpbWFnZVVSTDpcImh0dHBzOi8vZmQtZGV2ZWxvcG1lbnQuY29tL2ltYWdlcy9leHByZXNzanMucG5nXCIsXHJcbiAgICAgICAgZG9jdTpcImh0dHBzOi8vZXhwcmVzc2pzLmNvbS9lcy9cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTpcIlNlcXVlbGl6ZVwiLFxyXG4gICAgICAgIGNvbnRlbnQ6XCJEZXNjcmlwY2lvblwiLFxyXG4gICAgICAgIGltYWdlVVJMOlwiaHR0cHM6Ly9nb29nbGUuZ2l0aHViLmlvL3NxbGNvbW1lbnRlci9pbWFnZXMvc2VxdWVsaXplLWxvZ28ucG5nXCIsXHJcbiAgICAgICAgZG9jdTpcImh0dHBzOi8vc2VxdWVsaXplLm9yZy9cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTpcIlBvc3RncmVTUUxcIixcclxuICAgICAgICBjb250ZW50OlwiRGVzY3JpcGNpb25cIixcclxuICAgICAgICBpbWFnZVVSTDpcImh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvdGh1bWIvMi8yOS9Qb3N0Z3Jlc3FsX2VsZXBoYW50LnN2Zy82NDBweC1Qb3N0Z3Jlc3FsX2VsZXBoYW50LnN2Zy5wbmdcIixcclxuICAgICAgICBkb2N1OlwiaHR0cHM6Ly93d3cucG9zdGdyZXNxbC5vcmcvZG9jcy9cIlxyXG4gICAgfVxyXG5dXHJcblxyXG5leHBvcnQgY29uc3QgY29udGFjdG9zID0gW1xyXG4gICAge1xyXG4gICAgICAgIExpbmtlZEluVVJMOlwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL21hcnRpbi0tZmlndWVyb2EvIFwiXHJcbiAgICB9XHJcbl0iXSwic291cmNlUm9vdCI6IiJ9