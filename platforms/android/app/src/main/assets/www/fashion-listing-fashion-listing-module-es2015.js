(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fashion-listing-fashion-listing-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/fashion/listing/fashion-listing.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fashion/listing/fashion-listing.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n\n<ion-header no-border>\n    \n    <ion-toolbar mode=\"ios\">\n        <ion-buttons color=\"light\" slot=\"start\">\n            <ion-back-button color=\"light\" defaultHref=\"app/user\"></ion-back-button>\n          </ion-buttons>\n      <ion-title text-center text-uppercase color=\"light\">\n       \n        <br>\n       <!-- <span text-lowercase class=\"subT\">Rick and Morty</span>  -->\n      </ion-title>\n     \n    \n    </ion-toolbar>\n    <!-- <ion-toolbar mode=\"ios\">\n      <ion-title text-center text-uppercase color=\"light\">Playing Music in Ionic-Capacitor</ion-title>\n    </ion-toolbar> -->\n  </ion-header>\n\n<ion-content class=\"fashion-listing-content\">\n\n\n    <div class=\"fixedContent\">\n        <ion-thumbnail [ngStyle]=\"{'background':'url(./assets/sample-images/categories/travel.png)'}\"></ion-thumbnail>\n      </div>\n\n      <span text-center >\n          <app-text-shell  style=\"font-size: 24px; color:#f4f5f8; font-weight: 500\" [data]=\"'Baptized in fire'\"></app-text-shell>\n         </span>\n\n        \n\n         <span style=\"padding: 5px\" text-center >\n            <app-text-shell style=\"font-size: 12px; color:#f4f5f8;\" [data]=\"'Created by Pod'\"></app-text-shell>\n            <app-text-shell style=\"font-size: 10px; color:#f4f5f8;\" [data]=\"'7 songs'\"></app-text-shell>\n           </span>\n\n\n           <div text-center >\n              <ion-button size=\"small\">\n                  <ion-icon slot=\"start\" name=\"play\"></ion-icon>\n                  Play\n\n                </ion-button>\n\n                <ion-button size=\"small\">\n                    \n                    Follow\n  \n                  </ion-button>\n\n                  <ion-button size=\"small\">\n                    \n                      Download\n    \n                    </ion-button>\n              </div>\n\n\n          \n\n\n       \n           <ion-item class=\"notification-item\" lines=\"none\">\n              <ion-row class=\"notification-item-wrapper\">\n              \n                <ion-col class=\"details-wrapper\">\n                  <h2 class=\"details-name\">Astrothunder</h2>\n                  <p class=\"details-description\">Travis Scott ■ ASTROWORLD</p>\n                </ion-col>\n                <ion-col size=\"2\" class=\"date-wrapper\">\n                  <h3 class=\"notification-date\">02:03</h3>\n                </ion-col>\n              </ion-row>\n            </ion-item>\n     \n\n            <ion-item class=\"notification-item\" lines=\"none\">\n                <ion-row class=\"notification-item-wrapper\">\n                \n                  <ion-col class=\"details-wrapper\">\n                    <h2 class=\"details-name\">Astrothunder</h2>\n                    <p class=\"details-description\">Travis Scott ■ ASTROWORLD</p>\n                  </ion-col>\n                  <ion-col size=\"2\" class=\"date-wrapper\">\n                    <h3 class=\"notification-date\">02:03</h3>\n                  </ion-col>\n                </ion-row>\n              </ion-item>\n     \n              \n\n              <ion-item class=\"notification-item\" lines=\"none\">\n                  <ion-row class=\"notification-item-wrapper\">\n                  \n                    <ion-col class=\"details-wrapper\">\n                      <h2 class=\"details-name\">Astrothunder</h2>\n                      <p class=\"details-description\">Travis Scott ■ ASTROWORLD</p>\n                    </ion-col>\n                    <ion-col size=\"2\" class=\"date-wrapper\">\n                      <h3 class=\"notification-date\">02:03</h3>\n                    </ion-col>\n                  </ion-row>\n                </ion-item>\n     \n                \n\n                <ion-item class=\"notification-item\" lines=\"none\">\n                    <ion-row class=\"notification-item-wrapper\">\n                    \n                      <ion-col class=\"details-wrapper\">\n                        <h2 class=\"details-name\">Astrothunder</h2>\n                        <p class=\"details-description\">Travis Scott ■ ASTROWORLD</p>\n                      </ion-col>\n                      <ion-col size=\"2\" class=\"date-wrapper\">\n                        <h3 class=\"notification-date\">02:03</h3>\n                      </ion-col>\n                    </ion-row>\n                  </ion-item>\n           \n\n                  <ion-item class=\"notification-item\" lines=\"none\">\n                      <ion-row class=\"notification-item-wrapper\">\n                      \n                        <ion-col class=\"details-wrapper\">\n                          <h2 class=\"details-name\">Astrothunder</h2>\n                          <p class=\"details-description\">Travis Scott ■ ASTROWORLD</p>\n                        </ion-col>\n                        <ion-col size=\"2\" class=\"date-wrapper\">\n                          <h3 class=\"notification-date\">02:03</h3>\n                        </ion-col>\n                      </ion-row>\n                    </ion-item>\n             \n\n\n\n\n                  \n</ion-content>\n");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _fashion_listing_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fashion-listing.page */ "./src/app/fashion/listing/fashion-listing.page.ts");
/* harmony import */ var _fashion_listing_resolver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fashion-listing.resolver */ "./src/app/fashion/listing/fashion-listing.resolver.ts");
/* harmony import */ var _fashion_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../fashion.service */ "./src/app/fashion/fashion.service.ts");











