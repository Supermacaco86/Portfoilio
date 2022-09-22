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
/* harmony export */   "posts": function() { return /* binding */ posts; },
/* harmony export */   "contactos": function() { return /* binding */ contactos; }
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
const contactos = [{
  LinkedInURL: "https://www.linkedin.com/in/martin--figueroa/ "
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9jb21wb25lbnQvTGF5b3V0LmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL2NvbXBvbmVudC9OYXZCYXIuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vcHJvZmlsZS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vaWdub3JlZHxDOlxcVXNlcnNcXE1hcnRpbiBGaWd1ZXJvYVxcRGVza3RvcFxcUG9ydGZvaWxpb1xcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxuZXh0LXNlcnZlclxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sIm5hbWVzIjpbIkxheW91dCIsImNoaWxkcmVuIiwiZm9vdGVyIiwiZGFyayIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsImhhbmRsZVJvdXRlQ2hhbmdlIiwidXJsIiwiY29uc29sZSIsImxvZyIsIk5Qcm9ncmVzcyIsImV2ZW50cyIsIm9uIiwib2ZmIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiTmF2QmFyIiwiaGFiaWxpZGFkZXMiLCJwZXJjZW50YWdlIiwiZXhwZXJpZW5jaWFzIiwidGl0dWxvIiwiZG9uZGUiLCJkZXNjcmlwY2lvbiIsImZlY2hhIiwicHJveWVjdG9zIiwiaW1hZ2VuIiwicG9zdHMiLCJ0aXRsZSIsImNvbnRlbnQiLCJpbWFnZVVSTCIsImRvY3UiLCJjb250YWN0b3MiLCJMaW5rZWRJblVSTCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsTUFBTSxHQUFHLENBQUM7QUFBRUMsVUFBRjtBQUFZQyxRQUFNLEdBQUcsSUFBckI7QUFBMkJDLE1BQUksR0FBRztBQUFsQyxDQUFELEtBQStDO0FBRTlELFFBQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFFRUMsa0RBQVMsQ0FBQyxNQUFJO0FBQ1osVUFBTUMsaUJBQWlCLEdBQUdDLEdBQUcsSUFBRztBQUM3QkMsYUFBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVo7QUFDQUcsNERBQUE7QUFDQSxLQUhIOztBQUlBUCxVQUFNLENBQUNRLE1BQVAsQ0FBY0MsRUFBZCxDQUFpQixrQkFBakIsRUFBcUNOLGlCQUFyQztBQUNBSCxVQUFNLENBQUNRLE1BQVAsQ0FBY0MsRUFBZCxDQUFpQixxQkFBakIsRUFBdUMsTUFBS0YscURBQUEsRUFBNUM7QUFDQSxXQUFNLE1BQUk7QUFDUlAsWUFBTSxDQUFDUSxNQUFQLENBQWNFLEdBQWQsQ0FBa0Isa0JBQWxCLEVBQXNDUCxpQkFBdEM7QUFDRCxLQUZEO0FBR0QsR0FWUSxFQVVQLEVBVk8sQ0FBVDtBQVlGLHNCQUNFO0FBQUssYUFBUyxFQUFFSixJQUFJLEdBQUUsU0FBRixHQUFZLEVBQWhDO0FBQUEsNEJBQ0UsOERBQUMsNENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQU0sZUFBUyxFQUFDLGdCQUFoQjtBQUFBLGdCQUNLRjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsRUFNQ0MsTUFBTSxpQkFBSztBQUFRLGVBQVMsRUFBQyxnQ0FBbEI7QUFBQSw2QkFDTjtBQUFLLGlCQUFTLEVBQUMsZUFBZjtBQUFBLGdDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLGVBRUk7QUFBQSxnQ0FBVyxJQUFJYSxJQUFKLEdBQVdDLFdBQVgsRUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRE07QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFOWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQWlCQyxDQWpDRDs7QUFrQ0EsK0RBQWVoQixNQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hDQTs7QUFFQSxNQUFNaUIsTUFBTSxHQUFHLG1CQUNmO0FBQUssV0FBUyxFQUFDLDZDQUFmO0FBQUEseUJBQ0M7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBLDRCQUNHLDhEQUFDLGtEQUFEO0FBQU0sVUFBSSxFQUFDLEdBQVg7QUFBQSw2QkFDSTtBQUFHLGlCQUFTLEVBQUMsY0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREgsZUFJQztBQUFRLGVBQVMsRUFBQyxnQkFBbEI7QUFBbUMsVUFBSSxFQUFDLFFBQXhDO0FBQWlELHFCQUFZLFVBQTdEO0FBQXdFLHFCQUFZLFlBQXBGO0FBQWlHLHVCQUFjLFdBQS9HO0FBQTJILHVCQUFjLE9BQXpJO0FBQWlKLG9CQUFXLG1CQUE1SjtBQUFBLDZCQUNFO0FBQU0saUJBQVMsRUFBQztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRCxlQU9DO0FBQUssZUFBUyxFQUFDLDBCQUFmO0FBQTBDLFFBQUUsRUFBQyxXQUE3QztBQUFBLDZCQUNFO0FBQUksaUJBQVMsRUFBQyxvQkFBZDtBQUFBLGdDQUNFO0FBQUksbUJBQVMsRUFBQyxVQUFkO0FBQUEsaUNBQ0UsOERBQUMsa0RBQUQ7QUFBTSxnQkFBSSxFQUFDLE9BQVg7QUFBQSxtQ0FDSTtBQUFHLHVCQUFTLEVBQUMsVUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBTUU7QUFBSSxtQkFBUyxFQUFDLFVBQWQ7QUFBQSxpQ0FDRSw4REFBQyxrREFBRDtBQUFNLGdCQUFJLEVBQUMsUUFBWDtBQUFBLG1DQUNJO0FBQUcsdUJBQVMsRUFBQyxVQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREE7O0FBMkJBLCtEQUFlQSxNQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Qk8sTUFBTUMsV0FBVyxHQUFHLENBQ3ZCO0FBQ0lBLGFBQVcsRUFBRSxZQURqQjtBQUVJQyxZQUFVLEVBQUU7QUFGaEIsQ0FEdUIsRUFLdkI7QUFDSUQsYUFBVyxFQUFFLE9BRGpCO0FBRUlDLFlBQVUsRUFBRTtBQUZoQixDQUx1QixFQVN2QjtBQUNJRCxhQUFXLEVBQUUsT0FEakI7QUFFSUMsWUFBVSxFQUFFO0FBRmhCLENBVHVCLEVBYXZCO0FBQ0lELGFBQVcsRUFBRSxTQURqQjtBQUVJQyxZQUFVLEVBQUU7QUFGaEIsQ0FidUIsRUFpQnZCO0FBQ0lELGFBQVcsRUFBRSxXQURqQjtBQUVJQyxZQUFVLEVBQUU7QUFGaEIsQ0FqQnVCLEVBcUJ2QjtBQUNJRCxhQUFXLEVBQUUsVUFEakI7QUFFSUMsWUFBVSxFQUFFO0FBRmhCLENBckJ1QixDQUFwQjtBQTRCQSxNQUFNQyxZQUFZLEdBQUUsQ0FFdkI7QUFDSUMsUUFBTSxFQUFFLCtCQURaO0FBRUlDLE9BQUssRUFBQywwQ0FGVjtBQUdJQyxhQUFXLEVBQUMsbUtBSGhCO0FBSUlDLE9BQUssRUFBQztBQUpWLENBRnVCLENBQXBCO0FBV0EsTUFBTUMsU0FBUyxHQUFHLENBQ3JCO0FBQ0lKLFFBQU0sRUFBRSwyQ0FEWjtBQUVJO0FBQ0FFLGFBQVcsRUFBQyx5V0FIaEI7QUFJSWYsS0FBRyxFQUFDLGdDQUpSO0FBS0lnQixPQUFLLEVBQUMsMEJBTFY7QUFNSUUsUUFBTSxFQUFDO0FBTlgsQ0FEcUIsRUFVckI7QUFDSUwsUUFBTSxFQUFFLHFDQURaO0FBRUlDLE9BQUssRUFBQywwQ0FGVjtBQUdJQyxhQUFXLEVBQUMsK1JBSGhCO0FBSUlmLEtBQUcsRUFBRSw4QkFKVDtBQUtJZ0IsT0FBSyxFQUFDLHFCQUxWO0FBTUlFLFFBQU0sRUFBQztBQU5YLENBVnFCLEVBbUJyQjtBQUNJTCxRQUFNLEVBQUUscUNBRFo7QUFFSUMsT0FBSyxFQUFDLDJDQUZWO0FBR0lDLGFBQVcsRUFBQyxxU0FIaEI7QUFJSWYsS0FBRyxFQUFDLGtDQUpSO0FBS0lnQixPQUFLLEVBQUMsbUJBTFY7QUFNSUUsUUFBTSxFQUFFO0FBTlosQ0FuQnFCLENBQWxCO0FBK0JBLE1BQU1DLEtBQUssR0FBRyxDQUNqQjtBQUNJQyxPQUFLLEVBQUMsWUFEVjtBQUVJQyxTQUFPLEVBQUMsYUFGWjtBQUdJQyxVQUFRLEVBQUMsd0lBSGI7QUFJSUMsTUFBSSxFQUFDO0FBSlQsQ0FEaUIsRUFPakI7QUFDSUgsT0FBSyxFQUFDLE9BRFY7QUFFSUMsU0FBTyxFQUFDLGFBRlo7QUFHSUMsVUFBUSxFQUFDLGlDQUhiO0FBSUlDLE1BQUksRUFBQztBQUpULENBUGlCLEVBYWpCO0FBQ0lILE9BQUssRUFBQyxPQURWO0FBRUlDLFNBQU8sRUFBQyxhQUZaO0FBR0lDLFVBQVEsRUFBQyxpREFIYjtBQUlJQyxNQUFJLEVBQUM7QUFKVCxDQWJpQixFQW1CakI7QUFDSUgsT0FBSyxFQUFDLFNBRFY7QUFFSUMsU0FBTyxFQUFDLGFBRlo7QUFHSUMsVUFBUSxFQUFDLGlEQUhiO0FBSUlDLE1BQUksRUFBQztBQUpULENBbkJpQixFQXlCakI7QUFDSUgsT0FBSyxFQUFDLFdBRFY7QUFFSUMsU0FBTyxFQUFDLGFBRlo7QUFHSUMsVUFBUSxFQUFDLGlFQUhiO0FBSUlDLE1BQUksRUFBQztBQUpULENBekJpQixFQStCakI7QUFDSUgsT0FBSyxFQUFDLFlBRFY7QUFFSUMsU0FBTyxFQUFDLGFBRlo7QUFHSUMsVUFBUSxFQUFDLHFIQUhiO0FBSUlDLE1BQUksRUFBQztBQUpULENBL0JpQixDQUFkO0FBdUNBLE1BQU1DLFNBQVMsR0FBRyxDQUNyQjtBQUNJQyxhQUFXLEVBQUM7QUFEaEIsQ0FEcUIsQ0FBbEIsQzs7Ozs7Ozs7OztBQzdHUCxlIiwiZmlsZSI6ImNvbXBvbmVudF9MYXlvdXRfanMtcHJvZmlsZV9qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOYXZCYXIgZnJvbSBcIi4vTmF2QmFyXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgTlByb2dyZXNzIGZyb20gXCJucHJvZ3Jlc3NcIjtcclxuXHJcbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuLCBmb290ZXIgPSB0cnVlLCBkYXJrID0gZmFsc2UgfSkgPT4ge1xyXG5cclxuY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgY29uc3QgaGFuZGxlUm91dGVDaGFuZ2UgPSB1cmwgPT57XHJcbiAgICAgICBjb25zb2xlLmxvZyh1cmwpXHJcbiAgICAgICBOUHJvZ3Jlc3Muc3RhcnQoKTtcclxuICAgICAgfVxyXG4gICAgcm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VTdGFydCcsIGhhbmRsZVJvdXRlQ2hhbmdlKVxyXG4gICAgcm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VDb21wbGV0ZScsKCk9PiBOUHJvZ3Jlc3MuZG9uZSgpKVxyXG4gICAgcmV0dXJuKCk9PntcclxuICAgICAgcm91dGVyLmV2ZW50cy5vZmYoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBoYW5kbGVSb3V0ZUNoYW5nZSlcclxuICAgIH1cclxuICB9LFtdKVxyXG5cclxucmV0dXJuKFxyXG4gIDxkaXYgY2xhc3NOYW1lPXtkYXJrPyAnYmctZGFyayc6Jyd9PlxyXG4gICAgPE5hdkJhciAvPlxyXG4gICAgPG1haW4gY2xhc3NOYW1lPVwiY29udGFpbmVyIHB5LTRcIj5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L21haW4+XHJcbiAgIHtcclxuICAgZm9vdGVyICYmKCA8Zm9vdGVyIGNsYXNzTmFtZT1cImJnLWRhcmsgdGV4dC1saWdodCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHAtNFwiPlxyXG4gICAgICAgICAgICA8aDE+JmNvcHk7IE1hcnRpbiBGaWd1ZXJvYSBQb3J0Zm9saW88L2gxPlxyXG4gICAgICAgICAgICA8cD4yMDIyIC0ge25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX08L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgKVxyXG4gICAgfVxyXG4gIDwvZGl2PlxyXG4pO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDtcclxuIiwiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuY29uc3QgTmF2QmFyID0gKCkgPT4gKFxyXG48bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZXhwYW5kLWxnIG5hdmJhci1kYXJrIGJnLWRhcmtcIj5cclxuIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiPlBvcnRmb2xpbzwvYT4gICBcclxuICAgIDwvTGluaz5cclxuICA8YnV0dG9uIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyXCIgdHlwZT1cImJ1dHRvblwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIiNuYXZiYXJOYXZcIiBhcmlhLWNvbnRyb2xzPVwibmF2YmFyTmF2XCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgYXJpYS1sYWJlbD1cIlRvZ2dsZSBuYXZpZ2F0aW9uXCI+XHJcbiAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlci1pY29uXCI+PC9zcGFuPlxyXG4gIDwvYnV0dG9uPiBcclxuICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiIGlkPVwibmF2YmFyTmF2XCI+XHJcbiAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdiBtbC1hdXRvXCI+XHJcbiAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvYmxvZ1wiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPlRlY25vbG9naWFzPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9saT5cclxuICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cImdpdGh1YlwiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPkdpdEh1YjwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvbGk+XHJcbiAgICA8L3VsPlxyXG4gIDwvZGl2PlxyXG4gPC9kaXY+XHJcbjwvbmF2PlxyXG4pIFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyIiwiZXhwb3J0IGNvbnN0IGhhYmlsaWRhZGVzID0gW1xyXG4gICAge1xyXG4gICAgICAgIGhhYmlsaWRhZGVzOiAnSmF2YXNjcmlwdCcsXHJcbiAgICAgICAgcGVyY2VudGFnZTogODgsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGhhYmlsaWRhZGVzOiAnUmVhY3QnLFxyXG4gICAgICAgIHBlcmNlbnRhZ2U6IDcwLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBoYWJpbGlkYWRlczogJ1JlZHV4JyxcclxuICAgICAgICBwZXJjZW50YWdlOiA3NixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaGFiaWxpZGFkZXM6ICdFeHByZXNzJyxcclxuICAgICAgICBwZXJjZW50YWdlOiA3MCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaGFiaWxpZGFkZXM6ICdTZXF1ZWxpemUnLFxyXG4gICAgICAgIHBlcmNlbnRhZ2U6IDgwLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBoYWJpbGlkYWRlczogJ1Bvc3RncmVzJyxcclxuICAgICAgICBwZXJjZW50YWdlOiA3NSxcclxuICAgIH0sXHJcblxyXG5dXHJcblxyXG5leHBvcnQgY29uc3QgZXhwZXJpZW5jaWFzID1bXHJcbiAgICBcclxuICAgIHtcclxuICAgICAgICB0aXR1bG86ICdGdWxsIFN0YWNrIFRlYWNoaW5nIEFzc2lzdGFudCcsXHJcbiAgICAgICAgZG9uZGU6J0hlbnJ5IEJvb3RjYW1wLCBCdWVub3MgQWlyZXMsIEFyZ2VudGluYS4nLFxyXG4gICAgICAgIGRlc2NyaXBjaW9uOidDb29yZGluYWNpb24gZGUgdW4gZ3J1cG8gZGUgZXN0dWRpYW50ZXMgcGFyYSBsb2dyYXIgbGEgaW50ZWdyYWNpw7NuIGFsIGVxdWlwbyBkZSBlc3R1ZGlvLCBhc2lzdGlyIGEgbGEgcmVzb2x1Y2nDs24gZGUgZWplcmNpY2lvcyB5IHByb21vdmVyIGxhIGNvbGFib3JhY2lvbiBncnVwYWwgJyxcclxuICAgICAgICBmZWNoYTonTWF5byA3IC0ganVsaW8gNy4nLFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5dXHJcblxyXG5leHBvcnQgY29uc3QgcHJveWVjdG9zID0gW1xyXG4gICAge1xyXG4gICAgICAgIHRpdHVsbzogJ0Z1bGwgU3RhY2sgV2ViIERldmVsb3BlciAtICBBcHAgTcOhcyBTYWx1ZCcsXHJcbiAgICAgICAgLy8gZG9uZGU6ICdIZW5yeSBCb290Y2FtcCwgQnVlbm9zIEFpcmVzLCBBcmdlbnRpbmEnLFxyXG4gICAgICAgIGRlc2NyaXBjaW9uOidBcHAgZGUgU2FsdWQsIGN1eW9zIHVzdWFyaW9zIHNvbiBwYWNpZW50ZXMgeSBtw6lkaWNvcywgbG9zIGN1YWxlcyBwdWVkZW4gZ2VzdGlvbmFyIHR1cm5vcywgYsO6c3F1ZWRhcyBkZSBwcm9mZXNpb25hbGVzIGZpbHRyYWRvcyBwb3IgZXNwZWNpYWxpZGFkIHkgbG9jYWNpw7NuLCBlbnRyZSBzdXMgZnVuY2lvbmFsaWRhZGVzIHNlIGVuY3VlbnRyYW4gbGEgZGUgbG9naW4gY29uIEdvb2dsZSBMb2dpbiwgcmVzcHVlc3RhIGF1dG9tw6F0aWNhIHbDrWEgbWFpbCBjb24gTm9kZW1haWxlciwgdW4gY2FsZW5kYXJpbyBpbXBsZW1lbnRhZG8gY29uIEBtYXRlcmlhbC11aS9waWNrZXJzLCBwYXNhcmVsYSBkZSBwYWdvIHBhcmEgTWVyY2Fkb1BhZ28uJyxcclxuICAgICAgICB1cmw6J2h0dHBzOi8vYXBwLWNsaW5pY2EudmVyY2VsLmFwcCcsXHJcbiAgICAgICAgZmVjaGE6J0Fnb3N0byAxMiAtIFNlcHRpZW1icmUgOCcsXHJcbiAgICAgICAgaW1hZ2VuOlwiYXBwU2FsdWQucG5nXCJcclxuICAgICAgICBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0dWxvOiAnRnVsbCBTdGFjayBXZWIgRGV2ZWxvcGVyIC0gRG9ncyBBcHAnLFxyXG4gICAgICAgIGRvbmRlOidIZW5yeSBCb290Y2FtcCwgQnVlbm9zIEFpcmVzLCBBcmdlbnRpbmEuJyxcclxuICAgICAgICBkZXNjcmlwY2lvbjonRGlzZcOxYXIgeSBkZXNhcnJvbGxhciB1bmEgQXBwIGRlIHBlcnJvcyBxdWUgaW5jbHXDrWE6IGLDunNxdWVkYXMsIGZpbHRyYWRvcywgb3JkZW5hbWllbnRvcyB5IGNyZWFjacOzbi5EZXNhcnJvbGxhciBsYSBhcHAgdXNhbmRvIHBhcmEgZWwgRnJvbnQgUmVhY3QsIFJlZHV4LCBDU1MgcHVybyB5IEJhY2sgZGVzYXJyb2xsYWRvIGVuIE5vZGUuanMgY29uIEV4cHJlc3MuIEJhc2UgZGUgZGF0b3MgZW4gUG9zdGdyZVNRTCB5IFNlcXVlbGl6ZS4gRGVwbG95IHJlYWxpemFkbyBjb24gSGVyb2t1IHkgVmVyY2VsLicsXHJcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9waS1kb2ctbnUudmVyY2VsLmFwcCcsXHJcbiAgICAgICAgZmVjaGE6J0p1bGlvIDE1IC0gQWdvc3RvIDQnLFxyXG4gICAgICAgIGltYWdlbjpcIkNhcHR1cmFEb2cucG5nXCJcclxuICAgICAgICBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0dWxvOiAnRnVsbCBTdGFjayBXZWIgRGV2ZWxvcGVyIC0gRm9vZCBBcHAnLFxyXG4gICAgICAgIGRvbmRlOidIZW5yeSBCb290Y2FtcCwgQnVlbm9zIEFpcmVzLCBBcmdlbnRpbmEuICcsXHJcbiAgICAgICAgZGVzY3JpcGNpb246J0Rpc2XDsWFyIHkgZGVzYXJyb2xsYXIgdW5hIEFwcCBkZSBnYXN0cm9ub23DrWEgcXVlIGluY2x1w61hOiBiw7pzcXVlZGFzLCBmaWx0cmFkb3MsIG9yZGVuYW1pZW50b3MgeSBjcmVhY2nDs24uIERlc2Fycm9sbGFyIGxhIGFwcCB1c2FuZG8gcGFyYSBlbCBGcm9udCBSZWFjdCwgUmVkdXgsIENTUyBwdXJvIHkgQmFjayBkZXNhcnJvbGxhZG8gZW4gTm9kZS5qcyBjb24gRXhwcmVzcy4gQmFzZSBkZSBkYXRvcyBlbiBQb3N0Z3JlU1FMIHkgU2VxdWVsaXplLiBEZXBsb3kgcmVhbGl6YWRvIGNvbiBIZXJva3UgeSBWZXJjZWwuJyxcclxuICAgICAgICB1cmw6J2h0dHBzOi8vcGktZm9vZC10aHJlZS52ZXJjZWwuYXBwJyxcclxuICAgICAgICBmZWNoYTonSnVuaW8gMSAtIEp1bGlvIDcnLFxyXG4gICAgICAgIGltYWdlbjogXCJDYXB0dXJhRm9vZC5wbmdcIlxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuXVxyXG5cclxuZXhwb3J0IGNvbnN0IHBvc3RzID0gW1xyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOlwiSmF2YXNjcmlwdFwiLFxyXG4gICAgICAgIGNvbnRlbnQ6XCJEZXNjcmlwY2lvblwiLFxyXG4gICAgICAgIGltYWdlVVJMOlwiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy90aHVtYi85Lzk5L1Vub2ZmaWNpYWxfSmF2YVNjcmlwdF9sb2dvXzIuc3ZnLzEyMDBweC1Vbm9mZmljaWFsX0phdmFTY3JpcHRfbG9nb18yLnN2Zy5wbmdcIixcclxuICAgICAgICBkb2N1OlwiaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZXMvZG9jcy9XZWIvSmF2YVNjcmlwdFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOlwiUmVhY3RcIixcclxuICAgICAgICBjb250ZW50OlwiRGVzY3JpcGNpb25cIixcclxuICAgICAgICBpbWFnZVVSTDpcImh0dHBzOi8vcmVhY3Rqcy5vcmcvbG9nby1vZy5wbmdcIixcclxuICAgICAgICBkb2N1OlwiaHR0cHM6Ly9lcy5yZWFjdGpzLm9yZy9kb2NzL2dldHRpbmctc3RhcnRlZC5odG1sXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6XCJSZWR1eFwiLFxyXG4gICAgICAgIGNvbnRlbnQ6XCJEZXNjcmlwY2lvblwiLFxyXG4gICAgICAgIGltYWdlVVJMOlwiaHR0cHM6Ly9jZG4ud29ybGR2ZWN0b3Jsb2dvLmNvbS9sb2dvcy9yZWR1eC5zdmdcIixcclxuICAgICAgICBkb2N1OlwiaHR0cHM6Ly9lcy5yZWR1eC5qcy5vcmcvXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6XCJFeHByZXNzXCIsXHJcbiAgICAgICAgY29udGVudDpcIkRlc2NyaXBjaW9uXCIsXHJcbiAgICAgICAgaW1hZ2VVUkw6XCJodHRwczovL2ZkLWRldmVsb3BtZW50LmNvbS9pbWFnZXMvZXhwcmVzc2pzLnBuZ1wiLFxyXG4gICAgICAgIGRvY3U6XCJodHRwczovL2V4cHJlc3Nqcy5jb20vZXMvXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6XCJTZXF1ZWxpemVcIixcclxuICAgICAgICBjb250ZW50OlwiRGVzY3JpcGNpb25cIixcclxuICAgICAgICBpbWFnZVVSTDpcImh0dHBzOi8vZ29vZ2xlLmdpdGh1Yi5pby9zcWxjb21tZW50ZXIvaW1hZ2VzL3NlcXVlbGl6ZS1sb2dvLnBuZ1wiLFxyXG4gICAgICAgIGRvY3U6XCJodHRwczovL3NlcXVlbGl6ZS5vcmcvXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6XCJQb3N0Z3JlU1FMXCIsXHJcbiAgICAgICAgY29udGVudDpcIkRlc2NyaXBjaW9uXCIsXHJcbiAgICAgICAgaW1hZ2VVUkw6XCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iLzIvMjkvUG9zdGdyZXNxbF9lbGVwaGFudC5zdmcvNjQwcHgtUG9zdGdyZXNxbF9lbGVwaGFudC5zdmcucG5nXCIsXHJcbiAgICAgICAgZG9jdTpcImh0dHBzOi8vd3d3LnBvc3RncmVzcWwub3JnL2RvY3MvXCJcclxuICAgIH1cclxuXVxyXG5cclxuZXhwb3J0IGNvbnN0IGNvbnRhY3RvcyA9IFtcclxuICAgIHtcclxuICAgICAgICBMaW5rZWRJblVSTDpcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9tYXJ0aW4tLWZpZ3Vlcm9hLyBcIlxyXG4gICAgfVxyXG5dIiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==