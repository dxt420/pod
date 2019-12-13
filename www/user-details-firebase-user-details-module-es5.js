(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-details-firebase-user-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/firebase/user/details/firebase-user-details.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/firebase/user/details/firebase-user-details.page.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"firebase/listing\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>User Details</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"openFirebaseUpdateModal()\">\n        Edit\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"user-content\">\n  <ion-row class=\"user-info-row\">\n    <ion-col class=\"user-image-col\" size=\"5\">\n      <app-aspect-ratio [ratio]=\"{w: 1, h: 1}\">\n        <app-image-shell [mode]=\"'cover'\" class=\"user-image\" animation=\"spinner\" [src]=\"user.avatar\" [alt]=\"'item image'\">\n        </app-image-shell>\n      </app-aspect-ratio>\n    </ion-col>\n    <ion-col class=\"user-details-col\" size=\"12\">\n      <h2 class=\"user-name\">\n        <app-text-shell animation=\"bouncing\" [data]=\"user.name?.concat(' ').concat(user.lastname)\"></app-text-shell>\n      </h2>\n      <span class=\"user-age\">\n        <app-text-shell animation=\"bouncing\" [data]=\"user.age?.toString().concat(' years young')\"></app-text-shell>\n      </span>\n    </ion-col>\n    <ion-col class=\"actions-col\" size=\"12\">\n      <ion-row>\n        <ion-col size=\"3\">\n          <ion-button class=\"action-btn\" color=\"secondary\">\n            <ion-icon class=\"btn-icon\" slot=\"icon-only\" name=\"mail\"></ion-icon>\n          </ion-button>\n        </ion-col>\n        <ion-col size=\"3\">\n          <ion-button class=\"action-btn\" color=\"secondary\">\n            <ion-icon class=\"btn-icon\" slot=\"icon-only\" name=\"call\"></ion-icon>\n          </ion-button>\n        </ion-col>\n        <ion-col size=\"3\">\n          <ion-button class=\"action-btn\" color=\"secondary\">\n            <ion-icon class=\"btn-icon\" slot=\"icon-only\" name=\"videocam\"></ion-icon>\n          </ion-button>\n        </ion-col>\n        <ion-col size=\"3\">\n          <ion-button class=\"action-btn\" color=\"secondary\">\n            <ion-icon class=\"btn-icon\" slot=\"icon-only\" name=\"text\"></ion-icon>\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n\n  <section class=\"content-section user-languages-wrapper\">\n    <h5 class=\"section-header\">Languages</h5>\n    <ion-row class=\"language-item-row\">\n      <ion-col class=\"language-item\">\n        <span class=\"language-name\">English</span>\n        <ion-progress-bar class=\"language-score\" type=\"determinate\" [value]=\"(user.languages?.english / 10)\"></ion-progress-bar>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"language-item-row\">\n      <ion-col class=\"language-item\">\n        <span class=\"language-name\">Spanish</span>\n        <ion-progress-bar class=\"language-score\" type=\"determinate\" [value]=\"(user.languages?.spanish / 10)\"></ion-progress-bar>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"language-item-row\">\n      <ion-col class=\"language-item\">\n        <span class=\"language-name\">French</span>\n        <ion-progress-bar class=\"language-score\" type=\"determinate\" [value]=\"(user.languages?.french / 10)\"></ion-progress-bar>\n      </ion-col>\n    </ion-row>\n  </section>\n\n  <section class=\"content-section user-experience-wrapper\">\n    <h5 class=\"section-header\">Skills</h5>\n    <ion-list class=\"experience-list\" lines=\"none\">\n      <ion-item class=\"experience-item\" *ngFor=\"let skill of user.skills\">\n        <label class=\"experience-label\">\n          <app-text-shell animation=\"bouncing\" [data]=\"skill?.name\"></app-text-shell>\n        </label>\n        <ion-icon class=\"experience-list-icon\" slot=\"start\" name=\"md-checkmark\" color=\"secondary\"></ion-icon>\n      </ion-item>\n    </ion-list>\n  </section>\n\n  <section class=\"content-section related-users-wrapper\" *ngIf=\"relatedUsers.length > 0\">\n    <h5 class=\"section-header\">Users with similar skills</h5>\n    <ion-row class=\"related-users-row\">\n      <ion-col class=\"related-user-item\" size=\"2\" *ngFor=\"let user of relatedUsers\">\n        <app-aspect-ratio [ratio]=\"{w: 1, h: 1}\">\n          <app-image-shell [mode]=\"'cover'\" class=\"related-user-picture\" [src]=\"user.avatar\" [routerLink]=\"['/firebase/details', user.id]\"></app-image-shell>\n        </app-aspect-ratio>\n        <span class=\"related-user-name\">\n          <app-text-shell [data]=\"user.name\"></app-text-shell>\n        </span>\n      </ion-col>\n    </ion-row>\n  </section>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/firebase/user/details/firebase-user-details.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/firebase/user/details/firebase-user-details.module.ts ***!
  \***********************************************************************/
/*! exports provided: FirebaseUserDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseUserDetailsPageModule", function() { return FirebaseUserDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _firebase_user_details_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./firebase-user-details.page */ "./src/app/firebase/user/details/firebase-user-details.page.ts");
/* harmony import */ var _firebase_integration_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../firebase-integration.service */ "./src/app/firebase/firebase-integration.service.ts");
/* harmony import */ var _firebase_user_details_resolver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./firebase-user-details.resolver */ "./src/app/firebase/user/details/firebase-user-details.resolver.ts");










