(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fashion-details-fashion-details-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/fashion/details/fashion-details.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fashion/details/fashion-details.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFashionDetailsFashionDetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"app/categories/fashion\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Fashion Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"fashion-details-content\">\n  <ion-row class=\"slider-row\">\n    <ion-slides class=\"details-slides\" pager=\"true\" [options]=\"slidesOptions\">\n      <ion-slide class=\"\" *ngFor=\"let image of details?.showcaseImages\">\n        <ion-row class=\"slide-inner-row\">\n          <app-image-shell [mode]=\"'cover'\" animation=\"spinner\" class=\"showcase-image\" [ngClass]=\"{'centered-image': (image.type === 'square'), 'fill-image': (image.type === 'fill')}\" [src]=\"image.source\">\n            <app-aspect-ratio [ratio]=\"{w:64, h:50}\">\n            </app-aspect-ratio>\n          </app-image-shell>\n        </ion-row>\n      </ion-slide>\n    </ion-slides>\n  </ion-row>\n  <div class=\"description-wrapper\">\n    <h3 class=\"details-name\">\n      <app-text-shell animation=\"gradient\" [data]=\"details?.name\"></app-text-shell>\n    </h3>\n    <span class=\"details-brand\">\n      <app-text-shell animation=\"gradient\" [data]=\"details?.brand\"></app-text-shell>\n    </span>\n    <span class=\"details-price\">\n      <app-text-shell animation=\"gradient\" [data]=\"details?.price | currency\"></app-text-shell>\n    </span>\n    <span class=\"details-sale-price\">\n      <app-text-shell animation=\"gradient\" [data]=\"details?.salePrice | currency\"></app-text-shell>\n    </span>\n  </div>\n  <ion-row class=\"details-purchase-options-row\">\n    <ion-col size=\"12\" class=\"aux-action-col\">\n      <ion-button class=\"size-chart-btn\" color=\"medium\" size=\"small\" fill=\"clear\">Size Chart</ion-button>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-button class=\"select-variant-btn\" color=\"medium\" expand=\"block\" fill=\"outline\" (click)=\"openColorChooser()\">Color</ion-button>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-button class=\"select-variant-btn\" color=\"medium\" expand=\"block\" fill=\"outline\" (click)=\"openSizeChooser()\">Size</ion-button>\n    </ion-col>\n    <ion-col size=\"12\" class=\"main-call-to-action-col\">\n      <ion-button class=\"add-to-cart-btn\" color=\"dark\" expand=\"block\" fill=\"solid\">Add to cart</ion-button>\n    </ion-col>\n  </ion-row>\n  <div class=\"details-description-wrapper\">\n    <h3 class=\"detail-title\">About me</h3>\n    <p class=\"details-description\">\n      <app-text-shell animation=\"gradient\" [data]=\"details?.description\" lines=\"5\"></app-text-shell>\n    </p>\n  </div>\n  <div class=\"details-description-wrapper\">\n    <h3 class=\"detail-title\">Looking after me</h3>\n    <p class=\"details-description\">\n      <app-text-shell animation=\"gradient\" [data]=\"details?.careInstructions\" lines=\"3\"></app-text-shell>\n    </p>\n  </div>\n  <div class=\"details-description-wrapper\">\n    <h3 class=\"detail-title\">Product code</h3>\n    <span class=\"details-description product-code\">\n      <app-text-shell animation=\"gradient\" [data]=\"details?.upc\"></app-text-shell>\n    </span>\n  </div>\n  <!-- Related Products -->\n  <div class=\"related-products-wrapper\" *ngIf=\"details?.relatedProducts && details.relatedProducts.length > 0\">\n    <h3 class=\"detail-alt-title\">Why Don't you try?</h3>\n    <ion-row class=\"related-products-list\">\n      <ion-col size=\"6\" class=\"related-product-item\" *ngFor=\"let relatedProduct of details?.relatedProducts\">\n        <div class=\"item-image-wrapper\">\n          <a class=\"image-anchor\">\n            <app-aspect-ratio [ratio]=\"{w: 3, h: 4}\">\n              <app-image-shell class=\"related-product-image\" animation=\"spinner\" [src]=\"relatedProduct.image\" [alt]=\"'related image'\"></app-image-shell>\n            </app-aspect-ratio>\n          </a>\n        </div>\n        <div class=\"item-details-wrapper\">\n          <h4 class=\"item-name\">\n            <a class=\"name-anchor\">\n              <app-text-shell animation=\"gradient\" [data]=\"relatedProduct.name\"></app-text-shell>\n            </a>\n          </h4>\n          <span class=\"item-sale-price\">\n            <app-text-shell animation=\"gradient\" [data]=\"relatedProduct.salePrice | currency\"></app-text-shell>\n          </span>\n        </div>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/fashion/details/fashion-details.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/fashion/details/fashion-details.module.ts ***!
    \***********************************************************/

  /*! exports provided: FashionDetailsPageModule */

  /***/
  function srcAppFashionDetailsFashionDetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FashionDetailsPageModule", function () {
      return FashionDetailsPageModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var _fashion_details_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./fashion-details.page */
    "./src/app/fashion/details/fashion-details.page.ts");
    /* harmony import */


    var _fashion_details_resolver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./fashion-details.resolver */
    "./src/app/fashion/details/fashion-details.resolver.ts");
    /* harmony import */


    var _fashion_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../fashion.service */
    "./src/app/fashion/fashion.service.ts");

    const routes = [{
      path: '',
      component: _fashion_details_page__WEBPACK_IMPORTED_MODULE_8__["FashionDetailsPage"],
      resolve: {
        data: _fashion_details_resolver__WEBPACK_IMPORTED_MODULE_9__["FashionDetailsResolver"]
      }
    }];
    let FashionDetailsPageModule = class FashionDetailsPageModule {};
    FashionDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]],
      declarations: [_fashion_details_page__WEBPACK_IMPORTED_MODULE_8__["FashionDetailsPage"]],
      providers: [_fashion_details_resolver__WEBPACK_IMPORTED_MODULE_9__["FashionDetailsResolver"], _fashion_service__WEBPACK_IMPORTED_MODULE_10__["FashionService"]]
    })], FashionDetailsPageModule);
    /***/
  },

  /***/
  "./src/app/fashion/details/fashion-details.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/fashion/details/fashion-details.page.ts ***!
    \*********************************************************/

  /*! exports provided: FashionDetailsPage */

  /***/
  function srcAppFashionDetailsFashionDetailsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FashionDetailsPage", function () {
      return FashionDetailsPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");

    let FashionDetailsPage = class FashionDetailsPage {
      constructor(route, alertController) {
        this.route = route;
        this.alertController = alertController;
        this.colorVariants = [];
        this.sizeVariants = [];
        this.slidesOptions = {
          zoom: {
            toggle: false // Disable zooming to prevent weird double tap zomming on slide images

          }
        };
      }

      get isShell() {
        return this.details && this.details.isShell ? true : false;
      }

      ngOnInit() {
        this.route.data.subscribe(resolvedRouteData => {
          const detailsDataStore = resolvedRouteData['data'];
          detailsDataStore.state.subscribe(state => {
            this.details = state;
            this.colorVariants = this.details.colorVariants.map(item => ({
              name: item.name,
              type: 'radio',
              label: item.name,
              value: item.value,
              checked: item.default
            }));
            this.sizeVariants = this.details.sizeVariants.map(item => ({
              name: item.name,
              type: 'radio',
              label: item.name,
              value: item.value,
              checked: item.default
            }));
          }, error => {});
        }, error => {});
      }

      openColorChooser() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const alert = yield this.alertController.create({
            header: 'Color',
            inputs: this.colorVariants,
            cssClass: 'variant-alert color-chooser',
            buttons: [{
              text: 'Cancel',
              role: 'cancel',
              cssClass: 'secondary',
              handler: () => {
                console.log('Confirm Cancel');
              }
            }, {
              text: 'OK',
              handler: () => {
                console.log('Confirm Ok');
              }
            }]
          });
          yield alert.present();
        });
      }

      openSizeChooser() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const alert = yield this.alertController.create({
            header: 'Size',
            inputs: this.sizeVariants,
            cssClass: 'variant-alert size-chooser',
            buttons: [{
              text: 'Cancel',
              role: 'cancel',
              cssClass: 'secondary',
              handler: () => {
                console.log('Confirm Cancel');
              }
            }, {
              text: 'OK',
              handler: selectedValue => {
                console.log('Selected Value', selectedValue);
              }
            }]
          });
          yield alert.present();
        });
      }

    };

    FashionDetailsPage.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.is-shell'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], FashionDetailsPage.prototype, "isShell", null);
    FashionDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-fashion-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./fashion-details.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/fashion/details/fashion-details.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./styles/fashion-details.page.scss */
      "./src/app/fashion/details/styles/fashion-details.page.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./styles/fashion-details.shell.scss */
      "./src/app/fashion/details/styles/fashion-details.shell.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./styles/fashion-details.ios.scss */
      "./src/app/fashion/details/styles/fashion-details.ios.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./styles/fashion-details.md.scss */
      "./src/app/fashion/details/styles/fashion-details.md.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])], FashionDetailsPage);
    /***/
  },

  /***/
  "./src/app/fashion/details/fashion-details.resolver.ts":
  /*!*************************************************************!*\
    !*** ./src/app/fashion/details/fashion-details.resolver.ts ***!
    \*************************************************************/

  /*! exports provided: FashionDetailsResolver */

  /***/
  function srcAppFashionDetailsFashionDetailsResolverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FashionDetailsResolver", function () {
      return FashionDetailsResolver;
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


    var _fashion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../fashion.service */
    "./src/app/fashion/fashion.service.ts");

    let FashionDetailsResolver = class FashionDetailsResolver {
      constructor(fashionService) {
        this.fashionService = fashionService;
      }

      resolve() {
        const dataSource = this.fashionService.getDetailsDataSource();
        const dataStore = this.fashionService.getDetailsStore(dataSource);
        return dataStore;
      }

    };

    FashionDetailsResolver.ctorParameters = () => [{
      type: _fashion_service__WEBPACK_IMPORTED_MODULE_2__["FashionService"]
    }];

    FashionDetailsResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_fashion_service__WEBPACK_IMPORTED_MODULE_2__["FashionService"]])], FashionDetailsResolver);
    /***/
  },

  /***/
  "./src/app/fashion/details/styles/fashion-details.ios.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/fashion/details/styles/fashion-details.ios.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFashionDetailsStylesFashionDetailsIosScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zhc2hpb24vZGV0YWlscy9zdHlsZXMvZmFzaGlvbi1kZXRhaWxzLmlvcy5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/fashion/details/styles/fashion-details.md.scss":
  /*!****************************************************************!*\
    !*** ./src/app/fashion/details/styles/fashion-details.md.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFashionDetailsStylesFashionDetailsMdScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zhc2hpb24vZGV0YWlscy9zdHlsZXMvZmFzaGlvbi1kZXRhaWxzLm1kLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/fashion/details/styles/fashion-details.page.scss":
  /*!******************************************************************!*\
    !*** ./src/app/fashion/details/styles/fashion-details.page.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFashionDetailsStylesFashionDetailsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background);\n  --page-swiper-pagination-space: 30px;\n  --page-swiper-pagination-height: 18px;\n  --page-pagination-bullet-size: 10px;\n  --page-options-gutter: calc(var(--page-margin) / 2);\n  --page-related-items-gutter: calc(var(--page-margin) / 2);\n  --page-color: #cb328f;\n}\n\n.fashion-details-content {\n  --background: var(--page-background);\n}\n\n.fashion-details-content .slider-row .details-slides {\n  --bullet-background: var(--ion-color-dark-tint);\n  --bullet-background-active: var(--ion-color-dark-tint);\n  height: 100%;\n  width: 100%;\n}\n\n.fashion-details-content .slider-row .details-slides .slide-inner-row {\n  height: 100%;\n  width: 100%;\n  padding: 0px;\n  padding-bottom: var(--page-swiper-pagination-space);\n}\n\n.fashion-details-content .slider-row .showcase-image {\n  width: 100%;\n}\n\n.fashion-details-content .slider-row .showcase-image.centered-image {\n  background-size: auto;\n  background-position: center;\n}\n\n.fashion-details-content .description-wrapper {\n  padding: var(--page-margin) var(--page-margin) 0px;\n}\n\n.fashion-details-content .description-wrapper .details-name {\n  font-size: 18px;\n  font-weight: 500;\n  margin: 0px 0px 5px;\n}\n\n.fashion-details-content .description-wrapper .details-brand {\n  display: block;\n  text-transform: uppercase;\n  font-size: 14px;\n  font-weight: 400;\n  margin: 0px 0px var(--page-margin);\n}\n\n.fashion-details-content .description-wrapper .details-price {\n  font-size: 18px;\n  font-weight: 500;\n  margin: 0px;\n  color: var(--page-color);\n  display: inline-block;\n}\n\n.fashion-details-content .description-wrapper .details-sale-price {\n  color: var(--ion-color-medium-shade);\n  text-decoration: line-through;\n  display: inline-block;\n  margin-left: var(--page-margin);\n  font-size: 14px;\n}\n\n.fashion-details-content .details-purchase-options-row {\n  --ion-grid-column-padding: var(--page-options-gutter);\n  padding-top: 0px;\n  padding-left: calc(var(--page-margin) - var(--page-options-gutter));\n  padding-right: calc(var(--page-margin) - var(--page-options-gutter));\n  padding-bottom: calc(var(--page-margin) * 2);\n}\n\n.fashion-details-content .details-purchase-options-row .aux-action-col {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n\n.fashion-details-content .details-purchase-options-row .aux-action-col .size-chart-btn {\n  margin: 0px;\n  height: 25px;\n}\n\n.fashion-details-content .details-purchase-options-row .main-call-to-action-col {\n  padding-bottom: 0px;\n}\n\n.fashion-details-content .details-purchase-options-row .select-variant-btn {\n  margin: 0px;\n}\n\n.fashion-details-content .details-purchase-options-row .add-to-cart-btn {\n  margin: 0px;\n  margin-top: var(--page-margin);\n}\n\n.fashion-details-content .detail-title {\n  font-size: 16px;\n  font-weight: 500;\n  color: var(--ion-color-dark-tint);\n  margin: 0px;\n  margin-bottom: calc(var(--page-margin) / 2);\n}\n\n.fashion-details-content .details-description-wrapper {\n  padding-top: 0px;\n  padding-left: var(--page-margin);\n  padding-right: var(--page-margin);\n  padding-bottom: calc(var(--page-margin) * 2);\n}\n\n.fashion-details-content .details-description-wrapper .details-description {\n  margin: 0px;\n  line-height: 1.3;\n  font-size: 14px;\n  color: var(--ion-color-medium-shade);\n}\n\n.fashion-details-content .detail-alt-title {\n  text-align: center;\n  font-size: 18px;\n  font-weight: 400;\n  text-transform: uppercase;\n  color: var(--ion-color-dark-shade);\n  margin: 0px;\n  margin-bottom: var(--page-margin);\n}\n\n.fashion-details-content .related-products-wrapper {\n  padding-top: 0px;\n  padding-left: var(--page-margin);\n  padding-right: var(--page-margin);\n  padding-bottom: calc(var(--page-margin) * 2);\n}\n\n.fashion-details-content .related-products-wrapper .related-products-list {\n  --ion-grid-column-padding: 0px;\n}\n\n.fashion-details-content .related-products-wrapper .related-products-list .related-product-item {\n  margin-bottom: calc(var(--page-margin) * 2);\n}\n\n.fashion-details-content .related-products-wrapper .related-products-list .related-product-item:nth-child(odd) {\n  padding-right: var(--page-related-items-gutter);\n}\n\n.fashion-details-content .related-products-wrapper .related-products-list .related-product-item:nth-child(even) {\n  padding-left: var(--page-related-items-gutter);\n}\n\n.fashion-details-content .related-products-wrapper .related-products-list .related-product-item .item-image-wrapper {\n  border: 1px solid var(--ion-color-light-shade);\n}\n\n.fashion-details-content .related-products-wrapper .related-products-list .related-product-item .item-image-wrapper .image-anchor {\n  display: block;\n}\n\n.fashion-details-content .related-products-wrapper .related-products-list .related-product-item .item-details-wrapper {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 5px 5px 0px;\n}\n\n.fashion-details-content .related-products-wrapper .related-products-list .related-product-item .item-name {\n  margin: 0px;\n  margin-bottom: calc(var(--page-margin) / 2);\n  font-size: 14px;\n  font-weight: 400;\n  text-align: center;\n  min-width: 90%;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.fashion-details-content .related-products-wrapper .related-products-list .related-product-item .item-name .name-anchor {\n  color: var(--ion-color-dark-tint);\n  display: block;\n  text-decoration: none;\n}\n\n.fashion-details-content .related-products-wrapper .related-products-list .related-product-item .item-sale-price {\n  display: block;\n  font-weight: 400;\n  color: var(--page-color);\n  font-size: 16px;\n  text-align: center;\n  min-width: 30%;\n}\n\n:host ::ng-deep .details-slides .swiper-pagination {\n  height: var(--page-swiper-pagination-height);\n  line-height: 1;\n  bottom: calc((var(--page-swiper-pagination-space) - var(--page-swiper-pagination-height) ) / 2);\n}\n\n:host ::ng-deep .details-slides .swiper-pagination .swiper-pagination-bullet {\n  width: var(--page-pagination-bullet-size);\n  height: var(--page-pagination-bullet-size);\n}\n\n::ng-deep .variant-alert {\n  --select-alert-color: #000;\n  --select-alert-background: #FFF;\n  --select-alert-margin: 16px;\n  --select-alert-color: var(--ion-color-lightest);\n  --select-alert-background: var(--ion-color-primary);\n  --select-alert-margin: var(--app-fair-margin);\n}\n\n::ng-deep .variant-alert .alert-head {\n  padding-top: calc((var(--select-alert-margin) / 4) * 3);\n  padding-bottom: calc((var(--select-alert-margin) / 4) * 3);\n  -webkit-padding-start: var(--select-alert-margin);\n          padding-inline-start: var(--select-alert-margin);\n  -webkit-padding-end: var(--select-alert-margin);\n          padding-inline-end: var(--select-alert-margin);\n}\n\n::ng-deep .variant-alert .alert-title {\n  color: var(--select-alert-color);\n}\n\n::ng-deep .variant-alert .alert-head,\n::ng-deep .variant-alert .alert-message {\n  background-color: var(--select-alert-background);\n}\n\n::ng-deep .variant-alert .alert-wrapper.sc-ion-alert-ios .alert-title {\n  margin: 0px;\n}\n\n::ng-deep .variant-alert .alert-wrapper.sc-ion-alert-md .alert-title {\n  font-size: 18px;\n  font-weight: 400;\n}\n\n::ng-deep .variant-alert .alert-wrapper.sc-ion-alert-md .alert-button {\n  --padding-top: 0;\n  --padding-start: 0.9em;\n  --padding-end: 0.9em;\n  --padding-bottom: 0;\n  height: 2.1em;\n  font-size: 13px;\n}\n\n::ng-deep .variant-alert .alert-message {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9haXIvRG9jdW1lbnRzL0dpdEh1Yi9wb2Qvc3JjL2FwcC9mYXNoaW9uL2RldGFpbHMvc3R5bGVzL2Zhc2hpb24tZGV0YWlscy5wYWdlLnNjc3MiLCJzcmMvYXBwL2Zhc2hpb24vZGV0YWlscy9zdHlsZXMvZmFzaGlvbi1kZXRhaWxzLnBhZ2Uuc2NzcyIsIi9Vc2Vycy9haXIvRG9jdW1lbnRzL0dpdEh1Yi9wb2Qvc3JjL3RoZW1lL21peGlucy9pbnB1dHMvc2VsZWN0LWFsZXJ0LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSxxQ0FBQTtFQUNBLHdDQUFBO0VBRUEsb0NBQUE7RUFDQSxxQ0FBQTtFQUNBLG1DQUFBO0VBRUEsbURBQUE7RUFDQSx5REFBQTtFQUVBLHFCQUFBO0FDTkY7O0FEVUE7RUFDRSxvQ0FBQTtBQ1BGOztBRFVJO0VBQ0UsK0NBQUE7RUFDQSxzREFBQTtFQUVBLFlBQUE7RUFDQSxXQUFBO0FDVE47O0FEV007RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFFQSxtREFBQTtBQ1ZSOztBRGNJO0VBQ0UsV0FBQTtBQ1pOOztBRGNNO0VBQ0UscUJBQUE7RUFDQSwyQkFBQTtBQ1pSOztBRGlCRTtFQUNFLGtEQUFBO0FDZko7O0FEaUJJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNmTjs7QURrQkk7RUFDRSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQ0FBQTtBQ2hCTjs7QURtQkk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtBQ2pCTjs7QURvQkk7RUFDRSxvQ0FBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7QUNsQk47O0FEc0JFO0VBQ0UscURBQUE7RUFFQSxnQkFBQTtFQUNBLG1FQUFBO0VBQ0Esb0VBQUE7RUFDQSw0Q0FBQTtBQ3JCSjs7QUR1Qkk7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxxQkFBQTtVQUFBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ3JCTjs7QUR1Qk07RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ3JCUjs7QUR5Qkk7RUFDRSxtQkFBQTtBQ3ZCTjs7QUQwQkk7RUFDRSxXQUFBO0FDeEJOOztBRDJCSTtFQUNFLFdBQUE7RUFDQSw4QkFBQTtBQ3pCTjs7QUQ2QkU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQ0FBQTtFQUNBLFdBQUE7RUFDQSwyQ0FBQTtBQzNCSjs7QUQ4QkU7RUFDRSxnQkFBQTtFQUNBLGdDQUFBO0VBQ0EsaUNBQUE7RUFDQSw0Q0FBQTtBQzVCSjs7QUQ4Qkk7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7QUM1Qk47O0FEZ0NFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtDQUFBO0VBQ0EsV0FBQTtFQUNBLGlDQUFBO0FDOUJKOztBRGlDRTtFQUNFLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQ0FBQTtFQUNBLDRDQUFBO0FDL0JKOztBRGlDSTtFQUNFLDhCQUFBO0FDL0JOOztBRGlDTTtFQUNFLDJDQUFBO0FDL0JSOztBRGlDUTtFQUNFLCtDQUFBO0FDL0JWOztBRGtDUTtFQUNFLDhDQUFBO0FDaENWOztBRG1DUTtFQUNFLDhDQUFBO0FDakNWOztBRG1DVTtFQUNFLGNBQUE7QUNqQ1o7O0FEcUNRO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUVBLG9CQUFBO0FDcENWOztBRHVDUTtFQUNFLFdBQUE7RUFDQSwyQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUVBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ3RDVjs7QUR3Q1U7RUFDRSxpQ0FBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQ3RDWjs7QUQwQ1E7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUN4Q1Y7O0FEb0RFO0VBQ0UsNENBQUE7RUFDQSxjQUFBO0VBRUEsK0ZBQUE7QUNsREo7O0FEb0RJO0VBQ0UseUNBQUE7RUFDQSwwQ0FBQTtBQ2xETjs7QUR5REE7RUUzT0UsMEJBQUE7RUFDQSwrQkFBQTtFQUNBLDJCQUFBO0VGNk9BLCtDQUFBO0VBQ0EsbURBQUE7RUFDQSw2Q0FBQTtBQ3RERjs7QUN2TEU7RUFDRSx1REFBQTtFQUNBLDBEQUFBO0VBQ0EsaURBQUE7VUFBQSxnREFBQTtFQUNBLCtDQUFBO1VBQUEsOENBQUE7QUR5TEo7O0FDdExFO0VBQ0UsZ0NBQUE7QUR3TEo7O0FDckxFOztFQUVFLGdEQUFBO0FEdUxKOztBQ2xMSTtFQUNFLFdBQUE7QURvTE47O0FDOUtJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FEZ0xOOztBQzdLSTtFQUVFLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBRUEsYUFBQTtFQUNBLGVBQUE7QUQ2S047O0FENEJFO0VBQ0UsYUFBQTtBQzFCSiIsImZpbGUiOiJzcmMvYXBwL2Zhc2hpb24vZGV0YWlscy9zdHlsZXMvZmFzaGlvbi1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi90aGVtZS9taXhpbnMvaW5wdXRzL3NlbGVjdC1hbGVydFwiO1xuXG4vLyBDdXN0b20gdmFyaWFibGVzXG4vLyBOb3RlOiAgVGhlc2Ugb25lcyB3ZXJlIGFkZGVkIGJ5IHVzIGFuZCBoYXZlIG5vdGhpbmcgdG8gZG8gd2l0aCBJb25pYyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWZhaXItbWFyZ2luKTtcbiAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcblxuICAtLXBhZ2Utc3dpcGVyLXBhZ2luYXRpb24tc3BhY2U6IDMwcHg7XG4gIC0tcGFnZS1zd2lwZXItcGFnaW5hdGlvbi1oZWlnaHQ6IDE4cHg7XG4gIC0tcGFnZS1wYWdpbmF0aW9uLWJ1bGxldC1zaXplOiAxMHB4O1xuXG4gIC0tcGFnZS1vcHRpb25zLWd1dHRlcjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgLS1wYWdlLXJlbGF0ZWQtaXRlbXMtZ3V0dGVyOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuXG4gIC0tcGFnZS1jb2xvcjogI2NiMzI4Zjtcbn1cblxuLy8gTm90ZTogIEFsbCB0aGUgQ1NTIHZhcmlhYmxlcyBkZWZpbmVkIGJlbG93IGFyZSBvdmVycmlkZXMgb2YgSW9uaWMgZWxlbWVudHMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXG4uZmFzaGlvbi1kZXRhaWxzLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG5cbiAgLnNsaWRlci1yb3cge1xuICAgIC5kZXRhaWxzLXNsaWRlcyB7XG4gICAgICAtLWJ1bGxldC1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcbiAgICAgIC0tYnVsbGV0LWJhY2tncm91bmQtYWN0aXZlOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcblxuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgIC5zbGlkZS1pbm5lci1yb3cge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgIC8vIC5zd2lwZXItcGFnaW5hdGlvbiBzcGFjZVxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFnZS1zd2lwZXItcGFnaW5hdGlvbi1zcGFjZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnNob3djYXNlLWltYWdlIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAmLmNlbnRlcmVkLWltYWdlIHtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBhdXRvO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmRlc2NyaXB0aW9uLXdyYXBwZXIge1xuICAgIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKSB2YXIoLS1wYWdlLW1hcmdpbikgMHB4O1xuXG4gICAgLmRldGFpbHMtbmFtZSB7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgbWFyZ2luOiAwcHggMHB4IDVweDtcbiAgICB9XG5cbiAgICAuZGV0YWlscy1icmFuZCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgbWFyZ2luOiAwcHggMHB4IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICB9XG5cbiAgICAuZGV0YWlscy1wcmljZSB7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICBjb2xvcjogdmFyKC0tcGFnZS1jb2xvcik7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgfVxuXG4gICAgLmRldGFpbHMtc2FsZS1wcmljZSB7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIG1hcmdpbi1sZWZ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuICB9XG5cbiAgLmRldGFpbHMtcHVyY2hhc2Utb3B0aW9ucy1yb3cge1xuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IHZhcigtLXBhZ2Utb3B0aW9ucy1ndXR0ZXIpO1xuXG4gICAgcGFkZGluZy10b3A6IDBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC0gdmFyKC0tcGFnZS1vcHRpb25zLWd1dHRlcikpO1xuICAgIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC0gdmFyKC0tcGFnZS1vcHRpb25zLWd1dHRlcikpO1xuICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpO1xuXG4gICAgLmF1eC1hY3Rpb24tY29sIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgcGFkZGluZy10b3A6IDBweDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG5cbiAgICAgIC5zaXplLWNoYXJ0LWJ0biB7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm1haW4tY2FsbC10by1hY3Rpb24tY29sIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gICAgfVxuXG4gICAgLnNlbGVjdC12YXJpYW50LWJ0biB7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICB9XG5cbiAgICAuYWRkLXRvLWNhcnQtYnRuIHtcbiAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgbWFyZ2luLXRvcDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgIH1cbiAgfVxuXG4gIC5kZXRhaWwtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcbiAgICBtYXJnaW46IDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICB9XG5cbiAgLmRldGFpbHMtZGVzY3JpcHRpb24td3JhcHBlciB7XG4gICAgcGFkZGluZy10b3A6IDBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMik7XG5cbiAgICAuZGV0YWlscy1kZXNjcmlwdGlvbiB7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjM7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG4gICAgfVxuICB9XG5cbiAgLmRldGFpbC1hbHQtdGl0bGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay1zaGFkZSk7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICB9XG5cbiAgLnJlbGF0ZWQtcHJvZHVjdHMtd3JhcHBlciB7XG4gICAgcGFkZGluZy10b3A6IDBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMik7XG5cbiAgICAucmVsYXRlZC1wcm9kdWN0cy1saXN0IHtcbiAgICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgICAgLnJlbGF0ZWQtcHJvZHVjdC1pdGVtIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKTtcblxuICAgICAgICAmOm50aC1jaGlsZChvZGQpIHtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1wYWdlLXJlbGF0ZWQtaXRlbXMtZ3V0dGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLXBhZ2UtcmVsYXRlZC1pdGVtcy1ndXR0ZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLml0ZW0taW1hZ2Utd3JhcHBlciB7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcblxuICAgICAgICAgIC5pbWFnZS1hbmNob3Ige1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLml0ZW0tZGV0YWlscy13cmFwcGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAgIHBhZGRpbmc6IDVweCA1cHggMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLml0ZW0tbmFtZSB7XG4gICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgbWluLXdpZHRoOiA5MCU7XG5cbiAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAgICAgICAubmFtZS1hbmNob3Ige1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLml0ZW0tc2FsZS1wcmljZSB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcGFnZS1jb2xvcik7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBtaW4td2lkdGg6IDMwJTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cbi8vIElTU1VFOiAuc3dpcGVyLXBhZ2dpbmF0aW9uIGdldHMgcmVuZGVyZWQgZHluYW1pY2FsbHkuIFRoYXQgcHJldmVudHMgc3R5bGluZyB0aGUgZWxlbWVudHMgd2hlbiB1c2luZyB0aGUgZGVmYXVsdCBBbmd1bGFyIFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbi8vICAgICAgICAoQW5ndWxhciBkb2Vzbid0IGFkZCBhbiAnX25nY29udGVudCcgYXR0cmlidXRlIHRvIHRoZSAuc3dpcGVyLXBhZ2dpbmF0aW9uIGJlY2F1c2UgaXQncyBkeW5hbWljYWxseSByZW5kZXJlZClcbi8vIEZJWDogICBTZWU6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zNjI2NTA3Mi8xMTE2OTU5XG46aG9zdCA6Om5nLWRlZXAgLmRldGFpbHMtc2xpZGVzIHtcbiAgLnN3aXBlci1wYWdpbmF0aW9uIHtcbiAgICBoZWlnaHQ6IHZhcigtLXBhZ2Utc3dpcGVyLXBhZ2luYXRpb24taGVpZ2h0KTtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICAvLyAuc3dpcGVyLXBhZ2luYXRpb24gaXMgMThweCBoZWlnaHQsIC5zbGlkZS1pbm5lci1yb3cgaGFzIDQwcHggb2YgcGFkZGluZy1ib3R0b20gPT4gYm90dG9tID0gKDQwcHggLSAxOHB4KS8yID0gMTFweFxuICAgIGJvdHRvbTogY2FsYygodmFyKC0tcGFnZS1zd2lwZXItcGFnaW5hdGlvbi1zcGFjZSkgLSB2YXIoLS1wYWdlLXN3aXBlci1wYWdpbmF0aW9uLWhlaWdodCkgKSAvIDIpO1xuXG4gICAgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XG4gICAgICB3aWR0aDogdmFyKC0tcGFnZS1wYWdpbmF0aW9uLWJ1bGxldC1zaXplKTtcbiAgICAgIGhlaWdodDogdmFyKC0tcGFnZS1wYWdpbmF0aW9uLWJ1bGxldC1zaXplKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gQWxlcnRzIGFuZCBpbiBnZW5lcmFsIGFsbCBvdmVybGF5cyBhcmUgYXR0YWNoZWQgdG8gdGhlIGJvZHkgb3IgaW9uLWFwcCBkaXJlY3RseVxuLy8gV2UgbmVlZCB0byB1c2UgOjpuZy1kZWVwIHRvIGFjY2VzcyBpdCBmcm9tIGhlcmVcbjo6bmctZGVlcCAudmFyaWFudC1hbGVydCB7XG4gIEBpbmNsdWRlIHNlbGVjdC1hbGVydCgpO1xuXG4gIC8vIFZhcmlhYmxlcyBzaG91bGQgYmUgaW4gYSBkZWVwZXIgc2VsZWN0b3Igb3IgYWZ0ZXIgdGhlIG1peGluIGluY2x1ZGUgdG8gb3ZlcnJpZGUgZGVmYXVsdCB2YWx1ZXNcbiAgLS1zZWxlY3QtYWxlcnQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIC0tc2VsZWN0LWFsZXJ0LWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgLS1zZWxlY3QtYWxlcnQtbWFyZ2luOiB2YXIoLS1hcHAtZmFpci1tYXJnaW4pO1xuXG4gIC5hbGVydC1tZXNzYWdlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4iLCI6aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1mYWlyLW1hcmdpbik7XG4gIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XG4gIC0tcGFnZS1zd2lwZXItcGFnaW5hdGlvbi1zcGFjZTogMzBweDtcbiAgLS1wYWdlLXN3aXBlci1wYWdpbmF0aW9uLWhlaWdodDogMThweDtcbiAgLS1wYWdlLXBhZ2luYXRpb24tYnVsbGV0LXNpemU6IDEwcHg7XG4gIC0tcGFnZS1vcHRpb25zLWd1dHRlcjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgLS1wYWdlLXJlbGF0ZWQtaXRlbXMtZ3V0dGVyOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAtLXBhZ2UtY29sb3I6ICNjYjMyOGY7XG59XG5cbi5mYXNoaW9uLWRldGFpbHMtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbn1cbi5mYXNoaW9uLWRldGFpbHMtY29udGVudCAuc2xpZGVyLXJvdyAuZGV0YWlscy1zbGlkZXMge1xuICAtLWJ1bGxldC1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcbiAgLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmU6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmZhc2hpb24tZGV0YWlscy1jb250ZW50IC5zbGlkZXItcm93IC5kZXRhaWxzLXNsaWRlcyAuc2xpZGUtaW5uZXItcm93IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFnZS1zd2lwZXItcGFnaW5hdGlvbi1zcGFjZSk7XG59XG4uZmFzaGlvbi1kZXRhaWxzLWNvbnRlbnQgLnNsaWRlci1yb3cgLnNob3djYXNlLWltYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZmFzaGlvbi1kZXRhaWxzLWNvbnRlbnQgLnNsaWRlci1yb3cgLnNob3djYXNlLWltYWdlLmNlbnRlcmVkLWltYWdlIHtcbiAgYmFja2dyb3VuZC1zaXplOiBhdXRvO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG4uZmFzaGlvbi1kZXRhaWxzLWNvbnRlbnQgLmRlc2NyaXB0aW9uLXdyYXBwZXIge1xuICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbikgdmFyKC0tcGFnZS1tYXJnaW4pIDBweDtcbn1cbi5mYXNoaW9uLWRldGFpbHMtY29udGVudCAuZGVzY3JpcHRpb24td3JhcHBlciAuZGV0YWlscy1uYW1lIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW46IDBweCAwcHggNXB4O1xufVxuLmZhc2hpb24tZGV0YWlscy1jb250ZW50IC5kZXNjcmlwdGlvbi13cmFwcGVyIC5kZXRhaWxzLWJyYW5kIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luOiAwcHggMHB4IHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cbi5mYXNoaW9uLWRldGFpbHMtY29udGVudCAuZGVzY3JpcHRpb24td3JhcHBlciAuZGV0YWlscy1wcmljZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luOiAwcHg7XG4gIGNvbG9yOiB2YXIoLS1wYWdlLWNvbG9yKTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLmZhc2hpb24tZGV0YWlscy1jb250ZW50IC5kZXNjcmlwdGlvbi13cmFwcGVyIC5kZXRhaWxzLXNhbGUtcHJpY2Uge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5mYXNoaW9uLWRldGFpbHMtY29udGVudCAuZGV0YWlscy1wdXJjaGFzZS1vcHRpb25zLXJvdyB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IHZhcigtLXBhZ2Utb3B0aW9ucy1ndXR0ZXIpO1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBwYWRkaW5nLWxlZnQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC0gdmFyKC0tcGFnZS1vcHRpb25zLWd1dHRlcikpO1xuICBwYWRkaW5nLXJpZ2h0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAtIHZhcigtLXBhZ2Utb3B0aW9ucy1ndXR0ZXIpKTtcbiAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMik7XG59XG4uZmFzaGlvbi1kZXRhaWxzLWNvbnRlbnQgLmRldGFpbHMtcHVyY2hhc2Utb3B0aW9ucy1yb3cgLmF1eC1hY3Rpb24tY29sIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cbi5mYXNoaW9uLWRldGFpbHMtY29udGVudCAuZGV0YWlscy1wdXJjaGFzZS1vcHRpb25zLXJvdyAuYXV4LWFjdGlvbi1jb2wgLnNpemUtY2hhcnQtYnRuIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGhlaWdodDogMjVweDtcbn1cbi5mYXNoaW9uLWRldGFpbHMtY29udGVudCAuZGV0YWlscy1wdXJjaGFzZS1vcHRpb25zLXJvdyAubWFpbi1jYWxsLXRvLWFjdGlvbi1jb2wge1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuLmZhc2hpb24tZGV0YWlscy1jb250ZW50IC5kZXRhaWxzLXB1cmNoYXNlLW9wdGlvbnMtcm93IC5zZWxlY3QtdmFyaWFudC1idG4ge1xuICBtYXJnaW46IDBweDtcbn1cbi5mYXNoaW9uLWRldGFpbHMtY29udGVudCAuZGV0YWlscy1wdXJjaGFzZS1vcHRpb25zLXJvdyAuYWRkLXRvLWNhcnQtYnRuIHtcbiAgbWFyZ2luOiAwcHg7XG4gIG1hcmdpbi10b3A6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cbi5mYXNoaW9uLWRldGFpbHMtY29udGVudCAuZGV0YWlsLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCk7XG4gIG1hcmdpbjogMHB4O1xuICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xufVxuLmZhc2hpb24tZGV0YWlscy1jb250ZW50IC5kZXRhaWxzLWRlc2NyaXB0aW9uLXdyYXBwZXIge1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBwYWRkaW5nLWxlZnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgcGFkZGluZy1yaWdodDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKTtcbn1cbi5mYXNoaW9uLWRldGFpbHMtY29udGVudCAuZGV0YWlscy1kZXNjcmlwdGlvbi13cmFwcGVyIC5kZXRhaWxzLWRlc2NyaXB0aW9uIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xufVxuLmZhc2hpb24tZGV0YWlscy1jb250ZW50IC5kZXRhaWwtYWx0LXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay1zaGFkZSk7XG4gIG1hcmdpbjogMHB4O1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG59XG4uZmFzaGlvbi1kZXRhaWxzLWNvbnRlbnQgLnJlbGF0ZWQtcHJvZHVjdHMtd3JhcHBlciB7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIHBhZGRpbmctbGVmdDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpO1xufVxuLmZhc2hpb24tZGV0YWlscy1jb250ZW50IC5yZWxhdGVkLXByb2R1Y3RzLXdyYXBwZXIgLnJlbGF0ZWQtcHJvZHVjdHMtbGlzdCB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcbn1cbi5mYXNoaW9uLWRldGFpbHMtY29udGVudCAucmVsYXRlZC1wcm9kdWN0cy13cmFwcGVyIC5yZWxhdGVkLXByb2R1Y3RzLWxpc3QgLnJlbGF0ZWQtcHJvZHVjdC1pdGVtIHtcbiAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKTtcbn1cbi5mYXNoaW9uLWRldGFpbHMtY29udGVudCAucmVsYXRlZC1wcm9kdWN0cy13cmFwcGVyIC5yZWxhdGVkLXByb2R1Y3RzLWxpc3QgLnJlbGF0ZWQtcHJvZHVjdC1pdGVtOm50aC1jaGlsZChvZGQpIHtcbiAgcGFkZGluZy1yaWdodDogdmFyKC0tcGFnZS1yZWxhdGVkLWl0ZW1zLWd1dHRlcik7XG59XG4uZmFzaGlvbi1kZXRhaWxzLWNvbnRlbnQgLnJlbGF0ZWQtcHJvZHVjdHMtd3JhcHBlciAucmVsYXRlZC1wcm9kdWN0cy1saXN0IC5yZWxhdGVkLXByb2R1Y3QtaXRlbTpudGgtY2hpbGQoZXZlbikge1xuICBwYWRkaW5nLWxlZnQ6IHZhcigtLXBhZ2UtcmVsYXRlZC1pdGVtcy1ndXR0ZXIpO1xufVxuLmZhc2hpb24tZGV0YWlscy1jb250ZW50IC5yZWxhdGVkLXByb2R1Y3RzLXdyYXBwZXIgLnJlbGF0ZWQtcHJvZHVjdHMtbGlzdCAucmVsYXRlZC1wcm9kdWN0LWl0ZW0gLml0ZW0taW1hZ2Utd3JhcHBlciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG59XG4uZmFzaGlvbi1kZXRhaWxzLWNvbnRlbnQgLnJlbGF0ZWQtcHJvZHVjdHMtd3JhcHBlciAucmVsYXRlZC1wcm9kdWN0cy1saXN0IC5yZWxhdGVkLXByb2R1Y3QtaXRlbSAuaXRlbS1pbWFnZS13cmFwcGVyIC5pbWFnZS1hbmNob3Ige1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5mYXNoaW9uLWRldGFpbHMtY29udGVudCAucmVsYXRlZC1wcm9kdWN0cy13cmFwcGVyIC5yZWxhdGVkLXByb2R1Y3RzLWxpc3QgLnJlbGF0ZWQtcHJvZHVjdC1pdGVtIC5pdGVtLWRldGFpbHMtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDVweCA1cHggMHB4O1xufVxuLmZhc2hpb24tZGV0YWlscy1jb250ZW50IC5yZWxhdGVkLXByb2R1Y3RzLXdyYXBwZXIgLnJlbGF0ZWQtcHJvZHVjdHMtbGlzdCAucmVsYXRlZC1wcm9kdWN0LWl0ZW0gLml0ZW0tbmFtZSB7XG4gIG1hcmdpbjogMHB4O1xuICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWluLXdpZHRoOiA5MCU7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmZhc2hpb24tZGV0YWlscy1jb250ZW50IC5yZWxhdGVkLXByb2R1Y3RzLXdyYXBwZXIgLnJlbGF0ZWQtcHJvZHVjdHMtbGlzdCAucmVsYXRlZC1wcm9kdWN0LWl0ZW0gLml0ZW0tbmFtZSAubmFtZS1hbmNob3Ige1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCk7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uZmFzaGlvbi1kZXRhaWxzLWNvbnRlbnQgLnJlbGF0ZWQtcHJvZHVjdHMtd3JhcHBlciAucmVsYXRlZC1wcm9kdWN0cy1saXN0IC5yZWxhdGVkLXByb2R1Y3QtaXRlbSAuaXRlbS1zYWxlLXByaWNlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiB2YXIoLS1wYWdlLWNvbG9yKTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1pbi13aWR0aDogMzAlO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmRldGFpbHMtc2xpZGVzIC5zd2lwZXItcGFnaW5hdGlvbiB7XG4gIGhlaWdodDogdmFyKC0tcGFnZS1zd2lwZXItcGFnaW5hdGlvbi1oZWlnaHQpO1xuICBsaW5lLWhlaWdodDogMTtcbiAgYm90dG9tOiBjYWxjKCh2YXIoLS1wYWdlLXN3aXBlci1wYWdpbmF0aW9uLXNwYWNlKSAtIHZhcigtLXBhZ2Utc3dpcGVyLXBhZ2luYXRpb24taGVpZ2h0KSApIC8gMik7XG59XG46aG9zdCA6Om5nLWRlZXAgLmRldGFpbHMtc2xpZGVzIC5zd2lwZXItcGFnaW5hdGlvbiAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcbiAgd2lkdGg6IHZhcigtLXBhZ2UtcGFnaW5hdGlvbi1idWxsZXQtc2l6ZSk7XG4gIGhlaWdodDogdmFyKC0tcGFnZS1wYWdpbmF0aW9uLWJ1bGxldC1zaXplKTtcbn1cblxuOjpuZy1kZWVwIC52YXJpYW50LWFsZXJ0IHtcbiAgLS1zZWxlY3QtYWxlcnQtY29sb3I6ICMwMDA7XG4gIC0tc2VsZWN0LWFsZXJ0LWJhY2tncm91bmQ6ICNGRkY7XG4gIC0tc2VsZWN0LWFsZXJ0LW1hcmdpbjogMTZweDtcbiAgLS1zZWxlY3QtYWxlcnQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIC0tc2VsZWN0LWFsZXJ0LWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgLS1zZWxlY3QtYWxlcnQtbWFyZ2luOiB2YXIoLS1hcHAtZmFpci1tYXJnaW4pO1xufVxuOjpuZy1kZWVwIC52YXJpYW50LWFsZXJ0IC5hbGVydC1oZWFkIHtcbiAgcGFkZGluZy10b3A6IGNhbGMoKHZhcigtLXNlbGVjdC1hbGVydC1tYXJnaW4pIC8gNCkgKiAzKTtcbiAgcGFkZGluZy1ib3R0b206IGNhbGMoKHZhcigtLXNlbGVjdC1hbGVydC1tYXJnaW4pIC8gNCkgKiAzKTtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IHZhcigtLXNlbGVjdC1hbGVydC1tYXJnaW4pO1xuICBwYWRkaW5nLWlubGluZS1lbmQ6IHZhcigtLXNlbGVjdC1hbGVydC1tYXJnaW4pO1xufVxuOjpuZy1kZWVwIC52YXJpYW50LWFsZXJ0IC5hbGVydC10aXRsZSB7XG4gIGNvbG9yOiB2YXIoLS1zZWxlY3QtYWxlcnQtY29sb3IpO1xufVxuOjpuZy1kZWVwIC52YXJpYW50LWFsZXJ0IC5hbGVydC1oZWFkLFxuOjpuZy1kZWVwIC52YXJpYW50LWFsZXJ0IC5hbGVydC1tZXNzYWdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VsZWN0LWFsZXJ0LWJhY2tncm91bmQpO1xufVxuOjpuZy1kZWVwIC52YXJpYW50LWFsZXJ0IC5hbGVydC13cmFwcGVyLnNjLWlvbi1hbGVydC1pb3MgLmFsZXJ0LXRpdGxlIHtcbiAgbWFyZ2luOiAwcHg7XG59XG46Om5nLWRlZXAgLnZhcmlhbnQtYWxlcnQgLmFsZXJ0LXdyYXBwZXIuc2MtaW9uLWFsZXJ0LW1kIC5hbGVydC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbjo6bmctZGVlcCAudmFyaWFudC1hbGVydCAuYWxlcnQtd3JhcHBlci5zYy1pb24tYWxlcnQtbWQgLmFsZXJ0LWJ1dHRvbiB7XG4gIC0tcGFkZGluZy10b3A6IDA7XG4gIC0tcGFkZGluZy1zdGFydDogMC45ZW07XG4gIC0tcGFkZGluZy1lbmQ6IDAuOWVtO1xuICAtLXBhZGRpbmctYm90dG9tOiAwO1xuICBoZWlnaHQ6IDIuMWVtO1xuICBmb250LXNpemU6IDEzcHg7XG59XG46Om5nLWRlZXAgLnZhcmlhbnQtYWxlcnQgLmFsZXJ0LW1lc3NhZ2Uge1xuICBkaXNwbGF5OiBub25lO1xufSIsIkBtaXhpbiBzZWxlY3QtYWxlcnQoKSB7XG4gIC8vIERlZmF1bHQgdmFsdWVzXG4gIC0tc2VsZWN0LWFsZXJ0LWNvbG9yOiAjMDAwO1xuICAtLXNlbGVjdC1hbGVydC1iYWNrZ3JvdW5kOiAjRkZGO1xuICAtLXNlbGVjdC1hbGVydC1tYXJnaW46IDE2cHg7XG5cbiAgLmFsZXJ0LWhlYWQge1xuICAgIHBhZGRpbmctdG9wOiBjYWxjKCh2YXIoLS1zZWxlY3QtYWxlcnQtbWFyZ2luKSAvIDQpICogMyk7XG4gICAgcGFkZGluZy1ib3R0b206IGNhbGMoKHZhcigtLXNlbGVjdC1hbGVydC1tYXJnaW4pIC8gNCkgKiAzKTtcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogdmFyKC0tc2VsZWN0LWFsZXJ0LW1hcmdpbik7XG4gICAgcGFkZGluZy1pbmxpbmUtZW5kOiB2YXIoLS1zZWxlY3QtYWxlcnQtbWFyZ2luKTtcbiAgfVxuXG4gIC5hbGVydC10aXRsZSB7XG4gICAgY29sb3I6IHZhcigtLXNlbGVjdC1hbGVydC1jb2xvcik7XG4gIH1cblxuICAuYWxlcnQtaGVhZCxcbiAgLmFsZXJ0LW1lc3NhZ2Uge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlbGVjdC1hbGVydC1iYWNrZ3JvdW5kKTtcbiAgfVxuXG4gIC8vIGlPUyBzdHlsZXNcbiAgLmFsZXJ0LXdyYXBwZXIuc2MtaW9uLWFsZXJ0LWlvcyB7XG4gICAgLmFsZXJ0LXRpdGxlIHtcbiAgICAgIG1hcmdpbjogMHB4O1xuICAgIH1cbiAgfVxuXG4gIC8vIE1hdGVyaWFsIHN0eWxlc1xuICAuYWxlcnQtd3JhcHBlci5zYy1pb24tYWxlcnQtbWQge1xuICAgIC5hbGVydC10aXRsZSB7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICAgIH1cblxuICAgIC5hbGVydC1idXR0b24ge1xuICAgICAgLy8gVmFsdWVzIHRha2VuIGZyb20gSW9uaWMgc21hbGwgYnV0dG9uIHByZXNldFxuICAgICAgLS1wYWRkaW5nLXRvcDogMDtcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMC45ZW07XG4gICAgICAtLXBhZGRpbmctZW5kOiAwLjllbTtcbiAgICAgIC0tcGFkZGluZy1ib3R0b206IDA7XG5cbiAgICAgIGhlaWdodDogMi4xZW07XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgfVxuICB9XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/fashion/details/styles/fashion-details.shell.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/fashion/details/styles/fashion-details.shell.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFashionDetailsStylesFashionDetailsShellScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  --shell-color: #cb328f;\n  --shell-color-rgb: 203,50,143;\n}\n\napp-image-shell.showcase-image {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .10);\n  --image-shell-spinner-color: rgba(var(--shell-color-rgb), .25);\n}\n\n.details-name > app-text-shell {\n  --text-shell-animation-background: rgba(var(--shell-color-rgb), .25);\n  --text-shell-animation-color: rgba(var(--shell-color-rgb), .35);\n  --text-shell-line-height: 18px;\n  max-width: 60%;\n}\n\n.details-name > app-text-shell.text-loaded {\n  max-width: inherit;\n}\n\n.details-brand > app-text-shell {\n  --text-shell-animation-background: rgba(var(--shell-color-rgb), .20);\n  --text-shell-animation-color: rgba(var(--shell-color-rgb), .30);\n  --text-shell-line-height: 14px;\n  max-width: 40%;\n}\n\n.details-brand > app-text-shell.text-loaded {\n  max-width: inherit;\n}\n\n.details-price > app-text-shell {\n  --text-shell-animation-background: rgba(var(--shell-color-rgb), .10);\n  --text-shell-animation-color: rgba(var(--shell-color-rgb), .20);\n  --text-shell-line-height: 18px;\n  width: 50px;\n}\n\n.details-price > app-text-shell.text-loaded {\n  width: inherit;\n}\n\n.details-sale-price > app-text-shell {\n  --text-shell-animation-background: rgba(var(--shell-color-rgb), .10);\n  --text-shell-animation-color: rgba(var(--shell-color-rgb), .20);\n  --text-shell-line-height: 18px;\n  width: 50px;\n}\n\n.details-sale-price > app-text-shell.text-loaded {\n  width: inherit;\n}\n\n.details-description > app-text-shell {\n  --text-shell-animation-background: rgba(var(--shell-color-rgb), .10);\n  --text-shell-animation-color: rgba(var(--shell-color-rgb), .20);\n  --text-shell-line-height: 14px;\n}\n\n.details-description.product-code > app-text-shell {\n  max-width: 40%;\n}\n\n.details-description.product-code > app-text-shell.text-loaded {\n  max-width: inherit;\n}\n\napp-image-shell.related-product-image {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .10);\n  --image-shell-spinner-color: rgba(var(--shell-color-rgb), .25);\n}\n\n.item-name app-text-shell {\n  --text-shell-animation-background: rgba(var(--shell-color-rgb), .25);\n  --text-shell-animation-color: rgba(var(--shell-color-rgb), .35);\n  --text-shell-line-height: 14px;\n}\n\n.item-sale-price > app-text-shell {\n  --text-shell-animation-background: rgba(var(--shell-color-rgb), .20);\n  --text-shell-animation-color: rgba(var(--shell-color-rgb), .30);\n  --text-shell-line-height: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9haXIvRG9jdW1lbnRzL0dpdEh1Yi9wb2Qvc3JjL2FwcC9mYXNoaW9uL2RldGFpbHMvc3R5bGVzL2Zhc2hpb24tZGV0YWlscy5zaGVsbC5zY3NzIiwic3JjL2FwcC9mYXNoaW9uL2RldGFpbHMvc3R5bGVzL2Zhc2hpb24tZGV0YWlscy5zaGVsbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usc0JBQUE7RUFDQSw2QkFBQTtBQ0RGOztBRFdBO0VBQ0UsbUVBQUE7RUFDQSw4REFBQTtBQ1JGOztBRFdBO0VBQ0Usb0VBQUE7RUFDQSwrREFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtBQ1JGOztBRFVFO0VBQ0Usa0JBQUE7QUNSSjs7QURZQTtFQUNFLG9FQUFBO0VBQ0EsK0RBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7QUNURjs7QURXRTtFQUNFLGtCQUFBO0FDVEo7O0FEYUE7RUFDRSxvRUFBQTtFQUNBLCtEQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0FDVkY7O0FEWUU7RUFDRSxjQUFBO0FDVko7O0FEY0E7RUFDRSxvRUFBQTtFQUNBLCtEQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0FDWEY7O0FEYUU7RUFDRSxjQUFBO0FDWEo7O0FEZUE7RUFDRSxvRUFBQTtFQUNBLCtEQUFBO0VBQ0EsOEJBQUE7QUNaRjs7QURlQTtFQUNFLGNBQUE7QUNaRjs7QURjRTtFQUNFLGtCQUFBO0FDWko7O0FEZ0JBO0VBQ0UsbUVBQUE7RUFDQSw4REFBQTtBQ2JGOztBRGdCQTtFQUNFLG9FQUFBO0VBQ0EsK0RBQUE7RUFDQSw4QkFBQTtBQ2JGOztBRGdCQTtFQUNFLG9FQUFBO0VBQ0EsK0RBQUE7RUFDQSw4QkFBQTtBQ2JGIiwiZmlsZSI6InNyYy9hcHAvZmFzaGlvbi9kZXRhaWxzL3N0eWxlcy9mYXNoaW9uLWRldGFpbHMuc2hlbGwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEN1c3RvbSB2YXJpYWJsZXNcbi8vIE5vdGU6ICBUaGVzZSBvbmVzIHdlcmUgYWRkZWQgYnkgdXMgYW5kIGhhdmUgbm90aGluZyB0byBkbyB3aXRoIElvbmljIENTUyBDdXN0b20gUHJvcGVydGllc1xuOmhvc3Qge1xuICAtLXNoZWxsLWNvbG9yOiAjY2IzMjhmO1xuICAtLXNoZWxsLWNvbG9yLXJnYjogMjAzLDUwLDE0Mztcbn1cblxuLy8gWW91IGNhbiBhbHNvIGFwcGx5IHNoZWVsIHN0eWxlcyB0byB0aGUgZW50aXJlIHBhZ2Vcbjpob3N0KC5pcy1zaGVsbCkge1xuICAvLyBpb24tY29udGVudCB7XG4gIC8vICAgb3BhY2l0eTogMC44O1xuICAvLyB9XG59XG5cbmFwcC1pbWFnZS1zaGVsbC5zaG93Y2FzZS1pbWFnZSB7XG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG4gIC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMjUpO1xufVxuXG4uZGV0YWlscy1uYW1lID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtYW5pbWF0aW9uLWJhY2tncm91bmQ6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjI1KTtcbiAgLS10ZXh0LXNoZWxsLWFuaW1hdGlvbi1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMzUpO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE4cHg7XG4gIG1heC13aWR0aDogNjAlO1xuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIG1heC13aWR0aDogaW5oZXJpdDtcbiAgfVxufVxuXG4uZGV0YWlscy1icmFuZCA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWFuaW1hdGlvbi1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4yMCk7XG4gIC0tdGV4dC1zaGVsbC1hbmltYXRpb24tY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjMwKTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xuICBtYXgtd2lkdGg6IDQwJTtcblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gIH1cbn1cblxuLmRldGFpbHMtcHJpY2UgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1hbmltYXRpb24tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLXRleHQtc2hlbGwtYW5pbWF0aW9uLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4yMCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMThweDtcbiAgd2lkdGg6IDUwcHg7XG5cbiAgJi50ZXh0LWxvYWRlZCB7XG4gICAgd2lkdGg6IGluaGVyaXQ7XG4gIH1cbn1cblxuLmRldGFpbHMtc2FsZS1wcmljZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWFuaW1hdGlvbi1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG4gIC0tdGV4dC1zaGVsbC1hbmltYXRpb24tY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjIwKTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxOHB4O1xuICB3aWR0aDogNTBweDtcblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICB3aWR0aDogaW5oZXJpdDtcbiAgfVxufVxuXG4uZGV0YWlscy1kZXNjcmlwdGlvbiA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWFuaW1hdGlvbi1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG4gIC0tdGV4dC1zaGVsbC1hbmltYXRpb24tY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjIwKTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xufVxuXG4uZGV0YWlscy1kZXNjcmlwdGlvbi5wcm9kdWN0LWNvZGUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIG1heC13aWR0aDogNDAlO1xuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIG1heC13aWR0aDogaW5oZXJpdDtcbiAgfVxufVxuXG5hcHAtaW1hZ2Utc2hlbGwucmVsYXRlZC1wcm9kdWN0LWltYWdlIHtcbiAgLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQ6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcbiAgLS1pbWFnZS1zaGVsbC1zcGlubmVyLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4yNSk7XG59XG5cbi5pdGVtLW5hbWUgYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtYW5pbWF0aW9uLWJhY2tncm91bmQ6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjI1KTtcbiAgLS10ZXh0LXNoZWxsLWFuaW1hdGlvbi1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMzUpO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG59XG5cbi5pdGVtLXNhbGUtcHJpY2UgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1hbmltYXRpb24tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMjApO1xuICAtLXRleHQtc2hlbGwtYW5pbWF0aW9uLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4zMCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTZweDtcbn1cbiIsIjpob3N0IHtcbiAgLS1zaGVsbC1jb2xvcjogI2NiMzI4ZjtcbiAgLS1zaGVsbC1jb2xvci1yZ2I6IDIwMyw1MCwxNDM7XG59XG5cbmFwcC1pbWFnZS1zaGVsbC5zaG93Y2FzZS1pbWFnZSB7XG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG4gIC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMjUpO1xufVxuXG4uZGV0YWlscy1uYW1lID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtYW5pbWF0aW9uLWJhY2tncm91bmQ6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjI1KTtcbiAgLS10ZXh0LXNoZWxsLWFuaW1hdGlvbi1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMzUpO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE4cHg7XG4gIG1heC13aWR0aDogNjAlO1xufVxuLmRldGFpbHMtbmFtZSA+IGFwcC10ZXh0LXNoZWxsLnRleHQtbG9hZGVkIHtcbiAgbWF4LXdpZHRoOiBpbmhlcml0O1xufVxuXG4uZGV0YWlscy1icmFuZCA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWFuaW1hdGlvbi1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4yMCk7XG4gIC0tdGV4dC1zaGVsbC1hbmltYXRpb24tY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjMwKTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xuICBtYXgtd2lkdGg6IDQwJTtcbn1cbi5kZXRhaWxzLWJyYW5kID4gYXBwLXRleHQtc2hlbGwudGV4dC1sb2FkZWQge1xuICBtYXgtd2lkdGg6IGluaGVyaXQ7XG59XG5cbi5kZXRhaWxzLXByaWNlID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtYW5pbWF0aW9uLWJhY2tncm91bmQ6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcbiAgLS10ZXh0LXNoZWxsLWFuaW1hdGlvbi1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMjApO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE4cHg7XG4gIHdpZHRoOiA1MHB4O1xufVxuLmRldGFpbHMtcHJpY2UgPiBhcHAtdGV4dC1zaGVsbC50ZXh0LWxvYWRlZCB7XG4gIHdpZHRoOiBpbmhlcml0O1xufVxuXG4uZGV0YWlscy1zYWxlLXByaWNlID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtYW5pbWF0aW9uLWJhY2tncm91bmQ6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcbiAgLS10ZXh0LXNoZWxsLWFuaW1hdGlvbi1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMjApO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE4cHg7XG4gIHdpZHRoOiA1MHB4O1xufVxuLmRldGFpbHMtc2FsZS1wcmljZSA+IGFwcC10ZXh0LXNoZWxsLnRleHQtbG9hZGVkIHtcbiAgd2lkdGg6IGluaGVyaXQ7XG59XG5cbi5kZXRhaWxzLWRlc2NyaXB0aW9uID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtYW5pbWF0aW9uLWJhY2tncm91bmQ6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcbiAgLS10ZXh0LXNoZWxsLWFuaW1hdGlvbi1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMjApO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG59XG5cbi5kZXRhaWxzLWRlc2NyaXB0aW9uLnByb2R1Y3QtY29kZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgbWF4LXdpZHRoOiA0MCU7XG59XG4uZGV0YWlscy1kZXNjcmlwdGlvbi5wcm9kdWN0LWNvZGUgPiBhcHAtdGV4dC1zaGVsbC50ZXh0LWxvYWRlZCB7XG4gIG1heC13aWR0aDogaW5oZXJpdDtcbn1cblxuYXBwLWltYWdlLXNoZWxsLnJlbGF0ZWQtcHJvZHVjdC1pbWFnZSB7XG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG4gIC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMjUpO1xufVxuXG4uaXRlbS1uYW1lIGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWFuaW1hdGlvbi1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4yNSk7XG4gIC0tdGV4dC1zaGVsbC1hbmltYXRpb24tY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjM1KTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xufVxuXG4uaXRlbS1zYWxlLXByaWNlID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtYW5pbWF0aW9uLWJhY2tncm91bmQ6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjIwKTtcbiAgLS10ZXh0LXNoZWxsLWFuaW1hdGlvbi1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMzApO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE2cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/shell/data-store.ts":
  /*!*************************************!*\
    !*** ./src/app/shell/data-store.ts ***!
    \*************************************/

  /*! exports provided: ShellModel, DataStore */

  /***/
  function srcAppShellDataStoreTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShellModel", function () {
      return ShellModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataStore", function () {
      return DataStore;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _config_app_shell_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./config/app-shell.config */
    "./src/app/shell/config/app-shell.config.ts");

    class ShellModel {
      constructor() {
        this.isShell = false;
      }

    }

    class DataStore {
      constructor(shellModel) {
        this.shellModel = shellModel; // We wait on purpose 2 secs on local environment when fetching from json to simulate the backend roundtrip.
        // However, in production you should set this delay to 0 in the assets/config/app-shell.config.prod.json file.
        // tslint:disable-next-line:max-line-length

        this.networkDelay = _config_app_shell_config__WEBPACK_IMPORTED_MODULE_3__["AppShellConfig"].settings && _config_app_shell_config__WEBPACK_IMPORTED_MODULE_3__["AppShellConfig"].settings.networkDelay ? _config_app_shell_config__WEBPACK_IMPORTED_MODULE_3__["AppShellConfig"].settings.networkDelay : 0;
        this.timeline = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
      } // Static function with generics
      // (ref: https://stackoverflow.com/a/24293088/1116959)
      // Append a shell (T & ShellModel) to every value (T) emmited to the timeline


      static AppendShell(dataObservable, shellModel, networkDelay = 400) {
        const delayObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(true).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(networkDelay)); // Assign shell flag accordingly
        // (ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)

        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([delayObservable, dataObservable]).pipe( // Dismiss unnecessary delayValue
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(([delayValue, dataValue]) => Object.assign(dataValue, {
          isShell: false
        })), // Set the shell model as the initial value
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(Object.assign(shellModel, {
          isShell: true
        })));
      }

      load(dataSourceObservable) {
        const dataSourceWithShellObservable = DataStore.AppendShell(dataSourceObservable, this.shellModel, this.networkDelay);
        dataSourceWithShellObservable.subscribe(dataValue => {
          this.timeline.next(dataValue);
        });
      }

      get state() {
        return this.timeline.asObservable();
      }

    }
    /***/

  }
}]);
//# sourceMappingURL=fashion-details-fashion-details-module-es5.js.map