const routes = [
    {
        path: '',
        component: _fashion_listing_page__WEBPACK_IMPORTED_MODULE_8__["FashionListingPage"],
        resolve: {
            data: _fashion_listing_resolver__WEBPACK_IMPORTED_MODULE_9__["FashionListingResolver"]
        }
    }
];
let FashionListingPageModule = class FashionListingPageModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let FashionListingPage = class FashionListingPage {
    constructor(route) {
        this.route = route;
    }
    get isShell() {
        return (this.listing && this.listing.isShell) ? true : false;
    }
    ngOnInit() {
        this.route.data.subscribe((resolvedRouteData) => {
            const listingDataStore = resolvedRouteData['data'];
            listingDataStore.state.subscribe((state) => {
                this.listing = state;
            }, (error) => { });
        }, (error) => { });
    }
};
FashionListingPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.is-shell'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FashionListingPage.prototype, "isShell", null);
FashionListingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-fashion-listing',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./fashion-listing.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/fashion/listing/fashion-listing.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./styles/fashion-listing.page.scss */ "./src/app/fashion/listing/styles/fashion-listing.page.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./styles/fashion-listing.shell.scss */ "./src/app/fashion/listing/styles/fashion-listing.shell.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], FashionListingPage);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fashion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fashion.service */ "./src/app/fashion/fashion.service.ts");



let FashionListingResolver = class FashionListingResolver {
    constructor(fashionService) {
        this.fashionService = fashionService;
    }
    resolve() {
        const dataSource = this.fashionService.getListingDataSource();
        const dataStore = this.fashionService.getListingStore(dataSource);
        return dataStore;
    }
};
FashionListingResolver.ctorParameters = () => [
    { type: _fashion_service__WEBPACK_IMPORTED_MODULE_2__["FashionService"] }
];
FashionListingResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_fashion_service__WEBPACK_IMPORTED_MODULE_2__["FashionService"]])
], FashionListingResolver);



/***/ }),

