(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = " <ion-header>\n  <ion-toolbar>\n    <!-- MENU\n      <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>-->\n       <ion-title>Home</ion-title>\n<!--<div class=\"settings\">\n <ion-icon name=\"cog-outline\" size=\"large\"></ion-icon>\n</div>-->\n</ion-toolbar>\n</ion-header>\n\n  <!-- ALTRO\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n    </ion-toolbar>\n  \n  <ion-header [translucent]=\"true\">\n    \n  </ion-header>\n  <ion-content [fullscreen]=\"true\">\n    <ion-header collapse=\"condense\">\n    </ion-header>-->\n  \n   <!--BOTTONE\n      <ion-button href=\"aboutus\">about us\n    </ion-button>-->\n  \n  \n\n  <!--CARD-->\n\n  <ion-content padding>\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\" pullFactor=\"0.2\">\n      <ion-refresher-content>\n      </ion-refresher-content>\n    </ion-refresher>\n\n    <div class=\"cards\">\n\n      <ion-card *ngFor=\"let home of items\">\n        <ion-card-header>\n          <ion-card-subtitle>{{home.nome}}</ion-card-subtitle>\n          <ion-card-title>{{home.titolo}}</ion-card-title>\n          <ion-card-subtitle color=\"danger\">{{home.tipo}}</ion-card-subtitle>\n        </ion-card-header>\n        <ion-card-content>\n          {{home.testo}}\n        </ion-card-content>\n        <ion-footer>\n          <ion-row>\n            <ion-col center text-center>\n              <ion-button size=\"small\" color=\"light\" expand=\"full\" href=\"{{home.spotify}}\">\n                <div>Spotify</div>\n              </ion-button>\n            </ion-col>\n            <ion-col center text-center>\n              <ion-button size=\"small\" color=\"light\" expand=\"full\" href=\"{{home.applemusic}}\">\n                <div>Apple Music</div>\n              </ion-button>\n            </ion-col>\n            <ion-col center text-center>\n              <ion-button size=\"small\" color=\"light\" expand=\"full\" routerLink=\"{{home.artista}}\">\n                <div>Artista</div>\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-footer>\n      </ion-card>\n\n      <ion-card>\n        <ion-card-header>\n          <ion-card-subtitle>Salmo</ion-card-subtitle>\n          <ion-card-title>Playlist</ion-card-title>\n          <ion-card-subtitle color=\"danger\">ALBUM</ion-card-subtitle>\n        </ion-card-header>\n        <ion-card-content>\n          Salmo torna in scena con un nuovo album.\n        </ion-card-content>\n        <ion-footer>\n          <ion-row>\n            <ion-col center text-center>\n              <ion-button size=\"small\" color=\"light\" expand=\"full\" href=\"https://open.spotify.com/album/5F6r4JU7TdqI8YOWzj6Fyn\">\n                <div>Spotify</div>\n              </ion-button>\n            </ion-col>\n            <ion-col center text-center>\n              <ion-button size=\"small\" color=\"light\" expand=\"full\" href=\"https://music.apple.com/it/album/playlist/1438143525\">\n                <div>Apple Music</div>\n              </ion-button>\n            </ion-col>\n            <ion-col center text-center>\n              <ion-button size=\"small\" color=\"light\" expand=\"full\" routerLink=\"/salmo\">\n                <div>Artista</div>\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-footer>\n      </ion-card>\n\n      <ion-card>\n        <ion-card-header>\n          <ion-card-subtitle>Francesca Michielin</ion-card-subtitle>\n          <ion-card-title>Feat (stato di natura)</ion-card-title>\n          <ion-card-subtitle color=\"danger\">ALBUM</ion-card-subtitle>\n        </ion-card-header>\n        <ion-card-content>\n          Francesca Michielin sorprende con un disco fuori dai suoi canoni.\n        </ion-card-content>\n        <ion-footer>\n          <ion-row>\n            <ion-col center text-center>\n              <ion-button size=\"small\" color=\"light\" expand=\"full\" href=\"https://open.spotify.com/album/28UKO6wlegGpOiMgOeOgOp?si=sVTNW24sQDeEartR5CUjdQ\">\n                <div>Spotify</div>\n              </ion-button>\n            </ion-col>\n            <ion-col center text-center>\n              <ion-button size=\"small\" color=\"light\" expand=\"full\" href=\"https://music.apple.com/it/album/feat-stato-di-natura/1501834922\">\n                <div>Apple Music</div>\n              </ion-button>\n            </ion-col>\n            <ion-col center text-center>\n              <ion-button size=\"small\" color=\"light\" expand=\"full\" routerLink=\"/francescamichelin\">\n                <div>Artista</div>\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-footer>\n      </ion-card>\n\n      <ion-card>\n        <ion-card-header>\n          <ion-card-subtitle>Tiziano Ferro</ion-card-subtitle>\n          <ion-card-title>Accetto Miracoli</ion-card-title>\n          <ion-card-subtitle color=\"danger\">ALBUM</ion-card-subtitle>\n        </ion-card-header>\n        <ion-card-content>\n          Il nuovo album di Tiziano Ferro è fuori ora.\n        </ion-card-content>\n        <ion-footer>\n          <ion-row>\n            <ion-col center text-center>\n              <ion-button size=\"small\" color=\"light\" expand=\"full\" href=\"https://open.spotify.com/album/2OFCijOtzwFMkFNLRdShHw\">\n                <div>Spotify</div>\n              </ion-button>\n            </ion-col>\n            <ion-col center text-center>\n              <ion-button size=\"small\" color=\"light\" expand=\"full\" href=\"https://music.apple.com/it/album/accetto-miracoli/1483758408\">\n                <div>Apple Music</div>\n              </ion-button>\n            </ion-col>\n            <ion-col center text-center>\n              <ion-button size=\"small\" color=\"light\" expand=\"full\" routerLink=\"/tizianoferro\">\n                <div>Artista</div>\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-footer>\n      </ion-card>\n  \n      <ion-card>\n        <ion-card-header>\n          <ion-card-subtitle>Achille Lauro</ion-card-subtitle>\n          <ion-card-title>Rolls Royce</ion-card-title>\n          <ion-card-subtitle color=\"danger\">SINGOLO</ion-card-subtitle>\n        </ion-card-header>\n        <ion-card-content>\n          Fuori ora il nuovo singolo di Achille Lauro che si intitola \"Rolls Royce\"\n        </ion-card-content>\n        <ion-footer>\n          <ion-row>\n            <ion-col center text-center>\n              <ion-button size=\"small\" color=\"light\" expand=\"full\" href=\"https://open.spotify.com/track/68IBz8C8oFUIVC4Xgf0f0g?si=eBMC8D_tS3O7ybrkZvD83w\">\n                <div>Spotify</div>\n              </ion-button>\n            </ion-col>\n            <ion-col center text-center>\n              <ion-button size=\"small\" color=\"light\" expand=\"full\" href=\"https://music.apple.com/it/album/rolls-royce-feat-boss-doms-frenetik-orang3/1456786755?i=1456786757\">\n                <div>Apple Music</div>\n              </ion-button>\n            </ion-col>\n            <ion-col center text-center>\n              <ion-button size=\"small\" color=\"light\" expand=\"full\" routerLink=\"/achillelauro\">\n                <div>Artista</div>\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-footer>\n      </ion-card>\n  \n      <ion-card>\n        <ion-card-header>\n          <ion-card-subtitle>HIPHOPTENDER</ion-card-subtitle>\n          <ion-card-title>Nuova Wave</ion-card-title>\n          <ion-card-subtitle color=\"success\">PLAYLIST (Spotify)</ion-card-subtitle>\n        </ion-card-header>\n        <ion-card-content>\n          Genere: Hip Hop, Rap (Italiano)\n        </ion-card-content>\n        <ion-footer>\n          <ion-row>\n            <ion-col center text-center>\n              <ion-button size=\"small\" color=\"light\" expand=\"full\" href=\"https://open.spotify.com/playlist/3lfTZzfGKJpgHznnjQaCVV?si=GZL7alpcQTOZdKrTXXPJsg\">\n              ASCOLTA</ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-footer>\n      </ion-card>\n  \n      <ion-card>\n        <ion-card-header>\n          <ion-card-subtitle>Davide Calandra</ion-card-subtitle>\n          <ion-card-title>Nient'altro</ion-card-title>\n          <ion-card-subtitle color=\"danger\">SINGOLO</ion-card-subtitle>\n        </ion-card-header>\n        <ion-card-content>\n          Il rapper toscano è fuori con il terzo singolo del suo \"Preludio\".\n        </ion-card-content>\n        <ion-footer>\n          <ion-row>\n            <ion-col center text-center>\n              <ion-button size=\"small\" color=\"light\" expand=\"full\" href=\"https://open.spotify.com/track/1DPSTMZeAGhibCJJVondC6?si=TjTQlf6YR9S4N_S86O_vug\">\n                <div>Spotify</div>\n              </ion-button>\n            </ion-col>\n            <ion-col center text-center>\n              <ion-button size=\"small\" color=\"light\" expand=\"full\" href=\"https://music.apple.com/it/album/nientaltro-single/1502527517\">\n                <div>Apple Music</div>\n              </ion-button>\n            </ion-col>\n            <ion-col center text-center>\n              <ion-button size=\"small\" color=\"light\" expand=\"full\" routerLink=\"/davidecalandra\">\n                <div>Artista</div>\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-footer>\n      </ion-card>\n  \n      <ion-card>\n        <ion-card-header>\n          <ion-card-subtitle>TRX RADIO</ion-card-subtitle>\n          <ion-card-title>TRX Radio</ion-card-title>\n          <ion-card-subtitle color=\"warning\">WEB RADIO</ion-card-subtitle>\n        </ion-card-header>\n        <ion-card-content>\n          Genere: Rap (Italiano)\n        </ion-card-content>\n        <ion-footer>\n          <ion-row>\n            <ion-col center text-center>\n              <ion-button size=\"small\" color=\"light\" expand=\"full\" href=\"https://play.trxradio.it/\">\n              ASCOLTA</ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-footer>\n      </ion-card>\n  \n      <ion-card>\n        <ion-card-header>\n          <ion-card-subtitle>Marracash</ion-card-subtitle>\n          <ion-card-title>Neon: Le ali (feat. Elisa)</ion-card-title>\n          <ion-card-subtitle color=\"danger\">SINGOLO</ion-card-subtitle>\n        </ion-card-header>\n        <ion-card-content>\n          Un nuovo singolo che vede collaborare per la prima volta Marracash e Elisa.\n        </ion-card-content>\n        <ion-footer>\n          <ion-row>\n            <ion-col center text-center>\n              <ion-button size=\"small\" color=\"light\" expand=\"full\" href=\"https://open.spotify.com/track/1eUQzE6z4GUgA0byOPeCJF?si=tUmA1ovERYmmJj1826QzaA\">\n                <div>Spotify</div>\n              </ion-button>\n            </ion-col>\n            <ion-col center text-center>\n              <ion-button size=\"small\" color=\"light\" expand=\"full\" href=\"https://music.apple.com/it/album/neon-le-ali-single/1501341556\">\n                <div>Apple Music</div>\n              </ion-button>\n            </ion-col>\n            <ion-col center text-center>\n              <ion-button size=\"small\" color=\"light\" expand=\"full\" routerLink=\"/marracash\">\n                <div>Artista</div>\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-footer>\n      </ion-card>\n  \n      <ion-card>\n        <ion-card-header>\n          <ion-card-subtitle>Ghali</ion-card-subtitle>\n          <ion-card-title>DNA</ion-card-title>\n          <ion-card-subtitle color=\"danger\">ALBUM</ion-card-subtitle>\n        </ion-card-header>\n        <ion-card-content>\n          È il secondo album in studio dell'artista di Baggio.\n        </ion-card-content>\n        <ion-footer>\n          <ion-row>\n            <ion-col center text-center>\n              <ion-button size=\"small\" color=\"light\" expand=\"full\" href=\"https://open.spotify.com/album/0Cm3SGEHCjn9RAQrzuHX9I?si=XbP4k5I9SzK_yU8dDGypAw\">\n                <div>Spotify</div>\n              </ion-button>\n            </ion-col>\n            <ion-col center text-center>\n              <ion-button size=\"small\" color=\"light\" expand=\"full\" href=\"https://music.apple.com/it/album/dna/1493948866\">\n                <div>Apple Music</div>\n              </ion-button>\n            </ion-col>\n            <ion-col center text-center>\n              <ion-button size=\"small\" color=\"light\" expand=\"full\" routerLink=\"/ghali\">\n                <div>Artista</div>\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-footer>\n      </ion-card>\n      \n        <ion-card>\n          <ion-card-header>\n            <ion-card-subtitle>Apple Music</ion-card-subtitle>\n            <ion-card-title>Successi del momento</ion-card-title>\n            <ion-card-subtitle color=\"primary\">PLAYLIST (Apple Music)</ion-card-subtitle>\n          </ion-card-header>\n          <ion-card-content>\n            Genere: Pop (Globale)\n          </ion-card-content>\n          <ion-footer>\n            <ion-row>\n              <ion-col center text-center>\n                <ion-button size=\"small\" color=\"light\" expand=\"full\" href=\"https://music.apple.com/it/playlist/successi-del-momento/pl.f4d106fed2bd41149aaacabb233eb5eb\">\n                ASCOLTA</ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-footer>\n      </ion-card>\n    \n      <ion-card>\n        <ion-card-header>\n          <ion-card-subtitle>Nitro</ion-card-subtitle>\n          <ion-card-title>GarbAge</ion-card-title>\n          <ion-card-subtitle color=\"danger\">ALBUM</ion-card-subtitle>\n        </ion-card-header>\n        <ion-card-content>\n          È fuori ora il nuovo album di Nitro\n        </ion-card-content>\n        <ion-footer>\n          <ion-row>\n            <ion-col center text-center>\n              <ion-button size=\"small\" color=\"light\" expand=\"full\" href=\"https://open.spotify.com/album/1PzWwe1L2ijXoIbkL3PemV?si=cjq7lkQHSsu-38FC71zITQ\">\n                <div>Spotify</div>\n              </ion-button>\n            </ion-col>\n            <ion-col center text-center>\n              <ion-button size=\"small\" color=\"light\" expand=\"full\" href=\"https://music.apple.com/it/album/garbage/1499313932\">\n                <div>Apple Music</div>\n              </ion-button>\n            </ion-col>\n            <ion-col center text-center>\n              <ion-button size=\"small\" color=\"light\" expand=\"full\" routerLink=\"/nitro\">\n                <div>Artista</div>\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-footer>\n      </ion-card>\n  \n      <ion-card>\n        <ion-card-header>\n          <ion-card-subtitle>Di Fedez e Luis Sal</ion-card-subtitle>\n          <ion-card-title>Muschio Selvaggio</ion-card-title>\n          <ion-card-subtitle color=\"success\">PODCAST (Spotify)</ion-card-subtitle>\n        </ion-card-header>\n        <ion-card-content>\n          Podcast dedicato a temi di cultura e società con ospiti diversi ad ogni puntata.\n        </ion-card-content>\n        <ion-footer>\n          <ion-row>\n            <ion-col center text-center>\n              <ion-button size=\"small\" color=\"light\" expand=\"full\" href=\"https://open.spotify.com/show/6jBWY6Mup7iEFSYvMiVw7b?si=nideoa4xRJS5GfBIa_97qQ\">\n              ASCOLTA</ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-footer>\n      </ion-card>\n\n      <ion-card>\n        <ion-card-header>\n          <ion-card-subtitle>Fedez</ion-card-subtitle>\n          <ion-card-title>Paranoia Airlines</ion-card-title>\n          <ion-card-subtitle color=\"danger\">ALBUM</ion-card-subtitle>\n        </ion-card-header>\n        <ion-card-content>\n          \"Paranoia Airlines\" è il titolo del nuovo album di Fedez.\n        </ion-card-content>\n        <ion-footer>\n          <ion-row>\n            <ion-col center text-center>\n              <ion-button size=\"small\" color=\"light\" expand=\"full\" href=\"https://open.spotify.com/album/20pEaghSWdY2ti2tCEm3FI\">\n                <div>Spotify</div>\n              </ion-button>\n            </ion-col>\n            <ion-col center text-center>\n              <ion-button size=\"small\" color=\"light\" expand=\"full\" href=\"https://music.apple.com/it/album/paranoia-airlines/1446457984\">\n                <div>Apple Music</div>\n              </ion-button>\n            </ion-col>\n            <ion-col center text-center>\n              <ion-button size=\"small\" color=\"light\" expand=\"full\" routerLink=\"/fedez\">\n                <div>Artista</div>\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-footer>\n      </ion-card>\n\n  </div>\n  <ion-button expand=\"full\" disabled=\"true\">PER OGGI É TUTTO</ion-button>\n  </ion-content>";
    /***/
  },

  /***/
  "./src/app/home/home.module.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.module.ts ***!
    \*************************************/

  /*! exports provided: HomePageModule */

  /***/
  function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
      return HomePageModule;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");

    let HomePageModule = class HomePageModule {};
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
      }, {
        path: 'artisti',
        loadChildren: '../artisti/artisti.module#ArtistiPageModule'
      }])],
      declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })], HomePageModule);
    /***/
  },

  /***/
  "./src/app/home/home.page.scss":
  /*!*************************************!*\
    !*** ./src/app/home/home.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n\n.cards {\n  text-align: start;\n  width: auto;\n  margin: auto;\n}\n\n.settings {\n  text-align: right;\n  width: 80;\n  line-height: 30px;\n  margin: auto;\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\nion-content ion-toolbar {\n  --background: translucent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNvc2xvcmUvRGVza3RvcC9wcm9nZXR0b0hDSS9zcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtBQ0RGOztBRElBO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0RGOztBREdBO0VBQ0UsaUJBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FDRkY7O0FES0E7RUFDRSxxQkFBQTtBQ0ZGOztBREtBO0VBQ0UseUJBQUE7QUNGRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiNjb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuLmNhcmRze1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgd2lkdGg6IGF1dG87XG4gIG1hcmdpbjogYXV0bztcbn1cbi5zZXR0aW5nc3tcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHdpZHRoOiA4MDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuI2NvbnRhaW5lciBzdHJvbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG4jY29udGFpbmVyIHAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuXG4gIGNvbG9yOiAjOGM4YzhjO1xuXG4gIG1hcmdpbjogMDtcbn1cblxuI2NvbnRhaW5lciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5pb24tY29udGVudCBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNsdWNlbnQ7XG59IiwiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuLmNhcmRzIHtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gIHdpZHRoOiBhdXRvO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5zZXR0aW5ncyB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICB3aWR0aDogODA7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW46IGF1dG87XG59XG5cbiNjb250YWluZXIgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuI2NvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgY29sb3I6ICM4YzhjOGM7XG4gIG1hcmdpbjogMDtcbn1cblxuI2NvbnRhaW5lciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5pb24tY29udGVudCBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNsdWNlbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/home/home.page.ts":
  /*!***********************************!*\
    !*** ./src/app/home/home.page.ts ***!
    \***********************************/

  /*! exports provided: HomePage */

  /***/
  function srcAppHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
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
    /* harmony import */


    var _popover_popovercomponent_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../popover/popovercomponent.page */
    "./src/app/popover/popovercomponent.page.ts");

    let HomePage = class HomePage {
      constructor(popover) {
        this.popover = popover;
      }

      initialize() {
        this.items = this.originalData = [{
          nome: "Madame",
          titolo: "Baby",
          tipo: "SINGOLO",
          testo: "La nuova promessa è fuori con Baby",
          artista: '/madame',
          spotify: "https://open.spotify.com/album/099sJp9g5meHizPWFAEWIg",
          applemusic: "https://music.apple.com/it/album/baby-single/1498806667"
        }, {
          nome: "Achille Lauro",
          titolo: "Me ne frego",
          tipo: "SINGOLO",
          testo: "Il brano di Sanremo sta conquistando l'Italia",
          artista: '/achillelauro',
          spotify: "https://open.spotify.com/track/1MF3gav7PNaNkv7ohlBKBD",
          applemusic: "https://music.apple.com/it/album/me-ne-frego-single/1496350281"
        }];
      }

      CreatePopOver() {
        this.popover.create({
          component: _popover_popovercomponent_page__WEBPACK_IMPORTED_MODULE_3__["PopovercomponentPage"],
          showBackdrop: false
        }).then(popoverElement => {
          popoverElement.present();
        });
      }

      doRefresh(event) {
        setTimeout(() => {
          event.target.complete();
        }, 1000);
        this.initialize();
      }

    };

    HomePage.ctorParameters = () => [{
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
    }];

    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/home/home.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])], HomePage);
    /***/
  }
}]);
//# sourceMappingURL=home-home-module-es5.js.map