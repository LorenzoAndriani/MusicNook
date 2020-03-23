(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["live-live-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/live/live.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/live/live.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Live</ion-title>\n    <!-- MENU\n      <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n  <ion-button icon-only (click)=\"resetData()\"><ion-icon name=\"refresh\"></ion-icon></ion-button>\n  <ion-button icon-only (click)=\"filterData()\"><ion-icon name=\"funnel\"></ion-icon></ion-button>-->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n\n<ion-list>\n<ion-item *ngFor=\"let live of modifierData\" href=\"{{live.link}}\">\n  <ion-label>\n    <h1>{{live.artista}}</h1>\n    <h3><b>Data:</b> {{live.data}}</h3>\n    <h4><b>Luogo</b>: {{live.luogo}}</h4>\n    <h4><b>Prezzo medio:</b> {{live.prezzo}}</h4>\n </ion-label>\n</ion-item>\n</ion-list>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/live/live-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/live/live-routing.module.ts ***!
  \*********************************************/
/*! exports provided: LivePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LivePageRoutingModule", function() { return LivePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _live_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./live.page */ "./src/app/live/live.page.ts");




const routes = [
    {
        path: '',
        component: _live_page__WEBPACK_IMPORTED_MODULE_3__["LivePage"]
    }
];
let LivePageRoutingModule = class LivePageRoutingModule {
};
LivePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LivePageRoutingModule);



/***/ }),

/***/ "./src/app/live/live.module.ts":
/*!*************************************!*\
  !*** ./src/app/live/live.module.ts ***!
  \*************************************/
/*! exports provided: LivePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LivePageModule", function() { return LivePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _live_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./live-routing.module */ "./src/app/live/live-routing.module.ts");
/* harmony import */ var _live_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./live.page */ "./src/app/live/live.page.ts");







let LivePageModule = class LivePageModule {
};
LivePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _live_routing_module__WEBPACK_IMPORTED_MODULE_5__["LivePageRoutingModule"]
        ],
        declarations: [_live_page__WEBPACK_IMPORTED_MODULE_6__["LivePage"]]
    })
], LivePageModule);



/***/ }),

/***/ "./src/app/live/live.page.scss":
/*!*************************************!*\
  !*** ./src/app/live/live.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpdmUvbGl2ZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/live/live.page.ts":
/*!***********************************!*\
  !*** ./src/app/live/live.page.ts ***!
  \***********************************/
/*! exports provided: LivePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LivePage", function() { return LivePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LivePage = class LivePage {
    constructor() {
        this.originalData = [
            { artista: 'Dardust', data: 'mer, 08/04/20, 22.00', luogo: 'Hiroshima Mon Amour (Torino)', prezzo: '€25', link: 'https://www.ticketone.it/dardust-torino-biglietti.html?affiliate=ITT&doc=artistPages%2Ftickets&fun=artist&action=tickets&key=2639449%2412532121&jumpIn=yTix&kuid=538876&from=erdetaila' },
            { artista: 'Annalisa', data: 'lun, 04/05/20, 21.00', luogo: 'Fabrique (Milano)', prezzo: '€35', link: 'https://www.ticketone.it/annalisa-milano-biglietti.html?affiliate=ITT&doc=artistPages%2Ftickets&fun=artist&action=tickets&key=2630192%2412493999&jumpIn=yTix&kuid=472144&from=erdetaila' },
            { artista: 'Ultimo', data: 'mer, 03/06/20, 21.00', luogo: 'Stadio Olimpico Grande (Torino)', prezzo: '€30 - €75', link: 'https://www.ticketone.it/ultimo-torino-biglietti.html?affiliate=ITT&doc=artistPages%2Ftickets&fun=artist&action=tickets&key=2529255%2412087461&jumpIn=yTix&kuid=547237&from=erdetaila' },
            { artista: 'Tiziano Ferro', data: 'sab, 06/06/20, 20.45', luogo: 'Stadio San Siro (Milano)', prezzo: '€40-€80', link: 'https://www.ticketone.it/tiziano-ferro-milano-biglietti.html?affiliate=ITT&doc=artistPages%2Ftickets&fun=artist&action=tickets&key=1918864%2412159769&jumpIn=yTix&kuid=463860&from=erdetaila' },
            { artista: 'Machine Gun Kelly', data: 'mer, 01/07/20, 21.00', luogo: 'Sequoie Music Park (Bologna)', prezzo: '€35', link: 'https://www.ticketone.it/machine-gun-kelly-biglietti.html?affiliate=ITT&doc=artistPages%2Ftickets&fun=artist&action=tickets&erid=2449700&includeOnlybookable=true' },
            { artista: 'Kendrick Lamar', data: 'mar, 07/07/20, 18.00', luogo: 'Rock in Roma (Roma)', prezzo: '€70', link: 'https://www.ticketone.it/kendrick-lamar-biglietti.html?affiliate=ITT&doc=artistPages%2Ftickets&fun=artist&action=tickets&erid=2642033' },
            { artista: 'Anderson .Paak', data: 'mar, 07/07/20, 21.00', luogo: 'Piazza Napoleone (Lucca)', prezzo: '€35-€250', link: 'https://www.ticketone.it/biglietti.html?affiliate=ITT&doc=artistPages%2Ftickets&fun=artist&action=tickets&erid=2712815&includeOnlybookable=false&x10=1&x11=anderson' },
            { artista: 'Post Malone', data: 'sab, 10/10/20, 21.00', luogo: 'Mediolanum Forum (Milano)', prezzo: '€40', link: 'https://www.ticketone.it/post-malone-milano-biglietti.html?affiliate=ITT&doc=artistPages%2Ftickets&fun=artist&action=tickets&key=2693111%2412730689&jumpIn=yTix&kuid=552323&from=erdetaila' },
            { artista: 'Marracash', data: 'lun, 26/10/20, 21.00', luogo: 'Nelson Mandela Forum (Firenze)', prezzo: '€25-€40', link: 'https://www.ticketone.it/marracash-firenze-biglietti.html?affiliate=ITT&doc=artistPages%2Ftickets&fun=artist&action=tickets&key=2620248%2412503618&jumpIn=yTix&kuid=464447&from=erdetaila' },
        ];
        this.modifierData = JSON.parse(JSON.stringify(this.originalData));
    }
    resetData() {
        this.modifierData = JSON.parse(JSON.stringify(this.originalData));
    }
    filterData() {
        this.modifierData = this.modifierData.filter((live) => {
            return live.artista == "Ultimo";
        });
    }
    ngOnInit() {
    }
};
LivePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-live',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./live.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/live/live.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./live.page.scss */ "./src/app/live/live.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], LivePage);



/***/ })

}]);
//# sourceMappingURL=live-live-module-es2015.js.map