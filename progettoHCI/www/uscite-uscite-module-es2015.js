(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["uscite-uscite-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/uscite/uscite.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/uscite/uscite.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Uscite</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\" pullFactor=\"0.2\">\n    <ion-refresher-content>\n    </ion-refresher-content>\n  </ion-refresher>\n  \n  <ion-card *ngFor=\"let uscite of items\">\n    <ion-card-header>\n      <ion-card-subtitle>{{uscite.artista}}</ion-card-subtitle>\n      <ion-card-title>{{uscite.titolo}}</ion-card-title>\n      <ion-card-subtitle>{{uscite.tipo}}</ion-card-subtitle>\n      <ion-card-subtitle color=\"danger\">{{uscite.data}}</ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content>\n      {{uscite.testo}}\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header >\n      <ion-card-subtitle>Emis Killa</ion-card-subtitle>\n      <ion-card-title>Supereroe</ion-card-title>\n      <ion-card-subtitle>SINGOLO</ion-card-subtitle>\n      <ion-card-subtitle color=\"danger\">03 APRILE 2020</ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content>\n      Il rapper di Vimercate è pronto a tornare.\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header >\n      <ion-card-subtitle>Lazza</ion-card-subtitle>\n      <ion-card-title>Zzala</ion-card-title>\n      <ion-card-subtitle>ALBUM</ion-card-subtitle>\n      <ion-card-subtitle color=\"danger\">20 APRILE 2020</ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content>\n      Sarà il terzo album dell'artista milanese.\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header >\n      <ion-card-subtitle>Childish Gambino</ion-card-subtitle>\n      <ion-card-title>Donald Glover</ion-card-title>\n      <ion-card-subtitle>ALBUM</ion-card-subtitle>\n      <ion-card-subtitle color=\"danger\">20 MAGGIO 2020</ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content>\n      Uscirà il quarto album in studio dell'artista statunitense.\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header >\n      <ion-card-subtitle>Geolier</ion-card-subtitle>\n      <ion-card-title>Emanuele</ion-card-title>\n      <ion-card-subtitle>ALBUM</ion-card-subtitle>\n      <ion-card-subtitle color=\"danger\">14 GIUGNO 2020</ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content>\n      L'artista ha annunciato da poco il suo primo album.\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n\n");

/***/ }),

/***/ "./src/app/uscite/uscite-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/uscite/uscite-routing.module.ts ***!
  \*************************************************/
/*! exports provided: UscitePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UscitePageRoutingModule", function() { return UscitePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _uscite_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./uscite.page */ "./src/app/uscite/uscite.page.ts");




const routes = [
    {
        path: '',
        component: _uscite_page__WEBPACK_IMPORTED_MODULE_3__["UscitePage"]
    }
];
let UscitePageRoutingModule = class UscitePageRoutingModule {
};
UscitePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UscitePageRoutingModule);



/***/ }),

/***/ "./src/app/uscite/uscite.module.ts":
/*!*****************************************!*\
  !*** ./src/app/uscite/uscite.module.ts ***!
  \*****************************************/
/*! exports provided: UscitePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UscitePageModule", function() { return UscitePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _uscite_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./uscite-routing.module */ "./src/app/uscite/uscite-routing.module.ts");
/* harmony import */ var _uscite_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./uscite.page */ "./src/app/uscite/uscite.page.ts");







let UscitePageModule = class UscitePageModule {
};
UscitePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _uscite_routing_module__WEBPACK_IMPORTED_MODULE_5__["UscitePageRoutingModule"]
        ],
        declarations: [_uscite_page__WEBPACK_IMPORTED_MODULE_6__["UscitePage"]]
    })
], UscitePageModule);



/***/ }),

/***/ "./src/app/uscite/uscite.page.scss":
/*!*****************************************!*\
  !*** ./src/app/uscite/uscite.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzY2l0ZS91c2NpdGUucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/uscite/uscite.page.ts":
/*!***************************************!*\
  !*** ./src/app/uscite/uscite.page.ts ***!
  \***************************************/
/*! exports provided: UscitePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UscitePage", function() { return UscitePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UscitePage = class UscitePage {
    constructor() { }
    ngOnInit() {
    }
    initialize() {
        this.items = this.originalData = [
            { artista: "Drake", titolo: "Fly", tipo: "ALBUM", data: "20 GIUGNO 2020", testo: "Sarà il quinto album in studio dell'artista americano" }
        ];
    }
    doRefresh(event) {
        setTimeout(() => {
            event.target.complete();
        }, 1000);
        this.initialize();
    }
};
UscitePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-uscite',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./uscite.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/uscite/uscite.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./uscite.page.scss */ "./src/app/uscite/uscite.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], UscitePage);



/***/ })

}]);
//# sourceMappingURL=uscite-uscite-module-es2015.js.map