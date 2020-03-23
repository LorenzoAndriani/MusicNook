(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pagineartisti-russ-russ-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pagineartisti/russ/russ.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pagineartisti/russ/russ.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagineartistiRussRussPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"Indietro\" defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-nav>\n\n    </ion-nav>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n\n  <ion-item>\n    <ion-avatar slot=\"start\">\n      <img src=\"../assets/artisti/russ.jpg\">\n    </ion-avatar>\n    <ion-label>\n      <h1>Russ</h1>\n    </ion-label>\n  </ion-item>\n  <h1>Storia</h1>\n  <p>Russ, pseudonimo di Russell Vitale (Secaucus, 26 settembre 1992), è un rapper e produttore discografico statunitense.\n    Russ è considerato un rapper DIY, ciò indica l'approccio indipendente dell'artista nella produzione dei propri brani. Infatti, la maggior parte dei suoi singoli e dei suoi album sono autoprodotti e sono interamente scritti, registrati, mixati e masterizzati da lui stesso. I suoi brani sono prevalentemente di genere R&B contemporaneo ma mantengono una forte impronta Hip Hop.</p>\n   <h5><i>fonte: Wikipedia</i></h5>\n\n   <h1>Album</h1>\n\n   <ion-item>\n    <ion-thumbnail slot=\"start\">\n      <img src=\"../assets/album/zoo.jpg\">\n    </ion-thumbnail>\n    <ion-label>Zoo</ion-label>\n  </ion-item>\n\n   <ion-item>\n    <ion-thumbnail slot=\"start\">\n      <img src=\"../assets/album/wolf.jpg\">\n    </ion-thumbnail>\n    <ion-label>There's Really a Wolf</ion-label>\n  </ion-item>\n\n   <ion-item>\n    <ion-thumbnail slot=\"start\">\n      <img src=\"../assets/album/brain-dead.jpg\">\n    </ion-thumbnail>\n    <ion-label>Brain Dead</ion-label>\n  </ion-item>\n\n   <ion-button size=\"small\" color=\"danger\" href=\"https://www.youtube.com/channel/UCiIETTq2It3OzW8_WYRPTyQ\">YouTube</ion-button>\n   <ion-button size=\"small\" href=\"https://www.facebook.com/russtheone/\">Facebook</ion-button>\n   <ion-button size=\"small\" color=\"tertiary\" href=\"https://www.instagram.com/russ/\">Instagram</ion-button>\n\n  </ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pagineartisti/russ/russ-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pagineartisti/russ/russ-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: RussPageRoutingModule */

  /***/
  function srcAppPagineartistiRussRussRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RussPageRoutingModule", function () {
      return RussPageRoutingModule;
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


    var _russ_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./russ.page */
    "./src/app/pagineartisti/russ/russ.page.ts");

    const routes = [{
      path: '',
      component: _russ_page__WEBPACK_IMPORTED_MODULE_3__["RussPage"]
    }];
    let RussPageRoutingModule = class RussPageRoutingModule {};
    RussPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], RussPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pagineartisti/russ/russ.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pagineartisti/russ/russ.module.ts ***!
    \***************************************************/

  /*! exports provided: RussPageModule */

  /***/
  function srcAppPagineartistiRussRussModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RussPageModule", function () {
      return RussPageModule;
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


    var _russ_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./russ-routing.module */
    "./src/app/pagineartisti/russ/russ-routing.module.ts");
    /* harmony import */


    var _russ_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./russ.page */
    "./src/app/pagineartisti/russ/russ.page.ts");

    let RussPageModule = class RussPageModule {};
    RussPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _russ_routing_module__WEBPACK_IMPORTED_MODULE_5__["RussPageRoutingModule"]],
      declarations: [_russ_page__WEBPACK_IMPORTED_MODULE_6__["RussPage"]]
    })], RussPageModule);
    /***/
  },

  /***/
  "./src/app/pagineartisti/russ/russ.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/pagineartisti/russ/russ.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagineartistiRussRussPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luZWFydGlzdGkvcnVzcy9ydXNzLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pagineartisti/russ/russ.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/pagineartisti/russ/russ.page.ts ***!
    \*************************************************/

  /*! exports provided: RussPage */

  /***/
  function srcAppPagineartistiRussRussPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RussPage", function () {
      return RussPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let RussPage = class RussPage {
      constructor() {}

      ngOnInit() {}

    };
    RussPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-russ',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./russ.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pagineartisti/russ/russ.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./russ.page.scss */
      "./src/app/pagineartisti/russ/russ.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], RussPage);
    /***/
  }
}]);
//# sourceMappingURL=pagineartisti-russ-russ-module-es5.js.map