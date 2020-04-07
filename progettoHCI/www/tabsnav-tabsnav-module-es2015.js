(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabsnav-tabsnav-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabsnav/tabsnav.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabsnav/tabsnav.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n\n  <ion-tabs>\n    <ion-tab-bar slot=\"bottom\">\n\n      <ion-tab-button tab=\"artisti\">\n        <ion-icon name=\"musical-notes-outline\"></ion-icon>\n        <ion-label>Artisti</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button tab=\"uscite\">\n        <ion-icon name=\"play-outline\"></ion-icon>\n        <ion-label>Uscite</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button tab=\"home\">\n        <ion-icon name=\"home\"></ion-icon>\n        <ion-label>Home</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button tab=\"articoli\">\n        <ion-icon name=\"reader-outline\"></ion-icon>\n        <ion-label>Articoli</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button tab=\"live\">\n        <ion-icon name=\"pricetag-outline\"></ion-icon>\n        <ion-label>Live</ion-label>\n      </ion-tab-button>\n\n    </ion-tab-bar>\n  </ion-tabs>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/tabsnav/tabsnav-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/tabsnav/tabsnav-routing.module.ts ***!
  \***************************************************/
/*! exports provided: TabsnavPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsnavPageRoutingModule", function() { return TabsnavPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tabsnav_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabsnav.page */ "./src/app/tabsnav/tabsnav.page.ts");




const routes = [
    {
        path: './home',
        component: _tabsnav_page__WEBPACK_IMPORTED_MODULE_3__["TabsnavPage"]
    },
    {
        path: 'achillelauro',
        loadChildren: () => __webpack_require__.e(/*! import() | pagineartisti-achillelauro-achillelauro-module */ "pagineartisti-achillelauro-achillelauro-module").then(__webpack_require__.bind(null, /*! ../pagineartisti/achillelauro/achillelauro.module */ "./src/app/pagineartisti/achillelauro/achillelauro.module.ts")).then(m => m.AchillelauroPageModule)
    },
    {
        path: 'francescamichelin',
        loadChildren: () => __webpack_require__.e(/*! import() | pagineartisti-francescamichelin-francescamichelin-module */ "pagineartisti-francescamichelin-francescamichelin-module").then(__webpack_require__.bind(null, /*! ../pagineartisti/francescamichelin/francescamichelin.module */ "./src/app/pagineartisti/francescamichelin/francescamichelin.module.ts")).then(m => m.FrancescamichelinPageModule)
    },
    {
        path: 'ghali',
        loadChildren: () => __webpack_require__.e(/*! import() | pagineartisti-ghali-ghali-module */ "pagineartisti-ghali-ghali-module").then(__webpack_require__.bind(null, /*! ../pagineartisti/ghali/ghali.module */ "./src/app/pagineartisti/ghali/ghali.module.ts")).then(m => m.GhaliPageModule)
    },
    {
        path: 'marracash',
        loadChildren: () => __webpack_require__.e(/*! import() | pagineartisti-marracash-marracash-module */ "pagineartisti-marracash-marracash-module").then(__webpack_require__.bind(null, /*! ../pagineartisti/marracash/marracash.module */ "./src/app/pagineartisti/marracash/marracash.module.ts")).then(m => m.MarracashPageModule)
    },
    {
        path: 'nitro',
        loadChildren: () => __webpack_require__.e(/*! import() | pagineartisti-nitro-nitro-module */ "pagineartisti-nitro-nitro-module").then(__webpack_require__.bind(null, /*! ../pagineartisti/nitro/nitro.module */ "./src/app/pagineartisti/nitro/nitro.module.ts")).then(m => m.NitroPageModule)
    },
    {
        path: 'davidecalandra',
        loadChildren: () => __webpack_require__.e(/*! import() | pagineartisti-davidecalandra-davidecalandra-module */ "pagineartisti-davidecalandra-davidecalandra-module").then(__webpack_require__.bind(null, /*! ../pagineartisti/davidecalandra/davidecalandra.module */ "./src/app/pagineartisti/davidecalandra/davidecalandra.module.ts")).then(m => m.DavidecalandraPageModule)
    },
    {
        path: 'tizianoferro',
        loadChildren: () => __webpack_require__.e(/*! import() | pagineartisti-tizianoferro-tizianoferro-module */ "pagineartisti-tizianoferro-tizianoferro-module").then(__webpack_require__.bind(null, /*! ../pagineartisti/tizianoferro/tizianoferro.module */ "./src/app/pagineartisti/tizianoferro/tizianoferro.module.ts")).then(m => m.TizianoferroPageModule)
    },
    {
        path: 'fedez',
        loadChildren: () => __webpack_require__.e(/*! import() | pagineartisti-fedez-fedez-module */ "pagineartisti-fedez-fedez-module").then(__webpack_require__.bind(null, /*! ../pagineartisti/fedez/fedez.module */ "./src/app/pagineartisti/fedez/fedez.module.ts")).then(m => m.FedezPageModule)
    },
    {
        path: 'salmo',
        loadChildren: () => __webpack_require__.e(/*! import() | pagineartisti-salmo-salmo-module */ "pagineartisti-salmo-salmo-module").then(__webpack_require__.bind(null, /*! ../pagineartisti/salmo/salmo.module */ "./src/app/pagineartisti/salmo/salmo.module.ts")).then(m => m.SalmoPageModule)
    },
    {
        path: 'madame',
        loadChildren: () => __webpack_require__.e(/*! import() | pagineartisti-madame-madame-module */ "pagineartisti-madame-madame-module").then(__webpack_require__.bind(null, /*! ../pagineartisti/madame/madame.module */ "./src/app/pagineartisti/madame/madame.module.ts")).then(m => m.MadamePageModule)
    },
];
let TabsnavPageRoutingModule = class TabsnavPageRoutingModule {
};
TabsnavPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TabsnavPageRoutingModule);



