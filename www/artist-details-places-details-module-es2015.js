(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["artist-details-places-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/artist/details/places-details.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/artist/details/places-details.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"app/categories/travel\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Travel Details</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content class=\"travel-details-content\">\n<ion-fab vertical=\"top\" horizontal=\"start\" slot=\"fixed\">\n  <ion-fab-button >\n      <ion-back-button ion-fab-button defaultHref=\"app/user\"></ion-back-button>\n    <!-- <ion-icon name=\"arrow-back\"></ion-icon> -->\n  </ion-fab-button>\n</ion-fab>\n  <ion-row class=\"image-row\">\n     \n          \n    <ion-col size=\"12\">\n      <app-image-shell [mode]=\"'cover'\" animation=\"spinner\" class=\"add-overlay details-image\" [src]=\"'./assets/sample-images/xage.jpg'\">\n        <app-aspect-ratio [ratio]=\"{w:64, h:50}\">\n          <span class=\"checkbox-subtitle1\">Xage Mode</span>\n        </app-aspect-ratio>\n      </app-image-shell>\n    </ion-col>\n\n  </ion-row>\n  <ion-row class=\"description-row\">\n    <ion-col size=\"12\">\n      <!-- <h3 class=\"details-name\">\n        <app-text-shell animation=\"bouncing\" [data]=\"''\"></app-text-shell>\n      </h3> -->\n      <p class=\"details-short-description\">\n        <app-text-shell  animation=\"bouncing\" [data]=\"'Top Songs'\"></app-text-shell>\n      </p>\n    </ion-col>\n\n  \n   \n </ion-row>\n\n\n <ion-item class=\"notification-item\" lines=\"none\">\n  <ion-row class=\"notification-item-wrapper\">\n  \n    <ion-col class=\"details-wrapper\">\n      <h2 class=\"details-name\">Astrothunder</h2>\n      <p class=\"details-description\">Travis Scott ■ ASTROWORLD</p>\n    </ion-col>\n    <ion-col size=\"2\" class=\"date-wrapper\">\n      <h3 class=\"notification-date\">02:03</h3>\n    </ion-col>\n  </ion-row>\n</ion-item>\n\n<ion-item class=\"notification-item\" lines=\"none\">\n  <ion-row class=\"notification-item-wrapper\">\n  \n    <ion-col class=\"details-wrapper\">\n      <h2 class=\"details-name\">Astrothunder</h2>\n      <p class=\"details-description\">Travis Scott ■ ASTROWORLD</p>\n    </ion-col>\n    <ion-col size=\"2\" class=\"date-wrapper\">\n      <h3 class=\"notification-date\">02:03</h3>\n    </ion-col>\n  </ion-row>\n</ion-item>\n\n\n<ion-row class=\"description-row\">\n  <ion-col size=\"12\">\n    <!-- <h3 class=\"details-name\">\n      <app-text-shell animation=\"bouncing\" [data]=\"''\"></app-text-shell>\n    </h3> -->\n    <p class=\"details-short-description\">\n      <app-text-shell  animation=\"bouncing\" [data]=\"'Albums'\"></app-text-shell>\n    </p>\n    <div class=\"user-friends-section\">\n        <ion-row class=\"friends-row\">\n          <ion-col [routerLink]=\"['/app/user/album']\"class=\"friend-item\" size=\"3\" >\n            <app-aspect-ratio [ratio]=\"{w: 1, h: 1}\">\n              <app-image-shell class=\"friend-picture\" [src]=\"'./assets/sample-images/xage.jpg'\"></app-image-shell>\n            </app-aspect-ratio>\n            <span class=\"friend-name\">\n              <app-text-shell [data]=\"'Xage Mode'\"></app-text-shell>\n            </span>\n          </ion-col>\n          <ion-col [routerLink]=\"['/app/user/album']\"class=\"friend-item\" size=\"3\" >\n            <app-aspect-ratio [ratio]=\"{w: 1, h: 1}\">\n              <app-image-shell class=\"friend-picture\" [src]=\"'./assets/sample-images/xage.jpg'\"></app-image-shell>\n            </app-aspect-ratio>\n            <span class=\"friend-name\">\n              <app-text-shell [data]=\"'Xage Mode'\"></app-text-shell>\n            </span>\n          </ion-col>\n          <ion-col [routerLink]=\"['/app/user/album']\"class=\"friend-item\" size=\"3\" >\n            <app-aspect-ratio [ratio]=\"{w: 1, h: 1}\">\n              <app-image-shell class=\"friend-picture\" [src]=\"'./assets/sample-images/xage.jpg'\"></app-image-shell>\n            </app-aspect-ratio>\n            <span class=\"friend-name\">\n              <app-text-shell [data]=\"'Xage Mode'\"></app-text-shell>\n            </span>\n          </ion-col>\n        </ion-row>\n        </div>\n  </ion-col>\n\n\n \n</ion-row>\n\n\n\n\n<ion-row class=\"description-row\">\n  <ion-col size=\"12\">\n    <!-- <h3 class=\"details-name\">\n      <app-text-shell animation=\"bouncing\" [data]=\"''\"></app-text-shell>\n    </h3> -->\n    <p class=\"details-short-description\">\n      <app-text-shell  animation=\"bouncing\" [data]=\"'Singles & EPs'\"></app-text-shell>\n    </p>\n    <div class=\"user-friends-section\">\n    <ion-row class=\"friends-row\">\n      <ion-col [routerLink]=\"['/app/user/album']\"class=\"friend-item\" size=\"3\" >\n        <app-aspect-ratio [ratio]=\"{w: 1, h: 1}\">\n          <app-image-shell class=\"friend-picture\" [src]=\"'./assets/sample-images/xage.jpg'\"></app-image-shell>\n        </app-aspect-ratio>\n        <span class=\"friend-name\">\n          <app-text-shell [data]=\"'Xage Mode'\"></app-text-shell>\n        </span>\n      </ion-col>\n      <ion-col [routerLink]=\"['/app/user/album']\"class=\"friend-item\" size=\"3\" >\n        <app-aspect-ratio [ratio]=\"{w: 1, h: 1}\">\n          <app-image-shell class=\"friend-picture\" [src]=\"'./assets/sample-images/xage.jpg'\"></app-image-shell>\n        </app-aspect-ratio>\n        <span class=\"friend-name\">\n          <app-text-shell [data]=\"'Xage Mode'\"></app-text-shell>\n        </span>\n      </ion-col>\n      <ion-col [routerLink]=\"['/app/user/album']\"class=\"friend-item\" size=\"3\" >\n        <app-aspect-ratio [ratio]=\"{w: 1, h: 1}\">\n          <app-image-shell class=\"friend-picture\" [src]=\"'./assets/sample-images/xage.jpg'\"></app-image-shell>\n        </app-aspect-ratio>\n        <span class=\"friend-name\">\n          <app-text-shell [data]=\"'Xage Mode'\"></app-text-shell>\n        </span>\n      </ion-col>\n    </ion-row>\n    </div>\n  \n  </ion-col>\n\n\n \n</ion-row>\n\n \n \n<ion-row class=\"description-row\">\n  <ion-col size=\"12\">\n    <!-- <h3 class=\"details-name\">\n      <app-text-shell animation=\"bouncing\" [data]=\"''\"></app-text-shell>\n    </h3> -->\n    <p class=\"details-short-description\">\n      <app-text-shell  animation=\"bouncing\" [data]=\"'About'\"></app-text-shell>\n\n    </p>\n\n    <p class=\"details-description\">\n        <app-text-shell style=\"color:white; font-size: 13px;\" animation=\"bouncing\"  [data]=\"'Hailing from Namuwongo a suburb in the mid city of Uganda ,Kampala, Xage Mode real names Baguma Patrick is a home grown talent of crude bars that hails top of his city with break out hits like Cooperfield '\"></app-text-shell>\n\n    </p>\n  </ion-col>\n\n\n \n</ion-row>\n\n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/artist/details/places-details.model.ts":
/*!********************************************************!*\
  !*** ./src/app/artist/details/places-details.model.ts ***!
  \********************************************************/
/*! exports provided: PlacesDetailsModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacesDetailsModel", function() { return PlacesDetailsModel; });
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shell/data-store */ "./src/app/shell/data-store.ts");

class PlacesDetailsModel extends _shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"] {
    constructor() {
        super();
        this.tags = new Array(3).fill('');
        this.openHours = [
            {
                day: '',
                open: true,
                hourFrom: '',
                hourTo: ''
            },
            {
                day: '',
                open: true,
                hourFrom: '',
                hourTo: ''
            },
            {
                day: '',
                open: false,
                hourFrom: '',
                hourTo: ''
            }
        ];
        this.whereToStay = [
            {
                picture: '',
                name: '',
                rating: null
            },
            {
                picture: '',
                name: '',
                rating: null
            },
            {
                picture: '',
                name: '',
                rating: null
            }
        ];
        this.whereToEat = [
            {
                picture: '',
                name: '',
                rating: null
            },
            {
                picture: '',
                name: '',
                rating: null
            },
            {
                picture: '',
                name: '',
                rating: null
            }
        ];
        this.relatedActivities = [
            {
                picture: '',
                name: '',
                category: '',
                rating: null
            },
            {
                picture: '',
                name: '',
                category: '',
                rating: null
            }
        ];
    }
}


/***/ }),

/***/ "./src/app/artist/details/places-details.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/artist/details/places-details.module.ts ***!
  \*********************************************************/
/*! exports provided: PlacesDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacesDetailsPageModule", function() { return PlacesDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _places_details_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./places-details.page */ "./src/app/artist/details/places-details.page.ts");
/* harmony import */ var _places_details_resolver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./places-details.resolver */ "./src/app/artist/details/places-details.resolver.ts");
/* harmony import */ var _places_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../places.service */ "./src/app/artist/places.service.ts");











const routes = [
    {
        path: '',
        component: _places_details_page__WEBPACK_IMPORTED_MODULE_8__["PlacesDetailsPage"],
        resolve: {
            data: _places_details_resolver__WEBPACK_IMPORTED_MODULE_9__["PlacesDetailsResolver"]
        }
    }
];
let PlacesDetailsPageModule = class PlacesDetailsPageModule {
};
PlacesDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
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
            _places_details_page__WEBPACK_IMPORTED_MODULE_8__["PlacesDetailsPage"]
        ],
        providers: [
            _places_details_resolver__WEBPACK_IMPORTED_MODULE_9__["PlacesDetailsResolver"],
            _places_service__WEBPACK_IMPORTED_MODULE_10__["PlacesService"]
        ]
    })
], PlacesDetailsPageModule);



/***/ }),

/***/ "./src/app/artist/details/places-details.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/artist/details/places-details.page.ts ***!
  \*******************************************************/
