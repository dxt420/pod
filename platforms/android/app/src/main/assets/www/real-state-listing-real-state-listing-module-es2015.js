(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["real-state-listing-real-state-listing-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/real-state/listing/real-state-listing.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/real-state/listing/real-state-listing.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"app/categories\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Real State Listing</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"real-state-listing-content\">\n  <div class=\"listing-item\" *ngFor=\"let item of listing.items\">\n    <ion-row class=\"image-row\">\n      <ion-col size=\"12\">\n        <a class=\"image-anchor\" [routerLink]=\"['/app/categories/real-state/', item.slug]\">\n          <app-image-shell [mode]=\"'cover'\" animation=\"spinner\" class=\"item-picture\" [src]=\"item.picture\">\n            <app-aspect-ratio [ratio]=\"{w:365, h:125}\">\n            </app-aspect-ratio>\n          </app-image-shell>\n        </a>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"description-row\">\n      <ion-col size=\"12\" class=\"details-col\">\n        <ion-row class=\"details-wrapper\">\n          <ion-col>\n            <h4 class=\"item-price\">\n              <span class=\"price-icon\">$</span>\n              <app-text-shell [data]=\"item.price\"></app-text-shell>\n            </h4>\n            <p class=\"item-address\">\n              <app-text-shell [data]=\"item.address\"></app-text-shell>\n            </p>\n          </ion-col>\n          <ion-col class=\"bookmark-col\" size=\"2\">\n            <ion-icon *ngIf=\"item.liked\" class=\"like-icon\" name=\"heart\"></ion-icon>\n            <ion-icon *ngIf=\"!item.liked\" class=\"like-icon\" name=\"heart-empty\"></ion-icon>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n\n      <ion-col class=\"accommodations-col\" size=\"12\">\n        <ion-row class=\"accommodations-wrapper\">\n          <ion-col class=\"item-accommodation\">\n            <ion-icon class=\"accommodation-icon\" src=\"./assets/sample-icons/real-state/guests.svg\"></ion-icon>\n            <span class=\"accommodation-property\">Guests</span>\n            <span class=\"accommodation-value\">\n              <app-text-shell [data]=\"item.accommodations?.guests\"></app-text-shell>\n            </span>\n          </ion-col>\n          <ion-col class=\"item-accommodation\">\n            <ion-icon class=\"accommodation-icon\" src=\"./assets/sample-icons/real-state/bedrooms.svg\"></ion-icon>\n            <span class=\"accommodation-property\">Bedrooms</span>\n            <span class=\"accommodation-value\">\n              <app-text-shell [data]=\"item.accommodations?.bedrooms\"></app-text-shell>\n            </span>\n          </ion-col>\n          <ion-col class=\"item-accommodation\">\n            <ion-icon class=\"accommodation-icon\" src=\"./assets/sample-icons/real-state/bathroom.svg\"></ion-icon>\n            <span class=\"accommodation-property\">Bathrooms</span>\n            <span class=\"accommodation-value\">\n              <app-text-shell [data]=\"item.accommodations?.bathrooms\"></app-text-shell>\n            </span>\n          </ion-col>\n          <ion-col class=\"item-accommodation\">\n            <ion-icon class=\"accommodation-icon\" src=\"./assets/sample-icons/real-state/patio.svg\"></ion-icon>\n            <span class=\"accommodation-property\">Patios</span>\n            <span class=\"accommodation-value\">\n              <app-text-shell [data]=\"item.accommodations?.patios\"></app-text-shell>\n            </span>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n\n      <ion-col size=\"12\" class=\"amenities-col\" *ngIf=\"item.amenities\">\n        <h5 class=\"amenities-title\">Amenities</h5>\n        <ion-row class=\"amenities-wrapper\">\n          <ng-container>\n            <ion-col class=\"item-amenity\" size=\"4\" *ngFor=\"let amenity of item.amenities.slice(0, 4); let i = index\">\n              <ion-icon *ngIf=\"amenity.icon\" class=\"amenity-icon\" [src]=\"amenity.icon\"></ion-icon>\n              <span class=\"amenity-value\">\n                <app-text-shell [data]=\"amenity.name\"></app-text-shell>\n              </span>\n            </ion-col>\n            <ion-col class=\"has-more-amenities\" *ngIf=\"i == 3 && item.amenities.length > 4\">\n              <span class=\"amenities-count\">+{{ item.amenities.length - 4 }}</span>\n            </ion-col>\n          </ng-container>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/real-state/listing/real-state-listing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/real-state/listing/real-state-listing.module.ts ***!
  \*****************************************************************/
/*! exports provided: RealStateListingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealStateListingPageModule", function() { return RealStateListingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _real_state_listing_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./real-state-listing.page */ "./src/app/real-state/listing/real-state-listing.page.ts");
/* harmony import */ var _real_state_listing_resolver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./real-state-listing.resolver */ "./src/app/real-state/listing/real-state-listing.resolver.ts");
/* harmony import */ var _real_state_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../real-state.service */ "./src/app/real-state/real-state.service.ts");











