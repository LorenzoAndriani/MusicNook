(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pagineartisti-davidecalandra-davidecalandra-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pagineartisti/davidecalandra/davidecalandra.page.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pagineartisti/davidecalandra/davidecalandra.page.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagineartistiDavidecalandraDavidecalandraPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"Indietro\" defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-nav>\n\n    </ion-nav>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n\n  <ion-item>\n    <ion-avatar slot=\"start\">\n      <img src=\"../assets/artisti/davide-calandra.jpg\">\n    </ion-avatar>\n    <ion-label>\n      <h1>Davide Calandra</h1>\n    </ion-label>\n  </ion-item>\n  <h1>Storia</h1>\n  <p>Davide Calandra all’anagrafe Davide Calandra Sebastianella, figlio unico di Giuseppe e Fiorenza, nipote di Leonardo, Maria, Ivo e Grazia, conosciuto anche come Devid e DIECI è un rapper, cantautore e produttore italiano proveniente dalla periferia Pistoiese precisamente da Montale. Ha iniziato la sua carriera musicale producendo e scrivendo le proprie canzoni arrivando a vincere sin da piccolo i più svariati contest live ed on line di rap italiano e non. Gli argomenti trattati,la scrittura, la metrica, la dizione in extrabeat, la melodicità e le produzioni proprie lo hanno fatto emergere tra i suoi coetanei, così da firmare il suo primo contratto discografico per la pubblicazione del suo primo disco dal nome “Effetto Placebo” nel 2016 con all’interno vari feat tra cui anche “Ponte” componente dei “Sierra”. Negli anni successivi pubblica i singoli “Acqua di Mare” “Anime Gemelle” prodotta da “ Evrint Bless” ed una trilogia chiamata “Technology Remixes” contente un brano remixato da due diversi dj Internazionali.</p>\n\n   <h5><i>fonte: Spotify</i></h5>\n\n   <h1>Album</h1>\n\n   <ion-item>\n    <ion-thumbnail slot=\"start\">\n      <img src=\"../assets/album/effetto-placebo.jpg\">\n    </ion-thumbnail>\n    <ion-label>Effetto Placebo</ion-label>\n  </ion-item>\n\n\n   <h1>Singoli</h1>\n\n   <ion-item>\n    <ion-thumbnail slot=\"start\">\n      <img src=\"../assets/album/nient-altro.jpg\">\n    </ion-thumbnail>\n    <ion-label>Nient'altro</ion-label>\n  </ion-item>\n\n  <ion-item>\n    <ion-thumbnail slot=\"start\">\n      <img src=\"../assets/album/numeri.jpg\">\n    </ion-thumbnail>\n    <ion-label>Numeri</ion-label>\n  </ion-item>\n\n  <ion-item>\n    <ion-thumbnail slot=\"start\">\n      <img src=\"../assets/album/gucci-mama.jpg\">\n    </ion-thumbnail>\n    <ion-label>Gucci Mama (feat. Drez Klef)</ion-label>\n  </ion-item>\n\n   <ion-button size=\"small\" color=\"danger\" href=\"https://www.youtube.com/user/TheDAVIDCALA\">YouTube</ion-button>\n   <ion-button size=\"small\" href=\"https://www.facebook.com/davidecalandra10/?eid=ARA48gLEgtYA3IHfjJt55_nLER5ZZerQ1qrOPW1osnpfdD6pZJ0uyUqm_sV6fyWrGwhgscrt-rSHzaEH&timeline_context_item_type=intro_card_work&timeline_context_item_source=1848086269&fref=tag\">Facebook</ion-button>\n   <ion-button size=\"small\" color=\"tertiary\" href=\"https://www.instagram.com/davidecalandras/\">Instagram</ion-button>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pagineartisti/davidecalandra/davidecalandra-routing.module.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/pagineartisti/davidecalandra/davidecalandra-routing.module.ts ***!
    \*******************************************************************************/

  /*! exports provided: DavidecalandraPageRoutingModule */

  /***/
  function srcAppPagineartistiDavidecalandraDavidecalandraRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DavidecalandraPageRoutingModule", function () {
      return DavidecalandraPageRoutingModule;
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


    var _davidecalandra_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./davidecalandra.page */
    "./src/app/pagineartisti/davidecalandra/davidecalandra.page.ts");

    const routes = [{
      path: '',
      component: _davidecalandra_page__WEBPACK_IMPORTED_MODULE_3__["DavidecalandraPage"]
    }];
    let DavidecalandraPageRoutingModule = class DavidecalandraPageRoutingModule {};
    DavidecalandraPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DavidecalandraPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pagineartisti/davidecalandra/davidecalandra.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/pagineartisti/davidecalandra/davidecalandra.module.ts ***!
    \***********************************************************************/

  /*! exports provided: DavidecalandraPageModule */

  /***/
  function srcAppPagineartistiDavidecalandraDavidecalandraModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DavidecalandraPageModule", function () {
      return DavidecalandraPageModule;
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


    var _davidecalandra_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./davidecalandra-routing.module */
    "./src/app/pagineartisti/davidecalandra/davidecalandra-routing.module.ts");
    /* harmony import */


    var _davidecalandra_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./davidecalandra.page */
    "./src/app/pagineartisti/davidecalandra/davidecalandra.page.ts");

    let DavidecalandraPageModule = class DavidecalandraPageModule {};
    DavidecalandraPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _davidecalandra_routing_module__WEBPACK_IMPORTED_MODULE_5__["DavidecalandraPageRoutingModule"]],
      declarations: [_davidecalandra_page__WEBPACK_IMPORTED_MODULE_6__["DavidecalandraPage"]]
    })], DavidecalandraPageModule);
    /***/
  },

  /***/
  "./src/app/pagineartisti/davidecalandra/davidecalandra.page.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/pagineartisti/davidecalandra/davidecalandra.page.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagineartistiDavidecalandraDavidecalandraPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luZWFydGlzdGkvZGF2aWRlY2FsYW5kcmEvZGF2aWRlY2FsYW5kcmEucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pagineartisti/davidecalandra/davidecalandra.page.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/pagineartisti/davidecalandra/davidecalandra.page.ts ***!
    \*********************************************************************/

  /*! exports provided: DavidecalandraPage */

  /***/
  function srcAppPagineartistiDavidecalandraDavidecalandraPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DavidecalandraPage", function () {
      return DavidecalandraPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let DavidecalandraPage = class DavidecalandraPage {
      constructor() {}

      ngOnInit() {}

    };
    DavidecalandraPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-davidecalandra',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./davidecalandra.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pagineartisti/davidecalandra/davidecalandra.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./davidecalandra.page.scss */
      "./src/app/pagineartisti/davidecalandra/davidecalandra.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], DavidecalandraPage);
    /***/
  }
}]);
//# sourceMappingURL=pagineartisti-davidecalandra-davidecalandra-module-es5.js.map