/*! exports provided: PlacesDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacesDetailsPage", function() { return PlacesDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let PlacesDetailsPage = class PlacesDetailsPage {
    constructor(route, router) {
        this.route = route;
        this.router = router;
        this.slidesOptions = {
            zoom: {
                toggle: false // Disable zooming to prevent weird double tap zomming on slide images
            }
        };
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.details = this.router.getCurrentNavigation().extras.state.item;
                console.log(this.router.getCurrentNavigation().extras.state.item);
            }
        });
    }
    get isShell() {
        return (this.details && this.details.isShell) ? true : false;
    }
    ngOnInit() {
        // this.route.data.subscribe((resolvedRouteData) => {
        //   const detailsDataStore = resolvedRouteData['data'];
        //   detailsDataStore.state.subscribe(
        //     (state) => {
        //       this.details = state;
        //     },
        //     (error) => {}
        //   );
        // },
        // (error) => {});
    }
};
PlacesDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.is-shell'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PlacesDetailsPage.prototype, "isShell", null);
PlacesDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-places-details',
        template: __webpack_require__(/*! raw-loader!./places-details.page.html */ "./node_modules/raw-loader/index.js!./src/app/artist/details/places-details.page.html"),
        styles: [__webpack_require__(/*! ./styles/places-details.page.scss */ "./src/app/artist/details/styles/places-details.page.scss"), __webpack_require__(/*! ./styles/places-details.shell.scss */ "./src/app/artist/details/styles/places-details.shell.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], PlacesDetailsPage);



/***/ }),

/***/ "./src/app/artist/details/places-details.resolver.ts":
/*!***********************************************************!*\
  !*** ./src/app/artist/details/places-details.resolver.ts ***!
  \***********************************************************/
/*! exports provided: PlacesDetailsResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacesDetailsResolver", function() { return PlacesDetailsResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _places_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../places.service */ "./src/app/artist/places.service.ts");



let PlacesDetailsResolver = class PlacesDetailsResolver {
    constructor(placesService) {
        this.placesService = placesService;
    }
    resolve() {
        const dataSource = this.placesService.getDetailsDataSource();
        const dataStore = this.placesService.getDetailsStore(dataSource);
        return dataStore;
    }
};
PlacesDetailsResolver.ctorParameters = () => [
    { type: _places_service__WEBPACK_IMPORTED_MODULE_2__["PlacesService"] }
];
PlacesDetailsResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_places_service__WEBPACK_IMPORTED_MODULE_2__["PlacesService"]])
], PlacesDetailsResolver);



/***/ }),

