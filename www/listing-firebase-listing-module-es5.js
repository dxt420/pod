(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["listing-firebase-listing-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/firebase/listing/firebase-listing.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/firebase/listing/firebase-listing.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"app/categories\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Firebase</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"openFirebaseCreateModal()\">\n        <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-toolbar class=\"filters-toolbar\">\n    <ion-row class=\"searchbar-row\" align-items-center>\n      <ion-col>\n        <ion-searchbar class=\"items-searchbar\" animated mode=\"ios\" [(ngModel)]=\"searchQuery\" (ionChange)=\"searchList()\" placeholder=\"Filter by name...\"></ion-searchbar>\n      </ion-col>\n      <ion-col class=\"call-to-action-col\">\n        <ion-button fill=\"clear\" color=\"secondary\" class=\"filters-btn\" (click)=\"showAgeFilter = !showAgeFilter\">\n          <ion-icon slot=\"icon-only\" name=\"options\"></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n    <form [formGroup]=\"rangeForm\" [hidden]=\"!showAgeFilter\">\n      <ion-row class=\"range-item-row\">\n        <ion-col size=\"12\">\n          <div class=\"range-header\">\n            <span class=\"range-value\">{{ rangeForm.controls.dual.value.lower }}</span>\n            <span class=\"range-label\">Filter by age</span>\n            <span class=\"range-value\">{{ rangeForm.controls.dual.value.upper }}</span>\n          </div>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-range class=\"range-control\" formControlName=\"dual\" color=\"secondary\" pin=\"true\" dualKnobs=\"true\" (ionChange)=\"searchList()\" min=\"1\" max=\"100\" step=\"1\" debounce=\"400\"></ion-range>\n        </ion-col>\n      </ion-row>\n    </form>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"firebase-listing-content\">\n  <ion-list class=\"items-list\" *ngIf=\"items?.length > 0\">\n    <ion-item class=\"list-item\" *ngFor=\"let item of items\" [routerLink]=\"['/firebase/details', item.id]\">\n      <ion-row class=\"user-row\">\n        <ion-col size=\"3\" class=\"user-image-wrapper\">\n          <app-aspect-ratio [ratio]=\"{w: 1, h: 1}\">\n            <app-image-shell class=\"user-image\" animation=\"spinner\" [mode]=\"'cover'\" [src]=\"item.avatar\" [alt]=\"'item image'\"></app-image-shell>\n          </app-aspect-ratio>\n        </ion-col>\n        <ion-col class=\"user-data-wrapper\">\n          <div class=\"user-info\">\n            <h3 class=\"user-name\">\n              <app-text-shell animation=\"bouncing\" [data]=\"item.name?.concat(' ').concat(item.lastname)\"></app-text-shell>\n            </h3>\n            <h5 class=\"user-age\">\n              <app-text-shell animation=\"bouncing\" [data]=\"item.age?.toString().concat(' years old')\"></app-text-shell>\n            </h5>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n  </ion-list>\n  <h3 *ngIf=\"items?.length == 0\" class=\"empty-list-message\">\n    No users found for the selected filters.\n  </h3>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/firebase/listing/firebase-listing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/firebase/listing/firebase-listing.module.ts ***!
  \*************************************************************/
/*! exports provided: FirebaseListingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseListingPageModule", function() { return FirebaseListingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _firebase_listing_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./firebase-listing.page */ "./src/app/firebase/listing/firebase-listing.page.ts");
/* harmony import */ var _firebase_integration_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../firebase-integration.service */ "./src/app/firebase/firebase-integration.service.ts");
/* harmony import */ var _firebase_listing_resolver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./firebase-listing.resolver */ "./src/app/firebase/listing/firebase-listing.resolver.ts");