/***/ "./src/app/fashion/listing/styles/fashion-listing.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/fashion/listing/styles/fashion-listing.page.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background);\n  --page-items-gutter: calc(var(--page-margin) / 2);\n  --page-color: #cb328f;\n}\n\nion-content {\n  --background: linear-gradient(to top, #060606, #690000);\n}\n\nion-toolbar {\n  --background: #680000;\n}\n\nion-button {\n  font-size: 12px;\n  font-weight: 400;\n}\n\nion-item {\n  --ion-background-color: red !important;\n}\n\n.item, .list, .item-content, .item-complex {\n  --ion-background-color: transparent !important;\n}\n\n.notification-item {\n  --padding-start: 0px;\n  padding-top: var(--page-margin);\n  color: var(--ion-color-medium);\n  box-shadow: inset 0 8px 2px -9px var(--ion-color-darkest);\n}\n\n.notification-item .notification-item-wrapper {\n  --ion-grid-column-padding: 0px;\n  width: 100%;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.notification-item .details-wrapper {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  justify-content: space-around;\n  padding-left: var(--page-margin);\n}\n\n.notification-item .details-wrapper .details-name {\n  margin-top: 0px;\n  margin-bottom: 5px;\n  font-size: 16px;\n  font-weight: 400;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-light);\n}\n\n.notification-item .details-wrapper .details-description {\n  font-size: 12px;\n  margin: 0px;\n}\n\n.notification-item .date-wrapper {\n  align-self: flex-start;\n}\n\n.notification-item .date-wrapper .notification-date {\n  margin: 0px;\n  font-size: 12px;\n  text-align: end;\n}\n\n.fixedContent {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  padding-top: 4px;\n}\n\n.fixedContent ion-text {\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.fixedContent .pUser {\n  color: var(--ion-color-light-shade);\n  font-size: 14px;\n}\n\n.fixedContent ion-thumbnail {\n  width: 25vh;\n  height: 25vh;\n  background-size: cover !important;\n  background-position: center !important;\n  margin-bottom: 16px;\n  box-shadow: 0 4px 5px -2px rgba(0, 0, 0, 0.6), 0 2px 4px 0 rgba(0, 0, 0, 0.66), 0 1px 5px 0 rgba(0, 0, 0, 0.65);\n  -webkit-transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), background-color 15ms linear, color 15ms linear;\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), background-color 15ms linear, color 15ms linear;\n}\n\n.fashion-listing-content {\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  --padding-top: var(--page-margin);\n  --padding-bottom: var(--page-margin);\n}\n\n.items-row {\n  --ion-grid-column-padding: 0;\n}\n\n.items-row .listing-item {\n  margin-bottom: calc(var(--page-margin) * 2);\n}\n\n.items-row .listing-item:nth-child(odd) {\n  padding-right: var(--page-items-gutter);\n}\n\n.items-row .listing-item:nth-child(even) {\n  padding-left: var(--page-items-gutter);\n}\n\n.items-row .listing-item .item-image-wrapper {\n  border: 1px solid var(--ion-color-light-shade);\n}\n\n.items-row .listing-item .item-image-wrapper .image-anchor {\n  display: block;\n}\n\n.items-row .listing-item .item-body {\n  --ion-grid-column-padding: 0px;\n  padding: 5px 5px 0px;\n  text-align: center;\n}\n\n.items-row .listing-item .item-body .main-info {\n  margin-bottom: calc(var(--page-margin) / 2);\n}\n\n.items-row .listing-item .item-body .main-info .item-name {\n  margin: 0px;\n  font-size: 14px;\n  font-weight: 400;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.items-row .listing-item .item-body .main-info .item-name .name-anchor {\n  color: var(--ion-color-primary);\n  display: block;\n  text-decoration: none;\n}\n\n.items-row .listing-item .item-body .secondary-info {\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.items-row .listing-item .item-body .secondary-info .price-col:first-child {\n  padding-right: calc(var(--page-margin) / 2);\n  text-align: right;\n}\n\n.items-row .listing-item .item-body .secondary-info .price-col:first-child:last-child {\n  text-align: center;\n}\n\n.items-row .listing-item .item-body .secondary-info .price-col:last-child {\n  padding-left: calc(var(--page-margin) / 2);\n  text-align: left;\n}\n\n.items-row .listing-item .item-body .secondary-info .separator {\n  max-width: 0px;\n  border-right: solid 2px var(--ion-color-light-shade);\n  align-self: stretch;\n}\n\n.items-row .listing-item .item-body .secondary-info .item-sale-price {\n  display: block;\n  font-weight: 400;\n  color: var(--page-color);\n  font-size: 16px;\n}\n\n.items-row .listing-item .item-body .secondary-info .item-original-price {\n  display: block;\n  text-decoration: line-through;\n  color: var(--ion-color-medium-shade);\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9haXIvRG9jdW1lbnRzL0dpdEh1Yi9wb2Qvc3JjL2FwcC9mYXNoaW9uL2xpc3Rpbmcvc3R5bGVzL2Zhc2hpb24tbGlzdGluZy5wYWdlLnNjc3MiLCJzcmMvYXBwL2Zhc2hpb24vbGlzdGluZy9zdHlsZXMvZmFzaGlvbi1saXN0aW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHFDQUFBO0VBQ0Esd0NBQUE7RUFFQSxpREFBQTtFQUNBLHFCQUFBO0FDRkY7O0FES0E7RUFDRSx1REFBQTtBQ0ZGOztBRE1BO0VBQ0UscUJBQUE7QUNIRjs7QURNQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ0hGOztBRE1BO0VBQ0Usc0NBQUE7QUNIRjs7QURPRTtFQUNFLDhDQUFBO0FDSko7O0FET0E7RUFDRSxvQkFBQTtFQUdBLCtCQUFBO0VBQ0EsOEJBQUE7RUFDQSx5REFBQTtBQ05GOztBRFFFO0VBQ0UsOEJBQUE7RUFFQSxXQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ1BKOztBRFVFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtBQ1JKOztBRFVJO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFFQSw2QkFBQTtBQ1ROOztBRFlJO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUNWTjs7QURjRTtFQUNFLHNCQUFBO0FDWko7O0FEY0k7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNaTjs7QURtQkE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLGdCQUFBO0FDaEJGOztBRGlCRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ2ZKOztBRGtCRTtFQUNFLG1DQUFBO0VBQ0EsZUFBQTtBQ2hCSjs7QURvQkU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlDQUFBO0VBQ0Esc0NBQUE7RUFDQSxtQkFBQTtFQUNBLCtHQUFBO0VBQ0Esa0hBQUE7RUFBQSwwR0FBQTtBQ2xCSjs7QUR1QkE7RUFFRSxtQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsaUNBQUE7RUFDQSxvQ0FBQTtBQ3JCRjs7QUR3QkE7RUFDRSw0QkFBQTtBQ3JCRjs7QUR1QkU7RUFDRSwyQ0FBQTtBQ3JCSjs7QUR1Qkk7RUFDRSx1Q0FBQTtBQ3JCTjs7QUR3Qkk7RUFDRSxzQ0FBQTtBQ3RCTjs7QUR5Qkk7RUFDRSw4Q0FBQTtBQ3ZCTjs7QUR5Qk07RUFDRSxjQUFBO0FDdkJSOztBRDJCSTtFQUNFLDhCQUFBO0VBRUEsb0JBQUE7RUFDQSxrQkFBQTtBQzFCTjs7QUQ0Qk07RUFDRSwyQ0FBQTtBQzFCUjs7QUQ0QlE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBRUEsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDM0JWOztBRDZCVTtFQUNFLCtCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FDM0JaOztBRGdDTTtFQUNFLHlCQUFBO1VBQUEsbUJBQUE7QUM5QlI7O0FEaUNVO0VBQ0UsMkNBQUE7RUFDQSxpQkFBQTtBQy9CWjs7QURpQ1k7RUFDRSxrQkFBQTtBQy9CZDs7QURtQ1U7RUFDRSwwQ0FBQTtFQUNBLGdCQUFBO0FDakNaOztBRHFDUTtFQUNFLGNBQUE7RUFDQSxvREFBQTtFQUNBLG1CQUFBO0FDbkNWOztBRHNDUTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtBQ3BDVjs7QUR1Q1E7RUFDRSxjQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQ0FBQTtFQUNBLGVBQUE7QUNyQ1YiLCJmaWxlIjoic3JjL2FwcC9mYXNoaW9uL2xpc3Rpbmcvc3R5bGVzL2Zhc2hpb24tbGlzdGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDdXN0b20gdmFyaWFibGVzXG4vLyBOb3RlOiAgVGhlc2Ugb25lcyB3ZXJlIGFkZGVkIGJ5IHVzIGFuZCBoYXZlIG5vdGhpbmcgdG8gZG8gd2l0aCBJb25pYyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWZhaXItbWFyZ2luKTtcbiAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcblxuICAtLXBhZ2UtaXRlbXMtZ3V0dGVyOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAtLXBhZ2UtY29sb3I6ICNjYjMyOGY7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjMDYwNjA2LCAjNjkwMDAwKTtcblxufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogIzY4MDAwMDtcbn1cblxuaW9uLWJ1dHRvbntcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDo0MDA7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcmVkICFpbXBvcnRhbnQ7XG4gIH1cblxuXG4gIC5pdGVtLCAubGlzdCwgLml0ZW0tY29udGVudCwgLml0ZW0tY29tcGxleCB7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICB9XG5cbi5ub3RpZmljYXRpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAvLyAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG5cbiAgcGFkZGluZy10b3A6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDhweCAycHggLTlweCB2YXIoLS1pb24tY29sb3ItZGFya2VzdCk7XG5cbiAgLm5vdGlmaWNhdGlvbi1pdGVtLXdyYXBwZXIge1xuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgIHdpZHRoOiAxMDAlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAuZGV0YWlscy13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG5cbiAgICAuZGV0YWlscy1uYW1lIHtcbiAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gICAgICAvLyBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICB9XG5cbiAgICAuZGV0YWlscy1kZXNjcmlwdGlvbiB7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICB9XG4gIH1cblxuICAuZGF0ZS13cmFwcGVyIHtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuXG4gICAgLm5vdGlmaWNhdGlvbi1kYXRlIHtcbiAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgdGV4dC1hbGlnbjogZW5kO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLmZpeGVkQ29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nLXRvcDogNHB4O1xuICBpb24tdGV4dCB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5cbiAgLnBVc2VyIHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgLy8gbWFyZ2luOiAxMnB4O1xuICB9XG5cbiAgaW9uLXRodW1ibmFpbCB7XG4gICAgd2lkdGg6IDI1dmg7XG4gICAgaGVpZ2h0OiAyNXZoO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDVweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC42KSwgMCAycHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjY2KSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjY1KTtcbiAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDI4MG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSksIGJhY2tncm91bmQtY29sb3IgMTVtcyBsaW5lYXIsIGNvbG9yIDE1bXMgbGluZWFyO1xuICB9XG59XG5cbi8vIE5vdGU6ICBBbGwgdGhlIENTUyB2YXJpYWJsZXMgZGVmaW5lZCBiZWxvdyBhcmUgb3ZlcnJpZGVzIG9mIElvbmljIGVsZW1lbnRzIENTUyBDdXN0b20gUHJvcGVydGllc1xuLmZhc2hpb24tbGlzdGluZy1jb250ZW50IHtcbiAgLy8gLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xuICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgLS1wYWRkaW5nLWVuZDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAtLXBhZGRpbmctdG9wOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIC0tcGFkZGluZy1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cblxuLml0ZW1zLXJvdyB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDA7XG5cbiAgLmxpc3RpbmctaXRlbSB7XG4gICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKTtcblxuICAgICY6bnRoLWNoaWxkKG9kZCkge1xuICAgICAgcGFkZGluZy1yaWdodDogdmFyKC0tcGFnZS1pdGVtcy1ndXR0ZXIpO1xuICAgIH1cblxuICAgICY6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICAgIHBhZGRpbmctbGVmdDogdmFyKC0tcGFnZS1pdGVtcy1ndXR0ZXIpO1xuICAgIH1cblxuICAgIC5pdGVtLWltYWdlLXdyYXBwZXIge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcblxuICAgICAgLmltYWdlLWFuY2hvciB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5pdGVtLWJvZHkge1xuICAgICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuXG4gICAgICBwYWRkaW5nOiA1cHggNXB4IDBweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgLm1haW4taW5mbyB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG5cbiAgICAgICAgLml0ZW0tbmFtZSB7XG4gICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG5cbiAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAgICAgICAubmFtZS1hbmNob3Ige1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuc2Vjb25kYXJ5LWluZm8ge1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgIC5wcmljZS1jb2wge1xuICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnNlcGFyYXRvciB7XG4gICAgICAgICAgbWF4LXdpZHRoOiAwcHg7XG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAycHggdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbiAgICAgICAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xuICAgICAgICB9XG5cbiAgICAgICAgLml0ZW0tc2FsZS1wcmljZSB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcGFnZS1jb2xvcik7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLml0ZW0tb3JpZ2luYWwtcHJpY2Uge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWZhaXItbWFyZ2luKTtcbiAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcbiAgLS1wYWdlLWl0ZW1zLWd1dHRlcjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgLS1wYWdlLWNvbG9yOiAjY2IzMjhmO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzA2MDYwNiwgIzY5MDAwMCk7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjNjgwMDAwO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG5pb24taXRlbSB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHJlZCAhaW1wb3J0YW50O1xufVxuXG4uaXRlbSwgLmxpc3QsIC5pdGVtLWNvbnRlbnQsIC5pdGVtLWNvbXBsZXgge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG4ubm90aWZpY2F0aW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgcGFkZGluZy10b3A6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDhweCAycHggLTlweCB2YXIoLS1pb24tY29sb3ItZGFya2VzdCk7XG59XG4ubm90aWZpY2F0aW9uLWl0ZW0gLm5vdGlmaWNhdGlvbi1pdGVtLXdyYXBwZXIge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm5vdGlmaWNhdGlvbi1pdGVtIC5kZXRhaWxzLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG59XG4ubm90aWZpY2F0aW9uLWl0ZW0gLmRldGFpbHMtd3JhcHBlciAuZGV0YWlscy1uYW1lIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cbi5ub3RpZmljYXRpb24taXRlbSAuZGV0YWlscy13cmFwcGVyIC5kZXRhaWxzLWRlc2NyaXB0aW9uIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW46IDBweDtcbn1cbi5ub3RpZmljYXRpb24taXRlbSAuZGF0ZS13cmFwcGVyIHtcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbn1cbi5ub3RpZmljYXRpb24taXRlbSAuZGF0ZS13cmFwcGVyIC5ub3RpZmljYXRpb24tZGF0ZSB7XG4gIG1hcmdpbjogMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtYWxpZ246IGVuZDtcbn1cblxuLmZpeGVkQ29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nLXRvcDogNHB4O1xufVxuLmZpeGVkQ29udGVudCBpb24tdGV4dCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uZml4ZWRDb250ZW50IC5wVXNlciB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uZml4ZWRDb250ZW50IGlvbi10aHVtYm5haWwge1xuICB3aWR0aDogMjV2aDtcbiAgaGVpZ2h0OiAyNXZoO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBib3gtc2hhZG93OiAwIDRweCA1cHggLTJweCByZ2JhKDAsIDAsIDAsIDAuNiksIDAgMnB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC42NiksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC42NSk7XG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMjgwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSwgYmFja2dyb3VuZC1jb2xvciAxNW1zIGxpbmVhciwgY29sb3IgMTVtcyBsaW5lYXI7XG59XG5cbi5mYXNoaW9uLWxpc3RpbmctY29udGVudCB7XG4gIC0tcGFkZGluZy1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAtLXBhZGRpbmctZW5kOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIC0tcGFkZGluZy10b3A6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgLS1wYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xufVxuXG4uaXRlbXMtcm93IHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMDtcbn1cbi5pdGVtcy1yb3cgLmxpc3RpbmctaXRlbSB7XG4gIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMik7XG59XG4uaXRlbXMtcm93IC5saXN0aW5nLWl0ZW06bnRoLWNoaWxkKG9kZCkge1xuICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1wYWdlLWl0ZW1zLWd1dHRlcik7XG59XG4uaXRlbXMtcm93IC5saXN0aW5nLWl0ZW06bnRoLWNoaWxkKGV2ZW4pIHtcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1wYWdlLWl0ZW1zLWd1dHRlcik7XG59XG4uaXRlbXMtcm93IC5saXN0aW5nLWl0ZW0gLml0ZW0taW1hZ2Utd3JhcHBlciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG59XG4uaXRlbXMtcm93IC5saXN0aW5nLWl0ZW0gLml0ZW0taW1hZ2Utd3JhcHBlciAuaW1hZ2UtYW5jaG9yIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uaXRlbXMtcm93IC5saXN0aW5nLWl0ZW0gLml0ZW0tYm9keSB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcbiAgcGFkZGluZzogNXB4IDVweCAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5pdGVtcy1yb3cgLmxpc3RpbmctaXRlbSAuaXRlbS1ib2R5IC5tYWluLWluZm8ge1xuICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xufVxuLml0ZW1zLXJvdyAubGlzdGluZy1pdGVtIC5pdGVtLWJvZHkgLm1haW4taW5mbyAuaXRlbS1uYW1lIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uaXRlbXMtcm93IC5saXN0aW5nLWl0ZW0gLml0ZW0tYm9keSAubWFpbi1pbmZvIC5pdGVtLW5hbWUgLm5hbWUtYW5jaG9yIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5pdGVtcy1yb3cgLmxpc3RpbmctaXRlbSAuaXRlbS1ib2R5IC5zZWNvbmRhcnktaW5mbyB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uaXRlbXMtcm93IC5saXN0aW5nLWl0ZW0gLml0ZW0tYm9keSAuc2Vjb25kYXJ5LWluZm8gLnByaWNlLWNvbDpmaXJzdC1jaGlsZCB7XG4gIHBhZGRpbmctcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLml0ZW1zLXJvdyAubGlzdGluZy1pdGVtIC5pdGVtLWJvZHkgLnNlY29uZGFyeS1pbmZvIC5wcmljZS1jb2w6Zmlyc3QtY2hpbGQ6bGFzdC1jaGlsZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5pdGVtcy1yb3cgLmxpc3RpbmctaXRlbSAuaXRlbS1ib2R5IC5zZWNvbmRhcnktaW5mbyAucHJpY2UtY29sOmxhc3QtY2hpbGQge1xuICBwYWRkaW5nLWxlZnQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uaXRlbXMtcm93IC5saXN0aW5nLWl0ZW0gLml0ZW0tYm9keSAuc2Vjb25kYXJ5LWluZm8gLnNlcGFyYXRvciB7XG4gIG1heC13aWR0aDogMHB4O1xuICBib3JkZXItcmlnaHQ6IHNvbGlkIDJweCB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuICBhbGlnbi1zZWxmOiBzdHJldGNoO1xufVxuLml0ZW1zLXJvdyAubGlzdGluZy1pdGVtIC5pdGVtLWJvZHkgLnNlY29uZGFyeS1pbmZvIC5pdGVtLXNhbGUtcHJpY2Uge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6IHZhcigtLXBhZ2UtY29sb3IpO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uaXRlbXMtcm93IC5saXN0aW5nLWl0ZW0gLml0ZW0tYm9keSAuc2Vjb25kYXJ5LWluZm8gLml0ZW0tb3JpZ2luYWwtcHJpY2Uge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgZm9udC1zaXplOiAxNHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/fashion/listing/styles/fashion-listing.shell.scss":
/*!*******************************************************************!*\
  !*** ./src/app/fashion/listing/styles/fashion-listing.shell.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --shell-color: #cb328f;\n  --shell-color-rgb: 203,50,143;\n}\n\n:host(.is-shell) a {\n  pointer-events: none;\n}\n\napp-image-shell.item-image {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .10);\n  --image-shell-spinner-color: rgba(var(--shell-color-rgb), .25);\n}\n\n.item-name app-text-shell {\n  --text-shell-animation-background: rgba(var(--shell-color-rgb), .25);\n  --text-shell-animation-color: rgba(var(--shell-color-rgb), .35);\n  --text-shell-line-height: 14px;\n}\n\n.item-sale-price > app-text-shell {\n  --text-shell-animation-background: rgba(var(--shell-color-rgb), .20);\n  --text-shell-animation-color: rgba(var(--shell-color-rgb), .30);\n  --text-shell-line-height: 16px;\n}\n\n.item-original-price > app-text-shell {\n  --text-shell-animation-background: rgba(var(--shell-color-rgb), .20);\n  --text-shell-animation-color: rgba(var(--shell-color-rgb), .30);\n  --text-shell-line-height: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9haXIvRG9jdW1lbnRzL0dpdEh1Yi9wb2Qvc3JjL2FwcC9mYXNoaW9uL2xpc3Rpbmcvc3R5bGVzL2Zhc2hpb24tbGlzdGluZy5zaGVsbC5zY3NzIiwic3JjL2FwcC9mYXNoaW9uL2xpc3Rpbmcvc3R5bGVzL2Zhc2hpb24tbGlzdGluZy5zaGVsbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usc0JBQUE7RUFDQSw2QkFBQTtBQ0RGOztBRFNFO0VBQ0Usb0JBQUE7QUNOSjs7QURZQTtFQUNFLG1FQUFBO0VBQ0EsOERBQUE7QUNURjs7QURZQTtFQUNFLG9FQUFBO0VBQ0EsK0RBQUE7RUFDQSw4QkFBQTtBQ1RGOztBRFlBO0VBQ0Usb0VBQUE7RUFDQSwrREFBQTtFQUNBLDhCQUFBO0FDVEY7O0FEWUE7RUFDRSxvRUFBQTtFQUNBLCtEQUFBO0VBQ0EsOEJBQUE7QUNURiIsImZpbGUiOiJzcmMvYXBwL2Zhc2hpb24vbGlzdGluZy9zdHlsZXMvZmFzaGlvbi1saXN0aW5nLnNoZWxsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDdXN0b20gdmFyaWFibGVzXG4vLyBOb3RlOiAgVGhlc2Ugb25lcyB3ZXJlIGFkZGVkIGJ5IHVzIGFuZCBoYXZlIG5vdGhpbmcgdG8gZG8gd2l0aCBJb25pYyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbjpob3N0IHtcbiAgLS1zaGVsbC1jb2xvcjogI2NiMzI4ZjtcbiAgLS1zaGVsbC1jb2xvci1yZ2I6IDIwMyw1MCwxNDM7XG59XG5cbi8vIFlvdSBjYW4gYWxzbyBhcHBseSBzaGVlbCBzdHlsZXMgdG8gdGhlIGVudGlyZSBwYWdlXG46aG9zdCguaXMtc2hlbGwpIHtcbiAgLy8gaW9uLWNvbnRlbnQge1xuICAvLyAgIG9wYWNpdHk6IDAuODtcbiAgLy8gfVxuICBhIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxufVxuXG5cblxuYXBwLWltYWdlLXNoZWxsLml0ZW0taW1hZ2Uge1xuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLWltYWdlLXNoZWxsLXNwaW5uZXItY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjI1KTtcbn1cblxuLml0ZW0tbmFtZSBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1hbmltYXRpb24tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMjUpO1xuICAtLXRleHQtc2hlbGwtYW5pbWF0aW9uLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4zNSk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbn1cblxuLml0ZW0tc2FsZS1wcmljZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWFuaW1hdGlvbi1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4yMCk7XG4gIC0tdGV4dC1zaGVsbC1hbmltYXRpb24tY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjMwKTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNnB4O1xufVxuXG4uaXRlbS1vcmlnaW5hbC1wcmljZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWFuaW1hdGlvbi1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4yMCk7XG4gIC0tdGV4dC1zaGVsbC1hbmltYXRpb24tY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjMwKTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNnB4O1xufVxuIiwiOmhvc3Qge1xuICAtLXNoZWxsLWNvbG9yOiAjY2IzMjhmO1xuICAtLXNoZWxsLWNvbG9yLXJnYjogMjAzLDUwLDE0Mztcbn1cblxuOmhvc3QoLmlzLXNoZWxsKSBhIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbmFwcC1pbWFnZS1zaGVsbC5pdGVtLWltYWdlIHtcbiAgLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQ6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcbiAgLS1pbWFnZS1zaGVsbC1zcGlubmVyLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4yNSk7XG59XG5cbi5pdGVtLW5hbWUgYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtYW5pbWF0aW9uLWJhY2tncm91bmQ6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjI1KTtcbiAgLS10ZXh0LXNoZWxsLWFuaW1hdGlvbi1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMzUpO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG59XG5cbi5pdGVtLXNhbGUtcHJpY2UgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1hbmltYXRpb24tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMjApO1xuICAtLXRleHQtc2hlbGwtYW5pbWF0aW9uLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4zMCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTZweDtcbn1cblxuLml0ZW0tb3JpZ2luYWwtcHJpY2UgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1hbmltYXRpb24tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMjApO1xuICAtLXRleHQtc2hlbGwtYW5pbWF0aW9uLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4zMCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTZweDtcbn0iXX0= */");

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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _config_app_shell_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config/app-shell.config */ "./src/app/shell/config/app-shell.config.ts");




class ShellModel {
    constructor() {
        this.isShell = false;
    }
}
class DataStore {
    constructor(shellModel) {
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
    static AppendShell(dataObservable, shellModel, networkDelay = 400) {
        const delayObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(true).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(networkDelay));
        // Assign shell flag accordingly
        // (ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([
            delayObservable,
            dataObservable
        ]).pipe(
        // Dismiss unnecessary delayValue
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(([delayValue, dataValue]) => Object.assign(dataValue, { isShell: false })), 
        // Set the shell model as the initial value
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(Object.assign(shellModel, { isShell: true })));
    }
    load(dataSourceObservable) {
        const dataSourceWithShellObservable = DataStore.AppendShell(dataSourceObservable, this.shellModel, this.networkDelay);
        dataSourceWithShellObservable
            .subscribe((dataValue) => {
            this.timeline.next(dataValue);
        });
    }
    get state() {
        return this.timeline.asObservable();
    }
}


/***/ })

}]);
//# sourceMappingURL=fashion-listing-fashion-listing-module-es2015.js.map