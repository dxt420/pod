(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fashion-details-fashion-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/fashion/details/fashion-details.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/fashion/details/fashion-details.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"app/categories/fashion\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Fashion Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"fashion-details-content\">\n  <ion-row class=\"slider-row\">\n    <ion-slides class=\"details-slides\" pager=\"true\" [options]=\"slidesOptions\">\n      <ion-slide class=\"\" *ngFor=\"let image of details?.showcaseImages\">\n        <ion-row class=\"slide-inner-row\">\n          <app-image-shell [mode]=\"'cover'\" animation=\"spinner\" class=\"showcase-image\" [ngClass]=\"{'centered-image': (image.type === 'square'), 'fill-image': (image.type === 'fill')}\" [src]=\"image.source\">\n            <app-aspect-ratio [ratio]=\"{w:64, h:50}\">\n            </app-aspect-ratio>\n          </app-image-shell>\n        </ion-row>\n      </ion-slide>\n    </ion-slides>\n  </ion-row>\n  <div class=\"description-wrapper\">\n    <h3 class=\"details-name\">\n      <app-text-shell animation=\"gradient\" [data]=\"details?.name\"></app-text-shell>\n    </h3>\n    <span class=\"details-brand\">\n      <app-text-shell animation=\"gradient\" [data]=\"details?.brand\"></app-text-shell>\n    </span>\n    <span class=\"details-price\">\n      <app-text-shell animation=\"gradient\" [data]=\"details?.price | currency\"></app-text-shell>\n    </span>\n    <span class=\"details-sale-price\">\n      <app-text-shell animation=\"gradient\" [data]=\"details?.salePrice | currency\"></app-text-shell>\n    </span>\n  </div>\n  <ion-row class=\"details-purchase-options-row\">\n    <ion-col size=\"12\" class=\"aux-action-col\">\n      <ion-button class=\"size-chart-btn\" color=\"medium\" size=\"small\" fill=\"clear\">Size Chart</ion-button>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-button class=\"select-variant-btn\" color=\"medium\" expand=\"block\" fill=\"outline\" (click)=\"openColorChooser()\">Color</ion-button>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-button class=\"select-variant-btn\" color=\"medium\" expand=\"block\" fill=\"outline\" (click)=\"openSizeChooser()\">Size</ion-button>\n    </ion-col>\n    <ion-col size=\"12\" class=\"main-call-to-action-col\">\n      <ion-button class=\"add-to-cart-btn\" color=\"dark\" expand=\"block\" fill=\"solid\">Add to cart</ion-button>\n    </ion-col>\n  </ion-row>\n  <div class=\"details-description-wrapper\">\n    <h3 class=\"detail-title\">About me</h3>\n    <p class=\"details-description\">\n      <app-text-shell animation=\"gradient\" [data]=\"details?.description\" lines=\"5\"></app-text-shell>\n    </p>\n  </div>\n  <div class=\"details-description-wrapper\">\n    <h3 class=\"detail-title\">Looking after me</h3>\n    <p class=\"details-description\">\n      <app-text-shell animation=\"gradient\" [data]=\"details?.careInstructions\" lines=\"3\"></app-text-shell>\n    </p>\n  </div>\n  <div class=\"details-description-wrapper\">\n    <h3 class=\"detail-title\">Product code</h3>\n    <span class=\"details-description product-code\">\n      <app-text-shell animation=\"gradient\" [data]=\"details?.upc\"></app-text-shell>\n    </span>\n  </div>\n  <!-- Related Products -->\n  <div class=\"related-products-wrapper\" *ngIf=\"details?.relatedProducts && details.relatedProducts.length > 0\">\n    <h3 class=\"detail-alt-title\">Why Don't you try?</h3>\n    <ion-row class=\"related-products-list\">\n      <ion-col size=\"6\" class=\"related-product-item\" *ngFor=\"let relatedProduct of details?.relatedProducts\">\n        <div class=\"item-image-wrapper\">\n          <a class=\"image-anchor\">\n            <app-aspect-ratio [ratio]=\"{w: 3, h: 4}\">\n              <app-image-shell class=\"related-product-image\" animation=\"spinner\" [src]=\"relatedProduct.image\" [alt]=\"'related image'\"></app-image-shell>\n            </app-aspect-ratio>\n          </a>\n        </div>\n        <div class=\"item-details-wrapper\">\n          <h4 class=\"item-name\">\n            <a class=\"name-anchor\">\n              <app-text-shell animation=\"gradient\" [data]=\"relatedProduct.name\"></app-text-shell>\n            </a>\n          </h4>\n          <span class=\"item-sale-price\">\n            <app-text-shell animation=\"gradient\" [data]=\"relatedProduct.salePrice | currency\"></app-text-shell>\n          </span>\n        </div>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/fashion/details/fashion-details.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/fashion/details/fashion-details.module.ts ***!
  \***********************************************************/
/*! exports provided: FashionDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FashionDetailsPageModule", function() { return FashionDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _fashion_details_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fashion-details.page */ "./src/app/fashion/details/fashion-details.page.ts");
/* harmony import */ var _fashion_details_resolver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fashion-details.resolver */ "./src/app/fashion/details/fashion-details.resolver.ts");
/* harmony import */ var _fashion_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../fashion.service */ "./src/app/fashion/fashion.service.ts");











var routes = [
    {
        path: '',
        component: _fashion_details_page__WEBPACK_IMPORTED_MODULE_8__["FashionDetailsPage"],
        resolve: {
            data: _fashion_details_resolver__WEBPACK_IMPORTED_MODULE_9__["FashionDetailsResolver"]
        }
    }
];
var FashionDetailsPageModule = /** @class */ (function () {
    function FashionDetailsPageModule() {
    }
    FashionDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
            ],
            declarations: [
                _fashion_details_page__WEBPACK_IMPORTED_MODULE_8__["FashionDetailsPage"]
            ],
            providers: [
                _fashion_details_resolver__WEBPACK_IMPORTED_MODULE_9__["FashionDetailsResolver"],
                _fashion_service__WEBPACK_IMPORTED_MODULE_10__["FashionService"]
            ]
        })
    ], FashionDetailsPageModule);
    return FashionDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/fashion/details/fashion-details.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/fashion/details/fashion-details.page.ts ***!
  \*********************************************************/
/*! exports provided: FashionDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FashionDetailsPage", function() { return FashionDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var FashionDetailsPage = /** @class */ (function () {
    function FashionDetailsPage(route, alertController) {
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
    Object.defineProperty(FashionDetailsPage.prototype, "isShell", {
        get: function () {
            return (this.details && this.details.isShell) ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    FashionDetailsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (resolvedRouteData) {
            var detailsDataStore = resolvedRouteData['data'];
            detailsDataStore.state.subscribe(function (state) {
                _this.details = state;
                _this.colorVariants = _this.details.colorVariants
                    .map(function (item) {
                    return ({
                        name: item.name,
                        type: 'radio',
                        label: item.name,
                        value: item.value,
                        checked: item.default
                    });
                });
                _this.sizeVariants = _this.details.sizeVariants
                    .map(function (item) {
                    return ({
                        name: item.name,
                        type: 'radio',
                        label: item.name,
                        value: item.value,
                        checked: item.default
                    });
                });
            }, function (error) { });
        }, function (error) { });
    };
    FashionDetailsPage.prototype.openColorChooser = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Color',
                            inputs: this.colorVariants,
                            cssClass: 'variant-alert color-chooser',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        console.log('Confirm Cancel');
                                    }
                                }, {
                                    text: 'OK',
                                    handler: function () {
                                        console.log('Confirm Ok');
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FashionDetailsPage.prototype.openSizeChooser = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Size',
                            inputs: this.sizeVariants,
                            cssClass: 'variant-alert size-chooser',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        console.log('Confirm Cancel');
                                    }
                                }, {
                                    text: 'OK',
                                    handler: function (selectedValue) {
                                        console.log('Selected Value', selectedValue);
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FashionDetailsPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.is-shell'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FashionDetailsPage.prototype, "isShell", null);
    FashionDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fashion-details',
            template: __webpack_require__(/*! raw-loader!./fashion-details.page.html */ "./node_modules/raw-loader/index.js!./src/app/fashion/details/fashion-details.page.html"),
            styles: [__webpack_require__(/*! ./styles/fashion-details.page.scss */ "./src/app/fashion/details/styles/fashion-details.page.scss"), __webpack_require__(/*! ./styles/fashion-details.shell.scss */ "./src/app/fashion/details/styles/fashion-details.shell.scss"), __webpack_require__(/*! ./styles/fashion-details.ios.scss */ "./src/app/fashion/details/styles/fashion-details.ios.scss"), __webpack_require__(/*! ./styles/fashion-details.md.scss */ "./src/app/fashion/details/styles/fashion-details.md.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
    ], FashionDetailsPage);
    return FashionDetailsPage;
}());



/***/ }),

