(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["food-listing-food-listing-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/food/listing/food-listing.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/food/listing/food-listing.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFoodListingFoodListingPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"app/categories\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Food Listing</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"food-listing-content\">\n  <ng-container *ngIf=\"listing?.items\">\n    <div class=\"listing-item\" *ngFor=\"let item of listing.items\">\n      <div class=\"cover-wrapper\">\n        <a class=\"cover-anchor\" [routerLink]=\"['/app/categories/food/', item.slug]\">\n          <app-image-shell class=\"cover-image add-overlay\" animation=\"spinner\" [mode]=\"'cover'\" [src]=\"item.image\">\n            <app-aspect-ratio [ratio]=\"{w:35, h:15}\">\n              <div class=\"cover-icon-wrapper\">\n                <app-aspect-ratio [ratio]=\"{w: 20, h: 7}\">\n                  <app-image-shell class=\"item-icon\" [src]=\"item.icon\"></app-image-shell>\n                </app-aspect-ratio>\n              </div>\n            </app-aspect-ratio>\n          </app-image-shell>\n        </a>\n      </div>\n      <ion-row class=\"info-row\">\n        <ion-col class=\"description-col\">\n          <ion-row class=\"description-wrapper\">\n            <h3 class=\"item-name\">\n              <a class=\"name-anchor\" [routerLink]=\"['/app/categories/food/', item.slug]\">\n                <app-text-shell [data]=\"item.name\"></app-text-shell>\n              </a>\n            </h3>\n            <p class=\"item-address\">\n              <app-text-shell [data]=\"item.address\"></app-text-shell>\n            </p>\n            <ion-row class=\"item-tags\">\n              <ion-col class=\"tag-wrapper\" *ngFor=\"let tag of item.tags\">\n                <span class=\"item-tag\">\n                  <app-text-shell [data]=\"tag\"></app-text-shell>\n                </span>\n              </ion-col>\n            </ion-row>\n          </ion-row>\n        </ion-col>\n        <ion-col class=\"stats-col\" size=\"2\">\n          <span class=\"item-rating\" [attr.ratingBase]=\"item.rating | floor\">\n            <app-text-shell [data]=\"item.rating\"></app-text-shell>\n          </span>\n          <div class=\"item-price-range\">\n            <span class=\"price\" *ngFor=\"let price of [].constructor(item.priceRange)\">$</span>\n            <span class=\"no-price\" *ngFor=\"let price of [].constructor(5 - (item.priceRange || 1))\">$</span>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"pictures-row\">\n        <ion-col class=\"picture-wrapper\" size=\"2\" *ngFor=\"let picture of item.pictures.slice(0, 5); let i = index\">\n          <app-aspect-ratio [ratio]=\"{w: 1, h: 1}\">\n            <app-image-shell class=\"picture-image\" [src]=\"picture\" [alt]=\"'food image'\"></app-image-shell>\n          </app-aspect-ratio>\n          <a class=\"has-more-pictures\" [routerLink]=\"['/app/categories/food/', item.slug]\" *ngIf=\"i == 4 && item.pictures.length > 5\">\n            <span class=\"pictures-count\">{{ item.pictures.length - 5 }}</span>\n          </a>\n        </ion-col>\n      </ion-row>\n    </div>\n  </ng-container>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/food/listing/food-listing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/food/listing/food-listing.module.ts ***!
    \*****************************************************/

  /*! exports provided: FoodListingPageModule */

  /***/
  function srcAppFoodListingFoodListingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FoodListingPageModule", function () {
      return FoodListingPageModule;
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


    var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../pipes/pipes.module */
    "./src/app/pipes/pipes.module.ts");
    /* harmony import */


    var _food_listing_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./food-listing.page */
    "./src/app/food/listing/food-listing.page.ts");
    /* harmony import */


    var _food_listing_resolver__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./food-listing.resolver */
    "./src/app/food/listing/food-listing.resolver.ts");
    /* harmony import */


    var _food_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../food.service */
    "./src/app/food/food.service.ts");

    const routes = [{
      path: '',
      component: _food_listing_page__WEBPACK_IMPORTED_MODULE_9__["FoodListingPage"],
      resolve: {
        data: _food_listing_resolver__WEBPACK_IMPORTED_MODULE_10__["FoodListingResolver"]
      }
    }];
    let FoodListingPageModule = class FoodListingPageModule {};
    FoodListingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]],
      declarations: [_food_listing_page__WEBPACK_IMPORTED_MODULE_9__["FoodListingPage"]],
      providers: [_food_listing_resolver__WEBPACK_IMPORTED_MODULE_10__["FoodListingResolver"], _food_service__WEBPACK_IMPORTED_MODULE_11__["FoodService"]]
    })], FoodListingPageModule);
    /***/
  },

  /***/
  "./src/app/food/listing/food-listing.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/food/listing/food-listing.page.ts ***!
    \***************************************************/

  /*! exports provided: FoodListingPage */

  /***/
  function srcAppFoodListingFoodListingPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FoodListingPage", function () {
      return FoodListingPage;
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

    let FoodListingPage = class FoodListingPage {
      constructor(route) {
        this.route = route;
      }

      get isShell() {
        return this.listing && this.listing.isShell ? true : false;
      }

      ngOnInit() {
        this.route.data.subscribe(resolvedRouteData => {
          const listingDataStore = resolvedRouteData['data'];
          listingDataStore.state.subscribe(state => {
            this.listing = state;
          }, error => {});
        }, error => {});
      }

    };

    FoodListingPage.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.is-shell'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], FoodListingPage.prototype, "isShell", null);
    FoodListingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-food-listing',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./food-listing.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/food/listing/food-listing.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./styles/food-listing.page.scss */
      "./src/app/food/listing/styles/food-listing.page.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./styles/food-listing.shell.scss */
      "./src/app/food/listing/styles/food-listing.shell.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])], FoodListingPage);
    /***/
  },

  /***/
  "./src/app/food/listing/food-listing.resolver.ts":
  /*!*******************************************************!*\
    !*** ./src/app/food/listing/food-listing.resolver.ts ***!
    \*******************************************************/

  /*! exports provided: FoodListingResolver */

  /***/
  function srcAppFoodListingFoodListingResolverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FoodListingResolver", function () {
      return FoodListingResolver;
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


    var _food_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../food.service */
    "./src/app/food/food.service.ts");

    let FoodListingResolver = class FoodListingResolver {
      constructor(foodService) {
        this.foodService = foodService;
      }

      resolve() {
        const dataSource = this.foodService.getListingDataSource();
        const dataStore = this.foodService.getListingStore(dataSource);
        return dataStore;
      }

    };

    FoodListingResolver.ctorParameters = () => [{
      type: _food_service__WEBPACK_IMPORTED_MODULE_2__["FoodService"]
    }];

    FoodListingResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_food_service__WEBPACK_IMPORTED_MODULE_2__["FoodService"]])], FoodListingResolver);
    /***/
  },

  /***/
  "./src/app/food/listing/styles/food-listing.page.scss":
  /*!************************************************************!*\
    !*** ./src/app/food/listing/styles/food-listing.page.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFoodListingStylesFoodListingPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background);\n  --page-pictures-gutter: calc(var(--page-margin) / 4);\n  --page-tags-gutter: 4px;\n  --page-rating-5-color: #7ce198;\n  --page-rating-4-color: #a8e07c;\n  --page-rating-3-color: #cee07c;\n  --page-rating-2-color: #e0c77c;\n  --page-rating-1-color: #e07c7c;\n  --page-color: #ebbb00;\n  --page-color-rgb: 235,187,0;\n}\n\n.food-listing-content {\n  --background: var(--page-background);\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  --padding-top: var(--page-margin);\n  --padding-bottom: var(--page-margin);\n}\n\n.listing-item {\n  border-bottom: 2px solid var(--ion-color-medium-tint);\n  margin-bottom: calc(var(--page-margin) * 2);\n  padding-bottom: var(--page-margin);\n}\n\n.listing-item:last-child {\n  border-bottom: none;\n  margin-bottom: 0px;\n}\n\n.listing-item .cover-wrapper {\n  margin-bottom: var(--page-margin);\n}\n\n.listing-item .cover-wrapper .cover-anchor {\n  display: block;\n}\n\n.listing-item .cover-wrapper .cover-icon-wrapper {\n  margin: 0px 20%;\n  display: -webkit-box;\n  display: flex;\n  height: 100%;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.listing-item .info-row {\n  --ion-grid-columns: 10;\n  --ion-grid-column-padding: 0px;\n  margin: 0px calc(var(--page-pictures-gutter) * -1);\n  padding-bottom: var(--page-margin);\n}\n\n.listing-item .info-row::before, .listing-item .info-row::after {\n  content: \"\";\n  -webkit-box-flex: 0;\n          flex: 0 0 var(--page-pictures-gutter);\n}\n\n.listing-item .info-row .description-col .description-wrapper {\n  height: 100%;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.listing-item .info-row .description-col .item-name {\n  margin: 0px;\n  color: var(--ion-color-dark-tint);\n  font-size: 20px;\n}\n\n.listing-item .info-row .description-col .item-name .name-anchor {\n  display: block;\n  text-decoration: none;\n}\n\n.listing-item .info-row .description-col .item-address {\n  margin: 0px;\n  margin-top: 5px;\n  color: var(--ion-color-medium-tint);\n  font-size: 12px;\n}\n\n.listing-item .info-row .description-col .item-tags {\n  margin-top: 5px;\n}\n\n.listing-item .info-row .description-col .item-tags .tag-wrapper {\n  padding-right: var(--page-tags-gutter);\n  -webkit-box-flex: 0;\n          flex-grow: 0;\n  min-width: -webkit-fit-content;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n}\n\n.listing-item .info-row .description-col .item-tags .tag-wrapper:last-child {\n  padding-right: 0px;\n}\n\n.listing-item .info-row .description-col .item-tags .item-tag {\n  display: block;\n  border-radius: var(--app-narrow-radius);\n  border: 1px solid var(--ion-color-light-shade);\n  padding: calc(var(--page-tags-gutter) / 2) var(--page-tags-gutter);\n  font-size: 10px;\n  color: var(--ion-color-medium-tint);\n}\n\n.listing-item .info-row .stats-col {\n  padding-left: calc(var(--page-margin) / 2);\n}\n\n.listing-item .info-row .stats-col .item-rating {\n  background-color: rgba(var(--page-color-rgb), 0.35);\n  color: var(--ion-color-lightest);\n  border-radius: var(--app-narrow-radius);\n  padding-top: calc(var(--page-margin) / 3);\n  padding-bottom: calc(var(--page-margin) / 3);\n  padding-left: calc(var(--page-margin) / 2);\n  padding-right: calc(var(--page-margin) / 2);\n  font-size: 12px;\n  font-weight: 600;\n  width: 100%;\n  display: block;\n  text-align: center;\n}\n\n.listing-item .info-row .stats-col .item-rating[ratingBase=\"1\"] {\n  background-color: var(--page-rating-1-color);\n}\n\n.listing-item .info-row .stats-col .item-rating[ratingBase=\"2\"] {\n  background-color: var(--page-rating-2-color);\n}\n\n.listing-item .info-row .stats-col .item-rating[ratingBase=\"3\"] {\n  background-color: var(--page-rating-3-color);\n}\n\n.listing-item .info-row .stats-col .item-rating[ratingBase=\"4\"] {\n  background-color: var(--page-rating-4-color);\n}\n\n.listing-item .info-row .stats-col .item-rating[ratingBase=\"5\"] {\n  background-color: var(--page-rating-5-color);\n}\n\n.listing-item .info-row .stats-col .item-price-range {\n  margin-top: 5px;\n  font-size: 12px;\n  letter-spacing: 1px;\n  font-weight: 500;\n  text-align: center;\n}\n\n.listing-item .info-row .stats-col .item-price-range .price {\n  color: var(--page-color);\n}\n\n.listing-item .info-row .stats-col .item-price-range .no-price {\n  color: rgba(var(--ion-color-light-shade-rgb), 0.4);\n}\n\n.listing-item .pictures-row {\n  --ion-grid-columns: 10;\n  --ion-grid-column-padding: 0px;\n  margin: 0px calc(var(--page-pictures-gutter) * -1);\n}\n\n.listing-item .pictures-row .picture-wrapper {\n  padding: 0px var(--page-pictures-gutter);\n}\n\n.listing-item .pictures-row .picture-wrapper .has-more-pictures {\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  margin: 0px var(--page-pictures-gutter);\n  background-color: rgba(var(--page-color-rgb), 0.7);\n  border-radius: var(--app-narrow-radius);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  text-decoration: none;\n  z-index: 2;\n}\n\n.listing-item .pictures-row .picture-wrapper .has-more-pictures .pictures-count {\n  font-size: 22px;\n  color: var(--ion-color-lightest);\n  font-weight: 600;\n}\n\n.listing-item .pictures-row .picture-wrapper .has-more-pictures .pictures-count::before {\n  content: \"+\";\n  font-size: 26px;\n  color: var(--ion-color-lightest);\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9haXIvRG9jdW1lbnRzL0dpdEh1Yi9wb2Qvc3JjL2FwcC9mb29kL2xpc3Rpbmcvc3R5bGVzL2Zvb2QtbGlzdGluZy5wYWdlLnNjc3MiLCJzcmMvYXBwL2Zvb2QvbGlzdGluZy9zdHlsZXMvZm9vZC1saXN0aW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHFDQUFBO0VBQ0Esd0NBQUE7RUFFQSxvREFBQTtFQUNBLHVCQUFBO0VBRUEsOEJBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtFQUVBLHFCQUFBO0VBQ0EsMkJBQUE7QUNKRjs7QURRQTtFQUNFLG9DQUFBO0VBQ0EsbUNBQUE7RUFDQSxpQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esb0NBQUE7QUNMRjs7QURRQTtFQUNFLHFEQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQ0FBQTtBQ0xGOztBRE9FO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0xGOztBRFFFO0VBQ0UsaUNBQUE7QUNOSjs7QURRSTtFQUNFLGNBQUE7QUNOTjs7QURTSTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNQTjs7QURXRTtFQUNFLHNCQUFBO0VBQ0EsOEJBQUE7RUFFQSxrREFBQTtFQUNGLGtDQUFBO0FDVkY7O0FEYUk7RUFFRSxXQUFBO0VBQ0EsbUJBQUE7VUFBQSxxQ0FBQTtBQ1pOOztBRGdCTTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDZFI7O0FEaUJNO0VBQ0UsV0FBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtBQ2ZSOztBRGlCUTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtBQ2ZWOztBRG1CTTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsbUNBQUE7RUFDQSxlQUFBO0FDakJSOztBRG9CTTtFQUNFLGVBQUE7QUNsQlI7O0FEb0JRO0VBQ0Usc0NBQUE7RUFDQSxtQkFBQTtVQUFBLFlBQUE7RUFDQSw4QkFBQTtFQUFBLDJCQUFBO0VBQUEsc0JBQUE7QUNsQlY7O0FEb0JVO0VBQ0Usa0JBQUE7QUNsQlo7O0FEc0JRO0VBQ0UsY0FBQTtFQUNBLHVDQUFBO0VBQ0wsOENBQUE7RUFDQSxrRUFBQTtFQUNBLGVBQUE7RUFDQSxtQ0FBQTtBQ3BCTDs7QUR5Qkk7RUFDRSwwQ0FBQTtBQ3ZCTjs7QUR5Qk07RUFFRSxtREFBQTtFQUNKLGdDQUFBO0VBQ0EsdUNBQUE7RUFDQSx5Q0FBQTtFQUNBLDRDQUFBO0VBQ0EsMENBQUE7RUFDQSwyQ0FBQTtFQUNDLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUN4Qkw7O0FEMEJJO0VBQ0MsNENBQUE7QUN4Qkw7O0FEMEJJO0VBQ0MsNENBQUE7QUN4Qkw7O0FEMEJJO0VBQ0MsNENBQUE7QUN4Qkw7O0FEMEJJO0VBQ0MsNENBQUE7QUN4Qkw7O0FEMEJJO0VBQ0MsNENBQUE7QUN4Qkw7O0FENEJNO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUMxQlI7O0FENEJRO0VBQ0Usd0JBQUE7QUMxQlY7O0FENkJRO0VBQ0Usa0RBQUE7QUMzQlY7O0FEaUNFO0VBQ0Usc0JBQUE7RUFDQSw4QkFBQTtFQUVBLGtEQUFBO0FDaENKOztBRGtDSTtFQUNFLHdDQUFBO0FDaENOOztBRGtDTTtFQUNGLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUVJLHVDQUFBO0VBQ0osa0RBQUE7RUFDSSx1Q0FBQTtFQUNKLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0kscUJBQUE7RUFDQSxVQUFBO0FDakNSOztBRG1DSTtFQUNDLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0FDakNMOztBRG1DSztFQUNDLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtBQ2pDTiIsImZpbGUiOiJzcmMvYXBwL2Zvb2QvbGlzdGluZy9zdHlsZXMvZm9vZC1saXN0aW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEN1c3RvbSB2YXJpYWJsZXNcbi8vIE5vdGU6ICBUaGVzZSBvbmVzIHdlcmUgYWRkZWQgYnkgdXMgYW5kIGhhdmUgbm90aGluZyB0byBkbyB3aXRoIElvbmljIENTUyBDdXN0b20gUHJvcGVydGllc1xuOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtZmFpci1tYXJnaW4pO1xuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xuXG4gIC0tcGFnZS1waWN0dXJlcy1ndXR0ZXI6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gNCk7XG4gIC0tcGFnZS10YWdzLWd1dHRlcjogNHB4O1xuXG4gIC0tcGFnZS1yYXRpbmctNS1jb2xvcjogIzdjZTE5ODtcbiAgLS1wYWdlLXJhdGluZy00LWNvbG9yOiAjYThlMDdjO1xuICAtLXBhZ2UtcmF0aW5nLTMtY29sb3I6ICNjZWUwN2M7XG4gIC0tcGFnZS1yYXRpbmctMi1jb2xvcjogI2UwYzc3YztcbiAgLS1wYWdlLXJhdGluZy0xLWNvbG9yOiAjZTA3YzdjO1xuXG4gIC0tcGFnZS1jb2xvcjogI2ViYmIwMDtcbiAgLS1wYWdlLWNvbG9yLXJnYjogMjM1LDE4NywwO1xufVxuXG4vLyBOb3RlOiAgQWxsIHRoZSBDU1MgdmFyaWFibGVzIGRlZmluZWQgYmVsb3cgYXJlIG92ZXJyaWRlcyBvZiBJb25pYyBlbGVtZW50cyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbi5mb29kLWxpc3RpbmctY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbiAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIC0tcGFkZGluZy1lbmQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgLS1wYWRkaW5nLXRvcDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAtLXBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG59XG5cbi5saXN0aW5nLWl0ZW0ge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKTtcbiAgcGFkZGluZy1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcblxuICAmOmxhc3QtY2hpbGQge1xuXHRcdGJvcmRlci1ib3R0b206IG5vbmU7XG5cdFx0bWFyZ2luLWJvdHRvbTogMHB4O1xuXHR9XG5cbiAgLmNvdmVyLXdyYXBwZXIge1xuICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcblxuICAgIC5jb3Zlci1hbmNob3Ige1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgLmNvdmVyLWljb24td3JhcHBlciB7XG4gICAgICBtYXJnaW46IDBweCAyMCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbiAgfVxuXG4gIC5pbmZvLXJvdyB7XG4gICAgLS1pb24tZ3JpZC1jb2x1bW5zOiAxMDtcbiAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG5cbiAgICBtYXJnaW46IDBweCBjYWxjKHZhcigtLXBhZ2UtcGljdHVyZXMtZ3V0dGVyKSAqIC0xKTtcblx0XHRwYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xuXG4gICAgLy8gVG8gY29tcGVuc2F0ZSBuZWdhdGl2ZSBzaWRlIG1hcmdpbnMgb2YgLnBpY3R1cmVzLXJvdyAoc2libGluZyBvZiAuaW5mby1yb3cpXG4gICAgJjo6YmVmb3JlLFxuICAgICY6OmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgZmxleDogMCAwIHZhcigtLXBhZ2UtcGljdHVyZXMtZ3V0dGVyKTtcbiAgICB9XG5cbiAgICAuZGVzY3JpcHRpb24tY29sIHtcbiAgICAgIC5kZXNjcmlwdGlvbi13cmFwcGVyIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICB9XG5cbiAgICAgIC5pdGVtLW5hbWUge1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG5cbiAgICAgICAgLm5hbWUtYW5jaG9yIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLml0ZW0tYWRkcmVzcyB7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICB9XG5cbiAgICAgIC5pdGVtLXRhZ3Mge1xuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG5cbiAgICAgICAgLnRhZy13cmFwcGVyIHtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1wYWdlLXRhZ3MtZ3V0dGVyKTtcbiAgICAgICAgICBmbGV4LWdyb3c6IDA7XG4gICAgICAgICAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcblxuICAgICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLml0ZW0tdGFnIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtbmFycm93LXJhZGl1cyk7XG5cdFx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcblx0XHRcdFx0XHRwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtdGFncy1ndXR0ZXIpIC8gMikgdmFyKC0tcGFnZS10YWdzLWd1dHRlcik7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxMHB4O1xuXHRcdFx0XHRcdGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnN0YXRzLWNvbCB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG5cbiAgICAgIC5pdGVtLXJhdGluZyB7XG4gICAgICAgIC8vIERlZmF1bHQgYmFja2dyb3VuZFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLXBhZ2UtY29sb3ItcmdiKSwgLjM1KTtcblx0XHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1uYXJyb3ctcmFkaXVzKTtcblx0XHRcdFx0cGFkZGluZy10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMyk7XG5cdFx0XHRcdHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDMpO1xuXHRcdFx0XHRwYWRkaW5nLWxlZnQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG5cdFx0XHRcdHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG5cdFx0XHQgIGZvbnQtc2l6ZTogMTJweDtcblx0XHRcdCAgZm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdCAgd2lkdGg6IDEwMCU7XG5cdFx0XHQgIGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0ICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cblx0XHRcdFx0JltyYXRpbmdCYXNlPVwiMVwiXSB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1yYXRpbmctMS1jb2xvcik7XG5cdFx0XHRcdH1cblx0XHRcdFx0JltyYXRpbmdCYXNlPVwiMlwiXSB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1yYXRpbmctMi1jb2xvcik7XG5cdFx0XHRcdH1cblx0XHRcdFx0JltyYXRpbmdCYXNlPVwiM1wiXSB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1yYXRpbmctMy1jb2xvcik7XG5cdFx0XHRcdH1cblx0XHRcdFx0JltyYXRpbmdCYXNlPVwiNFwiXSB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1yYXRpbmctNC1jb2xvcik7XG5cdFx0XHRcdH1cblx0XHRcdFx0JltyYXRpbmdCYXNlPVwiNVwiXSB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1yYXRpbmctNS1jb2xvcik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuICAgICAgLml0ZW0tcHJpY2UtcmFuZ2Uge1xuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgIC5wcmljZSB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXBhZ2UtY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgLm5vLXByaWNlIHtcbiAgICAgICAgICBjb2xvcjogcmdiYSh2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUtcmdiKSwgLjQwKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblx0fVxuXG4gIC5waWN0dXJlcy1yb3cge1xuICAgIC0taW9uLWdyaWQtY29sdW1uczogMTA7XG4gICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuXG4gICAgbWFyZ2luOiAwcHggY2FsYyh2YXIoLS1wYWdlLXBpY3R1cmVzLWd1dHRlcikgKiAtMSk7XG5cbiAgICAucGljdHVyZS13cmFwcGVyIHtcbiAgICAgIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLXBpY3R1cmVzLWd1dHRlcik7XG5cbiAgICAgIC5oYXMtbW9yZS1waWN0dXJlcyB7XG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0dG9wOiAwcHg7XG5cdFx0XHRcdGJvdHRvbTogMHB4O1xuXHRcdFx0XHRsZWZ0OiAwcHg7XG5cdFx0XHRcdHJpZ2h0OiAwcHg7XG4gICAgICAgIC8vIFRvIGNvbXBlbnNhdGUgdGhlIC5waWN0dXJlLXdyYXBwZXIgcGFkZGluZ1xuICAgICAgICBtYXJnaW46IDBweCB2YXIoLS1wYWdlLXBpY3R1cmVzLWd1dHRlcik7XG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tcGFnZS1jb2xvci1yZ2IpLCAuNzApO1xuICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtbmFycm93LXJhZGl1cyk7XG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIHotaW5kZXg6IDI7XG5cblx0XHRcdFx0LnBpY3R1cmVzLWNvdW50IHtcblx0XHRcdFx0XHRmb250LXNpemU6IDIycHg7XG5cdFx0XHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblxuXHRcdFx0XHRcdCY6OmJlZm9yZSB7XG5cdFx0XHRcdFx0XHRjb250ZW50OiAnKyc7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDI2cHg7XG5cdFx0XHRcdFx0XHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG4gICAgfVxuICB9XG59XG4iLCI6aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1mYWlyLW1hcmdpbik7XG4gIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XG4gIC0tcGFnZS1waWN0dXJlcy1ndXR0ZXI6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gNCk7XG4gIC0tcGFnZS10YWdzLWd1dHRlcjogNHB4O1xuICAtLXBhZ2UtcmF0aW5nLTUtY29sb3I6ICM3Y2UxOTg7XG4gIC0tcGFnZS1yYXRpbmctNC1jb2xvcjogI2E4ZTA3YztcbiAgLS1wYWdlLXJhdGluZy0zLWNvbG9yOiAjY2VlMDdjO1xuICAtLXBhZ2UtcmF0aW5nLTItY29sb3I6ICNlMGM3N2M7XG4gIC0tcGFnZS1yYXRpbmctMS1jb2xvcjogI2UwN2M3YztcbiAgLS1wYWdlLWNvbG9yOiAjZWJiYjAwO1xuICAtLXBhZ2UtY29sb3ItcmdiOiAyMzUsMTg3LDA7XG59XG5cbi5mb29kLWxpc3RpbmctY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbiAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIC0tcGFkZGluZy1lbmQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgLS1wYWRkaW5nLXRvcDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAtLXBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG59XG5cbi5saXN0aW5nLWl0ZW0ge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKTtcbiAgcGFkZGluZy1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cbi5saXN0aW5nLWl0ZW06bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cbi5saXN0aW5nLWl0ZW0gLmNvdmVyLXdyYXBwZXIge1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG59XG4ubGlzdGluZy1pdGVtIC5jb3Zlci13cmFwcGVyIC5jb3Zlci1hbmNob3Ige1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5saXN0aW5nLWl0ZW0gLmNvdmVyLXdyYXBwZXIgLmNvdmVyLWljb24td3JhcHBlciB7XG4gIG1hcmdpbjogMHB4IDIwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5saXN0aW5nLWl0ZW0gLmluZm8tcm93IHtcbiAgLS1pb24tZ3JpZC1jb2x1bW5zOiAxMDtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDBweCBjYWxjKHZhcigtLXBhZ2UtcGljdHVyZXMtZ3V0dGVyKSAqIC0xKTtcbiAgcGFkZGluZy1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cbi5saXN0aW5nLWl0ZW0gLmluZm8tcm93OjpiZWZvcmUsIC5saXN0aW5nLWl0ZW0gLmluZm8tcm93OjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGZsZXg6IDAgMCB2YXIoLS1wYWdlLXBpY3R1cmVzLWd1dHRlcik7XG59XG4ubGlzdGluZy1pdGVtIC5pbmZvLXJvdyAuZGVzY3JpcHRpb24tY29sIC5kZXNjcmlwdGlvbi13cmFwcGVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4ubGlzdGluZy1pdGVtIC5pbmZvLXJvdyAuZGVzY3JpcHRpb24tY29sIC5pdGVtLW5hbWUge1xuICBtYXJnaW46IDBweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xuICBmb250LXNpemU6IDIwcHg7XG59XG4ubGlzdGluZy1pdGVtIC5pbmZvLXJvdyAuZGVzY3JpcHRpb24tY29sIC5pdGVtLW5hbWUgLm5hbWUtYW5jaG9yIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5saXN0aW5nLWl0ZW0gLmluZm8tcm93IC5kZXNjcmlwdGlvbi1jb2wgLml0ZW0tYWRkcmVzcyB7XG4gIG1hcmdpbjogMHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xuICBmb250LXNpemU6IDEycHg7XG59XG4ubGlzdGluZy1pdGVtIC5pbmZvLXJvdyAuZGVzY3JpcHRpb24tY29sIC5pdGVtLXRhZ3Mge1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4ubGlzdGluZy1pdGVtIC5pbmZvLXJvdyAuZGVzY3JpcHRpb24tY29sIC5pdGVtLXRhZ3MgLnRhZy13cmFwcGVyIHtcbiAgcGFkZGluZy1yaWdodDogdmFyKC0tcGFnZS10YWdzLWd1dHRlcik7XG4gIGZsZXgtZ3JvdzogMDtcbiAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcbn1cbi5saXN0aW5nLWl0ZW0gLmluZm8tcm93IC5kZXNjcmlwdGlvbi1jb2wgLml0ZW0tdGFncyAudGFnLXdyYXBwZXI6bGFzdC1jaGlsZCB7XG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcbn1cbi5saXN0aW5nLWl0ZW0gLmluZm8tcm93IC5kZXNjcmlwdGlvbi1jb2wgLml0ZW0tdGFncyAuaXRlbS10YWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLW5hcnJvdy1yYWRpdXMpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtdGFncy1ndXR0ZXIpIC8gMikgdmFyKC0tcGFnZS10YWdzLWd1dHRlcik7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG59XG4ubGlzdGluZy1pdGVtIC5pbmZvLXJvdyAuc3RhdHMtY29sIHtcbiAgcGFkZGluZy1sZWZ0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xufVxuLmxpc3RpbmctaXRlbSAuaW5mby1yb3cgLnN0YXRzLWNvbCAuaXRlbS1yYXRpbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLXBhZ2UtY29sb3ItcmdiKSwgMC4zNSk7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtbmFycm93LXJhZGl1cyk7XG4gIHBhZGRpbmctdG9wOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDMpO1xuICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAzKTtcbiAgcGFkZGluZy1sZWZ0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICBwYWRkaW5nLXJpZ2h0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmxpc3RpbmctaXRlbSAuaW5mby1yb3cgLnN0YXRzLWNvbCAuaXRlbS1yYXRpbmdbcmF0aW5nQmFzZT1cIjFcIl0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLXJhdGluZy0xLWNvbG9yKTtcbn1cbi5saXN0aW5nLWl0ZW0gLmluZm8tcm93IC5zdGF0cy1jb2wgLml0ZW0tcmF0aW5nW3JhdGluZ0Jhc2U9XCIyXCJdIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1yYXRpbmctMi1jb2xvcik7XG59XG4ubGlzdGluZy1pdGVtIC5pbmZvLXJvdyAuc3RhdHMtY29sIC5pdGVtLXJhdGluZ1tyYXRpbmdCYXNlPVwiM1wiXSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtcmF0aW5nLTMtY29sb3IpO1xufVxuLmxpc3RpbmctaXRlbSAuaW5mby1yb3cgLnN0YXRzLWNvbCAuaXRlbS1yYXRpbmdbcmF0aW5nQmFzZT1cIjRcIl0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLXJhdGluZy00LWNvbG9yKTtcbn1cbi5saXN0aW5nLWl0ZW0gLmluZm8tcm93IC5zdGF0cy1jb2wgLml0ZW0tcmF0aW5nW3JhdGluZ0Jhc2U9XCI1XCJdIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1yYXRpbmctNS1jb2xvcik7XG59XG4ubGlzdGluZy1pdGVtIC5pbmZvLXJvdyAuc3RhdHMtY29sIC5pdGVtLXByaWNlLXJhbmdlIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5saXN0aW5nLWl0ZW0gLmluZm8tcm93IC5zdGF0cy1jb2wgLml0ZW0tcHJpY2UtcmFuZ2UgLnByaWNlIHtcbiAgY29sb3I6IHZhcigtLXBhZ2UtY29sb3IpO1xufVxuLmxpc3RpbmctaXRlbSAuaW5mby1yb3cgLnN0YXRzLWNvbCAuaXRlbS1wcmljZS1yYW5nZSAubm8tcHJpY2Uge1xuICBjb2xvcjogcmdiYSh2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUtcmdiKSwgMC40KTtcbn1cbi5saXN0aW5nLWl0ZW0gLnBpY3R1cmVzLXJvdyB7XG4gIC0taW9uLWdyaWQtY29sdW1uczogMTA7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAwcHggY2FsYyh2YXIoLS1wYWdlLXBpY3R1cmVzLWd1dHRlcikgKiAtMSk7XG59XG4ubGlzdGluZy1pdGVtIC5waWN0dXJlcy1yb3cgLnBpY3R1cmUtd3JhcHBlciB7XG4gIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLXBpY3R1cmVzLWd1dHRlcik7XG59XG4ubGlzdGluZy1pdGVtIC5waWN0dXJlcy1yb3cgLnBpY3R1cmUtd3JhcHBlciAuaGFzLW1vcmUtcGljdHVyZXMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICBib3R0b206IDBweDtcbiAgbGVmdDogMHB4O1xuICByaWdodDogMHB4O1xuICBtYXJnaW46IDBweCB2YXIoLS1wYWdlLXBpY3R1cmVzLWd1dHRlcik7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tcGFnZS1jb2xvci1yZ2IpLCAwLjcpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtbmFycm93LXJhZGl1cyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHotaW5kZXg6IDI7XG59XG4ubGlzdGluZy1pdGVtIC5waWN0dXJlcy1yb3cgLnBpY3R1cmUtd3JhcHBlciAuaGFzLW1vcmUtcGljdHVyZXMgLnBpY3R1cmVzLWNvdW50IHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5saXN0aW5nLWl0ZW0gLnBpY3R1cmVzLXJvdyAucGljdHVyZS13cmFwcGVyIC5oYXMtbW9yZS1waWN0dXJlcyAucGljdHVyZXMtY291bnQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiK1wiO1xuICBmb250LXNpemU6IDI2cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICBmb250LXdlaWdodDogNjAwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/food/listing/styles/food-listing.shell.scss":
  /*!*************************************************************!*\
    !*** ./src/app/food/listing/styles/food-listing.shell.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFoodListingStylesFoodListingShellScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  --shell-color: #ebbb00;\n  --shell-color-rgb: 235,187,0;\n}\n\napp-image-shell.cover-image {\n  --image-shell-border-radius: var(--app-fair-radius);\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .10);\n  --image-shell-overlay-background: transparent;\n  --image-shell-spinner-color: rgba(var(--shell-color-rgb), .25);\n}\n\napp-image-shell.item-icon {\n  --image-shell-loading-background: transparent;\n}\n\n.item-name app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .25);\n  --text-shell-line-height: 20px;\n  max-width: 30%;\n}\n\n.item-name app-text-shell.text-loaded {\n  max-width: unset;\n}\n\n.item-address > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .20);\n  --text-shell-line-height: 12px;\n  max-width: 50%;\n}\n\n.item-address > app-text-shell.text-loaded {\n  max-width: unset;\n}\n\n.item-tag > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .15);\n  --text-shell-line-height: 10px;\n  min-width: 30px;\n}\n\n.item-tag > app-text-shell.text-loaded {\n  min-width: 0px;\n}\n\n.item-rating > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 12px;\n}\n\napp-image-shell.picture-image {\n  --image-shell-border-radius: var(--app-narrow-radius);\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .20);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9haXIvRG9jdW1lbnRzL0dpdEh1Yi9wb2Qvc3JjL2FwcC9mb29kL2xpc3Rpbmcvc3R5bGVzL2Zvb2QtbGlzdGluZy5zaGVsbC5zY3NzIiwic3JjL2FwcC9mb29kL2xpc3Rpbmcvc3R5bGVzL2Zvb2QtbGlzdGluZy5zaGVsbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usc0JBQUE7RUFDQSw0QkFBQTtBQ0RGOztBRFdBO0VBQ0UsbURBQUE7RUFDQSxtRUFBQTtFQUNBLDZDQUFBO0VBQ0EsOERBQUE7QUNSRjs7QURXQTtFQUNFLDZDQUFBO0FDUkY7O0FEV0E7RUFDRSwwREFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtBQ1JGOztBRFVFO0VBQ0UsZ0JBQUE7QUNSSjs7QURZQTtFQUNFLDBEQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0FDVEY7O0FEV0U7RUFDRSxnQkFBQTtBQ1RKOztBRGFBO0VBQ0UsMERBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUNWRjs7QURZRTtFQUNFLGNBQUE7QUNWSjs7QURjQTtFQUNFLDBEQUFBO0VBQ0EsOEJBQUE7QUNYRjs7QURjQTtFQUNFLHFEQUFBO0VBQ0EsbUVBQUE7QUNYRiIsImZpbGUiOiJzcmMvYXBwL2Zvb2QvbGlzdGluZy9zdHlsZXMvZm9vZC1saXN0aW5nLnNoZWxsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDdXN0b20gdmFyaWFibGVzXG4vLyBOb3RlOiAgVGhlc2Ugb25lcyB3ZXJlIGFkZGVkIGJ5IHVzIGFuZCBoYXZlIG5vdGhpbmcgdG8gZG8gd2l0aCBJb25pYyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbjpob3N0IHtcbiAgLS1zaGVsbC1jb2xvcjogI2ViYmIwMDtcbiAgLS1zaGVsbC1jb2xvci1yZ2I6IDIzNSwxODcsMDtcbn1cblxuLy8gWW91IGNhbiBhbHNvIGFwcGx5IHNoZWVsIHN0eWxlcyB0byB0aGUgZW50aXJlIHBhZ2Vcbjpob3N0KC5pcy1zaGVsbCkge1xuICAvLyBpb24tY29udGVudCB7XG4gIC8vICAgb3BhY2l0eTogMC44O1xuICAvLyB9XG59XG5cbmFwcC1pbWFnZS1zaGVsbC5jb3Zlci1pbWFnZSB7XG4gIC0taW1hZ2Utc2hlbGwtYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLWZhaXItcmFkaXVzKTtcbiAgLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQ6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcbiAgLS1pbWFnZS1zaGVsbC1vdmVybGF5LWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWltYWdlLXNoZWxsLXNwaW5uZXItY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjI1KTtcbn1cblxuYXBwLWltYWdlLXNoZWxsLml0ZW0taWNvbiB7XG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLml0ZW0tbmFtZSBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4yNSk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMjBweDtcbiAgbWF4LXdpZHRoOiAzMCU7XG5cbiAgJi50ZXh0LWxvYWRlZCB7XG4gICAgbWF4LXdpZHRoOiB1bnNldDtcbiAgfVxufVxuXG4uaXRlbS1hZGRyZXNzID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMjApO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDEycHg7XG4gIG1heC13aWR0aDogNTAlO1xuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIG1heC13aWR0aDogdW5zZXQ7XG4gIH1cbn1cblxuLml0ZW0tdGFnID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTUpO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDEwcHg7XG4gIG1pbi13aWR0aDogMzBweDtcblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBtaW4td2lkdGg6IDBweDtcbiAgfVxufVxuXG4uaXRlbS1yYXRpbmcgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTJweDtcbn1cblxuYXBwLWltYWdlLXNoZWxsLnBpY3R1cmUtaW1hZ2Uge1xuICAtLWltYWdlLXNoZWxsLWJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1uYXJyb3ctcmFkaXVzKTtcbiAgLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQ6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjIwKTtcbn1cbiIsIjpob3N0IHtcbiAgLS1zaGVsbC1jb2xvcjogI2ViYmIwMDtcbiAgLS1zaGVsbC1jb2xvci1yZ2I6IDIzNSwxODcsMDtcbn1cblxuYXBwLWltYWdlLXNoZWxsLmNvdmVyLWltYWdlIHtcbiAgLS1pbWFnZS1zaGVsbC1ib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtZmFpci1yYWRpdXMpO1xuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLWltYWdlLXNoZWxsLW92ZXJsYXktYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMjUpO1xufVxuXG5hcHAtaW1hZ2Utc2hlbGwuaXRlbS1pY29uIHtcbiAgLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uaXRlbS1uYW1lIGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjI1KTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAyMHB4O1xuICBtYXgtd2lkdGg6IDMwJTtcbn1cbi5pdGVtLW5hbWUgYXBwLXRleHQtc2hlbGwudGV4dC1sb2FkZWQge1xuICBtYXgtd2lkdGg6IHVuc2V0O1xufVxuXG4uaXRlbS1hZGRyZXNzID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMjApO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDEycHg7XG4gIG1heC13aWR0aDogNTAlO1xufVxuLml0ZW0tYWRkcmVzcyA+IGFwcC10ZXh0LXNoZWxsLnRleHQtbG9hZGVkIHtcbiAgbWF4LXdpZHRoOiB1bnNldDtcbn1cblxuLml0ZW0tdGFnID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTUpO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDEwcHg7XG4gIG1pbi13aWR0aDogMzBweDtcbn1cbi5pdGVtLXRhZyA+IGFwcC10ZXh0LXNoZWxsLnRleHQtbG9hZGVkIHtcbiAgbWluLXdpZHRoOiAwcHg7XG59XG5cbi5pdGVtLXJhdGluZyA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxMnB4O1xufVxuXG5hcHAtaW1hZ2Utc2hlbGwucGljdHVyZS1pbWFnZSB7XG4gIC0taW1hZ2Utc2hlbGwtYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLW5hcnJvdy1yYWRpdXMpO1xuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMjApO1xufSJdfQ== */";
    /***/
  }
}]);
//# sourceMappingURL=food-listing-food-listing-module-es5.js.map