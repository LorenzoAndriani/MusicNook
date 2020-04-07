(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pagineartisti-nitro-nitro-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pagineartisti/nitro/nitro.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pagineartisti/nitro/nitro.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagineartistiNitroNitroPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"Indietro\" defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-nav>\n\n    </ion-nav>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n\n  <ion-item>\n    <ion-avatar slot=\"start\">\n      <img src=\"../assets/artisti/nitro.jpg\">\n    </ion-avatar>\n    <ion-label>\n      <h1>Nitro</h1>\n    </ion-label>\n  </ion-item>\n  <h1>Storia</h1>\n  <p>Si è avvicinato alla cultura hip hop grazie al freestyle. Ha iniziato militando nel collettivo Gioventù Bruciata, insieme all'MC Moova e al produttore CeCe DuB e con i quali ha pubblicato nel 2010 il mixtape Born2Burn. Nel 2007 ha partecipato al suo primo Tecniche Perfette, arrivando alla semifinale della selezione regionale.Da lì ha continuato a partecipare alle battaglie di freestyle, vincendo nei due anni seguenti la fase regionale del Tecniche Perfette, conquistando la finale nazionale per due volte e arrivando sempre tra i primi quattro.\n    Dopo l'esperienza del Tecniche Perfette, Nitro ha partecipato al contest organizzato da Radio Sherwood a Padova, vincendolo. L'esperienza dal vivo lo porta a far parte, sotto lo pseudonimo di Wilson Kemper, dei The Villains gruppo composto anche da Moova, Venom e Zethone. Questo progetto, ispirato al lato oscuro della fumettistica e del cinema, unisce diversi generi quali hip hop, dubstep, elettronica ed hardcore.</p>\n   <h5><i>fonte: Wikipedia</i></h5>\n\n  <h1>Live</h1>\n<ion-list>\n\n  <ion-item href=\"https://www.ticketone.it/achille-lauro-milano-biglietti.html?affiliate=ITT&doc=artistPages%2Ftickets&fun=artist&action=tickets&key=2601595%2412793033&jumpIn=yTix&kuid=532635&from=erdetaila\">\n    <ion-label><h1><b>Lorenzini District (Milano)</b></h1>\n      <h3><b>Data:</b> sab, 17/10/20, 21.00</h3>\n    <h4><b>Prezzo medio:</b> €40</h4></ion-label>\n  </ion-item> \n\n</ion-list>\n   <h1>Album</h1>\n\n   <ion-item>\n    <ion-thumbnail slot=\"start\">\n      <img src=\"../assets/album/garbage.jpg\">\n    </ion-thumbnail>\n    <ion-label>GarbAge</ion-label>\n  </ion-item>\n\n   <ion-item>\n    <ion-thumbnail slot=\"start\">\n      <img src=\"../assets/album/no-comment.jpg\">\n    </ion-thumbnail>\n    <ion-label>No Comment</ion-label>\n  </ion-item>\n\n   <ion-item>\n    <ion-thumbnail slot=\"start\">\n      <img src=\"../assets/album/suicidol.jpg\">\n    </ion-thumbnail>\n    <ion-label>Suicidol</ion-label>\n  </ion-item>\n\n  <ion-item>\n    <ion-thumbnail slot=\"start\">\n      <img src=\"../assets/album/danger.jpg\">\n    </ion-thumbnail>\n    <ion-label>Danger</ion-label>\n  </ion-item>\n\n   <ion-button size=\"small\" color=\"danger\" href=\"https://www.youtube.com/channel/UCh-RZKbzquLB8oMsNiFZo5A\">YouTube</ion-button>\n   <ion-button size=\"small\" href=\"https://www.facebook.com/nitrowilson/\">Facebook</ion-button>\n   <ion-button size=\"small\" color=\"tertiary\" href=\"https://www.instagram.com/robertdenitro/\">Instagram</ion-button>\n\n  </ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pagineartisti/nitro/nitro-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pagineartisti/nitro/nitro-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: NitroPageRoutingModule */

  /***/
  function srcAppPagineartistiNitroNitroRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NitroPageRoutingModule", function () {
      return NitroPageRoutingModule;
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


    var _nitro_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./nitro.page */
    "./src/app/pagineartisti/nitro/nitro.page.ts");

    const routes = [{
      path: '',
      component: _nitro_page__WEBPACK_IMPORTED_MODULE_3__["NitroPage"]
    }];
    let NitroPageRoutingModule = class NitroPageRoutingModule {};
    NitroPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], NitroPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pagineartisti/nitro/nitro.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pagineartisti/nitro/nitro.module.ts ***!
    \*****************************************************/

  /*! exports provided: NitroPageModule */

  /***/
  function srcAppPagineartistiNitroNitroModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NitroPageModule", function () {
      return NitroPageModule;
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


    var _nitro_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./nitro-routing.module */
    "./src/app/pagineartisti/nitro/nitro-routing.module.ts");
    /* harmony import */


    var _nitro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./nitro.page */
    "./src/app/pagineartisti/nitro/nitro.page.ts");

    let NitroPageModule = class NitroPageModule {};
    NitroPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _nitro_routing_module__WEBPACK_IMPORTED_MODULE_5__["NitroPageRoutingModule"]],
      declarations: [_nitro_page__WEBPACK_IMPORTED_MODULE_6__["NitroPage"]]
    })], NitroPageModule);
    /***/
  },

  /***/
  "./src/app/pagineartisti/nitro/nitro.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/pagineartisti/nitro/nitro.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagineartistiNitroNitroPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luZWFydGlzdGkvbml0cm8vbml0cm8ucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pagineartisti/nitro/nitro.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/pagineartisti/nitro/nitro.page.ts ***!
    \***************************************************/

  /*! exports provided: NitroPage */

  /***/
  function srcAppPagineartistiNitroNitroPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NitroPage", function () {
      return NitroPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let NitroPage = class NitroPage {
      constructor() {}

      ngOnInit() {}

    };
    NitroPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-nitro',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./nitro.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pagineartisti/nitro/nitro.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./nitro.page.scss */
      "./src/app/pagineartisti/nitro/nitro.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], NitroPage);
    /***/
  }
}]);
//# sourceMappingURL=pagineartisti-nitro-nitro-module-es5.js.map