"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./profile.js":
/*!********************!*\
  !*** ./profile.js ***!
  \********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"experiencias\": function() { return /* binding */ experiencias; },\n/* harmony export */   \"habilidades\": function() { return /* binding */ habilidades; },\n/* harmony export */   \"proyectos\": function() { return /* binding */ proyectos; }\n/* harmony export */ });\nvar habilidades = [\n    {\n        habilidades: \"Javascript\",\n        percentage: 88\n    },\n    {\n        habilidades: \"React\",\n        percentage: 70\n    },\n    {\n        habilidades: \"Redux\",\n        percentage: 76\n    },\n    {\n        habilidades: \"Express\",\n        percentage: 70\n    },\n    {\n        habilidades: \"Sequelize\",\n        percentage: 80\n    },\n    {\n        habilidades: \"Postgres\",\n        percentage: 75\n    }, \n];\nvar experiencias = [\n    {\n        titulo: \"Full Stack Teaching Assistant\",\n        donde: \"Henry Bootcamp, Buenos Aires, Argentina.\",\n        descripcion: \"Coordinacion de un grupo de estudiantes para lograr la integraci\\xf3n al equipo de estudio, asistir a la resoluci\\xf3n de ejercicios y promover la colaboracion grupal \",\n        fecha: \"Mayo 7 - julio 7.\"\n    }\n];\nvar proyectos = [\n    {\n        titulo: \"Full Stack Web Developer -  App M\\xe1s Salud\",\n        donde: \"Henry Bootcamp, Buenos Aires, Argentina\",\n        descripcion: \"Dise\\xf1ar y desarrollar una App de Salud, cuyos usuarios son pacientes y m\\xe9dicos, los cuales pueden gestionar turnos, b\\xfasquedas de profesionales filtrados por especialidad y locaci\\xf3n, entre sus funcionalidades se encuentran la de login con Google Login, respuesta autom\\xe1tica v\\xeda mail con Nodemailer, un calendario implementado con @material-ui/pickers, pasarela de pago para MercadoPago. La est\\xe9tica de la misma fue llevada a cabo con Bootstrap y MUI.Desarrollar la app usando para el Front React, Redux, CSS puro y Back desarrollado en Node.js con Express. Base de datos en PostgreSQL y Sequelize.\",\n        url: \"https://app-clinica.vercel.app\",\n        fecha: \"Agosto 12 - Septiembre 8\",\n        imagen: \"appSalud.png\"\n    },\n    {\n        titulo: \"Full Stack Web Developer - Dogs App\",\n        donde: \"Henry Bootcamp, Buenos Aires, Argentina.\",\n        descripcion: \"Dise\\xf1ar y desarrollar una App de perros que inclu\\xeda: b\\xfasquedas, filtrados, ordenamientos y creaci\\xf3n.Desarrollar la app usando para el Front React, Redux, CSS puro y Back desarrollado en Node.js con Express. Base de datos en PostgreSQL y Sequelize.\",\n        url: \"https://pi-dog-nu.vercel.app\",\n        fecha: \"Julio 15 - Agosto 4\"\n    },\n    {\n        titulo: \"Full Stack Web Developer - Food App\",\n        donde: \"Henry Bootcamp, Buenos Aires, Argentina. \",\n        descripcion: \"Dise\\xf1ar y desarrollar una App de gastronom\\xeda que inclu\\xeda: b\\xfasquedas, filtrados, ordenamientos y creaci\\xf3n. Desarrollar la app usando para el Front React, Redux, CSS puro y Back desarrollado en Node.js con Express. Base de datos en PostgreSQL y Sequelize.\",\n        url: \"https://pi-food-three.vercel.app\",\n        fecha: \"Junio 1 - Julio 7\"\n    }\n];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wcm9maWxlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFPLElBQU1BLFdBQVcsR0FBRztJQUN2QjtRQUNJQSxXQUFXLEVBQUUsWUFBWTtRQUN6QkMsVUFBVSxFQUFFLEVBQUU7S0FDakI7SUFDRDtRQUNJRCxXQUFXLEVBQUUsT0FBTztRQUNwQkMsVUFBVSxFQUFFLEVBQUU7S0FDakI7SUFDRDtRQUNJRCxXQUFXLEVBQUUsT0FBTztRQUNwQkMsVUFBVSxFQUFFLEVBQUU7S0FDakI7SUFDRDtRQUNJRCxXQUFXLEVBQUUsU0FBUztRQUN0QkMsVUFBVSxFQUFFLEVBQUU7S0FDakI7SUFDRDtRQUNJRCxXQUFXLEVBQUUsV0FBVztRQUN4QkMsVUFBVSxFQUFFLEVBQUU7S0FDakI7SUFDRDtRQUNJRCxXQUFXLEVBQUUsVUFBVTtRQUN2QkMsVUFBVSxFQUFFLEVBQUU7S0FDakI7Q0FFSjtBQUVNLElBQU1DLFlBQVksR0FBRTtJQUV2QjtRQUNJQyxNQUFNLEVBQUUsK0JBQStCO1FBQ3ZDQyxLQUFLLEVBQUMsMENBQTBDO1FBQ2hEQyxXQUFXLEVBQUMseUtBQW1LO1FBQy9LQyxLQUFLLEVBQUMsbUJBQW1CO0tBRTVCO0NBQ0o7QUFFTSxJQUFNQyxTQUFTLEdBQUc7SUFDckI7UUFDSUosTUFBTSxFQUFFLDhDQUEyQztRQUNuREMsS0FBSyxFQUFFLHlDQUF5QztRQUNoREMsV0FBVyxFQUFDLDJtQkFBc2xCO1FBQ2xtQkcsR0FBRyxFQUFDLGdDQUFnQztRQUNwQ0YsS0FBSyxFQUFDLDBCQUEwQjtRQUNoQ0csTUFBTSxFQUFDLGNBQWM7S0FFeEI7SUFDRDtRQUNJTixNQUFNLEVBQUUscUNBQXFDO1FBQzdDQyxLQUFLLEVBQUMsMENBQTBDO1FBQ2hEQyxXQUFXLEVBQUMscVFBQXlQO1FBQ3JRRyxHQUFHLEVBQUUsOEJBQThCO1FBQ25DRixLQUFLLEVBQUMscUJBQXFCO0tBRTlCO0lBQ0Q7UUFDSUgsTUFBTSxFQUFFLHFDQUFxQztRQUM3Q0MsS0FBSyxFQUFDLDJDQUEyQztRQUNqREMsV0FBVyxFQUFDLDhRQUErUDtRQUMzUUcsR0FBRyxFQUFDLGtDQUFrQztRQUN0Q0YsS0FBSyxFQUFDLG1CQUFtQjtLQUU1QjtDQUVKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3Byb2ZpbGUuanM/OWRhZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgaGFiaWxpZGFkZXMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgaGFiaWxpZGFkZXM6ICdKYXZhc2NyaXB0JyxcclxuICAgICAgICBwZXJjZW50YWdlOiA4OCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaGFiaWxpZGFkZXM6ICdSZWFjdCcsXHJcbiAgICAgICAgcGVyY2VudGFnZTogNzAsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGhhYmlsaWRhZGVzOiAnUmVkdXgnLFxyXG4gICAgICAgIHBlcmNlbnRhZ2U6IDc2LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBoYWJpbGlkYWRlczogJ0V4cHJlc3MnLFxyXG4gICAgICAgIHBlcmNlbnRhZ2U6IDcwLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBoYWJpbGlkYWRlczogJ1NlcXVlbGl6ZScsXHJcbiAgICAgICAgcGVyY2VudGFnZTogODAsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGhhYmlsaWRhZGVzOiAnUG9zdGdyZXMnLFxyXG4gICAgICAgIHBlcmNlbnRhZ2U6IDc1LFxyXG4gICAgfSxcclxuXHJcbl1cclxuXHJcbmV4cG9ydCBjb25zdCBleHBlcmllbmNpYXMgPVtcclxuICAgIFxyXG4gICAge1xyXG4gICAgICAgIHRpdHVsbzogJ0Z1bGwgU3RhY2sgVGVhY2hpbmcgQXNzaXN0YW50JyxcclxuICAgICAgICBkb25kZTonSGVucnkgQm9vdGNhbXAsIEJ1ZW5vcyBBaXJlcywgQXJnZW50aW5hLicsXHJcbiAgICAgICAgZGVzY3JpcGNpb246J0Nvb3JkaW5hY2lvbiBkZSB1biBncnVwbyBkZSBlc3R1ZGlhbnRlcyBwYXJhIGxvZ3JhciBsYSBpbnRlZ3JhY2nDs24gYWwgZXF1aXBvIGRlIGVzdHVkaW8sIGFzaXN0aXIgYSBsYSByZXNvbHVjacOzbiBkZSBlamVyY2ljaW9zIHkgcHJvbW92ZXIgbGEgY29sYWJvcmFjaW9uIGdydXBhbCAnLFxyXG4gICAgICAgIGZlY2hhOidNYXlvIDcgLSBqdWxpbyA3LicsXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbl1cclxuXHJcbmV4cG9ydCBjb25zdCBwcm95ZWN0b3MgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgdGl0dWxvOiAnRnVsbCBTdGFjayBXZWIgRGV2ZWxvcGVyIC0gIEFwcCBNw6FzIFNhbHVkJyxcclxuICAgICAgICBkb25kZTogJ0hlbnJ5IEJvb3RjYW1wLCBCdWVub3MgQWlyZXMsIEFyZ2VudGluYScsXHJcbiAgICAgICAgZGVzY3JpcGNpb246J0Rpc2XDsWFyIHkgZGVzYXJyb2xsYXIgdW5hIEFwcCBkZSBTYWx1ZCwgY3V5b3MgdXN1YXJpb3Mgc29uIHBhY2llbnRlcyB5IG3DqWRpY29zLCBsb3MgY3VhbGVzIHB1ZWRlbiBnZXN0aW9uYXIgdHVybm9zLCBiw7pzcXVlZGFzIGRlIHByb2Zlc2lvbmFsZXMgZmlsdHJhZG9zIHBvciBlc3BlY2lhbGlkYWQgeSBsb2NhY2nDs24sIGVudHJlIHN1cyBmdW5jaW9uYWxpZGFkZXMgc2UgZW5jdWVudHJhbiBsYSBkZSBsb2dpbiBjb24gR29vZ2xlIExvZ2luLCByZXNwdWVzdGEgYXV0b23DoXRpY2EgdsOtYSBtYWlsIGNvbiBOb2RlbWFpbGVyLCB1biBjYWxlbmRhcmlvIGltcGxlbWVudGFkbyBjb24gQG1hdGVyaWFsLXVpL3BpY2tlcnMsIHBhc2FyZWxhIGRlIHBhZ28gcGFyYSBNZXJjYWRvUGFnby4gTGEgZXN0w6l0aWNhIGRlIGxhIG1pc21hIGZ1ZSBsbGV2YWRhIGEgY2FibyBjb24gQm9vdHN0cmFwIHkgTVVJLkRlc2Fycm9sbGFyIGxhIGFwcCB1c2FuZG8gcGFyYSBlbCBGcm9udCBSZWFjdCwgUmVkdXgsIENTUyBwdXJvIHkgQmFjayBkZXNhcnJvbGxhZG8gZW4gTm9kZS5qcyBjb24gRXhwcmVzcy4gQmFzZSBkZSBkYXRvcyBlbiBQb3N0Z3JlU1FMIHkgU2VxdWVsaXplLicsXHJcbiAgICAgICAgdXJsOidodHRwczovL2FwcC1jbGluaWNhLnZlcmNlbC5hcHAnLFxyXG4gICAgICAgIGZlY2hhOidBZ29zdG8gMTIgLSBTZXB0aWVtYnJlIDgnLFxyXG4gICAgICAgIGltYWdlbjpcImFwcFNhbHVkLnBuZ1wiXHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdHVsbzogJ0Z1bGwgU3RhY2sgV2ViIERldmVsb3BlciAtIERvZ3MgQXBwJyxcclxuICAgICAgICBkb25kZTonSGVucnkgQm9vdGNhbXAsIEJ1ZW5vcyBBaXJlcywgQXJnZW50aW5hLicsXHJcbiAgICAgICAgZGVzY3JpcGNpb246J0Rpc2XDsWFyIHkgZGVzYXJyb2xsYXIgdW5hIEFwcCBkZSBwZXJyb3MgcXVlIGluY2x1w61hOiBiw7pzcXVlZGFzLCBmaWx0cmFkb3MsIG9yZGVuYW1pZW50b3MgeSBjcmVhY2nDs24uRGVzYXJyb2xsYXIgbGEgYXBwIHVzYW5kbyBwYXJhIGVsIEZyb250IFJlYWN0LCBSZWR1eCwgQ1NTIHB1cm8geSBCYWNrIGRlc2Fycm9sbGFkbyBlbiBOb2RlLmpzIGNvbiBFeHByZXNzLiBCYXNlIGRlIGRhdG9zIGVuIFBvc3RncmVTUUwgeSBTZXF1ZWxpemUuJyxcclxuICAgICAgICB1cmw6ICdodHRwczovL3BpLWRvZy1udS52ZXJjZWwuYXBwJyxcclxuICAgICAgICBmZWNoYTonSnVsaW8gMTUgLSBBZ29zdG8gNCcsXHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdHVsbzogJ0Z1bGwgU3RhY2sgV2ViIERldmVsb3BlciAtIEZvb2QgQXBwJyxcclxuICAgICAgICBkb25kZTonSGVucnkgQm9vdGNhbXAsIEJ1ZW5vcyBBaXJlcywgQXJnZW50aW5hLiAnLFxyXG4gICAgICAgIGRlc2NyaXBjaW9uOidEaXNlw7FhciB5IGRlc2Fycm9sbGFyIHVuYSBBcHAgZGUgZ2FzdHJvbm9tw61hIHF1ZSBpbmNsdcOtYTogYsO6c3F1ZWRhcywgZmlsdHJhZG9zLCBvcmRlbmFtaWVudG9zIHkgY3JlYWNpw7NuLiBEZXNhcnJvbGxhciBsYSBhcHAgdXNhbmRvIHBhcmEgZWwgRnJvbnQgUmVhY3QsIFJlZHV4LCBDU1MgcHVybyB5IEJhY2sgZGVzYXJyb2xsYWRvIGVuIE5vZGUuanMgY29uIEV4cHJlc3MuIEJhc2UgZGUgZGF0b3MgZW4gUG9zdGdyZVNRTCB5IFNlcXVlbGl6ZS4nLFxyXG4gICAgICAgIHVybDonaHR0cHM6Ly9waS1mb29kLXRocmVlLnZlcmNlbC5hcHAnLFxyXG4gICAgICAgIGZlY2hhOidKdW5pbyAxIC0gSnVsaW8gNycsXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG5dIl0sIm5hbWVzIjpbImhhYmlsaWRhZGVzIiwicGVyY2VudGFnZSIsImV4cGVyaWVuY2lhcyIsInRpdHVsbyIsImRvbmRlIiwiZGVzY3JpcGNpb24iLCJmZWNoYSIsInByb3llY3RvcyIsInVybCIsImltYWdlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./profile.js\n"));

/***/ })

});