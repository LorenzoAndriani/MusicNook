(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pagineartisti-madame-madame-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pagineartisti/madame/madame.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pagineartisti/madame/madame.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"Indietro\" defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-nav>\n\n    </ion-nav>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n\n  <ion-item>\n    <ion-avatar slot=\"start\">\n      <img src=\"../assets/artisti/madame.jpg\">\n    </ion-avatar>\n    <ion-label>\n      <h1>Madame</h1>\n    </ion-label>\n  </ion-item>\n  <h1>Storia</h1>\n  <p>Classe 2002, Vicenza, ha solo 17 anni e si chiama Francesca ma per molti è già conosciuta come Madame. Intorno a lei negli ultimi mesi si è creato una nube di hype che non si vedeva da tanto tempo; scoperta dagli Aracade Boyz esce a settembre 2018 il suo primo singolo Anna prodotto da Eiemgei; stessa produzione anche per Schiccherie il brano che l'ha portata al grande pubblico esce a dicembre 2018 e in poco tempo supera il milione e mezzo di views su Youtube; a giugno 2019 esce l'ultimo singolo dal titolo, 17.</p>\n   <h5><i>fonte: Rockit.it</i></h5>\n\n   <h1>Singoli</h1>\n\n   <ion-item>\n    <ion-thumbnail slot=\"start\">\n      <img src=\"../assets/album/baby.jpg\">\n    </ion-thumbnail>\n    <ion-label>Baby</ion-label>\n  </ion-item>\n\n  <ion-item>\n    <ion-thumbnail slot=\"start\">\n      <img src=\"../assets/album/promessa.jpg\">\n    </ion-thumbnail>\n    <ion-label>La promessa dell'anno</ion-label>\n  </ion-item>\n\n  <ion-item>\n    <ion-thumbnail slot=\"start\">\n      <img src=\"../assets/album/17.jpg\">\n    </ion-thumbnail>\n    <ion-label>17</ion-label>\n  </ion-item>\n\n  <ion-item>\n    <ion-thumbnail slot=\"start\">\n      <img src=\"../assets/album/sciccherie.jpg\">\n    </ion-thumbnail>\n    <ion-label>Sciccherie</ion-label>\n  </ion-item>\n\n   <ion-button size=\"small\" color=\"danger\" href=\"https://www.youtube.com/channel/UCh6_bHafGtjjRNsbFc3D90g\">YouTube</ion-button>\n   <ion-button size=\"small\" color=\"tertiary\" href=\"https://www.instagram.com/sonolamadame/\">Instagram</ion-button>\n\n  </ion-content>\n");

/***/ }),

/***/ "./src/app/pagineartisti/madame/madame-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pagineartisti/madame/madame-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: MadamePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MadamePageRoutingModule", function() { return MadamePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _madame_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./madame.page */ "./src/app/pagineartisti/madame/madame.page.ts");




const routes = [
    {
        path: '',
        component: _madame_page__WEBPACK_IMPORTED_MODULE_3__["MadamePage"]
    }
];
let MadamePageRoutingModule = class MadamePageRoutingModule {
};
MadamePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MadamePageRoutingModule);



/***/ }),

/***/ "./src/app/pagineartisti/madame/madame.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pagineartisti/madame/madame.module.ts ***!
  \*******************************************************/
/*! exports provided: MadamePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MadamePageModule", function() { return MadamePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _madame_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./madame-routing.module */ "./src/app/pagineartisti/madame/madame-routing.module.ts");
/* harmony import */ var _madame_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./madame.page */ "./src/app/pagineartisti/madame/madame.page.ts");







let MadamePageModule = class MadamePageModule {
};
MadamePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _madame_routing_module__WEBPACK_IMPORTED_MODULE_5__["MadamePageRoutingModule"]
        ],
        declarations: [_madame_page__WEBPACK_IMPORTED_MODULE_6__["MadamePage"]]
    })
], MadamePageModule);



/***/ }),

/***/ "./src/app/pagineartisti/madame/madame.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pagineartisti/madame/madame.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luZWFydGlzdGkvbWFkYW1lL21hZGFtZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pagineartisti/madame/madame.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pagineartisti/madame/madame.page.ts ***!
  \*****************************************************/
/*! exports provided: MadamePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MadamePage", function() { return MadamePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MadamePage = class MadamePage {
    constructor() { }
    ngOnInit() {
    }
};
MadamePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-madame',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./madame.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pagineartisti/madame/madame.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./madame.page.scss */ "./src/app/pagineartisti/madame/madame.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MadamePage);



/***/ })

}]);
//# sourceMappingURL=pagineartisti-madame-madame-module-es2015.js.map