(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pagineartisti-articolo31-articolo31-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pagineartisti/articolo31/articolo31.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pagineartisti/articolo31/articolo31.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"Indietro\" defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-nav>\n\n    </ion-nav>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n\n  <ion-item>\n    <ion-avatar slot=\"start\">\n      <img src=\"../assets/artisti/articolo-31.jpg\">\n    </ion-avatar>\n    <ion-label>\n      <h1>Articolo 31</h1>\n    </ion-label>\n  </ion-item>\n  <h1>Storia</h1>\n  <p>Gli Articolo 31 sono un gruppo musicale Hip Hop italiano, formatosi a Milano nel 1990 e composto da J-Ax e DJ Jad. Hanno avuto un successo notevole sia in Italia che all'estero, riproponendo in italiano, soprattutto negli anni novanta, i caratteri distintivi del loro genere di allora, come il freestyle e il campionamento di noti ritornelli. Nel 1994 hanno fondato la Spaghetti Funk e dagli anni duemila, subito dopo aver pubblicato Greatest Hits, hanno svoltato verso sonorità più pop assumendo un cantato più melodico e perdendo parzialmente le sonorità hip hop.</p>\n\n   <h5><i>fonte: Wikipedia</i></h5>\n\n   <h1>Prossime Uscite</h1>\n<ion-list>\n\n\n\n</ion-list>\n   <h1>Album</h1>\n\n   <ion-item>\n    <ion-thumbnail slot=\"start\">\n      <img src=\"../assets/album/italiano-medio.jpg\">\n    </ion-thumbnail>\n    <ion-label>Italiano Medio</ion-label>\n  </ion-item>\n\n   <ion-item>\n    <ion-thumbnail slot=\"start\">\n      <img src=\"../assets/album/domani-smetto.jpg\">\n    </ion-thumbnail>\n    <ion-label>Domani-Smetto</ion-label>\n  </ion-item>\n\n   <ion-item>\n    <ion-thumbnail slot=\"start\">\n      <img src=\"../assets/album/perche-si.jpg\">\n    </ion-thumbnail>\n    <ion-label>Perchè si</ion-label>\n  </ion-item>\n\n  <ion-item>\n    <ion-thumbnail slot=\"start\">\n      <img src=\"../assets/album/nessuno.jpg\">\n    </ion-thumbnail>\n    <ion-label>Nessuno</ion-label>\n  </ion-item>\n\n  <p></p>\n\n   <ion-button size=\"small\" color=\"danger\" href=\"https://www.youtube.com/channel/UCZQXf8xgkGWc3aed0GEFGBQ\">YouTube</ion-button>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pagineartisti/articolo31/articolo31-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pagineartisti/articolo31/articolo31-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: Articolo31PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Articolo31PageRoutingModule", function() { return Articolo31PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _articolo31_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./articolo31.page */ "./src/app/pagineartisti/articolo31/articolo31.page.ts");




const routes = [
    {
        path: '',
        component: _articolo31_page__WEBPACK_IMPORTED_MODULE_3__["Articolo31Page"]
    }
];
let Articolo31PageRoutingModule = class Articolo31PageRoutingModule {
};
Articolo31PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], Articolo31PageRoutingModule);



/***/ }),

/***/ "./src/app/pagineartisti/articolo31/articolo31.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pagineartisti/articolo31/articolo31.module.ts ***!
  \***************************************************************/
/*! exports provided: Articolo31PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Articolo31PageModule", function() { return Articolo31PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _articolo31_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./articolo31-routing.module */ "./src/app/pagineartisti/articolo31/articolo31-routing.module.ts");
/* harmony import */ var _articolo31_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./articolo31.page */ "./src/app/pagineartisti/articolo31/articolo31.page.ts");







let Articolo31PageModule = class Articolo31PageModule {
};
Articolo31PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _articolo31_routing_module__WEBPACK_IMPORTED_MODULE_5__["Articolo31PageRoutingModule"]
        ],
        declarations: [_articolo31_page__WEBPACK_IMPORTED_MODULE_6__["Articolo31Page"]]
    })
], Articolo31PageModule);



/***/ }),

/***/ "./src/app/pagineartisti/articolo31/articolo31.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pagineartisti/articolo31/articolo31.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luZWFydGlzdGkvYXJ0aWNvbG8zMS9hcnRpY29sbzMxLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pagineartisti/articolo31/articolo31.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pagineartisti/articolo31/articolo31.page.ts ***!
  \*************************************************************/
/*! exports provided: Articolo31Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Articolo31Page", function() { return Articolo31Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Articolo31Page = class Articolo31Page {
    constructor() { }
    ngOnInit() {
    }
};
Articolo31Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-articolo31',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./articolo31.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pagineartisti/articolo31/articolo31.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./articolo31.page.scss */ "./src/app/pagineartisti/articolo31/articolo31.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], Articolo31Page);



/***/ })

}]);
//# sourceMappingURL=pagineartisti-articolo31-articolo31-module-es2015.js.map