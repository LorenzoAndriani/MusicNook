(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pagineartisti-salmo-salmo-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pagineartisti/salmo/salmo.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pagineartisti/salmo/salmo.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagineartistiSalmoSalmoPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"Indietro\" defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-nav>\n\n    </ion-nav>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n\n  <ion-item>\n    <ion-avatar slot=\"start\">\n      <img src=\"../assets/artisti/salmo.jpg\">\n    </ion-avatar>\n    <ion-label>\n      <h1>Salmo</h1>\n    </ion-label>\n  </ion-item>\n  <h1>Storia</h1>\n  <p>Salmo, pseudonimo di Maurizio Pisciottu (Olbia, 29 giugno 1984), è un rapper e produttore discografico italiano.\n    Salmo ha iniziato la sua carriera musicale all'età di 13 anni, incidendo le sue prime rime tra il 1997 e il 1998. Nel 1999 ha realizzato e pubblicato i demo Premeditazione e dolo con i rapper olbiesi Bigfoot e Scascio (con i quali formava il gruppo Premeditazione e Dolo), mentre nel 2004 ha pubblicato il primo demo da solista, intitolato Sotto pelle; l'anno successivo ha autoprodotto e pubblicato il secondo demo Mr. Antipatia\n    Alla sua carriera da solista, Salmo ha affiancato anche alcuni progetti con diversi gruppi, a partire dal gruppo musicale rap metal Skasico, con i quali ha inciso e prodotto gli album Terapia (2004), 21 Grams (2006) e Orange Bloom (2008); nel 2008 invece ha collaborato con il gruppo hardcore punk To Ed Gein alla produzione di Toedgein (2008) e di Shell Shock (2011), mentre nel 2009 ha prodotto l'EP Merciful Bullets del gruppo stoner rock Three Pigs' Trip.</p>\n   <h5><i>fonte: Wikipedia</i></h5>\n\n  <h1>Live</h1>\n<ion-list>\n\n  <ion-item href=\"https://www.ticketone.it/salmo-milano-biglietti.html?affiliate=IGA&doc=artistPages%2Ftickets&fun=artist&action=tickets&key=2504002%2412394557&jumpIn=yTix&kuid=468113&from=erdetaila\">\n    <ion-label><h1><b>Stadio San Siro (Milano)</b></h1>\n      <h3><b>Data:</b> dom, 14/06/20, 21.00</h3>\n    <h4><b>Prezzo medio:</b> €40-€60</h4></ion-label>\n  </ion-item> \n\n</ion-list>\n   <h1>Album</h1>\n\n   <ion-item>\n    <ion-thumbnail slot=\"start\">\n      <img src=\"../assets/album/playlist.jpg\">\n    </ion-thumbnail>\n    <ion-label>Playlist</ion-label>\n  </ion-item>\n\n   <ion-item>\n    <ion-thumbnail slot=\"start\">\n      <img src=\"../assets/album/hellvisback.jpg\">\n    </ion-thumbnail>\n    <ion-label>Hellvisback</ion-label>\n  </ion-item>\n\n  <ion-item>\n    <ion-thumbnail slot=\"start\">\n      <img src=\"../assets/album/midnite.jpg\">\n    </ion-thumbnail>\n    <ion-label>Midnite</ion-label>\n  </ion-item>\n\n  <ion-item>\n    <ion-thumbnail slot=\"start\">\n      <img src=\"../assets/album/USB.jpg\">\n    </ion-thumbnail>\n    <ion-label>Death USB</ion-label>\n  </ion-item>\n\n  <ion-item>\n    <ion-thumbnail slot=\"start\">\n      <img src=\"../assets/album/island.jpg\">\n    </ion-thumbnail>\n    <ion-label>The Island Chainsaw Massacre</ion-label>\n  </ion-item>\n\n   <ion-button size=\"small\" color=\"danger\" href=\"https://www.youtube.com/channel/UCxPh2QJU5qTvOqxnOPTBskw\">YouTube</ion-button>\n   <ion-button size=\"small\" href=\"https://www.facebook.com/salmoofficial\">Facebook</ion-button>\n   <ion-button size=\"small\" color=\"tertiary\" href=\"https://www.instagram.com/lebonwski/\">Instagram</ion-button>\n\n  </ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pagineartisti/salmo/salmo-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pagineartisti/salmo/salmo-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: SalmoPageRoutingModule */

  /***/
  function srcAppPagineartistiSalmoSalmoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SalmoPageRoutingModule", function () {
      return SalmoPageRoutingModule;
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


    var _salmo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./salmo.page */
    "./src/app/pagineartisti/salmo/salmo.page.ts");

    const routes = [{
      path: '',
      component: _salmo_page__WEBPACK_IMPORTED_MODULE_3__["SalmoPage"]
    }];
    let SalmoPageRoutingModule = class SalmoPageRoutingModule {};
    SalmoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SalmoPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pagineartisti/salmo/salmo.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pagineartisti/salmo/salmo.module.ts ***!
    \*****************************************************/

  /*! exports provided: SalmoPageModule */

  /***/
  function srcAppPagineartistiSalmoSalmoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SalmoPageModule", function () {
      return SalmoPageModule;
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


    var _salmo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./salmo-routing.module */
    "./src/app/pagineartisti/salmo/salmo-routing.module.ts");
    /* harmony import */


    var _salmo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./salmo.page */
    "./src/app/pagineartisti/salmo/salmo.page.ts");

    let SalmoPageModule = class SalmoPageModule {};
    SalmoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _salmo_routing_module__WEBPACK_IMPORTED_MODULE_5__["SalmoPageRoutingModule"]],
      declarations: [_salmo_page__WEBPACK_IMPORTED_MODULE_6__["SalmoPage"]]
    })], SalmoPageModule);
    /***/
  },

  /***/
  "./src/app/pagineartisti/salmo/salmo.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/pagineartisti/salmo/salmo.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagineartistiSalmoSalmoPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luZWFydGlzdGkvc2FsbW8vc2FsbW8ucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pagineartisti/salmo/salmo.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/pagineartisti/salmo/salmo.page.ts ***!
    \***************************************************/

  /*! exports provided: SalmoPage */

  /***/
  function srcAppPagineartistiSalmoSalmoPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SalmoPage", function () {
      return SalmoPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let SalmoPage = class SalmoPage {
      constructor() {}

      ngOnInit() {}

    };
    SalmoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-salmo',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./salmo.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pagineartisti/salmo/salmo.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./salmo.page.scss */
      "./src/app/pagineartisti/salmo/salmo.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], SalmoPage);
    /***/
  }
}]);
//# sourceMappingURL=pagineartisti-salmo-salmo-module-es5.js.map