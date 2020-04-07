(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["articoli-articoli-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/articoli/articoli.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/articoli/articoli.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppArticoliArticoliPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header traslucent=\"true\">\n  <ion-toolbar>\n    <ion-toolbar>\n <ion-searchbar (ionInput)=\"getItems($event)\" spellcheck=\"true\" animated=\"true\"></ion-searchbar>\n  </ion-toolbar>\n  </ion-toolbar>\n</ion-header>\n\n<!--<ion-header traslucent=\"true\">\n  <ion-toolbar>\n    <ion-toolbar>\n         <ion-title *ngIf=\"!isSearchBarOpened\"></ion-title>\n <ion-searchbar *ngIf=\"!isSearchBarOpened\" (ionInput)=\"onSearch($event)\" spellcheck=\"true\" animated=\"true\"></ion-searchbar>\n  </ion-toolbar>\n  </ion-toolbar>\n</ion-header>-->\n  \n<ion-content fullscreen>\n\n  <ion-list>\n    <ion-item *ngFor=\"let articoli of items\" href=\"{{articoli.link}}\">\n        <ion-label><h2 class=\"scrolling\"><b>{{articoli.titolo}}</b></h2>\n         <h4 class=\"scrolling\">{{articoli.didascalia}}</h4>\n         <h5><em>By: {{articoli.by}} <br> Data: {{articoli.data}}</em></h5>\n        </ion-label>\n      </ion-item> \n  </ion-list>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/articoli/articoli-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/articoli/articoli-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: ArticoliPageRoutingModule */

  /***/
  function srcAppArticoliArticoliRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArticoliPageRoutingModule", function () {
      return ArticoliPageRoutingModule;
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


    var _articoli_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./articoli.page */
    "./src/app/articoli/articoli.page.ts");

    const routes = [{
      path: '',
      component: _articoli_page__WEBPACK_IMPORTED_MODULE_3__["ArticoliPage"]
    }];
    let ArticoliPageRoutingModule = class ArticoliPageRoutingModule {};
    ArticoliPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ArticoliPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/articoli/articoli.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/articoli/articoli.module.ts ***!
    \*********************************************/

  /*! exports provided: ArticoliPageModule */

  /***/
  function srcAppArticoliArticoliModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArticoliPageModule", function () {
      return ArticoliPageModule;
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


    var _articoli_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./articoli-routing.module */
    "./src/app/articoli/articoli-routing.module.ts");
    /* harmony import */


    var _articoli_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./articoli.page */
    "./src/app/articoli/articoli.page.ts");

    let ArticoliPageModule = class ArticoliPageModule {};
    ArticoliPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _articoli_routing_module__WEBPACK_IMPORTED_MODULE_5__["ArticoliPageRoutingModule"]],
      declarations: [_articoli_page__WEBPACK_IMPORTED_MODULE_6__["ArticoliPage"]]
    })], ArticoliPageModule);
    /***/
  },

  /***/
  "./src/app/articoli/articoli.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/articoli/articoli.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppArticoliArticoliPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".scrolling {\n  overflow: hidden;\n  margin-left: 0px;\n  -webkit-animation-name: title_scroller;\n  -webkit-animation-duration: 6s;\n  -webkit-animation-delay: 2s;\n  -webkit-animation-direction: normal;\n  -webkit-animation-iteration-count: infinite;\n  -webkit-animation-fill-mode: both;\n  -webkit-transition-timing-function: linear;\n  animation-name: title_scroller;\n  -webkit-animation-duration: 9s;\n          animation-duration: 9s;\n  -webkit-animation-delay: 4s;\n          animation-delay: 4s;\n  animation-direction: normal;\n  animation-iteration-count: infinite;\n  animation-fill-mode: both;\n  transition-timing-function: linear;\n}\n\n@keyframes title_scroller {\n  0% {\n    margin-left: 0;\n  }\n  100% {\n    margin-left: -200px;\n  }\n}\n\n@-webkit-keyframes title_scroller {\n  0% {\n    margin-left: 0;\n  }\n  100% {\n    margin-left: -200px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNvc2xvcmUvRGVza3RvcC9wcm9nZXR0b0hDSS9zcmMvYXBwL2FydGljb2xpL2FydGljb2xpLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYXJ0aWNvbGkvYXJ0aWNvbGkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsZ0JBQUE7RUFDQSxnQkFBQTtFQUNHLHNDQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO0VBQ0EsMkNBQUE7RUFDQSxpQ0FBQTtFQUNBLDBDQUFBO0VBRUEsOEJBQUE7RUFDQSw4QkFBQTtVQUFBLHNCQUFBO0VBQ0EsMkJBQUE7VUFBQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7RUFDQSx5QkFBQTtFQUNBLGtDQUFBO0FDQUo7O0FER0E7RUFDSTtJQUFLLGNBQUE7RUNDUDtFREFFO0lBQU8sbUJBQUE7RUNHVDtBQUNGOztBRERBO0VBQ0k7SUFBSyxjQUFBO0VDSVA7RURIRTtJQUFPLG1CQUFBO0VDTVQ7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FydGljb2xpL2FydGljb2xpLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY3JvbGxpbmcge1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXHRtYXJnaW4tbGVmdDogMHB4O1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHRpdGxlX3Njcm9sbGVyO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiA2cztcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMnM7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGlyZWN0aW9uOiBub3JtYWw7XG4gICAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OmluZmluaXRlOyBcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICAgIC8vYW5pbWF0aW9uOiAzcyBsaW5lYXIgMXMgaW5maW5pdGUgcnVubmluZyBzbGlkZWluO1xuICAgIGFuaW1hdGlvbi1uYW1lOiB0aXRsZV9zY3JvbGxlcjtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDlzO1xuICAgIGFuaW1hdGlvbi1kZWxheTogNHM7XG4gICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogbm9ybWFsO1xuICAgXHRhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG59XG5cbkBrZXlmcmFtZXMgdGl0bGVfc2Nyb2xsZXIge1xuICAgIDAlIHsgbWFyZ2luLWxlZnQ6IDA7IH0gXG4gICAgMTAwJSB7IG1hcmdpbi1sZWZ0OiAtMjAwcHg7IH1cbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHRpdGxlX3Njcm9sbGVyIHsgXG4gICAgMCUgeyBtYXJnaW4tbGVmdDogMDsgfSBcbiAgICAxMDAlIHsgbWFyZ2luLWxlZnQ6IC0yMDBweDsgfVxufSAiLCIuc2Nyb2xsaW5nIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogdGl0bGVfc2Nyb2xsZXI7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiA2cztcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDJzO1xuICAtd2Via2l0LWFuaW1hdGlvbi1kaXJlY3Rpb246IG5vcm1hbDtcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gIGFuaW1hdGlvbi1uYW1lOiB0aXRsZV9zY3JvbGxlcjtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA5cztcbiAgYW5pbWF0aW9uLWRlbGF5OiA0cztcbiAgYW5pbWF0aW9uLWRpcmVjdGlvbjogbm9ybWFsO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbn1cblxuQGtleWZyYW1lcyB0aXRsZV9zY3JvbGxlciB7XG4gIDAlIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxuICAxMDAlIHtcbiAgICBtYXJnaW4tbGVmdDogLTIwMHB4O1xuICB9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgdGl0bGVfc2Nyb2xsZXIge1xuICAwJSB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgbWFyZ2luLWxlZnQ6IC0yMDBweDtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/articoli/articoli.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/articoli/articoli.page.ts ***!
    \*******************************************/

  /*! exports provided: ArticoliPage */

  /***/
  function srcAppArticoliArticoliPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArticoliPage", function () {
      return ArticoliPage;
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

    let ArticoliPage = class ArticoliPage {
      constructor(navCtrl) {
        this.navCtrl = navCtrl;
        this.isSearchBarOpened = false;
        this.initialize();
      }

      initialize() {
        this.items = this.originalData = [{
          titolo: 'Il film sulla vita (e la morte) di Lil Peep è fatto male',
          didascalia: "La morte di Lil Peep si sarebbe potuta evitare, e il problema di questo film è che non ha il coraggio e la forza di dirlo chiaramente.",
          by: 'vice.com',
          data: '16/03/2020',
          link: 'https://www.vice.com/it/article/9398gv/lil-peep-film-everybodys-everything'
        }, {
          titolo: 'Francesca Michielin ha messo se stessa, senza nessuna riserva',
          didascalia: "Se dovessi descrivere il nuovo progetto di Francesca Michielin con una sola parola, utilizzerei “natura”...",
          by: 'essemagazine.it',
          data: '13/03/2020',
          link: 'https://essemagazine.it/2020/03/13/francesca-michielin-ha-messo-se-stessa-senza-nessuna-riserva/'
        }, {
          titolo: 'Kina è il musicista campano più famoso del mondo, anche se non lo conosci',
          didascalia: "Le sue canzoni hanno centinaia di milioni di ascolti in tutto il mondo, ha un disco d'oro negli USA e un contratto con Columbia—ma è partito dalla sua cameretta nella Terra dei Fuochi.",
          by: 'vice.com',
          data: '12/03/2020',
          link: 'https://www.vice.com/it/article/akw49j/kina-get-you-moon-intervista'
        }, {
          titolo: 'Il video di “Godzilla” di Eminem e Juice WRLD è incredibile',
          didascalia: "C'è Eminem che sputa fuoco, vomita pezzi di Lego e taglia dei manzi con una motosega—fate un po' voi.",
          by: 'vice.com',
          data: '10/03/2020',
          link: 'https://www.vice.com/it/article/3a8jgw/eminem-godzilla-video-juice-wrld'
        }, {
          titolo: 'Tutti i concerti annullati o rimandati a causa dell’emergenza Coronavirus',
          didascalia: "È con un grande sospiro che la scena musicale si è adeguata alle comunicazioni giunte dal Governo per limitare i contagi da Coronavirus...",
          by: 'outpump.com',
          data: '10/03/2020',
          link: 'https://www.outpump.com/tutti-concerti-annullati-rimandati-causa-coronavirus/'
        }, {
          titolo: 'Come dovrebbero evolversi gli in-store per sopravvivere?',
          didascalia: "Per anni è stata una pratica diffusa e redditizia fondata su una sorta di do ut des tra artista e fan, ora l’in-store è in forte declino e va ripensato.",
          by: 'essemagazine.it',
          data: '28/02/2020',
          link: 'https://essemagazine.it/2020/02/28/come-dovrebbero-evolversi-gli-in-store-per-sopravvivere/'
        }, {
          titolo: '“DNA” è il nuovo album di Ghali: ecco tutto quello che devi sapere',
          didascalia: "Sarà la sua consacrazione europea?",
          by: 'hiphoptender.com',
          data: '18/02/2020',
          link: 'https://hiphoptender.com/2020/02/18/dna-nuovo-album-ghali-quello-devi-sapere/'
        }, {
          titolo: 'Young Kofla: da Verona in arrivo aria di novità',
          didascalia: "Ecco chi è il rapper veronese che si sta affacciando sulla scena rap.",
          by: 'hiphoptender.com',
          data: '10/02/2020',
          link: 'https://hiphoptender.com/2020/03/10/young-kofla-da-verona-in-arrivo-aria-di-novita/'
        }, {
          titolo: 'Musica più venduta nel 2019? parola alla Fimi',
          didascalia: "La Fimi, anche quest’anno, stila la sua classifica della musica più venduta. A dominare la scena non ci sono sorprese.",
          by: 'hiphoptender.com',
          data: '10/01/2020',
          link: 'https://hiphoptender.com/2020/01/10/musica-piu-venduta-nel-2019-parola-alla-fimi/'
        }];
        this.modifierData = JSON.parse(JSON.stringify(this.originalData));
      }

      getItems(ev) {
        this.initialize();
        let val = ev.target.value;

        if (val && val.trim() != '') {
          this.items = this.items.filter(item => {
            return item.titolo.toLowerCase().indexOf(val.toLowerCase()) > -1;
          });
        }
      }

      ngOnInit() {}

    };

    ArticoliPage.ctorParameters = () => [{
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
    }];

    ArticoliPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-articoli',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./articoli.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/articoli/articoli.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./articoli.page.scss */
      "./src/app/articoli/articoli.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])], ArticoliPage);
    /***/
  }
}]);
//# sourceMappingURL=articoli-articoli-module-es5.js.map