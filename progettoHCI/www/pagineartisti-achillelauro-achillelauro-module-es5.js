(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pagineartisti-achillelauro-achillelauro-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pagineartisti/achillelauro/achillelauro.page.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pagineartisti/achillelauro/achillelauro.page.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagineartistiAchillelauroAchillelauroPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"Indietro\" defaultHref=\"\"></ion-back-button>\n    </ion-buttons>\n    <ion-nav>\n\n    </ion-nav>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n\n  <ion-item>\n    <ion-avatar slot=\"start\">\n      <img src=\"../assets/artisti/achille-lauro.jpg\">\n    </ion-avatar>\n    <ion-label>\n      <h1>Achille Lauro</h1>\n    </ion-label>\n  </ion-item>\n\n  <h1>Storia</h1>\n  <p>Achille Lauro, pseudonimo di Lauro De Marinis (Verona, 11 luglio 1990), è un rapper e cantante italiano.</p>\n\n   <p>Noto per i suoi lavori nell'Hip Hop, ha preso parte alla 69ª edizione del Festival di Sanremo con il brano \"Rolls Royce\" e alla 70ª edizione con il brano \"Me ne frego\".</p>\n\n   <h5><i>fonte: Wikipedia</i></h5>\n\n  <h1>Live</h1>\n<ion-list>\n  <ion-item nav-clear href=\"https://www.ticketone.it/achille-lauro-milano-biglietti.html?affiliate=ITT&doc=artistPages%2Ftickets&fun=artist&action=tickets&key=2601595%2412793033&jumpIn=yTix&kuid=532635&from=erdetaila\">\n    <ion-label><h1><b>Lorenzini District (Milano)</b></h1>\n      <h3><b>Data:</b> sab, 17/10/20, 21.00</h3>\n    <h4><b>Prezzo medio:</b> €40</h4></ion-label>\n  </ion-item> \n\n</ion-list>\n   <h1>Album</h1>\n\n   <ion-item>\n    <ion-thumbnail slot=\"start\">\n      <img src=\"../assets/album/1969.jpg\">\n    </ion-thumbnail>\n    <ion-label>1969</ion-label>\n  </ion-item>\n\n   <ion-item>\n    <ion-thumbnail slot=\"start\">\n      <img src=\"../assets/album/pour-lamour.jpg\">\n    </ion-thumbnail>\n    <ion-label>Pour l'amour</ion-label>\n  </ion-item>\n\n   <ion-item>\n    <ion-thumbnail slot=\"start\">\n      <img src=\"../assets/album/ragazzi-madre.jpg\">\n    </ion-thumbnail>\n    <ion-label>Ragazzi Madre</ion-label>\n  </ion-item>\n\n  <ion-item>\n    <ion-thumbnail slot=\"start\">\n      <img src=\"../assets/album/dio-ce.jpg\">\n    </ion-thumbnail>\n    <ion-label>Dio c'è</ion-label>\n  </ion-item>\n\n  <ion-item>\n    <ion-thumbnail slot=\"start\">\n      <img src=\"../assets/album/achille-idol-immortale.jpeg\">\n    </ion-thumbnail>\n    <ion-label>Achille Idol Immortale</ion-label>\n  </ion-item>\n\n   <h1>Singoli</h1>\n\n   <ion-item>\n    <ion-thumbnail slot=\"start\">\n      <img src=\"../assets/album/me-ne-frego.jpg\">\n    </ion-thumbnail>\n    <ion-label>Me ne frego</ion-label>\n  </ion-item>\n\n   <ion-button size=\"small\" color=\"danger\" href=\"https://www.youtube.com/channel/UCBn0LqkY6sTa1iw-NQOGEbA\">YouTube</ion-button>\n   <ion-button size=\"small\" href=\"https://www.facebook.com/AchilleL/\">Facebook</ion-button>\n   <ion-button size=\"small\" color=\"tertiary\" href=\"https://www.instagram.com/achilleidol/\">Instagram</ion-button>\n\n  </ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pagineartisti/achillelauro/achillelauro-routing.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/pagineartisti/achillelauro/achillelauro-routing.module.ts ***!
    \***************************************************************************/

  /*! exports provided: AchillelauroPageRoutingModule */

  /***/
  function srcAppPagineartistiAchillelauroAchillelauroRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AchillelauroPageRoutingModule", function () {
      return AchillelauroPageRoutingModule;
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


    var _achillelauro_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./achillelauro.page */
    "./src/app/pagineartisti/achillelauro/achillelauro.page.ts");

    const routes = [{
      path: '',
      component: _achillelauro_page__WEBPACK_IMPORTED_MODULE_3__["AchillelauroPage"]
    }];
    let AchillelauroPageRoutingModule = class AchillelauroPageRoutingModule {};
    AchillelauroPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AchillelauroPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pagineartisti/achillelauro/achillelauro.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pagineartisti/achillelauro/achillelauro.module.ts ***!
    \*******************************************************************/

  /*! exports provided: AchillelauroPageModule */

  /***/
  function srcAppPagineartistiAchillelauroAchillelauroModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AchillelauroPageModule", function () {
      return AchillelauroPageModule;
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


    var _achillelauro_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./achillelauro-routing.module */
    "./src/app/pagineartisti/achillelauro/achillelauro-routing.module.ts");
    /* harmony import */


    var _achillelauro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./achillelauro.page */
    "./src/app/pagineartisti/achillelauro/achillelauro.page.ts");

    let AchillelauroPageModule = class AchillelauroPageModule {};
    AchillelauroPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _achillelauro_routing_module__WEBPACK_IMPORTED_MODULE_5__["AchillelauroPageRoutingModule"]],
      declarations: [_achillelauro_page__WEBPACK_IMPORTED_MODULE_6__["AchillelauroPage"]]
    })], AchillelauroPageModule);
    /***/
  },

  /***/
  "./src/app/pagineartisti/achillelauro/achillelauro.page.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/pagineartisti/achillelauro/achillelauro.page.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagineartistiAchillelauroAchillelauroPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luZWFydGlzdGkvYWNoaWxsZWxhdXJvL2FjaGlsbGVsYXVyby5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pagineartisti/achillelauro/achillelauro.page.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pagineartisti/achillelauro/achillelauro.page.ts ***!
    \*****************************************************************/

  /*! exports provided: AchillelauroPage */

  /***/
  function srcAppPagineartistiAchillelauroAchillelauroPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AchillelauroPage", function () {
      return AchillelauroPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    let AchillelauroPage = class AchillelauroPage {
      constructor(navCtrl) {
        this.navCtrl = navCtrl;
      }

      ngOnInit() {}

    };

    AchillelauroPage.ctorParameters = () => [{
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
    }];

    AchillelauroPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-achillelauro',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./achillelauro.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pagineartisti/achillelauro/achillelauro.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./achillelauro.page.scss */
      "./src/app/pagineartisti/achillelauro/achillelauro.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])], AchillelauroPage);
    /***/
  }
}]);
//# sourceMappingURL=pagineartisti-achillelauro-achillelauro-module-es5.js.map