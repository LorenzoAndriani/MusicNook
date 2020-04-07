(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pagineartisti-francescamichelin-francescamichelin-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pagineartisti/francescamichelin/francescamichelin.page.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pagineartisti/francescamichelin/francescamichelin.page.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"Indietro\" defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-nav>\n\n    </ion-nav>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n\n  <ion-item>\n    <ion-avatar slot=\"start\">\n      <img src=\"../assets/artisti/francesca-michelin.jpg\">\n    </ion-avatar>\n    <ion-label>\n      <h1>Francesca Michelin</h1>\n    </ion-label>\n  </ion-item>\n  <h1>Storia</h1>\n  <p>Francesca Michielin (Bassano del Grappa, 25 febbraio 1995) è una cantautrice e polistrumentista italiana.\n\n    Ha raggiunto la notorietà nel 2011 in seguito alla vittoria della quinta edizione del talent show X Factor.\n    \n    Durante la sua carriera la cantante ha vinto un Premio Videoclip Italiano, tre Wind Music Awards e un Premio Lunezia, oltre ad essersi classificata seconda al Festival di Sanremo 2016 ed aver rappresentato l'Italia all'Eurovision Song Contest 2016.</p>\n   <h5><i>fonte: Wikipedia</i></h5>\n\n   <h1>Album</h1>\n\n   <ion-item>\n    <ion-thumbnail slot=\"start\">\n      <img src=\"../assets/album/stato-di-natura.png\">\n    </ion-thumbnail>\n    <ion-label>Feat (stato di natura)</ion-label>\n  </ion-item>\n\n   <ion-item>\n    <ion-thumbnail slot=\"start\">\n      <img src=\"../assets/album/2640.jpg\">\n    </ion-thumbnail>\n    <ion-label>2640</ion-label>\n  </ion-item>\n\n   <ion-item>\n    <ion-thumbnail slot=\"start\">\n      <img src=\"../assets/album/di20.jpeg\">\n    </ion-thumbnail>\n    <ion-label>di20</ion-label>\n  </ion-item>\n\n  <ion-item>\n    <ion-thumbnail slot=\"start\">\n      <img src=\"../assets/album/riflessi-di-me.jpg\">\n    </ion-thumbnail>\n    <ion-label>Riflessi di me</ion-label>\n  </ion-item>\n\n   <ion-button size=\"small\" color=\"danger\" href=\"https://www.youtube.com/channel/UCQr3H3P-nkrlijh7wVMHVJQ\">YouTube</ion-button>\n   <ion-button size=\"small\" href=\"https://it-it.facebook.com/francescacheeks/\">Facebook</ion-button>\n   <ion-button size=\"small\" color=\"tertiary\" href=\"https://www.instagram.com/francesca_michielin/\">Instagram</ion-button>\n\n  </ion-content>\n");

/***/ }),

/***/ "./src/app/pagineartisti/francescamichelin/francescamichelin-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pagineartisti/francescamichelin/francescamichelin-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: FrancescamichelinPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrancescamichelinPageRoutingModule", function() { return FrancescamichelinPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _francescamichelin_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./francescamichelin.page */ "./src/app/pagineartisti/francescamichelin/francescamichelin.page.ts");




const routes = [
    {
        path: '',
        component: _francescamichelin_page__WEBPACK_IMPORTED_MODULE_3__["FrancescamichelinPage"]
    }
];
let FrancescamichelinPageRoutingModule = class FrancescamichelinPageRoutingModule {
};
FrancescamichelinPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FrancescamichelinPageRoutingModule);



/***/ }),

/***/ "./src/app/pagineartisti/francescamichelin/francescamichelin.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pagineartisti/francescamichelin/francescamichelin.module.ts ***!
  \*****************************************************************************/
/*! exports provided: FrancescamichelinPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrancescamichelinPageModule", function() { return FrancescamichelinPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _francescamichelin_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./francescamichelin-routing.module */ "./src/app/pagineartisti/francescamichelin/francescamichelin-routing.module.ts");
/* harmony import */ var _francescamichelin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./francescamichelin.page */ "./src/app/pagineartisti/francescamichelin/francescamichelin.page.ts");







let FrancescamichelinPageModule = class FrancescamichelinPageModule {
};
FrancescamichelinPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _francescamichelin_routing_module__WEBPACK_IMPORTED_MODULE_5__["FrancescamichelinPageRoutingModule"]
        ],
        declarations: [_francescamichelin_page__WEBPACK_IMPORTED_MODULE_6__["FrancescamichelinPage"]]
    })
], FrancescamichelinPageModule);



/***/ }),

/***/ "./src/app/pagineartisti/francescamichelin/francescamichelin.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pagineartisti/francescamichelin/francescamichelin.page.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luZWFydGlzdGkvZnJhbmNlc2NhbWljaGVsaW4vZnJhbmNlc2NhbWljaGVsaW4ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pagineartisti/francescamichelin/francescamichelin.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pagineartisti/francescamichelin/francescamichelin.page.ts ***!
  \***************************************************************************/
/*! exports provided: FrancescamichelinPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrancescamichelinPage", function() { return FrancescamichelinPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FrancescamichelinPage = class FrancescamichelinPage {
    constructor() { }
    ngOnInit() {
    }
};
FrancescamichelinPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-francescamichelin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./francescamichelin.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pagineartisti/francescamichelin/francescamichelin.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./francescamichelin.page.scss */ "./src/app/pagineartisti/francescamichelin/francescamichelin.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FrancescamichelinPage);



/***/ })

}]);
//# sourceMappingURL=pagineartisti-francescamichelin-francescamichelin-module-es2015.js.map