/***/ "./src/app/artist/details/styles/places-details.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/artist/details/styles/places-details.page.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background);\n  --page-border-radius: var(--app-fair-radius);\n  --page-tags-vertical-gutter: 2px;\n  --page-tags-horizontal-gutter: 4px;\n  --page-places-gutter: 5px;\n  --page-friends-gutter: calc(var(--page-margin) / 2);\n  --page-color: #00AFFF;\n}\n\n.details-description {\n  line-height: 1.3;\n  font-size: 14px;\n}\n\n.friend-picture {\n  border-radius: var(--page-border-radius);\n}\n\n.user-about-section {\n  margin: calc(var(--page-margin) * 2) var(--page-margin) var(--page-margin);\n  padding-bottom: var(--page-margin);\n  border-bottom: 1px solid var(--ion-color-light-shade);\n}\n\n.user-about-section .user-description {\n  color: var(--ion-color-dark-shade);\n  text-align: justify;\n  margin: var(--page-margin) 0px;\n  font-size: 14px;\n  line-height: 1.3;\n}\n\n.user-friends-section {\n  padding-bottom: var(--page-margin);\n}\n\n.user-friends-section .heading-row {\n  margin-bottom: var(--page-margin);\n  justify-content: space-between;\n  align-items: center;\n}\n\n.user-friends-section .heading-row .details-section-title {\n  margin: 0px;\n}\n\n.user-friends-section .heading-row .details-section-titleX {\n  width: 100%;\n  font-weight: 500;\n  color: var(--ion-color-light);\n  margin: 0px 0px var(--page-margin);\n  margin: 0px;\n}\n\n.user-friends-section .heading-row .heading-call-to-action {\n  padding: calc(var(--page-margin) / 2) calc(var(--page-margin) / 4);\n  text-decoration: none;\n  color: var(--ion-color-secondary);\n}\n\n.user-friends-section .friends-row {\n  --ion-grid-columns: 7;\n  --ion-grid-column-padding: 0px;\n  flex-wrap: nowrap;\n  overflow-x: scroll;\n  will-change: scroll-position;\n  margin-left: calc(var(--page-margin) * -1);\n  margin-right: calc(var(--page-margin) * -1);\n  -ms-overflow-style: none;\n  overflow: -moz-scrollbars-none;\n  scrollbar-width: none;\n}\n\n.user-friends-section .friends-row::-webkit-scrollbar {\n  display: none;\n}\n\n.user-friends-section .friends-row::before, .user-friends-section .friends-row::after {\n  content: \"\";\n  flex: 0 0 calc(var(--page-margin) - var(--page-friends-gutter));\n}\n\n.user-friends-section .friends-row .friend-item {\n  padding: 0px var(--page-friends-gutter);\n}\n\n.user-friends-section .friends-row .friend-item .friend-name {\n  display: block;\n  text-align: center;\n  margin: var(--page-margin) 0px;\n  font-size: 14px;\n  color: white;\n}\n\nion-content {\n  --background: linear-gradient(to top, #060606, #690000);\n}\n\nion-item {\n  --ion-background-color: red !important;\n}\n\n.item, .list, .item-content, .item-complex {\n  --ion-background-color: transparent !important;\n}\n\nion-toolbar {\n  --background: #680000;\n}\n\n.notification-item {\n  --padding-start: 0px;\n  padding: 5px;\n  color: var(--ion-color-medium);\n  box-shadow: inset 0 8px 2px -9px var(--ion-color-darkest);\n}\n\n.notification-item .notification-item-wrapper {\n  --ion-grid-column-padding: 0px;\n  width: 100%;\n  align-items: center;\n}\n\n.notification-item .details-wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  padding-left: var(--page-margin);\n}\n\n.notification-item .details-wrapper .details-name {\n  margin-top: 0px;\n  margin-bottom: 5px;\n  font-size: 16px;\n  font-weight: 400;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-secondary);\n}\n\n.notification-item .details-wrapper .details-description {\n  font-size: 12px;\n  margin: 0px;\n}\n\n.notification-item .date-wrapper {\n  align-self: flex-start;\n}\n\n.notification-item .date-wrapper .notification-date {\n  margin: 0px;\n  font-size: 12px;\n  text-align: end;\n}\n\n.checkbox-subtitle1 {\n  font-weight: 500;\n  font-size: 25px;\n  color: var(--ion-color-lightest);\n  word-break: break-word;\n  overflow: visible;\n  position: absolute;\n  width: 70%;\n  left: 4%;\n  top: 93%;\n  transform: translateY(-50%);\n}\n\n.travel-details-content .image-row {\n  --ion-grid-column-padding: 0px;\n}\n\n.travel-details-content .image-row .icon-wrapper {\n  margin: 0px 15%;\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n}\n\n.travel-details-content .description-row {\n  --ion-grid-column-padding: 0px;\n  padding: var(--page-margin) var(--page-margin) calc(var(--page-margin) * 2);\n  padding-bottom: 0px;\n}\n\n.travel-details-content .description-row .details-name {\n  margin: 0px;\n  font-size: 20px;\n}\n\n.travel-details-content .description-row .details-short-description {\n  margin-top: calc(var(--page-margin) / 2);\n  margin-bottom: var(--page-margin);\n  font-size: 14px;\n  color: var(--ion-color-light);\n  font-weight: 600;\n  text-decoration: underline;\n}\n\n.travel-details-content .description-row .details-score {\n  display: flex;\n  justify-content: flex-start;\n  margin-bottom: var(--page-margin);\n}\n\n.travel-details-content .description-row .details-score .score-item {\n  display: flex;\n  align-items: center;\n}\n\n.travel-details-content .description-row .details-score .score-item:not(:last-child) {\n  padding-right: var(--page-margin);\n}\n\n.travel-details-content .description-row .details-score .score-item .score-icon {\n  font-size: 24px;\n  color: var(--ion-color-dark-tint);\n}\n\n.travel-details-content .description-row .details-score .score-item .score-value {\n  font-size: 16px;\n  margin-left: 4px;\n}\n\n.travel-details-content .description-row .details-tags {\n  --ion-grid-column-padding: 0px;\n  justify-content: center;\n  margin-top: calc(var(--page-tags-vertical-gutter) * -1);\n}\n\n.travel-details-content .description-row .details-tags .tag-wrapper {\n  padding: var(--page-tags-vertical-gutter) var(--page-tags-horizontal-gutter) var(--page-tags-vertical-gutter) 0px;\n  flex-grow: 0;\n  min-width: -webkit-fit-content;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n}\n\n.travel-details-content .description-row .details-tags .tag-wrapper:last-child {\n  padding-right: 0px;\n}\n\n.travel-details-content .description-row .details-tags .item-tag {\n  display: block;\n  border-radius: var(--app-narrow-radius);\n  border: 1px solid var(--ion-color-light-shade);\n  padding: var(--page-tags-vertical-gutter) var(--page-tags-horizontal-gutter);\n  font-size: 14px;\n  color: var(--ion-color-medium-tint);\n}\n\n.travel-details-content .description-row .details-description {\n  line-height: 1.3;\n  font-size: 14px;\n}\n\n.travel-details-content .detail-title {\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--ion-color-dark-tint);\n  margin: 0px 0px var(--page-margin);\n}\n\n.travel-details-content .open-hours-wrapper {\n  padding: 0px var(--page-margin) calc(var(--page-margin) * 2);\n}\n\n.travel-details-content .open-hours-wrapper .schedules-list {\n  list-style: none;\n  margin: 0px;\n  padding: 0px;\n}\n\n.travel-details-content .open-hours-wrapper .schedules-list .open-hour-item {\n  font-size: 14px;\n  color: var(--ion-color-medium-tint);\n}\n\n.travel-details-content .open-hours-wrapper .schedules-list .open-hour-item + .open-hour-item {\n  margin-top: calc(var(--page-margin) / 2);\n}\n\n.travel-details-content .open-hours-wrapper .schedules-list .open-hour-item .schedule-outer {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 75%;\n}\n\n.travel-details-content .open-hours-wrapper .schedules-list .open-hour-item .schedule-outer .schedule-day {\n  display: block;\n  padding-right: var(--page-margin);\n  width: 40%;\n  font-size: 14px;\n}\n\n.travel-details-content .open-hours-wrapper .schedules-list .open-hour-item .schedule-outer .schedule-hours {\n  flex: 1;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n\n.travel-details-content .open-hours-wrapper .schedules-list .open-hour-item .schedule-outer .schedule-hours .schedule-separator {\n  margin: 0px var(--page-margin);\n  line-height: 1;\n}\n\n.travel-details-content .open-hours-wrapper .schedules-list .open-hour-item .schedule-outer .schedule-hours .schedule-value {\n  flex: 0 1 25%;\n  font-weight: 500;\n}\n\n.travel-details-content .open-hours-wrapper .schedules-list .open-hour-item .schedule-outer .schedule-hours .schedule-value:first-child {\n  text-align: start;\n}\n\n.travel-details-content .open-hours-wrapper .schedules-list .open-hour-item .schedule-outer .schedule-hours .schedule-value:last-child {\n  text-align: end;\n}\n\n.travel-details-content .open-hours-wrapper .schedules-list .open-hour-item .schedule-outer .schedule-hours .schedule-closed {\n  text-transform: uppercase;\n  font-size: 12px;\n}\n\n.travel-details-content .location-wrapper {\n  padding: 0px 0px calc(var(--page-margin) * 2);\n}\n\n.travel-details-content .location-wrapper .location-header {\n  padding: 0px var(--page-margin) 0px;\n  margin-bottom: calc(var(--page-margin) / 2);\n}\n\n.travel-details-content .location-wrapper .detail-title {\n  margin-bottom: 5px;\n}\n\n.travel-details-content .location-wrapper .location-address {\n  display: block;\n  font-size: 14px;\n  color: var(--ion-color-medium-tint);\n}\n\n.travel-details-content .detail-alt-title {\n  text-align: center;\n  font-size: 18px;\n  font-weight: 400;\n  text-transform: uppercase;\n  color: var(--ion-color-dark-shade);\n  margin: 0px 0px var(--page-margin);\n}\n\n.travel-details-content .suggested-places-wrapper {\n  padding: 0px var(--page-margin) calc(var(--page-margin) * 2);\n}\n\n.travel-details-content .suggested-places-wrapper .suggested-places-row {\n  --ion-grid-column-padding: var(--page-places-gutter);\n  margin-left: calc(var(--page-places-gutter) * -1);\n  margin-right: calc(var(--page-places-gutter) * -1);\n}\n\n.travel-details-content .suggested-places-wrapper .suggested-places-row .suggested-place {\n  display: flex;\n  flex-direction: column;\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n\n.travel-details-content .suggested-places-wrapper .suggested-places-row .suggested-place .place-details {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.travel-details-content .suggested-places-wrapper .suggested-places-row .suggested-place .place-details .place-name {\n  font-size: 12px;\n  font-weight: 400;\n  margin: calc(var(--page-margin) / 2) 0px 5px;\n  text-align: center;\n}\n\n.travel-details-content .suggested-places-wrapper .suggested-places-row .suggested-place .place-details .place-rating {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.travel-details-content .suggested-places-wrapper .suggested-places-row .suggested-place .place-details .place-rating .rating-icon {\n  color: var(--page-color);\n}\n\n.travel-details-content .suggested-places-wrapper .suggested-places-row .suggested-place .place-details .place-rating .rating-value {\n  color: var(--page-color);\n  font-size: 14px;\n  margin-left: 4px;\n}\n\n.travel-details-content .related-activities-wrapper {\n  padding: 0px 0px calc(var(--page-margin) * 2);\n}\n\n.travel-details-content .related-activities-wrapper .related-activity {\n  --ion-grid-column-padding: 0px;\n}\n\n.travel-details-content .related-activities-wrapper .related-activity:not(:last-child) {\n  margin-bottom: var(--page-margin);\n}\n\n.travel-details-content .related-activities-wrapper .related-activity .activity-details {\n  text-align: center;\n  position: relative;\n}\n\n.travel-details-content .related-activities-wrapper .related-activity .activity-details .activity-name {\n  margin: 0px;\n  margin-top: 5px;\n  font-size: 14px;\n}\n\n.travel-details-content .related-activities-wrapper .related-activity .activity-details .activity-category {\n  display: block;\n  margin-top: 2px;\n  font-size: 12px;\n}\n\n.travel-details-content .related-activities-wrapper .related-activity .activity-details .activity-rating {\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin-top: 5px;\n  margin-right: var(--page-margin);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.travel-details-content .related-activities-wrapper .related-activity .activity-details .activity-rating .rating-icon {\n  color: var(--page-color);\n}\n\n.travel-details-content .related-activities-wrapper .related-activity .activity-details .activity-rating .rating-value {\n  color: var(--page-color);\n  font-size: 14px;\n  margin-left: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJ0aXN0L2RldGFpbHMvc3R5bGVzL0Q6XFxzaGl0XFxwb2Qvc3JjXFxhcHBcXGFydGlzdFxcZGV0YWlsc1xcc3R5bGVzXFxwbGFjZXMtZGV0YWlscy5wYWdlLnNjc3MiLCJzcmMvYXBwL2FydGlzdC9kZXRhaWxzL3N0eWxlcy9wbGFjZXMtZGV0YWlscy5wYWdlLnNjc3MiLCJzcmMvYXBwL2FydGlzdC9kZXRhaWxzL3N0eWxlcy9EOlxcc2hpdFxccG9kL3NyY1xcdGhlbWVcXG1peGluc1xcc2Nyb2xsYmFycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UscUNBQUE7RUFDQSx3Q0FBQTtFQUNBLDRDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQ0FBQTtFQUNBLHlCQUFBO0VBRUEsbURBQUE7RUFFQSxxQkFBQTtBQ0pGOztBRFFBO0VBRUUsZ0JBQUE7RUFDQSxlQUFBO0FDTkY7O0FEU0E7RUFDRSx3Q0FBQTtBQ05GOztBRFNBO0VBQ0UsMEVBQUE7RUFDQSxrQ0FBQTtFQUNBLHFEQUFBO0FDTkY7O0FEUUU7RUFDRSxrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNOSjs7QURVQTtFQUVFLGtDQUFBO0FDUkY7O0FEV0U7RUFDRSxpQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUNUSjs7QURXSTtFQUVFLFdBQUE7QUNWTjs7QURhSTtFQUNFLFdBQUE7RUFFQSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0NBQUE7RUFDQSxXQUFBO0FDWk47O0FEZUk7RUFDRSxrRUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUNBQUE7QUNiTjs7QURpQkU7RUFDRSxxQkFBQTtFQUNBLDhCQUFBO0VBRUEsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMENBQUE7RUFDQSwyQ0FBQTtFRTdFRix3QkFBQTtFQUdBLDhCQUFBO0VBQ0EscUJBQUE7QUQ0REY7O0FDekRFO0VBQ0UsYUFBQTtBRDJESjs7QURjSTtFQUVFLFdBQUE7RUFFQSwrREFBQTtBQ2ROOztBRGlCSTtFQUNFLHVDQUFBO0FDZk47O0FEaUJNO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ2ZSOztBRHFCQTtFQUNFLHVEQUFBO0FDbEJGOztBRHNCQTtFQUNFLHNDQUFBO0FDbkJGOztBRHVCRTtFQUNFLDhDQUFBO0FDcEJKOztBRHdCQTtFQUNFLHFCQUFBO0FDckJGOztBRHdCQTtFQUNFLG9CQUFBO0VBR0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EseURBQUE7QUN2QkY7O0FEeUJFO0VBQ0UsOEJBQUE7RUFFQSxXQUFBO0VBQ0EsbUJBQUE7QUN4Qko7O0FEMkJFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtBQ3pCSjs7QUQyQkk7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlDQUFBO0FDekJOOztBRDRCSTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FDMUJOOztBRDhCRTtFQUNFLHNCQUFBO0FDNUJKOztBRDhCSTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQzVCTjs7QURpQ0E7RUFDRSxnQkFBQTtFQUVBLGVBQUE7RUFDQSxnQ0FBQTtFQUVBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBRUEsUUFBQTtFQUNBLDJCQUFBO0FDakNGOztBRHlDRTtFQUNFLDhCQUFBO0FDdENKOztBRHdDSTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUN0Q047O0FEMENFO0VBQ0UsOEJBQUE7RUFFQSwyRUFBQTtFQUNBLG1CQUFBO0FDekNKOztBRDJDSTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FDekNOOztBRDRDSTtFQUNFLHdDQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0FDMUNOOztBRDZDSTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLGlDQUFBO0FDM0NOOztBRDZDTTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQzNDUjs7QUQ2Q1E7RUFDRSxpQ0FBQTtBQzNDVjs7QUQ4Q1E7RUFDRSxlQUFBO0VBQ0EsaUNBQUE7QUM1Q1Y7O0FEK0NRO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDN0NWOztBRGtESTtFQUNFLDhCQUFBO0VBRUEsdUJBQUE7RUFDQSx1REFBQTtBQ2pETjs7QURtRE07RUFDRSxpSEFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUFBLDJCQUFBO0VBQUEsc0JBQUE7QUNqRFI7O0FEbURRO0VBQ0Usa0JBQUE7QUNqRFY7O0FEcURNO0VBQ0UsY0FBQTtFQUNBLHVDQUFBO0VBQ0EsOENBQUE7RUFDQSw0RUFBQTtFQUNBLGVBQUE7RUFDQSxtQ0FBQTtBQ25EUjs7QUR1REk7RUFFRSxnQkFBQTtFQUNBLGVBQUE7QUN0RE47O0FEMERFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQ0FBQTtBQ3hESjs7QUQyREU7RUFDRSw0REFBQTtBQ3pESjs7QUQyREk7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDekROOztBRDJETTtFQUNFLGVBQUE7RUFDQSxtQ0FBQTtBQ3pEUjs7QUQyRFE7RUFDRSx3Q0FBQTtBQ3pEVjs7QUQ0RFE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLFVBQUE7QUMxRFY7O0FENERVO0VBQ0UsY0FBQTtFQUNBLGlDQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUMxRFo7O0FENkRVO0VBQ0UsT0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FDM0RaOztBRDZEWTtFQUNFLDhCQUFBO0VBQ0EsY0FBQTtBQzNEZDs7QUQ4RFk7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QUM1RGQ7O0FEOERjO0VBQ0UsaUJBQUE7QUM1RGhCOztBRDhEYztFQUNFLGVBQUE7QUM1RGhCOztBRGdFWTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtBQzlEZDs7QURzRUU7RUFDRSw2Q0FBQTtBQ3BFSjs7QURzRUk7RUFDRSxtQ0FBQTtFQUNBLDJDQUFBO0FDcEVOOztBRHVFSTtFQUNFLGtCQUFBO0FDckVOOztBRHdFSTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUNBQUE7QUN0RU47O0FEMEVFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtDQUFBO0VBQ0Esa0NBQUE7QUN4RUo7O0FEMkVFO0VBQ0UsNERBQUE7QUN6RUo7O0FEMkVJO0VBQ0Usb0RBQUE7RUFFQSxpREFBQTtFQUNBLGtEQUFBO0FDMUVOOztBRDRFTTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUMxRVI7O0FENEVRO0VBQ0UsT0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FDMUVWOztBRDRFVTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDRDQUFBO0VBQ0Esa0JBQUE7QUMxRVo7O0FENkVVO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUMzRVo7O0FENkVZO0VBQ0Usd0JBQUE7QUMzRWQ7O0FEOEVZO0VBQ0Usd0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUM1RWQ7O0FEb0ZFO0VBQ0UsNkNBQUE7QUNsRko7O0FEb0ZJO0VBQ0UsOEJBQUE7QUNsRk47O0FEb0ZNO0VBQ0UsaUNBQUE7QUNsRlI7O0FEcUZNO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQ25GUjs7QURxRlE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNuRlY7O0FEc0ZRO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDcEZWOztBRHVGUTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7RUFFQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ3RGVjs7QUR3RlU7RUFDRSx3QkFBQTtBQ3RGWjs7QUR5RlU7RUFDRSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ3ZGWiIsImZpbGUiOiJzcmMvYXBwL2FydGlzdC9kZXRhaWxzL3N0eWxlcy9wbGFjZXMtZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vdGhlbWUvbWl4aW5zL3Njcm9sbGJhcnNcIjtcbi8vIEN1c3RvbSB2YXJpYWJsZXNcbi8vIE5vdGU6ICBUaGVzZSBvbmVzIHdlcmUgYWRkZWQgYnkgdXMgYW5kIGhhdmUgbm90aGluZyB0byBkbyB3aXRoIElvbmljIENTUyBDdXN0b20gUHJvcGVydGllc1xuOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtZmFpci1tYXJnaW4pO1xuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xuICAtLXBhZ2UtYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLWZhaXItcmFkaXVzKTtcbiAgLS1wYWdlLXRhZ3MtdmVydGljYWwtZ3V0dGVyOiAycHg7XG4gIC0tcGFnZS10YWdzLWhvcml6b250YWwtZ3V0dGVyOiA0cHg7XG4gIC0tcGFnZS1wbGFjZXMtZ3V0dGVyOiA1cHg7XG5cbiAgLS1wYWdlLWZyaWVuZHMtZ3V0dGVyOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuXG4gIC0tcGFnZS1jb2xvcjogIzAwQUZGRjtcbn1cblxuXG4uZGV0YWlscy1kZXNjcmlwdGlvbiB7XG4gIC8vIG1hcmdpbjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKSAwcHggMHB4O1xuICBsaW5lLWhlaWdodDogMS4zO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5mcmllbmQtcGljdHVyZSB7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXBhZ2UtYm9yZGVyLXJhZGl1cyk7XG59XG5cbi51c2VyLWFib3V0LXNlY3Rpb24ge1xuICBtYXJnaW46IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMikgdmFyKC0tcGFnZS1tYXJnaW4pIHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgcGFkZGluZy1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG5cbiAgLnVzZXItZGVzY3JpcHRpb24ge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay1zaGFkZSk7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICBtYXJnaW46IHZhcigtLXBhZ2UtbWFyZ2luKSAwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjM7XG4gIH1cbn1cblxuLnVzZXItZnJpZW5kcy1zZWN0aW9uIHtcbiAgLy8gbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpIHZhcigtLXBhZ2UtbWFyZ2luKSB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIC8vIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuXG4gIC5oZWFkaW5nLXJvdyB7XG4gICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgLmRldGFpbHMtc2VjdGlvbi10aXRsZSB7XG4gICBcbiAgICAgIG1hcmdpbjogMHB4O1xuICAgIH1cblxuICAgIC5kZXRhaWxzLXNlY3Rpb24tdGl0bGVYIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgXG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgICBtYXJnaW46IDBweCAwcHggdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgICAgbWFyZ2luOiAwcHg7XG4gICAgfVxuXG4gICAgLmhlYWRpbmctY2FsbC10by1hY3Rpb24ge1xuICAgICAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDQpO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgIH1cbiAgfVxuXG4gIC5mcmllbmRzLXJvdyB7XG4gICAgLS1pb24tZ3JpZC1jb2x1bW5zOiA3OyAvLyBXZSB3YW50IHRvIHNob3cgdGhyZWUgZnJpZW5kcyBhbmQgYSBoYWxmLiBFYWNoIGZyaWVuZCBmaWxscyAyIGNvbHMgPT4gKDMuNSAqIDIgPSA3IGNvbHMpXG4gICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuXG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICAgIHdpbGwtY2hhbmdlOiBzY3JvbGwtcG9zaXRpb247XG4gICAgbWFyZ2luLWxlZnQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogLTEpO1xuICAgIG1hcmdpbi1yaWdodDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAtMSk7XG5cbiAgICBAaW5jbHVkZSBoaWRlLXNjcm9sbGJhcnMoKTtcblxuICAgICY6OmJlZm9yZSxcbiAgICAmOjphZnRlciB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIC8vIC5mcmllbmQtaXRlbSBoYXMgOHB4IG9mIHNpZGUgcGFkZGluZywgd2UgbmVlZCBhbiBleHRyYSA0cHggYXQgdGhlIGJlZ2lubmluZyBhbmQgZW5kIHRvIGZpbGwgdGhlIDEycHggc2lkZSBtYXJnaW4gb2YgdGhlIHZpZXdcbiAgICAgIGZsZXg6IDAgMCBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAtIHZhcigtLXBhZ2UtZnJpZW5kcy1ndXR0ZXIpKTtcbiAgICB9XG5cbiAgICAuZnJpZW5kLWl0ZW0ge1xuICAgICAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtZnJpZW5kcy1ndXR0ZXIpO1xuXG4gICAgICAuZnJpZW5kLW5hbWUge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW46IHZhcigtLXBhZ2UtbWFyZ2luKSAwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzA2MDYwNiwgIzY5MDAwMCk7XG5cbn1cblxuaW9uLWl0ZW0ge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiByZWQgIWltcG9ydGFudDtcbiAgfVxuXG5cbiAgLml0ZW0sIC5saXN0LCAuaXRlbS1jb250ZW50LCAuaXRlbS1jb21wbGV4IHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIH1cblxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogIzY4MDAwMDtcbn1cblxuLm5vdGlmaWNhdGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC8vIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcblxuICBwYWRkaW5nOiA1cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCA4cHggMnB4IC05cHggdmFyKC0taW9uLWNvbG9yLWRhcmtlc3QpO1xuXG4gIC5ub3RpZmljYXRpb24taXRlbS13cmFwcGVyIHtcbiAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG5cbiAgICB3aWR0aDogMTAwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgLmRldGFpbHMtd3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIHBhZGRpbmctbGVmdDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuXG4gICAgLmRldGFpbHMtbmFtZSB7XG4gICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgIH1cblxuICAgIC5kZXRhaWxzLWRlc2NyaXB0aW9uIHtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIG1hcmdpbjogMHB4O1xuICAgIH1cbiAgfVxuXG4gIC5kYXRlLXdyYXBwZXIge1xuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG5cbiAgICAubm90aWZpY2F0aW9uLWRhdGUge1xuICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICB0ZXh0LWFsaWduOiBlbmQ7XG4gICAgfVxuICB9XG59XG5cbi5jaGVja2JveC1zdWJ0aXRsZTEge1xuICBmb250LXdlaWdodDogNTAwO1xuICAvLyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDI1cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA3MCU7XG4gIGxlZnQ6IDQlO1xuICAvLyB2ZXJ0aWNhbGx5IGNlbnRlcmVkXG4gIHRvcDogOTMlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cblxuLy8gTm90ZTogIEFsbCB0aGUgQ1NTIHZhcmlhYmxlcyBkZWZpbmVkIGJlbG93IGFyZSBvdmVycmlkZXMgb2YgSW9uaWMgZWxlbWVudHMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXG4udHJhdmVsLWRldGFpbHMtY29udGVudCB7XG4gIC8vIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcblxuICAuaW1hZ2Utcm93IHtcbiAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG5cbiAgICAuaWNvbi13cmFwcGVyIHtcbiAgICAgIG1hcmdpbjogMHB4IDE1JTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuICB9XG5cbiAgLmRlc2NyaXB0aW9uLXJvdyB7XG4gICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuXG4gICAgcGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pIHZhcigtLXBhZ2UtbWFyZ2luKSBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpO1xuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG5cbiAgICAuZGV0YWlscy1uYW1lIHtcbiAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cblxuICAgIC5kZXRhaWxzLXNob3J0LWRlc2NyaXB0aW9uIHtcbiAgICAgIG1hcmdpbi10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICB9XG5cbiAgICAuZGV0YWlscy1zY29yZSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xuXG4gICAgICAuc2NvcmUtaXRlbSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgICAgIH1cblxuICAgICAgICAuc2NvcmUtaWNvbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zY29yZS12YWx1ZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZGV0YWlscy10YWdzIHtcbiAgICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBtYXJnaW4tdG9wOiBjYWxjKHZhcigtLXBhZ2UtdGFncy12ZXJ0aWNhbC1ndXR0ZXIpICogLTEpO1xuXG4gICAgICAudGFnLXdyYXBwZXIge1xuICAgICAgICBwYWRkaW5nOiB2YXIoLS1wYWdlLXRhZ3MtdmVydGljYWwtZ3V0dGVyKSB2YXIoLS1wYWdlLXRhZ3MtaG9yaXpvbnRhbC1ndXR0ZXIpIHZhcigtLXBhZ2UtdGFncy12ZXJ0aWNhbC1ndXR0ZXIpIDBweDtcbiAgICAgICAgZmxleC1ncm93OiAwO1xuICAgICAgICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xuXG4gICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMHB4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5pdGVtLXRhZyB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtbmFycm93LXJhZGl1cyk7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG4gICAgICAgIHBhZGRpbmc6IHZhcigtLXBhZ2UtdGFncy12ZXJ0aWNhbC1ndXR0ZXIpIHZhcigtLXBhZ2UtdGFncy1ob3Jpem9udGFsLWd1dHRlcik7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmRldGFpbHMtZGVzY3JpcHRpb24ge1xuICAgICAgLy8gbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpIDBweCAwcHg7XG4gICAgICBsaW5lLWhlaWdodDogMS4zO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbiAgfVxuXG4gIC5kZXRhaWwtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcbiAgICBtYXJnaW46IDBweCAwcHggdmFyKC0tcGFnZS1tYXJnaW4pO1xuICB9XG5cbiAgLm9wZW4taG91cnMtd3JhcHBlciB7XG4gICAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKSBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpO1xuXG4gICAgLnNjaGVkdWxlcy1saXN0IHtcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICAgIHBhZGRpbmc6IDBweDtcblxuICAgICAgLm9wZW4taG91ci1pdGVtIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcblxuICAgICAgICAmICsgLm9wZW4taG91ci1pdGVtIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNjaGVkdWxlLW91dGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIHdpZHRoOiA3NSU7XG5cbiAgICAgICAgICAuc2NoZWR1bGUtZGF5IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgICAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuc2NoZWR1bGUtaG91cnMge1xuICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAgICAgLnNjaGVkdWxlLXNlcGFyYXRvciB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zY2hlZHVsZS12YWx1ZSB7XG4gICAgICAgICAgICAgIGZsZXg6IDAgMSAyNSU7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG5cbiAgICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNjaGVkdWxlLWNsb3NlZCB7XG4gICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubG9jYXRpb24td3JhcHBlciB7XG4gICAgcGFkZGluZzogMHB4IDBweCBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpO1xuXG4gICAgLmxvY2F0aW9uLWhlYWRlciB7XG4gICAgICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1tYXJnaW4pIDBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgfVxuXG4gICAgLmRldGFpbC10aXRsZSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgfVxuXG4gICAgLmxvY2F0aW9uLWFkZHJlc3Mge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgICB9XG4gIH1cblxuICAuZGV0YWlsLWFsdC10aXRsZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXNoYWRlKTtcbiAgICBtYXJnaW46IDBweCAwcHggdmFyKC0tcGFnZS1tYXJnaW4pO1xuICB9XG5cbiAgLnN1Z2dlc3RlZC1wbGFjZXMtd3JhcHBlciB7XG4gICAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKSBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpO1xuXG4gICAgLnN1Z2dlc3RlZC1wbGFjZXMtcm93IHtcbiAgICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IHZhcigtLXBhZ2UtcGxhY2VzLWd1dHRlcik7XG5cbiAgICAgIG1hcmdpbi1sZWZ0OiBjYWxjKHZhcigtLXBhZ2UtcGxhY2VzLWd1dHRlcikgKiAtMSk7XG4gICAgICBtYXJnaW4tcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1wbGFjZXMtZ3V0dGVyKSAqIC0xKTtcblxuICAgICAgLnN1Z2dlc3RlZC1wbGFjZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG5cbiAgICAgICAgLnBsYWNlLWRldGFpbHMge1xuICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgICAgICAgIC5wbGFjZS1uYW1lIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICBtYXJnaW46IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgMHB4IDVweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucGxhY2UtcmF0aW5nIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgICAgIC5yYXRpbmctaWNvbiB7XG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wYWdlLWNvbG9yKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnJhdGluZy12YWx1ZSB7XG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wYWdlLWNvbG9yKTtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5yZWxhdGVkLWFjdGl2aXRpZXMtd3JhcHBlciB7XG4gICAgcGFkZGluZzogMHB4IDBweCBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpO1xuXG4gICAgLnJlbGF0ZWQtYWN0aXZpdHkge1xuICAgICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuXG4gICAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgICB9XG5cbiAgICAgIC5hY3Rpdml0eS1kZXRhaWxzIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgLmFjdGl2aXR5LW5hbWUge1xuICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuYWN0aXZpdHktY2F0ZWdvcnkge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIH1cblxuICAgICAgICAuYWN0aXZpdHktcmF0aW5nIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcblxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAgIC5yYXRpbmctaWNvbiB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tcGFnZS1jb2xvcik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnJhdGluZy12YWx1ZSB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tcGFnZS1jb2xvcik7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtZmFpci1tYXJnaW4pO1xuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xuICAtLXBhZ2UtYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLWZhaXItcmFkaXVzKTtcbiAgLS1wYWdlLXRhZ3MtdmVydGljYWwtZ3V0dGVyOiAycHg7XG4gIC0tcGFnZS10YWdzLWhvcml6b250YWwtZ3V0dGVyOiA0cHg7XG4gIC0tcGFnZS1wbGFjZXMtZ3V0dGVyOiA1cHg7XG4gIC0tcGFnZS1mcmllbmRzLWd1dHRlcjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgLS1wYWdlLWNvbG9yOiAjMDBBRkZGO1xufVxuXG4uZGV0YWlscy1kZXNjcmlwdGlvbiB7XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmZyaWVuZC1waWN0dXJlIHtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcGFnZS1ib3JkZXItcmFkaXVzKTtcbn1cblxuLnVzZXItYWJvdXQtc2VjdGlvbiB7XG4gIG1hcmdpbjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKSB2YXIoLS1wYWdlLW1hcmdpbikgdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbn1cbi51c2VyLWFib3V0LXNlY3Rpb24gLnVzZXItZGVzY3JpcHRpb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstc2hhZGUpO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBtYXJnaW46IHZhcigtLXBhZ2UtbWFyZ2luKSAwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEuMztcbn1cblxuLnVzZXItZnJpZW5kcy1zZWN0aW9uIHtcbiAgcGFkZGluZy1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cbi51c2VyLWZyaWVuZHMtc2VjdGlvbiAuaGVhZGluZy1yb3cge1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi51c2VyLWZyaWVuZHMtc2VjdGlvbiAuaGVhZGluZy1yb3cgLmRldGFpbHMtc2VjdGlvbi10aXRsZSB7XG4gIG1hcmdpbjogMHB4O1xufVxuLnVzZXItZnJpZW5kcy1zZWN0aW9uIC5oZWFkaW5nLXJvdyAuZGV0YWlscy1zZWN0aW9uLXRpdGxlWCB7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgbWFyZ2luOiAwcHggMHB4IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgbWFyZ2luOiAwcHg7XG59XG4udXNlci1mcmllbmRzLXNlY3Rpb24gLmhlYWRpbmctcm93IC5oZWFkaW5nLWNhbGwtdG8tYWN0aW9uIHtcbiAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDQpO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cbi51c2VyLWZyaWVuZHMtc2VjdGlvbiAuZnJpZW5kcy1yb3cge1xuICAtLWlvbi1ncmlkLWNvbHVtbnM6IDc7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgd2lsbC1jaGFuZ2U6IHNjcm9sbC1wb3NpdGlvbjtcbiAgbWFyZ2luLWxlZnQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogLTEpO1xuICBtYXJnaW4tcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogLTEpO1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG4gIG92ZXJmbG93OiAtbW96LXNjcm9sbGJhcnMtbm9uZTtcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xufVxuLnVzZXItZnJpZW5kcy1zZWN0aW9uIC5mcmllbmRzLXJvdzo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnVzZXItZnJpZW5kcy1zZWN0aW9uIC5mcmllbmRzLXJvdzo6YmVmb3JlLCAudXNlci1mcmllbmRzLXNlY3Rpb24gLmZyaWVuZHMtcm93OjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGZsZXg6IDAgMCBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAtIHZhcigtLXBhZ2UtZnJpZW5kcy1ndXR0ZXIpKTtcbn1cbi51c2VyLWZyaWVuZHMtc2VjdGlvbiAuZnJpZW5kcy1yb3cgLmZyaWVuZC1pdGVtIHtcbiAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtZnJpZW5kcy1ndXR0ZXIpO1xufVxuLnVzZXItZnJpZW5kcy1zZWN0aW9uIC5mcmllbmRzLXJvdyAuZnJpZW5kLWl0ZW0gLmZyaWVuZC1uYW1lIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiB2YXIoLS1wYWdlLW1hcmdpbikgMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICMwNjA2MDYsICM2OTAwMDApO1xufVxuXG5pb24taXRlbSB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHJlZCAhaW1wb3J0YW50O1xufVxuXG4uaXRlbSwgLmxpc3QsIC5pdGVtLWNvbnRlbnQsIC5pdGVtLWNvbXBsZXgge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogIzY4MDAwMDtcbn1cblxuLm5vdGlmaWNhdGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDhweCAycHggLTlweCB2YXIoLS1pb24tY29sb3ItZGFya2VzdCk7XG59XG4ubm90aWZpY2F0aW9uLWl0ZW0gLm5vdGlmaWNhdGlvbi1pdGVtLXdyYXBwZXIge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm5vdGlmaWNhdGlvbi1pdGVtIC5kZXRhaWxzLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG59XG4ubm90aWZpY2F0aW9uLWl0ZW0gLmRldGFpbHMtd3JhcHBlciAuZGV0YWlscy1uYW1lIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG59XG4ubm90aWZpY2F0aW9uLWl0ZW0gLmRldGFpbHMtd3JhcHBlciAuZGV0YWlscy1kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luOiAwcHg7XG59XG4ubm90aWZpY2F0aW9uLWl0ZW0gLmRhdGUtd3JhcHBlciB7XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG59XG4ubm90aWZpY2F0aW9uLWl0ZW0gLmRhdGUtd3JhcHBlciAubm90aWZpY2F0aW9uLWRhdGUge1xuICBtYXJnaW46IDBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWFsaWduOiBlbmQ7XG59XG5cbi5jaGVja2JveC1zdWJ0aXRsZTEge1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDI1cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNzAlO1xuICBsZWZ0OiA0JTtcbiAgdG9wOiA5MyU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuLnRyYXZlbC1kZXRhaWxzLWNvbnRlbnQgLmltYWdlLXJvdyB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcbn1cbi50cmF2ZWwtZGV0YWlscy1jb250ZW50IC5pbWFnZS1yb3cgLmljb24td3JhcHBlciB7XG4gIG1hcmdpbjogMHB4IDE1JTtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi50cmF2ZWwtZGV0YWlscy1jb250ZW50IC5kZXNjcmlwdGlvbi1yb3cge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG4gIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKSB2YXIoLS1wYWdlLW1hcmdpbikgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKTtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cbi50cmF2ZWwtZGV0YWlscy1jb250ZW50IC5kZXNjcmlwdGlvbi1yb3cgLmRldGFpbHMtbmFtZSB7XG4gIG1hcmdpbjogMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG59XG4udHJhdmVsLWRldGFpbHMtY29udGVudCAuZGVzY3JpcHRpb24tcm93IC5kZXRhaWxzLXNob3J0LWRlc2NyaXB0aW9uIHtcbiAgbWFyZ2luLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbi50cmF2ZWwtZGV0YWlscy1jb250ZW50IC5kZXNjcmlwdGlvbi1yb3cgLmRldGFpbHMtc2NvcmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cbi50cmF2ZWwtZGV0YWlscy1jb250ZW50IC5kZXNjcmlwdGlvbi1yb3cgLmRldGFpbHMtc2NvcmUgLnNjb3JlLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnRyYXZlbC1kZXRhaWxzLWNvbnRlbnQgLmRlc2NyaXB0aW9uLXJvdyAuZGV0YWlscy1zY29yZSAuc2NvcmUtaXRlbTpub3QoOmxhc3QtY2hpbGQpIHtcbiAgcGFkZGluZy1yaWdodDogdmFyKC0tcGFnZS1tYXJnaW4pO1xufVxuLnRyYXZlbC1kZXRhaWxzLWNvbnRlbnQgLmRlc2NyaXB0aW9uLXJvdyAuZGV0YWlscy1zY29yZSAuc2NvcmUtaXRlbSAuc2NvcmUtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xufVxuLnRyYXZlbC1kZXRhaWxzLWNvbnRlbnQgLmRlc2NyaXB0aW9uLXJvdyAuZGV0YWlscy1zY29yZSAuc2NvcmUtaXRlbSAuc2NvcmUtdmFsdWUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG59XG4udHJhdmVsLWRldGFpbHMtY29udGVudCAuZGVzY3JpcHRpb24tcm93IC5kZXRhaWxzLXRhZ3Mge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiBjYWxjKHZhcigtLXBhZ2UtdGFncy12ZXJ0aWNhbC1ndXR0ZXIpICogLTEpO1xufVxuLnRyYXZlbC1kZXRhaWxzLWNvbnRlbnQgLmRlc2NyaXB0aW9uLXJvdyAuZGV0YWlscy10YWdzIC50YWctd3JhcHBlciB7XG4gIHBhZGRpbmc6IHZhcigtLXBhZ2UtdGFncy12ZXJ0aWNhbC1ndXR0ZXIpIHZhcigtLXBhZ2UtdGFncy1ob3Jpem9udGFsLWd1dHRlcikgdmFyKC0tcGFnZS10YWdzLXZlcnRpY2FsLWd1dHRlcikgMHB4O1xuICBmbGV4LWdyb3c6IDA7XG4gIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XG59XG4udHJhdmVsLWRldGFpbHMtY29udGVudCAuZGVzY3JpcHRpb24tcm93IC5kZXRhaWxzLXRhZ3MgLnRhZy13cmFwcGVyOmxhc3QtY2hpbGQge1xuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG59XG4udHJhdmVsLWRldGFpbHMtY29udGVudCAuZGVzY3JpcHRpb24tcm93IC5kZXRhaWxzLXRhZ3MgLml0ZW0tdGFnIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1uYXJyb3ctcmFkaXVzKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbiAgcGFkZGluZzogdmFyKC0tcGFnZS10YWdzLXZlcnRpY2FsLWd1dHRlcikgdmFyKC0tcGFnZS10YWdzLWhvcml6b250YWwtZ3V0dGVyKTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbn1cbi50cmF2ZWwtZGV0YWlscy1jb250ZW50IC5kZXNjcmlwdGlvbi1yb3cgLmRldGFpbHMtZGVzY3JpcHRpb24ge1xuICBsaW5lLWhlaWdodDogMS4zO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4udHJhdmVsLWRldGFpbHMtY29udGVudCAuZGV0YWlsLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCk7XG4gIG1hcmdpbjogMHB4IDBweCB2YXIoLS1wYWdlLW1hcmdpbik7XG59XG4udHJhdmVsLWRldGFpbHMtY29udGVudCAub3Blbi1ob3Vycy13cmFwcGVyIHtcbiAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKSBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpO1xufVxuLnRyYXZlbC1kZXRhaWxzLWNvbnRlbnQgLm9wZW4taG91cnMtd3JhcHBlciAuc2NoZWR1bGVzLWxpc3Qge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xufVxuLnRyYXZlbC1kZXRhaWxzLWNvbnRlbnQgLm9wZW4taG91cnMtd3JhcHBlciAuc2NoZWR1bGVzLWxpc3QgLm9wZW4taG91ci1pdGVtIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbn1cbi50cmF2ZWwtZGV0YWlscy1jb250ZW50IC5vcGVuLWhvdXJzLXdyYXBwZXIgLnNjaGVkdWxlcy1saXN0IC5vcGVuLWhvdXItaXRlbSArIC5vcGVuLWhvdXItaXRlbSB7XG4gIG1hcmdpbi10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG59XG4udHJhdmVsLWRldGFpbHMtY29udGVudCAub3Blbi1ob3Vycy13cmFwcGVyIC5zY2hlZHVsZXMtbGlzdCAub3Blbi1ob3VyLWl0ZW0gLnNjaGVkdWxlLW91dGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogNzUlO1xufVxuLnRyYXZlbC1kZXRhaWxzLWNvbnRlbnQgLm9wZW4taG91cnMtd3JhcHBlciAuc2NoZWR1bGVzLWxpc3QgLm9wZW4taG91ci1pdGVtIC5zY2hlZHVsZS1vdXRlciAuc2NoZWR1bGUtZGF5IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmctcmlnaHQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgd2lkdGg6IDQwJTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLnRyYXZlbC1kZXRhaWxzLWNvbnRlbnQgLm9wZW4taG91cnMtd3JhcHBlciAuc2NoZWR1bGVzLWxpc3QgLm9wZW4taG91ci1pdGVtIC5zY2hlZHVsZS1vdXRlciAuc2NoZWR1bGUtaG91cnMge1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnRyYXZlbC1kZXRhaWxzLWNvbnRlbnQgLm9wZW4taG91cnMtd3JhcHBlciAuc2NoZWR1bGVzLWxpc3QgLm9wZW4taG91ci1pdGVtIC5zY2hlZHVsZS1vdXRlciAuc2NoZWR1bGUtaG91cnMgLnNjaGVkdWxlLXNlcGFyYXRvciB7XG4gIG1hcmdpbjogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG4udHJhdmVsLWRldGFpbHMtY29udGVudCAub3Blbi1ob3Vycy13cmFwcGVyIC5zY2hlZHVsZXMtbGlzdCAub3Blbi1ob3VyLWl0ZW0gLnNjaGVkdWxlLW91dGVyIC5zY2hlZHVsZS1ob3VycyAuc2NoZWR1bGUtdmFsdWUge1xuICBmbGV4OiAwIDEgMjUlO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLnRyYXZlbC1kZXRhaWxzLWNvbnRlbnQgLm9wZW4taG91cnMtd3JhcHBlciAuc2NoZWR1bGVzLWxpc3QgLm9wZW4taG91ci1pdGVtIC5zY2hlZHVsZS1vdXRlciAuc2NoZWR1bGUtaG91cnMgLnNjaGVkdWxlLXZhbHVlOmZpcnN0LWNoaWxkIHtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG59XG4udHJhdmVsLWRldGFpbHMtY29udGVudCAub3Blbi1ob3Vycy13cmFwcGVyIC5zY2hlZHVsZXMtbGlzdCAub3Blbi1ob3VyLWl0ZW0gLnNjaGVkdWxlLW91dGVyIC5zY2hlZHVsZS1ob3VycyAuc2NoZWR1bGUtdmFsdWU6bGFzdC1jaGlsZCB7XG4gIHRleHQtYWxpZ246IGVuZDtcbn1cbi50cmF2ZWwtZGV0YWlscy1jb250ZW50IC5vcGVuLWhvdXJzLXdyYXBwZXIgLnNjaGVkdWxlcy1saXN0IC5vcGVuLWhvdXItaXRlbSAuc2NoZWR1bGUtb3V0ZXIgLnNjaGVkdWxlLWhvdXJzIC5zY2hlZHVsZS1jbG9zZWQge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDEycHg7XG59XG4udHJhdmVsLWRldGFpbHMtY29udGVudCAubG9jYXRpb24td3JhcHBlciB7XG4gIHBhZGRpbmc6IDBweCAwcHggY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKTtcbn1cbi50cmF2ZWwtZGV0YWlscy1jb250ZW50IC5sb2NhdGlvbi13cmFwcGVyIC5sb2NhdGlvbi1oZWFkZXIge1xuICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1tYXJnaW4pIDBweDtcbiAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbn1cbi50cmF2ZWwtZGV0YWlscy1jb250ZW50IC5sb2NhdGlvbi13cmFwcGVyIC5kZXRhaWwtdGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4udHJhdmVsLWRldGFpbHMtY29udGVudCAubG9jYXRpb24td3JhcHBlciAubG9jYXRpb24tYWRkcmVzcyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xufVxuLnRyYXZlbC1kZXRhaWxzLWNvbnRlbnQgLmRldGFpbC1hbHQtdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXNoYWRlKTtcbiAgbWFyZ2luOiAwcHggMHB4IHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cbi50cmF2ZWwtZGV0YWlscy1jb250ZW50IC5zdWdnZXN0ZWQtcGxhY2VzLXdyYXBwZXIge1xuICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1tYXJnaW4pIGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMik7XG59XG4udHJhdmVsLWRldGFpbHMtY29udGVudCAuc3VnZ2VzdGVkLXBsYWNlcy13cmFwcGVyIC5zdWdnZXN0ZWQtcGxhY2VzLXJvdyB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IHZhcigtLXBhZ2UtcGxhY2VzLWd1dHRlcik7XG4gIG1hcmdpbi1sZWZ0OiBjYWxjKHZhcigtLXBhZ2UtcGxhY2VzLWd1dHRlcikgKiAtMSk7XG4gIG1hcmdpbi1yaWdodDogY2FsYyh2YXIoLS1wYWdlLXBsYWNlcy1ndXR0ZXIpICogLTEpO1xufVxuLnRyYXZlbC1kZXRhaWxzLWNvbnRlbnQgLnN1Z2dlc3RlZC1wbGFjZXMtd3JhcHBlciAuc3VnZ2VzdGVkLXBsYWNlcy1yb3cgLnN1Z2dlc3RlZC1wbGFjZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG4udHJhdmVsLWRldGFpbHMtY29udGVudCAuc3VnZ2VzdGVkLXBsYWNlcy13cmFwcGVyIC5zdWdnZXN0ZWQtcGxhY2VzLXJvdyAuc3VnZ2VzdGVkLXBsYWNlIC5wbGFjZS1kZXRhaWxzIHtcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLnRyYXZlbC1kZXRhaWxzLWNvbnRlbnQgLnN1Z2dlc3RlZC1wbGFjZXMtd3JhcHBlciAuc3VnZ2VzdGVkLXBsYWNlcy1yb3cgLnN1Z2dlc3RlZC1wbGFjZSAucGxhY2UtZGV0YWlscyAucGxhY2UtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIDBweCA1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi50cmF2ZWwtZGV0YWlscy1jb250ZW50IC5zdWdnZXN0ZWQtcGxhY2VzLXdyYXBwZXIgLnN1Z2dlc3RlZC1wbGFjZXMtcm93IC5zdWdnZXN0ZWQtcGxhY2UgLnBsYWNlLWRldGFpbHMgLnBsYWNlLXJhdGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnRyYXZlbC1kZXRhaWxzLWNvbnRlbnQgLnN1Z2dlc3RlZC1wbGFjZXMtd3JhcHBlciAuc3VnZ2VzdGVkLXBsYWNlcy1yb3cgLnN1Z2dlc3RlZC1wbGFjZSAucGxhY2UtZGV0YWlscyAucGxhY2UtcmF0aW5nIC5yYXRpbmctaWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1wYWdlLWNvbG9yKTtcbn1cbi50cmF2ZWwtZGV0YWlscy1jb250ZW50IC5zdWdnZXN0ZWQtcGxhY2VzLXdyYXBwZXIgLnN1Z2dlc3RlZC1wbGFjZXMtcm93IC5zdWdnZXN0ZWQtcGxhY2UgLnBsYWNlLWRldGFpbHMgLnBsYWNlLXJhdGluZyAucmF0aW5nLXZhbHVlIHtcbiAgY29sb3I6IHZhcigtLXBhZ2UtY29sb3IpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG59XG4udHJhdmVsLWRldGFpbHMtY29udGVudCAucmVsYXRlZC1hY3Rpdml0aWVzLXdyYXBwZXIge1xuICBwYWRkaW5nOiAwcHggMHB4IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMik7XG59XG4udHJhdmVsLWRldGFpbHMtY29udGVudCAucmVsYXRlZC1hY3Rpdml0aWVzLXdyYXBwZXIgLnJlbGF0ZWQtYWN0aXZpdHkge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG59XG4udHJhdmVsLWRldGFpbHMtY29udGVudCAucmVsYXRlZC1hY3Rpdml0aWVzLXdyYXBwZXIgLnJlbGF0ZWQtYWN0aXZpdHk6bm90KDpsYXN0LWNoaWxkKSB7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cbi50cmF2ZWwtZGV0YWlscy1jb250ZW50IC5yZWxhdGVkLWFjdGl2aXRpZXMtd3JhcHBlciAucmVsYXRlZC1hY3Rpdml0eSAuYWN0aXZpdHktZGV0YWlscyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnRyYXZlbC1kZXRhaWxzLWNvbnRlbnQgLnJlbGF0ZWQtYWN0aXZpdGllcy13cmFwcGVyIC5yZWxhdGVkLWFjdGl2aXR5IC5hY3Rpdml0eS1kZXRhaWxzIC5hY3Rpdml0eS1uYW1lIHtcbiAgbWFyZ2luOiAwcHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLnRyYXZlbC1kZXRhaWxzLWNvbnRlbnQgLnJlbGF0ZWQtYWN0aXZpdGllcy13cmFwcGVyIC5yZWxhdGVkLWFjdGl2aXR5IC5hY3Rpdml0eS1kZXRhaWxzIC5hY3Rpdml0eS1jYXRlZ29yeSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAycHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi50cmF2ZWwtZGV0YWlscy1jb250ZW50IC5yZWxhdGVkLWFjdGl2aXRpZXMtd3JhcHBlciAucmVsYXRlZC1hY3Rpdml0eSAuYWN0aXZpdHktZGV0YWlscyAuYWN0aXZpdHktcmF0aW5nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1yaWdodDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi50cmF2ZWwtZGV0YWlscy1jb250ZW50IC5yZWxhdGVkLWFjdGl2aXRpZXMtd3JhcHBlciAucmVsYXRlZC1hY3Rpdml0eSAuYWN0aXZpdHktZGV0YWlscyAuYWN0aXZpdHktcmF0aW5nIC5yYXRpbmctaWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1wYWdlLWNvbG9yKTtcbn1cbi50cmF2ZWwtZGV0YWlscy1jb250ZW50IC5yZWxhdGVkLWFjdGl2aXRpZXMtd3JhcHBlciAucmVsYXRlZC1hY3Rpdml0eSAuYWN0aXZpdHktZGV0YWlscyAuYWN0aXZpdHktcmF0aW5nIC5yYXRpbmctdmFsdWUge1xuICBjb2xvcjogdmFyKC0tcGFnZS1jb2xvcik7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbn0iLCIvLyBIaWRlIHNjcm9sbGJhcnM6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zODk5NDgzNy8xMTE2OTU5XG5AbWl4aW4gaGlkZS1zY3JvbGxiYXJzKCkge1xuICAvLyBJRSAxMCtcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuXG4gIC8vIEZpcmVmb3hcbiAgb3ZlcmZsb3c6IC1tb3otc2Nyb2xsYmFycy1ub25lO1xuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG5cbiAgLy8gU2FmYXJpIGFuZCBDaHJvbWVcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/artist/details/styles/places-details.shell.scss":
/*!*****************************************************************!*\
  !*** ./src/app/artist/details/styles/places-details.shell.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --shell-color: #00AFFF;\n  --shell-color-rgb: 0,175,255;\n}\n\napp-image-shell.details-image {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .10);\n  --image-shell-overlay-background: rgba(var(--ion-color-dark-rgb), .40);\n  --image-shell-spinner-color: rgba(var(--shell-color-rgb), .25);\n}\n\napp-image-shell.details-icon {\n  --image-shell-loading-background: transparent;\n}\n\n.details-name > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .20);\n  --text-shell-line-height: 20px;\n}\n\n.details-short-description > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 14px;\n  max-width: 80%;\n}\n\n.details-short-description > app-text-shell.text-loaded {\n  max-width: inherit;\n}\n\n.score-value > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .15);\n  --text-shell-line-height: 14px;\n  min-width: 30px;\n}\n\n.score-value > app-text-shell.text-loaded {\n  min-width: 0px;\n}\n\n.item-tag > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .15);\n  --text-shell-line-height: 14px;\n  min-width: 50px;\n}\n\n.item-tag > app-text-shell.text-loaded {\n  min-width: 0px;\n}\n\n.details-description > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 14px;\n}\n\n.schedule-day > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 14px;\n  max-width: 90%;\n}\n\n.schedule-day > app-text-shell.text-loaded {\n  max-width: inherit;\n}\n\n.schedule-value > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 14px;\n  max-width: 100%;\n}\n\n.schedule-value > app-text-shell.text-loaded {\n  max-width: inherit;\n}\n\n.location-address > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 14px;\n  max-width: 60%;\n}\n\n.location-address > app-text-shell.text-loaded {\n  max-width: inherit;\n}\n\napp-image-shell.location-image {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .10);\n  --image-shell-spinner-color: rgba(var(--shell-color-rgb), .25);\n}\n\napp-image-shell.place-picture {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .05);\n  --image-shell-spinner-color: rgba(var(--shell-color-rgb), .15);\n}\n\n.place-name > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 12px;\n}\n\n.rating-value > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .05);\n  --text-shell-line-height: 14px;\n  min-width: 30px;\n}\n\n.rating-value > app-text-shell.text-loaded {\n  min-width: 0px;\n}\n\napp-image-shell.related-activity-picture {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .05);\n  --image-shell-spinner-color: rgba(var(--shell-color-rgb), .15);\n}\n\n.activity-name > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .20);\n  --text-shell-line-height: 14px;\n  max-width: 25%;\n  margin: 0px auto;\n}\n\n.activity-name > app-text-shell.text-loaded {\n  max-width: inherit;\n  margin: 0px;\n}\n\n.activity-category > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 12px;\n  max-width: 45%;\n  margin: 0px auto;\n}\n\n.activity-category > app-text-shell.text-loaded {\n  max-width: inherit;\n  margin: 0px;\n}\n\n.rating-value > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .15);\n  --text-shell-line-height: 14px;\n  min-width: 30px;\n}\n\n.rating-value > app-text-shell.text-loaded {\n  min-width: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJ0aXN0L2RldGFpbHMvc3R5bGVzL0Q6XFxzaGl0XFxwb2Qvc3JjXFxhcHBcXGFydGlzdFxcZGV0YWlsc1xcc3R5bGVzXFxwbGFjZXMtZGV0YWlscy5zaGVsbC5zY3NzIiwic3JjL2FwcC9hcnRpc3QvZGV0YWlscy9zdHlsZXMvcGxhY2VzLWRldGFpbHMuc2hlbGwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHNCQUFBO0VBQ0EsNEJBQUE7QUNERjs7QURXQTtFQUNFLG1FQUFBO0VBQ0Esc0VBQUE7RUFDQSw4REFBQTtBQ1JGOztBRFdBO0VBQ0UsNkNBQUE7QUNSRjs7QURXQTtFQUNFLDBEQUFBO0VBQ0EsOEJBQUE7QUNSRjs7QURZQTtFQUNFLDBEQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0FDVEY7O0FEV0U7RUFDRSxrQkFBQTtBQ1RKOztBRGFBO0VBQ0UsMERBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUNWRjs7QURZRTtFQUNFLGNBQUE7QUNWSjs7QURjQTtFQUNFLDBEQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FDWEY7O0FEYUU7RUFDRSxjQUFBO0FDWEo7O0FEZUE7RUFDRSwwREFBQTtFQUNBLDhCQUFBO0FDWkY7O0FEZUE7RUFDRSwwREFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtBQ1pGOztBRGNFO0VBQ0Usa0JBQUE7QUNaSjs7QURnQkE7RUFDRSwwREFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQ2JGOztBRGVFO0VBQ0Usa0JBQUE7QUNiSjs7QURpQkE7RUFDRSwwREFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtBQ2RGOztBRGdCRTtFQUNFLGtCQUFBO0FDZEo7O0FEa0JBO0VBQ0UsbUVBQUE7RUFDQSw4REFBQTtBQ2ZGOztBRGtCQTtFQUNFLG1FQUFBO0VBQ0EsOERBQUE7QUNmRjs7QURrQkE7RUFDRSwwREFBQTtFQUNBLDhCQUFBO0FDZkY7O0FEa0JBO0VBQ0UsMERBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUNmRjs7QURpQkU7RUFDRSxjQUFBO0FDZko7O0FEbUJBO0VBQ0UsbUVBQUE7RUFDQSw4REFBQTtBQ2hCRjs7QURtQkE7RUFDRSwwREFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDaEJGOztBRGtCRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQ2hCSjs7QURvQkE7RUFDRSwwREFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDakJGOztBRG1CRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQ2pCSjs7QURxQkE7RUFDRSwwREFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQ2xCRjs7QURvQkU7RUFDRSxjQUFBO0FDbEJKIiwiZmlsZSI6InNyYy9hcHAvYXJ0aXN0L2RldGFpbHMvc3R5bGVzL3BsYWNlcy1kZXRhaWxzLnNoZWxsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDdXN0b20gdmFyaWFibGVzXG4vLyBOb3RlOiAgVGhlc2Ugb25lcyB3ZXJlIGFkZGVkIGJ5IHVzIGFuZCBoYXZlIG5vdGhpbmcgdG8gZG8gd2l0aCBJb25pYyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbjpob3N0IHtcbiAgLS1zaGVsbC1jb2xvcjogIzAwQUZGRjtcbiAgLS1zaGVsbC1jb2xvci1yZ2I6IDAsMTc1LDI1NTtcbn1cblxuLy8gWW91IGNhbiBhbHNvIGFwcGx5IHNoZWVsIHN0eWxlcyB0byB0aGUgZW50aXJlIHBhZ2Vcbjpob3N0KC5pcy1zaGVsbCkge1xuICAvLyBpb24tY29udGVudCB7XG4gIC8vICAgb3BhY2l0eTogMC44O1xuICAvLyB9XG59XG5cbmFwcC1pbWFnZS1zaGVsbC5kZXRhaWxzLWltYWdlIHtcbiAgLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQ6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcbiAgLS1pbWFnZS1zaGVsbC1vdmVybGF5LWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLWRhcmstcmdiKSwgLjQwKTtcbiAgLS1pbWFnZS1zaGVsbC1zcGlubmVyLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4yNSk7XG59XG5cbmFwcC1pbWFnZS1zaGVsbC5kZXRhaWxzLWljb24ge1xuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5kZXRhaWxzLW5hbWUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4yMCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMjBweDtcbn1cblxuXG4uZGV0YWlscy1zaG9ydC1kZXNjcmlwdGlvbiA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xuICBtYXgtd2lkdGg6IDgwJTtcblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gIH1cbn1cblxuLnNjb3JlLXZhbHVlID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTUpO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG4gIG1pbi13aWR0aDogMzBweDtcblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBtaW4td2lkdGg6IDBweDtcbiAgfVxufVxuXG4uaXRlbS10YWcgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xNSk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbiAgbWluLXdpZHRoOiA1MHB4O1xuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIG1pbi13aWR0aDogMHB4O1xuICB9XG59XG5cbi5kZXRhaWxzLWRlc2NyaXB0aW9uID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG59XG5cbi5zY2hlZHVsZS1kYXkgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbiAgbWF4LXdpZHRoOiA5MCU7XG5cbiAgJi50ZXh0LWxvYWRlZCB7XG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICB9XG59XG5cbi5zY2hlZHVsZS12YWx1ZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG5cbiAgJi50ZXh0LWxvYWRlZCB7XG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICB9XG59XG5cbi5sb2NhdGlvbi1hZGRyZXNzID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG4gIG1heC13aWR0aDogNjAlO1xuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIG1heC13aWR0aDogaW5oZXJpdDtcbiAgfVxufVxuXG5hcHAtaW1hZ2Utc2hlbGwubG9jYXRpb24taW1hZ2Uge1xuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLWltYWdlLXNoZWxsLXNwaW5uZXItY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjI1KTtcbn1cblxuYXBwLWltYWdlLXNoZWxsLnBsYWNlLXBpY3R1cmUge1xuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMDUpO1xuICAtLWltYWdlLXNoZWxsLXNwaW5uZXItY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjE1KTtcbn1cblxuLnBsYWNlLW5hbWUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTJweDtcbn1cblxuLnJhdGluZy12YWx1ZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjA1KTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xuICBtaW4td2lkdGg6IDMwcHg7XG5cbiAgJi50ZXh0LWxvYWRlZCB7XG4gICAgbWluLXdpZHRoOiAwcHg7XG4gIH1cbn1cblxuYXBwLWltYWdlLXNoZWxsLnJlbGF0ZWQtYWN0aXZpdHktcGljdHVyZSB7XG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4wNSk7XG4gIC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTUpO1xufVxuXG4uYWN0aXZpdHktbmFtZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjIwKTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xuICBtYXgtd2lkdGg6IDI1JTtcbiAgbWFyZ2luOiAwcHggYXV0bztcblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gICAgbWFyZ2luOiAwcHg7XG4gIH1cbn1cblxuLmFjdGl2aXR5LWNhdGVnb3J5ID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDEycHg7XG4gIG1heC13aWR0aDogNDUlO1xuICBtYXJnaW46IDBweCBhdXRvO1xuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIG1heC13aWR0aDogaW5oZXJpdDtcbiAgICBtYXJnaW46IDBweDtcbiAgfVxufVxuXG4ucmF0aW5nLXZhbHVlID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTUpO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG4gIG1pbi13aWR0aDogMzBweDtcblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBtaW4td2lkdGg6IDBweDtcbiAgfVxufVxuIiwiOmhvc3Qge1xuICAtLXNoZWxsLWNvbG9yOiAjMDBBRkZGO1xuICAtLXNoZWxsLWNvbG9yLXJnYjogMCwxNzUsMjU1O1xufVxuXG5hcHAtaW1hZ2Utc2hlbGwuZGV0YWlscy1pbWFnZSB7XG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG4gIC0taW1hZ2Utc2hlbGwtb3ZlcmxheS1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1kYXJrLXJnYiksIC40MCk7XG4gIC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMjUpO1xufVxuXG5hcHAtaW1hZ2Utc2hlbGwuZGV0YWlscy1pY29uIHtcbiAgLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uZGV0YWlscy1uYW1lID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMjApO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDIwcHg7XG59XG5cbi5kZXRhaWxzLXNob3J0LWRlc2NyaXB0aW9uID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG4gIG1heC13aWR0aDogODAlO1xufVxuLmRldGFpbHMtc2hvcnQtZGVzY3JpcHRpb24gPiBhcHAtdGV4dC1zaGVsbC50ZXh0LWxvYWRlZCB7XG4gIG1heC13aWR0aDogaW5oZXJpdDtcbn1cblxuLnNjb3JlLXZhbHVlID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTUpO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG4gIG1pbi13aWR0aDogMzBweDtcbn1cbi5zY29yZS12YWx1ZSA+IGFwcC10ZXh0LXNoZWxsLnRleHQtbG9hZGVkIHtcbiAgbWluLXdpZHRoOiAwcHg7XG59XG5cbi5pdGVtLXRhZyA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjE1KTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xuICBtaW4td2lkdGg6IDUwcHg7XG59XG4uaXRlbS10YWcgPiBhcHAtdGV4dC1zaGVsbC50ZXh0LWxvYWRlZCB7XG4gIG1pbi13aWR0aDogMHB4O1xufVxuXG4uZGV0YWlscy1kZXNjcmlwdGlvbiA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xufVxuXG4uc2NoZWR1bGUtZGF5ID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG4gIG1heC13aWR0aDogOTAlO1xufVxuLnNjaGVkdWxlLWRheSA+IGFwcC10ZXh0LXNoZWxsLnRleHQtbG9hZGVkIHtcbiAgbWF4LXdpZHRoOiBpbmhlcml0O1xufVxuXG4uc2NoZWR1bGUtdmFsdWUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuLnNjaGVkdWxlLXZhbHVlID4gYXBwLXRleHQtc2hlbGwudGV4dC1sb2FkZWQge1xuICBtYXgtd2lkdGg6IGluaGVyaXQ7XG59XG5cbi5sb2NhdGlvbi1hZGRyZXNzID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG4gIG1heC13aWR0aDogNjAlO1xufVxuLmxvY2F0aW9uLWFkZHJlc3MgPiBhcHAtdGV4dC1zaGVsbC50ZXh0LWxvYWRlZCB7XG4gIG1heC13aWR0aDogaW5oZXJpdDtcbn1cblxuYXBwLWltYWdlLXNoZWxsLmxvY2F0aW9uLWltYWdlIHtcbiAgLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQ6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcbiAgLS1pbWFnZS1zaGVsbC1zcGlubmVyLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4yNSk7XG59XG5cbmFwcC1pbWFnZS1zaGVsbC5wbGFjZS1waWN0dXJlIHtcbiAgLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQ6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjA1KTtcbiAgLS1pbWFnZS1zaGVsbC1zcGlubmVyLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xNSk7XG59XG5cbi5wbGFjZS1uYW1lID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDEycHg7XG59XG5cbi5yYXRpbmctdmFsdWUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4wNSk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbiAgbWluLXdpZHRoOiAzMHB4O1xufVxuLnJhdGluZy12YWx1ZSA+IGFwcC10ZXh0LXNoZWxsLnRleHQtbG9hZGVkIHtcbiAgbWluLXdpZHRoOiAwcHg7XG59XG5cbmFwcC1pbWFnZS1zaGVsbC5yZWxhdGVkLWFjdGl2aXR5LXBpY3R1cmUge1xuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMDUpO1xuICAtLWltYWdlLXNoZWxsLXNwaW5uZXItY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjE1KTtcbn1cblxuLmFjdGl2aXR5LW5hbWUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4yMCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbiAgbWF4LXdpZHRoOiAyNSU7XG4gIG1hcmdpbjogMHB4IGF1dG87XG59XG4uYWN0aXZpdHktbmFtZSA+IGFwcC10ZXh0LXNoZWxsLnRleHQtbG9hZGVkIHtcbiAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICBtYXJnaW46IDBweDtcbn1cblxuLmFjdGl2aXR5LWNhdGVnb3J5ID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDEycHg7XG4gIG1heC13aWR0aDogNDUlO1xuICBtYXJnaW46IDBweCBhdXRvO1xufVxuLmFjdGl2aXR5LWNhdGVnb3J5ID4gYXBwLXRleHQtc2hlbGwudGV4dC1sb2FkZWQge1xuICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4ucmF0aW5nLXZhbHVlID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTUpO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG4gIG1pbi13aWR0aDogMzBweDtcbn1cbi5yYXRpbmctdmFsdWUgPiBhcHAtdGV4dC1zaGVsbC50ZXh0LWxvYWRlZCB7XG4gIG1pbi13aWR0aDogMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/artist/listing/places-listing.model.ts":
/*!********************************************************!*\
  !*** ./src/app/artist/listing/places-listing.model.ts ***!
  \********************************************************/