var routes = [
    {
        path: '',
        component: _firebase_user_details_page__WEBPACK_IMPORTED_MODULE_7__["FirebaseUserDetailsPage"],
        resolve: {
            data: _firebase_user_details_resolver__WEBPACK_IMPORTED_MODULE_9__["FirebaseUserDetailsResolver"]
        }
    }
];
var FirebaseUserDetailsPageModule = /** @class */ (function () {
    function FirebaseUserDetailsPageModule() {
    }
    FirebaseUserDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"]
            ],
            declarations: [_firebase_user_details_page__WEBPACK_IMPORTED_MODULE_7__["FirebaseUserDetailsPage"]],
            providers: [
                _firebase_integration_service__WEBPACK_IMPORTED_MODULE_8__["FirebaseService"],
                _firebase_user_details_resolver__WEBPACK_IMPORTED_MODULE_9__["FirebaseUserDetailsResolver"]
            ]
        })
    ], FirebaseUserDetailsPageModule);
    return FirebaseUserDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/firebase/user/details/firebase-user-details.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/firebase/user/details/firebase-user-details.page.ts ***!
  \*********************************************************************/
/*! exports provided: FirebaseUserDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseUserDetailsPage", function() { return FirebaseUserDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _firebase_integration_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../firebase-integration.service */ "./src/app/firebase/firebase-integration.service.ts");
/* harmony import */ var _update_firebase_update_user_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../update/firebase-update-user.modal */ "./src/app/firebase/user/update/firebase-update-user.modal.ts");






var FirebaseUserDetailsPage = /** @class */ (function () {
    function FirebaseUserDetailsPage(firebaseService, modalController, router, route) {
        this.firebaseService = firebaseService;
        this.modalController = modalController;
        this.router = router;
        this.route = route;
    }
    Object.defineProperty(FirebaseUserDetailsPage.prototype, "isShell", {
        get: function () {
            return ((this.user && this.user.isShell) || (this.relatedUsers && this.relatedUsers.isShell)) ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    FirebaseUserDetailsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (resolvedRouteData) {
            var resolvedDataStores = resolvedRouteData['data'];
            var combinedDataStore = resolvedDataStores.user;
            var relatedUsersDataStore = resolvedDataStores.relatedUsers;
            combinedDataStore.state.subscribe(function (state) {
                _this.user = state;
            });
            relatedUsersDataStore.state.subscribe(function (state) {
                _this.relatedUsers = state;
            });
        });
    };
    FirebaseUserDetailsPage.prototype.openFirebaseUpdateModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _update_firebase_update_user_modal__WEBPACK_IMPORTED_MODULE_5__["FirebaseUpdateUserModal"],
                            componentProps: {
                                'user': this.user
                            }
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
    FirebaseUserDetailsPage.ctorParameters = function () { return [
        { type: _firebase_integration_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.is-shell'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FirebaseUserDetailsPage.prototype, "isShell", null);
    FirebaseUserDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-firebase-user-details',
            template: __webpack_require__(/*! raw-loader!./firebase-user-details.page.html */ "./node_modules/raw-loader/index.js!./src/app/firebase/user/details/firebase-user-details.page.html"),
            styles: [__webpack_require__(/*! ./styles/firebase-user-details.page.scss */ "./src/app/firebase/user/details/styles/firebase-user-details.page.scss"), __webpack_require__(/*! ./styles/firebase-user-details.shell.scss */ "./src/app/firebase/user/details/styles/firebase-user-details.shell.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_firebase_integration_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], FirebaseUserDetailsPage);
    return FirebaseUserDetailsPage;
}());



/***/ }),

/***/ "./src/app/firebase/user/details/firebase-user-details.resolver.ts":
/*!*************************************************************************!*\
  !*** ./src/app/firebase/user/details/firebase-user-details.resolver.ts ***!
  \*************************************************************************/
/*! exports provided: FirebaseUserDetailsResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseUserDetailsResolver", function() { return FirebaseUserDetailsResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _firebase_integration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../firebase-integration.service */ "./src/app/firebase/firebase-integration.service.ts");



var FirebaseUserDetailsResolver = /** @class */ (function () {
    function FirebaseUserDetailsResolver(firebaseService) {
        this.firebaseService = firebaseService;
    }
    FirebaseUserDetailsResolver.prototype.resolve = function (route) {
        var userId = route.paramMap.get('id');
        // We created a FirebaseCombinedUserModel to combine the userData with the details of the userSkills (from the skills collection).
        // They are 2 different collections and we need to combine them into 1 dataSource.
        var combinedUserDataSource = this.firebaseService
            .getCombinedUserDataSource(userId);
        var combinedUserDataStore = this.firebaseService
            .getCombinedUserStore(combinedUserDataSource);
        // The user details page has a section with related users, showing users with the same skills
        // For this we created another datastore which depends on the combinedUser data store
        // The DataStore subscribes to the DataSource, to avoid creating two subscribers to the combinedUserDataSource,
        // use the combinedUserDataStore timeline instead. (The timeline is a Subject, and is intended to have many subscribers)
        // Using, and thus subscribing to the timeline won't trigger two requests to the firebase endpoint
        var relatedUsersDataSource = this.firebaseService
            .getRelatedUsersDataSource(combinedUserDataStore.state);
        var relatedUsersDataStore = this.firebaseService
            .getRelatedUsersStore(relatedUsersDataSource);
        return { user: combinedUserDataStore, relatedUsers: relatedUsersDataStore };
    };
    FirebaseUserDetailsResolver.ctorParameters = function () { return [
        { type: _firebase_integration_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"] }
    ]; };
    FirebaseUserDetailsResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_firebase_integration_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"]])
    ], FirebaseUserDetailsResolver);
    return FirebaseUserDetailsResolver;
}());



/***/ }),

