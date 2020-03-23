(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pagineartisti-tizianoferro-tizianoferro-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pagineartisti/tizianoferro/tizianoferro.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pagineartisti/tizianoferro/tizianoferro.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"Indietro\" defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-nav>\n\n    </ion-nav>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n\n  <ion-item>\n    <ion-avatar slot=\"start\">\n      <img src=\"../assets/artisti/tiziano-ferro.jpeg\">\n    </ion-avatar>\n    <ion-label>\n      <h1>Tiziano Ferro</h1>\n    </ion-label>\n  </ion-item>\n  <h1>Storia</h1>\n  <p>Tiziano Ferro (Latina, 21 febbraio 1980) è un cantautore e produttore discografico italiano.\n    Nel corso della sua carriera ha cantato anche in spagnolo, inglese, francese e portoghese. Ha venduto oltre 15 milioni di copie nel mondo, prevalentemente in Europa e in America Latina, e nella sua carriera ventennale ha ottenuto numerosi premi, candidature e riconoscimenti tra i più importanti a livello nazionale e internazionale.</p>\n   <h5><i>fonte: Wikipedia</i></h5>\n\n  <h1>Live</h1>\n<ion-list>\n\n  <ion-item href=\"https://www.ticketone.it/tiziano-ferro-milano-biglietti.html?affiliate=ITT&doc=artistPages%2Ftickets&fun=artist&action=tickets&key=1918864%2412159769&jumpIn=yTix&kuid=463860&from=erdetaila\">\n    <ion-label><h1><b>San Siro (Milano)</b></h1>\n      <h3><b>Data:</b> sab, 06/06/20, 20.45</h3>\n    <h4><b>Prezzo medio:</b> €40-€80</h4></ion-label>\n  </ion-item> \n\n</ion-list>\n   <h1>Album</h1>\n\n   <ion-item>\n    <ion-thumbnail slot=\"start\">\n      <img src=\"../assets/album/miracoli.jpg\">\n    </ion-thumbnail>\n    <ion-label>Accetto Miracoli</ion-label>\n  </ion-item>\n\n   <ion-item>\n    <ion-thumbnail slot=\"start\">\n      <img src=\"../assets/album/vita.jpg\">\n    </ion-thumbnail>\n    <ion-label>Il mestiere della vita</ion-label>\n  </ion-item>\n\n   <ion-item>\n    <ion-thumbnail slot=\"start\">\n      <img src=\"../assets/album/eta.jpg\">\n    </ion-thumbnail>\n    <ion-label>Alla mia età</ion-label>\n  </ion-item>\n\n   <ion-button size=\"small\" color=\"danger\" href=\"https://www.youtube.com/channel/UCKyMo95rgpADh-NTaUr5dQw\">YouTube</ion-button>\n   <ion-button size=\"small\" href=\"https://www.facebook.com/tizianoferro/\">Facebook</ion-button>\n   <ion-button size=\"small\" color=\"tertiary\" href=\"https://www.instagram.com/tizianoferro/\">Instagram</ion-button>\n\n  </ion-content>\n");

/***/ }),

/***/ "./src/app/pagineartisti/tizianoferro/tizianoferro-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pagineartisti/tizianoferro/tizianoferro-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: TizianoferroPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TizianoferroPageRoutingModule", function() { return TizianoferroPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tizianoferro_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tizianoferro.page */ "./src/app/pagineartisti/tizianoferro/tizianoferro.page.ts");




const routes = [
    {
        path: '',
        component: _tizianoferro_page__WEBPACK_IMPORTED_MODULE_3__["TizianoferroPage"]
    }
];
let TizianoferroPageRoutingModule = class TizianoferroPageRoutingModule {
};
TizianoferroPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TizianoferroPageRoutingModule);



/***/ }),

/***/ "./src/app/pagineartisti/tizianoferro/tizianoferro.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pagineartisti/tizianoferro/tizianoferro.module.ts ***!
  \*******************************************************************/
/*! exports provided: TizianoferroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TizianoferroPageModule", function() { return TizianoferroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _tizianoferro_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tizianoferro-routing.module */ "./src/app/pagineartisti/tizianoferro/tizianoferro-routing.module.ts");
/* harmony import */ var _tizianoferro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tizianoferro.page */ "./src/app/pagineartisti/tizianoferro/tizianoferro.page.ts");







let TizianoferroPageModule = class TizianoferroPageModule {
};
TizianoferroPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _tizianoferro_routing_module__WEBPACK_IMPORTED_MODULE_5__["TizianoferroPageRoutingModule"]
        ],
        declarations: [_tizianoferro_page__WEBPACK_IMPORTED_MODULE_6__["TizianoferroPage"]]
    })
], TizianoferroPageModule);



/***/ }),

/***/ "./src/app/pagineartisti/tizianoferro/tizianoferro.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pagineartisti/tizianoferro/tizianoferro.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luZWFydGlzdGkvdGl6aWFub2ZlcnJvL3Rpemlhbm9mZXJyby5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pagineartisti/tizianoferro/tizianoferro.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pagineartisti/tizianoferro/tizianoferro.page.ts ***!
  \*****************************************************************/
/*! exports provided: TizianoferroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TizianoferroPage", function() { return TizianoferroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TizianoferroPage = class TizianoferroPage {
    constructor() { }
    ngOnInit() {
    }
};
TizianoferroPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tizianoferro',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tizianoferro.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pagineartisti/tizianoferro/tizianoferro.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tizianoferro.page.scss */ "./src/app/pagineartisti/tizianoferro/tizianoferro.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TizianoferroPage);



/***/ })

}]);
//# sourceMappingURL=pagineartisti-tizianoferro-tizianoferro-module-es2015.js.map