/***/ }),

/***/ "./src/app/tabsnav/tabsnav.module.ts":
/*!*******************************************!*\
  !*** ./src/app/tabsnav/tabsnav.module.ts ***!
  \*******************************************/
/*! exports provided: TabsnavPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsnavPageModule", function() { return TabsnavPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tabsnav_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabsnav-routing.module */ "./src/app/tabsnav/tabsnav-routing.module.ts");
/* harmony import */ var _tabsnav_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tabsnav.page */ "./src/app/tabsnav/tabsnav.page.ts");








const routes = [
    {
        path: 'tabs-nav',
        component: _tabsnav_page__WEBPACK_IMPORTED_MODULE_7__["TabsnavPage"],
        children: [
            {
                path: 'home',
                loadChildren: '../home/home.module#HomePageModule'
            },
            {
                path: 'uscite',
                loadChildren: '../uscite/uscite.module#UscitePageModule'
            },
            {
                path: 'artisti',
                loadChildren: '../artisti/artisti.module#ArtistiPageModule'
            },
            {
                path: 'articoli',
                loadChildren: '../articoli/articoli.module#ArticoliPageModule'
            },
            {
                path: 'live',
                loadChildren: '../live/live.module#LivePageModule'
            },
        ]
    },
    {
        path: '',
        redirectTo: '/tabs-nav/home'
    }
];
let TabsnavPageModule = class TabsnavPageModule {
};
TabsnavPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _tabsnav_routing_module__WEBPACK_IMPORTED_MODULE_6__["TabsnavPageRoutingModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)
        ],
        declarations: [_tabsnav_page__WEBPACK_IMPORTED_MODULE_7__["TabsnavPage"]]
    })
], TabsnavPageModule);



/***/ }),

/***/ "./src/app/tabsnav/tabsnav.page.scss":
/*!*******************************************!*\
  !*** ./src/app/tabsnav/tabsnav.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYnNuYXYvdGFic25hdi5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/tabsnav/tabsnav.page.ts":
/*!*****************************************!*\
  !*** ./src/app/tabsnav/tabsnav.page.ts ***!
  \*****************************************/
/*! exports provided: TabsnavPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsnavPage", function() { return TabsnavPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TabsnavPage = class TabsnavPage {
    constructor() { }
    ngOnInit() {
    }
};
TabsnavPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tabsnav',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tabsnav.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabsnav/tabsnav.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tabsnav.page.scss */ "./src/app/tabsnav/tabsnav.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TabsnavPage);



/***/ })

}]);
//# sourceMappingURL=tabsnav-tabsnav-module-es2015.js.map