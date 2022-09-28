exports.id = "component_Layout_js-profile_js";
exports.ids = ["component_Layout_js-profile_js"];
exports.modules = {

/***/ "./component/Layout.js":
/*!*****************************!*\
  !*** ./component/Layout.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavBar */ "./component/NavBar.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nprogress */ "nprogress");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\Martin Figueroa\\Desktop\\Portfoilio\\component\\Layout.js";






const Layout = ({
  children,
  footer = true,
  dark = false
}) => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    const handleRouteChange = url => {
      console.log(url);
      nprogress__WEBPACK_IMPORTED_MODULE_5___default().start();
    };

    router.events.on('routeChangeStart', handleRouteChange);
    router.events.on('routeChangeComplete', () => nprogress__WEBPACK_IMPORTED_MODULE_5___default().done());
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: dark ? 'bg-dark' : '',
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavBar__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      className: "container py-4",
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }, undefined), footer && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("footer", {
      className: "bg-dark text-light text-center",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "container p-4",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          children: "\xA9 Martin Figueroa Portfolio"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: ["2022 - ", new Date().getFullYear()]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 15
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 3
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./component/LenguajeSelector.js":
/*!***************************************!*\
  !*** ./component/LenguajeSelector.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ LeguajeSelector; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\Martin Figueroa\\Desktop\\Portfoilio\\component\\LenguajeSelector.js";


function LeguajeSelector() {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  console.log(router);

  const changeLang = e => {
    router.push(router.pathname, router.pathname, {
      locale: e.target.value
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("select", {
    onChange: changeLang,
    className: "btn btn-secondary",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
      value: "es",
      children: "Espa\xF1ol"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("option", {
      value: "en",
      children: "Ingles"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./component/NavBar.js":
/*!*****************************!*\
  !*** ./component/NavBar.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _LenguajeSelector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LenguajeSelector */ "./component/LenguajeSelector.js");

var _jsxFileName = "C:\\Users\\Martin Figueroa\\Desktop\\Portfoilio\\component\\NavBar.js";



const NavBar = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
  className: "navbar navbar-expand-lg navbar-dark bg-dark",
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "container",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
      href: "/",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        className: "navbar-brand",
        children: "Portfolio"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      className: "navbar-toggler",
      type: "button",
      "data-toggle": "collapse",
      "data-target": "#navbarNav",
      "aria-controls": "navbarNav",
      "aria-expanded": "false",
      "aria-label": "Toggle navigation",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "navbar-toggler-icon"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 5
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 3
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "collapse navbar-collapse",
      id: "navbarNav",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        className: "navbar-nav ml-auto",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LenguajeSelector__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 5
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          className: "nav-item",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "/blog",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              className: "nav-link",
              children: "Tecnologias"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 18,
              columnNumber: 13
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 9
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 7
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          className: "nav-item",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "github",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              className: "nav-link",
              children: "GitHub"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 13
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 9
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 7
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 5
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 3
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 2
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 5,
  columnNumber: 1
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ }),

/***/ "./profile.js":
/*!********************!*\
  !*** ./profile.js ***!
  \********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "habilidades": function() { return /* binding */ habilidades; },
