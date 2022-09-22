self["webpackHotUpdate_N_E"]("pages/404",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJoYWJpbGlkYWRlcyIsInBlcmNlbnRhZ2UiLCJleHBlcmllbmNpYXMiLCJ0aXR1bG8iLCJkb25kZSIsImRlc2NyaXBjaW9uIiwiZmVjaGEiLCJwcm95ZWN0b3MiLCJ1cmwiLCJpbWFnZW4iLCJwb3N0cyIsInRpdGxlIiwiY29udGVudCIsImltYWdlVVJMIiwiZG9jdSIsImNvbnRhY3RvcyIsIkxpbmtlZEluVVJMIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxXQUFXLEdBQUcsQ0FDdkI7QUFDSUEsYUFBVyxFQUFFLFlBRGpCO0FBRUlDLFlBQVUsRUFBRTtBQUZoQixDQUR1QixFQUt2QjtBQUNJRCxhQUFXLEVBQUUsT0FEakI7QUFFSUMsWUFBVSxFQUFFO0FBRmhCLENBTHVCLEVBU3ZCO0FBQ0lELGFBQVcsRUFBRSxPQURqQjtBQUVJQyxZQUFVLEVBQUU7QUFGaEIsQ0FUdUIsRUFhdkI7QUFDSUQsYUFBVyxFQUFFLFNBRGpCO0FBRUlDLFlBQVUsRUFBRTtBQUZoQixDQWJ1QixFQWlCdkI7QUFDSUQsYUFBVyxFQUFFLFdBRGpCO0FBRUlDLFlBQVUsRUFBRTtBQUZoQixDQWpCdUIsRUFxQnZCO0FBQ0lELGFBQVcsRUFBRSxVQURqQjtBQUVJQyxZQUFVLEVBQUU7QUFGaEIsQ0FyQnVCLENBQXBCO0FBNEJBLElBQU1DLFlBQVksR0FBRSxDQUV2QjtBQUNJQyxRQUFNLEVBQUUsK0JBRFo7QUFFSUMsT0FBSyxFQUFDLDBDQUZWO0FBR0lDLGFBQVcsRUFBQyxtS0FIaEI7QUFJSUMsT0FBSyxFQUFDO0FBSlYsQ0FGdUIsQ0FBcEI7QUFXQSxJQUFNQyxTQUFTLEdBQUcsQ0FDckI7QUFDSUosUUFBTSxFQUFFLDJDQURaO0FBRUk7QUFDQUUsYUFBVyxFQUFDLHlXQUhoQjtBQUlJRyxLQUFHLEVBQUMsZ0NBSlI7QUFLSUYsT0FBSyxFQUFDLDBCQUxWO0FBTUlHLFFBQU0sRUFBQztBQU5YLENBRHFCLEVBVXJCO0FBQ0lOLFFBQU0sRUFBRSxxQ0FEWjtBQUVJQyxPQUFLLEVBQUMsMENBRlY7QUFHSUMsYUFBVyxFQUFDLCtSQUhoQjtBQUlJRyxLQUFHLEVBQUUsOEJBSlQ7QUFLSUYsT0FBSyxFQUFDLHFCQUxWO0FBTUlHLFFBQU0sRUFBQztBQU5YLENBVnFCLEVBbUJyQjtBQUNJTixRQUFNLEVBQUUscUNBRFo7QUFFSUMsT0FBSyxFQUFDLDJDQUZWO0FBR0lDLGFBQVcsRUFBQyxxU0FIaEI7QUFJSUcsS0FBRyxFQUFDLGtDQUpSO0FBS0lGLE9BQUssRUFBQyxtQkFMVjtBQU1JRyxRQUFNLEVBQUU7QUFOWixDQW5CcUIsQ0FBbEI7QUErQkEsSUFBTUMsS0FBSyxHQUFHLENBQ2pCO0FBQ0lDLE9BQUssRUFBQyxZQURWO0FBRUlDLFNBQU8sRUFBQyxhQUZaO0FBR0lDLFVBQVEsRUFBQyx3SUFIYjtBQUlJQyxNQUFJLEVBQUM7QUFKVCxDQURpQixFQU9qQjtBQUNJSCxPQUFLLEVBQUMsT0FEVjtBQUVJQyxTQUFPLEVBQUMsYUFGWjtBQUdJQyxVQUFRLEVBQUMsaUNBSGI7QUFJSUMsTUFBSSxFQUFDO0FBSlQsQ0FQaUIsRUFhakI7QUFDSUgsT0FBSyxFQUFDLE9BRFY7QUFFSUMsU0FBTyxFQUFDLGFBRlo7QUFHSUMsVUFBUSxFQUFDLGlEQUhiO0FBSUlDLE1BQUksRUFBQztBQUpULENBYmlCLEVBbUJqQjtBQUNJSCxPQUFLLEVBQUMsU0FEVjtBQUVJQyxTQUFPLEVBQUMsYUFGWjtBQUdJQyxVQUFRLEVBQUMsaURBSGI7QUFJSUMsTUFBSSxFQUFDO0FBSlQsQ0FuQmlCLEVBeUJqQjtBQUNJSCxPQUFLLEVBQUMsV0FEVjtBQUVJQyxTQUFPLEVBQUMsYUFGWjtBQUdJQyxVQUFRLEVBQUMsaUVBSGI7QUFJSUMsTUFBSSxFQUFDO0FBSlQsQ0F6QmlCLEVBK0JqQjtBQUNJSCxPQUFLLEVBQUMsWUFEVjtBQUVJQyxTQUFPLEVBQUMsYUFGWjtBQUdJQyxVQUFRLEVBQUMscUhBSGI7QUFJSUMsTUFBSSxFQUFDO0FBSlQsQ0EvQmlCLENBQWQ7QUF1Q0EsSUFBTUMsU0FBUyxHQUFHLENBQ3JCO0FBQ0lDLGFBQVcsRUFBQztBQURoQixDQURxQixDQUFsQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy80MDQuMWFlM2VjZDZmMGI1ODg4OTM2MDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBoYWJpbGlkYWRlcyA9IFtcclxuICAgIHtcclxuICAgICAgICBoYWJpbGlkYWRlczogJ0phdmFzY3JpcHQnLFxyXG4gICAgICAgIHBlcmNlbnRhZ2U6IDg4LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBoYWJpbGlkYWRlczogJ1JlYWN0JyxcclxuICAgICAgICBwZXJjZW50YWdlOiA3MCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaGFiaWxpZGFkZXM6ICdSZWR1eCcsXHJcbiAgICAgICAgcGVyY2VudGFnZTogNzYsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGhhYmlsaWRhZGVzOiAnRXhwcmVzcycsXHJcbiAgICAgICAgcGVyY2VudGFnZTogNzAsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGhhYmlsaWRhZGVzOiAnU2VxdWVsaXplJyxcclxuICAgICAgICBwZXJjZW50YWdlOiA4MCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaGFiaWxpZGFkZXM6ICdQb3N0Z3JlcycsXHJcbiAgICAgICAgcGVyY2VudGFnZTogNzUsXHJcbiAgICB9LFxyXG5cclxuXVxyXG5cclxuZXhwb3J0IGNvbnN0IGV4cGVyaWVuY2lhcyA9W1xyXG4gICAgXHJcbiAgICB7XHJcbiAgICAgICAgdGl0dWxvOiAnRnVsbCBTdGFjayBUZWFjaGluZyBBc3Npc3RhbnQnLFxyXG4gICAgICAgIGRvbmRlOidIZW5yeSBCb290Y2FtcCwgQnVlbm9zIEFpcmVzLCBBcmdlbnRpbmEuJyxcclxuICAgICAgICBkZXNjcmlwY2lvbjonQ29vcmRpbmFjaW9uIGRlIHVuIGdydXBvIGRlIGVzdHVkaWFudGVzIHBhcmEgbG9ncmFyIGxhIGludGVncmFjacOzbiBhbCBlcXVpcG8gZGUgZXN0dWRpbywgYXNpc3RpciBhIGxhIHJlc29sdWNpw7NuIGRlIGVqZXJjaWNpb3MgeSBwcm9tb3ZlciBsYSBjb2xhYm9yYWNpb24gZ3J1cGFsICcsXHJcbiAgICAgICAgZmVjaGE6J01heW8gNyAtIGp1bGlvIDcuJyxcclxuICAgICAgICBcclxuICAgIH1cclxuXVxyXG5cclxuZXhwb3J0IGNvbnN0IHByb3llY3RvcyA9IFtcclxuICAgIHtcclxuICAgICAgICB0aXR1bG86ICdGdWxsIFN0YWNrIFdlYiBEZXZlbG9wZXIgLSAgQXBwIE3DoXMgU2FsdWQnLFxyXG4gICAgICAgIC8vIGRvbmRlOiAnSGVucnkgQm9vdGNhbXAsIEJ1ZW5vcyBBaXJlcywgQXJnZW50aW5hJyxcclxuICAgICAgICBkZXNjcmlwY2lvbjonQXBwIGRlIFNhbHVkLCBjdXlvcyB1c3VhcmlvcyBzb24gcGFjaWVudGVzIHkgbcOpZGljb3MsIGxvcyBjdWFsZXMgcHVlZGVuIGdlc3Rpb25hciB0dXJub3MsIGLDunNxdWVkYXMgZGUgcHJvZmVzaW9uYWxlcyBmaWx0cmFkb3MgcG9yIGVzcGVjaWFsaWRhZCB5IGxvY2FjacOzbiwgZW50cmUgc3VzIGZ1bmNpb25hbGlkYWRlcyBzZSBlbmN1ZW50cmFuIGxhIGRlIGxvZ2luIGNvbiBHb29nbGUgTG9naW4sIHJlc3B1ZXN0YSBhdXRvbcOhdGljYSB2w61hIG1haWwgY29uIE5vZGVtYWlsZXIsIHVuIGNhbGVuZGFyaW8gaW1wbGVtZW50YWRvIGNvbiBAbWF0ZXJpYWwtdWkvcGlja2VycywgcGFzYXJlbGEgZGUgcGFnbyBwYXJhIE1lcmNhZG9QYWdvLicsXHJcbiAgICAgICAgdXJsOidodHRwczovL2FwcC1jbGluaWNhLnZlcmNlbC5hcHAnLFxyXG4gICAgICAgIGZlY2hhOidBZ29zdG8gMTIgLSBTZXB0aWVtYnJlIDgnLFxyXG4gICAgICAgIGltYWdlbjpcImFwcFNhbHVkLnBuZ1wiXHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdHVsbzogJ0Z1bGwgU3RhY2sgV2ViIERldmVsb3BlciAtIERvZ3MgQXBwJyxcclxuICAgICAgICBkb25kZTonSGVucnkgQm9vdGNhbXAsIEJ1ZW5vcyBBaXJlcywgQXJnZW50aW5hLicsXHJcbiAgICAgICAgZGVzY3JpcGNpb246J0Rpc2XDsWFyIHkgZGVzYXJyb2xsYXIgdW5hIEFwcCBkZSBwZXJyb3MgcXVlIGluY2x1w61hOiBiw7pzcXVlZGFzLCBmaWx0cmFkb3MsIG9yZGVuYW1pZW50b3MgeSBjcmVhY2nDs24uRGVzYXJyb2xsYXIgbGEgYXBwIHVzYW5kbyBwYXJhIGVsIEZyb250IFJlYWN0LCBSZWR1eCwgQ1NTIHB1cm8geSBCYWNrIGRlc2Fycm9sbGFkbyBlbiBOb2RlLmpzIGNvbiBFeHByZXNzLiBCYXNlIGRlIGRhdG9zIGVuIFBvc3RncmVTUUwgeSBTZXF1ZWxpemUuIERlcGxveSByZWFsaXphZG8gY29uIEhlcm9rdSB5IFZlcmNlbC4nLFxyXG4gICAgICAgIHVybDogJ2h0dHBzOi8vcGktZG9nLW51LnZlcmNlbC5hcHAnLFxyXG4gICAgICAgIGZlY2hhOidKdWxpbyAxNSAtIEFnb3N0byA0JyxcclxuICAgICAgICBpbWFnZW46XCJDYXB0dXJhRG9nLnBuZ1wiXHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdHVsbzogJ0Z1bGwgU3RhY2sgV2ViIERldmVsb3BlciAtIEZvb2QgQXBwJyxcclxuICAgICAgICBkb25kZTonSGVucnkgQm9vdGNhbXAsIEJ1ZW5vcyBBaXJlcywgQXJnZW50aW5hLiAnLFxyXG4gICAgICAgIGRlc2NyaXBjaW9uOidEaXNlw7FhciB5IGRlc2Fycm9sbGFyIHVuYSBBcHAgZGUgZ2FzdHJvbm9tw61hIHF1ZSBpbmNsdcOtYTogYsO6c3F1ZWRhcywgZmlsdHJhZG9zLCBvcmRlbmFtaWVudG9zIHkgY3JlYWNpw7NuLiBEZXNhcnJvbGxhciBsYSBhcHAgdXNhbmRvIHBhcmEgZWwgRnJvbnQgUmVhY3QsIFJlZHV4LCBDU1MgcHVybyB5IEJhY2sgZGVzYXJyb2xsYWRvIGVuIE5vZGUuanMgY29uIEV4cHJlc3MuIEJhc2UgZGUgZGF0b3MgZW4gUG9zdGdyZVNRTCB5IFNlcXVlbGl6ZS4gRGVwbG95IHJlYWxpemFkbyBjb24gSGVyb2t1IHkgVmVyY2VsLicsXHJcbiAgICAgICAgdXJsOidodHRwczovL3BpLWZvb2QtdGhyZWUudmVyY2VsLmFwcCcsXHJcbiAgICAgICAgZmVjaGE6J0p1bmlvIDEgLSBKdWxpbyA3JyxcclxuICAgICAgICBpbWFnZW46IFwiQ2FwdHVyYUZvb2QucG5nXCJcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbl1cclxuXHJcbmV4cG9ydCBjb25zdCBwb3N0cyA9IFtcclxuICAgIHtcclxuICAgICAgICB0aXRsZTpcIkphdmFzY3JpcHRcIixcclxuICAgICAgICBjb250ZW50OlwiRGVzY3JpcGNpb25cIixcclxuICAgICAgICBpbWFnZVVSTDpcImh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvdGh1bWIvOS85OS9Vbm9mZmljaWFsX0phdmFTY3JpcHRfbG9nb18yLnN2Zy8xMjAwcHgtVW5vZmZpY2lhbF9KYXZhU2NyaXB0X2xvZ29fMi5zdmcucG5nXCIsXHJcbiAgICAgICAgZG9jdTpcImh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VzL2RvY3MvV2ViL0phdmFTY3JpcHRcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTpcIlJlYWN0XCIsXHJcbiAgICAgICAgY29udGVudDpcIkRlc2NyaXBjaW9uXCIsXHJcbiAgICAgICAgaW1hZ2VVUkw6XCJodHRwczovL3JlYWN0anMub3JnL2xvZ28tb2cucG5nXCIsXHJcbiAgICAgICAgZG9jdTpcImh0dHBzOi8vZXMucmVhY3Rqcy5vcmcvZG9jcy9nZXR0aW5nLXN0YXJ0ZWQuaHRtbFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOlwiUmVkdXhcIixcclxuICAgICAgICBjb250ZW50OlwiRGVzY3JpcGNpb25cIixcclxuICAgICAgICBpbWFnZVVSTDpcImh0dHBzOi8vY2RuLndvcmxkdmVjdG9ybG9nby5jb20vbG9nb3MvcmVkdXguc3ZnXCIsXHJcbiAgICAgICAgZG9jdTpcImh0dHBzOi8vZXMucmVkdXguanMub3JnL1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOlwiRXhwcmVzc1wiLFxyXG4gICAgICAgIGNvbnRlbnQ6XCJEZXNjcmlwY2lvblwiLFxyXG4gICAgICAgIGltYWdlVVJMOlwiaHR0cHM6Ly9mZC1kZXZlbG9wbWVudC5jb20vaW1hZ2VzL2V4cHJlc3Nqcy5wbmdcIixcclxuICAgICAgICBkb2N1OlwiaHR0cHM6Ly9leHByZXNzanMuY29tL2VzL1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOlwiU2VxdWVsaXplXCIsXHJcbiAgICAgICAgY29udGVudDpcIkRlc2NyaXBjaW9uXCIsXHJcbiAgICAgICAgaW1hZ2VVUkw6XCJodHRwczovL2dvb2dsZS5naXRodWIuaW8vc3FsY29tbWVudGVyL2ltYWdlcy9zZXF1ZWxpemUtbG9nby5wbmdcIixcclxuICAgICAgICBkb2N1OlwiaHR0cHM6Ly9zZXF1ZWxpemUub3JnL1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOlwiUG9zdGdyZVNRTFwiLFxyXG4gICAgICAgIGNvbnRlbnQ6XCJEZXNjcmlwY2lvblwiLFxyXG4gICAgICAgIGltYWdlVVJMOlwiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy90aHVtYi8yLzI5L1Bvc3RncmVzcWxfZWxlcGhhbnQuc3ZnLzY0MHB4LVBvc3RncmVzcWxfZWxlcGhhbnQuc3ZnLnBuZ1wiLFxyXG4gICAgICAgIGRvY3U6XCJodHRwczovL3d3dy5wb3N0Z3Jlc3FsLm9yZy9kb2NzL1wiXHJcbiAgICB9XHJcbl1cclxuXHJcbmV4cG9ydCBjb25zdCBjb250YWN0b3MgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgTGlua2VkSW5VUkw6XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vbWFydGluLS1maWd1ZXJvYS8gXCJcclxuICAgIH1cclxuXSJdLCJzb3VyY2VSb290IjoiIn0=