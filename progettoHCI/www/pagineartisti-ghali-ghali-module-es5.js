(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pagineartisti-ghali-ghali-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pagineartisti/ghali/ghali.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pagineartisti/ghali/ghali.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagineartistiGhaliGhaliPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"Indietro\" defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-nav>\n\n    </ion-nav>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n\n  <ion-item>\n    <ion-avatar slot=\"start\">\n      <img src=\"../assets/artisti/ghali.jpg\">\n    </ion-avatar>\n    <ion-label>\n      <h1>Ghali</h1>\n    </ion-label>\n  </ion-item>\n  <h1>Storia</h1>\n  <p>Nato a Milano da genitori tunisini, ha sempre vissuto nel capoluogo lombardo, trascorrendo buona parte della sua infanzia a Baggio, quartiere della periferia milanese.\n    Ha iniziato ad avvicinarsi all'hip hop utilizzando lo pseudonimo Fobia, poi diventato Ghali Foh. Nel 2011 ha fondato i Troupe D'Elite, gruppo nel quale erano presenti anche il rapper Er Nyah (ora conosciuto come Ernia), la cantante Maite e il produttore Fonzie (ora conosciuto come Fawzi). Nello stesso anno riceve una chiamata dal rapper Gué Pequeno, che lo mette sotto contratto nella sua etichetta Tanta Roba. Con il tempo, si fa conoscere anche grazie a Fedez, accompagnandolo nel suo tour. L'anno successivo pubblica con il gruppo l'EP omonimo: la critica lo definisce come uno dei punti più bassi dell'hip hop italiano, il gruppo è considerato al limite del demenziale. Nel luglio del 2013 Ghali pubblica Leader Mixtape, collaborando con artisti quali Sfera Ebbasta, Maruego ed altri. Un anno dopo i Troupe D'Elite rescindono il contratto con la Tanta Roba e pubblicano l'album Il mio giorno preferito come artisti indipendenti, in download gratuito sulla piattaforma Honiro.</p>\n   <h5><i>fonte: Wikipedia</i></h5>\n\n  <h1>Live</h1>\n<ion-list>\n\n  <ion-item href=\"https://www.ticketone.it/ghali-milano-biglietti.html?affiliate=IGA&doc=artistPages%2Ftickets&fun=artist&action=tickets&key=2343191%2412693407&jumpIn=yTix&kuid=519737&from=erdetaila\">\n    <ion-label><h1><b>Fabrique (Milano)</b></h1>\n      <h3><b>Data:</b> gio, 08/10/20, 21.00</h3>\n    <h4><b>Prezzo medio:</b> €40</h4></ion-label>\n  </ion-item> \n\n</ion-list>\n   <h1>Album</h1>\n\n   <ion-item>\n    <ion-thumbnail slot=\"start\">\n      <img src=\"../assets/album/DNA.jpg\">\n    </ion-thumbnail>\n    <ion-label>DNA</ion-label>\n  </ion-item>\n\n   <ion-item>\n    <ion-thumbnail slot=\"start\">\n      <img src=\"../assets/album/album.jpg\">\n    </ion-thumbnail>\n    <ion-label>Album</ion-label>\n  </ion-item>\n\n   <ion-button size=\"small\" color=\"danger\" href=\"https://www.youtube.com/channel/UCY5rq0soTIK6hPbn8kejgMg\">YouTube</ion-button>\n   <ion-button size=\"small\" href=\"https://www.facebook.com/GhaliOfficial\">Facebook</ion-button>\n   <ion-button size=\"small\" color=\"tertiary\" href=\"https://www.instagram.com/ghali/\">Instagram</ion-button>\n\n  </ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pagineartisti/ghali/ghali-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pagineartisti/ghali/ghali-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: GhaliPageRoutingModule */

  /***/
  function srcAppPagineartistiGhaliGhaliRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GhaliPageRoutingModule", function () {
      return GhaliPageRoutingModule;
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


    var _ghali_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./ghali.page */
    "./src/app/pagineartisti/ghali/ghali.page.ts");

    const routes = [{
      path: '',
      component: _ghali_page__WEBPACK_IMPORTED_MODULE_3__["GhaliPage"]
    }];
    let GhaliPageRoutingModule = class GhaliPageRoutingModule {};
    GhaliPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], GhaliPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pagineartisti/ghali/ghali.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pagineartisti/ghali/ghali.module.ts ***!
    \*****************************************************/

  /*! exports provided: GhaliPageModule */

  /***/
  function srcAppPagineartistiGhaliGhaliModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GhaliPageModule", function () {
      return GhaliPageModule;
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


    var _ghali_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./ghali-routing.module */
    "./src/app/pagineartisti/ghali/ghali-routing.module.ts");
    /* harmony import */


    var _ghali_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./ghali.page */
    "./src/app/pagineartisti/ghali/ghali.page.ts");

    let GhaliPageModule = class GhaliPageModule {};
    GhaliPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ghali_routing_module__WEBPACK_IMPORTED_MODULE_5__["GhaliPageRoutingModule"]],
      declarations: [_ghali_page__WEBPACK_IMPORTED_MODULE_6__["GhaliPage"]]
    })], GhaliPageModule);
    /***/
  },

  /***/
  "./src/app/pagineartisti/ghali/ghali.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/pagineartisti/ghali/ghali.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagineartistiGhaliGhaliPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luZWFydGlzdGkvZ2hhbGkvZ2hhbGkucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pagineartisti/ghali/ghali.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/pagineartisti/ghali/ghali.page.ts ***!
    \***************************************************/

  /*! exports provided: GhaliPage */

  /***/
  function srcAppPagineartistiGhaliGhaliPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GhaliPage", function () {
      return GhaliPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let GhaliPage = class GhaliPage {
      constructor() {}

      ngOnInit() {}

    };
    GhaliPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ghali',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ghali.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pagineartisti/ghali/ghali.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ghali.page.scss */
      "./src/app/pagineartisti/ghali/ghali.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], GhaliPage);
    /***/
  }
}]);
//# sourceMappingURL=pagineartisti-ghali-ghali-module-es5.js.map