/***/ "./src/app/firebase/user/details/styles/firebase-user-details.page.scss":
/*!******************************************************************************!*\
  !*** ./src/app/firebase/user/details/styles/firebase-user-details.page.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background);\n  --page-related-users-gutter: calc(var(--page-margin) / 2);\n}\n\n.user-content {\n  --background: var(--page-background);\n}\n\n.user-content .user-info-row {\n  --ion-grid-column-padding: 0px;\n  padding: var(--page-margin);\n}\n\n.user-content .user-info-row .user-image-col {\n  margin: 0px auto;\n  margin-bottom: calc(var(--page-margin) / 2);\n}\n\n.user-content .user-info-row .user-image-col .user-image {\n  border-radius: 50%;\n}\n\n.user-content .user-info-row .user-details-col {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n\n.user-content .user-info-row .user-details-col .user-name {\n  margin: 0px;\n  margin-bottom: calc(var(--page-margin) / 2);\n  min-width: 40%;\n}\n\n.user-content .user-info-row .user-details-col .user-age {\n  font-size: 14px;\n  font-weight: 300;\n  min-width: 60%;\n}\n\n.user-content .user-info-row .actions-col {\n  text-align: center;\n  margin-top: var(--page-margin);\n}\n\n.user-content .user-info-row .actions-col .action-btn {\n  --border-radius: 50%;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  width: 4ch;\n  height: 4ch;\n}\n\n.user-content .user-info-row .actions-col .action-btn .btn-icon {\n  font-size: 24px;\n}\n\n.user-content .content-section {\n  padding: var(--page-margin);\n  border-top: solid 1px var(--ion-color-light-shade);\n}\n\n.user-content .content-section .section-header {\n  margin-top: 0px;\n  margin-bottom: var(--page-margin);\n}\n\n.user-content .user-languages-wrapper .language-item-row {\n  --ion-grid-column-padding: 0px;\n  margin-bottom: calc(var(--page-margin) / 2);\n}\n\n.user-content .user-languages-wrapper .language-item-row .language-item {\n  -webkit-padding-start: 0px;\n          padding-inline-start: 0px;\n  -webkit-padding-end: 0px;\n          padding-inline-end: 0px;\n}\n\n.user-content .user-languages-wrapper .language-item-row .language-item .language-name {\n  display: block;\n  font-size: 16px;\n  font-weight: 300;\n  margin-bottom: calc(var(--page-margin) / 3);\n}\n\n.user-content .user-languages-wrapper .language-item-row .language-item .language-score {\n  --buffer-background: rgba(var(--ion-color-secondary-rgb), .20);\n  --progress-background: rgba(var(--ion-color-secondary-rgb), 1);\n  height: var(--page-margin);\n  border-radius: calc(var(--page-margin) / 2);\n}\n\n.user-content .user-experience-wrapper .experience-list {\n  margin: 0px;\n  padding: 0px;\n}\n\n.user-content .user-experience-wrapper .experience-list .experience-item {\n  --min-height: initial;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --inner-padding-start: 0px;\n  --inner-padding-end: 0px;\n}\n\n.user-content .user-experience-wrapper .experience-list .experience-item:not(:last-child) {\n  padding-bottom: calc(var(--page-margin) / 2);\n}\n\n.user-content .user-experience-wrapper .experience-list .experience-item .experience-list-icon {\n  margin: 0px;\n  margin-right: calc(var(--page-margin) / 2);\n}\n\n.user-content .user-experience-wrapper .experience-list .experience-item .experience-label {\n  font-size: 16px;\n  font-weight: 300;\n  width: 100%;\n}\n\n.user-content .related-users-wrapper .related-users-row {\n  --ion-grid-columns: 7;\n  --ion-grid-column-padding: 0px;\n  flex-wrap: nowrap;\n  overflow-x: scroll;\n  will-change: scroll-position;\n  margin-left: calc(var(--page-margin) * -1);\n  margin-right: calc(var(--page-margin) * -1);\n  -ms-overflow-style: none;\n  overflow: -moz-scrollbars-none;\n  scrollbar-width: none;\n}\n\n.user-content .related-users-wrapper .related-users-row::-webkit-scrollbar {\n  display: none;\n}\n\n.user-content .related-users-wrapper .related-users-row::before, .user-content .related-users-wrapper .related-users-row::after {\n  content: \"\";\n  flex: 0 0 calc(var(--page-margin) - var(--page-related-users-gutter));\n}\n\n.user-content .related-users-wrapper .related-users-row .related-user-item {\n  padding: 0px var(--page-related-users-gutter);\n}\n\n.user-content .related-users-wrapper .related-users-row .related-user-item .related-user-name {\n  display: block;\n  text-align: center;\n  margin-top: calc(var(--page-margin) / 2);\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlyZWJhc2UvdXNlci9kZXRhaWxzL3N0eWxlcy9EOlxcc2hpdFxccG9kL3NyY1xcYXBwXFxmaXJlYmFzZVxcdXNlclxcZGV0YWlsc1xcc3R5bGVzXFxmaXJlYmFzZS11c2VyLWRldGFpbHMucGFnZS5zY3NzIiwic3JjL2FwcC9maXJlYmFzZS91c2VyL2RldGFpbHMvc3R5bGVzL2ZpcmViYXNlLXVzZXItZGV0YWlscy5wYWdlLnNjc3MiLCJzcmMvYXBwL2ZpcmViYXNlL3VzZXIvZGV0YWlscy9zdHlsZXMvRDpcXHNoaXRcXHBvZC9zcmNcXHRoZW1lXFxtaXhpbnNcXHNjcm9sbGJhcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLHFDQUFBO0VBQ0Esd0NBQUE7RUFFQSx5REFBQTtBQ0pGOztBRFFBO0VBQ0Usb0NBQUE7QUNMRjs7QURPRTtFQUNFLDhCQUFBO0VBRUEsMkJBQUE7QUNOSjs7QURRSTtFQUNFLGdCQUFBO0VBQ0EsMkNBQUE7QUNOTjs7QURRTTtFQUNFLGtCQUFBO0FDTlI7O0FEVUk7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDUk47O0FEVU07RUFDRSxXQUFBO0VBQ0EsMkNBQUE7RUFDQSxjQUFBO0FDUlI7O0FEV007RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDVFI7O0FEYUk7RUFDRSxrQkFBQTtFQUNBLDhCQUFBO0FDWE47O0FEYU07RUFDRSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFFQSxVQUFBO0VBQ0EsV0FBQTtBQ1pSOztBRGNRO0VBQ0UsZUFBQTtBQ1pWOztBRGtCRTtFQUNFLDJCQUFBO0VBQ0Esa0RBQUE7QUNoQko7O0FEa0JJO0VBQ0UsZUFBQTtFQUNBLGlDQUFBO0FDaEJOOztBRHFCSTtFQUNFLDhCQUFBO0VBRUEsMkNBQUE7QUNwQk47O0FEc0JNO0VBQ0UsMEJBQUE7VUFBQSx5QkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNwQlI7O0FEc0JRO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDJDQUFBO0FDcEJWOztBRHVCUTtFQUNFLDhEQUFBO0VBQ0EsOERBQUE7RUFFQSwwQkFBQTtFQUNBLDJDQUFBO0FDdEJWOztBRDZCSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDM0JOOztBRDZCTTtFQUNFLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7QUMzQlI7O0FENkJRO0VBQ0UsNENBQUE7QUMzQlY7O0FEOEJRO0VBQ0UsV0FBQTtFQUNBLDBDQUFBO0FDNUJWOztBRCtCUTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUM3QlY7O0FEb0NJO0VBQ0UscUJBQUE7RUFDQSw4QkFBQTtFQUVBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtFQUNBLDBDQUFBO0VBQ0EsMkNBQUE7RUU3SUosd0JBQUE7RUFHQSw4QkFBQTtFQUNBLHFCQUFBO0FEeUdGOztBQ3RHRTtFQUNFLGFBQUE7QUR3R0o7O0FEaUNNO0VBRUUsV0FBQTtFQUNBLHFFQUFBO0FDaENSOztBRG1DTTtFQUNFLDZDQUFBO0FDakNSOztBRG1DUTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0VBQ0EsZUFBQTtBQ2pDViIsImZpbGUiOiJzcmMvYXBwL2ZpcmViYXNlL3VzZXIvZGV0YWlscy9zdHlsZXMvZmlyZWJhc2UtdXNlci1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi8uLi90aGVtZS9taXhpbnMvc2Nyb2xsYmFyc1wiO1xuXG4vLyBDdXN0b20gdmFyaWFibGVzXG4vLyBOb3RlOiAgVGhlc2Ugb25lcyB3ZXJlIGFkZGVkIGJ5IHVzIGFuZCBoYXZlIG5vdGhpbmcgdG8gZG8gd2l0aCBJb25pYyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWZhaXItbWFyZ2luKTtcbiAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcblxuICAtLXBhZ2UtcmVsYXRlZC11c2Vycy1ndXR0ZXI6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG59XG5cbi8vIE5vdGU6ICBBbGwgdGhlIENTUyB2YXJpYWJsZXMgZGVmaW5lZCBiZWxvdyBhcmUgb3ZlcnJpZGVzIG9mIElvbmljIGVsZW1lbnRzIENTUyBDdXN0b20gUHJvcGVydGllc1xuLnVzZXItY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcblxuICAudXNlci1pbmZvLXJvdyB7XG4gICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuXG4gICAgcGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pO1xuXG4gICAgLnVzZXItaW1hZ2UtY29sIHtcbiAgICAgIG1hcmdpbjogMHB4IGF1dG87XG4gICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuXG4gICAgICAudXNlci1pbWFnZSB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAudXNlci1kZXRhaWxzLWNvbCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgIC51c2VyLW5hbWUge1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgICAgbWluLXdpZHRoOiA0MCU7XG4gICAgICB9XG5cbiAgICAgIC51c2VyLWFnZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgbWluLXdpZHRoOiA2MCU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmFjdGlvbnMtY29sIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIG1hcmdpbi10b3A6IHZhcigtLXBhZ2UtbWFyZ2luKTtcblxuICAgICAgLmFjdGlvbi1idG4ge1xuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcblxuICAgICAgICB3aWR0aDogNGNoO1xuICAgICAgICBoZWlnaHQ6IDRjaDtcblxuICAgICAgICAuYnRuLWljb24ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5jb250ZW50LXNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcblxuICAgIC5zZWN0aW9uLWhlYWRlciB7XG4gICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgfVxuICB9XG5cbiAgLnVzZXItbGFuZ3VhZ2VzLXdyYXBwZXIge1xuICAgIC5sYW5ndWFnZS1pdGVtLXJvdyB7XG4gICAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG5cbiAgICAgIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG5cbiAgICAgIC5sYW5ndWFnZS1pdGVtIHtcbiAgICAgICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDBweDtcbiAgICAgICAgcGFkZGluZy1pbmxpbmUtZW5kOiAwcHg7XG5cbiAgICAgICAgLmxhbmd1YWdlLW5hbWUge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMyk7XG4gICAgICAgIH1cblxuICAgICAgICAubGFuZ3VhZ2Utc2NvcmUge1xuICAgICAgICAgIC0tYnVmZmVyLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1yZ2IpLCAuMjApO1xuICAgICAgICAgIC0tcHJvZ3Jlc3MtYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYiksIDEpO1xuXG4gICAgICAgICAgaGVpZ2h0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC51c2VyLWV4cGVyaWVuY2Utd3JhcHBlciB7XG4gICAgLmV4cGVyaWVuY2UtbGlzdCB7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICAgIHBhZGRpbmc6IDBweDtcblxuICAgICAgLmV4cGVyaWVuY2UtaXRlbSB7XG4gICAgICAgIC0tbWluLWhlaWdodDogaW5pdGlhbDtcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgICAgICAgLS1pbm5lci1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcblxuICAgICAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmV4cGVyaWVuY2UtbGlzdC1pY29uIHtcbiAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgICAgIH1cblxuICAgICAgICAuZXhwZXJpZW5jZS1sYWJlbCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAucmVsYXRlZC11c2Vycy13cmFwcGVyIHtcbiAgICAucmVsYXRlZC11c2Vycy1yb3cge1xuICAgICAgLS1pb24tZ3JpZC1jb2x1bW5zOiA3OyAvLyBXZSB3YW50IHRvIHNob3cgdGhyZWUgdXNlcnMgYW5kIGEgaGFsZi4gRWFjaCB1c2VyIGZpbGxzIDIgY29scyA9PiAoMy41ICogMiA9IDcgY29scylcbiAgICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gICAgICB3aWxsLWNoYW5nZTogc2Nyb2xsLXBvc2l0aW9uO1xuICAgICAgbWFyZ2luLWxlZnQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogLTEpO1xuICAgICAgbWFyZ2luLXJpZ2h0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIC0xKTtcblxuICAgICAgQGluY2x1ZGUgaGlkZS1zY3JvbGxiYXJzKCk7XG5cbiAgICAgICY6OmJlZm9yZSxcbiAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIGZsZXg6IDAgMCBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAtIHZhcigtLXBhZ2UtcmVsYXRlZC11c2Vycy1ndXR0ZXIpKTtcbiAgICAgIH1cblxuICAgICAgLnJlbGF0ZWQtdXNlci1pdGVtIHtcbiAgICAgICAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtcmVsYXRlZC11c2Vycy1ndXR0ZXIpO1xuXG4gICAgICAgIC5yZWxhdGVkLXVzZXItbmFtZSB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIG1hcmdpbi10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCI6aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1mYWlyLW1hcmdpbik7XG4gIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZCk7XG4gIC0tcGFnZS1yZWxhdGVkLXVzZXJzLWd1dHRlcjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbn1cblxuLnVzZXItY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbn1cbi51c2VyLWNvbnRlbnQgLnVzZXItaW5mby1yb3cge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG4gIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cbi51c2VyLWNvbnRlbnQgLnVzZXItaW5mby1yb3cgLnVzZXItaW1hZ2UtY29sIHtcbiAgbWFyZ2luOiAwcHggYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbn1cbi51c2VyLWNvbnRlbnQgLnVzZXItaW5mby1yb3cgLnVzZXItaW1hZ2UtY29sIC51c2VyLWltYWdlIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLnVzZXItY29udGVudCAudXNlci1pbmZvLXJvdyAudXNlci1kZXRhaWxzLWNvbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi51c2VyLWNvbnRlbnQgLnVzZXItaW5mby1yb3cgLnVzZXItZGV0YWlscy1jb2wgLnVzZXItbmFtZSB7XG4gIG1hcmdpbjogMHB4O1xuICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICBtaW4td2lkdGg6IDQwJTtcbn1cbi51c2VyLWNvbnRlbnQgLnVzZXItaW5mby1yb3cgLnVzZXItZGV0YWlscy1jb2wgLnVzZXItYWdlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBtaW4td2lkdGg6IDYwJTtcbn1cbi51c2VyLWNvbnRlbnQgLnVzZXItaW5mby1yb3cgLmFjdGlvbnMtY29sIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiB2YXIoLS1wYWdlLW1hcmdpbik7XG59XG4udXNlci1jb250ZW50IC51c2VyLWluZm8tcm93IC5hY3Rpb25zLWNvbCAuYWN0aW9uLWJ0biB7XG4gIC0tYm9yZGVyLXJhZGl1czogNTAlO1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICB3aWR0aDogNGNoO1xuICBoZWlnaHQ6IDRjaDtcbn1cbi51c2VyLWNvbnRlbnQgLnVzZXItaW5mby1yb3cgLmFjdGlvbnMtY29sIC5hY3Rpb24tYnRuIC5idG4taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cbi51c2VyLWNvbnRlbnQgLmNvbnRlbnQtc2VjdGlvbiB7XG4gIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgYm9yZGVyLXRvcDogc29saWQgMXB4IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG59XG4udXNlci1jb250ZW50IC5jb250ZW50LXNlY3Rpb24gLnNlY3Rpb24taGVhZGVyIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG59XG4udXNlci1jb250ZW50IC51c2VyLWxhbmd1YWdlcy13cmFwcGVyIC5sYW5ndWFnZS1pdGVtLXJvdyB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbn1cbi51c2VyLWNvbnRlbnQgLnVzZXItbGFuZ3VhZ2VzLXdyYXBwZXIgLmxhbmd1YWdlLWl0ZW0tcm93IC5sYW5ndWFnZS1pdGVtIHtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDBweDtcbiAgcGFkZGluZy1pbmxpbmUtZW5kOiAwcHg7XG59XG4udXNlci1jb250ZW50IC51c2VyLWxhbmd1YWdlcy13cmFwcGVyIC5sYW5ndWFnZS1pdGVtLXJvdyAubGFuZ3VhZ2UtaXRlbSAubGFuZ3VhZ2UtbmFtZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMyk7XG59XG4udXNlci1jb250ZW50IC51c2VyLWxhbmd1YWdlcy13cmFwcGVyIC5sYW5ndWFnZS1pdGVtLXJvdyAubGFuZ3VhZ2UtaXRlbSAubGFuZ3VhZ2Utc2NvcmUge1xuICAtLWJ1ZmZlci1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiKSwgLjIwKTtcbiAgLS1wcm9ncmVzcy1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiKSwgMSk7XG4gIGhlaWdodDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBib3JkZXItcmFkaXVzOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xufVxuLnVzZXItY29udGVudCAudXNlci1leHBlcmllbmNlLXdyYXBwZXIgLmV4cGVyaWVuY2UtbGlzdCB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG59XG4udXNlci1jb250ZW50IC51c2VyLWV4cGVyaWVuY2Utd3JhcHBlciAuZXhwZXJpZW5jZS1saXN0IC5leHBlcmllbmNlLWl0ZW0ge1xuICAtLW1pbi1oZWlnaHQ6IGluaXRpYWw7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0taW5uZXItcGFkZGluZy1zdGFydDogMHB4O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG59XG4udXNlci1jb250ZW50IC51c2VyLWV4cGVyaWVuY2Utd3JhcHBlciAuZXhwZXJpZW5jZS1saXN0IC5leHBlcmllbmNlLWl0ZW06bm90KDpsYXN0LWNoaWxkKSB7XG4gIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xufVxuLnVzZXItY29udGVudCAudXNlci1leHBlcmllbmNlLXdyYXBwZXIgLmV4cGVyaWVuY2UtbGlzdCAuZXhwZXJpZW5jZS1pdGVtIC5leHBlcmllbmNlLWxpc3QtaWNvbiB7XG4gIG1hcmdpbjogMHB4O1xuICBtYXJnaW4tcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG59XG4udXNlci1jb250ZW50IC51c2VyLWV4cGVyaWVuY2Utd3JhcHBlciAuZXhwZXJpZW5jZS1saXN0IC5leHBlcmllbmNlLWl0ZW0gLmV4cGVyaWVuY2UtbGFiZWwge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnVzZXItY29udGVudCAucmVsYXRlZC11c2Vycy13cmFwcGVyIC5yZWxhdGVkLXVzZXJzLXJvdyB7XG4gIC0taW9uLWdyaWQtY29sdW1uczogNztcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICB3aWxsLWNoYW5nZTogc2Nyb2xsLXBvc2l0aW9uO1xuICBtYXJnaW4tbGVmdDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAtMSk7XG4gIG1hcmdpbi1yaWdodDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAtMSk7XG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcbiAgb3ZlcmZsb3c6IC1tb3otc2Nyb2xsYmFycy1ub25lO1xuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG59XG4udXNlci1jb250ZW50IC5yZWxhdGVkLXVzZXJzLXdyYXBwZXIgLnJlbGF0ZWQtdXNlcnMtcm93Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4udXNlci1jb250ZW50IC5yZWxhdGVkLXVzZXJzLXdyYXBwZXIgLnJlbGF0ZWQtdXNlcnMtcm93OjpiZWZvcmUsIC51c2VyLWNvbnRlbnQgLnJlbGF0ZWQtdXNlcnMtd3JhcHBlciAucmVsYXRlZC11c2Vycy1yb3c6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZmxleDogMCAwIGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC0gdmFyKC0tcGFnZS1yZWxhdGVkLXVzZXJzLWd1dHRlcikpO1xufVxuLnVzZXItY29udGVudCAucmVsYXRlZC11c2Vycy13cmFwcGVyIC5yZWxhdGVkLXVzZXJzLXJvdyAucmVsYXRlZC11c2VyLWl0ZW0ge1xuICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1yZWxhdGVkLXVzZXJzLWd1dHRlcik7XG59XG4udXNlci1jb250ZW50IC5yZWxhdGVkLXVzZXJzLXdyYXBwZXIgLnJlbGF0ZWQtdXNlcnMtcm93IC5yZWxhdGVkLXVzZXItaXRlbSAucmVsYXRlZC11c2VyLW5hbWUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICBmb250LXNpemU6IDE0cHg7XG59IiwiLy8gSGlkZSBzY3JvbGxiYXJzOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzg5OTQ4MzcvMTExNjk1OVxuQG1peGluIGhpZGUtc2Nyb2xsYmFycygpIHtcbiAgLy8gSUUgMTArXG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcblxuICAvLyBGaXJlZm94XG4gIG92ZXJmbG93OiAtbW96LXNjcm9sbGJhcnMtbm9uZTtcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xuXG4gIC8vIFNhZmFyaSBhbmQgQ2hyb21lXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/firebase/user/details/styles/firebase-user-details.shell.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/firebase/user/details/styles/firebase-user-details.shell.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-image-shell.user-image {\n  --image-shell-border-radius: 50%;\n}\n\n.user-name > app-text-shell {\n  --text-shell-line-height: 24px;\n}\n\n.user-age > app-text-shell {\n  --text-shell-line-height: 14px;\n}\n\n.experience-label > app-text-shell {\n  --text-shell-line-height: 16px;\n  max-width: 40%;\n}\n\n.experience-label > app-text-shell.text-loaded {\n  max-width: inherit;\n}\n\napp-image-shell.related-user-picture {\n  --image-shell-border-radius: var(--app-fair-radius);\n}\n\n.related-user-name > app-text-shell {\n  --text-shell-line-height: 14px;\n  max-width: 80%;\n}\n\n.related-user-name > app-text-shell.text-loaded {\n  max-width: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlyZWJhc2UvdXNlci9kZXRhaWxzL3N0eWxlcy9EOlxcc2hpdFxccG9kL3NyY1xcYXBwXFxmaXJlYmFzZVxcdXNlclxcZGV0YWlsc1xcc3R5bGVzXFxmaXJlYmFzZS11c2VyLWRldGFpbHMuc2hlbGwuc2NzcyIsInNyYy9hcHAvZmlyZWJhc2UvdXNlci9kZXRhaWxzL3N0eWxlcy9maXJlYmFzZS11c2VyLWRldGFpbHMuc2hlbGwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdDQUFBO0FDQ0Y7O0FERUE7RUFDRSw4QkFBQTtBQ0NGOztBREVBO0VBQ0UsOEJBQUE7QUNDRjs7QURFQTtFQUNFLDhCQUFBO0VBQ0EsY0FBQTtBQ0NGOztBRENFO0VBQ0Usa0JBQUE7QUNDSjs7QURHQTtFQUNFLG1EQUFBO0FDQUY7O0FER0E7RUFDRSw4QkFBQTtFQUNBLGNBQUE7QUNBRjs7QURFRTtFQUNFLGtCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9maXJlYmFzZS91c2VyL2RldGFpbHMvc3R5bGVzL2ZpcmViYXNlLXVzZXItZGV0YWlscy5zaGVsbC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWltYWdlLXNoZWxsLnVzZXItaW1hZ2Uge1xuICAtLWltYWdlLXNoZWxsLWJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLnVzZXItbmFtZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuXG4udXNlci1hZ2UgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbn1cblxuLmV4cGVyaWVuY2UtbGFiZWwgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTZweDtcbiAgbWF4LXdpZHRoOiA0MCU7XG5cbiAgJi50ZXh0LWxvYWRlZCB7XG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICB9XG59XG5cbmFwcC1pbWFnZS1zaGVsbC5yZWxhdGVkLXVzZXItcGljdHVyZSB7XG4gIC0taW1hZ2Utc2hlbGwtYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLWZhaXItcmFkaXVzKTtcbn1cblxuLnJlbGF0ZWQtdXNlci1uYW1lID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG4gIG1heC13aWR0aDogODAlO1xuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIG1heC13aWR0aDogaW5oZXJpdDtcbiAgfVxufVxuIiwiYXBwLWltYWdlLXNoZWxsLnVzZXItaW1hZ2Uge1xuICAtLWltYWdlLXNoZWxsLWJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLnVzZXItbmFtZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuXG4udXNlci1hZ2UgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbn1cblxuLmV4cGVyaWVuY2UtbGFiZWwgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTZweDtcbiAgbWF4LXdpZHRoOiA0MCU7XG59XG4uZXhwZXJpZW5jZS1sYWJlbCA+IGFwcC10ZXh0LXNoZWxsLnRleHQtbG9hZGVkIHtcbiAgbWF4LXdpZHRoOiBpbmhlcml0O1xufVxuXG5hcHAtaW1hZ2Utc2hlbGwucmVsYXRlZC11c2VyLXBpY3R1cmUge1xuICAtLWltYWdlLXNoZWxsLWJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1mYWlyLXJhZGl1cyk7XG59XG5cbi5yZWxhdGVkLXVzZXItbmFtZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xuICBtYXgtd2lkdGg6IDgwJTtcbn1cbi5yZWxhdGVkLXVzZXItbmFtZSA+IGFwcC10ZXh0LXNoZWxsLnRleHQtbG9hZGVkIHtcbiAgbWF4LXdpZHRoOiBpbmhlcml0O1xufSJdfQ== */"

/***/ })

}]);
//# sourceMappingURL=user-details-firebase-user-details-module-es5.js.map