(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fashion-listing-fashion-listing-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/fashion/listing/fashion-listing.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/fashion/listing/fashion-listing.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<ion-header no-border>\n    \n    <ion-toolbar mode=\"ios\">\n        <ion-buttons color=\"light\" slot=\"start\">\n            <ion-back-button color=\"light\" defaultHref=\"app/user\"></ion-back-button>\n          </ion-buttons>\n      <ion-title text-center text-uppercase color=\"light\">\n       \n        <br>\n       <!-- <span text-lowercase class=\"subT\">Rick and Morty</span>  -->\n      </ion-title>\n     \n    \n    </ion-toolbar>\n    <!-- <ion-toolbar mode=\"ios\">\n      <ion-title text-center text-uppercase color=\"light\">Playing Music in Ionic-Capacitor</ion-title>\n    </ion-toolbar> -->\n  </ion-header>\n\n<ion-content class=\"fashion-listing-content\">\n\n\n    <div class=\"fixedContent\">\n        <ion-thumbnail [ngStyle]=\"{'background':'url(./assets/sample-images/categories/travel.png)'}\"></ion-thumbnail>\n      </div>\n\n      <span text-center >\n          <app-text-shell  style=\"font-size: 24px; color:#f4f5f8; font-weight: 500\" [data]=\"'Baptized in fire'\"></app-text-shell>\n         </span>\n\n        \n\n         <span style=\"padding: 5px\" text-center >\n            <app-text-shell style=\"font-size: 12px; color:#f4f5f8;\" [data]=\"'Created by Pod'\"></app-text-shell>\n            <app-text-shell style=\"font-size: 10px; color:#f4f5f8;\" [data]=\"'7 songs'\"></app-text-shell>\n           </span>\n\n\n           <div text-center >\n              <ion-button size=\"small\">\n                  <ion-icon slot=\"start\" name=\"play\"></ion-icon>\n                  Play\n\n                </ion-button>\n\n                <ion-button size=\"small\">\n                    \n                    Follow\n  \n                  </ion-button>\n\n                  <ion-button size=\"small\">\n                    \n                      Download\n    \n                    </ion-button>\n              </div>\n\n\n          \n\n\n       \n           <ion-item class=\"notification-item\" lines=\"none\">\n              <ion-row class=\"notification-item-wrapper\">\n              \n                <ion-col class=\"details-wrapper\">\n                  <h2 class=\"details-name\">Astrothunder</h2>\n                  <p class=\"details-description\">Travis Scott ■ ASTROWORLD</p>\n                </ion-col>\n                <ion-col size=\"2\" class=\"date-wrapper\">\n                  <h3 class=\"notification-date\">02:03</h3>\n                </ion-col>\n              </ion-row>\n            </ion-item>\n     \n\n            <ion-item class=\"notification-item\" lines=\"none\">\n                <ion-row class=\"notification-item-wrapper\">\n                \n                  <ion-col class=\"details-wrapper\">\n                    <h2 class=\"details-name\">Astrothunder</h2>\n                    <p class=\"details-description\">Travis Scott ■ ASTROWORLD</p>\n                  </ion-col>\n                  <ion-col size=\"2\" class=\"date-wrapper\">\n                    <h3 class=\"notification-date\">02:03</h3>\n                  </ion-col>\n                </ion-row>\n              </ion-item>\n     \n              \n\n              <ion-item class=\"notification-item\" lines=\"none\">\n                  <ion-row class=\"notification-item-wrapper\">\n                  \n                    <ion-col class=\"details-wrapper\">\n                      <h2 class=\"details-name\">Astrothunder</h2>\n                      <p class=\"details-description\">Travis Scott ■ ASTROWORLD</p>\n                    </ion-col>\n                    <ion-col size=\"2\" class=\"date-wrapper\">\n                      <h3 class=\"notification-date\">02:03</h3>\n                    </ion-col>\n                  </ion-row>\n                </ion-item>\n     \n                \n\n                <ion-item class=\"notification-item\" lines=\"none\">\n                    <ion-row class=\"notification-item-wrapper\">\n                    \n                      <ion-col class=\"details-wrapper\">\n                        <h2 class=\"details-name\">Astrothunder</h2>\n                        <p class=\"details-description\">Travis Scott ■ ASTROWORLD</p>\n                      </ion-col>\n                      <ion-col size=\"2\" class=\"date-wrapper\">\n                        <h3 class=\"notification-date\">02:03</h3>\n                      </ion-col>\n                    </ion-row>\n                  </ion-item>\n           \n\n                  <ion-item class=\"notification-item\" lines=\"none\">\n                      <ion-row class=\"notification-item-wrapper\">\n                      \n                        <ion-col class=\"details-wrapper\">\n                          <h2 class=\"details-name\">Astrothunder</h2>\n                          <p class=\"details-description\">Travis Scott ■ ASTROWORLD</p>\n                        </ion-col>\n                        <ion-col size=\"2\" class=\"date-wrapper\">\n                          <h3 class=\"notification-date\">02:03</h3>\n                        </ion-col>\n                      </ion-row>\n                    </ion-item>\n             \n\n\n\n\n                  \n</ion-content>\n"

/***/ }),

