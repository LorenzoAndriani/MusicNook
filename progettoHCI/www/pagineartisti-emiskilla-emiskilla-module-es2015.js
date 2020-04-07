(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pagineartisti-emiskilla-emiskilla-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pagineartisti/emiskilla/emiskilla.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pagineartisti/emiskilla/emiskilla.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"Indietro\" defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-nav>\n\n    </ion-nav>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n\n  <ion-item>\n    <ion-avatar slot=\"start\">\n      <img src=\"../assets/artisti/emis-killa.jpg\">\n    </ion-avatar>\n    <ion-label>\n      <h1>Emis Killa</h1>\n    </ion-label>\n  </ion-item>\n  <h1>Storia</h1>\n  <p>Emis Killa, pseudonimo di Emiliano Rudolf Giambelli (Vimercate, 14 novembre 1989), è un rapper italiano.\n    Nel 2007 Emis Killa si iscrive al concorso di freestyle Tecniche Perfette dove risulta vincitore. Successivamente ha firmato un contratto con l'etichetta discografica indipendente Blocco Recordz, con la quale ha pubblicato gli album Keta Music (2009), Champagne e spine (2010) e The Flow Clocker Vol. 1 (2011).\n    Nel 2011 firma un contratto con la Carosello e il 19 dicembre dello stesso anno pubblica per il download digitale l'EP Il peggiore, la cui produzione artistica è curata da Big Fish. Nello stesso periodo Emis Killa cura un remix ufficiale di I Need a Dollar di Aloe Blacc, diffuso dalle stazioni radiofoniche italiane.</p>\n   <h5><i>fonte: Wikipedia</i></h5>\n\n   <h1>Album</h1>\n\n   <ion-item>\n    <ion-thumbnail slot=\"start\">\n      <img src=\"../assets/album/supereroe.jpg\">\n    </ion-thumbnail>\n    <ion-label>Supereroe</ion-label>\n  </ion-item>\n\n   <ion-item>\n    <ion-thumbnail slot=\"start\">\n      <img src=\"../assets/album/terza-stagione.jpg\">\n    </ion-thumbnail>\n    <ion-label>Terza Stagione</ion-label>\n  </ion-item>\n\n   <ion-item>\n    <ion-thumbnail slot=\"start\">\n      <img src=\"../assets/album/mercurio.jpg\">\n    </ion-thumbnail>\n    <ion-label>Mercurio</ion-label>\n  </ion-item>\n\n  <ion-item>\n    <ion-thumbnail slot=\"start\">\n      <img src=\"../assets/album/erba-cattiva.jpg\">\n    </ion-thumbnail>\n    <ion-label>L'erba cattiva</ion-label>\n  </ion-item>\n\n   <ion-button size=\"small\" color=\"danger\" href=\"https://www.youtube.com/user/EmisKillaOfficial\">YouTube</ion-button>\n   <ion-button size=\"small\" href=\"https://www.facebook.com/emiskillaofficialpage\">Facebook</ion-button>\n   <ion-button size=\"small\" color=\"tertiary\" href=\"https://www.instagram.com/emis_killa/\">Instagram</ion-button>\n\n  </ion-content>\n");

/***/ }),

/***/ "./src/app/pagineartisti/emiskilla/emiskilla-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pagineartisti/emiskilla/emiskilla-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: EmiskillaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmiskillaPageRoutingModule", function() { return EmiskillaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _emiskilla_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./emiskilla.page */ "./src/app/pagineartisti/emiskilla/emiskilla.page.ts");




const routes = [
    {
        path: '',
        component: _emiskilla_page__WEBPACK_IMPORTED_MODULE_3__["EmiskillaPage"]
    }
];
let EmiskillaPageRoutingModule = class EmiskillaPageRoutingModule {
};
EmiskillaPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EmiskillaPageRoutingModule);



/***/ }),

/***/ "./src/app/pagineartisti/emiskilla/emiskilla.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pagineartisti/emiskilla/emiskilla.module.ts ***!
  \*************************************************************/
/*! exports provided: EmiskillaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmiskillaPageModule", function() { return EmiskillaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _emiskilla_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./emiskilla-routing.module */ "./src/app/pagineartisti/emiskilla/emiskilla-routing.module.ts");
/* harmony import */ var _emiskilla_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./emiskilla.page */ "./src/app/pagineartisti/emiskilla/emiskilla.page.ts");







let EmiskillaPageModule = class EmiskillaPageModule {
};
EmiskillaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _emiskilla_routing_module__WEBPACK_IMPORTED_MODULE_5__["EmiskillaPageRoutingModule"]
        ],
        declarations: [_emiskilla_page__WEBPACK_IMPORTED_MODULE_6__["EmiskillaPage"]]
    })
], EmiskillaPageModule);



/***/ }),

/***/ "./src/app/pagineartisti/emiskilla/emiskilla.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pagineartisti/emiskilla/emiskilla.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luZWFydGlzdGkvZW1pc2tpbGxhL2VtaXNraWxsYS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pagineartisti/emiskilla/emiskilla.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pagineartisti/emiskilla/emiskilla.page.ts ***!
  \***********************************************************/
/*! exports provided: EmiskillaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmiskillaPage", function() { return EmiskillaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EmiskillaPage = class EmiskillaPage {
    constructor() { }
    ngOnInit() {
    }
};
EmiskillaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-emiskilla',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./emiskilla.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pagineartisti/emiskilla/emiskilla.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./emiskilla.page.scss */ "./src/app/pagineartisti/emiskilla/emiskilla.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], EmiskillaPage);



/***/ })

}]);
//# sourceMappingURL=pagineartisti-emiskilla-emiskilla-module-es2015.js.map