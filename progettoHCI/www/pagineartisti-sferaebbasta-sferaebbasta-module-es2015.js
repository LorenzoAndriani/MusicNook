(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pagineartisti-sferaebbasta-sferaebbasta-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pagineartisti/sferaebbasta/sferaebbasta.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pagineartisti/sferaebbasta/sferaebbasta.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-nav>\n\n    </ion-nav>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n\n  <ion-item>\n    <ion-avatar slot=\"start\">\n      <img src=\"../assets/artisti/sfera-ebbasta.jpg\">\n    </ion-avatar>\n    <ion-label>\n      <h1>Sfera Ebbasta</h1>\n    </ion-label>\n  </ion-item>\n  <h1>Storia</h1>\n  <p>Sfera Ebbasta, pseudonimo di Gionata Boschetti (Sesto San Giovanni, 7 dicembre 1992), è un rapper italiano.\n    È salito alla ribalta grazie alla pubblicazione dell'album XDVR, inciso con la collaborazione del produttore discografico Charlie Charles, ottenendo un buon successo in Italia. Tale successo si è replicato con le uscite di Sfera Ebbasta (2016) e Rockstar (2018), il secondo dei quali ha permesso all'artista di divenire il primo italiano ad entrare nella top 100 mondiale della piattaforma di streaming Spotify.</p>\n    \n   <h5><i>fonte: Wikipedia</i></h5>\n\n   <h1>Album</h1>\n\n   <ion-item>\n    <ion-thumbnail slot=\"start\">\n      <img src=\"../assets/album/rockstar.jpg\">\n    </ion-thumbnail>\n    <ion-label>Rockstar</ion-label>\n  </ion-item>\n\n  <ion-item>\n    <ion-thumbnail slot=\"start\">\n      <img src=\"../assets/album/sfera-ebbasta.png\">\n    </ion-thumbnail>\n    <ion-label>Sfera Ebbasta</ion-label>\n  </ion-item>\n\n   <ion-item>\n    <ion-thumbnail slot=\"start\">\n      <img src=\"../assets/album/XDVR.jpg\">\n    </ion-thumbnail>\n    <ion-label>XDVR</ion-label>\n  </ion-item>\n\n   <ion-button size=\"small\" color=\"danger\" href=\"https://www.youtube.com/user/Billionheadz\">YouTube</ion-button>\n   <ion-button size=\"small\" href=\"https://www.facebook.com/sferaebbastaofficial/\">Facebook</ion-button>\n   <ion-button size=\"small\" color=\"tertiary\" href=\"https://www.instagram.com/sferaebbasta/\">Instagram</ion-button>\n\n  </ion-content>\n");

/***/ }),

/***/ "./src/app/pagineartisti/sferaebbasta/sferaebbasta-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pagineartisti/sferaebbasta/sferaebbasta-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: SferaebbastaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SferaebbastaPageRoutingModule", function() { return SferaebbastaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _sferaebbasta_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sferaebbasta.page */ "./src/app/pagineartisti/sferaebbasta/sferaebbasta.page.ts");




const routes = [
    {
        path: '',
        component: _sferaebbasta_page__WEBPACK_IMPORTED_MODULE_3__["SferaebbastaPage"]
    }
];
let SferaebbastaPageRoutingModule = class SferaebbastaPageRoutingModule {
};
SferaebbastaPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SferaebbastaPageRoutingModule);



/***/ }),

/***/ "./src/app/pagineartisti/sferaebbasta/sferaebbasta.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pagineartisti/sferaebbasta/sferaebbasta.module.ts ***!
  \*******************************************************************/
/*! exports provided: SferaebbastaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SferaebbastaPageModule", function() { return SferaebbastaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _sferaebbasta_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sferaebbasta-routing.module */ "./src/app/pagineartisti/sferaebbasta/sferaebbasta-routing.module.ts");
/* harmony import */ var _sferaebbasta_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sferaebbasta.page */ "./src/app/pagineartisti/sferaebbasta/sferaebbasta.page.ts");







let SferaebbastaPageModule = class SferaebbastaPageModule {
};
SferaebbastaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _sferaebbasta_routing_module__WEBPACK_IMPORTED_MODULE_5__["SferaebbastaPageRoutingModule"]
        ],
        declarations: [_sferaebbasta_page__WEBPACK_IMPORTED_MODULE_6__["SferaebbastaPage"]]
    })
], SferaebbastaPageModule);



/***/ }),

/***/ "./src/app/pagineartisti/sferaebbasta/sferaebbasta.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pagineartisti/sferaebbasta/sferaebbasta.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luZWFydGlzdGkvc2ZlcmFlYmJhc3RhL3NmZXJhZWJiYXN0YS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pagineartisti/sferaebbasta/sferaebbasta.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pagineartisti/sferaebbasta/sferaebbasta.page.ts ***!
  \*****************************************************************/
/*! exports provided: SferaebbastaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SferaebbastaPage", function() { return SferaebbastaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SferaebbastaPage = class SferaebbastaPage {
    constructor() { }
    ngOnInit() {
    }
};
SferaebbastaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sferaebbasta',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sferaebbasta.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pagineartisti/sferaebbasta/sferaebbasta.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sferaebbasta.page.scss */ "./src/app/pagineartisti/sferaebbasta/sferaebbasta.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SferaebbastaPage);



/***/ })

}]);
//# sourceMappingURL=pagineartisti-sferaebbasta-sferaebbasta-module-es2015.js.map