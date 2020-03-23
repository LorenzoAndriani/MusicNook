(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pagineartisti-jaden-smith-jaden-smith-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pagineartisti/jaden-smith/jaden-smith.page.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pagineartisti/jaden-smith/jaden-smith.page.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagineartistiJadenSmithJadenSmithPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"Indietro\" defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-nav>\n\n    </ion-nav>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n\n  <ion-item>\n    <ion-avatar slot=\"start\">\n      <img src=\"../assets/artisti/jaden-smith.jpg\">\n    </ion-avatar>\n    <ion-label>\n      <h1>Jaden Smith</h1>\n    </ion-label>\n  </ion-item>\n  <h1>Storia</h1>\n  <p>Jaden Christopher Syre Smith (Malibù, 8 luglio 1998) è un attore, rapper, ballerino, cantante e modello statunitense.\n\n    È il figlio di Jada Pinkett Smith e Will Smith. Il suo primo ruolo in un film è stato con suo padre nel 2006 con La ricerca della felicità. Ha anche recitato nel remake Ultimatum alla Terra del 2008 e nel remake del 2010 di The Karate Kid, e nel film del 2013 After Earth con suo padre.\n    \n    Dopo le critiche del film After Earth, Smith si è distanziato dalla recitazione e dall'industria cinematografica, decidendo invece di concentrarsi sulla musica, rilasciando Cool Tape Vol. 2 a novembre 2014 e dopo uno sforzo lavorativo di tre anni ha pubblicato il suo primo album in studio, Syre, pubblicato nel 2017 e successivamente Syre: The Electric Album nel 2018.</p>\n\n   <h5><i>fonte: Wikipedia</i></h5>\n\n   <h1>Album</h1>\n\n   <ion-item>\n    <ion-thumbnail slot=\"start\">\n      <img src=\"../assets/album/erys.jpg\">\n    </ion-thumbnail>\n    <ion-label>Erys</ion-label>\n  </ion-item>\n\n   <ion-item>\n    <ion-thumbnail slot=\"start\">\n      <img src=\"../assets/album/syre.png\">\n    </ion-thumbnail>\n    <ion-label>Syre</ion-label>\n  </ion-item>\n\n   <ion-button size=\"small\" color=\"danger\" href=\"https://www.youtube.com/channel/UC-w7D3GsJecTHA8Sjcyn6sQ\">YouTube</ion-button>\n   <ion-button size=\"small\" href=\"https://www.facebook.com/officialjaden\">Facebook</ion-button>\n   <ion-button size=\"small\" color=\"tertiary\" href=\"https://www.instagram.com/c.syresmith/\">Instagram</ion-button>\n\n  </ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pagineartisti/jaden-smith/jaden-smith-routing.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/pagineartisti/jaden-smith/jaden-smith-routing.module.ts ***!
    \*************************************************************************/

  /*! exports provided: JadenSmithPageRoutingModule */

  /***/
  function srcAppPagineartistiJadenSmithJadenSmithRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JadenSmithPageRoutingModule", function () {
      return JadenSmithPageRoutingModule;
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


    var _jaden_smith_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./jaden-smith.page */
    "./src/app/pagineartisti/jaden-smith/jaden-smith.page.ts");

    const routes = [{
      path: '',
      component: _jaden_smith_page__WEBPACK_IMPORTED_MODULE_3__["JadenSmithPage"]
    }];
    let JadenSmithPageRoutingModule = class JadenSmithPageRoutingModule {};
    JadenSmithPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], JadenSmithPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pagineartisti/jaden-smith/jaden-smith.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pagineartisti/jaden-smith/jaden-smith.module.ts ***!
    \*****************************************************************/

  /*! exports provided: JadenSmithPageModule */

  /***/
  function srcAppPagineartistiJadenSmithJadenSmithModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JadenSmithPageModule", function () {
      return JadenSmithPageModule;
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


    var _jaden_smith_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./jaden-smith-routing.module */
    "./src/app/pagineartisti/jaden-smith/jaden-smith-routing.module.ts");
    /* harmony import */


    var _jaden_smith_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./jaden-smith.page */
    "./src/app/pagineartisti/jaden-smith/jaden-smith.page.ts");

    let JadenSmithPageModule = class JadenSmithPageModule {};
    JadenSmithPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _jaden_smith_routing_module__WEBPACK_IMPORTED_MODULE_5__["JadenSmithPageRoutingModule"]],
      declarations: [_jaden_smith_page__WEBPACK_IMPORTED_MODULE_6__["JadenSmithPage"]]
    })], JadenSmithPageModule);
    /***/
  },

  /***/
  "./src/app/pagineartisti/jaden-smith/jaden-smith.page.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/pagineartisti/jaden-smith/jaden-smith.page.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagineartistiJadenSmithJadenSmithPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luZWFydGlzdGkvamFkZW4tc21pdGgvamFkZW4tc21pdGgucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pagineartisti/jaden-smith/jaden-smith.page.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pagineartisti/jaden-smith/jaden-smith.page.ts ***!
    \***************************************************************/

  /*! exports provided: JadenSmithPage */

  /***/
  function srcAppPagineartistiJadenSmithJadenSmithPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JadenSmithPage", function () {
      return JadenSmithPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let JadenSmithPage = class JadenSmithPage {
      constructor() {}

      ngOnInit() {}

    };
    JadenSmithPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-jaden-smith',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./jaden-smith.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pagineartisti/jaden-smith/jaden-smith.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./jaden-smith.page.scss */
      "./src/app/pagineartisti/jaden-smith/jaden-smith.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], JadenSmithPage);
    /***/
  }
}]);
//# sourceMappingURL=pagineartisti-jaden-smith-jaden-smith-module-es5.js.map