/***/ "./src/app/fashion/listing/fashion-listing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/fashion/listing/fashion-listing.module.ts ***!
  \***********************************************************/
/*! exports provided: FashionListingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FashionListingPageModule", function() { return FashionListingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _fashion_listing_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fashion-listing.page */ "./src/app/fashion/listing/fashion-listing.page.ts");
/* harmony import */ var _fashion_listing_resolver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fashion-listing.resolver */ "./src/app/fashion/listing/fashion-listing.resolver.ts");
/* harmony import */ var _fashion_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../fashion.service */ "./src/app/fashion/fashion.service.ts");











var routes = [
    {
        path: '',
        component: _fashion_listing_page__WEBPACK_IMPORTED_MODULE_8__["FashionListingPage"],
        resolve: {
            data: _fashion_listing_resolver__WEBPACK_IMPORTED_MODULE_9__["FashionListingResolver"]
        }
    }
];
var FashionListingPageModule = /** @class */ (function () {
    function FashionListingPageModule() {
    }
    FashionListingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
            ],
            declarations: [_fashion_listing_page__WEBPACK_IMPORTED_MODULE_8__["FashionListingPage"]],
            providers: [
                _fashion_listing_resolver__WEBPACK_IMPORTED_MODULE_9__["FashionListingResolver"],
                _fashion_service__WEBPACK_IMPORTED_MODULE_10__["FashionService"]
            ]
        })
    ], FashionListingPageModule);
    return FashionListingPageModule;
}());



/***/ }),

/***/ "./src/app/fashion/listing/fashion-listing.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/fashion/listing/fashion-listing.page.ts ***!
  \*********************************************************/
/*! exports provided: FashionListingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FashionListingPage", function() { return FashionListingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var FashionListingPage = /** @class */ (function () {
    function FashionListingPage(route) {
        this.route = route;
    }
    Object.defineProperty(FashionListingPage.prototype, "isShell", {
        get: function () {
            return (this.listing && this.listing.isShell) ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    FashionListingPage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (resolvedRouteData) {
            var listingDataStore = resolvedRouteData['data'];
            listingDataStore.state.subscribe(function (state) {
                _this.listing = state;
            }, function (error) { });
        }, function (error) { });
    };
    FashionListingPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.is-shell'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FashionListingPage.prototype, "isShell", null);
    FashionListingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fashion-listing',
            template: __webpack_require__(/*! raw-loader!./fashion-listing.page.html */ "./node_modules/raw-loader/index.js!./src/app/fashion/listing/fashion-listing.page.html"),
            styles: [__webpack_require__(/*! ./styles/fashion-listing.page.scss */ "./src/app/fashion/listing/styles/fashion-listing.page.scss"), __webpack_require__(/*! ./styles/fashion-listing.shell.scss */ "./src/app/fashion/listing/styles/fashion-listing.shell.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], FashionListingPage);
    return FashionListingPage;
}());



/***/ }),

/***/ "./src/app/fashion/listing/fashion-listing.resolver.ts":
/*!*************************************************************!*\
  !*** ./src/app/fashion/listing/fashion-listing.resolver.ts ***!
  \*************************************************************/
/*! exports provided: FashionListingResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FashionListingResolver", function() { return FashionListingResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fashion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fashion.service */ "./src/app/fashion/fashion.service.ts");