/***/ "./src/app/fashion/details/fashion-details.resolver.ts":
/*!*************************************************************!*\
  !*** ./src/app/fashion/details/fashion-details.resolver.ts ***!
  \*************************************************************/
/*! exports provided: FashionDetailsResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FashionDetailsResolver", function() { return FashionDetailsResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fashion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fashion.service */ "./src/app/fashion/fashion.service.ts");



var FashionDetailsResolver = /** @class */ (function () {
    function FashionDetailsResolver(fashionService) {
        this.fashionService = fashionService;
    }
    FashionDetailsResolver.prototype.resolve = function () {
        var dataSource = this.fashionService.getDetailsDataSource();
        var dataStore = this.fashionService.getDetailsStore(dataSource);
        return dataStore;
    };
    FashionDetailsResolver.ctorParameters = function () { return [
        { type: _fashion_service__WEBPACK_IMPORTED_MODULE_2__["FashionService"] }
    ]; };
    FashionDetailsResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_fashion_service__WEBPACK_IMPORTED_MODULE_2__["FashionService"]])
    ], FashionDetailsResolver);
    return FashionDetailsResolver;
}());



/***/ }),

/***/ "./src/app/fashion/details/styles/fashion-details.ios.scss":
/*!*****************************************************************!*\
  !*** ./src/app/fashion/details/styles/fashion-details.ios.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zhc2hpb24vZGV0YWlscy9zdHlsZXMvZmFzaGlvbi1kZXRhaWxzLmlvcy5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/fashion/details/styles/fashion-details.md.scss":
/*!****************************************************************!*\
  !*** ./src/app/fashion/details/styles/fashion-details.md.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zhc2hpb24vZGV0YWlscy9zdHlsZXMvZmFzaGlvbi1kZXRhaWxzLm1kLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/fashion/details/styles/fashion-details.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/fashion/details/styles/fashion-details.page.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background);\n  --page-swiper-pagination-space: 30px;\n  --page-swiper-pagination-height: 18px;\n  --page-pagination-bullet-size: 10px;\n  --page-options-gutter: calc(var(--page-margin) / 2);\n  --page-related-items-gutter: calc(var(--page-margin) / 2);\n  --page-color: #cb328f;\n}\n\n.fashion-details-content {\n  --background: var(--page-background);\n}\n\n.fashion-details-content .slider-row .details-slides {\n  --bullet-background: var(--ion-color-dark-tint);\n  --bullet-background-active: var(--ion-color-dark-tint);\n  height: 100%;\n  width: 100%;\n}\n\n.fashion-details-content .slider-row .details-slides .slide-inner-row {\n  height: 100%;\n  width: 100%;\n  padding: 0px;\n  padding-bottom: var(--page-swiper-pagination-space);\n}\n\n.fashion-details-content .slider-row .showcase-image {\n  width: 100%;\n}\n\n.fashion-details-content .slider-row .showcase-image.centered-image {\n  background-size: auto;\n  background-position: center;\n}\n\n.fashion-details-content .description-wrapper {\n  padding: var(--page-margin) var(--page-margin) 0px;\n}\n\n.fashion-details-content .description-wrapper .details-name {\n  font-size: 18px;\n  font-weight: 500;\n  margin: 0px 0px 5px;\n}\n\n.fashion-details-content .description-wrapper .details-brand {\n  display: block;\n  text-transform: uppercase;\n  font-size: 14px;\n  font-weight: 400;\n  margin: 0px 0px var(--page-margin);\n}\n\n.fashion-details-content .description-wrapper .details-price {\n  font-size: 18px;\n  font-weight: 500;\n  margin: 0px;\n  color: var(--page-color);\n  display: inline-block;\n}\n\n.fashion-details-content .description-wrapper .details-sale-price {\n  color: var(--ion-color-medium-shade);\n  text-decoration: line-through;\n  display: inline-block;\n  margin-left: var(--page-margin);\n  font-size: 14px;\n}\n\n.fashion-details-content .details-purchase-options-row {\n  --ion-grid-column-padding: var(--page-options-gutter);\n  padding-top: 0px;\n  padding-left: calc(var(--page-margin) - var(--page-options-gutter));\n  padding-right: calc(var(--page-margin) - var(--page-options-gutter));\n  padding-bottom: calc(var(--page-margin) * 2);\n}\n\n.fashion-details-content .details-purchase-options-row .aux-action-col {\n  display: flex;\n  justify-content: flex-end;\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n\n.fashion-details-content .details-purchase-options-row .aux-action-col .size-chart-btn {\n  margin: 0px;\n  height: 25px;\n}\n\n.fashion-details-content .details-purchase-options-row .main-call-to-action-col {\n  padding-bottom: 0px;\n}\n\n.fashion-details-content .details-purchase-options-row .select-variant-btn {\n  margin: 0px;\n}\n\n.fashion-details-content .details-purchase-options-row .add-to-cart-btn {\n  margin: 0px;\n  margin-top: var(--page-margin);\n}\n\n.fashion-details-content .detail-title {\n  font-size: 16px;\n  font-weight: 500;\n  color: var(--ion-color-dark-tint);\n  margin: 0px;\n  margin-bottom: calc(var(--page-margin) / 2);\n}\n\n.fashion-details-content .details-description-wrapper {\n  padding-top: 0px;\n  padding-left: var(--page-margin);\n  padding-right: var(--page-margin);\n  padding-bottom: calc(var(--page-margin) * 2);\n}\n\n.fashion-details-content .details-description-wrapper .details-description {\n  margin: 0px;\n  line-height: 1.3;\n  font-size: 14px;\n  color: var(--ion-color-medium-shade);\n}\n\n.fashion-details-content .detail-alt-title {\n  text-align: center;\n  font-size: 18px;\n  font-weight: 400;\n  text-transform: uppercase;\n  color: var(--ion-color-dark-shade);\n  margin: 0px;\n  margin-bottom: var(--page-margin);\n}\n\n.fashion-details-content .related-products-wrapper {\n  padding-top: 0px;\n  padding-left: var(--page-margin);\n  padding-right: var(--page-margin);\n  padding-bottom: calc(var(--page-margin) * 2);\n}\n\n.fashion-details-content .related-products-wrapper .related-products-list {\n  --ion-grid-column-padding: 0px;\n}\n\n.fashion-details-content .related-products-wrapper .related-products-list .related-product-item {\n  margin-bottom: calc(var(--page-margin) * 2);\n}\n\n.fashion-details-content .related-products-wrapper .related-products-list .related-product-item:nth-child(odd) {\n  padding-right: var(--page-related-items-gutter);\n}\n\n.fashion-details-content .related-products-wrapper .related-products-list .related-product-item:nth-child(even) {\n  padding-left: var(--page-related-items-gutter);\n}\n\n.fashion-details-content .related-products-wrapper .related-products-list .related-product-item .item-image-wrapper {\n  border: 1px solid var(--ion-color-light-shade);\n}\n\n.fashion-details-content .related-products-wrapper .related-products-list .related-product-item .item-image-wrapper .image-anchor {\n  display: block;\n}\n\n.fashion-details-content .related-products-wrapper .related-products-list .related-product-item .item-details-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 5px 5px 0px;\n}\n\n.fashion-details-content .related-products-wrapper .related-products-list .related-product-item .item-name {\n  margin: 0px;\n  margin-bottom: calc(var(--page-margin) / 2);\n  font-size: 14px;\n  font-weight: 400;\n  text-align: center;\n  min-width: 90%;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.fashion-details-content .related-products-wrapper .related-products-list .related-product-item .item-name .name-anchor {\n  color: var(--ion-color-dark-tint);\n  display: block;\n  text-decoration: none;\n}\n\n.fashion-details-content .related-products-wrapper .related-products-list .related-product-item .item-sale-price {\n  display: block;\n  font-weight: 400;\n  color: var(--page-color);\n  font-size: 16px;\n  text-align: center;\n  min-width: 30%;\n}\n\n:host ::ng-deep .details-slides .swiper-pagination {\n  height: var(--page-swiper-pagination-height);\n  line-height: 1;\n  bottom: calc((var(--page-swiper-pagination-space) - var(--page-swiper-pagination-height) ) / 2);\n}\n\n:host ::ng-deep .details-slides .swiper-pagination .swiper-pagination-bullet {\n  width: var(--page-pagination-bullet-size);\n  height: var(--page-pagination-bullet-size);\n}\n\n::ng-deep .variant-alert {\n  --select-alert-color: #000;\n  --select-alert-background: #FFF;\n  --select-alert-margin: 16px;\n  --select-alert-color: var(--ion-color-lightest);\n  --select-alert-background: var(--ion-color-primary);\n  --select-alert-margin: var(--app-fair-margin);\n}\n\n::ng-deep .variant-alert .alert-head {\n  padding-top: calc((var(--select-alert-margin) / 4) * 3);\n  padding-bottom: calc((var(--select-alert-margin) / 4) * 3);\n  -webkit-padding-start: var(--select-alert-margin);\n          padding-inline-start: var(--select-alert-margin);\n  -webkit-padding-end: var(--select-alert-margin);\n          padding-inline-end: var(--select-alert-margin);\n}\n\n::ng-deep .variant-alert .alert-title {\n  color: var(--select-alert-color);\n}\n\n::ng-deep .variant-alert .alert-head,\n::ng-deep .variant-alert .alert-message {\n  background-color: var(--select-alert-background);\n}\n\n::ng-deep .variant-alert .alert-wrapper.sc-ion-alert-ios .alert-title {\n  margin: 0px;\n}\n\n::ng-deep .variant-alert .alert-wrapper.sc-ion-alert-md .alert-title {\n  font-size: 18px;\n  font-weight: 400;\n}\n\n::ng-deep .variant-alert .alert-wrapper.sc-ion-alert-md .alert-button {\n  --padding-top: 0;\n  --padding-start: 0.9em;\n  --padding-end: 0.9em;\n  --padding-bottom: 0;\n  height: 2.1em;\n  font-size: 13px;\n}\n\n::ng-deep .variant-alert .alert-message {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmFzaGlvbi9kZXRhaWxzL3N0eWxlcy9EOlxcc2hpdFxccG9kL3NyY1xcYXBwXFxmYXNoaW9uXFxkZXRhaWxzXFxzdHlsZXNcXGZhc2hpb24tZGV0YWlscy5wYWdlLnNjc3MiLCJzcmMvYXBwL2Zhc2hpb24vZGV0YWlscy9zdHlsZXMvZmFzaGlvbi1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZmFzaGlvbi9kZXRhaWxzL3N0eWxlcy9EOlxcc2hpdFxccG9kL3NyY1xcdGhlbWVcXG1peGluc1xcaW5wdXRzXFxzZWxlY3QtYWxlcnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLHFDQUFBO0VBQ0Esd0NBQUE7RUFFQSxvQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsbUNBQUE7RUFFQSxtREFBQTtFQUNBLHlEQUFBO0VBRUEscUJBQUE7QUNORjs7QURVQTtFQUNFLG9DQUFBO0FDUEY7O0FEVUk7RUFDRSwrQ0FBQTtFQUNBLHNEQUFBO0VBRUEsWUFBQTtFQUNBLFdBQUE7QUNUTjs7QURXTTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLG1EQUFBO0FDVlI7O0FEY0k7RUFDRSxXQUFBO0FDWk47O0FEY007RUFDRSxxQkFBQTtFQUNBLDJCQUFBO0FDWlI7O0FEaUJFO0VBQ0Usa0RBQUE7QUNmSjs7QURpQkk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ2ZOOztBRGtCSTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtDQUFBO0FDaEJOOztBRG1CSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0FDakJOOztBRG9CSTtFQUNFLG9DQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtBQ2xCTjs7QURzQkU7RUFDRSxxREFBQTtFQUVBLGdCQUFBO0VBQ0EsbUVBQUE7RUFDQSxvRUFBQTtFQUNBLDRDQUFBO0FDckJKOztBRHVCSTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNyQk47O0FEdUJNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNyQlI7O0FEeUJJO0VBQ0UsbUJBQUE7QUN2Qk47O0FEMEJJO0VBQ0UsV0FBQTtBQ3hCTjs7QUQyQkk7RUFDRSxXQUFBO0VBQ0EsOEJBQUE7QUN6Qk47O0FENkJFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUNBQUE7RUFDQSxXQUFBO0VBQ0EsMkNBQUE7QUMzQko7O0FEOEJFO0VBQ0UsZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsNENBQUE7QUM1Qko7O0FEOEJJO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0FDNUJOOztBRGdDRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQ0FBQTtFQUNBLFdBQUE7RUFDQSxpQ0FBQTtBQzlCSjs7QURpQ0U7RUFDRSxnQkFBQTtFQUNBLGdDQUFBO0VBQ0EsaUNBQUE7RUFDQSw0Q0FBQTtBQy9CSjs7QURpQ0k7RUFDRSw4QkFBQTtBQy9CTjs7QURpQ007RUFDRSwyQ0FBQTtBQy9CUjs7QURpQ1E7RUFDRSwrQ0FBQTtBQy9CVjs7QURrQ1E7RUFDRSw4Q0FBQTtBQ2hDVjs7QURtQ1E7RUFDRSw4Q0FBQTtBQ2pDVjs7QURtQ1U7RUFDRSxjQUFBO0FDakNaOztBRHFDUTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBRUEsb0JBQUE7QUNwQ1Y7O0FEdUNRO0VBQ0UsV0FBQTtFQUNBLDJDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBRUEsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDdENWOztBRHdDVTtFQUNFLGlDQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FDdENaOztBRDBDUTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ3hDVjs7QURvREU7RUFDRSw0Q0FBQTtFQUNBLGNBQUE7RUFFQSwrRkFBQTtBQ2xESjs7QURvREk7RUFDRSx5Q0FBQTtFQUNBLDBDQUFBO0FDbEROOztBRHlEQTtFRTNPRSwwQkFBQTtFQUNBLCtCQUFBO0VBQ0EsMkJBQUE7RUY2T0EsK0NBQUE7RUFDQSxtREFBQTtFQUNBLDZDQUFBO0FDdERGOztBQ3ZMRTtFQUNFLHVEQUFBO0VBQ0EsMERBQUE7RUFDQSxpREFBQTtVQUFBLGdEQUFBO0VBQ0EsK0NBQUE7VUFBQSw4Q0FBQTtBRHlMSjs7QUN0TEU7RUFDRSxnQ0FBQTtBRHdMSjs7QUNyTEU7O0VBRUUsZ0RBQUE7QUR1TEo7O0FDbExJO0VBQ0UsV0FBQTtBRG9MTjs7QUM5S0k7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QURnTE47O0FDN0tJO0VBRUUsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFFQSxhQUFBO0VBQ0EsZUFBQTtBRDZLTjs7QUQ0QkU7RUFDRSxhQUFBO0FDMUJKIiwiZmlsZSI6InNyYy9hcHAvZmFzaGlvbi9kZXRhaWxzL3N0eWxlcy9mYXNoaW9uLWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uL3RoZW1lL21peGlucy9pbnB1dHMvc2VsZWN0LWFsZXJ0XCI7XG5cbi8vIEN1c3RvbSB2YXJpYWJsZXNcbi8vIE5vdGU6ICBUaGVzZSBvbmVzIHdlcmUgYWRkZWQgYnkgdXMgYW5kIGhhdmUgbm90aGluZyB0byBkbyB3aXRoIElvbmljIENTUyBDdXN0b20gUHJvcGVydGllc1xuOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtZmFpci1tYXJnaW4pO1xuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xuXG4gIC0tcGFnZS1zd2lwZXItcGFnaW5hdGlvbi1zcGFjZTogMzBweDtcbiAgLS1wYWdlLXN3aXBlci1wYWdpbmF0aW9uLWhlaWdodDogMThweDtcbiAgLS1wYWdlLXBhZ2luYXRpb24tYnVsbGV0LXNpemU6IDEwcHg7XG5cbiAgLS1wYWdlLW9wdGlvbnMtZ3V0dGVyOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAtLXBhZ2UtcmVsYXRlZC1pdGVtcy1ndXR0ZXI6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG5cbiAgLS1wYWdlLWNvbG9yOiAjY2IzMjhmO1xufVxuXG4vLyBOb3RlOiAgQWxsIHRoZSBDU1MgdmFyaWFibGVzIGRlZmluZWQgYmVsb3cgYXJlIG92ZXJyaWRlcyBvZiBJb25pYyBlbGVtZW50cyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbi5mYXNoaW9uLWRldGFpbHMtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcblxuICAuc2xpZGVyLXJvdyB7XG4gICAgLmRldGFpbHMtc2xpZGVzIHtcbiAgICAgIC0tYnVsbGV0LWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xuICAgICAgLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmU6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xuXG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgLnNsaWRlLWlubmVyLXJvdyB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgLy8gLnN3aXBlci1wYWdpbmF0aW9uIHNwYWNlXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWdlLXN3aXBlci1wYWdpbmF0aW9uLXNwYWNlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuc2hvd2Nhc2UtaW1hZ2Uge1xuICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICYuY2VudGVyZWQtaW1hZ2Uge1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG87XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuZGVzY3JpcHRpb24td3JhcHBlciB7XG4gICAgcGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pIHZhcigtLXBhZ2UtbWFyZ2luKSAwcHg7XG5cbiAgICAuZGV0YWlscy1uYW1lIHtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBtYXJnaW46IDBweCAwcHggNXB4O1xuICAgIH1cblxuICAgIC5kZXRhaWxzLWJyYW5kIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICBtYXJnaW46IDBweCAwcHggdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgIH1cblxuICAgIC5kZXRhaWxzLXByaWNlIHtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICAgIGNvbG9yOiB2YXIoLS1wYWdlLWNvbG9yKTtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB9XG5cbiAgICAuZGV0YWlscy1zYWxlLXByaWNlIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgbWFyZ2luLWxlZnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gIH1cblxuICAuZGV0YWlscy1wdXJjaGFzZS1vcHRpb25zLXJvdyB7XG4gICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogdmFyKC0tcGFnZS1vcHRpb25zLWd1dHRlcik7XG5cbiAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLSB2YXIoLS1wYWdlLW9wdGlvbnMtZ3V0dGVyKSk7XG4gICAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLSB2YXIoLS1wYWdlLW9wdGlvbnMtZ3V0dGVyKSk7XG4gICAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMik7XG5cbiAgICAuYXV4LWFjdGlvbi1jb2wge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgICAgcGFkZGluZy1ib3R0b206IDBweDtcblxuICAgICAgLnNpemUtY2hhcnQtYnRuIHtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubWFpbi1jYWxsLXRvLWFjdGlvbi1jb2wge1xuICAgICAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgICB9XG5cbiAgICAuc2VsZWN0LXZhcmlhbnQtYnRuIHtcbiAgICAgIG1hcmdpbjogMHB4O1xuICAgIH1cblxuICAgIC5hZGQtdG8tY2FydC1idG4ge1xuICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICBtYXJnaW4tdG9wOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgfVxuICB9XG5cbiAgLmRldGFpbC10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xuICAgIG1hcmdpbjogMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIH1cblxuICAuZGV0YWlscy1kZXNjcmlwdGlvbi13cmFwcGVyIHtcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgIHBhZGRpbmctbGVmdDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgIHBhZGRpbmctcmlnaHQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKTtcblxuICAgIC5kZXRhaWxzLWRlc2NyaXB0aW9uIHtcbiAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDEuMztcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgICB9XG4gIH1cblxuICAuZGV0YWlsLWFsdC10aXRsZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXNoYWRlKTtcbiAgICBtYXJnaW46IDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIH1cblxuICAucmVsYXRlZC1wcm9kdWN0cy13cmFwcGVyIHtcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgIHBhZGRpbmctbGVmdDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgIHBhZGRpbmctcmlnaHQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKTtcblxuICAgIC5yZWxhdGVkLXByb2R1Y3RzLWxpc3Qge1xuICAgICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuXG4gICAgICAucmVsYXRlZC1wcm9kdWN0LWl0ZW0ge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpO1xuXG4gICAgICAgICY6bnRoLWNoaWxkKG9kZCkge1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IHZhcigtLXBhZ2UtcmVsYXRlZC1pdGVtcy1ndXR0ZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgJjpudGgtY2hpbGQoZXZlbikge1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogdmFyKC0tcGFnZS1yZWxhdGVkLWl0ZW1zLWd1dHRlcik7XG4gICAgICAgIH1cblxuICAgICAgICAuaXRlbS1pbWFnZS13cmFwcGVyIHtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuXG4gICAgICAgICAgLmltYWdlLWFuY2hvciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuaXRlbS1kZXRhaWxzLXdyYXBwZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgICAgcGFkZGluZzogNXB4IDVweCAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuaXRlbS1uYW1lIHtcbiAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBtaW4td2lkdGg6IDkwJTtcblxuICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICAgICAgIC5uYW1lLWFuY2hvciB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCk7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuaXRlbS1zYWxlLXByaWNlIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wYWdlLWNvbG9yKTtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIG1pbi13aWR0aDogMzAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuLy8gSVNTVUU6IC5zd2lwZXItcGFnZ2luYXRpb24gZ2V0cyByZW5kZXJlZCBkeW5hbWljYWxseS4gVGhhdCBwcmV2ZW50cyBzdHlsaW5nIHRoZSBlbGVtZW50cyB3aGVuIHVzaW5nIHRoZSBkZWZhdWx0IEFuZ3VsYXIgVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxuLy8gICAgICAgIChBbmd1bGFyIGRvZXNuJ3QgYWRkIGFuICdfbmdjb250ZW50JyBhdHRyaWJ1dGUgdG8gdGhlIC5zd2lwZXItcGFnZ2luYXRpb24gYmVjYXVzZSBpdCdzIGR5bmFtaWNhbGx5IHJlbmRlcmVkKVxuLy8gRklYOiAgIFNlZTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzM2MjY1MDcyLzExMTY5NTlcbjpob3N0IDo6bmctZGVlcCAuZGV0YWlscy1zbGlkZXMge1xuICAuc3dpcGVyLXBhZ2luYXRpb24ge1xuICAgIGhlaWdodDogdmFyKC0tcGFnZS1zd2lwZXItcGFnaW5hdGlvbi1oZWlnaHQpO1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIC8vIC5zd2lwZXItcGFnaW5hdGlvbiBpcyAxOHB4IGhlaWdodCwgLnNsaWRlLWlubmVyLXJvdyBoYXMgNDBweCBvZiBwYWRkaW5nLWJvdHRvbSA9PiBib3R0b20gPSAoNDBweCAtIDE4cHgpLzIgPSAxMXB4XG4gICAgYm90dG9tOiBjYWxjKCh2YXIoLS1wYWdlLXN3aXBlci1wYWdpbmF0aW9uLXNwYWNlKSAtIHZhcigtLXBhZ2Utc3dpcGVyLXBhZ2luYXRpb24taGVpZ2h0KSApIC8gMik7XG5cbiAgICAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcbiAgICAgIHdpZHRoOiB2YXIoLS1wYWdlLXBhZ2luYXRpb24tYnVsbGV0LXNpemUpO1xuICAgICAgaGVpZ2h0OiB2YXIoLS1wYWdlLXBhZ2luYXRpb24tYnVsbGV0LXNpemUpO1xuICAgIH1cbiAgfVxufVxuXG4vLyBBbGVydHMgYW5kIGluIGdlbmVyYWwgYWxsIG92ZXJsYXlzIGFyZSBhdHRhY2hlZCB0byB0aGUgYm9keSBvciBpb24tYXBwIGRpcmVjdGx5XG4vLyBXZSBuZWVkIHRvIHVzZSA6Om5nLWRlZXAgdG8gYWNjZXNzIGl0IGZyb20gaGVyZVxuOjpuZy1kZWVwIC52YXJpYW50LWFsZXJ0IHtcbiAgQGluY2x1ZGUgc2VsZWN0LWFsZXJ0KCk7XG5cbiAgLy8gVmFyaWFibGVzIHNob3VsZCBiZSBpbiBhIGRlZXBlciBzZWxlY3RvciBvciBhZnRlciB0aGUgbWl4aW4gaW5jbHVkZSB0byBvdmVycmlkZSBkZWZhdWx0IHZhbHVlc1xuICAtLXNlbGVjdC1hbGVydC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgLS1zZWxlY3QtYWxlcnQtYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAtLXNlbGVjdC1hbGVydC1tYXJnaW46IHZhcigtLWFwcC1mYWlyLW1hcmdpbik7XG5cbiAgLmFsZXJ0LW1lc3NhZ2Uge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWZhaXItbWFyZ2luKTtcbiAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcbiAgLS1wYWdlLXN3aXBlci1wYWdpbmF0aW9uLXNwYWNlOiAzMHB4O1xuICAtLXBhZ2Utc3dpcGVyLXBhZ2luYXRpb24taGVpZ2h0OiAxOHB4O1xuICAtLXBhZ2UtcGFnaW5hdGlvbi1idWxsZXQtc2l6ZTogMTBweDtcbiAgLS1wYWdlLW9wdGlvbnMtZ3V0dGVyOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAtLXBhZ2UtcmVsYXRlZC1pdGVtcy1ndXR0ZXI6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIC0tcGFnZS1jb2xvcjogI2NiMzI4Zjtcbn1cblxuLmZhc2hpb24tZGV0YWlscy1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xufVxuLmZhc2hpb24tZGV0YWlscy1jb250ZW50IC5zbGlkZXItcm93IC5kZXRhaWxzLXNsaWRlcyB7XG4gIC0tYnVsbGV0LWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xuICAtLWJ1bGxldC1iYWNrZ3JvdW5kLWFjdGl2ZTogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCk7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZmFzaGlvbi1kZXRhaWxzLWNvbnRlbnQgLnNsaWRlci1yb3cgLmRldGFpbHMtc2xpZGVzIC5zbGlkZS1pbm5lci1yb3cge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWdlLXN3aXBlci1wYWdpbmF0aW9uLXNwYWNlKTtcbn1cbi5mYXNoaW9uLWRldGFpbHMtY29udGVudCAuc2xpZGVyLXJvdyAuc2hvd2Nhc2UtaW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbn1cbi5mYXNoaW9uLWRldGFpbHMtY29udGVudCAuc2xpZGVyLXJvdyAuc2hvd2Nhc2UtaW1hZ2UuY2VudGVyZWQtaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLXNpemU6IGF1dG87XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cbi5mYXNoaW9uLWRldGFpbHMtY29udGVudCAuZGVzY3JpcHRpb24td3JhcHBlciB7XG4gIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKSB2YXIoLS1wYWdlLW1hcmdpbikgMHB4O1xufVxuLmZhc2hpb24tZGV0YWlscy1jb250ZW50IC5kZXNjcmlwdGlvbi13cmFwcGVyIC5kZXRhaWxzLW5hbWUge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbjogMHB4IDBweCA1cHg7XG59XG4uZmFzaGlvbi1kZXRhaWxzLWNvbnRlbnQgLmRlc2NyaXB0aW9uLXdyYXBwZXIgLmRldGFpbHMtYnJhbmQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW46IDBweCAwcHggdmFyKC0tcGFnZS1tYXJnaW4pO1xufVxuLmZhc2hpb24tZGV0YWlscy1jb250ZW50IC5kZXNjcmlwdGlvbi13cmFwcGVyIC5kZXRhaWxzLXByaWNlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW46IDBweDtcbiAgY29sb3I6IHZhcigtLXBhZ2UtY29sb3IpO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uZmFzaGlvbi1kZXRhaWxzLWNvbnRlbnQgLmRlc2NyaXB0aW9uLXdyYXBwZXIgLmRldGFpbHMtc2FsZS1wcmljZSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWxlZnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmZhc2hpb24tZGV0YWlscy1jb250ZW50IC5kZXRhaWxzLXB1cmNoYXNlLW9wdGlvbnMtcm93IHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogdmFyKC0tcGFnZS1vcHRpb25zLWd1dHRlcik7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLSB2YXIoLS1wYWdlLW9wdGlvbnMtZ3V0dGVyKSk7XG4gIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC0gdmFyKC0tcGFnZS1vcHRpb25zLWd1dHRlcikpO1xuICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKTtcbn1cbi5mYXNoaW9uLWRldGFpbHMtY29udGVudCAuZGV0YWlscy1wdXJjaGFzZS1vcHRpb25zLXJvdyAuYXV4LWFjdGlvbi1jb2wge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuLmZhc2hpb24tZGV0YWlscy1jb250ZW50IC5kZXRhaWxzLXB1cmNoYXNlLW9wdGlvbnMtcm93IC5hdXgtYWN0aW9uLWNvbCAuc2l6ZS1jaGFydC1idG4ge1xuICBtYXJnaW46IDBweDtcbiAgaGVpZ2h0OiAyNXB4O1xufVxuLmZhc2hpb24tZGV0YWlscy1jb250ZW50IC5kZXRhaWxzLXB1cmNoYXNlLW9wdGlvbnMtcm93IC5tYWluLWNhbGwtdG8tYWN0aW9uLWNvbCB7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG4uZmFzaGlvbi1kZXRhaWxzLWNvbnRlbnQgLmRldGFpbHMtcHVyY2hhc2Utb3B0aW9ucy1yb3cgLnNlbGVjdC12YXJpYW50LWJ0biB7XG4gIG1hcmdpbjogMHB4O1xufVxuLmZhc2hpb24tZGV0YWlscy1jb250ZW50IC5kZXRhaWxzLXB1cmNoYXNlLW9wdGlvbnMtcm93IC5hZGQtdG8tY2FydC1idG4ge1xuICBtYXJnaW46IDBweDtcbiAgbWFyZ2luLXRvcDogdmFyKC0tcGFnZS1tYXJnaW4pO1xufVxuLmZhc2hpb24tZGV0YWlscy1jb250ZW50IC5kZXRhaWwtdGl0bGUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcbiAgbWFyZ2luOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG59XG4uZmFzaGlvbi1kZXRhaWxzLWNvbnRlbnQgLmRldGFpbHMtZGVzY3JpcHRpb24td3JhcHBlciB7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIHBhZGRpbmctbGVmdDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpO1xufVxuLmZhc2hpb24tZGV0YWlscy1jb250ZW50IC5kZXRhaWxzLWRlc2NyaXB0aW9uLXdyYXBwZXIgLmRldGFpbHMtZGVzY3JpcHRpb24ge1xuICBtYXJnaW46IDBweDtcbiAgbGluZS1oZWlnaHQ6IDEuMztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG59XG4uZmFzaGlvbi1kZXRhaWxzLWNvbnRlbnQgLmRldGFpbC1hbHQtdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXNoYWRlKTtcbiAgbWFyZ2luOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cbi5mYXNoaW9uLWRldGFpbHMtY29udGVudCAucmVsYXRlZC1wcm9kdWN0cy13cmFwcGVyIHtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIHBhZGRpbmctcmlnaHQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMik7XG59XG4uZmFzaGlvbi1kZXRhaWxzLWNvbnRlbnQgLnJlbGF0ZWQtcHJvZHVjdHMtd3JhcHBlciAucmVsYXRlZC1wcm9kdWN0cy1saXN0IHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xufVxuLmZhc2hpb24tZGV0YWlscy1jb250ZW50IC5yZWxhdGVkLXByb2R1Y3RzLXdyYXBwZXIgLnJlbGF0ZWQtcHJvZHVjdHMtbGlzdCAucmVsYXRlZC1wcm9kdWN0LWl0ZW0ge1xuICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpO1xufVxuLmZhc2hpb24tZGV0YWlscy1jb250ZW50IC5yZWxhdGVkLXByb2R1Y3RzLXdyYXBwZXIgLnJlbGF0ZWQtcHJvZHVjdHMtbGlzdCAucmVsYXRlZC1wcm9kdWN0LWl0ZW06bnRoLWNoaWxkKG9kZCkge1xuICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1wYWdlLXJlbGF0ZWQtaXRlbXMtZ3V0dGVyKTtcbn1cbi5mYXNoaW9uLWRldGFpbHMtY29udGVudCAucmVsYXRlZC1wcm9kdWN0cy13cmFwcGVyIC5yZWxhdGVkLXByb2R1Y3RzLWxpc3QgLnJlbGF0ZWQtcHJvZHVjdC1pdGVtOm50aC1jaGlsZChldmVuKSB7XG4gIHBhZGRpbmctbGVmdDogdmFyKC0tcGFnZS1yZWxhdGVkLWl0ZW1zLWd1dHRlcik7XG59XG4uZmFzaGlvbi1kZXRhaWxzLWNvbnRlbnQgLnJlbGF0ZWQtcHJvZHVjdHMtd3JhcHBlciAucmVsYXRlZC1wcm9kdWN0cy1saXN0IC5yZWxhdGVkLXByb2R1Y3QtaXRlbSAuaXRlbS1pbWFnZS13cmFwcGVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbn1cbi5mYXNoaW9uLWRldGFpbHMtY29udGVudCAucmVsYXRlZC1wcm9kdWN0cy13cmFwcGVyIC5yZWxhdGVkLXByb2R1Y3RzLWxpc3QgLnJlbGF0ZWQtcHJvZHVjdC1pdGVtIC5pdGVtLWltYWdlLXdyYXBwZXIgLmltYWdlLWFuY2hvciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmZhc2hpb24tZGV0YWlscy1jb250ZW50IC5yZWxhdGVkLXByb2R1Y3RzLXdyYXBwZXIgLnJlbGF0ZWQtcHJvZHVjdHMtbGlzdCAucmVsYXRlZC1wcm9kdWN0LWl0ZW0gLml0ZW0tZGV0YWlscy13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogNXB4IDVweCAwcHg7XG59XG4uZmFzaGlvbi1kZXRhaWxzLWNvbnRlbnQgLnJlbGF0ZWQtcHJvZHVjdHMtd3JhcHBlciAucmVsYXRlZC1wcm9kdWN0cy1saXN0IC5yZWxhdGVkLXByb2R1Y3QtaXRlbSAuaXRlbS1uYW1lIHtcbiAgbWFyZ2luOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtaW4td2lkdGg6IDkwJTtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uZmFzaGlvbi1kZXRhaWxzLWNvbnRlbnQgLnJlbGF0ZWQtcHJvZHVjdHMtd3JhcHBlciAucmVsYXRlZC1wcm9kdWN0cy1saXN0IC5yZWxhdGVkLXByb2R1Y3QtaXRlbSAuaXRlbS1uYW1lIC5uYW1lLWFuY2hvciB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5mYXNoaW9uLWRldGFpbHMtY29udGVudCAucmVsYXRlZC1wcm9kdWN0cy13cmFwcGVyIC5yZWxhdGVkLXByb2R1Y3RzLWxpc3QgLnJlbGF0ZWQtcHJvZHVjdC1pdGVtIC5pdGVtLXNhbGUtcHJpY2Uge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6IHZhcigtLXBhZ2UtY29sb3IpO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWluLXdpZHRoOiAzMCU7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuZGV0YWlscy1zbGlkZXMgLnN3aXBlci1wYWdpbmF0aW9uIHtcbiAgaGVpZ2h0OiB2YXIoLS1wYWdlLXN3aXBlci1wYWdpbmF0aW9uLWhlaWdodCk7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBib3R0b206IGNhbGMoKHZhcigtLXBhZ2Utc3dpcGVyLXBhZ2luYXRpb24tc3BhY2UpIC0gdmFyKC0tcGFnZS1zd2lwZXItcGFnaW5hdGlvbi1oZWlnaHQpICkgLyAyKTtcbn1cbjpob3N0IDo6bmctZGVlcCAuZGV0YWlscy1zbGlkZXMgLnN3aXBlci1wYWdpbmF0aW9uIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xuICB3aWR0aDogdmFyKC0tcGFnZS1wYWdpbmF0aW9uLWJ1bGxldC1zaXplKTtcbiAgaGVpZ2h0OiB2YXIoLS1wYWdlLXBhZ2luYXRpb24tYnVsbGV0LXNpemUpO1xufVxuXG46Om5nLWRlZXAgLnZhcmlhbnQtYWxlcnQge1xuICAtLXNlbGVjdC1hbGVydC1jb2xvcjogIzAwMDtcbiAgLS1zZWxlY3QtYWxlcnQtYmFja2dyb3VuZDogI0ZGRjtcbiAgLS1zZWxlY3QtYWxlcnQtbWFyZ2luOiAxNnB4O1xuICAtLXNlbGVjdC1hbGVydC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgLS1zZWxlY3QtYWxlcnQtYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAtLXNlbGVjdC1hbGVydC1tYXJnaW46IHZhcigtLWFwcC1mYWlyLW1hcmdpbik7XG59XG46Om5nLWRlZXAgLnZhcmlhbnQtYWxlcnQgLmFsZXJ0LWhlYWQge1xuICBwYWRkaW5nLXRvcDogY2FsYygodmFyKC0tc2VsZWN0LWFsZXJ0LW1hcmdpbikgLyA0KSAqIDMpO1xuICBwYWRkaW5nLWJvdHRvbTogY2FsYygodmFyKC0tc2VsZWN0LWFsZXJ0LW1hcmdpbikgLyA0KSAqIDMpO1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogdmFyKC0tc2VsZWN0LWFsZXJ0LW1hcmdpbik7XG4gIHBhZGRpbmctaW5saW5lLWVuZDogdmFyKC0tc2VsZWN0LWFsZXJ0LW1hcmdpbik7XG59XG46Om5nLWRlZXAgLnZhcmlhbnQtYWxlcnQgLmFsZXJ0LXRpdGxlIHtcbiAgY29sb3I6IHZhcigtLXNlbGVjdC1hbGVydC1jb2xvcik7XG59XG46Om5nLWRlZXAgLnZhcmlhbnQtYWxlcnQgLmFsZXJ0LWhlYWQsXG46Om5nLWRlZXAgLnZhcmlhbnQtYWxlcnQgLmFsZXJ0LW1lc3NhZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWxlY3QtYWxlcnQtYmFja2dyb3VuZCk7XG59XG46Om5nLWRlZXAgLnZhcmlhbnQtYWxlcnQgLmFsZXJ0LXdyYXBwZXIuc2MtaW9uLWFsZXJ0LWlvcyAuYWxlcnQtdGl0bGUge1xuICBtYXJnaW46IDBweDtcbn1cbjo6bmctZGVlcCAudmFyaWFudC1hbGVydCAuYWxlcnQtd3JhcHBlci5zYy1pb24tYWxlcnQtbWQgLmFsZXJ0LXRpdGxlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuOjpuZy1kZWVwIC52YXJpYW50LWFsZXJ0IC5hbGVydC13cmFwcGVyLnNjLWlvbi1hbGVydC1tZCAuYWxlcnQtYnV0dG9uIHtcbiAgLS1wYWRkaW5nLXRvcDogMDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwLjllbTtcbiAgLS1wYWRkaW5nLWVuZDogMC45ZW07XG4gIC0tcGFkZGluZy1ib3R0b206IDA7XG4gIGhlaWdodDogMi4xZW07XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbjo6bmctZGVlcCAudmFyaWFudC1hbGVydCAuYWxlcnQtbWVzc2FnZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59IiwiQG1peGluIHNlbGVjdC1hbGVydCgpIHtcbiAgLy8gRGVmYXVsdCB2YWx1ZXNcbiAgLS1zZWxlY3QtYWxlcnQtY29sb3I6ICMwMDA7XG4gIC0tc2VsZWN0LWFsZXJ0LWJhY2tncm91bmQ6ICNGRkY7XG4gIC0tc2VsZWN0LWFsZXJ0LW1hcmdpbjogMTZweDtcblxuICAuYWxlcnQtaGVhZCB7XG4gICAgcGFkZGluZy10b3A6IGNhbGMoKHZhcigtLXNlbGVjdC1hbGVydC1tYXJnaW4pIC8gNCkgKiAzKTtcbiAgICBwYWRkaW5nLWJvdHRvbTogY2FsYygodmFyKC0tc2VsZWN0LWFsZXJ0LW1hcmdpbikgLyA0KSAqIDMpO1xuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiB2YXIoLS1zZWxlY3QtYWxlcnQtbWFyZ2luKTtcbiAgICBwYWRkaW5nLWlubGluZS1lbmQ6IHZhcigtLXNlbGVjdC1hbGVydC1tYXJnaW4pO1xuICB9XG5cbiAgLmFsZXJ0LXRpdGxlIHtcbiAgICBjb2xvcjogdmFyKC0tc2VsZWN0LWFsZXJ0LWNvbG9yKTtcbiAgfVxuXG4gIC5hbGVydC1oZWFkLFxuICAuYWxlcnQtbWVzc2FnZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VsZWN0LWFsZXJ0LWJhY2tncm91bmQpO1xuICB9XG5cbiAgLy8gaU9TIHN0eWxlc1xuICAuYWxlcnQtd3JhcHBlci5zYy1pb24tYWxlcnQtaW9zIHtcbiAgICAuYWxlcnQtdGl0bGUge1xuICAgICAgbWFyZ2luOiAwcHg7XG4gICAgfVxuICB9XG5cbiAgLy8gTWF0ZXJpYWwgc3R5bGVzXG4gIC5hbGVydC13cmFwcGVyLnNjLWlvbi1hbGVydC1tZCB7XG4gICAgLmFsZXJ0LXRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgfVxuXG4gICAgLmFsZXJ0LWJ1dHRvbiB7XG4gICAgICAvLyBWYWx1ZXMgdGFrZW4gZnJvbSBJb25pYyBzbWFsbCBidXR0b24gcHJlc2V0XG4gICAgICAtLXBhZGRpbmctdG9wOiAwO1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwLjllbTtcbiAgICAgIC0tcGFkZGluZy1lbmQ6IDAuOWVtO1xuICAgICAgLS1wYWRkaW5nLWJvdHRvbTogMDtcblxuICAgICAgaGVpZ2h0OiAyLjFlbTtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/fashion/details/styles/fashion-details.shell.scss":
/*!*******************************************************************!*\
  !*** ./src/app/fashion/details/styles/fashion-details.shell.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --shell-color: #cb328f;\n  --shell-color-rgb: 203,50,143;\n}\n\napp-image-shell.showcase-image {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .10);\n  --image-shell-spinner-color: rgba(var(--shell-color-rgb), .25);\n}\n\n.details-name > app-text-shell {\n  --text-shell-animation-background: rgba(var(--shell-color-rgb), .25);\n  --text-shell-animation-color: rgba(var(--shell-color-rgb), .35);\n  --text-shell-line-height: 18px;\n  max-width: 60%;\n}\n\n.details-name > app-text-shell.text-loaded {\n  max-width: inherit;\n}\n\n.details-brand > app-text-shell {\n  --text-shell-animation-background: rgba(var(--shell-color-rgb), .20);\n  --text-shell-animation-color: rgba(var(--shell-color-rgb), .30);\n  --text-shell-line-height: 14px;\n  max-width: 40%;\n}\n\n.details-brand > app-text-shell.text-loaded {\n  max-width: inherit;\n}\n\n.details-price > app-text-shell {\n  --text-shell-animation-background: rgba(var(--shell-color-rgb), .10);\n  --text-shell-animation-color: rgba(var(--shell-color-rgb), .20);\n  --text-shell-line-height: 18px;\n  width: 50px;\n}\n\n.details-price > app-text-shell.text-loaded {\n  width: inherit;\n}\n\n.details-sale-price > app-text-shell {\n  --text-shell-animation-background: rgba(var(--shell-color-rgb), .10);\n  --text-shell-animation-color: rgba(var(--shell-color-rgb), .20);\n  --text-shell-line-height: 18px;\n  width: 50px;\n}\n\n.details-sale-price > app-text-shell.text-loaded {\n  width: inherit;\n}\n\n.details-description > app-text-shell {\n  --text-shell-animation-background: rgba(var(--shell-color-rgb), .10);\n  --text-shell-animation-color: rgba(var(--shell-color-rgb), .20);\n  --text-shell-line-height: 14px;\n}\n\n.details-description.product-code > app-text-shell {\n  max-width: 40%;\n}\n\n.details-description.product-code > app-text-shell.text-loaded {\n  max-width: inherit;\n}\n\napp-image-shell.related-product-image {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .10);\n  --image-shell-spinner-color: rgba(var(--shell-color-rgb), .25);\n}\n\n.item-name app-text-shell {\n  --text-shell-animation-background: rgba(var(--shell-color-rgb), .25);\n  --text-shell-animation-color: rgba(var(--shell-color-rgb), .35);\n  --text-shell-line-height: 14px;\n}\n\n.item-sale-price > app-text-shell {\n  --text-shell-animation-background: rgba(var(--shell-color-rgb), .20);\n  --text-shell-animation-color: rgba(var(--shell-color-rgb), .30);\n  --text-shell-line-height: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmFzaGlvbi9kZXRhaWxzL3N0eWxlcy9EOlxcc2hpdFxccG9kL3NyY1xcYXBwXFxmYXNoaW9uXFxkZXRhaWxzXFxzdHlsZXNcXGZhc2hpb24tZGV0YWlscy5zaGVsbC5zY3NzIiwic3JjL2FwcC9mYXNoaW9uL2RldGFpbHMvc3R5bGVzL2Zhc2hpb24tZGV0YWlscy5zaGVsbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usc0JBQUE7RUFDQSw2QkFBQTtBQ0RGOztBRFdBO0VBQ0UsbUVBQUE7RUFDQSw4REFBQTtBQ1JGOztBRFdBO0VBQ0Usb0VBQUE7RUFDQSwrREFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtBQ1JGOztBRFVFO0VBQ0Usa0JBQUE7QUNSSjs7QURZQTtFQUNFLG9FQUFBO0VBQ0EsK0RBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7QUNURjs7QURXRTtFQUNFLGtCQUFBO0FDVEo7O0FEYUE7RUFDRSxvRUFBQTtFQUNBLCtEQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0FDVkY7O0FEWUU7RUFDRSxjQUFBO0FDVko7O0FEY0E7RUFDRSxvRUFBQTtFQUNBLCtEQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0FDWEY7O0FEYUU7RUFDRSxjQUFBO0FDWEo7O0FEZUE7RUFDRSxvRUFBQTtFQUNBLCtEQUFBO0VBQ0EsOEJBQUE7QUNaRjs7QURlQTtFQUNFLGNBQUE7QUNaRjs7QURjRTtFQUNFLGtCQUFBO0FDWko7O0FEZ0JBO0VBQ0UsbUVBQUE7RUFDQSw4REFBQTtBQ2JGOztBRGdCQTtFQUNFLG9FQUFBO0VBQ0EsK0RBQUE7RUFDQSw4QkFBQTtBQ2JGOztBRGdCQTtFQUNFLG9FQUFBO0VBQ0EsK0RBQUE7RUFDQSw4QkFBQTtBQ2JGIiwiZmlsZSI6InNyYy9hcHAvZmFzaGlvbi9kZXRhaWxzL3N0eWxlcy9mYXNoaW9uLWRldGFpbHMuc2hlbGwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEN1c3RvbSB2YXJpYWJsZXNcbi8vIE5vdGU6ICBUaGVzZSBvbmVzIHdlcmUgYWRkZWQgYnkgdXMgYW5kIGhhdmUgbm90aGluZyB0byBkbyB3aXRoIElvbmljIENTUyBDdXN0b20gUHJvcGVydGllc1xuOmhvc3Qge1xuICAtLXNoZWxsLWNvbG9yOiAjY2IzMjhmO1xuICAtLXNoZWxsLWNvbG9yLXJnYjogMjAzLDUwLDE0Mztcbn1cblxuLy8gWW91IGNhbiBhbHNvIGFwcGx5IHNoZWVsIHN0eWxlcyB0byB0aGUgZW50aXJlIHBhZ2Vcbjpob3N0KC5pcy1zaGVsbCkge1xuICAvLyBpb24tY29udGVudCB7XG4gIC8vICAgb3BhY2l0eTogMC44O1xuICAvLyB9XG59XG5cbmFwcC1pbWFnZS1zaGVsbC5zaG93Y2FzZS1pbWFnZSB7XG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG4gIC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMjUpO1xufVxuXG4uZGV0YWlscy1uYW1lID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtYW5pbWF0aW9uLWJhY2tncm91bmQ6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjI1KTtcbiAgLS10ZXh0LXNoZWxsLWFuaW1hdGlvbi1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMzUpO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE4cHg7XG4gIG1heC13aWR0aDogNjAlO1xuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIG1heC13aWR0aDogaW5oZXJpdDtcbiAgfVxufVxuXG4uZGV0YWlscy1icmFuZCA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWFuaW1hdGlvbi1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4yMCk7XG4gIC0tdGV4dC1zaGVsbC1hbmltYXRpb24tY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjMwKTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xuICBtYXgtd2lkdGg6IDQwJTtcblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gIH1cbn1cblxuLmRldGFpbHMtcHJpY2UgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1hbmltYXRpb24tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLXRleHQtc2hlbGwtYW5pbWF0aW9uLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4yMCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMThweDtcbiAgd2lkdGg6IDUwcHg7XG5cbiAgJi50ZXh0LWxvYWRlZCB7XG4gICAgd2lkdGg6IGluaGVyaXQ7XG4gIH1cbn1cblxuLmRldGFpbHMtc2FsZS1wcmljZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWFuaW1hdGlvbi1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG4gIC0tdGV4dC1zaGVsbC1hbmltYXRpb24tY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjIwKTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxOHB4O1xuICB3aWR0aDogNTBweDtcblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICB3aWR0aDogaW5oZXJpdDtcbiAgfVxufVxuXG4uZGV0YWlscy1kZXNjcmlwdGlvbiA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWFuaW1hdGlvbi1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG4gIC0tdGV4dC1zaGVsbC1hbmltYXRpb24tY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjIwKTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xufVxuXG4uZGV0YWlscy1kZXNjcmlwdGlvbi5wcm9kdWN0LWNvZGUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIG1heC13aWR0aDogNDAlO1xuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIG1heC13aWR0aDogaW5oZXJpdDtcbiAgfVxufVxuXG5hcHAtaW1hZ2Utc2hlbGwucmVsYXRlZC1wcm9kdWN0LWltYWdlIHtcbiAgLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQ6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcbiAgLS1pbWFnZS1zaGVsbC1zcGlubmVyLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4yNSk7XG59XG5cbi5pdGVtLW5hbWUgYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtYW5pbWF0aW9uLWJhY2tncm91bmQ6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjI1KTtcbiAgLS10ZXh0LXNoZWxsLWFuaW1hdGlvbi1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMzUpO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG59XG5cbi5pdGVtLXNhbGUtcHJpY2UgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1hbmltYXRpb24tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMjApO1xuICAtLXRleHQtc2hlbGwtYW5pbWF0aW9uLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4zMCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTZweDtcbn1cbiIsIjpob3N0IHtcbiAgLS1zaGVsbC1jb2xvcjogI2NiMzI4ZjtcbiAgLS1zaGVsbC1jb2xvci1yZ2I6IDIwMyw1MCwxNDM7XG59XG5cbmFwcC1pbWFnZS1zaGVsbC5zaG93Y2FzZS1pbWFnZSB7XG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG4gIC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMjUpO1xufVxuXG4uZGV0YWlscy1uYW1lID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtYW5pbWF0aW9uLWJhY2tncm91bmQ6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjI1KTtcbiAgLS10ZXh0LXNoZWxsLWFuaW1hdGlvbi1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMzUpO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE4cHg7XG4gIG1heC13aWR0aDogNjAlO1xufVxuLmRldGFpbHMtbmFtZSA+IGFwcC10ZXh0LXNoZWxsLnRleHQtbG9hZGVkIHtcbiAgbWF4LXdpZHRoOiBpbmhlcml0O1xufVxuXG4uZGV0YWlscy1icmFuZCA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWFuaW1hdGlvbi1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4yMCk7XG4gIC0tdGV4dC1zaGVsbC1hbmltYXRpb24tY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjMwKTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xuICBtYXgtd2lkdGg6IDQwJTtcbn1cbi5kZXRhaWxzLWJyYW5kID4gYXBwLXRleHQtc2hlbGwudGV4dC1sb2FkZWQge1xuICBtYXgtd2lkdGg6IGluaGVyaXQ7XG59XG5cbi5kZXRhaWxzLXByaWNlID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtYW5pbWF0aW9uLWJhY2tncm91bmQ6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcbiAgLS10ZXh0LXNoZWxsLWFuaW1hdGlvbi1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMjApO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE4cHg7XG4gIHdpZHRoOiA1MHB4O1xufVxuLmRldGFpbHMtcHJpY2UgPiBhcHAtdGV4dC1zaGVsbC50ZXh0LWxvYWRlZCB7XG4gIHdpZHRoOiBpbmhlcml0O1xufVxuXG4uZGV0YWlscy1zYWxlLXByaWNlID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtYW5pbWF0aW9uLWJhY2tncm91bmQ6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcbiAgLS10ZXh0LXNoZWxsLWFuaW1hdGlvbi1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMjApO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE4cHg7XG4gIHdpZHRoOiA1MHB4O1xufVxuLmRldGFpbHMtc2FsZS1wcmljZSA+IGFwcC10ZXh0LXNoZWxsLnRleHQtbG9hZGVkIHtcbiAgd2lkdGg6IGluaGVyaXQ7XG59XG5cbi5kZXRhaWxzLWRlc2NyaXB0aW9uID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtYW5pbWF0aW9uLWJhY2tncm91bmQ6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcbiAgLS10ZXh0LXNoZWxsLWFuaW1hdGlvbi1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMjApO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG59XG5cbi5kZXRhaWxzLWRlc2NyaXB0aW9uLnByb2R1Y3QtY29kZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgbWF4LXdpZHRoOiA0MCU7XG59XG4uZGV0YWlscy1kZXNjcmlwdGlvbi5wcm9kdWN0LWNvZGUgPiBhcHAtdGV4dC1zaGVsbC50ZXh0LWxvYWRlZCB7XG4gIG1heC13aWR0aDogaW5oZXJpdDtcbn1cblxuYXBwLWltYWdlLXNoZWxsLnJlbGF0ZWQtcHJvZHVjdC1pbWFnZSB7XG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG4gIC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMjUpO1xufVxuXG4uaXRlbS1uYW1lIGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWFuaW1hdGlvbi1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4yNSk7XG4gIC0tdGV4dC1zaGVsbC1hbmltYXRpb24tY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjM1KTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xufVxuXG4uaXRlbS1zYWxlLXByaWNlID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtYW5pbWF0aW9uLWJhY2tncm91bmQ6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjIwKTtcbiAgLS10ZXh0LXNoZWxsLWFuaW1hdGlvbi1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMzApO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE2cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/shell/data-store.ts":
/*!*************************************!*\
  !*** ./src/app/shell/data-store.ts ***!
  \*************************************/