/*! exports provided: PlacesItemModel, PlacesListingModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacesItemModel", function() { return PlacesItemModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacesListingModel", function() { return PlacesListingModel; });
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shell/data-store */ "./src/app/shell/data-store.ts");

class PlacesItemModel {
}
class PlacesListingModel extends _shell_data_store__WEBPACK_IMPORTED_MODULE_0__["ShellModel"] {
    constructor() {
        super();
        this.items = [
            new PlacesItemModel(),
            new PlacesItemModel(),
            new PlacesItemModel(),
            new PlacesItemModel()
        ];
    }
}


/***/ }),

/***/ "./src/app/artist/places.service.ts":
/*!******************************************!*\
  !*** ./src/app/artist/places.service.ts ***!
  \******************************************/
/*! exports provided: PlacesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacesService", function() { return PlacesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _shell_data_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shell/data-store */ "./src/app/shell/data-store.ts");
/* harmony import */ var _listing_places_listing_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./listing/places-listing.model */ "./src/app/artist/listing/places-listing.model.ts");
/* harmony import */ var _details_places_details_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./details/places-details.model */ "./src/app/artist/details/places-details.model.ts");






let PlacesService = class PlacesService {
    constructor(http) {
        this.http = http;
    }
    getListingDataSource() {
        return this.http.get('./assets/sample-data/places/listing.json');
    }
    getListingStore(dataSource) {
        // Use cache if available
        if (!this.listingDataStore) {
            // Initialize the model specifying that it is a shell model
            const shellModel = new _listing_places_listing_model__WEBPACK_IMPORTED_MODULE_4__["PlacesListingModel"]();
            this.listingDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_3__["DataStore"](shellModel);
            // Trigger the loading mechanism (with shell) in the dataStore
            this.listingDataStore.load(dataSource);
        }
        return this.listingDataStore;
    }
    getDetailsDataSource() {
        return this.http.get('./assets/sample-data/places/details.json');
    }
    getDetailsStore(dataSource) {
        // Use cache if available
        if (!this.detailsDataStore) {
            // Initialize the model specifying that it is a shell model
            const shellModel = new _details_places_details_model__WEBPACK_IMPORTED_MODULE_5__["PlacesDetailsModel"]();
            this.detailsDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_3__["DataStore"](shellModel);
            // Trigger the loading mechanism (with shell) in the dataStore
            this.detailsDataStore.load(dataSource);
        }
        return this.detailsDataStore;
    }
};
PlacesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
PlacesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], PlacesService);



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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _config_app_shell_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config/app-shell.config */ "./src/app/shell/config/app-shell.config.ts");



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
        this.networkDelay = (_config_app_shell_config__WEBPACK_IMPORTED_MODULE_2__["AppShellConfig"].settings && _config_app_shell_config__WEBPACK_IMPORTED_MODULE_2__["AppShellConfig"].settings.networkDelay) ? _config_app_shell_config__WEBPACK_IMPORTED_MODULE_2__["AppShellConfig"].settings.networkDelay : 0;
        this.timeline = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"](1);
    }
    // Static function with generics
    // (ref: https://stackoverflow.com/a/24293088/1116959)
    // Append a shell (T & ShellModel) to every value (T) emmited to the timeline
    static AppendShell(dataObservable, shellModel, networkDelay = 400) {
        const delayObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(true).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(networkDelay));
        // Assign shell flag accordingly
        // (ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["combineLatest"])([
            delayObservable,
            dataObservable
        ]).pipe(
        // Dismiss unnecessary delayValue
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(([delayValue, dataValue]) => Object.assign(dataValue, { isShell: false })), 
        // Set the shell model as the initial value
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["startWith"])(Object.assign(shellModel, { isShell: true })));
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
DataStore.ctorParameters = () => [
    { type: undefined }
];


/***/ })

}]);
//# sourceMappingURL=artist-details-places-details-module-es2015.js.map