var FashionListingResolver = /** @class */ (function () {
    function FashionListingResolver(fashionService) {
        this.fashionService = fashionService;
    }
    FashionListingResolver.prototype.resolve = function () {
        var dataSource = this.fashionService.getListingDataSource();
        var dataStore = this.fashionService.getListingStore(dataSource);
        return dataStore;
    };
    FashionListingResolver.ctorParameters = function () { return [
        { type: _fashion_service__WEBPACK_IMPORTED_MODULE_2__["FashionService"] }
    ]; };
    FashionListingResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_fashion_service__WEBPACK_IMPORTED_MODULE_2__["FashionService"]])
    ], FashionListingResolver);
    return FashionListingResolver;
}());



/***/ }),

/***/ "./src/app/fashion/listing/styles/fashion-listing.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/fashion/listing/styles/fashion-listing.page.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background);\n  --page-items-gutter: calc(var(--page-margin) / 2);\n  --page-color: #cb328f;\n}\n\nion-content {\n  --background: linear-gradient(to top, #060606, #690000);\n}\n\nion-toolbar {\n  --background: #680000;\n}\n\nion-button {\n  font-size: 12px;\n  font-weight: 400;\n}\n\nion-item {\n  --ion-background-color: red !important;\n}\n\n.item, .list, .item-content, .item-complex {\n  --ion-background-color: transparent !important;\n}\n\n.notification-item {\n  --padding-start: 0px;\n  padding-top: var(--page-margin);\n  color: var(--ion-color-medium);\n  box-shadow: inset 0 8px 2px -9px var(--ion-color-darkest);\n}\n\n.notification-item .notification-item-wrapper {\n  --ion-grid-column-padding: 0px;\n  width: 100%;\n  align-items: center;\n}\n\n.notification-item .details-wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  padding-left: var(--page-margin);\n}\n\n.notification-item .details-wrapper .details-name {\n  margin-top: 0px;\n  margin-bottom: 5px;\n  font-size: 16px;\n  font-weight: 400;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-light);\n}\n\n.notification-item .details-wrapper .details-description {\n  font-size: 12px;\n  margin: 0px;\n}\n\n.notification-item .date-wrapper {\n  align-self: flex-start;\n}\n\n.notification-item .date-wrapper .notification-date {\n  margin: 0px;\n  font-size: 12px;\n  text-align: end;\n}\n\n.fixedContent {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  padding-top: 4px;\n}\n\n.fixedContent ion-text {\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.fixedContent .pUser {\n  color: var(--ion-color-light-shade);\n  font-size: 14px;\n}\n\n.fixedContent ion-thumbnail {\n  width: 25vh;\n  height: 25vh;\n  background-size: cover !important;\n  background-position: center !important;\n  margin-bottom: 16px;\n  box-shadow: 0 4px 5px -2px rgba(0, 0, 0, 0.6), 0 2px 4px 0 rgba(0, 0, 0, 0.66), 0 1px 5px 0 rgba(0, 0, 0, 0.65);\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), background-color 15ms linear, color 15ms linear;\n}\n\n.fashion-listing-content {\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  --padding-top: var(--page-margin);\n  --padding-bottom: var(--page-margin);\n}\n\n.items-row {\n  --ion-grid-column-padding: 0;\n}\n\n.items-row .listing-item {\n  margin-bottom: calc(var(--page-margin) * 2);\n}\n\n.items-row .listing-item:nth-child(odd) {\n  padding-right: var(--page-items-gutter);\n}\n\n.items-row .listing-item:nth-child(even) {\n  padding-left: var(--page-items-gutter);\n}\n\n.items-row .listing-item .item-image-wrapper {\n  border: 1px solid var(--ion-color-light-shade);\n}\n\n.items-row .listing-item .item-image-wrapper .image-anchor {\n  display: block;\n}\n\n.items-row .listing-item .item-body {\n  --ion-grid-column-padding: 0px;\n  padding: 5px 5px 0px;\n  text-align: center;\n}\n\n.items-row .listing-item .item-body .main-info {\n  margin-bottom: calc(var(--page-margin) / 2);\n}\n\n.items-row .listing-item .item-body .main-info .item-name {\n  margin: 0px;\n  font-size: 14px;\n  font-weight: 400;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.items-row .listing-item .item-body .main-info .item-name .name-anchor {\n  color: var(--ion-color-primary);\n  display: block;\n  text-decoration: none;\n}\n\n.items-row .listing-item .item-body .secondary-info {\n  align-items: center;\n}\n\n.items-row .listing-item .item-body .secondary-info .price-col:first-child {\n  padding-right: calc(var(--page-margin) / 2);\n  text-align: right;\n}\n\n.items-row .listing-item .item-body .secondary-info .price-col:first-child:last-child {\n  text-align: center;\n}\n\n.items-row .listing-item .item-body .secondary-info .price-col:last-child {\n  padding-left: calc(var(--page-margin) / 2);\n  text-align: left;\n}\n\n.items-row .listing-item .item-body .secondary-info .separator {\n  max-width: 0px;\n  border-right: solid 2px var(--ion-color-light-shade);\n  align-self: stretch;\n}\n\n.items-row .listing-item .item-body .secondary-info .item-sale-price {\n  display: block;\n  font-weight: 400;\n  color: var(--page-color);\n  font-size: 16px;\n}\n\n.items-row .listing-item .item-body .secondary-info .item-original-price {\n  display: block;\n  text-decoration: line-through;\n  color: var(--ion-color-medium-shade);\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmFzaGlvbi9saXN0aW5nL3N0eWxlcy9EOlxcc2hpdFxccG9kL3NyY1xcYXBwXFxmYXNoaW9uXFxsaXN0aW5nXFxzdHlsZXNcXGZhc2hpb24tbGlzdGluZy5wYWdlLnNjc3MiLCJzcmMvYXBwL2Zhc2hpb24vbGlzdGluZy9zdHlsZXMvZmFzaGlvbi1saXN0aW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHFDQUFBO0VBQ0Esd0NBQUE7RUFFQSxpREFBQTtFQUNBLHFCQUFBO0FDRkY7O0FES0E7RUFDRSx1REFBQTtBQ0ZGOztBRE1BO0VBQ0UscUJBQUE7QUNIRjs7QURNQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ0hGOztBRE1BO0VBQ0Usc0NBQUE7QUNIRjs7QURPRTtFQUNFLDhDQUFBO0FDSko7O0FET0E7RUFDRSxvQkFBQTtFQUdBLCtCQUFBO0VBQ0EsOEJBQUE7RUFDQSx5REFBQTtBQ05GOztBRFFFO0VBQ0UsOEJBQUE7RUFFQSxXQUFBO0VBQ0EsbUJBQUE7QUNQSjs7QURVRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0NBQUE7QUNSSjs7QURVSTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBRUEsNkJBQUE7QUNUTjs7QURZSTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FDVk47O0FEY0U7RUFDRSxzQkFBQTtBQ1pKOztBRGNJO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDWk47O0FEbUJBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FDaEJGOztBRGlCRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ2ZKOztBRGtCRTtFQUNFLG1DQUFBO0VBQ0EsZUFBQTtBQ2hCSjs7QURvQkU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlDQUFBO0VBQ0Esc0NBQUE7RUFDQSxtQkFBQTtFQUNBLCtHQUFBO0VBQ0EsMEdBQUE7QUNsQko7O0FEdUJBO0VBRUUsbUNBQUE7RUFDQSxpQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esb0NBQUE7QUNyQkY7O0FEd0JBO0VBQ0UsNEJBQUE7QUNyQkY7O0FEdUJFO0VBQ0UsMkNBQUE7QUNyQko7O0FEdUJJO0VBQ0UsdUNBQUE7QUNyQk47O0FEd0JJO0VBQ0Usc0NBQUE7QUN0Qk47O0FEeUJJO0VBQ0UsOENBQUE7QUN2Qk47O0FEeUJNO0VBQ0UsY0FBQTtBQ3ZCUjs7QUQyQkk7RUFDRSw4QkFBQTtFQUVBLG9CQUFBO0VBQ0Esa0JBQUE7QUMxQk47O0FENEJNO0VBQ0UsMkNBQUE7QUMxQlI7O0FENEJRO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUVBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQzNCVjs7QUQ2QlU7RUFDRSwrQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQzNCWjs7QURnQ007RUFDRSxtQkFBQTtBQzlCUjs7QURpQ1U7RUFDRSwyQ0FBQTtFQUNBLGlCQUFBO0FDL0JaOztBRGlDWTtFQUNFLGtCQUFBO0FDL0JkOztBRG1DVTtFQUNFLDBDQUFBO0VBQ0EsZ0JBQUE7QUNqQ1o7O0FEcUNRO0VBQ0UsY0FBQTtFQUNBLG9EQUFBO0VBQ0EsbUJBQUE7QUNuQ1Y7O0FEc0NRO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0FDcENWOztBRHVDUTtFQUNFLGNBQUE7RUFDQSw2QkFBQTtFQUNBLG9DQUFBO0VBQ0EsZUFBQTtBQ3JDViIsImZpbGUiOiJzcmMvYXBwL2Zhc2hpb24vbGlzdGluZy9zdHlsZXMvZmFzaGlvbi1saXN0aW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEN1c3RvbSB2YXJpYWJsZXNcbi8vIE5vdGU6ICBUaGVzZSBvbmVzIHdlcmUgYWRkZWQgYnkgdXMgYW5kIGhhdmUgbm90aGluZyB0byBkbyB3aXRoIElvbmljIENTUyBDdXN0b20gUHJvcGVydGllc1xuOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtZmFpci1tYXJnaW4pO1xuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xuXG4gIC0tcGFnZS1pdGVtcy1ndXR0ZXI6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIC0tcGFnZS1jb2xvcjogI2NiMzI4Zjtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICMwNjA2MDYsICM2OTAwMDApO1xuXG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjNjgwMDAwO1xufVxuXG5pb24tYnV0dG9ue1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OjQwMDtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiByZWQgIWltcG9ydGFudDtcbiAgfVxuXG5cbiAgLml0ZW0sIC5saXN0LCAuaXRlbS1jb250ZW50LCAuaXRlbS1jb21wbGV4IHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIH1cblxuLm5vdGlmaWNhdGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC8vIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcblxuICBwYWRkaW5nLXRvcDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgOHB4IDJweCAtOXB4IHZhcigtLWlvbi1jb2xvci1kYXJrZXN0KTtcblxuICAubm90aWZpY2F0aW9uLWl0ZW0td3JhcHBlciB7XG4gICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIC5kZXRhaWxzLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcblxuICAgIC5kZXRhaWxzLW5hbWUge1xuICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgICAgIC8vIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgIH1cblxuICAgIC5kZXRhaWxzLWRlc2NyaXB0aW9uIHtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIG1hcmdpbjogMHB4O1xuICAgIH1cbiAgfVxuXG4gIC5kYXRlLXdyYXBwZXIge1xuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG5cbiAgICAubm90aWZpY2F0aW9uLWRhdGUge1xuICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICB0ZXh0LWFsaWduOiBlbmQ7XG4gICAgfVxuICB9XG59XG5cblxuXG4uZml4ZWRDb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmctdG9wOiA0cHg7XG4gIGlvbi10ZXh0IHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cblxuICAucFVzZXIge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAvLyBtYXJnaW46IDEycHg7XG4gIH1cblxuICBpb24tdGh1bWJuYWlsIHtcbiAgICB3aWR0aDogMjV2aDtcbiAgICBoZWlnaHQ6IDI1dmg7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgYm94LXNoYWRvdzogMCA0cHggNXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjYpLCAwIDJweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuNjYpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuNjUpO1xuICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMjgwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSwgYmFja2dyb3VuZC1jb2xvciAxNW1zIGxpbmVhciwgY29sb3IgMTVtcyBsaW5lYXI7XG4gIH1cbn1cblxuLy8gTm90ZTogIEFsbCB0aGUgQ1NTIHZhcmlhYmxlcyBkZWZpbmVkIGJlbG93IGFyZSBvdmVycmlkZXMgb2YgSW9uaWMgZWxlbWVudHMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXG4uZmFzaGlvbi1saXN0aW5nLWNvbnRlbnQge1xuICAvLyAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG4gIC0tcGFkZGluZy1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAtLXBhZGRpbmctZW5kOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIC0tcGFkZGluZy10b3A6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgLS1wYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xufVxuXG4uaXRlbXMtcm93IHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMDtcblxuICAubGlzdGluZy1pdGVtIHtcbiAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpO1xuXG4gICAgJjpudGgtY2hpbGQob2RkKSB7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1wYWdlLWl0ZW1zLWd1dHRlcik7XG4gICAgfVxuXG4gICAgJjpudGgtY2hpbGQoZXZlbikge1xuICAgICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1wYWdlLWl0ZW1zLWd1dHRlcik7XG4gICAgfVxuXG4gICAgLml0ZW0taW1hZ2Utd3JhcHBlciB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuXG4gICAgICAuaW1hZ2UtYW5jaG9yIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLml0ZW0tYm9keSB7XG4gICAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG5cbiAgICAgIHBhZGRpbmc6IDVweCA1cHggMHB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAubWFpbi1pbmZvIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcblxuICAgICAgICAuaXRlbS1uYW1lIHtcbiAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcblxuICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICAgICAgIC5uYW1lLWFuY2hvciB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5zZWNvbmRhcnktaW5mbyB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgLnByaWNlLWNvbCB7XG4gICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG5cbiAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuc2VwYXJhdG9yIHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDBweDtcbiAgICAgICAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDJweCB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuICAgICAgICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XG4gICAgICAgIH1cblxuICAgICAgICAuaXRlbS1zYWxlLXByaWNlIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wYWdlLWNvbG9yKTtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuaXRlbS1vcmlnaW5hbC1wcmljZSB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtZmFpci1tYXJnaW4pO1xuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xuICAtLXBhZ2UtaXRlbXMtZ3V0dGVyOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAtLXBhZ2UtY29sb3I6ICNjYjMyOGY7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjMDYwNjA2LCAjNjkwMDAwKTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICM2ODAwMDA7XG59XG5cbmlvbi1idXR0b24ge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcmVkICFpbXBvcnRhbnQ7XG59XG5cbi5pdGVtLCAubGlzdCwgLml0ZW0tY29udGVudCwgLml0ZW0tY29tcGxleCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbi5ub3RpZmljYXRpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICBwYWRkaW5nLXRvcDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgOHB4IDJweCAtOXB4IHZhcigtLWlvbi1jb2xvci1kYXJrZXN0KTtcbn1cbi5ub3RpZmljYXRpb24taXRlbSAubm90aWZpY2F0aW9uLWl0ZW0td3JhcHBlciB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubm90aWZpY2F0aW9uLWl0ZW0gLmRldGFpbHMtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBwYWRkaW5nLWxlZnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cbi5ub3RpZmljYXRpb24taXRlbSAuZGV0YWlscy13cmFwcGVyIC5kZXRhaWxzLW5hbWUge1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xufVxuLm5vdGlmaWNhdGlvbi1pdGVtIC5kZXRhaWxzLXdyYXBwZXIgLmRldGFpbHMtZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbjogMHB4O1xufVxuLm5vdGlmaWNhdGlvbi1pdGVtIC5kYXRlLXdyYXBwZXIge1xuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xufVxuLm5vdGlmaWNhdGlvbi1pdGVtIC5kYXRlLXdyYXBwZXIgLm5vdGlmaWNhdGlvbi1kYXRlIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1hbGlnbjogZW5kO1xufVxuXG4uZml4ZWRDb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmctdG9wOiA0cHg7XG59XG4uZml4ZWRDb250ZW50IGlvbi10ZXh0IHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5maXhlZENvbnRlbnQgLnBVc2VyIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5maXhlZENvbnRlbnQgaW9uLXRodW1ibmFpbCB7XG4gIHdpZHRoOiAyNXZoO1xuICBoZWlnaHQ6IDI1dmg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDVweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC42KSwgMCAycHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjY2KSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjY1KTtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAyODBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpLCBiYWNrZ3JvdW5kLWNvbG9yIDE1bXMgbGluZWFyLCBjb2xvciAxNW1zIGxpbmVhcjtcbn1cblxuLmZhc2hpb24tbGlzdGluZy1jb250ZW50IHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIC0tcGFkZGluZy1lbmQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgLS1wYWRkaW5nLXRvcDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAtLXBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG59XG5cbi5pdGVtcy1yb3cge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwO1xufVxuLml0ZW1zLXJvdyAubGlzdGluZy1pdGVtIHtcbiAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKTtcbn1cbi5pdGVtcy1yb3cgLmxpc3RpbmctaXRlbTpudGgtY2hpbGQob2RkKSB7XG4gIHBhZGRpbmctcmlnaHQ6IHZhcigtLXBhZ2UtaXRlbXMtZ3V0dGVyKTtcbn1cbi5pdGVtcy1yb3cgLmxpc3RpbmctaXRlbTpudGgtY2hpbGQoZXZlbikge1xuICBwYWRkaW5nLWxlZnQ6IHZhcigtLXBhZ2UtaXRlbXMtZ3V0dGVyKTtcbn1cbi5pdGVtcy1yb3cgLmxpc3RpbmctaXRlbSAuaXRlbS1pbWFnZS13cmFwcGVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbn1cbi5pdGVtcy1yb3cgLmxpc3RpbmctaXRlbSAuaXRlbS1pbWFnZS13cmFwcGVyIC5pbWFnZS1hbmNob3Ige1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5pdGVtcy1yb3cgLmxpc3RpbmctaXRlbSAuaXRlbS1ib2R5IHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuICBwYWRkaW5nOiA1cHggNXB4IDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLml0ZW1zLXJvdyAubGlzdGluZy1pdGVtIC5pdGVtLWJvZHkgLm1haW4taW5mbyB7XG4gIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG59XG4uaXRlbXMtcm93IC5saXN0aW5nLWl0ZW0gLml0ZW0tYm9keSAubWFpbi1pbmZvIC5pdGVtLW5hbWUge1xuICBtYXJnaW46IDBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5pdGVtcy1yb3cgLmxpc3RpbmctaXRlbSAuaXRlbS1ib2R5IC5tYWluLWluZm8gLml0ZW0tbmFtZSAubmFtZS1hbmNob3Ige1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLml0ZW1zLXJvdyAubGlzdGluZy1pdGVtIC5pdGVtLWJvZHkgLnNlY29uZGFyeS1pbmZvIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5pdGVtcy1yb3cgLmxpc3RpbmctaXRlbSAuaXRlbS1ib2R5IC5zZWNvbmRhcnktaW5mbyAucHJpY2UtY29sOmZpcnN0LWNoaWxkIHtcbiAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uaXRlbXMtcm93IC5saXN0aW5nLWl0ZW0gLml0ZW0tYm9keSAuc2Vjb25kYXJ5LWluZm8gLnByaWNlLWNvbDpmaXJzdC1jaGlsZDpsYXN0LWNoaWxkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLml0ZW1zLXJvdyAubGlzdGluZy1pdGVtIC5pdGVtLWJvZHkgLnNlY29uZGFyeS1pbmZvIC5wcmljZS1jb2w6bGFzdC1jaGlsZCB7XG4gIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5pdGVtcy1yb3cgLmxpc3RpbmctaXRlbSAuaXRlbS1ib2R5IC5zZWNvbmRhcnktaW5mbyAuc2VwYXJhdG9yIHtcbiAgbWF4LXdpZHRoOiAwcHg7XG4gIGJvcmRlci1yaWdodDogc29saWQgMnB4IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG4gIGFsaWduLXNlbGY6IHN0cmV0Y2g7XG59XG4uaXRlbXMtcm93IC5saXN0aW5nLWl0ZW0gLml0ZW0tYm9keSAuc2Vjb25kYXJ5LWluZm8gLml0ZW0tc2FsZS1wcmljZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogdmFyKC0tcGFnZS1jb2xvcik7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5pdGVtcy1yb3cgLmxpc3RpbmctaXRlbSAuaXRlbS1ib2R5IC5zZWNvbmRhcnktaW5mbyAuaXRlbS1vcmlnaW5hbC1wcmljZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xuICBmb250LXNpemU6IDE0cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/fashion/listing/styles/fashion-listing.shell.scss":
/*!*******************************************************************!*\
  !*** ./src/app/fashion/listing/styles/fashion-listing.shell.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --shell-color: #cb328f;\n  --shell-color-rgb: 203,50,143;\n}\n\n:host(.is-shell) a {\n  pointer-events: none;\n}\n\napp-image-shell.item-image {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .10);\n  --image-shell-spinner-color: rgba(var(--shell-color-rgb), .25);\n}\n\n.item-name app-text-shell {\n  --text-shell-animation-background: rgba(var(--shell-color-rgb), .25);\n  --text-shell-animation-color: rgba(var(--shell-color-rgb), .35);\n  --text-shell-line-height: 14px;\n}\n\n.item-sale-price > app-text-shell {\n  --text-shell-animation-background: rgba(var(--shell-color-rgb), .20);\n  --text-shell-animation-color: rgba(var(--shell-color-rgb), .30);\n  --text-shell-line-height: 16px;\n}\n\n.item-original-price > app-text-shell {\n  --text-shell-animation-background: rgba(var(--shell-color-rgb), .20);\n  --text-shell-animation-color: rgba(var(--shell-color-rgb), .30);\n  --text-shell-line-height: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmFzaGlvbi9saXN0aW5nL3N0eWxlcy9EOlxcc2hpdFxccG9kL3NyY1xcYXBwXFxmYXNoaW9uXFxsaXN0aW5nXFxzdHlsZXNcXGZhc2hpb24tbGlzdGluZy5zaGVsbC5zY3NzIiwic3JjL2FwcC9mYXNoaW9uL2xpc3Rpbmcvc3R5bGVzL2Zhc2hpb24tbGlzdGluZy5zaGVsbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usc0JBQUE7RUFDQSw2QkFBQTtBQ0RGOztBRFNFO0VBQ0Usb0JBQUE7QUNOSjs7QURZQTtFQUNFLG1FQUFBO0VBQ0EsOERBQUE7QUNURjs7QURZQTtFQUNFLG9FQUFBO0VBQ0EsK0RBQUE7RUFDQSw4QkFBQTtBQ1RGOztBRFlBO0VBQ0Usb0VBQUE7RUFDQSwrREFBQTtFQUNBLDhCQUFBO0FDVEY7O0FEWUE7RUFDRSxvRUFBQTtFQUNBLCtEQUFBO0VBQ0EsOEJBQUE7QUNURiIsImZpbGUiOiJzcmMvYXBwL2Zhc2hpb24vbGlzdGluZy9zdHlsZXMvZmFzaGlvbi1saXN0aW5nLnNoZWxsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDdXN0b20gdmFyaWFibGVzXG4vLyBOb3RlOiAgVGhlc2Ugb25lcyB3ZXJlIGFkZGVkIGJ5IHVzIGFuZCBoYXZlIG5vdGhpbmcgdG8gZG8gd2l0aCBJb25pYyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbjpob3N0IHtcbiAgLS1zaGVsbC1jb2xvcjogI2NiMzI4ZjtcbiAgLS1zaGVsbC1jb2xvci1yZ2I6IDIwMyw1MCwxNDM7XG59XG5cbi8vIFlvdSBjYW4gYWxzbyBhcHBseSBzaGVlbCBzdHlsZXMgdG8gdGhlIGVudGlyZSBwYWdlXG46aG9zdCguaXMtc2hlbGwpIHtcbiAgLy8gaW9uLWNvbnRlbnQge1xuICAvLyAgIG9wYWNpdHk6IDAuODtcbiAgLy8gfVxuICBhIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxufVxuXG5cblxuYXBwLWltYWdlLXNoZWxsLml0ZW0taW1hZ2Uge1xuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLWltYWdlLXNoZWxsLXNwaW5uZXItY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjI1KTtcbn1cblxuLml0ZW0tbmFtZSBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1hbmltYXRpb24tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMjUpO1xuICAtLXRleHQtc2hlbGwtYW5pbWF0aW9uLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4zNSk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbn1cblxuLml0ZW0tc2FsZS1wcmljZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWFuaW1hdGlvbi1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4yMCk7XG4gIC0tdGV4dC1zaGVsbC1hbmltYXRpb24tY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjMwKTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNnB4O1xufVxuXG4uaXRlbS1vcmlnaW5hbC1wcmljZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWFuaW1hdGlvbi1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4yMCk7XG4gIC0tdGV4dC1zaGVsbC1hbmltYXRpb24tY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjMwKTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNnB4O1xufVxuIiwiOmhvc3Qge1xuICAtLXNoZWxsLWNvbG9yOiAjY2IzMjhmO1xuICAtLXNoZWxsLWNvbG9yLXJnYjogMjAzLDUwLDE0Mztcbn1cblxuOmhvc3QoLmlzLXNoZWxsKSBhIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbmFwcC1pbWFnZS1zaGVsbC5pdGVtLWltYWdlIHtcbiAgLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQ6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcbiAgLS1pbWFnZS1zaGVsbC1zcGlubmVyLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4yNSk7XG59XG5cbi5pdGVtLW5hbWUgYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtYW5pbWF0aW9uLWJhY2tncm91bmQ6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjI1KTtcbiAgLS10ZXh0LXNoZWxsLWFuaW1hdGlvbi1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMzUpO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG59XG5cbi5pdGVtLXNhbGUtcHJpY2UgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1hbmltYXRpb24tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMjApO1xuICAtLXRleHQtc2hlbGwtYW5pbWF0aW9uLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4zMCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTZweDtcbn1cblxuLml0ZW0tb3JpZ2luYWwtcHJpY2UgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1hbmltYXRpb24tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMjApO1xuICAtLXRleHQtc2hlbGwtYW5pbWF0aW9uLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4zMCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTZweDtcbn0iXX0= */"

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
//# sourceMappingURL=fashion-listing-fashion-listing-module-es5.js.map