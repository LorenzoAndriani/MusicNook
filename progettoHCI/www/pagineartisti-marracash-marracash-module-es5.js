(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pagineartisti-marracash-marracash-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pagineartisti/marracash/marracash.page.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pagineartisti/marracash/marracash.page.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagineartistiMarracashMarracashPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"Indietro\" defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-nav>\n\n    </ion-nav>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n\n  <ion-item>\n    <ion-avatar slot=\"start\">\n      <img src=\"../assets/artisti/marracash.jpg\">\n    </ion-avatar>\n    <ion-label>\n      <h1>Marracash</h1>\n    </ion-label>\n  </ion-item>\n  <h1>Storia</h1>\n  <p>Marracash, pseudonimo di Fabio Bartolo Rizzo[3] (Nicosia, 22 maggio 1979), è un rapper e produttore discografico italiano.\n    Ha esordito ufficialmente nel 2005 con il mixtape autoprodotto Roccia Music I, il quale ha visto la partecipazione del collettivo Dogo Gang e di altri artisti appartenenti alla scena hip hop italiana. Il mixtape ha ottenuto un riscontro significativo nell'underground e lo ha portato alla firma di un contratto discografico con la Universal Music Group, con la quale nel 2008 ha pubblicato il primo album solista, l'omonimo Marracash.</p>\n   <h5><i>fonte: Wikipedia</i></h5>\n\n  <h1>Live</h1>\n<ion-list>\n\n  <ion-item href=\"https://www.ticketone.it/marracash-biglietti.html?affiliate=ITT&doc=artistPages%2Ftickets&fun=artist&action=tickets&erid=2620248&kuid=464447\">\n    <ion-label><h1><b>Persona Tour (Tutta Italia)</b></h1>\n      <h3><b>Data:</b> 28/03/20 - 01/11/20</h3>\n    <h4><b>Prezzo medio:</b> €25-€40</h4></ion-label>\n  </ion-item> \n\n</ion-list>\n   <h1>Album</h1>\n\n   <ion-item>\n    <ion-thumbnail slot=\"start\">\n      <img src=\"../assets/album/persona.jpg\">\n    </ion-thumbnail>\n    <ion-label>Persona</ion-label>\n  </ion-item>\n\n   <ion-item>\n    <ion-thumbnail slot=\"start\">\n      <img src=\"../assets/album/status.jpg\">\n    </ion-thumbnail>\n    <ion-label>Status</ion-label>\n  </ion-item>\n\n   <ion-item>\n    <ion-thumbnail slot=\"start\">\n      <img src=\"../assets/album/king.jpg\">\n    </ion-thumbnail>\n    <ion-label>King del Rap</ion-label>\n  </ion-item>\n\n  <ion-item>\n    <ion-thumbnail slot=\"start\">\n      <img src=\"../assets/album/tutto-bene.png\">\n    </ion-thumbnail>\n    <ion-label>Fino a qui tutto bene</ion-label>\n  </ion-item>\n\n  <ion-item>\n    <ion-thumbnail slot=\"start\">\n      <img src=\"../assets/album/marracash.jpg\">\n    </ion-thumbnail>\n    <ion-label>Marracash</ion-label>\n  </ion-item>\n\n   <h1>Singoli</h1>\n\n   <ion-item>\n    <ion-thumbnail slot=\"start\">\n      <img src=\"../assets/album/ali.jpg\">\n    </ion-thumbnail>\n    <ion-label>NEON - Le Ali (feat. Elisa)</ion-label>\n  </ion-item>\n\n   <ion-button size=\"small\" color=\"danger\" href=\"https://www.youtube.com/channel/UC7-W9R7Rb_6gk5zEcgFcdLg\">YouTube</ion-button>\n   <ion-button size=\"small\" href=\"https://www.facebook.com/Marracash\">Facebook</ion-button>\n   <ion-button size=\"small\" color=\"tertiary\" href=\"https://www.instagram.com/kingmarracash/\">Instagram</ion-button>\n\n  </ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pagineartisti/marracash/marracash-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/pagineartisti/marracash/marracash-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: MarracashPageRoutingModule */

  /***/
  function srcAppPagineartistiMarracashMarracashRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MarracashPageRoutingModule", function () {
      return MarracashPageRoutingModule;
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


    var _marracash_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./marracash.page */
    "./src/app/pagineartisti/marracash/marracash.page.ts");

    const routes = [{
      path: '',
      component: _marracash_page__WEBPACK_IMPORTED_MODULE_3__["MarracashPage"]
    }];
    let MarracashPageRoutingModule = class MarracashPageRoutingModule {};
    MarracashPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MarracashPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pagineartisti/marracash/marracash.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pagineartisti/marracash/marracash.module.ts ***!
    \*************************************************************/

  /*! exports provided: MarracashPageModule */

  /***/
  function srcAppPagineartistiMarracashMarracashModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MarracashPageModule", function () {
      return MarracashPageModule;
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


    var _marracash_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./marracash-routing.module */
    "./src/app/pagineartisti/marracash/marracash-routing.module.ts");
    /* harmony import */


    var _marracash_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./marracash.page */
    "./src/app/pagineartisti/marracash/marracash.page.ts");

    let MarracashPageModule = class MarracashPageModule {};
    MarracashPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _marracash_routing_module__WEBPACK_IMPORTED_MODULE_5__["MarracashPageRoutingModule"]],
      declarations: [_marracash_page__WEBPACK_IMPORTED_MODULE_6__["MarracashPage"]]
    })], MarracashPageModule);
    /***/
  },

  /***/
  "./src/app/pagineartisti/marracash/marracash.page.scss":
  /*!*************************************************************!*\
    !*** ./src/app/pagineartisti/marracash/marracash.page.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagineartistiMarracashMarracashPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luZWFydGlzdGkvbWFycmFjYXNoL21hcnJhY2FzaC5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pagineartisti/marracash/marracash.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pagineartisti/marracash/marracash.page.ts ***!
    \***********************************************************/

  /*! exports provided: MarracashPage */

  /***/
  function srcAppPagineartistiMarracashMarracashPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MarracashPage", function () {
      return MarracashPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let MarracashPage = class MarracashPage {
      constructor() {}

      ngOnInit() {}

    };
    MarracashPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-marracash',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./marracash.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pagineartisti/marracash/marracash.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./marracash.page.scss */
      "./src/app/pagineartisti/marracash/marracash.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], MarracashPage);
    /***/
  }
}]);
//# sourceMappingURL=pagineartisti-marracash-marracash-module-es5.js.map