/*! exports provided: ShellModel, DataStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShellModel", function() { return ShellModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataStore", function() { return DataStore; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _config_app_shell_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config/app-shell.config */ "./src/app/shell/config/app-shell.config.ts");




var ShellModel = /** @class */ (function () {
    function ShellModel() {
        this.isShell = false;
    }
    return ShellModel;
}());

var DataStore = /** @class */ (function () {
    function DataStore(shellModel) {
        this.shellModel = shellModel;
        // We wait on purpose 2 secs on local environment when fetching from json to simulate the backend roundtrip.
        // However, in production you should set this delay to 0 in the assets/config/app-shell.config.prod.json file.
        // tslint:disable-next-line:max-line-length
        this.networkDelay = (_config_app_shell_config__WEBPACK_IMPORTED_MODULE_3__["AppShellConfig"].settings && _config_app_shell_config__WEBPACK_IMPORTED_MODULE_3__["AppShellConfig"].settings.networkDelay) ? _config_app_shell_config__WEBPACK_IMPORTED_MODULE_3__["AppShellConfig"].settings.networkDelay : 0;
        this.timeline = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
    }
    // Static function with generics
    // (ref: https://stackoverflow.com/a/24293088/1116959)
    // Append a shell (T & ShellModel) to every value (T) emmited to the timeline
    DataStore.AppendShell = function (dataObservable, shellModel, networkDelay) {
        if (networkDelay === void 0) { networkDelay = 400; }
        var delayObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(true).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(networkDelay));
        // Assign shell flag accordingly
        // (ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([
            delayObservable,
            dataObservable
        ]).pipe(
        // Dismiss unnecessary delayValue
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_a) {
            var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_a, 2), delayValue = _b[0], dataValue = _b[1];
            return Object.assign(dataValue, { isShell: false });
        }), 
        // Set the shell model as the initial value
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(Object.assign(shellModel, { isShell: true })));
    };
    DataStore.prototype.load = function (dataSourceObservable) {
        var _this = this;
        var dataSourceWithShellObservable = DataStore.AppendShell(dataSourceObservable, this.shellModel, this.networkDelay);
        dataSourceWithShellObservable
            .subscribe(function (dataValue) {
            _this.timeline.next(dataValue);
        });
    };
    Object.defineProperty(DataStore.prototype, "state", {
        get: function () {
            return this.timeline.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    DataStore.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return DataStore;
}());



/***/ })

}]);
//# sourceMappingURL=fashion-details-fashion-details-module-es5.js.map