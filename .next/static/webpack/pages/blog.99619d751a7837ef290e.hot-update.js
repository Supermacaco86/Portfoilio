self["webpackHotUpdate_N_E"]("pages/blog",{

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
/* harmony export */   "posts": function() { return /* binding */ posts; }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJoYWJpbGlkYWRlcyIsInBlcmNlbnRhZ2UiLCJleHBlcmllbmNpYXMiLCJ0aXR1bG8iLCJkb25kZSIsImRlc2NyaXBjaW9uIiwiZmVjaGEiLCJwcm95ZWN0b3MiLCJ1cmwiLCJpbWFnZW4iLCJwb3N0cyIsInRpdGxlIiwiY29udGVudCIsImltYWdlVVJMIiwiZG9jdSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxXQUFXLEdBQUcsQ0FDdkI7QUFDSUEsYUFBVyxFQUFFLFlBRGpCO0FBRUlDLFlBQVUsRUFBRTtBQUZoQixDQUR1QixFQUt2QjtBQUNJRCxhQUFXLEVBQUUsT0FEakI7QUFFSUMsWUFBVSxFQUFFO0FBRmhCLENBTHVCLEVBU3ZCO0FBQ0lELGFBQVcsRUFBRSxPQURqQjtBQUVJQyxZQUFVLEVBQUU7QUFGaEIsQ0FUdUIsRUFhdkI7QUFDSUQsYUFBVyxFQUFFLFNBRGpCO0FBRUlDLFlBQVUsRUFBRTtBQUZoQixDQWJ1QixFQWlCdkI7QUFDSUQsYUFBVyxFQUFFLFdBRGpCO0FBRUlDLFlBQVUsRUFBRTtBQUZoQixDQWpCdUIsRUFxQnZCO0FBQ0lELGFBQVcsRUFBRSxVQURqQjtBQUVJQyxZQUFVLEVBQUU7QUFGaEIsQ0FyQnVCLENBQXBCO0FBNEJBLElBQU1DLFlBQVksR0FBRSxDQUV2QjtBQUNJQyxRQUFNLEVBQUUsK0JBRFo7QUFFSUMsT0FBSyxFQUFDLDBDQUZWO0FBR0lDLGFBQVcsRUFBQyxtS0FIaEI7QUFJSUMsT0FBSyxFQUFDO0FBSlYsQ0FGdUIsQ0FBcEI7QUFXQSxJQUFNQyxTQUFTLEdBQUcsQ0FDckI7QUFDSUosUUFBTSxFQUFFLDJDQURaO0FBRUk7QUFDQUUsYUFBVyxFQUFDLHlXQUhoQjtBQUlJRyxLQUFHLEVBQUMsZ0NBSlI7QUFLSUYsT0FBSyxFQUFDLDBCQUxWO0FBTUlHLFFBQU0sRUFBQztBQU5YLENBRHFCLEVBVXJCO0FBQ0lOLFFBQU0sRUFBRSxxQ0FEWjtBQUVJQyxPQUFLLEVBQUMsMENBRlY7QUFHSUMsYUFBVyxFQUFDLCtSQUhoQjtBQUlJRyxLQUFHLEVBQUUsOEJBSlQ7QUFLSUYsT0FBSyxFQUFDLHFCQUxWO0FBTUlHLFFBQU0sRUFBQztBQU5YLENBVnFCLEVBbUJyQjtBQUNJTixRQUFNLEVBQUUscUNBRFo7QUFFSUMsT0FBSyxFQUFDLDJDQUZWO0FBR0lDLGFBQVcsRUFBQyxxU0FIaEI7QUFJSUcsS0FBRyxFQUFDLGtDQUpSO0FBS0lGLE9BQUssRUFBQyxtQkFMVjtBQU1JRyxRQUFNLEVBQUU7QUFOWixDQW5CcUIsQ0FBbEI7QUErQkEsSUFBTUMsS0FBSyxHQUFHLENBQ2pCO0FBQ0lDLE9BQUssRUFBQyxZQURWO0FBRUlDLFNBQU8sRUFBQyxhQUZaO0FBR0lDLFVBQVEsRUFBQyx3SUFIYjtBQUlJQyxNQUFJLEVBQUM7QUFKVCxDQURpQixFQU9qQjtBQUNJSCxPQUFLLEVBQUMsT0FEVjtBQUVJQyxTQUFPLEVBQUMsYUFGWjtBQUdJQyxVQUFRLEVBQUMsaUNBSGI7QUFJSUMsTUFBSSxFQUFDO0FBSlQsQ0FQaUIsRUFhakI7QUFDSUgsT0FBSyxFQUFDLE9BRFY7QUFFSUMsU0FBTyxFQUFDLGFBRlo7QUFHSUMsVUFBUSxFQUFDLGlEQUhiO0FBSUlDLE1BQUksRUFBQztBQUpULENBYmlCLEVBbUJqQjtBQUNJSCxPQUFLLEVBQUMsU0FEVjtBQUVJQyxTQUFPLEVBQUMsYUFGWjtBQUdJQyxVQUFRLEVBQUMsaURBSGI7QUFJSUMsTUFBSSxFQUFDO0FBSlQsQ0FuQmlCLEVBeUJqQjtBQUNJSCxPQUFLLEVBQUMsV0FEVjtBQUVJQyxTQUFPLEVBQUMsYUFGWjtBQUdJQyxVQUFRLEVBQUMsaUVBSGI7QUFJSUMsTUFBSSxFQUFDO0FBSlQsQ0F6QmlCLEVBK0JqQjtBQUNJSCxPQUFLLEVBQUMsWUFEVjtBQUVJQyxTQUFPLEVBQUMsYUFGWjtBQUdJQyxVQUFRLEVBQUMscUhBSGI7QUFJSUMsTUFBSSxFQUFDO0FBSlQsQ0EvQmlCLENBQWQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYmxvZy45OTYxOWQ3NTFhNzgzN2VmMjkwZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGhhYmlsaWRhZGVzID0gW1xyXG4gICAge1xyXG4gICAgICAgIGhhYmlsaWRhZGVzOiAnSmF2YXNjcmlwdCcsXHJcbiAgICAgICAgcGVyY2VudGFnZTogODgsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGhhYmlsaWRhZGVzOiAnUmVhY3QnLFxyXG4gICAgICAgIHBlcmNlbnRhZ2U6IDcwLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBoYWJpbGlkYWRlczogJ1JlZHV4JyxcclxuICAgICAgICBwZXJjZW50YWdlOiA3NixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaGFiaWxpZGFkZXM6ICdFeHByZXNzJyxcclxuICAgICAgICBwZXJjZW50YWdlOiA3MCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaGFiaWxpZGFkZXM6ICdTZXF1ZWxpemUnLFxyXG4gICAgICAgIHBlcmNlbnRhZ2U6IDgwLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBoYWJpbGlkYWRlczogJ1Bvc3RncmVzJyxcclxuICAgICAgICBwZXJjZW50YWdlOiA3NSxcclxuICAgIH0sXHJcblxyXG5dXHJcblxyXG5leHBvcnQgY29uc3QgZXhwZXJpZW5jaWFzID1bXHJcbiAgICBcclxuICAgIHtcclxuICAgICAgICB0aXR1bG86ICdGdWxsIFN0YWNrIFRlYWNoaW5nIEFzc2lzdGFudCcsXHJcbiAgICAgICAgZG9uZGU6J0hlbnJ5IEJvb3RjYW1wLCBCdWVub3MgQWlyZXMsIEFyZ2VudGluYS4nLFxyXG4gICAgICAgIGRlc2NyaXBjaW9uOidDb29yZGluYWNpb24gZGUgdW4gZ3J1cG8gZGUgZXN0dWRpYW50ZXMgcGFyYSBsb2dyYXIgbGEgaW50ZWdyYWNpw7NuIGFsIGVxdWlwbyBkZSBlc3R1ZGlvLCBhc2lzdGlyIGEgbGEgcmVzb2x1Y2nDs24gZGUgZWplcmNpY2lvcyB5IHByb21vdmVyIGxhIGNvbGFib3JhY2lvbiBncnVwYWwgJyxcclxuICAgICAgICBmZWNoYTonTWF5byA3IC0ganVsaW8gNy4nLFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5dXHJcblxyXG5leHBvcnQgY29uc3QgcHJveWVjdG9zID0gW1xyXG4gICAge1xyXG4gICAgICAgIHRpdHVsbzogJ0Z1bGwgU3RhY2sgV2ViIERldmVsb3BlciAtICBBcHAgTcOhcyBTYWx1ZCcsXHJcbiAgICAgICAgLy8gZG9uZGU6ICdIZW5yeSBCb290Y2FtcCwgQnVlbm9zIEFpcmVzLCBBcmdlbnRpbmEnLFxyXG4gICAgICAgIGRlc2NyaXBjaW9uOidBcHAgZGUgU2FsdWQsIGN1eW9zIHVzdWFyaW9zIHNvbiBwYWNpZW50ZXMgeSBtw6lkaWNvcywgbG9zIGN1YWxlcyBwdWVkZW4gZ2VzdGlvbmFyIHR1cm5vcywgYsO6c3F1ZWRhcyBkZSBwcm9mZXNpb25hbGVzIGZpbHRyYWRvcyBwb3IgZXNwZWNpYWxpZGFkIHkgbG9jYWNpw7NuLCBlbnRyZSBzdXMgZnVuY2lvbmFsaWRhZGVzIHNlIGVuY3VlbnRyYW4gbGEgZGUgbG9naW4gY29uIEdvb2dsZSBMb2dpbiwgcmVzcHVlc3RhIGF1dG9tw6F0aWNhIHbDrWEgbWFpbCBjb24gTm9kZW1haWxlciwgdW4gY2FsZW5kYXJpbyBpbXBsZW1lbnRhZG8gY29uIEBtYXRlcmlhbC11aS9waWNrZXJzLCBwYXNhcmVsYSBkZSBwYWdvIHBhcmEgTWVyY2Fkb1BhZ28uJyxcclxuICAgICAgICB1cmw6J2h0dHBzOi8vYXBwLWNsaW5pY2EudmVyY2VsLmFwcCcsXHJcbiAgICAgICAgZmVjaGE6J0Fnb3N0byAxMiAtIFNlcHRpZW1icmUgOCcsXHJcbiAgICAgICAgaW1hZ2VuOlwiYXBwU2FsdWQucG5nXCJcclxuICAgICAgICBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0dWxvOiAnRnVsbCBTdGFjayBXZWIgRGV2ZWxvcGVyIC0gRG9ncyBBcHAnLFxyXG4gICAgICAgIGRvbmRlOidIZW5yeSBCb290Y2FtcCwgQnVlbm9zIEFpcmVzLCBBcmdlbnRpbmEuJyxcclxuICAgICAgICBkZXNjcmlwY2lvbjonRGlzZcOxYXIgeSBkZXNhcnJvbGxhciB1bmEgQXBwIGRlIHBlcnJvcyBxdWUgaW5jbHXDrWE6IGLDunNxdWVkYXMsIGZpbHRyYWRvcywgb3JkZW5hbWllbnRvcyB5IGNyZWFjacOzbi5EZXNhcnJvbGxhciBsYSBhcHAgdXNhbmRvIHBhcmEgZWwgRnJvbnQgUmVhY3QsIFJlZHV4LCBDU1MgcHVybyB5IEJhY2sgZGVzYXJyb2xsYWRvIGVuIE5vZGUuanMgY29uIEV4cHJlc3MuIEJhc2UgZGUgZGF0b3MgZW4gUG9zdGdyZVNRTCB5IFNlcXVlbGl6ZS4gRGVwbG95IHJlYWxpemFkbyBjb24gSGVyb2t1IHkgVmVyY2VsLicsXHJcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9waS1kb2ctbnUudmVyY2VsLmFwcCcsXHJcbiAgICAgICAgZmVjaGE6J0p1bGlvIDE1IC0gQWdvc3RvIDQnLFxyXG4gICAgICAgIGltYWdlbjpcIkNhcHR1cmFEb2cucG5nXCJcclxuICAgICAgICBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0dWxvOiAnRnVsbCBTdGFjayBXZWIgRGV2ZWxvcGVyIC0gRm9vZCBBcHAnLFxyXG4gICAgICAgIGRvbmRlOidIZW5yeSBCb290Y2FtcCwgQnVlbm9zIEFpcmVzLCBBcmdlbnRpbmEuICcsXHJcbiAgICAgICAgZGVzY3JpcGNpb246J0Rpc2XDsWFyIHkgZGVzYXJyb2xsYXIgdW5hIEFwcCBkZSBnYXN0cm9ub23DrWEgcXVlIGluY2x1w61hOiBiw7pzcXVlZGFzLCBmaWx0cmFkb3MsIG9yZGVuYW1pZW50b3MgeSBjcmVhY2nDs24uIERlc2Fycm9sbGFyIGxhIGFwcCB1c2FuZG8gcGFyYSBlbCBGcm9udCBSZWFjdCwgUmVkdXgsIENTUyBwdXJvIHkgQmFjayBkZXNhcnJvbGxhZG8gZW4gTm9kZS5qcyBjb24gRXhwcmVzcy4gQmFzZSBkZSBkYXRvcyBlbiBQb3N0Z3JlU1FMIHkgU2VxdWVsaXplLiBEZXBsb3kgcmVhbGl6YWRvIGNvbiBIZXJva3UgeSBWZXJjZWwuJyxcclxuICAgICAgICB1cmw6J2h0dHBzOi8vcGktZm9vZC10aHJlZS52ZXJjZWwuYXBwJyxcclxuICAgICAgICBmZWNoYTonSnVuaW8gMSAtIEp1bGlvIDcnLFxyXG4gICAgICAgIGltYWdlbjogXCJDYXB0dXJhRm9vZC5wbmdcIlxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuXVxyXG5cclxuZXhwb3J0IGNvbnN0IHBvc3RzID0gW1xyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOlwiSmF2YXNjcmlwdFwiLFxyXG4gICAgICAgIGNvbnRlbnQ6XCJEZXNjcmlwY2lvblwiLFxyXG4gICAgICAgIGltYWdlVVJMOlwiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy90aHVtYi85Lzk5L1Vub2ZmaWNpYWxfSmF2YVNjcmlwdF9sb2dvXzIuc3ZnLzEyMDBweC1Vbm9mZmljaWFsX0phdmFTY3JpcHRfbG9nb18yLnN2Zy5wbmdcIixcclxuICAgICAgICBkb2N1OlwiaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZXMvZG9jcy9XZWIvSmF2YVNjcmlwdFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOlwiUmVhY3RcIixcclxuICAgICAgICBjb250ZW50OlwiRGVzY3JpcGNpb25cIixcclxuICAgICAgICBpbWFnZVVSTDpcImh0dHBzOi8vcmVhY3Rqcy5vcmcvbG9nby1vZy5wbmdcIixcclxuICAgICAgICBkb2N1OlwiaHR0cHM6Ly9lcy5yZWFjdGpzLm9yZy9kb2NzL2dldHRpbmctc3RhcnRlZC5odG1sXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6XCJSZWR1eFwiLFxyXG4gICAgICAgIGNvbnRlbnQ6XCJEZXNjcmlwY2lvblwiLFxyXG4gICAgICAgIGltYWdlVVJMOlwiaHR0cHM6Ly9jZG4ud29ybGR2ZWN0b3Jsb2dvLmNvbS9sb2dvcy9yZWR1eC5zdmdcIixcclxuICAgICAgICBkb2N1OlwiaHR0cHM6Ly9lcy5yZWR1eC5qcy5vcmcvXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6XCJFeHByZXNzXCIsXHJcbiAgICAgICAgY29udGVudDpcIkRlc2NyaXBjaW9uXCIsXHJcbiAgICAgICAgaW1hZ2VVUkw6XCJodHRwczovL2ZkLWRldmVsb3BtZW50LmNvbS9pbWFnZXMvZXhwcmVzc2pzLnBuZ1wiLFxyXG4gICAgICAgIGRvY3U6XCJodHRwczovL2V4cHJlc3Nqcy5jb20vZXMvXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6XCJTZXF1ZWxpemVcIixcclxuICAgICAgICBjb250ZW50OlwiRGVzY3JpcGNpb25cIixcclxuICAgICAgICBpbWFnZVVSTDpcImh0dHBzOi8vZ29vZ2xlLmdpdGh1Yi5pby9zcWxjb21tZW50ZXIvaW1hZ2VzL3NlcXVlbGl6ZS1sb2dvLnBuZ1wiLFxyXG4gICAgICAgIGRvY3U6XCJodHRwczovL3NlcXVlbGl6ZS5vcmcvXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6XCJQb3N0Z3JlU1FMXCIsXHJcbiAgICAgICAgY29udGVudDpcIkRlc2NyaXBjaW9uXCIsXHJcbiAgICAgICAgaW1hZ2VVUkw6XCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iLzIvMjkvUG9zdGdyZXNxbF9lbGVwaGFudC5zdmcvNjQwcHgtUG9zdGdyZXNxbF9lbGVwaGFudC5zdmcucG5nXCIsXHJcbiAgICAgICAgZG9jdTpcImh0dHBzOi8vd3d3LnBvc3RncmVzcWwub3JnL2RvY3MvXCJcclxuICAgIH1cclxuXVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==