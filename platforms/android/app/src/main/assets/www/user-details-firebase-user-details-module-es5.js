(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-details-firebase-user-details-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/firebase/user/details/firebase-user-details.page.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/firebase/user/details/firebase-user-details.page.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFirebaseUserDetailsFirebaseUserDetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"firebase/listing\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>User Details</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"openFirebaseUpdateModal()\">\n        Edit\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"user-content\">\n  <ion-row class=\"user-info-row\">\n    <ion-col class=\"user-image-col\" size=\"5\">\n      <app-aspect-ratio [ratio]=\"{w: 1, h: 1}\">\n        <app-image-shell [mode]=\"'cover'\" class=\"user-image\" animation=\"spinner\" [src]=\"user.avatar\" [alt]=\"'item image'\">\n        </app-image-shell>\n      </app-aspect-ratio>\n    </ion-col>\n    <ion-col class=\"user-details-col\" size=\"12\">\n      <h2 class=\"user-name\">\n        <app-text-shell animation=\"bouncing\" [data]=\"user.name?.concat(' ').concat(user.lastname)\"></app-text-shell>\n      </h2>\n      <span class=\"user-age\">\n        <app-text-shell animation=\"bouncing\" [data]=\"user.age?.toString().concat(' years young')\"></app-text-shell>\n      </span>\n    </ion-col>\n    <ion-col class=\"actions-col\" size=\"12\">\n      <ion-row>\n        <ion-col size=\"3\">\n          <ion-button class=\"action-btn\" color=\"secondary\">\n            <ion-icon class=\"btn-icon\" slot=\"icon-only\" name=\"mail\"></ion-icon>\n          </ion-button>\n        </ion-col>\n        <ion-col size=\"3\">\n          <ion-button class=\"action-btn\" color=\"secondary\">\n            <ion-icon class=\"btn-icon\" slot=\"icon-only\" name=\"call\"></ion-icon>\n          </ion-button>\n        </ion-col>\n        <ion-col size=\"3\">\n          <ion-button class=\"action-btn\" color=\"secondary\">\n            <ion-icon class=\"btn-icon\" slot=\"icon-only\" name=\"videocam\"></ion-icon>\n          </ion-button>\n        </ion-col>\n        <ion-col size=\"3\">\n          <ion-button class=\"action-btn\" color=\"secondary\">\n            <ion-icon class=\"btn-icon\" slot=\"icon-only\" name=\"text\"></ion-icon>\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n\n  <section class=\"content-section user-languages-wrapper\">\n    <h5 class=\"section-header\">Languages</h5>\n    <ion-row class=\"language-item-row\">\n      <ion-col class=\"language-item\">\n        <span class=\"language-name\">English</span>\n        <ion-progress-bar class=\"language-score\" type=\"determinate\" [value]=\"(user.languages?.english / 10)\"></ion-progress-bar>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"language-item-row\">\n      <ion-col class=\"language-item\">\n        <span class=\"language-name\">Spanish</span>\n        <ion-progress-bar class=\"language-score\" type=\"determinate\" [value]=\"(user.languages?.spanish / 10)\"></ion-progress-bar>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"language-item-row\">\n      <ion-col class=\"language-item\">\n        <span class=\"language-name\">French</span>\n        <ion-progress-bar class=\"language-score\" type=\"determinate\" [value]=\"(user.languages?.french / 10)\"></ion-progress-bar>\n      </ion-col>\n    </ion-row>\n  </section>\n\n  <section class=\"content-section user-experience-wrapper\">\n    <h5 class=\"section-header\">Skills</h5>\n    <ion-list class=\"experience-list\" lines=\"none\">\n      <ion-item class=\"experience-item\" *ngFor=\"let skill of user.skills\">\n        <label class=\"experience-label\">\n          <app-text-shell animation=\"bouncing\" [data]=\"skill?.name\"></app-text-shell>\n        </label>\n        <ion-icon class=\"experience-list-icon\" slot=\"start\" name=\"md-checkmark\" color=\"secondary\"></ion-icon>\n      </ion-item>\n    </ion-list>\n  </section>\n\n  <section class=\"content-section related-users-wrapper\" *ngIf=\"relatedUsers.length > 0\">\n    <h5 class=\"section-header\">Users with similar skills</h5>\n    <ion-row class=\"related-users-row\">\n      <ion-col class=\"related-user-item\" size=\"2\" *ngFor=\"let user of relatedUsers\">\n        <app-aspect-ratio [ratio]=\"{w: 1, h: 1}\">\n          <app-image-shell [mode]=\"'cover'\" class=\"related-user-picture\" [src]=\"user.avatar\" [routerLink]=\"['/firebase/details', user.id]\"></app-image-shell>\n        </app-aspect-ratio>\n        <span class=\"related-user-name\">\n          <app-text-shell [data]=\"user.name\"></app-text-shell>\n        </span>\n      </ion-col>\n    </ion-row>\n  </section>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/firebase/user/details/firebase-user-details.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/firebase/user/details/firebase-user-details.module.ts ***!
    \***********************************************************************/

  /*! exports provided: FirebaseUserDetailsPageModule */

  /***/
  function srcAppFirebaseUserDetailsFirebaseUserDetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FirebaseUserDetailsPageModule", function () {
      return FirebaseUserDetailsPageModule;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var _firebase_user_details_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./firebase-user-details.page */
    "./src/app/firebase/user/details/firebase-user-details.page.ts");
    /* harmony import */


    var _firebase_integration_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../firebase-integration.service */
    "./src/app/firebase/firebase-integration.service.ts");
    /* harmony import */


    var _firebase_user_details_resolver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./firebase-user-details.resolver */
    "./src/app/firebase/user/details/firebase-user-details.resolver.ts");

    const routes = [{
      path: '',
      component: _firebase_user_details_page__WEBPACK_IMPORTED_MODULE_7__["FirebaseUserDetailsPage"],
      resolve: {
        data: _firebase_user_details_resolver__WEBPACK_IMPORTED_MODULE_9__["FirebaseUserDetailsResolver"]
      }
    }];
    let FirebaseUserDetailsPageModule = class FirebaseUserDetailsPageModule {};
    FirebaseUserDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"]],
      declarations: [_firebase_user_details_page__WEBPACK_IMPORTED_MODULE_7__["FirebaseUserDetailsPage"]],
      providers: [_firebase_integration_service__WEBPACK_IMPORTED_MODULE_8__["FirebaseService"], _firebase_user_details_resolver__WEBPACK_IMPORTED_MODULE_9__["FirebaseUserDetailsResolver"]]
    })], FirebaseUserDetailsPageModule);
    /***/
  },

  /***/
  "./src/app/firebase/user/details/firebase-user-details.page.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/firebase/user/details/firebase-user-details.page.ts ***!
    \*********************************************************************/

  /*! exports provided: FirebaseUserDetailsPage */

  /***/
  function srcAppFirebaseUserDetailsFirebaseUserDetailsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FirebaseUserDetailsPage", function () {
      return FirebaseUserDetailsPage;
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
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _firebase_integration_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../firebase-integration.service */
    "./src/app/firebase/firebase-integration.service.ts");
    /* harmony import */


    var _update_firebase_update_user_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../update/firebase-update-user.modal */
    "./src/app/firebase/user/update/firebase-update-user.modal.ts");

    let FirebaseUserDetailsPage = class FirebaseUserDetailsPage {
      constructor(firebaseService, modalController, router, route) {
        this.firebaseService = firebaseService;
        this.modalController = modalController;
        this.router = router;
        this.route = route;
      }

      get isShell() {
        return this.user && this.user.isShell || this.relatedUsers && this.relatedUsers.isShell ? true : false;
      }

      ngOnInit() {
        this.route.data.subscribe(resolvedRouteData => {
          const resolvedDataStores = resolvedRouteData['data'];
          const combinedDataStore = resolvedDataStores.user;
          const relatedUsersDataStore = resolvedDataStores.relatedUsers;
          combinedDataStore.state.subscribe(state => {
            this.user = state;
          });
          relatedUsersDataStore.state.subscribe(state => {
            this.relatedUsers = state;
          });
        });
      }

      openFirebaseUpdateModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const modal = yield this.modalController.create({
            component: _update_firebase_update_user_modal__WEBPACK_IMPORTED_MODULE_5__["FirebaseUpdateUserModal"],
            componentProps: {
              'user': this.user
            }
          });
          yield modal.present();
        });
      }

    };

    FirebaseUserDetailsPage.ctorParameters = () => [{
      type: _firebase_integration_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.is-shell'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], FirebaseUserDetailsPage.prototype, "isShell", null);
    FirebaseUserDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-firebase-user-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./firebase-user-details.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/firebase/user/details/firebase-user-details.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./styles/firebase-user-details.page.scss */
      "./src/app/firebase/user/details/styles/firebase-user-details.page.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./styles/firebase-user-details.shell.scss */
      "./src/app/firebase/user/details/styles/firebase-user-details.shell.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_firebase_integration_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])], FirebaseUserDetailsPage);
    /***/
  },

  /***/
  "./src/app/firebase/user/details/firebase-user-details.resolver.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/firebase/user/details/firebase-user-details.resolver.ts ***!
    \*************************************************************************/

  /*! exports provided: FirebaseUserDetailsResolver */

  /***/
  function srcAppFirebaseUserDetailsFirebaseUserDetailsResolverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FirebaseUserDetailsResolver", function () {
      return FirebaseUserDetailsResolver;
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


    var _firebase_integration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../firebase-integration.service */
    "./src/app/firebase/firebase-integration.service.ts");

    let FirebaseUserDetailsResolver = class FirebaseUserDetailsResolver {
      constructor(firebaseService) {
        this.firebaseService = firebaseService;
      }

      resolve(route) {
        const userId = route.paramMap.get('id'); // We created a FirebaseCombinedUserModel to combine the userData with the details of the userSkills (from the skills collection).
        // They are 2 different collections and we need to combine them into 1 dataSource.

        const combinedUserDataSource = this.firebaseService.getCombinedUserDataSource(userId);
        const combinedUserDataStore = this.firebaseService.getCombinedUserStore(combinedUserDataSource); // The user details page has a section with related users, showing users with the same skills
        // For this we created another datastore which depends on the combinedUser data store
        // The DataStore subscribes to the DataSource, to avoid creating two subscribers to the combinedUserDataSource,
        // use the combinedUserDataStore timeline instead. (The timeline is a Subject, and is intended to have many subscribers)
        // Using, and thus subscribing to the timeline won't trigger two requests to the firebase endpoint

        const relatedUsersDataSource = this.firebaseService.getRelatedUsersDataSource(combinedUserDataStore.state);
        const relatedUsersDataStore = this.firebaseService.getRelatedUsersStore(relatedUsersDataSource);
        return {
          user: combinedUserDataStore,
          relatedUsers: relatedUsersDataStore
        };
      }

    };

    FirebaseUserDetailsResolver.ctorParameters = () => [{
      type: _firebase_integration_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"]
    }];

    FirebaseUserDetailsResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_firebase_integration_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"]])], FirebaseUserDetailsResolver);
    /***/
  },

  /***/
  "./src/app/firebase/user/details/styles/firebase-user-details.page.scss":
  /*!******************************************************************************!*\
    !*** ./src/app/firebase/user/details/styles/firebase-user-details.page.scss ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFirebaseUserDetailsStylesFirebaseUserDetailsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background);\n  --page-related-users-gutter: calc(var(--page-margin) / 2);\n}\n\n.user-content {\n  --background: var(--page-background);\n}\n\n.user-content .user-info-row {\n  --ion-grid-column-padding: 0px;\n  padding: var(--page-margin);\n}\n\n.user-content .user-info-row .user-image-col {\n  margin: 0px auto;\n  margin-bottom: calc(var(--page-margin) / 2);\n}\n\n.user-content .user-info-row .user-image-col .user-image {\n  border-radius: 50%;\n}\n\n.user-content .user-info-row .user-details-col {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  text-align: center;\n}\n\n.user-content .user-info-row .user-details-col .user-name {\n  margin: 0px;\n  margin-bottom: calc(var(--page-margin) / 2);\n  min-width: 40%;\n}\n\n.user-content .user-info-row .user-details-col .user-age {\n  font-size: 14px;\n  font-weight: 300;\n  min-width: 60%;\n}\n\n.user-content .user-info-row .actions-col {\n  text-align: center;\n  margin-top: var(--page-margin);\n}\n\n.user-content .user-info-row .actions-col .action-btn {\n  --border-radius: 50%;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  width: 4ch;\n  height: 4ch;\n}\n\n.user-content .user-info-row .actions-col .action-btn .btn-icon {\n  font-size: 24px;\n}\n\n.user-content .content-section {\n  padding: var(--page-margin);\n  border-top: solid 1px var(--ion-color-light-shade);\n}\n\n.user-content .content-section .section-header {\n  margin-top: 0px;\n  margin-bottom: var(--page-margin);\n}\n\n.user-content .user-languages-wrapper .language-item-row {\n  --ion-grid-column-padding: 0px;\n  margin-bottom: calc(var(--page-margin) / 2);\n}\n\n.user-content .user-languages-wrapper .language-item-row .language-item {\n  -webkit-padding-start: 0px;\n          padding-inline-start: 0px;\n  -webkit-padding-end: 0px;\n          padding-inline-end: 0px;\n}\n\n.user-content .user-languages-wrapper .language-item-row .language-item .language-name {\n  display: block;\n  font-size: 16px;\n  font-weight: 300;\n  margin-bottom: calc(var(--page-margin) / 3);\n}\n\n.user-content .user-languages-wrapper .language-item-row .language-item .language-score {\n  --buffer-background: rgba(var(--ion-color-secondary-rgb), .20);\n  --progress-background: rgba(var(--ion-color-secondary-rgb), 1);\n  height: var(--page-margin);\n  border-radius: calc(var(--page-margin) / 2);\n}\n\n.user-content .user-experience-wrapper .experience-list {\n  margin: 0px;\n  padding: 0px;\n}\n\n.user-content .user-experience-wrapper .experience-list .experience-item {\n  --min-height: initial;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --inner-padding-start: 0px;\n  --inner-padding-end: 0px;\n}\n\n.user-content .user-experience-wrapper .experience-list .experience-item:not(:last-child) {\n  padding-bottom: calc(var(--page-margin) / 2);\n}\n\n.user-content .user-experience-wrapper .experience-list .experience-item .experience-list-icon {\n  margin: 0px;\n  margin-right: calc(var(--page-margin) / 2);\n}\n\n.user-content .user-experience-wrapper .experience-list .experience-item .experience-label {\n  font-size: 16px;\n  font-weight: 300;\n  width: 100%;\n}\n\n.user-content .related-users-wrapper .related-users-row {\n  --ion-grid-columns: 7;\n  --ion-grid-column-padding: 0px;\n  flex-wrap: nowrap;\n  overflow-x: scroll;\n  will-change: scroll-position;\n  margin-left: calc(var(--page-margin) * -1);\n  margin-right: calc(var(--page-margin) * -1);\n  -ms-overflow-style: none;\n  overflow: -moz-scrollbars-none;\n  scrollbar-width: none;\n}\n\n.user-content .related-users-wrapper .related-users-row::-webkit-scrollbar {\n  display: none;\n}\n\n.user-content .related-users-wrapper .related-users-row::before, .user-content .related-users-wrapper .related-users-row::after {\n  content: \"\";\n  -webkit-box-flex: 0;\n          flex: 0 0 calc(var(--page-margin) - var(--page-related-users-gutter));\n}\n\n.user-content .related-users-wrapper .related-users-row .related-user-item {\n  padding: 0px var(--page-related-users-gutter);\n}\n\n.user-content .related-users-wrapper .related-users-row .related-user-item .related-user-name {\n  display: block;\n  text-align: center;\n  margin-top: calc(var(--page-margin) / 2);\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9haXIvRG9jdW1lbnRzL0dpdEh1Yi9wb2Qvc3JjL2FwcC9maXJlYmFzZS91c2VyL2RldGFpbHMvc3R5bGVzL2ZpcmViYXNlLXVzZXItZGV0YWlscy5wYWdlLnNjc3MiLCJzcmMvYXBwL2ZpcmViYXNlL3VzZXIvZGV0YWlscy9zdHlsZXMvZmlyZWJhc2UtdXNlci1kZXRhaWxzLnBhZ2Uuc2NzcyIsIi9Vc2Vycy9haXIvRG9jdW1lbnRzL0dpdEh1Yi9wb2Qvc3JjL3RoZW1lL21peGlucy9zY3JvbGxiYXJzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSxxQ0FBQTtFQUNBLHdDQUFBO0VBRUEseURBQUE7QUNKRjs7QURRQTtFQUNFLG9DQUFBO0FDTEY7O0FET0U7RUFDRSw4QkFBQTtFQUVBLDJCQUFBO0FDTko7O0FEUUk7RUFDRSxnQkFBQTtFQUNBLDJDQUFBO0FDTk47O0FEUU07RUFDRSxrQkFBQTtBQ05SOztBRFVJO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGtCQUFBO0FDUk47O0FEVU07RUFDRSxXQUFBO0VBQ0EsMkNBQUE7RUFDQSxjQUFBO0FDUlI7O0FEV007RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDVFI7O0FEYUk7RUFDRSxrQkFBQTtFQUNBLDhCQUFBO0FDWE47O0FEYU07RUFDRSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFFQSxVQUFBO0VBQ0EsV0FBQTtBQ1pSOztBRGNRO0VBQ0UsZUFBQTtBQ1pWOztBRGtCRTtFQUNFLDJCQUFBO0VBQ0Esa0RBQUE7QUNoQko7O0FEa0JJO0VBQ0UsZUFBQTtFQUNBLGlDQUFBO0FDaEJOOztBRHFCSTtFQUNFLDhCQUFBO0VBRUEsMkNBQUE7QUNwQk47O0FEc0JNO0VBQ0UsMEJBQUE7VUFBQSx5QkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNwQlI7O0FEc0JRO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDJDQUFBO0FDcEJWOztBRHVCUTtFQUNFLDhEQUFBO0VBQ0EsOERBQUE7RUFFQSwwQkFBQTtFQUNBLDJDQUFBO0FDdEJWOztBRDZCSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDM0JOOztBRDZCTTtFQUNFLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7QUMzQlI7O0FENkJRO0VBQ0UsNENBQUE7QUMzQlY7O0FEOEJRO0VBQ0UsV0FBQTtFQUNBLDBDQUFBO0FDNUJWOztBRCtCUTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUM3QlY7O0FEb0NJO0VBQ0UscUJBQUE7RUFDQSw4QkFBQTtFQUVBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtFQUNBLDBDQUFBO0VBQ0EsMkNBQUE7RUU3SUosd0JBQUE7RUFHQSw4QkFBQTtFQUNBLHFCQUFBO0FEeUdGOztBQ3RHRTtFQUNFLGFBQUE7QUR3R0o7O0FEaUNNO0VBRUUsV0FBQTtFQUNBLG1CQUFBO1VBQUEscUVBQUE7QUNoQ1I7O0FEbUNNO0VBQ0UsNkNBQUE7QUNqQ1I7O0FEbUNRO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7RUFDQSxlQUFBO0FDakNWIiwiZmlsZSI6InNyYy9hcHAvZmlyZWJhc2UvdXNlci9kZXRhaWxzL3N0eWxlcy9maXJlYmFzZS11c2VyLWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uLy4uL3RoZW1lL21peGlucy9zY3JvbGxiYXJzXCI7XG5cbi8vIEN1c3RvbSB2YXJpYWJsZXNcbi8vIE5vdGU6ICBUaGVzZSBvbmVzIHdlcmUgYWRkZWQgYnkgdXMgYW5kIGhhdmUgbm90aGluZyB0byBkbyB3aXRoIElvbmljIENTUyBDdXN0b20gUHJvcGVydGllc1xuOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtZmFpci1tYXJnaW4pO1xuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xuXG4gIC0tcGFnZS1yZWxhdGVkLXVzZXJzLWd1dHRlcjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbn1cblxuLy8gTm90ZTogIEFsbCB0aGUgQ1NTIHZhcmlhYmxlcyBkZWZpbmVkIGJlbG93IGFyZSBvdmVycmlkZXMgb2YgSW9uaWMgZWxlbWVudHMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXG4udXNlci1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xuXG4gIC51c2VyLWluZm8tcm93IHtcbiAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG5cbiAgICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbik7XG5cbiAgICAudXNlci1pbWFnZS1jb2wge1xuICAgICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICAgIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG5cbiAgICAgIC51c2VyLWltYWdlIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC51c2VyLWRldGFpbHMtY29sIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgLnVzZXItbmFtZSB7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgICAgICBtaW4td2lkdGg6IDQwJTtcbiAgICAgIH1cblxuICAgICAgLnVzZXItYWdlIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBtaW4td2lkdGg6IDYwJTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuYWN0aW9ucy1jb2wge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbWFyZ2luLXRvcDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuXG4gICAgICAuYWN0aW9uLWJ0biB7XG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAgICAgLS1wYWRkaW5nLWVuZDogMHB4O1xuXG4gICAgICAgIHdpZHRoOiA0Y2g7XG4gICAgICAgIGhlaWdodDogNGNoO1xuXG4gICAgICAgIC5idG4taWNvbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmNvbnRlbnQtc2VjdGlvbiB7XG4gICAgcGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuXG4gICAgLnNlY3Rpb24taGVhZGVyIHtcbiAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICB9XG4gIH1cblxuICAudXNlci1sYW5ndWFnZXMtd3JhcHBlciB7XG4gICAgLmxhbmd1YWdlLWl0ZW0tcm93IHtcbiAgICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcblxuICAgICAgLmxhbmd1YWdlLWl0ZW0ge1xuICAgICAgICBwYWRkaW5nLWlubGluZS1zdGFydDogMHB4O1xuICAgICAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDBweDtcblxuICAgICAgICAubGFuZ3VhZ2UtbmFtZSB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sYW5ndWFnZS1zY29yZSB7XG4gICAgICAgICAgLS1idWZmZXItYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYiksIC4yMCk7XG4gICAgICAgICAgLS1wcm9ncmVzcy1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiKSwgMSk7XG5cbiAgICAgICAgICBoZWlnaHQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnVzZXItZXhwZXJpZW5jZS13cmFwcGVyIHtcbiAgICAuZXhwZXJpZW5jZS1saXN0IHtcbiAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgcGFkZGluZzogMHB4O1xuXG4gICAgICAuZXhwZXJpZW5jZS1pdGVtIHtcbiAgICAgICAgLS1taW4taGVpZ2h0OiBpbml0aWFsO1xuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAgICAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAgICAgICAtLWlubmVyLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuXG4gICAgICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgICAgIH1cblxuICAgICAgICAuZXhwZXJpZW5jZS1saXN0LWljb24ge1xuICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5leHBlcmllbmNlLWxhYmVsIHtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5yZWxhdGVkLXVzZXJzLXdyYXBwZXIge1xuICAgIC5yZWxhdGVkLXVzZXJzLXJvdyB7XG4gICAgICAtLWlvbi1ncmlkLWNvbHVtbnM6IDc7IC8vIFdlIHdhbnQgdG8gc2hvdyB0aHJlZSB1c2VycyBhbmQgYSBoYWxmLiBFYWNoIHVzZXIgZmlsbHMgMiBjb2xzID0+ICgzLjUgKiAyID0gNyBjb2xzKVxuICAgICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuXG4gICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgICAgIHdpbGwtY2hhbmdlOiBzY3JvbGwtcG9zaXRpb247XG4gICAgICBtYXJnaW4tbGVmdDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAtMSk7XG4gICAgICBtYXJnaW4tcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogLTEpO1xuXG4gICAgICBAaW5jbHVkZSBoaWRlLXNjcm9sbGJhcnMoKTtcblxuICAgICAgJjo6YmVmb3JlLFxuICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgZmxleDogMCAwIGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC0gdmFyKC0tcGFnZS1yZWxhdGVkLXVzZXJzLWd1dHRlcikpO1xuICAgICAgfVxuXG4gICAgICAucmVsYXRlZC11c2VyLWl0ZW0ge1xuICAgICAgICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1yZWxhdGVkLXVzZXJzLWd1dHRlcik7XG5cbiAgICAgICAgLnJlbGF0ZWQtdXNlci1uYW1lIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWZhaXItbWFyZ2luKTtcbiAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kKTtcbiAgLS1wYWdlLXJlbGF0ZWQtdXNlcnMtZ3V0dGVyOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xufVxuXG4udXNlci1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xufVxuLnVzZXItY29udGVudCAudXNlci1pbmZvLXJvdyB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcbiAgcGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pO1xufVxuLnVzZXItY29udGVudCAudXNlci1pbmZvLXJvdyAudXNlci1pbWFnZS1jb2wge1xuICBtYXJnaW46IDBweCBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xufVxuLnVzZXItY29udGVudCAudXNlci1pbmZvLXJvdyAudXNlci1pbWFnZS1jb2wgLnVzZXItaW1hZ2Uge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4udXNlci1jb250ZW50IC51c2VyLWluZm8tcm93IC51c2VyLWRldGFpbHMtY29sIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnVzZXItY29udGVudCAudXNlci1pbmZvLXJvdyAudXNlci1kZXRhaWxzLWNvbCAudXNlci1uYW1lIHtcbiAgbWFyZ2luOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIG1pbi13aWR0aDogNDAlO1xufVxuLnVzZXItY29udGVudCAudXNlci1pbmZvLXJvdyAudXNlci1kZXRhaWxzLWNvbCAudXNlci1hZ2Uge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIG1pbi13aWR0aDogNjAlO1xufVxuLnVzZXItY29udGVudCAudXNlci1pbmZvLXJvdyAuYWN0aW9ucy1jb2wge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cbi51c2VyLWNvbnRlbnQgLnVzZXItaW5mby1yb3cgLmFjdGlvbnMtY29sIC5hY3Rpb24tYnRuIHtcbiAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gIHdpZHRoOiA0Y2g7XG4gIGhlaWdodDogNGNoO1xufVxuLnVzZXItY29udGVudCAudXNlci1pbmZvLXJvdyAuYWN0aW9ucy1jb2wgLmFjdGlvbi1idG4gLmJ0bi1pY29uIHtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuLnVzZXItY29udGVudCAuY29udGVudC1zZWN0aW9uIHtcbiAgcGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBib3JkZXItdG9wOiBzb2xpZCAxcHggdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbn1cbi51c2VyLWNvbnRlbnQgLmNvbnRlbnQtc2VjdGlvbiAuc2VjdGlvbi1oZWFkZXIge1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cbi51c2VyLWNvbnRlbnQgLnVzZXItbGFuZ3VhZ2VzLXdyYXBwZXIgLmxhbmd1YWdlLWl0ZW0tcm93IHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xufVxuLnVzZXItY29udGVudCAudXNlci1sYW5ndWFnZXMtd3JhcHBlciAubGFuZ3VhZ2UtaXRlbS1yb3cgLmxhbmd1YWdlLWl0ZW0ge1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogMHB4O1xuICBwYWRkaW5nLWlubGluZS1lbmQ6IDBweDtcbn1cbi51c2VyLWNvbnRlbnQgLnVzZXItbGFuZ3VhZ2VzLXdyYXBwZXIgLmxhbmd1YWdlLWl0ZW0tcm93IC5sYW5ndWFnZS1pdGVtIC5sYW5ndWFnZS1uYW1lIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAzKTtcbn1cbi51c2VyLWNvbnRlbnQgLnVzZXItbGFuZ3VhZ2VzLXdyYXBwZXIgLmxhbmd1YWdlLWl0ZW0tcm93IC5sYW5ndWFnZS1pdGVtIC5sYW5ndWFnZS1zY29yZSB7XG4gIC0tYnVmZmVyLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1yZ2IpLCAuMjApO1xuICAtLXByb2dyZXNzLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1yZ2IpLCAxKTtcbiAgaGVpZ2h0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIGJvcmRlci1yYWRpdXM6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG59XG4udXNlci1jb250ZW50IC51c2VyLWV4cGVyaWVuY2Utd3JhcHBlciAuZXhwZXJpZW5jZS1saXN0IHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbn1cbi51c2VyLWNvbnRlbnQgLnVzZXItZXhwZXJpZW5jZS13cmFwcGVyIC5leHBlcmllbmNlLWxpc3QgLmV4cGVyaWVuY2UtaXRlbSB7XG4gIC0tbWluLWhlaWdodDogaW5pdGlhbDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgLS1pbm5lci1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbn1cbi51c2VyLWNvbnRlbnQgLnVzZXItZXhwZXJpZW5jZS13cmFwcGVyIC5leHBlcmllbmNlLWxpc3QgLmV4cGVyaWVuY2UtaXRlbTpub3QoOmxhc3QtY2hpbGQpIHtcbiAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG59XG4udXNlci1jb250ZW50IC51c2VyLWV4cGVyaWVuY2Utd3JhcHBlciAuZXhwZXJpZW5jZS1saXN0IC5leHBlcmllbmNlLWl0ZW0gLmV4cGVyaWVuY2UtbGlzdC1pY29uIHtcbiAgbWFyZ2luOiAwcHg7XG4gIG1hcmdpbi1yaWdodDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbn1cbi51c2VyLWNvbnRlbnQgLnVzZXItZXhwZXJpZW5jZS13cmFwcGVyIC5leHBlcmllbmNlLWxpc3QgLmV4cGVyaWVuY2UtaXRlbSAuZXhwZXJpZW5jZS1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgd2lkdGg6IDEwMCU7XG59XG4udXNlci1jb250ZW50IC5yZWxhdGVkLXVzZXJzLXdyYXBwZXIgLnJlbGF0ZWQtdXNlcnMtcm93IHtcbiAgLS1pb24tZ3JpZC1jb2x1bW5zOiA3O1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gIHdpbGwtY2hhbmdlOiBzY3JvbGwtcG9zaXRpb247XG4gIG1hcmdpbi1sZWZ0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIC0xKTtcbiAgbWFyZ2luLXJpZ2h0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIC0xKTtcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuICBvdmVyZmxvdzogLW1vei1zY3JvbGxiYXJzLW5vbmU7XG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbn1cbi51c2VyLWNvbnRlbnQgLnJlbGF0ZWQtdXNlcnMtd3JhcHBlciAucmVsYXRlZC11c2Vycy1yb3c6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi51c2VyLWNvbnRlbnQgLnJlbGF0ZWQtdXNlcnMtd3JhcHBlciAucmVsYXRlZC11c2Vycy1yb3c6OmJlZm9yZSwgLnVzZXItY29udGVudCAucmVsYXRlZC11c2Vycy13cmFwcGVyIC5yZWxhdGVkLXVzZXJzLXJvdzo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBmbGV4OiAwIDAgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLSB2YXIoLS1wYWdlLXJlbGF0ZWQtdXNlcnMtZ3V0dGVyKSk7XG59XG4udXNlci1jb250ZW50IC5yZWxhdGVkLXVzZXJzLXdyYXBwZXIgLnJlbGF0ZWQtdXNlcnMtcm93IC5yZWxhdGVkLXVzZXItaXRlbSB7XG4gIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLXJlbGF0ZWQtdXNlcnMtZ3V0dGVyKTtcbn1cbi51c2VyLWNvbnRlbnQgLnJlbGF0ZWQtdXNlcnMtd3JhcHBlciAucmVsYXRlZC11c2Vycy1yb3cgLnJlbGF0ZWQtdXNlci1pdGVtIC5yZWxhdGVkLXVzZXItbmFtZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn0iLCIvLyBIaWRlIHNjcm9sbGJhcnM6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zODk5NDgzNy8xMTE2OTU5XG5AbWl4aW4gaGlkZS1zY3JvbGxiYXJzKCkge1xuICAvLyBJRSAxMCtcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuXG4gIC8vIEZpcmVmb3hcbiAgb3ZlcmZsb3c6IC1tb3otc2Nyb2xsYmFycy1ub25lO1xuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG5cbiAgLy8gU2FmYXJpIGFuZCBDaHJvbWVcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/firebase/user/details/styles/firebase-user-details.shell.scss":
  /*!*******************************************************************************!*\
    !*** ./src/app/firebase/user/details/styles/firebase-user-details.shell.scss ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFirebaseUserDetailsStylesFirebaseUserDetailsShellScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "app-image-shell.user-image {\n  --image-shell-border-radius: 50%;\n}\n\n.user-name > app-text-shell {\n  --text-shell-line-height: 24px;\n}\n\n.user-age > app-text-shell {\n  --text-shell-line-height: 14px;\n}\n\n.experience-label > app-text-shell {\n  --text-shell-line-height: 16px;\n  max-width: 40%;\n}\n\n.experience-label > app-text-shell.text-loaded {\n  max-width: inherit;\n}\n\napp-image-shell.related-user-picture {\n  --image-shell-border-radius: var(--app-fair-radius);\n}\n\n.related-user-name > app-text-shell {\n  --text-shell-line-height: 14px;\n  max-width: 80%;\n}\n\n.related-user-name > app-text-shell.text-loaded {\n  max-width: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9haXIvRG9jdW1lbnRzL0dpdEh1Yi9wb2Qvc3JjL2FwcC9maXJlYmFzZS91c2VyL2RldGFpbHMvc3R5bGVzL2ZpcmViYXNlLXVzZXItZGV0YWlscy5zaGVsbC5zY3NzIiwic3JjL2FwcC9maXJlYmFzZS91c2VyL2RldGFpbHMvc3R5bGVzL2ZpcmViYXNlLXVzZXItZGV0YWlscy5zaGVsbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0NBQUE7QUNDRjs7QURFQTtFQUNFLDhCQUFBO0FDQ0Y7O0FERUE7RUFDRSw4QkFBQTtBQ0NGOztBREVBO0VBQ0UsOEJBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxrQkFBQTtBQ0NKOztBREdBO0VBQ0UsbURBQUE7QUNBRjs7QURHQTtFQUNFLDhCQUFBO0VBQ0EsY0FBQTtBQ0FGOztBREVFO0VBQ0Usa0JBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2ZpcmViYXNlL3VzZXIvZGV0YWlscy9zdHlsZXMvZmlyZWJhc2UtdXNlci1kZXRhaWxzLnNoZWxsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtaW1hZ2Utc2hlbGwudXNlci1pbWFnZSB7XG4gIC0taW1hZ2Utc2hlbGwtYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4udXNlci1uYW1lID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDI0cHg7XG59XG5cbi51c2VyLWFnZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xufVxuXG4uZXhwZXJpZW5jZS1sYWJlbCA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNnB4O1xuICBtYXgtd2lkdGg6IDQwJTtcblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gIH1cbn1cblxuYXBwLWltYWdlLXNoZWxsLnJlbGF0ZWQtdXNlci1waWN0dXJlIHtcbiAgLS1pbWFnZS1zaGVsbC1ib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtZmFpci1yYWRpdXMpO1xufVxuXG4ucmVsYXRlZC11c2VyLW5hbWUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbiAgbWF4LXdpZHRoOiA4MCU7XG5cbiAgJi50ZXh0LWxvYWRlZCB7XG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICB9XG59XG4iLCJhcHAtaW1hZ2Utc2hlbGwudXNlci1pbWFnZSB7XG4gIC0taW1hZ2Utc2hlbGwtYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4udXNlci1uYW1lID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDI0cHg7XG59XG5cbi51c2VyLWFnZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xufVxuXG4uZXhwZXJpZW5jZS1sYWJlbCA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNnB4O1xuICBtYXgtd2lkdGg6IDQwJTtcbn1cbi5leHBlcmllbmNlLWxhYmVsID4gYXBwLXRleHQtc2hlbGwudGV4dC1sb2FkZWQge1xuICBtYXgtd2lkdGg6IGluaGVyaXQ7XG59XG5cbmFwcC1pbWFnZS1zaGVsbC5yZWxhdGVkLXVzZXItcGljdHVyZSB7XG4gIC0taW1hZ2Utc2hlbGwtYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLWZhaXItcmFkaXVzKTtcbn1cblxuLnJlbGF0ZWQtdXNlci1uYW1lID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG4gIG1heC13aWR0aDogODAlO1xufVxuLnJlbGF0ZWQtdXNlci1uYW1lID4gYXBwLXRleHQtc2hlbGwudGV4dC1sb2FkZWQge1xuICBtYXgtd2lkdGg6IGluaGVyaXQ7XG59Il19 */";
    /***/
  }
}]);
//# sourceMappingURL=user-details-firebase-user-details-module-es5.js.map