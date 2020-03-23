(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pagineartisti-fedez-fedez-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pagineartisti/fedez/fedez.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pagineartisti/fedez/fedez.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagineartistiFedezFedezPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"Indietro\" defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-nav>\n\n    </ion-nav>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n\n  <ion-item>\n    <ion-avatar slot=\"start\">\n      <img src=\"../assets/artisti/fedez.jpg\">\n    </ion-avatar>\n    <ion-label>\n      <h1>Fedez</h1>\n    </ion-label>\n  </ion-item>\n  <h1>Storia</h1>\n  <p>Fedez è nato a Milano il 15 ottobre 1989 ma è cresciuto a Buccinasco. La sua famiglia è originaria di Castel Lagopesole, provincia di Potenza e ha dichiarato che tra i suoi avi figura il brigante Ninco Nanco. Durante l'adolescenza ha frequentato il liceo artistico, abbandonando tuttavia gli studi al quarto anno per focalizzarsi sulla musica.\n    Nel 2007 ha realizzato il suo primo EP Pat-a-Cake, mentre tre anni più tardi ha pubblicato il suo primo mixtape BCPT, a cui hanno collaborato artisti appartenenti alla scena rap italiana come Emis Killa, G. Soave e Maxi B. Nel 2010 ha inoltre realizzato e pubblicato il secondo EP Diss-Agio, in collaborazione con Vincenzo da Via Anfossi e Dinamite e prodotto da JT.</p>\n   <h5><i>fonte: Wikipedia</i></h5>\n\n   <h1>Album</h1>\n\n   <ion-item>\n    <ion-thumbnail slot=\"start\">\n      <img src=\"../assets/album/paranoia.jpg\">\n    </ion-thumbnail>\n    <ion-label>Paranoia Airlines</ion-label>\n  </ion-item>\n\n   <ion-item>\n    <ion-thumbnail slot=\"start\">\n      <img src=\"../assets/album/pop-hoolista.jpg\">\n    </ion-thumbnail>\n    <ion-label>Pop-hoolista</ion-label>\n  </ion-item>\n\n   <ion-item>\n    <ion-thumbnail slot=\"start\">\n      <img src=\"../assets/album/signor.jpg\">\n    </ion-thumbnail>\n    <ion-label>Sig. Brainwash - L'arte di accontentare</ion-label>\n  </ion-item>\n\n  <ion-item>\n    <ion-thumbnail slot=\"start\">\n      <img src=\"../assets/album/venduto.jpg\">\n    </ion-thumbnail>\n    <ion-label>Il mio primo disco da venduto</ion-label>\n  </ion-item>\n\n  <ion-item>\n    <ion-thumbnail slot=\"start\">\n      <img src=\"../assets/album/penisola.jpg\">\n    </ion-thumbnail>\n    <ion-label>Penisola che non c'è</ion-label>\n  </ion-item>\n\n   <ion-button size=\"small\" color=\"danger\" href=\"https://www.youtube.com/user/FedezChanneL\">YouTube</ion-button>\n   <ion-button size=\"small\" href=\"https://www.facebook.com/fedezofficial/\">Facebook</ion-button>\n   <ion-button size=\"small\" color=\"tertiary\" href=\"https://www.instagram.com/fedez/\">Instagram</ion-button>\n\n  </ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pagineartisti/fedez/fedez-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pagineartisti/fedez/fedez-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: FedezPageRoutingModule */

  /***/
  function srcAppPagineartistiFedezFedezRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FedezPageRoutingModule", function () {
      return FedezPageRoutingModule;
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


    var _fedez_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./fedez.page */
    "./src/app/pagineartisti/fedez/fedez.page.ts");

    const routes = [{
      path: '',
      component: _fedez_page__WEBPACK_IMPORTED_MODULE_3__["FedezPage"]
    }];
    let FedezPageRoutingModule = class FedezPageRoutingModule {};
    FedezPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], FedezPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pagineartisti/fedez/fedez.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pagineartisti/fedez/fedez.module.ts ***!
    \*****************************************************/

  /*! exports provided: FedezPageModule */

  /***/
  function srcAppPagineartistiFedezFedezModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FedezPageModule", function () {
      return FedezPageModule;
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


    var _fedez_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./fedez-routing.module */
    "./src/app/pagineartisti/fedez/fedez-routing.module.ts");
    /* harmony import */


    var _fedez_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./fedez.page */
    "./src/app/pagineartisti/fedez/fedez.page.ts");

    let FedezPageModule = class FedezPageModule {};
    FedezPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _fedez_routing_module__WEBPACK_IMPORTED_MODULE_5__["FedezPageRoutingModule"]],
      declarations: [_fedez_page__WEBPACK_IMPORTED_MODULE_6__["FedezPage"]]
    })], FedezPageModule);
    /***/
  },

  /***/
  "./src/app/pagineartisti/fedez/fedez.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/pagineartisti/fedez/fedez.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagineartistiFedezFedezPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luZWFydGlzdGkvZmVkZXovZmVkZXoucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pagineartisti/fedez/fedez.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/pagineartisti/fedez/fedez.page.ts ***!
    \***************************************************/

  /*! exports provided: FedezPage */

  /***/
  function srcAppPagineartistiFedezFedezPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FedezPage", function () {
      return FedezPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let FedezPage = class FedezPage {
      constructor() {}

      ngOnInit() {}

    };
    FedezPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-fedez',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./fedez.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pagineartisti/fedez/fedez.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./fedez.page.scss */
      "./src/app/pagineartisti/fedez/fedez.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], FedezPage);
    /***/
  }
}]);
//# sourceMappingURL=pagineartisti-fedez-fedez-module-es5.js.map