var routes = [
    {
        path: '',
        component: _firebase_listing_page__WEBPACK_IMPORTED_MODULE_7__["FirebaseListingPage"],
        resolve: {
            data: _firebase_listing_resolver__WEBPACK_IMPORTED_MODULE_9__["FirebaseListingResolver"]
        }
    }
];
var FirebaseListingPageModule = /** @class */ (function () {
    function FirebaseListingPageModule() {
    }
    FirebaseListingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_firebase_listing_page__WEBPACK_IMPORTED_MODULE_7__["FirebaseListingPage"]],
            providers: [
                _firebase_integration_service__WEBPACK_IMPORTED_MODULE_8__["FirebaseService"],
                _firebase_listing_resolver__WEBPACK_IMPORTED_MODULE_9__["FirebaseListingResolver"]
            ]
        })
    ], FirebaseListingPageModule);
    return FirebaseListingPageModule;
}());



/***/ }),

/***/ "./src/app/firebase/listing/firebase-listing.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/firebase/listing/firebase-listing.page.ts ***!
  \***********************************************************/
/*! exports provided: FirebaseListingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseListingPage", function() { return FirebaseListingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _firebase_integration_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../firebase-integration.service */ "./src/app/firebase/firebase-integration.service.ts");
/* harmony import */ var _firebase_listing_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./firebase-listing.model */ "./src/app/firebase/listing/firebase-listing.model.ts");
/* harmony import */ var _user_create_firebase_create_user_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../user/create/firebase-create-user.modal */ "./src/app/firebase/user/create/firebase-create-user.modal.ts");
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shell/data-store */ "./src/app/shell/data-store.ts");











var FirebaseListingPage = /** @class */ (function () {
    function FirebaseListingPage(firebaseService, modalController, route) {
        this.firebaseService = firebaseService;
        this.modalController = modalController;
        this.route = route;
        this.showAgeFilter = false;
        this.searchSubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__["ReplaySubject"](1);
        this.searchFiltersObservable = this.searchSubject.asObservable();
    }
    Object.defineProperty(FirebaseListingPage.prototype, "isShell", {
        get: function () {
            return (this.items && this.items.isShell) ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    FirebaseListingPage.prototype.ngOnDestroy = function () {
        this.stateSubscription.unsubscribe();
    };
    FirebaseListingPage.prototype.ngOnInit = function () {
        var _this = this;
        this.searchQuery = '';
        this.rangeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            dual: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ lower: 1, upper: 100 })
        });
        // Route data is a cold subscription, no need to unsubscribe?
        this.route.data.subscribe(function (resolvedRouteData) {
            _this.listingDataStore = resolvedRouteData['data'];
            // We need to avoid having multiple firebase subscriptions open at the same time to avoid memory leaks
            // By using a switchMap to cancel previous subscription each time a new one arrives,
            // we ensure having just one subscription (the latest)
            var updateSearchObservable = _this.searchFiltersObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (filters) {
                var filteredDataSource = _this.firebaseService.searchUsersByAge(filters.lower, filters.upper);
                // Send a shell until we have filtered data from Firebase
                var searchingShellModel = [
                    new _firebase_listing_model__WEBPACK_IMPORTED_MODULE_8__["FirebaseListingItemModel"](),
                    new _firebase_listing_model__WEBPACK_IMPORTED_MODULE_8__["FirebaseListingItemModel"]()
                ];
                // Wait on purpose some time to ensure the shell animation gets shown while loading filtered data
                var searchingDelay = 400;
                var dataSourceWithShellObservable = _shell_data_store__WEBPACK_IMPORTED_MODULE_10__["DataStore"].AppendShell(filteredDataSource, searchingShellModel, searchingDelay);
                return dataSourceWithShellObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (filteredItems) {
                    // Just filter items by name if there is a search query and they are not shell values
                    if (filters.query !== '' && !filteredItems.isShell) {
                        var queryFilteredItems = filteredItems.filter(function (item) {
                            return item.name.toLowerCase().includes(filters.query.toLowerCase());
                        });
                        // While filtering we strip out the isShell property, add it again
                        return Object.assign(queryFilteredItems, { isShell: filteredItems.isShell });
                    }
                    else {
                        return filteredItems;
                    }
                }));
            }));
            // Keep track of the subscription to unsubscribe onDestroy
            // Merge filteredData with the original dataStore state
            _this.stateSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(_this.listingDataStore.state, updateSearchObservable).subscribe(function (state) {
                _this.items = state;
            }, function (error) { return console.log(error); }, function () { return console.log('stateSubscription completed'); });
        }, function (error) { return console.log(error); });
    };
    FirebaseListingPage.prototype.openFirebaseCreateModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _user_create_firebase_create_user_modal__WEBPACK_IMPORTED_MODULE_9__["FirebaseCreateUserModal"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FirebaseListingPage.prototype.searchList = function () {
        this.searchSubject.next({
            lower: this.rangeForm.controls.dual.value.lower,
            upper: this.rangeForm.controls.dual.value.upper,
            query: this.searchQuery
        });
    };
    FirebaseListingPage.ctorParameters = function () { return [
        { type: _firebase_integration_service__WEBPACK_IMPORTED_MODULE_7__["FirebaseService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.is-shell'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FirebaseListingPage.prototype, "isShell", null);
    FirebaseListingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-firebase-listing',
            template: __webpack_require__(/*! raw-loader!./firebase-listing.page.html */ "./node_modules/raw-loader/index.js!./src/app/firebase/listing/firebase-listing.page.html"),
            styles: [__webpack_require__(/*! ./styles/firebase-listing.page.scss */ "./src/app/firebase/listing/styles/firebase-listing.page.scss"), __webpack_require__(/*! ./styles/firebase-listing.ios.scss */ "./src/app/firebase/listing/styles/firebase-listing.ios.scss"), __webpack_require__(/*! ./styles/firebase-listing.shell.scss */ "./src/app/firebase/listing/styles/firebase-listing.shell.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_firebase_integration_service__WEBPACK_IMPORTED_MODULE_7__["FirebaseService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], FirebaseListingPage);
    return FirebaseListingPage;
}());



/***/ }),

/***/ "./src/app/firebase/listing/firebase-listing.resolver.ts":
/*!***************************************************************!*\
  !*** ./src/app/firebase/listing/firebase-listing.resolver.ts ***!
  \***************************************************************/
/*! exports provided: FirebaseListingResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseListingResolver", function() { return FirebaseListingResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _firebase_integration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebase-integration.service */ "./src/app/firebase/firebase-integration.service.ts");



