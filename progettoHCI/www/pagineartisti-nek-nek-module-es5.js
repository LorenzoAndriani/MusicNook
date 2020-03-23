(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pagineartisti-nek-nek-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pagineartisti/nek/nek.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pagineartisti/nek/nek.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagineartistiNekNekPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"Indietro\" defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-nav>\n\n    </ion-nav>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n\n  <ion-item>\n    <ion-avatar slot=\"start\">\n      <img src=\"../assets/artisti/nek.jpg\">\n    </ion-avatar>\n    <ion-label>\n      <h1>Nek</h1>\n    </ion-label>\n  </ion-item>\n  <h1>Storia</h1>\n  <p>Nek, pseudonimo di Filippo Neviani (Sassuolo, 6 gennaio 1972), è un cantautore e polistrumentista italiano.\n    Secondo i dati certificati dalla Federazione Industria Musicale Italiana, Nek ha venduto nel corso della sua carriera oltre 10 milioni di dischi in tutto il mondo.L'esordio in campo musicale di Nek avvenne nel 1986, quando, insieme a Gianluca Vaccari, formò il duo country Winchester. Nel 1989 divenne cantante e bassista del gruppo musicale rock White Lady, nel quale compose i suoi primi brani. Tale gruppo nacque inizialmente come cover band dei Police, per poi divenire una formazione con un proprio repertorio personale, tanto da incidere il demo White Lady – The Demo.\n    Nel 1991 Nek abbandonò il gruppo, concentrandosi sulla propria carriera da solista; nello stesso anno partecipò al Festival di Castrocaro presentando il brano Io ti vorrei e arrivando fino alla sera finale, venendo battuto da Bracco Di Graci. Nonostante ciò, il cantautore firmò un contratto con l'etichetta discografica Fonit Cetra per la realizzazione di tre album.</p>\n  <h1>Live</h1>\n<ion-list>\n\n  <ion-item href=\"https://www.ticketone.it/nek-carmagnola-biglietti.html?affiliate=IGA&doc=artistPages%2Ftickets&fun=artist&action=tickets&key=2731649%2412856162&jumpIn=yTix&kuid=461934&from=erdetaila\">\n    <ion-label><h1><b>Piazza Italia (Carmagnola)</b></h1>\n      <h3><b>Data:</b> dom, 30/08/20, 21.30</h3>\n    <h4><b>Prezzo medio:</b> €30</h4></ion-label>\n  </ion-item> \n\n</ion-list>\n   <h1>Album</h1>\n\n   <ion-item>\n    <ion-thumbnail slot=\"start\">\n      <img src=\"../assets/album/unici.jpg\">\n    </ion-thumbnail>\n    <ion-label>Unici</ion-label>\n  </ion-item>\n\n   <ion-item>\n    <ion-thumbnail slot=\"start\">\n      <img src=\"../assets/album/una-parte-di-me.jpg\">\n    </ion-thumbnail>\n    <ion-label>Pour l'amour</ion-label>\n  </ion-item>\n\n   <ion-item>\n    <ion-thumbnail slot=\"start\">\n      <img src=\"../assets/album/cose-difendere.jpg\">\n    </ion-thumbnail>\n    <ion-label>Le cose da difendere</ion-label>\n  </ion-item>\n\n   <ion-button size=\"small\" href=\"https://www.facebook.com/NekOfficial/\">Facebook</ion-button>\n   <ion-button size=\"small\" color=\"tertiary\" href=\"https://www.instagram.com/nekfilipponeviani/\">Instagram</ion-button>\n\n  </ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pagineartisti/nek/nek-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pagineartisti/nek/nek-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: NekPageRoutingModule */

  /***/
  function srcAppPagineartistiNekNekRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NekPageRoutingModule", function () {
      return NekPageRoutingModule;
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


    var _nek_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./nek.page */
    "./src/app/pagineartisti/nek/nek.page.ts");

    const routes = [{
      path: '',
      component: _nek_page__WEBPACK_IMPORTED_MODULE_3__["NekPage"]
    }];
    let NekPageRoutingModule = class NekPageRoutingModule {};
    NekPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], NekPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pagineartisti/nek/nek.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pagineartisti/nek/nek.module.ts ***!
    \*************************************************/

  /*! exports provided: NekPageModule */

  /***/
  function srcAppPagineartistiNekNekModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NekPageModule", function () {
      return NekPageModule;
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


    var _nek_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./nek-routing.module */
    "./src/app/pagineartisti/nek/nek-routing.module.ts");
    /* harmony import */


    var _nek_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./nek.page */
    "./src/app/pagineartisti/nek/nek.page.ts");

    let NekPageModule = class NekPageModule {};
    NekPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _nek_routing_module__WEBPACK_IMPORTED_MODULE_5__["NekPageRoutingModule"]],
      declarations: [_nek_page__WEBPACK_IMPORTED_MODULE_6__["NekPage"]]
    })], NekPageModule);
    /***/
  },

  /***/
  "./src/app/pagineartisti/nek/nek.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/pagineartisti/nek/nek.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagineartistiNekNekPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luZWFydGlzdGkvbmVrL25lay5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pagineartisti/nek/nek.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/pagineartisti/nek/nek.page.ts ***!
    \***********************************************/

  /*! exports provided: NekPage */

  /***/
  function srcAppPagineartistiNekNekPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NekPage", function () {
      return NekPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let NekPage = class NekPage {
      constructor() {}

      ngOnInit() {}

    };
    NekPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-nek',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./nek.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pagineartisti/nek/nek.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./nek.page.scss */
      "./src/app/pagineartisti/nek/nek.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], NekPage);
    /***/
  }
}]);
//# sourceMappingURL=pagineartisti-nek-nek-module-es5.js.map