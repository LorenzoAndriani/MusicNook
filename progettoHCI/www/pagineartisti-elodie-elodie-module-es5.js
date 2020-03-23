(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pagineartisti-elodie-elodie-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pagineartisti/elodie/elodie.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pagineartisti/elodie/elodie.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagineartistiElodieElodiePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"Indietro\" defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-nav>\n\n    </ion-nav>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n\n  <ion-item>\n    <ion-avatar slot=\"start\">\n      <img src=\"../assets/artisti/elodie.jpg\">\n    </ion-avatar>\n    <ion-label>\n      <h1>Elodie</h1>\n    </ion-label>\n  </ion-item>\n  <h1>Storia</h1>\n  <p>Elodie Di Patrizi, conosciuta solo come Elodie (Roma, 3 maggio 1990), è una cantante italiana.\n\n    Si è classificata seconda alla quindicesima edizione del talent show Amici di Maria De Filippi, vincendo il premio della critica Vodafone e il premio RTL 102.5.</p>\n   <h5><i>fonte: Wikipedia</i></h5>\n\n  <h1>Live</h1>\n<ion-list>\n\n  <ion-item href=\"https://www.ticketone.it/elodie-milano-biglietti.html?affiliate=IGA&doc=artistPages%2Ftickets&fun=artist&action=tickets&key=2675053%2412657129&jumpIn=yTix&kuid=531949&from=erdetaila\">\n    <ion-label ><h1><b>Santeria Toscana 31 (Milano)</b></h1>\n      <h3><b>Data:</b> gio, 16/04/20, 21.30</h3>\n    <h4><b>Prezzo medio:</b> €25</h4></ion-label>\n  </ion-item> \n\n  <ion-item href=\"https://www.ticketone.it/elodie-roma-biglietti.html?affiliate=IGA&doc=artistPages%2Ftickets&fun=artist&action=tickets&key=2675053%2412657670&jumpIn=yTix&kuid=531949&from=erdetaila\">\n    <ion-label ><h1><b>Teatro Centrale (Roma)</b></h1>\n      <h3><b>Data:</b> sab, 18/04/20, 21.00</h3>\n    <h4><b>Prezzo medio:</b> €25</h4>\n    <h4><b>Mancano:</b> </h4></ion-label>\n  </ion-item> \n\n</ion-list>\n   <h1>Album</h1>\n\n   <ion-item>\n    <ion-thumbnail slot=\"start\">\n      <img src=\"../assets/album/this-is-elodie.jpg\">\n    </ion-thumbnail>\n    <ion-label>This Is Elodie</ion-label>\n  </ion-item>\n\n   <ion-item>\n    <ion-thumbnail slot=\"start\">\n      <img src=\"../assets/album/un-altra-vita.jpg\">\n    </ion-thumbnail>\n    <ion-label>Un'altra vita</ion-label>\n  </ion-item>\n\n  <ion-button size=\"small\" color=\"danger\" href=\"https://www.youtube.com/channel/UC9C9A0BYvdGO_I1IwctjWGg\">YouTube</ion-button>\n   <ion-button size=\"small\" href=\"https://www.facebook.com/elodiedipatrizi/\">Facebook</ion-button>\n   <ion-button size=\"small\" color=\"tertiary\" href=\"https://www.instagram.com/elodie/\">Instagram</ion-button>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pagineartisti/elodie/elodie-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pagineartisti/elodie/elodie-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: ElodiePageRoutingModule */

  /***/
  function srcAppPagineartistiElodieElodieRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ElodiePageRoutingModule", function () {
      return ElodiePageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _elodie_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./elodie.page */
    "./src/app/pagineartisti/elodie/elodie.page.ts");

    const routes = [{
      path: '',
      component: _elodie_page__WEBPACK_IMPORTED_MODULE_3__["ElodiePage"]
    }];
    let ElodiePageRoutingModule = class ElodiePageRoutingModule {};
    ElodiePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ElodiePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pagineartisti/elodie/elodie.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pagineartisti/elodie/elodie.module.ts ***!
    \*******************************************************/

  /*! exports provided: ElodiePageModule */

  /***/
  function srcAppPagineartistiElodieElodieModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ElodiePageModule", function () {
      return ElodiePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _elodie_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./elodie-routing.module */
    "./src/app/pagineartisti/elodie/elodie-routing.module.ts");
    /* harmony import */


    var _elodie_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./elodie.page */
    "./src/app/pagineartisti/elodie/elodie.page.ts");

    let ElodiePageModule = class ElodiePageModule {};
    ElodiePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _elodie_routing_module__WEBPACK_IMPORTED_MODULE_5__["ElodiePageRoutingModule"]],
      declarations: [_elodie_page__WEBPACK_IMPORTED_MODULE_6__["ElodiePage"]]
    })], ElodiePageModule);
    /***/
  },

  /***/
  "./src/app/pagineartisti/elodie/elodie.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/pagineartisti/elodie/elodie.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagineartistiElodieElodiePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luZWFydGlzdGkvZWxvZGllL2Vsb2RpZS5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pagineartisti/elodie/elodie.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pagineartisti/elodie/elodie.page.ts ***!
    \*****************************************************/

  /*! exports provided: ElodiePage */

  /***/
  function srcAppPagineartistiElodieElodiePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ElodiePage", function () {
      return ElodiePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let ElodiePage = class ElodiePage {
      constructor() {}

      ngOnInit() {}

    };
    ElodiePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-elodie',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./elodie.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pagineartisti/elodie/elodie.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./elodie.page.scss */
      "./src/app/pagineartisti/elodie/elodie.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ElodiePage);
    /***/
  }
}]);
//# sourceMappingURL=pagineartisti-elodie-elodie-module-es5.js.map