var FirebaseListingResolver = /** @class */ (function () {
    function FirebaseListingResolver(firebaseService) {
        this.firebaseService = firebaseService;
    }
    FirebaseListingResolver.prototype.resolve = function () {
        var dataSource = this.firebaseService.getListingDataSource();
        var dataStore = this.firebaseService.getListingStore(dataSource);
        return dataStore;
    };
    FirebaseListingResolver.ctorParameters = function () { return [
        { type: _firebase_integration_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"] }
    ]; };
    FirebaseListingResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_firebase_integration_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"]])
    ], FirebaseListingResolver);
    return FirebaseListingResolver;
}());



/***/ }),

/***/ "./src/app/firebase/listing/styles/firebase-listing.ios.scss":
/*!*******************************************************************!*\
  !*** ./src/app/firebase/listing/styles/firebase-listing.ios.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host-context(.plt-mobile.ios) .list-item .user-data-wrapper {\n  -webkit-padding-end: calc(var(--page-margin) / 2);\n          padding-inline-end: calc(var(--page-margin) / 2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlyZWJhc2UvbGlzdGluZy9zdHlsZXMvRDpcXHNoaXRcXHBvZC9zcmNcXGFwcFxcZmlyZWJhc2VcXGxpc3RpbmdcXHN0eWxlc1xcZmlyZWJhc2UtbGlzdGluZy5pb3Muc2NzcyIsInNyYy9hcHAvZmlyZWJhc2UvbGlzdGluZy9zdHlsZXMvZmlyZWJhc2UtbGlzdGluZy5pb3Muc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHSTtFQUNFLGlEQUFBO1VBQUEsZ0RBQUE7QUNGTiIsImZpbGUiOiJzcmMvYXBwL2ZpcmViYXNlL2xpc3Rpbmcvc3R5bGVzL2ZpcmViYXNlLWxpc3RpbmcuaW9zLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdC1jb250ZXh0KC5wbHQtbW9iaWxlLmlvcykge1xuICAvLyBDdXN0b20gcGxhdGZvcm0gc3R5bGVzIGhlcmVcbiAgLmxpc3QtaXRlbSB7XG4gICAgLnVzZXItZGF0YS13cmFwcGVyIHtcbiAgICAgIHBhZGRpbmctaW5saW5lLWVuZDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0LWNvbnRleHQoLnBsdC1tb2JpbGUuaW9zKSAubGlzdC1pdGVtIC51c2VyLWRhdGEtd3JhcHBlciB7XG4gIHBhZGRpbmctaW5saW5lLWVuZDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/firebase/listing/styles/firebase-listing.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/firebase/listing/styles/firebase-listing.page.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background);\n}\n\n.filters-toolbar {\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  --padding-top: var(--page-margin);\n  --padding-bottom: var(--page-margin);\n}\n\n.filters-toolbar .searchbar-row {\n  --ion-grid-column-padding: 0px;\n}\n\n.filters-toolbar .searchbar-row ion-searchbar.items-searchbar {\n  padding: 0px;\n  height: 100%;\n  contain: content;\n}\n\n.filters-toolbar .searchbar-row .call-to-action-col {\n  -webkit-padding-start: var(--page-margin);\n          padding-inline-start: var(--page-margin);\n  max-width: -webkit-fit-content;\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n  flex-shrink: 0;\n  flex-grow: 0;\n  display: flex;\n  justify-content: flex-end;\n}\n\n.filters-toolbar .searchbar-row .call-to-action-col .filters-btn {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  margin: 0px;\n  font-size: 18px;\n  height: initial;\n}\n\n.filters-toolbar .range-item-row {\n  --ion-grid-column-padding: 0px;\n  margin-top: var(--page-margin);\n  padding-top: var(--page-margin);\n  box-shadow: inset 0 6px 3px -8px var(--ion-color-darkest);\n}\n\n.filters-toolbar .range-item-row .range-header {\n  display: flex;\n  justify-content: space-between;\n  padding-bottom: calc(var(--page-margin) / 2);\n}\n\n.filters-toolbar .range-item-row .range-header .range-value {\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-medium);\n}\n\n.filters-toolbar .range-item-row .range-header .range-label {\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-medium);\n}\n\n.filters-toolbar .range-item-row .range-control {\n  --ion-text-color: var(--ion-color-medium);\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n\n.firebase-listing-content {\n  --background: var(--page-background);\n}\n\n.firebase-listing-content .items-list .list-item {\n  --padding-start: var(--page-margin);\n  --padding-end: 0px;\n  --inner-padding-start: 0px;\n  --inner-padding-end: var(--page-margin);\n  --inner-padding-top: calc(var(--page-margin) / 2);\n  --inner-padding-bottom: calc(var(--page-margin) / 2);\n}\n\n.firebase-listing-content .items-list .list-item .user-row {\n  --ion-grid-column-padding: 0px;\n  width: 100%;\n}\n\n.firebase-listing-content .items-list .list-item .user-row .user-image-wrapper {\n  -webkit-padding-end: calc(var(--page-margin) / 2);\n          padding-inline-end: calc(var(--page-margin) / 2);\n}\n\n.firebase-listing-content .items-list .list-item .user-row .user-data-wrapper {\n  -webkit-padding-start: calc(var(--page-margin) / 2);\n          padding-inline-start: calc(var(--page-margin) / 2);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.firebase-listing-content .items-list .list-item .user-row .user-data-wrapper .user-info:not(:last-child) {\n  margin-bottom: calc(var(--page-margin) / 2);\n}\n\n.firebase-listing-content .items-list .list-item .user-row .user-data-wrapper .user-info .user-name {\n  margin: 0px;\n  margin-bottom: calc(var(--page-margin) / 4);\n  font-size: 16px;\n}\n\n.firebase-listing-content .items-list .list-item .user-row .user-data-wrapper .user-info .user-age {\n  margin: 0px;\n  color: rgba(var(--ion-color-dark-rgb), 0.4);\n  font-size: 14px;\n}\n\n.firebase-listing-content .empty-list-message {\n  margin: calc(var(--page-margin) * 3);\n  color: rgba(var(--ion-color-dark-rgb), 0.4);\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlyZWJhc2UvbGlzdGluZy9zdHlsZXMvRDpcXHNoaXRcXHBvZC9zcmNcXGFwcFxcZmlyZWJhc2VcXGxpc3RpbmdcXHN0eWxlc1xcZmlyZWJhc2UtbGlzdGluZy5wYWdlLnNjc3MiLCJzcmMvYXBwL2ZpcmViYXNlL2xpc3Rpbmcvc3R5bGVzL2ZpcmViYXNlLWxpc3RpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UscUNBQUE7RUFDQSx3Q0FBQTtBQ0RGOztBREtBO0VBQ0UsbUNBQUE7RUFDQSxpQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esb0NBQUE7QUNGRjs7QURJRTtFQUNFLDhCQUFBO0FDRko7O0FESUk7RUFDRSxZQUFBO0VBRUEsWUFBQTtFQUVBLGdCQUFBO0FDSk47O0FET0k7RUFDRSx5Q0FBQTtVQUFBLHdDQUFBO0VBQ0EsOEJBQUE7RUFBQSwyQkFBQTtFQUFBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFFQSxhQUFBO0VBQ0EseUJBQUE7QUNOTjs7QURRTTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFFQSxXQUFBO0VBQ0EsZUFBQTtFQUVBLGVBQUE7QUNSUjs7QURhRTtFQUNFLDhCQUFBO0VBRUEsOEJBQUE7RUFDQSwrQkFBQTtFQUVBLHlEQUFBO0FDYko7O0FEZUk7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSw0Q0FBQTtBQ2JOOztBRGVNO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSw4QkFBQTtBQ2JSOztBRGdCTTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsOEJBQUE7QUNkUjs7QURrQkk7RUFFRSx5Q0FBQTtFQUVBLGdCQUFBO0VBQ0EsbUJBQUE7QUNsQk47O0FEdUJBO0VBQ0Usb0NBQUE7QUNwQkY7O0FEdUJJO0VBQ0UsbUNBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsdUNBQUE7RUFDQSxpREFBQTtFQUNBLG9EQUFBO0FDckJOOztBRHVCTTtFQUNFLDhCQUFBO0VBRUEsV0FBQTtBQ3RCUjs7QUR3QlE7RUFDRSxpREFBQTtVQUFBLGdEQUFBO0FDdEJWOztBRHlCUTtFQUNFLG1EQUFBO1VBQUEsa0RBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQ3ZCVjs7QUQwQlk7RUFDRSwyQ0FBQTtBQ3hCZDs7QUQyQlk7RUFDRSxXQUFBO0VBQ0EsMkNBQUE7RUFDQSxlQUFBO0FDekJkOztBRDRCWTtFQUNFLFdBQUE7RUFDQSwyQ0FBQTtFQUNBLGVBQUE7QUMxQmQ7O0FEa0NFO0VBQ0Usb0NBQUE7RUFDQSwyQ0FBQTtFQUNBLGtCQUFBO0FDaENKIiwiZmlsZSI6InNyYy9hcHAvZmlyZWJhc2UvbGlzdGluZy9zdHlsZXMvZmlyZWJhc2UtbGlzdGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDdXN0b20gdmFyaWFibGVzXG4vLyBOb3RlOiAgVGhlc2Ugb25lcyB3ZXJlIGFkZGVkIGJ5IHVzIGFuZCBoYXZlIG5vdGhpbmcgdG8gZG8gd2l0aCBJb25pYyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWZhaXItbWFyZ2luKTtcbiAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcbn1cblxuLy8gTm90ZTogIEFsbCB0aGUgQ1NTIHZhcmlhYmxlcyBkZWZpbmVkIGJlbG93IGFyZSBvdmVycmlkZXMgb2YgSW9uaWMgZWxlbWVudHMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXG4uZmlsdGVycy10b29sYmFyIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIC0tcGFkZGluZy1lbmQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgLS1wYWRkaW5nLXRvcDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAtLXBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG5cbiAgLnNlYXJjaGJhci1yb3cge1xuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgIGlvbi1zZWFyY2hiYXIuaXRlbXMtc2VhcmNoYmFyIHtcbiAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgIC8vIG92ZXJyaWRlIElvbmljIGZpeGVkIGhlaWdodFxuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgLy8gTGVhcm4gbW9yZSBhYm91dCBDU1MgY29udGFpbiBwcm9wZXJ0eSBoZXJlOiBodHRwczovL3Rlcm12YWRlci5naXRodWIuaW8vY3NzLWNvbnRhaW4vXG4gICAgICBjb250YWluOiBjb250ZW50O1xuICAgIH1cblxuICAgIC5jYWxsLXRvLWFjdGlvbi1jb2wge1xuICAgICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICBmbGV4LXNocmluazogMDtcbiAgICAgIGZsZXgtZ3JvdzogMDtcblxuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cbiAgICAgIC5maWx0ZXJzLWJ0biB7XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgICAgICAtLXBhZGRpbmctZW5kOiAwcHg7XG5cbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgLy8gb3ZlcnJpZGUgSW9uaWMgZml4ZWQgaGVpZ2h0XG4gICAgICAgIGhlaWdodDogaW5pdGlhbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAucmFuZ2UtaXRlbS1yb3cge1xuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgIG1hcmdpbi10b3A6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICBwYWRkaW5nLXRvcDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgIC8vIGJveC1zaGFkb3cgYXQgdGhlIHRvcFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgNnB4IDNweCAtOHB4ICB2YXIoLS1pb24tY29sb3ItZGFya2VzdCk7XG5cbiAgICAucmFuZ2UtaGVhZGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcblxuICAgICAgLnJhbmdlLXZhbHVlIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAgIH1cblxuICAgICAgLnJhbmdlLWxhYmVsIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAucmFuZ2UtY29udHJvbCB7XG4gICAgICAvLyBvdmVycmlkZSB0aGUgcGluIGNvbG9yXG4gICAgICAtLWlvbi10ZXh0LWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcblxuICAgICAgcGFkZGluZy10b3A6IDBweDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gICAgfVxuICB9XG59XG5cbi5maXJlYmFzZS1saXN0aW5nLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG5cbiAgLml0ZW1zLWxpc3Qge1xuICAgIC5saXN0LWl0ZW0ge1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgICAtLWlubmVyLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgIC0taW5uZXItcGFkZGluZy10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgICAtLWlubmVyLXBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuXG4gICAgICAudXNlci1yb3cge1xuICAgICAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG5cbiAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgLnVzZXItaW1hZ2Utd3JhcHBlciB7XG4gICAgICAgICAgcGFkZGluZy1pbmxpbmUtZW5kOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLnVzZXItZGF0YS13cmFwcGVyIHtcbiAgICAgICAgICBwYWRkaW5nLWlubGluZS1zdGFydDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgICAudXNlci1pbmZvIHtcbiAgICAgICAgICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC51c2VyLW5hbWUge1xuICAgICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyA0KTtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAudXNlci1hZ2Uge1xuICAgICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgICAgY29sb3I6IHJnYmEodmFyKC0taW9uLWNvbG9yLWRhcmstcmdiKSwgMC40KTtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5lbXB0eS1saXN0LW1lc3NhZ2Uge1xuICAgIG1hcmdpbjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAzKTtcbiAgICBjb2xvcjogcmdiYSh2YXIoLS1pb24tY29sb3ItZGFyay1yZ2IpLCAwLjQpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuIiwiOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtZmFpci1tYXJnaW4pO1xuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xufVxuXG4uZmlsdGVycy10b29sYmFyIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIC0tcGFkZGluZy1lbmQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgLS1wYWRkaW5nLXRvcDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAtLXBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG59XG4uZmlsdGVycy10b29sYmFyIC5zZWFyY2hiYXItcm93IHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xufVxuLmZpbHRlcnMtdG9vbGJhciAuc2VhcmNoYmFyLXJvdyBpb24tc2VhcmNoYmFyLml0ZW1zLXNlYXJjaGJhciB7XG4gIHBhZGRpbmc6IDBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBjb250YWluOiBjb250ZW50O1xufVxuLmZpbHRlcnMtdG9vbGJhciAuc2VhcmNoYmFyLXJvdyAuY2FsbC10by1hY3Rpb24tY29sIHtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGZsZXgtZ3JvdzogMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5maWx0ZXJzLXRvb2xiYXIgLnNlYXJjaGJhci1yb3cgLmNhbGwtdG8tYWN0aW9uLWNvbCAuZmlsdGVycy1idG4ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICBtYXJnaW46IDBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBoZWlnaHQ6IGluaXRpYWw7XG59XG4uZmlsdGVycy10b29sYmFyIC5yYW5nZS1pdGVtLXJvdyB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcbiAgbWFyZ2luLXRvcDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBwYWRkaW5nLXRvcDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDZweCAzcHggLThweCB2YXIoLS1pb24tY29sb3ItZGFya2VzdCk7XG59XG4uZmlsdGVycy10b29sYmFyIC5yYW5nZS1pdGVtLXJvdyAucmFuZ2UtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbn1cbi5maWx0ZXJzLXRvb2xiYXIgLnJhbmdlLWl0ZW0tcm93IC5yYW5nZS1oZWFkZXIgLnJhbmdlLXZhbHVlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbn1cbi5maWx0ZXJzLXRvb2xiYXIgLnJhbmdlLWl0ZW0tcm93IC5yYW5nZS1oZWFkZXIgLnJhbmdlLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbn1cbi5maWx0ZXJzLXRvb2xiYXIgLnJhbmdlLWl0ZW0tcm93IC5yYW5nZS1jb250cm9sIHtcbiAgLS1pb24tdGV4dC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG5cbi5maXJlYmFzZS1saXN0aW5nLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG59XG4uZmlyZWJhc2UtbGlzdGluZy1jb250ZW50IC5pdGVtcy1saXN0IC5saXN0LWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAtLWlubmVyLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAtLWlubmVyLXBhZGRpbmctdG9wOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAtLWlubmVyLXBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xufVxuLmZpcmViYXNlLWxpc3RpbmctY29udGVudCAuaXRlbXMtbGlzdCAubGlzdC1pdGVtIC51c2VyLXJvdyB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZmlyZWJhc2UtbGlzdGluZy1jb250ZW50IC5pdGVtcy1saXN0IC5saXN0LWl0ZW0gLnVzZXItcm93IC51c2VyLWltYWdlLXdyYXBwZXIge1xuICBwYWRkaW5nLWlubGluZS1lbmQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG59XG4uZmlyZWJhc2UtbGlzdGluZy1jb250ZW50IC5pdGVtcy1saXN0IC5saXN0LWl0ZW0gLnVzZXItcm93IC51c2VyLWRhdGEtd3JhcHBlciB7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5maXJlYmFzZS1saXN0aW5nLWNvbnRlbnQgLml0ZW1zLWxpc3QgLmxpc3QtaXRlbSAudXNlci1yb3cgLnVzZXItZGF0YS13cmFwcGVyIC51c2VyLWluZm86bm90KDpsYXN0LWNoaWxkKSB7XG4gIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG59XG4uZmlyZWJhc2UtbGlzdGluZy1jb250ZW50IC5pdGVtcy1saXN0IC5saXN0LWl0ZW0gLnVzZXItcm93IC51c2VyLWRhdGEtd3JhcHBlciAudXNlci1pbmZvIC51c2VyLW5hbWUge1xuICBtYXJnaW46IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyA0KTtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLmZpcmViYXNlLWxpc3RpbmctY29udGVudCAuaXRlbXMtbGlzdCAubGlzdC1pdGVtIC51c2VyLXJvdyAudXNlci1kYXRhLXdyYXBwZXIgLnVzZXItaW5mbyAudXNlci1hZ2Uge1xuICBtYXJnaW46IDBweDtcbiAgY29sb3I6IHJnYmEodmFyKC0taW9uLWNvbG9yLWRhcmstcmdiKSwgMC40KTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmZpcmViYXNlLWxpc3RpbmctY29udGVudCAuZW1wdHktbGlzdC1tZXNzYWdlIHtcbiAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDMpO1xuICBjb2xvcjogcmdiYSh2YXIoLS1pb24tY29sb3ItZGFyay1yZ2IpLCAwLjQpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/firebase/listing/styles/firebase-listing.shell.scss":
/*!*********************************************************************!*\
  !*** ./src/app/firebase/listing/styles/firebase-listing.shell.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-image-shell.user-image {\n  --image-shell-border-radius: var(--app-fair-radius);\n}\n\n.user-name > app-text-shell {\n  --text-shell-line-height: 16px;\n  max-width: 80%;\n}\n\n.user-name > app-text-shell.text-loaded {\n  max-width: inherit;\n}\n\n.user-age > app-text-shell {\n  --text-shell-line-height: 14px;\n  max-width: 40%;\n}\n\n.user-age > app-text-shell.text-loaded {\n  max-width: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlyZWJhc2UvbGlzdGluZy9zdHlsZXMvRDpcXHNoaXRcXHBvZC9zcmNcXGFwcFxcZmlyZWJhc2VcXGxpc3RpbmdcXHN0eWxlc1xcZmlyZWJhc2UtbGlzdGluZy5zaGVsbC5zY3NzIiwic3JjL2FwcC9maXJlYmFzZS9saXN0aW5nL3N0eWxlcy9maXJlYmFzZS1saXN0aW5nLnNoZWxsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtREFBQTtBQ0NGOztBREVBO0VBQ0UsOEJBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxrQkFBQTtBQ0NKOztBREdBO0VBQ0UsOEJBQUE7RUFDQSxjQUFBO0FDQUY7O0FERUU7RUFDRSxrQkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvZmlyZWJhc2UvbGlzdGluZy9zdHlsZXMvZmlyZWJhc2UtbGlzdGluZy5zaGVsbC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWltYWdlLXNoZWxsLnVzZXItaW1hZ2Uge1xuICAtLWltYWdlLXNoZWxsLWJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1mYWlyLXJhZGl1cyk7XG59XG5cbi51c2VyLW5hbWUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTZweDtcbiAgbWF4LXdpZHRoOiA4MCU7XG5cbiAgJi50ZXh0LWxvYWRlZCB7XG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICB9XG59XG5cbi51c2VyLWFnZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xuICBtYXgtd2lkdGg6IDQwJTtcblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gIH1cbn1cbiIsImFwcC1pbWFnZS1zaGVsbC51c2VyLWltYWdlIHtcbiAgLS1pbWFnZS1zaGVsbC1ib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtZmFpci1yYWRpdXMpO1xufVxuXG4udXNlci1uYW1lID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE2cHg7XG4gIG1heC13aWR0aDogODAlO1xufVxuLnVzZXItbmFtZSA+IGFwcC10ZXh0LXNoZWxsLnRleHQtbG9hZGVkIHtcbiAgbWF4LXdpZHRoOiBpbmhlcml0O1xufVxuXG4udXNlci1hZ2UgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbiAgbWF4LXdpZHRoOiA0MCU7XG59XG4udXNlci1hZ2UgPiBhcHAtdGV4dC1zaGVsbC50ZXh0LWxvYWRlZCB7XG4gIG1heC13aWR0aDogaW5oZXJpdDtcbn0iXX0= */"

/***/ })

}]);
//# sourceMappingURL=listing-firebase-listing-module-es5.js.map