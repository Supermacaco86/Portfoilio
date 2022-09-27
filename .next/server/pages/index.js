(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./.next/lang lazy recursive ^\\.\\/.*\\.json$":
/*!**********************************************************!*\
  !*** ./.next/lang/ lazy ^\.\/.*\.json$ namespace object ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./en.json": [
		"./.next/lang/en.json",
		"_next_lang_en_json"
	],
	"./es.json": [
		"./.next/lang/es.json",
		"_next_lang_es_json"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__.t(id, 3);
	});
}
webpackAsyncContext.keys = function() { return Object.keys(map); };
webpackAsyncContext.id = "./.next/lang lazy recursive ^\\.\\/.*\\.json$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ index; },
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/Layout */ "./component/Layout.js");
/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../profile */ "./profile.js");
/* harmony import */ var _component_LenguajeSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/LenguajeSelector */ "./component/LenguajeSelector.js");

var _jsxFileName = "C:\\Users\\Martin Figueroa\\Desktop\\Portfoilio\\pages\\index.js";



function index(props) {
  const {
    title
  } = props;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Layout__WEBPACK_IMPORTED_MODULE_1__.default, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
      className: "row",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col-md-12",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "card card-body bg-secondary text-light",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "row",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "col-md-4",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: "Logo_celeste.png",
                alt: "",
                className: "img-fluid"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 17,
                columnNumber: 25
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "col-md-8",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
                children: "Martin Figueroa"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 20,
                columnNumber: 25
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                children: title.descripcion
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 21,
                columnNumber: 25
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                href: "https://www.linkedin.com/in/martin--figueroa/ ",
                target: "_blank",
                className: "btn btn-secondary",
                children: "Contratame"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 22,
                columnNumber: 25
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 19,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "row py-4",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col-md-4",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "card bg-ligth",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "card body",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
              children: "Habilidades"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 21
            }, this), _profile__WEBPACK_IMPORTED_MODULE_2__.habilidades.map(({
              habilidades,
              percentage
            }, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "py-2",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
                children: habilidades
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 38,
                columnNumber: 37
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "progress",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "progress-bar",
                  role: "progressbar",
                  style: {
                    width: `${percentage}%`
                  },
                  "area-valuenow": "50",
                  "area-valuemin": "0",
                  "area-valuemax": "100"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 40,
                  columnNumber: 41
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 39,
                columnNumber: 41
              }, this)]
            }, i, true, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 33
            }, this))]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col-md-8",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "card bg-ligth",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "card body",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
              children: "Experiencia"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
              children: _profile__WEBPACK_IMPORTED_MODULE_2__.experiencias.map(({
                titulo,
                donde,
                descripcion,
                url,
                fecha
              }, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
                  children: titulo
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 65,
                  columnNumber: 38
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
                  children: donde
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 66,
                  columnNumber: 38
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
                  children: fecha
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 67,
                  columnNumber: 38
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  children: descripcion
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 68,
                  columnNumber: 38
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
                  children: url
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 69,
                  columnNumber: 38
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 70,
                  columnNumber: 38
                }, this)]
              }, i, true, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 33
              }, this))
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "row",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col-md-12",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "card card-body bg-dark",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "row",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "col-md-12",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
                className: "text-center text-light",
                children: "Proyectos"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 25
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 21
            }, this), _profile__WEBPACK_IMPORTED_MODULE_2__.proyectos.map(({
              titulo,
              donde,
              descripcion,
              url,
              imagen,
              fecha
            }, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "col-md-4 p-2",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "card h-100",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "overflow",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                    src: `/${imagen}`,
                    alt: "",
                    className: "card-img-top"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 92,
                    columnNumber: 45
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 91,
                  columnNumber: 41
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "card-body",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
                    children: titulo
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 95,
                    columnNumber: 49
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
                    children: donde
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 96,
                    columnNumber: 49
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
                    children: fecha
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 97,
                    columnNumber: 49
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                    children: descripcion
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 98,
                    columnNumber: 49
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h6", {
                    children: url
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 99,
                    columnNumber: 49
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 94,
                  columnNumber: 45
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 37
              }, this)
            }, i, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 33
            }, this))]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 5
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 1
  }, this);
}
async function getStaticProps({
  locale
}) {
  console.log(locale);
  const response = await __webpack_require__("./.next/lang lazy recursive ^\\.\\/.*\\.json$")(`./${locale}.json`);
  return {
    props: {
      title: response.default.title
    }
  };
}

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

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("nprogress");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","component_Layout_js"], function() { return __webpack_exec__("./pages/index.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi8ubmV4dC9sYW5nfGxhenl8L14vLiovLmpzb24kL3xncm91cE9wdGlvbnM6IHt9fG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vcHJvZmlsZS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL3BvcnRmb2xpby9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL3BvcnRmb2xpby9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL2V4dGVybmFsIFwibnByb2dyZXNzXCIiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovL3BvcnRmb2xpby9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbImluZGV4IiwicHJvcHMiLCJ0aXRsZSIsImRlc2NyaXBjaW9uIiwiaGFiaWxpZGFkZXMiLCJwZXJjZW50YWdlIiwiaSIsIndpZHRoIiwiZXhwZXJpZW5jaWFzIiwidGl0dWxvIiwiZG9uZGUiLCJ1cmwiLCJmZWNoYSIsInByb3llY3RvcyIsImltYWdlbiIsImdldFN0YXRpY1Byb3BzIiwibG9jYWxlIiwiY29uc29sZSIsImxvZyIsInJlc3BvbnNlIiwiZGVmYXVsdCIsInBvc3RzIiwiY29udGVudCIsImltYWdlVVJMIiwiZG9jdSJd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QSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9lbi5qc29uXCI6IFtcblx0XHRcIi4vLm5leHQvbGFuZy9lbi5qc29uXCIsXG5cdFx0XCJfbmV4dF9sYW5nX2VuX2pzb25cIlxuXHRdLFxuXHRcIi4vZXMuanNvblwiOiBbXG5cdFx0XCIuLy5uZXh0L2xhbmcvZXMuanNvblwiLFxuXHRcdFwiX25leHRfbGFuZ19lc19qc29uXCJcblx0XVxufTtcbmZ1bmN0aW9uIHdlYnBhY2tBc3luY0NvbnRleHQocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0XHR0aHJvdyBlO1xuXHRcdH0pO1xuXHR9XG5cblx0dmFyIGlkcyA9IG1hcFtyZXFdLCBpZCA9IGlkc1swXTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uZShpZHNbMV0pLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18udChpZCwgMyk7XG5cdH0pO1xufVxud2VicGFja0FzeW5jQ29udGV4dC5rZXlzID0gZnVuY3Rpb24oKSB7IHJldHVybiBPYmplY3Qua2V5cyhtYXApOyB9O1xud2VicGFja0FzeW5jQ29udGV4dC5pZCA9IFwiLi8ubmV4dC9sYW5nIGxhenkgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLipcXFxcLmpzb24kXCI7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tBc3luY0NvbnRleHQ7IiwiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50L0xheW91dFwiXHJcbmltcG9ydCB7IGhhYmlsaWRhZGVzLCBleHBlcmllbmNpYXMsIHByb3llY3RvcyB9IGZyb20gXCIuLi9wcm9maWxlXCJcclxuaW1wb3J0IExlZ3VhamVTZWxlY3RvciBmcm9tIFwiLi4vY29tcG9uZW50L0xlbmd1YWplU2VsZWN0b3JcIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbmRleCAocHJvcHMpIHtcclxuICAgICBjb25zdCB7dGl0bGV9PSBwcm9wcztcclxuICAgIHJldHVybihcclxuICAgXHJcbjxMYXlvdXQ+XHJcbnsvKipIZWFkZXIgY2FyZCAqL31cclxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhcmQtYm9keSBiZy1zZWNvbmRhcnkgdGV4dC1saWdodFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiTG9nb19jZWxlc3RlLnBuZ1wiIGFsdD1cIlwiIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5NYXJ0aW4gRmlndWVyb2E8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57dGl0bGUuZGVzY3JpcGNpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL21hcnRpbi0tZmlndWVyb2EvIFwiIHRhcmdldD1cIl9ibGFua1wiIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCI+Q29udHJhdGFtZTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvaGVhZGVyPlxyXG5cclxuICAgIHsvKipTZWd1bmRhIHNlY2Npb24gKi99XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBweS00XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgYmctbGlndGhcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxPkhhYmlsaWRhZGVzPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhYmlsaWRhZGVzLm1hcCgoe2hhYmlsaWRhZGVzLHBlcmNlbnRhZ2V9LGkpPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS0yXCIga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PntoYWJpbGlkYWRlc308L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInByb2dyZXNzLWJhclwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9sZT1cInByb2dyZXNzYmFyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6YCR7cGVyY2VudGFnZX0lYH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmVhLXZhbHVlbm93PVwiNTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJlYS12YWx1ZW1pbj1cIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJlYS12YWx1ZW1heD1cIjEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC04XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBiZy1saWd0aFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDE+RXhwZXJpZW5jaWE8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwZXJpZW5jaWFzLm1hcCgoe3RpdHVsbywgZG9uZGUsIGRlc2NyaXBjaW9uLCB1cmwsIGZlY2hhfSxpKT0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1Pnt0aXR1bG99PC9oNT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDY+e2RvbmRlfTwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDY+e2ZlY2hhfTwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57ZGVzY3JpcGNpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2Pnt1cmx9PC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+ICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICB7LyoqUG9ydGZvbGlvICovfVxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FyZC1ib2R5IGJnLWRhcmtcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtbGlnaHRcIj5Qcm95ZWN0b3M8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3llY3Rvcy5tYXAoKHt0aXR1bG8sIGRvbmRlLCBkZXNjcmlwY2lvbiwgdXJsLCBpbWFnZW4sIGZlY2hhfSxpKT0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTQgcC0yXCIga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGgtMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2AvJHtpbWFnZW59YH0gYWx0PVwiXCIgY2xhc3NOYW1lPVwiY2FyZC1pbWctdG9wXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT57dGl0dWxvfTwvaDU+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDY+e2RvbmRlfTwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNj57ZmVjaGF9PC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2Rlc2NyaXBjaW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2Pnt1cmx9PC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC9MYXlvdXQ+XHJcblxyXG4pXHJcbiB9XHJcblxyXG4gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzICh7IGxvY2FsZSB9KXtcclxuICAgIGNvbnNvbGUubG9nKGxvY2FsZSlcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgaW1wb3J0KGAuLi8ubmV4dC9sYW5nLyR7bG9jYWxlfS5qc29uYCk7XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgcHJvcHM6IHsgdGl0bGU6cmVzcG9uc2UuZGVmYXVsdC50aXRsZX1cclxuICAgIH07XHJcbn0iLCJleHBvcnQgY29uc3QgaGFiaWxpZGFkZXMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgaGFiaWxpZGFkZXM6ICdKYXZhc2NyaXB0JyxcclxuICAgICAgICBwZXJjZW50YWdlOiA4OCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaGFiaWxpZGFkZXM6ICdSZWFjdCcsXHJcbiAgICAgICAgcGVyY2VudGFnZTogNzAsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGhhYmlsaWRhZGVzOiAnUmVkdXgnLFxyXG4gICAgICAgIHBlcmNlbnRhZ2U6IDc2LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBoYWJpbGlkYWRlczogJ0V4cHJlc3MnLFxyXG4gICAgICAgIHBlcmNlbnRhZ2U6IDcwLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBoYWJpbGlkYWRlczogJ1NlcXVlbGl6ZScsXHJcbiAgICAgICAgcGVyY2VudGFnZTogODAsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGhhYmlsaWRhZGVzOiAnUG9zdGdyZXMnLFxyXG4gICAgICAgIHBlcmNlbnRhZ2U6IDc1LFxyXG4gICAgfSxcclxuXHJcbl1cclxuXHJcbmV4cG9ydCBjb25zdCBleHBlcmllbmNpYXMgPVtcclxuICAgIFxyXG4gICAge1xyXG4gICAgICAgIHRpdHVsbzogJ0Z1bGwgU3RhY2sgVGVhY2hpbmcgQXNzaXN0YW50JyxcclxuICAgICAgICBkb25kZTonSGVucnkgQm9vdGNhbXAsIEJ1ZW5vcyBBaXJlcywgQXJnZW50aW5hLicsXHJcbiAgICAgICAgZGVzY3JpcGNpb246J0Nvb3JkaW5hY2lvbiBkZSB1biBncnVwbyBkZSBlc3R1ZGlhbnRlcyBwYXJhIGxvZ3JhciBsYSBpbnRlZ3JhY2nDs24gYWwgZXF1aXBvIGRlIGVzdHVkaW8sIGFzaXN0aXIgYSBsYSByZXNvbHVjacOzbiBkZSBlamVyY2ljaW9zIHkgcHJvbW92ZXIgbGEgY29sYWJvcmFjaW9uIGdydXBhbCAnLFxyXG4gICAgICAgIGZlY2hhOidNYXlvIDcgLSBqdWxpbyA3LicsXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbl1cclxuXHJcbmV4cG9ydCBjb25zdCBwcm95ZWN0b3MgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgdGl0dWxvOiAnRnVsbCBTdGFjayBXZWIgRGV2ZWxvcGVyIC0gIEFwcCBNw6FzIFNhbHVkJyxcclxuICAgICAgICAvLyBkb25kZTogJ0hlbnJ5IEJvb3RjYW1wLCBCdWVub3MgQWlyZXMsIEFyZ2VudGluYScsXHJcbiAgICAgICAgZGVzY3JpcGNpb246J0FwcCBkZSBTYWx1ZCwgY3V5b3MgdXN1YXJpb3Mgc29uIHBhY2llbnRlcyB5IG3DqWRpY29zLCBsb3MgY3VhbGVzIHB1ZWRlbiBnZXN0aW9uYXIgdHVybm9zLCBiw7pzcXVlZGFzIGRlIHByb2Zlc2lvbmFsZXMgZmlsdHJhZG9zIHBvciBlc3BlY2lhbGlkYWQgeSBsb2NhY2nDs24sIGVudHJlIHN1cyBmdW5jaW9uYWxpZGFkZXMgc2UgZW5jdWVudHJhbiBsYSBkZSBsb2dpbiBjb24gR29vZ2xlIExvZ2luLCByZXNwdWVzdGEgYXV0b23DoXRpY2EgdsOtYSBtYWlsIGNvbiBOb2RlbWFpbGVyLCB1biBjYWxlbmRhcmlvIGltcGxlbWVudGFkbyBjb24gQG1hdGVyaWFsLXVpL3BpY2tlcnMsIHBhc2FyZWxhIGRlIHBhZ28gcGFyYSBNZXJjYWRvUGFnby4nLFxyXG4gICAgICAgIHVybDonaHR0cHM6Ly9hcHAtY2xpbmljYS52ZXJjZWwuYXBwJyxcclxuICAgICAgICBmZWNoYTonQWdvc3RvIDEyIC0gU2VwdGllbWJyZSA4JyxcclxuICAgICAgICBpbWFnZW46XCJhcHBTYWx1ZC5wbmdcIlxyXG4gICAgICAgIFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXR1bG86ICdGdWxsIFN0YWNrIFdlYiBEZXZlbG9wZXIgLSBEb2dzIEFwcCcsXHJcbiAgICAgICAgZG9uZGU6J0hlbnJ5IEJvb3RjYW1wLCBCdWVub3MgQWlyZXMsIEFyZ2VudGluYS4nLFxyXG4gICAgICAgIGRlc2NyaXBjaW9uOidEaXNlw7FhciB5IGRlc2Fycm9sbGFyIHVuYSBBcHAgZGUgcGVycm9zIHF1ZSBpbmNsdcOtYTogYsO6c3F1ZWRhcywgZmlsdHJhZG9zLCBvcmRlbmFtaWVudG9zIHkgY3JlYWNpw7NuLkRlc2Fycm9sbGFyIGxhIGFwcCB1c2FuZG8gcGFyYSBlbCBGcm9udCBSZWFjdCwgUmVkdXgsIENTUyBwdXJvIHkgQmFjayBkZXNhcnJvbGxhZG8gZW4gTm9kZS5qcyBjb24gRXhwcmVzcy4gQmFzZSBkZSBkYXRvcyBlbiBQb3N0Z3JlU1FMIHkgU2VxdWVsaXplLiBEZXBsb3kgcmVhbGl6YWRvIGNvbiBIZXJva3UgeSBWZXJjZWwuJyxcclxuICAgICAgICB1cmw6ICdodHRwczovL3BpLWRvZy1udS52ZXJjZWwuYXBwJyxcclxuICAgICAgICBmZWNoYTonSnVsaW8gMTUgLSBBZ29zdG8gNCcsXHJcbiAgICAgICAgaW1hZ2VuOlwiQ2FwdHVyYURvZy5wbmdcIlxyXG4gICAgICAgIFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXR1bG86ICdGdWxsIFN0YWNrIFdlYiBEZXZlbG9wZXIgLSBGb29kIEFwcCcsXHJcbiAgICAgICAgZG9uZGU6J0hlbnJ5IEJvb3RjYW1wLCBCdWVub3MgQWlyZXMsIEFyZ2VudGluYS4gJyxcclxuICAgICAgICBkZXNjcmlwY2lvbjonRGlzZcOxYXIgeSBkZXNhcnJvbGxhciB1bmEgQXBwIGRlIGdhc3Ryb25vbcOtYSBxdWUgaW5jbHXDrWE6IGLDunNxdWVkYXMsIGZpbHRyYWRvcywgb3JkZW5hbWllbnRvcyB5IGNyZWFjacOzbi4gRGVzYXJyb2xsYXIgbGEgYXBwIHVzYW5kbyBwYXJhIGVsIEZyb250IFJlYWN0LCBSZWR1eCwgQ1NTIHB1cm8geSBCYWNrIGRlc2Fycm9sbGFkbyBlbiBOb2RlLmpzIGNvbiBFeHByZXNzLiBCYXNlIGRlIGRhdG9zIGVuIFBvc3RncmVTUUwgeSBTZXF1ZWxpemUuIERlcGxveSByZWFsaXphZG8gY29uIEhlcm9rdSB5IFZlcmNlbC4nLFxyXG4gICAgICAgIHVybDonaHR0cHM6Ly9waS1mb29kLXRocmVlLnZlcmNlbC5hcHAnLFxyXG4gICAgICAgIGZlY2hhOidKdW5pbyAxIC0gSnVsaW8gNycsXHJcbiAgICAgICAgaW1hZ2VuOiBcIkNhcHR1cmFGb29kLnBuZ1wiXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG5dXHJcblxyXG5leHBvcnQgY29uc3QgcG9zdHMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6XCJKYXZhc2NyaXB0XCIsXHJcbiAgICAgICAgY29udGVudDpcIkRlc2NyaXBjaW9uXCIsXHJcbiAgICAgICAgaW1hZ2VVUkw6XCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iLzkvOTkvVW5vZmZpY2lhbF9KYXZhU2NyaXB0X2xvZ29fMi5zdmcvMTIwMHB4LVVub2ZmaWNpYWxfSmF2YVNjcmlwdF9sb2dvXzIuc3ZnLnBuZ1wiLFxyXG4gICAgICAgIGRvY3U6XCJodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lcy9kb2NzL1dlYi9KYXZhU2NyaXB0XCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6XCJSZWFjdFwiLFxyXG4gICAgICAgIGNvbnRlbnQ6XCJEZXNjcmlwY2lvblwiLFxyXG4gICAgICAgIGltYWdlVVJMOlwiaHR0cHM6Ly9yZWFjdGpzLm9yZy9sb2dvLW9nLnBuZ1wiLFxyXG4gICAgICAgIGRvY3U6XCJodHRwczovL2VzLnJlYWN0anMub3JnL2RvY3MvZ2V0dGluZy1zdGFydGVkLmh0bWxcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTpcIlJlZHV4XCIsXHJcbiAgICAgICAgY29udGVudDpcIkRlc2NyaXBjaW9uXCIsXHJcbiAgICAgICAgaW1hZ2VVUkw6XCJodHRwczovL2Nkbi53b3JsZHZlY3RvcmxvZ28uY29tL2xvZ29zL3JlZHV4LnN2Z1wiLFxyXG4gICAgICAgIGRvY3U6XCJodHRwczovL2VzLnJlZHV4LmpzLm9yZy9cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTpcIkV4cHJlc3NcIixcclxuICAgICAgICBjb250ZW50OlwiRGVzY3JpcGNpb25cIixcclxuICAgICAgICBpbWFnZVVSTDpcImh0dHBzOi8vZmQtZGV2ZWxvcG1lbnQuY29tL2ltYWdlcy9leHByZXNzanMucG5nXCIsXHJcbiAgICAgICAgZG9jdTpcImh0dHBzOi8vZXhwcmVzc2pzLmNvbS9lcy9cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTpcIlNlcXVlbGl6ZVwiLFxyXG4gICAgICAgIGNvbnRlbnQ6XCJEZXNjcmlwY2lvblwiLFxyXG4gICAgICAgIGltYWdlVVJMOlwiaHR0cHM6Ly9nb29nbGUuZ2l0aHViLmlvL3NxbGNvbW1lbnRlci9pbWFnZXMvc2VxdWVsaXplLWxvZ28ucG5nXCIsXHJcbiAgICAgICAgZG9jdTpcImh0dHBzOi8vc2VxdWVsaXplLm9yZy9cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTpcIlBvc3RncmVTUUxcIixcclxuICAgICAgICBjb250ZW50OlwiRGVzY3JpcGNpb25cIixcclxuICAgICAgICBpbWFnZVVSTDpcImh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvdGh1bWIvMi8yOS9Qb3N0Z3Jlc3FsX2VsZXBoYW50LnN2Zy82NDBweC1Qb3N0Z3Jlc3FsX2VsZXBoYW50LnN2Zy5wbmdcIixcclxuICAgICAgICBkb2N1OlwiaHR0cHM6Ly93d3cucG9zdGdyZXNxbC5vcmcvZG9jcy9cIlxyXG4gICAgfVxyXG5dXHJcblxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJucHJvZ3Jlc3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9