/* harmony export */   "experiencias": function() { return /* binding */ experiencias; },
/* harmony export */   "proyectos": function() { return /* binding */ proyectos; },
/* harmony export */   "posts": function() { return /* binding */ posts; }
/* harmony export */ });
const habilidades = [{
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
const experiencias = [{
  titulo: 'Full Stack Teaching Assistant',
  donde: 'Henry Bootcamp, Buenos Aires, Argentina.',
  descripcion: 'Coordinacion de un grupo de estudiantes para lograr la integración al equipo de estudio, asistir a la resolución de ejercicios y promover la colaboracion grupal ',
  fecha: 'Mayo 7 - julio 7.'
}];
const proyectos = [{
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
const posts = [{
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

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9jb21wb25lbnQvTGF5b3V0LmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL2NvbXBvbmVudC9MZW5ndWFqZVNlbGVjdG9yLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL2NvbXBvbmVudC9OYXZCYXIuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vcHJvZmlsZS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vaWdub3JlZHxDOlxcVXNlcnNcXE1hcnRpbiBGaWd1ZXJvYVxcRGVza3RvcFxcUG9ydGZvaWxpb1xcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxuZXh0LXNlcnZlclxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sIm5hbWVzIjpbIkxheW91dCIsImNoaWxkcmVuIiwiZm9vdGVyIiwiZGFyayIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsImhhbmRsZVJvdXRlQ2hhbmdlIiwidXJsIiwiY29uc29sZSIsImxvZyIsIk5Qcm9ncmVzcyIsImV2ZW50cyIsIm9uIiwib2ZmIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiTGVndWFqZVNlbGVjdG9yIiwiY2hhbmdlTGFuZyIsImUiLCJwdXNoIiwicGF0aG5hbWUiLCJsb2NhbGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIk5hdkJhciIsImhhYmlsaWRhZGVzIiwicGVyY2VudGFnZSIsImV4cGVyaWVuY2lhcyIsInRpdHVsbyIsImRvbmRlIiwiZGVzY3JpcGNpb24iLCJmZWNoYSIsInByb3llY3RvcyIsImltYWdlbiIsInBvc3RzIiwidGl0bGUiLCJjb250ZW50IiwiaW1hZ2VVUkwiLCJkb2N1Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxNQUFNLEdBQUcsQ0FBQztBQUFFQyxVQUFGO0FBQVlDLFFBQU0sR0FBRyxJQUFyQjtBQUEyQkMsTUFBSSxH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QixFQU9qQjtBQUNJSCxPQUFLLEVBQUMsT0FEVjtBQUVJQyxTQUFPLEVBQUMsYUFGWjtBQUdJQyxVQUFRLEVBQUMsaUNBSGI7QUFJSUMsTUFBSSxFQUFDO0FBSlQsQ0FQaUIsRUFhakI7QUFDSUgsT0FBSyxFQUFDLE9BRFY7QUFFSUMsU0FBTyxFQUFDLGFBRlo7QUFHSUMsVUFBUSxFQUFDLGlEQUhiO0FBSUlDLE1BQUksRUFBQztBQUpULENBYmlCLEVBbUJqQjtBQUNJSCxPQUFLLEVBQUMsU0FEVjtBQUVJQyxTQUFPLEVBQUMsYUFGWjtBQUdJQyxVQUFRLEVBQUMsaURBSGI7QUFJSUMsTUFBSSxFQUFDO0FBSlQsQ0FuQmlCLEVBeUJqQjtBQUNJSCxPQUFLLEVBQUMsV0FEVjtBQUVJQyxTQUFPLEVBQUMsYUFGWjtBQUdJQyxVQUFRLEVBQUMsaUVBSGI7QUFJSUMsTUFBSSxFQUFDO0FBSlQsQ0F6QmlCLEVBK0JqQjtBQUNJSCxPQUFLLEVBQUMsWUFEVjtBQUVJQyxTQUFPLEVBQUMsYUFGWjtBQUdJQyxVQUFRLEVBQUMscUhBSGI7QUFJSUMsTUFBSSxFQUFDO0FBSlQsQ0EvQmlCLENBQWQsQzs7Ozs7Ozs7OztBQ3RFUCxlIiwiZmlsZSI6ImNvbXBvbmVudF9MYXlvdXRfanMtcHJvZmlsZV9qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOYXZCYXIgZnJvbSBcIi4vTmF2QmFyXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgTlByb2dyZXNzIGZyb20gXCJucHJvZ3Jlc3NcIjtcclxuXHJcbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuLCBmb290ZXIgPSB0cnVlLCBkYXJrID0gZmFsc2UgfSkgPT4ge1xyXG5cclxuY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgY29uc3QgaGFuZGxlUm91dGVDaGFuZ2UgPSB1cmwgPT57XHJcbiAgICAgICBjb25zb2xlLmxvZyh1cmwpXHJcbiAgICAgICBOUHJvZ3Jlc3Muc3RhcnQoKTtcclxuICAgICAgfVxyXG4gICAgcm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VTdGFydCcsIGhhbmRsZVJvdXRlQ2hhbmdlKVxyXG4gICAgcm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VDb21wbGV0ZScsKCk9PiBOUHJvZ3Jlc3MuZG9uZSgpKVxyXG4gICAgcmV0dXJuKCk9PntcclxuICAgICAgcm91dGVyLmV2ZW50cy5vZmYoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBoYW5kbGVSb3V0ZUNoYW5nZSlcclxuICAgIH1cclxuICB9LFtdKVxyXG5cclxucmV0dXJuKFxyXG4gIDxkaXYgY2xhc3NOYW1lPXtkYXJrPyAnYmctZGFyayc6Jyd9PlxyXG4gICAgPE5hdkJhciAvPlxyXG4gICAgPG1haW4gY2xhc3NOYW1lPVwiY29udGFpbmVyIHB5LTRcIj5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L21haW4+XHJcbiAgIHtcclxuICAgZm9vdGVyICYmKCA8Zm9vdGVyIGNsYXNzTmFtZT1cImJnLWRhcmsgdGV4dC1saWdodCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHAtNFwiPlxyXG4gICAgICAgICAgICA8aDE+JmNvcHk7IE1hcnRpbiBGaWd1ZXJvYSBQb3J0Zm9saW88L2gxPlxyXG4gICAgICAgICAgICA8cD4yMDIyIC0ge25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX08L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgKVxyXG4gICAgfVxyXG4gIDwvZGl2PlxyXG4pO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExlZ3VhamVTZWxlY3RvciAoKXtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc29sZS5sb2cocm91dGVyKVxyXG4gICAgY29uc3QgY2hhbmdlTGFuZyA9IChlKSA9PiB7XHJcbiAgICByb3V0ZXIucHVzaChyb3V0ZXIucGF0aG5hbWUsIHJvdXRlci5wYXRobmFtZSx7XHJcbiAgICAgICAgbG9jYWxlOiBlLnRhcmdldC52YWx1ZVxyXG4gICAgfSlcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxzZWxlY3Qgb25DaGFuZ2U9e2NoYW5nZUxhbmd9IGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJlc1wiPkVzcGHDsW9sPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJlblwiPkluZ2xlczwvb3B0aW9uPlxyXG4gICAgICAgIDwvc2VsZWN0PlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgTGVndWFqZVNlbGVjdG9yIGZyb20gJy4vTGVuZ3VhamVTZWxlY3RvcidcclxuXHJcbmNvbnN0IE5hdkJhciA9ICgpID0+IChcclxuPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWV4cGFuZC1sZyBuYXZiYXItZGFyayBiZy1kYXJrXCI+XHJcbiA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIj5Qb3J0Zm9saW88L2E+ICAgXHJcbiAgICA8L0xpbms+XHJcbiAgPGJ1dHRvbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlclwiIHR5cGU9XCJidXR0b25cIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS10YXJnZXQ9XCIjbmF2YmFyTmF2XCIgYXJpYS1jb250cm9scz1cIm5hdmJhck5hdlwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIGFyaWEtbGFiZWw9XCJUb2dnbGUgbmF2aWdhdGlvblwiPlxyXG4gICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXItaWNvblwiPjwvc3Bhbj5cclxuICA8L2J1dHRvbj4gXHJcbiAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIiBpZD1cIm5hdmJhck5hdlwiPlxyXG4gICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgbWwtYXV0b1wiPlxyXG4gICAgPExlZ3VhamVTZWxlY3RvciAvPlxyXG4gICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICA8TGluayBocmVmPVwiL2Jsb2dcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5UZWNub2xvZ2lhczwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvbGk+XHJcbiAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCJnaXRodWJcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5HaXRIdWI8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2xpPlxyXG4gICAgPC91bD5cclxuICA8L2Rpdj5cclxuIDwvZGl2PlxyXG48L25hdj5cclxuKSBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdkJhciIsImV4cG9ydCBjb25zdCBoYWJpbGlkYWRlcyA9IFtcclxuICAgIHtcclxuICAgICAgICBoYWJpbGlkYWRlczogJ0phdmFzY3JpcHQnLFxyXG4gICAgICAgIHBlcmNlbnRhZ2U6IDg4LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBoYWJpbGlkYWRlczogJ1JlYWN0JyxcclxuICAgICAgICBwZXJjZW50YWdlOiA3MCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaGFiaWxpZGFkZXM6ICdSZWR1eCcsXHJcbiAgICAgICAgcGVyY2VudGFnZTogNzYsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGhhYmlsaWRhZGVzOiAnRXhwcmVzcycsXHJcbiAgICAgICAgcGVyY2VudGFnZTogNzAsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGhhYmlsaWRhZGVzOiAnU2VxdWVsaXplJyxcclxuICAgICAgICBwZXJjZW50YWdlOiA4MCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaGFiaWxpZGFkZXM6ICdQb3N0Z3JlcycsXHJcbiAgICAgICAgcGVyY2VudGFnZTogNzUsXHJcbiAgICB9LFxyXG5cclxuXVxyXG5cclxuZXhwb3J0IGNvbnN0IGV4cGVyaWVuY2lhcyA9W1xyXG4gICAgXHJcbiAgICB7XHJcbiAgICAgICAgdGl0dWxvOiAnRnVsbCBTdGFjayBUZWFjaGluZyBBc3Npc3RhbnQnLFxyXG4gICAgICAgIGRvbmRlOidIZW5yeSBCb290Y2FtcCwgQnVlbm9zIEFpcmVzLCBBcmdlbnRpbmEuJyxcclxuICAgICAgICBkZXNjcmlwY2lvbjonQ29vcmRpbmFjaW9uIGRlIHVuIGdydXBvIGRlIGVzdHVkaWFudGVzIHBhcmEgbG9ncmFyIGxhIGludGVncmFjacOzbiBhbCBlcXVpcG8gZGUgZXN0dWRpbywgYXNpc3RpciBhIGxhIHJlc29sdWNpw7NuIGRlIGVqZXJjaWNpb3MgeSBwcm9tb3ZlciBsYSBjb2xhYm9yYWNpb24gZ3J1cGFsICcsXHJcbiAgICAgICAgZmVjaGE6J01heW8gNyAtIGp1bGlvIDcuJyxcclxuICAgICAgICBcclxuICAgIH1cclxuXVxyXG5cclxuZXhwb3J0IGNvbnN0IHByb3llY3RvcyA9IFtcclxuICAgIHtcclxuICAgICAgICB0aXR1bG86ICdGdWxsIFN0YWNrIFdlYiBEZXZlbG9wZXIgLSAgQXBwIE3DoXMgU2FsdWQnLFxyXG4gICAgICAgIC8vIGRvbmRlOiAnSGVucnkgQm9vdGNhbXAsIEJ1ZW5vcyBBaXJlcywgQXJnZW50aW5hJyxcclxuICAgICAgICBkZXNjcmlwY2lvbjonQXBwIGRlIFNhbHVkLCBjdXlvcyB1c3VhcmlvcyBzb24gcGFjaWVudGVzIHkgbcOpZGljb3MsIGxvcyBjdWFsZXMgcHVlZGVuIGdlc3Rpb25hciB0dXJub3MsIGLDunNxdWVkYXMgZGUgcHJvZmVzaW9uYWxlcyBmaWx0cmFkb3MgcG9yIGVzcGVjaWFsaWRhZCB5IGxvY2FjacOzbiwgZW50cmUgc3VzIGZ1bmNpb25hbGlkYWRlcyBzZSBlbmN1ZW50cmFuIGxhIGRlIGxvZ2luIGNvbiBHb29nbGUgTG9naW4sIHJlc3B1ZXN0YSBhdXRvbcOhdGljYSB2w61hIG1haWwgY29uIE5vZGVtYWlsZXIsIHVuIGNhbGVuZGFyaW8gaW1wbGVtZW50YWRvIGNvbiBAbWF0ZXJpYWwtdWkvcGlja2VycywgcGFzYXJlbGEgZGUgcGFnbyBwYXJhIE1lcmNhZG9QYWdvLicsXHJcbiAgICAgICAgdXJsOidodHRwczovL2FwcC1jbGluaWNhLnZlcmNlbC5hcHAnLFxyXG4gICAgICAgIGZlY2hhOidBZ29zdG8gMTIgLSBTZXB0aWVtYnJlIDgnLFxyXG4gICAgICAgIGltYWdlbjpcImFwcFNhbHVkLnBuZ1wiXHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdHVsbzogJ0Z1bGwgU3RhY2sgV2ViIERldmVsb3BlciAtIERvZ3MgQXBwJyxcclxuICAgICAgICBkb25kZTonSGVucnkgQm9vdGNhbXAsIEJ1ZW5vcyBBaXJlcywgQXJnZW50aW5hLicsXHJcbiAgICAgICAgZGVzY3JpcGNpb246J0Rpc2XDsWFyIHkgZGVzYXJyb2xsYXIgdW5hIEFwcCBkZSBwZXJyb3MgcXVlIGluY2x1w61hOiBiw7pzcXVlZGFzLCBmaWx0cmFkb3MsIG9yZGVuYW1pZW50b3MgeSBjcmVhY2nDs24uRGVzYXJyb2xsYXIgbGEgYXBwIHVzYW5kbyBwYXJhIGVsIEZyb250IFJlYWN0LCBSZWR1eCwgQ1NTIHB1cm8geSBCYWNrIGRlc2Fycm9sbGFkbyBlbiBOb2RlLmpzIGNvbiBFeHByZXNzLiBCYXNlIGRlIGRhdG9zIGVuIFBvc3RncmVTUUwgeSBTZXF1ZWxpemUuIERlcGxveSByZWFsaXphZG8gY29uIEhlcm9rdSB5IFZlcmNlbC4nLFxyXG4gICAgICAgIHVybDogJ2h0dHBzOi8vcGktZG9nLW51LnZlcmNlbC5hcHAnLFxyXG4gICAgICAgIGZlY2hhOidKdWxpbyAxNSAtIEFnb3N0byA0JyxcclxuICAgICAgICBpbWFnZW46XCJDYXB0dXJhRG9nLnBuZ1wiXHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdHVsbzogJ0Z1bGwgU3RhY2sgV2ViIERldmVsb3BlciAtIEZvb2QgQXBwJyxcclxuICAgICAgICBkb25kZTonSGVucnkgQm9vdGNhbXAsIEJ1ZW5vcyBBaXJlcywgQXJnZW50aW5hLiAnLFxyXG4gICAgICAgIGRlc2NyaXBjaW9uOidEaXNlw7FhciB5IGRlc2Fycm9sbGFyIHVuYSBBcHAgZGUgZ2FzdHJvbm9tw61hIHF1ZSBpbmNsdcOtYTogYsO6c3F1ZWRhcywgZmlsdHJhZG9zLCBvcmRlbmFtaWVudG9zIHkgY3JlYWNpw7NuLiBEZXNhcnJvbGxhciBsYSBhcHAgdXNhbmRvIHBhcmEgZWwgRnJvbnQgUmVhY3QsIFJlZHV4LCBDU1MgcHVybyB5IEJhY2sgZGVzYXJyb2xsYWRvIGVuIE5vZGUuanMgY29uIEV4cHJlc3MuIEJhc2UgZGUgZGF0b3MgZW4gUG9zdGdyZVNRTCB5IFNlcXVlbGl6ZS4gRGVwbG95IHJlYWxpemFkbyBjb24gSGVyb2t1IHkgVmVyY2VsLicsXHJcbiAgICAgICAgdXJsOidodHRwczovL3BpLWZvb2QtdGhyZWUudmVyY2VsLmFwcCcsXHJcbiAgICAgICAgZmVjaGE6J0p1bmlvIDEgLSBKdWxpbyA3JyxcclxuICAgICAgICBpbWFnZW46IFwiQ2FwdHVyYUZvb2QucG5nXCJcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbl1cclxuXHJcbmV4cG9ydCBjb25zdCBwb3N0cyA9IFtcclxuICAgIHtcclxuICAgICAgICB0aXRsZTpcIkphdmFzY3JpcHRcIixcclxuICAgICAgICBjb250ZW50OlwiRGVzY3JpcGNpb25cIixcclxuICAgICAgICBpbWFnZVVSTDpcImh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvdGh1bWIvOS85OS9Vbm9mZmljaWFsX0phdmFTY3JpcHRfbG9nb18yLnN2Zy8xMjAwcHgtVW5vZmZpY2lhbF9KYXZhU2NyaXB0X2xvZ29fMi5zdmcucG5nXCIsXHJcbiAgICAgICAgZG9jdTpcImh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VzL2RvY3MvV2ViL0phdmFTY3JpcHRcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTpcIlJlYWN0XCIsXHJcbiAgICAgICAgY29udGVudDpcIkRlc2NyaXBjaW9uXCIsXHJcbiAgICAgICAgaW1hZ2VVUkw6XCJodHRwczovL3JlYWN0anMub3JnL2xvZ28tb2cucG5nXCIsXHJcbiAgICAgICAgZG9jdTpcImh0dHBzOi8vZXMucmVhY3Rqcy5vcmcvZG9jcy9nZXR0aW5nLXN0YXJ0ZWQuaHRtbFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOlwiUmVkdXhcIixcclxuICAgICAgICBjb250ZW50OlwiRGVzY3JpcGNpb25cIixcclxuICAgICAgICBpbWFnZVVSTDpcImh0dHBzOi8vY2RuLndvcmxkdmVjdG9ybG9nby5jb20vbG9nb3MvcmVkdXguc3ZnXCIsXHJcbiAgICAgICAgZG9jdTpcImh0dHBzOi8vZXMucmVkdXguanMub3JnL1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOlwiRXhwcmVzc1wiLFxyXG4gICAgICAgIGNvbnRlbnQ6XCJEZXNjcmlwY2lvblwiLFxyXG4gICAgICAgIGltYWdlVVJMOlwiaHR0cHM6Ly9mZC1kZXZlbG9wbWVudC5jb20vaW1hZ2VzL2V4cHJlc3Nqcy5wbmdcIixcclxuICAgICAgICBkb2N1OlwiaHR0cHM6Ly9leHByZXNzanMuY29tL2VzL1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOlwiU2VxdWVsaXplXCIsXHJcbiAgICAgICAgY29udGVudDpcIkRlc2NyaXBjaW9uXCIsXHJcbiAgICAgICAgaW1hZ2VVUkw6XCJodHRwczovL2dvb2dsZS5naXRodWIuaW8vc3FsY29tbWVudGVyL2ltYWdlcy9zZXF1ZWxpemUtbG9nby5wbmdcIixcclxuICAgICAgICBkb2N1OlwiaHR0cHM6Ly9zZXF1ZWxpemUub3JnL1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOlwiUG9zdGdyZVNRTFwiLFxyXG4gICAgICAgIGNvbnRlbnQ6XCJEZXNjcmlwY2lvblwiLFxyXG4gICAgICAgIGltYWdlVVJMOlwiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy90aHVtYi8yLzI5L1Bvc3RncmVzcWxfZWxlcGhhbnQuc3ZnLzY0MHB4LVBvc3RncmVzcWxfZWxlcGhhbnQuc3ZnLnBuZ1wiLFxyXG4gICAgICAgIGRvY3U6XCJodHRwczovL3d3dy5wb3N0Z3Jlc3FsLm9yZy9kb2NzL1wiXHJcbiAgICB9XHJcbl1cclxuXHJcbiIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=