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
        lineNumber: 7,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
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
        lineNumber: 10,
        columnNumber: 5
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 3
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "collapse navbar-collapse",
      id: "navbarNav",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        className: "navbar-nav ml-auto",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          className: "nav-item",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "/blog",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              className: "nav-link",
              children: "Tecnologias"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 13
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 9
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
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
              lineNumber: 21,
              columnNumber: 13
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 9
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 7
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 5
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 3
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 2
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 4,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9jb21wb25lbnQvTGF5b3V0LmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL2NvbXBvbmVudC9OYXZCYXIuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vcHJvZmlsZS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vaWdub3JlZHxDOlxcVXNlcnNcXE1hcnRpbiBGaWd1ZXJvYVxcRGVza3RvcFxcUG9ydGZvaWxpb1xcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxuZXh0LXNlcnZlclxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sIm5hbWVzIjpbIkxheW91dCIsImNoaWxkcmVuIiwiZm9vdGVyIiwiZGFyayIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsImhhbmRsZVJvdXRlQ2hhbmdlIiwidXJsIiwiY29uc29sZSIsImxvZyIsIk5Qcm9ncmVzcyIsImV2ZW50cyIsIm9uIiwib2ZmIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiTmF2QmFyIiwiaGFiaWxpZGFkZXMiLCJwZXJjZW50YWdlIiwiZXhwZXJpZW5jaWFzIiwidGl0dWxvIiwiZG9uZGUiLCJkZXNjcmlwY2lvbiIsImZlY2hhIiwicHJveWVjdG9zIiwiaW1hZ2VuIiwicG9zdHMiLCJ0aXRsZSIsImNvbnRlbnQiLCJpbWFnZVVSTCIsImRvY3UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLE1BQU0sR0FBRyxDQUFDO0FBQUVDLFVBQUY7QUFBWUMsUUFBTSxHQUFHLElBQXJCO0FBQTJCQyxNQUFJLEdBQUc7QUFBbEMsQ0FBRCxLQUErQztBQUU5RCxRQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBRUVDLGtEQUFTLENBQUMsTUFBSTtBQUNaLFVBQU1DLGlCQUFpQixHQUFHQyxHQUFHLElBQUc7QUFDN0JDLGFBQU8sQ0FBQ0MsR0FB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QUFJSWYsS0FBRyxFQUFDLGtDQUpSO0FBS0lnQixPQUFLLEVBQUMsbUJBTFY7QUFNSUUsUUFBTSxFQUFFO0FBTlosQ0FuQnFCLENBQWxCO0FBK0JBLE1BQU1DLEtBQUssR0FBRyxDQUNqQjtBQUNJQyxPQUFLLEVBQUMsWUFEVjtBQUVJQyxTQUFPLEVBQUMsYUFGWjtBQUdJQyxVQUFRLEVBQUMsd0lBSGI7QUFJSUMsTUFBSSxFQUFDO0FBSlQsQ0FEaUIsRUFPakI7QUFDSUgsT0FBSyxFQUFDLE9BRFY7QUFFSUMsU0FBTyxFQUFDLGFBRlo7QUFHSUMsVUFBUSxFQUFDLGlDQUhiO0FBSUlDLE1BQUksRUFBQztBQUpULENBUGlCLEVBYWpCO0FBQ0lILE9BQUssRUFBQyxPQURWO0FBRUlDLFNBQU8sRUFBQyxhQUZaO0FBR0lDLFVBQVEsRUFBQyxpREFIYjtBQUlJQyxNQUFJLEVBQUM7QUFKVCxDQWJpQixFQW1CakI7QUFDSUgsT0FBSyxFQUFDLFNBRFY7QUFFSUMsU0FBTyxFQUFDLGFBRlo7QUFHSUMsVUFBUSxFQUFDLGlEQUhiO0FBSUlDLE1BQUksRUFBQztBQUpULENBbkJpQixFQXlCakI7QUFDSUgsT0FBSyxFQUFDLFdBRFY7QUFFSUMsU0FBTyxFQUFDLGFBRlo7QUFHSUMsVUFBUSxFQUFDLGlFQUhiO0FBSUlDLE1BQUksRUFBQztBQUpULENBekJpQixFQStCakI7QUFDSUgsT0FBSyxFQUFDLFlBRFY7QUFFSUMsU0FBTyxFQUFDLGFBRlo7QUFHSUMsVUFBUSxFQUFDLHFIQUhiO0FBSUlDLE1BQUksRUFBQztBQUpULENBL0JpQixDQUFkLEM7Ozs7Ozs7Ozs7QUN0RVAsZSIsImZpbGUiOiJjb21wb25lbnRfTGF5b3V0X2pzLXByb2ZpbGVfanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmF2QmFyIGZyb20gXCIuL05hdkJhclwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tIFwibnByb2dyZXNzXCI7XHJcblxyXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiwgZm9vdGVyID0gdHJ1ZSwgZGFyayA9IGZhbHNlIH0pID0+IHtcclxuXHJcbmNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCk9PntcclxuICAgIGNvbnN0IGhhbmRsZVJvdXRlQ2hhbmdlID0gdXJsID0+e1xyXG4gICAgICAgY29uc29sZS5sb2codXJsKVxyXG4gICAgICAgTlByb2dyZXNzLnN0YXJ0KCk7XHJcbiAgICAgIH1cclxuICAgIHJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlU3RhcnQnLCBoYW5kbGVSb3V0ZUNoYW5nZSlcclxuICAgIHJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCgpPT4gTlByb2dyZXNzLmRvbmUoKSlcclxuICAgIHJldHVybigpPT57XHJcbiAgICAgIHJvdXRlci5ldmVudHMub2ZmKCdyb3V0ZUNoYW5nZVN0YXJ0JywgaGFuZGxlUm91dGVDaGFuZ2UpXHJcbiAgICB9XHJcbiAgfSxbXSlcclxuXHJcbnJldHVybihcclxuICA8ZGl2IGNsYXNzTmFtZT17ZGFyaz8gJ2JnLWRhcmsnOicnfT5cclxuICAgIDxOYXZCYXIgLz5cclxuICAgIDxtYWluIGNsYXNzTmFtZT1cImNvbnRhaW5lciBweS00XCI+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9tYWluPlxyXG4gICB7XHJcbiAgIGZvb3RlciAmJiggPGZvb3RlciBjbGFzc05hbWU9XCJiZy1kYXJrIHRleHQtbGlnaHQgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBwLTRcIj5cclxuICAgICAgICAgICAgPGgxPiZjb3B5OyBNYXJ0aW4gRmlndWVyb2EgUG9ydGZvbGlvPC9oMT5cclxuICAgICAgICAgICAgPHA+MjAyMiAtIHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgIClcclxuICAgIH1cclxuICA8L2Rpdj5cclxuKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XHJcbiIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmNvbnN0IE5hdkJhciA9ICgpID0+IChcclxuPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWV4cGFuZC1sZyBuYXZiYXItZGFyayBiZy1kYXJrXCI+XHJcbiA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIj5Qb3J0Zm9saW88L2E+ICAgXHJcbiAgICA8L0xpbms+XHJcbiAgPGJ1dHRvbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlclwiIHR5cGU9XCJidXR0b25cIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS10YXJnZXQ9XCIjbmF2YmFyTmF2XCIgYXJpYS1jb250cm9scz1cIm5hdmJhck5hdlwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIGFyaWEtbGFiZWw9XCJUb2dnbGUgbmF2aWdhdGlvblwiPlxyXG4gICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXItaWNvblwiPjwvc3Bhbj5cclxuICA8L2J1dHRvbj4gXHJcbiAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIiBpZD1cIm5hdmJhck5hdlwiPlxyXG4gICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgbWwtYXV0b1wiPlxyXG4gICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICA8TGluayBocmVmPVwiL2Jsb2dcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5UZWNub2xvZ2lhczwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvbGk+XHJcbiAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCJnaXRodWJcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5HaXRIdWI8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2xpPlxyXG4gICAgPC91bD5cclxuICA8L2Rpdj5cclxuIDwvZGl2PlxyXG48L25hdj5cclxuKSBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdkJhciIsImV4cG9ydCBjb25zdCBoYWJpbGlkYWRlcyA9IFtcclxuICAgIHtcclxuICAgICAgICBoYWJpbGlkYWRlczogJ0phdmFzY3JpcHQnLFxyXG4gICAgICAgIHBlcmNlbnRhZ2U6IDg4LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBoYWJpbGlkYWRlczogJ1JlYWN0JyxcclxuICAgICAgICBwZXJjZW50YWdlOiA3MCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaGFiaWxpZGFkZXM6ICdSZWR1eCcsXHJcbiAgICAgICAgcGVyY2VudGFnZTogNzYsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGhhYmlsaWRhZGVzOiAnRXhwcmVzcycsXHJcbiAgICAgICAgcGVyY2VudGFnZTogNzAsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGhhYmlsaWRhZGVzOiAnU2VxdWVsaXplJyxcclxuICAgICAgICBwZXJjZW50YWdlOiA4MCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaGFiaWxpZGFkZXM6ICdQb3N0Z3JlcycsXHJcbiAgICAgICAgcGVyY2VudGFnZTogNzUsXHJcbiAgICB9LFxyXG5cclxuXVxyXG5cclxuZXhwb3J0IGNvbnN0IGV4cGVyaWVuY2lhcyA9W1xyXG4gICAgXHJcbiAgICB7XHJcbiAgICAgICAgdGl0dWxvOiAnRnVsbCBTdGFjayBUZWFjaGluZyBBc3Npc3RhbnQnLFxyXG4gICAgICAgIGRvbmRlOidIZW5yeSBCb290Y2FtcCwgQnVlbm9zIEFpcmVzLCBBcmdlbnRpbmEuJyxcclxuICAgICAgICBkZXNjcmlwY2lvbjonQ29vcmRpbmFjaW9uIGRlIHVuIGdydXBvIGRlIGVzdHVkaWFudGVzIHBhcmEgbG9ncmFyIGxhIGludGVncmFjacOzbiBhbCBlcXVpcG8gZGUgZXN0dWRpbywgYXNpc3RpciBhIGxhIHJlc29sdWNpw7NuIGRlIGVqZXJjaWNpb3MgeSBwcm9tb3ZlciBsYSBjb2xhYm9yYWNpb24gZ3J1cGFsICcsXHJcbiAgICAgICAgZmVjaGE6J01heW8gNyAtIGp1bGlvIDcuJyxcclxuICAgICAgICBcclxuICAgIH1cclxuXVxyXG5cclxuZXhwb3J0IGNvbnN0IHByb3llY3RvcyA9IFtcclxuICAgIHtcclxuICAgICAgICB0aXR1bG86ICdGdWxsIFN0YWNrIFdlYiBEZXZlbG9wZXIgLSAgQXBwIE3DoXMgU2FsdWQnLFxyXG4gICAgICAgIC8vIGRvbmRlOiAnSGVucnkgQm9vdGNhbXAsIEJ1ZW5vcyBBaXJlcywgQXJnZW50aW5hJyxcclxuICAgICAgICBkZXNjcmlwY2lvbjonQXBwIGRlIFNhbHVkLCBjdXlvcyB1c3VhcmlvcyBzb24gcGFjaWVudGVzIHkgbcOpZGljb3MsIGxvcyBjdWFsZXMgcHVlZGVuIGdlc3Rpb25hciB0dXJub3MsIGLDunNxdWVkYXMgZGUgcHJvZmVzaW9uYWxlcyBmaWx0cmFkb3MgcG9yIGVzcGVjaWFsaWRhZCB5IGxvY2FjacOzbiwgZW50cmUgc3VzIGZ1bmNpb25hbGlkYWRlcyBzZSBlbmN1ZW50cmFuIGxhIGRlIGxvZ2luIGNvbiBHb29nbGUgTG9naW4sIHJlc3B1ZXN0YSBhdXRvbcOhdGljYSB2w61hIG1haWwgY29uIE5vZGVtYWlsZXIsIHVuIGNhbGVuZGFyaW8gaW1wbGVtZW50YWRvIGNvbiBAbWF0ZXJpYWwtdWkvcGlja2VycywgcGFzYXJlbGEgZGUgcGFnbyBwYXJhIE1lcmNhZG9QYWdvLicsXHJcbiAgICAgICAgdXJsOidodHRwczovL2FwcC1jbGluaWNhLnZlcmNlbC5hcHAnLFxyXG4gICAgICAgIGZlY2hhOidBZ29zdG8gMTIgLSBTZXB0aWVtYnJlIDgnLFxyXG4gICAgICAgIGltYWdlbjpcImFwcFNhbHVkLnBuZ1wiXHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdHVsbzogJ0Z1bGwgU3RhY2sgV2ViIERldmVsb3BlciAtIERvZ3MgQXBwJyxcclxuICAgICAgICBkb25kZTonSGVucnkgQm9vdGNhbXAsIEJ1ZW5vcyBBaXJlcywgQXJnZW50aW5hLicsXHJcbiAgICAgICAgZGVzY3JpcGNpb246J0Rpc2XDsWFyIHkgZGVzYXJyb2xsYXIgdW5hIEFwcCBkZSBwZXJyb3MgcXVlIGluY2x1w61hOiBiw7pzcXVlZGFzLCBmaWx0cmFkb3MsIG9yZGVuYW1pZW50b3MgeSBjcmVhY2nDs24uRGVzYXJyb2xsYXIgbGEgYXBwIHVzYW5kbyBwYXJhIGVsIEZyb250IFJlYWN0LCBSZWR1eCwgQ1NTIHB1cm8geSBCYWNrIGRlc2Fycm9sbGFkbyBlbiBOb2RlLmpzIGNvbiBFeHByZXNzLiBCYXNlIGRlIGRhdG9zIGVuIFBvc3RncmVTUUwgeSBTZXF1ZWxpemUuIERlcGxveSByZWFsaXphZG8gY29uIEhlcm9rdSB5IFZlcmNlbC4nLFxyXG4gICAgICAgIHVybDogJ2h0dHBzOi8vcGktZG9nLW51LnZlcmNlbC5hcHAnLFxyXG4gICAgICAgIGZlY2hhOidKdWxpbyAxNSAtIEFnb3N0byA0JyxcclxuICAgICAgICBpbWFnZW46XCJDYXB0dXJhRG9nLnBuZ1wiXHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdHVsbzogJ0Z1bGwgU3RhY2sgV2ViIERldmVsb3BlciAtIEZvb2QgQXBwJyxcclxuICAgICAgICBkb25kZTonSGVucnkgQm9vdGNhbXAsIEJ1ZW5vcyBBaXJlcywgQXJnZW50aW5hLiAnLFxyXG4gICAgICAgIGRlc2NyaXBjaW9uOidEaXNlw7FhciB5IGRlc2Fycm9sbGFyIHVuYSBBcHAgZGUgZ2FzdHJvbm9tw61hIHF1ZSBpbmNsdcOtYTogYsO6c3F1ZWRhcywgZmlsdHJhZG9zLCBvcmRlbmFtaWVudG9zIHkgY3JlYWNpw7NuLiBEZXNhcnJvbGxhciBsYSBhcHAgdXNhbmRvIHBhcmEgZWwgRnJvbnQgUmVhY3QsIFJlZHV4LCBDU1MgcHVybyB5IEJhY2sgZGVzYXJyb2xsYWRvIGVuIE5vZGUuanMgY29uIEV4cHJlc3MuIEJhc2UgZGUgZGF0b3MgZW4gUG9zdGdyZVNRTCB5IFNlcXVlbGl6ZS4gRGVwbG95IHJlYWxpemFkbyBjb24gSGVyb2t1IHkgVmVyY2VsLicsXHJcbiAgICAgICAgdXJsOidodHRwczovL3BpLWZvb2QtdGhyZWUudmVyY2VsLmFwcCcsXHJcbiAgICAgICAgZmVjaGE6J0p1bmlvIDEgLSBKdWxpbyA3JyxcclxuICAgICAgICBpbWFnZW46IFwiQ2FwdHVyYUZvb2QucG5nXCJcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbl1cclxuXHJcbmV4cG9ydCBjb25zdCBwb3N0cyA9IFtcclxuICAgIHtcclxuICAgICAgICB0aXRsZTpcIkphdmFzY3JpcHRcIixcclxuICAgICAgICBjb250ZW50OlwiRGVzY3JpcGNpb25cIixcclxuICAgICAgICBpbWFnZVVSTDpcImh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvdGh1bWIvOS85OS9Vbm9mZmljaWFsX0phdmFTY3JpcHRfbG9nb18yLnN2Zy8xMjAwcHgtVW5vZmZpY2lhbF9KYXZhU2NyaXB0X2xvZ29fMi5zdmcucG5nXCIsXHJcbiAgICAgICAgZG9jdTpcImh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VzL2RvY3MvV2ViL0phdmFTY3JpcHRcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTpcIlJlYWN0XCIsXHJcbiAgICAgICAgY29udGVudDpcIkRlc2NyaXBjaW9uXCIsXHJcbiAgICAgICAgaW1hZ2VVUkw6XCJodHRwczovL3JlYWN0anMub3JnL2xvZ28tb2cucG5nXCIsXHJcbiAgICAgICAgZG9jdTpcImh0dHBzOi8vZXMucmVhY3Rqcy5vcmcvZG9jcy9nZXR0aW5nLXN0YXJ0ZWQuaHRtbFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOlwiUmVkdXhcIixcclxuICAgICAgICBjb250ZW50OlwiRGVzY3JpcGNpb25cIixcclxuICAgICAgICBpbWFnZVVSTDpcImh0dHBzOi8vY2RuLndvcmxkdmVjdG9ybG9nby5jb20vbG9nb3MvcmVkdXguc3ZnXCIsXHJcbiAgICAgICAgZG9jdTpcImh0dHBzOi8vZXMucmVkdXguanMub3JnL1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOlwiRXhwcmVzc1wiLFxyXG4gICAgICAgIGNvbnRlbnQ6XCJEZXNjcmlwY2lvblwiLFxyXG4gICAgICAgIGltYWdlVVJMOlwiaHR0cHM6Ly9mZC1kZXZlbG9wbWVudC5jb20vaW1hZ2VzL2V4cHJlc3Nqcy5wbmdcIixcclxuICAgICAgICBkb2N1OlwiaHR0cHM6Ly9leHByZXNzanMuY29tL2VzL1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOlwiU2VxdWVsaXplXCIsXHJcbiAgICAgICAgY29udGVudDpcIkRlc2NyaXBjaW9uXCIsXHJcbiAgICAgICAgaW1hZ2VVUkw6XCJodHRwczovL2dvb2dsZS5naXRodWIuaW8vc3FsY29tbWVudGVyL2ltYWdlcy9zZXF1ZWxpemUtbG9nby5wbmdcIixcclxuICAgICAgICBkb2N1OlwiaHR0cHM6Ly9zZXF1ZWxpemUub3JnL1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOlwiUG9zdGdyZVNRTFwiLFxyXG4gICAgICAgIGNvbnRlbnQ6XCJEZXNjcmlwY2lvblwiLFxyXG4gICAgICAgIGltYWdlVVJMOlwiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy90aHVtYi8yLzI5L1Bvc3RncmVzcWxfZWxlcGhhbnQuc3ZnLzY0MHB4LVBvc3RncmVzcWxfZWxlcGhhbnQuc3ZnLnBuZ1wiLFxyXG4gICAgICAgIGRvY3U6XCJodHRwczovL3d3dy5wb3N0Z3Jlc3FsLm9yZy9kb2NzL1wiXHJcbiAgICB9XHJcbl1cclxuXHJcbiIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=