const routes = [
    {
        path: '',
        component: _real_state_listing_page__WEBPACK_IMPORTED_MODULE_8__["RealStateListingPage"],
        resolve: {
            data: _real_state_listing_resolver__WEBPACK_IMPORTED_MODULE_9__["RealStateListingResolver"]
        }
    }
];
let RealStateListingPageModule = class RealStateListingPageModule {
};
RealStateListingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
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
            _real_state_listing_page__WEBPACK_IMPORTED_MODULE_8__["RealStateListingPage"]
        ],
        providers: [
            _real_state_listing_resolver__WEBPACK_IMPORTED_MODULE_9__["RealStateListingResolver"],
            _real_state_service__WEBPACK_IMPORTED_MODULE_10__["RealStateService"]
        ]
    })
], RealStateListingPageModule);



/***/ }),

/***/ "./src/app/real-state/listing/real-state-listing.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/real-state/listing/real-state-listing.page.ts ***!
  \***************************************************************/
/*! exports provided: RealStateListingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealStateListingPage", function() { return RealStateListingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let RealStateListingPage = class RealStateListingPage {
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
                console.log(this.listing);
            }, (error) => { });
        }, (error) => { });
    }
};
RealStateListingPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.is-shell'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], RealStateListingPage.prototype, "isShell", null);
RealStateListingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-real-state-listing',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./real-state-listing.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/real-state/listing/real-state-listing.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./styles/real-state-listing.page.scss */ "./src/app/real-state/listing/styles/real-state-listing.page.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./styles/real-state-listing.shell.scss */ "./src/app/real-state/listing/styles/real-state-listing.shell.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], RealStateListingPage);



/***/ }),

/***/ "./src/app/real-state/listing/real-state-listing.resolver.ts":
/*!*******************************************************************!*\
  !*** ./src/app/real-state/listing/real-state-listing.resolver.ts ***!
  \*******************************************************************/
/*! exports provided: RealStateListingResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealStateListingResolver", function() { return RealStateListingResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _real_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../real-state.service */ "./src/app/real-state/real-state.service.ts");



let RealStateListingResolver = class RealStateListingResolver {
    constructor(realStateService) {
        this.realStateService = realStateService;
    }
    resolve() {
        const dataSource = this.realStateService.getListingDataSource();
        const dataStore = this.realStateService.getListingStore(dataSource);
        return dataStore;
    }
};
RealStateListingResolver.ctorParameters = () => [
    { type: _real_state_service__WEBPACK_IMPORTED_MODULE_2__["RealStateService"] }
];
RealStateListingResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_real_state_service__WEBPACK_IMPORTED_MODULE_2__["RealStateService"]])
], RealStateListingResolver);



/***/ }),

