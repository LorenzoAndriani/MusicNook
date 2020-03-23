(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pagineartisti-tedua-tedua-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pagineartisti/tedua/tedua.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pagineartisti/tedua/tedua.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagineartistiTeduaTeduaPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"Indietro\" defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-nav>\n\n    </ion-nav>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n\n  <ion-item>\n    <ion-avatar slot=\"start\">\n      <img src=\"../assets/artisti/tedua.jpg\">\n    </ion-avatar>\n    <ion-label>\n      <h1>Tedua</h1>\n    </ion-label>\n  </ion-item>\n  <h1>Storia</h1>\n  <p>Tedua, pseudonimo di Mario Molinari (Genova, 21 febbraio 1994[1]), è un rapper italiano.\n    Precedentemente noto come Incubo o Duate, è uno dei componenti del Wild Bandana, collettivo musicale di cui fanno parte anche Izi, Vaz Tè e Ill Rave.\n    Nato a Genova, all'età di tre anni è stato affidato ad una famiglia, con la quale resterà per ben poco tempo; Molinari trascorre successivamente qualche anno con la nonna materna a Milano, per poi ritornare in età adolescenziale a Cogoleto, dove cresce entrando in contatto con quelli che saranno poi i membri dei Wild Bandana. Attraverso la scuola, all'età di 13 anni Mario incontra Vaz Tè, attraverso il quale conoscerà il compaesano Izi. I tre, cui poi si uniranno altri ragazzi, cominceranno a dedicarsi all'attività musicale, dandosi ben presto dei nomi d'arte: Molinari sceglierà Incubo, nominativo poi abbandonato in favore di Tedua.\n  </p>\n\n   <h5><i>fonte: Wikipedia</i></h5>\n\n   <h1>Album</h1>\n\n   <ion-item>\n    <ion-thumbnail slot=\"start\">\n      <img src=\"../assets/album/mowgli.png\">\n    </ion-thumbnail>\n    <ion-label>Mowgli</ion-label>\n  </ion-item>\n\n   <ion-item>\n    <ion-thumbnail slot=\"start\">\n      <img src=\"../assets/album/california.jpg\">\n    </ion-thumbnail>\n    <ion-label>Orange County California</ion-label>\n  </ion-item>\n\n   <ion-button size=\"small\" color=\"danger\" href=\"https://www.youtube.com/channel/UC_qUaJmf3cKqbHzgBPEh5GQ\">YouTube</ion-button>\n   <ion-button size=\"small\" href=\"https://www.facebook.com/teduaufficiale/\">Facebook</ion-button>\n   <ion-button size=\"small\" color=\"tertiary\" href=\"https://www.instagram.com/tedua_wildbandana/\">Instagram</ion-button>\n\n  </ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pagineartisti/tedua/tedua-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pagineartisti/tedua/tedua-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: TeduaPageRoutingModule */

  /***/
  function srcAppPagineartistiTeduaTeduaRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TeduaPageRoutingModule", function () {
      return TeduaPageRoutingModule;
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


    var _tedua_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tedua.page */
    "./src/app/pagineartisti/tedua/tedua.page.ts");

    const routes = [{
      path: '',
      component: _tedua_page__WEBPACK_IMPORTED_MODULE_3__["TeduaPage"]
    }];
    let TeduaPageRoutingModule = class TeduaPageRoutingModule {};
    TeduaPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TeduaPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pagineartisti/tedua/tedua.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pagineartisti/tedua/tedua.module.ts ***!
    \*****************************************************/

  /*! exports provided: TeduaPageModule */

  /***/
  function srcAppPagineartistiTeduaTeduaModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TeduaPageModule", function () {
      return TeduaPageModule;
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


    var _tedua_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tedua-routing.module */
    "./src/app/pagineartisti/tedua/tedua-routing.module.ts");
    /* harmony import */


    var _tedua_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tedua.page */
    "./src/app/pagineartisti/tedua/tedua.page.ts");

    let TeduaPageModule = class TeduaPageModule {};
    TeduaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _tedua_routing_module__WEBPACK_IMPORTED_MODULE_5__["TeduaPageRoutingModule"]],
      declarations: [_tedua_page__WEBPACK_IMPORTED_MODULE_6__["TeduaPage"]]
    })], TeduaPageModule);
    /***/
  },

  /***/
  "./src/app/pagineartisti/tedua/tedua.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/pagineartisti/tedua/tedua.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagineartistiTeduaTeduaPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luZWFydGlzdGkvdGVkdWEvdGVkdWEucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pagineartisti/tedua/tedua.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/pagineartisti/tedua/tedua.page.ts ***!
    \***************************************************/

  /*! exports provided: TeduaPage */

  /***/
  function srcAppPagineartistiTeduaTeduaPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TeduaPage", function () {
      return TeduaPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let TeduaPage = class TeduaPage {
      constructor() {}

      ngOnInit() {}

    };
    TeduaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tedua',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tedua.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pagineartisti/tedua/tedua.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tedua.page.scss */
      "./src/app/pagineartisti/tedua/tedua.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], TeduaPage);
    /***/
  }
}]);
//# sourceMappingURL=pagineartisti-tedua-tedua-module-es5.js.map