/***/ "./src/app/real-state/listing/styles/real-state-listing.page.scss":
/*!************************************************************************!*\
  !*** ./src/app/real-state/listing/styles/real-state-listing.page.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --page-margin: var(--app-broad-margin);\n  --page-background: var(--app-background);\n  --page-amenity-vertical-gutter: 6px;\n  --page-amenity-horizontal-gutter: 4px;\n  --page-color: #d9453a;\n}\n\n.real-state-listing-content {\n  --background: var(--page-background);\n}\n\n.listing-item .image-row {\n  --ion-grid-column-padding: 0px;\n}\n\n.listing-item .image-row .image-anchor {\n  display: block;\n}\n\n.listing-item .description-row {\n  --ion-grid-column-padding: 0px;\n  padding-bottom: var(--page-margin);\n}\n\n.listing-item .description-row .details-col {\n  padding: calc(var(--page-margin) / 2) var(--page-margin) 0px;\n}\n\n.listing-item .description-row .details-col .details-wrapper {\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\n.listing-item .description-row .details-col .details-wrapper .item-price {\n  margin: 0px 0px 5px;\n  font-weight: 500;\n  color: var(--ion-color-dark-tint);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.listing-item .description-row .details-col .details-wrapper .item-price .price-icon {\n  margin-right: 5px;\n}\n\n.listing-item .description-row .details-col .details-wrapper .item-address {\n  margin: 0px;\n  font-size: 14px;\n  color: var(--ion-color-medium-tint);\n}\n\n.listing-item .description-row .details-col .details-wrapper .bookmark-col {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n\n.listing-item .description-row .details-col .details-wrapper .bookmark-col .like-icon {\n  font-size: 32px;\n  color: var(--page-color);\n}\n\n.listing-item .description-row .accommodations-col {\n  padding: 0px var(--page-margin) var(--page-margin);\n}\n\n.listing-item .description-row .accommodations-col .accommodations-wrapper {\n  padding-top: calc(var(--page-margin));\n}\n\n.listing-item .description-row .accommodations-col .item-accommodation {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  max-width: -webkit-fit-content;\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n}\n\n.listing-item .description-row .accommodations-col .item-accommodation + .item-accommodation {\n  padding-left: calc((var(--page-margin) / 2) * 3);\n}\n\n.listing-item .description-row .accommodations-col .item-accommodation .accommodation-property {\n  font-size: 12px;\n  color: var(--ion-color-medium-tint);\n}\n\n.listing-item .description-row .accommodations-col .item-accommodation .accommodation-value {\n  display: inline-block;\n  font-weight: 400;\n  font-size: 14px;\n  color: var(--ion-color-medium-tint);\n  margin-top: 4px;\n}\n\n.listing-item .description-row .accommodations-col .item-accommodation .accommodation-name {\n  display: inline-block;\n  font-size: 12px;\n  color: var(--ion-color-medium-tint);\n}\n\n.listing-item .description-row .accommodations-col .item-accommodation .accommodation-icon {\n  color: var(--ion-color-medium-tint);\n  font-size: 30px;\n}\n\n.listing-item .description-row .amenities-col {\n  padding: 0px var(--page-margin) calc(var(--page-margin) / 2);\n  background: var(--app-background-shade);\n}\n\n.listing-item .description-row .amenities-col .amenities-title {\n  margin: var(--page-margin) 0px calc(var(--page-margin) / 2);\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  color: var(--ion-color-medium-shade);\n}\n\n.listing-item .description-row .amenities-col .amenities-wrapper {\n  margin: 0px calc(var(--page-amenity-horizontal-gutter) * -1);\n}\n\n.listing-item .description-row .amenities-col .amenities-wrapper .item-amenity {\n  padding: var(--page-amenity-vertical-gutter) var(--page-amenity-horizontal-gutter);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.listing-item .description-row .amenities-col .amenities-wrapper .item-amenity .amenity-icon {\n  color: var(--ion-color-medium-tint);\n  font-size: 30px;\n  flex-shrink: 0;\n}\n\n.listing-item .description-row .amenities-col .amenities-wrapper .item-amenity .amenity-value {\n  display: block;\n  font-weight: 300;\n  font-size: 12px;\n  color: var(--ion-color-medium-tint);\n  margin-left: calc(var(--page-amenity-horizontal-gutter) * 2);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9haXIvRG9jdW1lbnRzL0dpdEh1Yi9wb2Qvc3JjL2FwcC9yZWFsLXN0YXRlL2xpc3Rpbmcvc3R5bGVzL3JlYWwtc3RhdGUtbGlzdGluZy5wYWdlLnNjc3MiLCJzcmMvYXBwL3JlYWwtc3RhdGUvbGlzdGluZy9zdHlsZXMvcmVhbC1zdGF0ZS1saXN0aW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHNDQUFBO0VBQ0Esd0NBQUE7RUFFQSxtQ0FBQTtFQUNBLHFDQUFBO0VBRUEscUJBQUE7QUNIRjs7QURPQTtFQUNFLG9DQUFBO0FDSkY7O0FEUUU7RUFDRSw4QkFBQTtBQ0xKOztBRE9JO0VBQ0UsY0FBQTtBQ0xOOztBRFNFO0VBQ0UsOEJBQUE7RUFFQSxrQ0FBQTtBQ1JKOztBRFVJO0VBQ0UsNERBQUE7QUNSTjs7QURVTTtFQUNFLHlCQUFBO1VBQUEsOEJBQUE7QUNSUjs7QURVUTtFQUNFLG1CQUFBO0VBQ0gsZ0JBQUE7RUFDRyxpQ0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNSVjs7QURVVTtFQUNFLGlCQUFBO0FDUlo7O0FEWVE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLG1DQUFBO0FDVlY7O0FEYVE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxxQkFBQTtVQUFBLHlCQUFBO0FDWFY7O0FEYVU7RUFDRSxlQUFBO0VBQ0Esd0JBQUE7QUNYWjs7QURpQkk7RUFDRSxrREFBQTtBQ2ZOOztBRGlCTTtFQUNFLHFDQUFBO0FDZlI7O0FEa0JNO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLDhCQUFBO0VBQUEsMkJBQUE7RUFBQSxzQkFBQTtBQ2hCUjs7QURrQlE7RUFDRSxnREFBQTtBQ2hCVjs7QURtQlE7RUFDRSxlQUFBO0VBQ0EsbUNBQUE7QUNqQlY7O0FEb0JRO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQ0FBQTtFQUNBLGVBQUE7QUNsQlY7O0FEcUJRO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUNBQUE7QUNuQlY7O0FEc0JRO0VBQ0UsbUNBQUE7RUFDQSxlQUFBO0FDcEJWOztBRHlCSTtFQUNFLDREQUFBO0VBQ0EsdUNBQUE7QUN2Qk47O0FEeUJNO0VBQ0UsMkRBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9DQUFBO0FDdkJSOztBRDBCTTtFQUNFLDREQUFBO0FDeEJSOztBRDBCUTtFQUNFLGtGQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUN4QlY7O0FEMEJVO0VBQ0UsbUNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ3hCWjs7QUQyQlU7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUNBQUE7RUFDQSw0REFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ3pCWiIsImZpbGUiOiJzcmMvYXBwL3JlYWwtc3RhdGUvbGlzdGluZy9zdHlsZXMvcmVhbC1zdGF0ZS1saXN0aW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEN1c3RvbSB2YXJpYWJsZXNcbi8vIE5vdGU6ICBUaGVzZSBvbmVzIHdlcmUgYWRkZWQgYnkgdXMgYW5kIGhhdmUgbm90aGluZyB0byBkbyB3aXRoIElvbmljIENTUyBDdXN0b20gUHJvcGVydGllc1xuOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtYnJvYWQtbWFyZ2luKTtcbiAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcblxuICAtLXBhZ2UtYW1lbml0eS12ZXJ0aWNhbC1ndXR0ZXI6IDZweDtcbiAgLS1wYWdlLWFtZW5pdHktaG9yaXpvbnRhbC1ndXR0ZXI6IDRweDtcblxuICAtLXBhZ2UtY29sb3I6ICNkOTQ1M2E7XG59XG5cbi8vIE5vdGU6ICBBbGwgdGhlIENTUyB2YXJpYWJsZXMgZGVmaW5lZCBiZWxvdyBhcmUgb3ZlcnJpZGVzIG9mIElvbmljIGVsZW1lbnRzIENTUyBDdXN0b20gUHJvcGVydGllc1xuLnJlYWwtc3RhdGUtbGlzdGluZy1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xufVxuXG4ubGlzdGluZy1pdGVtIHtcbiAgLmltYWdlLXJvdyB7XG4gICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuXG4gICAgLmltYWdlLWFuY2hvciB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gIH1cblxuICAuZGVzY3JpcHRpb24tcm93IHtcbiAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG5cbiAgICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xuXG4gICAgLmRldGFpbHMtY29sIHtcbiAgICAgIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgdmFyKC0tcGFnZS1tYXJnaW4pIDBweDtcblxuICAgICAgLmRldGFpbHMtd3JhcHBlciB7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgICAgICAuaXRlbS1wcmljZSB7XG4gICAgICAgICAgbWFyZ2luOiAwcHggMHB4IDVweDtcbiAgICBcdFx0XHRmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgICAucHJpY2UtaWNvbiB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuaXRlbS1hZGRyZXNzIHtcbiAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG4gICAgICAgIH1cblxuICAgICAgICAuYm9va21hcmstY29sIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cbiAgICAgICAgICAubGlrZS1pY29uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wYWdlLWNvbG9yKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuYWNjb21tb2RhdGlvbnMtY29sIHtcbiAgICAgIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLW1hcmdpbikgdmFyKC0tcGFnZS1tYXJnaW4pO1xuXG4gICAgICAuYWNjb21tb2RhdGlvbnMtd3JhcHBlciB7XG4gICAgICAgIHBhZGRpbmctdG9wOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSk7XG4gICAgICB9XG5cbiAgICAgIC5pdGVtLWFjY29tbW9kYXRpb24ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xuXG4gICAgICAgICYgKyAuaXRlbS1hY2NvbW1vZGF0aW9uIHtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IGNhbGMoKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpICogMyk7XG4gICAgICAgIH1cblxuICAgICAgICAuYWNjb21tb2RhdGlvbi1wcm9wZXJ0eSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmFjY29tbW9kYXRpb24tdmFsdWUge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuYWNjb21tb2RhdGlvbi1uYW1lIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmFjY29tbW9kYXRpb24taWNvbiB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG4gICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmFtZW5pdGllcy1jb2wge1xuICAgICAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKSBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQtc2hhZGUpO1xuXG4gICAgICAuYW1lbml0aWVzLXRpdGxlIHtcbiAgICAgICAgbWFyZ2luOiB2YXIoLS1wYWdlLW1hcmdpbikgMHB4IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xuICAgICAgfVxuXG4gICAgICAuYW1lbml0aWVzLXdyYXBwZXIge1xuICAgICAgICBtYXJnaW46IDBweCBjYWxjKHZhcigtLXBhZ2UtYW1lbml0eS1ob3Jpem9udGFsLWd1dHRlcikgKiAtMSk7XG5cbiAgICAgICAgLml0ZW0tYW1lbml0eSB7XG4gICAgICAgICAgcGFkZGluZzogdmFyKC0tcGFnZS1hbWVuaXR5LXZlcnRpY2FsLWd1dHRlcikgdmFyKC0tcGFnZS1hbWVuaXR5LWhvcml6b250YWwtZ3V0dGVyKTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgICAuYW1lbml0eS1pY29uIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmFtZW5pdHktdmFsdWUge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogY2FsYyh2YXIoLS1wYWdlLWFtZW5pdHktaG9yaXpvbnRhbC1ndXR0ZXIpICogMik7XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtYnJvYWQtbWFyZ2luKTtcbiAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcbiAgLS1wYWdlLWFtZW5pdHktdmVydGljYWwtZ3V0dGVyOiA2cHg7XG4gIC0tcGFnZS1hbWVuaXR5LWhvcml6b250YWwtZ3V0dGVyOiA0cHg7XG4gIC0tcGFnZS1jb2xvcjogI2Q5NDUzYTtcbn1cblxuLnJlYWwtc3RhdGUtbGlzdGluZy1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xufVxuXG4ubGlzdGluZy1pdGVtIC5pbWFnZS1yb3cge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG59XG4ubGlzdGluZy1pdGVtIC5pbWFnZS1yb3cgLmltYWdlLWFuY2hvciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmxpc3RpbmctaXRlbSAuZGVzY3JpcHRpb24tcm93IHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xufVxuLmxpc3RpbmctaXRlbSAuZGVzY3JpcHRpb24tcm93IC5kZXRhaWxzLWNvbCB7XG4gIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgdmFyKC0tcGFnZS1tYXJnaW4pIDBweDtcbn1cbi5saXN0aW5nLWl0ZW0gLmRlc2NyaXB0aW9uLXJvdyAuZGV0YWlscy1jb2wgLmRldGFpbHMtd3JhcHBlciB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5saXN0aW5nLWl0ZW0gLmRlc2NyaXB0aW9uLXJvdyAuZGV0YWlscy1jb2wgLmRldGFpbHMtd3JhcHBlciAuaXRlbS1wcmljZSB7XG4gIG1hcmdpbjogMHB4IDBweCA1cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5saXN0aW5nLWl0ZW0gLmRlc2NyaXB0aW9uLXJvdyAuZGV0YWlscy1jb2wgLmRldGFpbHMtd3JhcHBlciAuaXRlbS1wcmljZSAucHJpY2UtaWNvbiB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuLmxpc3RpbmctaXRlbSAuZGVzY3JpcHRpb24tcm93IC5kZXRhaWxzLWNvbCAuZGV0YWlscy13cmFwcGVyIC5pdGVtLWFkZHJlc3Mge1xuICBtYXJnaW46IDBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbn1cbi5saXN0aW5nLWl0ZW0gLmRlc2NyaXB0aW9uLXJvdyAuZGV0YWlscy1jb2wgLmRldGFpbHMtd3JhcHBlciAuYm9va21hcmstY29sIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5saXN0aW5nLWl0ZW0gLmRlc2NyaXB0aW9uLXJvdyAuZGV0YWlscy1jb2wgLmRldGFpbHMtd3JhcHBlciAuYm9va21hcmstY29sIC5saWtlLWljb24ge1xuICBmb250LXNpemU6IDMycHg7XG4gIGNvbG9yOiB2YXIoLS1wYWdlLWNvbG9yKTtcbn1cbi5saXN0aW5nLWl0ZW0gLmRlc2NyaXB0aW9uLXJvdyAuYWNjb21tb2RhdGlvbnMtY29sIHtcbiAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKSB2YXIoLS1wYWdlLW1hcmdpbik7XG59XG4ubGlzdGluZy1pdGVtIC5kZXNjcmlwdGlvbi1yb3cgLmFjY29tbW9kYXRpb25zLWNvbCAuYWNjb21tb2RhdGlvbnMtd3JhcHBlciB7XG4gIHBhZGRpbmctdG9wOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSk7XG59XG4ubGlzdGluZy1pdGVtIC5kZXNjcmlwdGlvbi1yb3cgLmFjY29tbW9kYXRpb25zLWNvbCAuaXRlbS1hY2NvbW1vZGF0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcbn1cbi5saXN0aW5nLWl0ZW0gLmRlc2NyaXB0aW9uLXJvdyAuYWNjb21tb2RhdGlvbnMtY29sIC5pdGVtLWFjY29tbW9kYXRpb24gKyAuaXRlbS1hY2NvbW1vZGF0aW9uIHtcbiAgcGFkZGluZy1sZWZ0OiBjYWxjKCh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSAqIDMpO1xufVxuLmxpc3RpbmctaXRlbSAuZGVzY3JpcHRpb24tcm93IC5hY2NvbW1vZGF0aW9ucy1jb2wgLml0ZW0tYWNjb21tb2RhdGlvbiAuYWNjb21tb2RhdGlvbi1wcm9wZXJ0eSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG59XG4ubGlzdGluZy1pdGVtIC5kZXNjcmlwdGlvbi1yb3cgLmFjY29tbW9kYXRpb25zLWNvbCAuaXRlbS1hY2NvbW1vZGF0aW9uIC5hY2NvbW1vZGF0aW9uLXZhbHVlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xuICBtYXJnaW4tdG9wOiA0cHg7XG59XG4ubGlzdGluZy1pdGVtIC5kZXNjcmlwdGlvbi1yb3cgLmFjY29tbW9kYXRpb25zLWNvbCAuaXRlbS1hY2NvbW1vZGF0aW9uIC5hY2NvbW1vZGF0aW9uLW5hbWUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG59XG4ubGlzdGluZy1pdGVtIC5kZXNjcmlwdGlvbi1yb3cgLmFjY29tbW9kYXRpb25zLWNvbCAuaXRlbS1hY2NvbW1vZGF0aW9uIC5hY2NvbW1vZGF0aW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuLmxpc3RpbmctaXRlbSAuZGVzY3JpcHRpb24tcm93IC5hbWVuaXRpZXMtY29sIHtcbiAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKSBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZC1zaGFkZSk7XG59XG4ubGlzdGluZy1pdGVtIC5kZXNjcmlwdGlvbi1yb3cgLmFtZW5pdGllcy1jb2wgLmFtZW5pdGllcy10aXRsZSB7XG4gIG1hcmdpbjogdmFyKC0tcGFnZS1tYXJnaW4pIDBweCBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbn1cbi5saXN0aW5nLWl0ZW0gLmRlc2NyaXB0aW9uLXJvdyAuYW1lbml0aWVzLWNvbCAuYW1lbml0aWVzLXdyYXBwZXIge1xuICBtYXJnaW46IDBweCBjYWxjKHZhcigtLXBhZ2UtYW1lbml0eS1ob3Jpem9udGFsLWd1dHRlcikgKiAtMSk7XG59XG4ubGlzdGluZy1pdGVtIC5kZXNjcmlwdGlvbi1yb3cgLmFtZW5pdGllcy1jb2wgLmFtZW5pdGllcy13cmFwcGVyIC5pdGVtLWFtZW5pdHkge1xuICBwYWRkaW5nOiB2YXIoLS1wYWdlLWFtZW5pdHktdmVydGljYWwtZ3V0dGVyKSB2YXIoLS1wYWdlLWFtZW5pdHktaG9yaXpvbnRhbC1ndXR0ZXIpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5saXN0aW5nLWl0ZW0gLmRlc2NyaXB0aW9uLXJvdyAuYW1lbml0aWVzLWNvbCAuYW1lbml0aWVzLXdyYXBwZXIgLml0ZW0tYW1lbml0eSAuYW1lbml0eS1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZmxleC1zaHJpbms6IDA7XG59XG4ubGlzdGluZy1pdGVtIC5kZXNjcmlwdGlvbi1yb3cgLmFtZW5pdGllcy1jb2wgLmFtZW5pdGllcy13cmFwcGVyIC5pdGVtLWFtZW5pdHkgLmFtZW5pdHktdmFsdWUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgbWFyZ2luLWxlZnQ6IGNhbGModmFyKC0tcGFnZS1hbWVuaXR5LWhvcml6b250YWwtZ3V0dGVyKSAqIDIpO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/real-state/listing/styles/real-state-listing.shell.scss":
/*!*************************************************************************!*\
  !*** ./src/app/real-state/listing/styles/real-state-listing.shell.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --shell-color: #d9453a;\n  --shell-color-rgb: 217,69,58;\n}\n\napp-image-shell.item-picture {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .10);\n  --image-shell-spinner-color: rgba(var(--shell-color-rgb), .25);\n}\n\n.item-price app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .25);\n  min-width: 50px;\n  max-width: 100px;\n}\n\n.item-price app-text-shell.text-loaded {\n  max-width: inherit;\n}\n\n.item-address > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .20);\n  --text-shell-line-height: 14px;\n  max-width: 60%;\n}\n\n.item-address > app-text-shell.text-loaded {\n  max-width: inherit;\n}\n\n.accommodation-value > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 14px;\n  min-width: 30px;\n}\n\n.accommodation-value > app-text-shell.text-loaded {\n  min-width: 0px;\n}\n\n.amenity-value > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .05);\n  --text-shell-line-height: 12px;\n  min-width: 50px;\n}\n\n.amenity-value > app-text-shell.text-loaded {\n  min-width: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9haXIvRG9jdW1lbnRzL0dpdEh1Yi9wb2Qvc3JjL2FwcC9yZWFsLXN0YXRlL2xpc3Rpbmcvc3R5bGVzL3JlYWwtc3RhdGUtbGlzdGluZy5zaGVsbC5zY3NzIiwic3JjL2FwcC9yZWFsLXN0YXRlL2xpc3Rpbmcvc3R5bGVzL3JlYWwtc3RhdGUtbGlzdGluZy5zaGVsbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usc0JBQUE7RUFDQSw0QkFBQTtBQ0RGOztBRFdBO0VBQ0UsbUVBQUE7RUFDQSw4REFBQTtBQ1JGOztBRFdBO0VBQ0UsMERBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNSRjs7QURVRTtFQUNFLGtCQUFBO0FDUko7O0FEWUE7RUFDRSwwREFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtBQ1RGOztBRFdFO0VBQ0Usa0JBQUE7QUNUSjs7QURhQTtFQUNFLDBEQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FDVkY7O0FEWUU7RUFDRSxjQUFBO0FDVko7O0FEY0E7RUFDRSwwREFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQ1hGOztBRGFFO0VBQ0UsY0FBQTtBQ1hKIiwiZmlsZSI6InNyYy9hcHAvcmVhbC1zdGF0ZS9saXN0aW5nL3N0eWxlcy9yZWFsLXN0YXRlLWxpc3Rpbmcuc2hlbGwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEN1c3RvbSB2YXJpYWJsZXNcbi8vIE5vdGU6ICBUaGVzZSBvbmVzIHdlcmUgYWRkZWQgYnkgdXMgYW5kIGhhdmUgbm90aGluZyB0byBkbyB3aXRoIElvbmljIENTUyBDdXN0b20gUHJvcGVydGllc1xuOmhvc3Qge1xuICAtLXNoZWxsLWNvbG9yOiAjZDk0NTNhO1xuICAtLXNoZWxsLWNvbG9yLXJnYjogMjE3LDY5LDU4O1xufVxuXG4vLyBZb3UgY2FuIGFsc28gYXBwbHkgc2hlZWwgc3R5bGVzIHRvIHRoZSBlbnRpcmUgcGFnZVxuOmhvc3QoLmlzLXNoZWxsKSB7XG4gIC8vIGlvbi1jb250ZW50IHtcbiAgLy8gICBvcGFjaXR5OiAwLjg7XG4gIC8vIH1cbn1cblxuYXBwLWltYWdlLXNoZWxsLml0ZW0tcGljdHVyZSB7XG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG4gIC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMjUpO1xufVxuXG4uaXRlbS1wcmljZSBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4yNSk7XG4gIG1pbi13aWR0aDogNTBweDtcbiAgbWF4LXdpZHRoOiAxMDBweDtcblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gIH1cbn1cblxuLml0ZW0tYWRkcmVzcyA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjIwKTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xuICBtYXgtd2lkdGg6IDYwJTtcblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gIH1cbn1cblxuLmFjY29tbW9kYXRpb24tdmFsdWUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbiAgbWluLXdpZHRoOiAzMHB4O1xuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIG1pbi13aWR0aDogMHB4O1xuICB9XG59XG5cbi5hbWVuaXR5LXZhbHVlID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMDUpO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDEycHg7XG4gIG1pbi13aWR0aDogNTBweDtcblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBtaW4td2lkdGg6IDBweDtcbiAgfVxufVxuIiwiOmhvc3Qge1xuICAtLXNoZWxsLWNvbG9yOiAjZDk0NTNhO1xuICAtLXNoZWxsLWNvbG9yLXJnYjogMjE3LDY5LDU4O1xufVxuXG5hcHAtaW1hZ2Utc2hlbGwuaXRlbS1waWN0dXJlIHtcbiAgLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQ6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcbiAgLS1pbWFnZS1zaGVsbC1zcGlubmVyLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4yNSk7XG59XG5cbi5pdGVtLXByaWNlIGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjI1KTtcbiAgbWluLXdpZHRoOiA1MHB4O1xuICBtYXgtd2lkdGg6IDEwMHB4O1xufVxuLml0ZW0tcHJpY2UgYXBwLXRleHQtc2hlbGwudGV4dC1sb2FkZWQge1xuICBtYXgtd2lkdGg6IGluaGVyaXQ7XG59XG5cbi5pdGVtLWFkZHJlc3MgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4yMCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbiAgbWF4LXdpZHRoOiA2MCU7XG59XG4uaXRlbS1hZGRyZXNzID4gYXBwLXRleHQtc2hlbGwudGV4dC1sb2FkZWQge1xuICBtYXgtd2lkdGg6IGluaGVyaXQ7XG59XG5cbi5hY2NvbW1vZGF0aW9uLXZhbHVlID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG4gIG1pbi13aWR0aDogMzBweDtcbn1cbi5hY2NvbW1vZGF0aW9uLXZhbHVlID4gYXBwLXRleHQtc2hlbGwudGV4dC1sb2FkZWQge1xuICBtaW4td2lkdGg6IDBweDtcbn1cblxuLmFtZW5pdHktdmFsdWUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4wNSk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTJweDtcbiAgbWluLXdpZHRoOiA1MHB4O1xufVxuLmFtZW5pdHktdmFsdWUgPiBhcHAtdGV4dC1zaGVsbC50ZXh0LWxvYWRlZCB7XG4gIG1pbi13aWR0aDogMHB4O1xufSJdfQ== */");

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
//# sourceMappingURL=real-state-listing-real-state-listing-module-es2015.js.map