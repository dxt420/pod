(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-not-found-page-not-found-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/page-not-found/page-not-found.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page-not-found/page-not-found.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>\n      Page Not Found\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"not-found-content\">\n  <div class=\"illustration-wrapper\">\n    <app-aspect-ratio [ratio]=\"{w: 1, h: 1}\">\n      <app-image-shell [src]=\"'./assets/images/page-not-found.svg'\" [alt]=\"'not found page'\"></app-image-shell>\n    </app-aspect-ratio>\n  </div>\n  <div class=\"not-found-title\">404</div>\n  <div class=\"not-found-text\">Page not found</div>\n  <ion-button class=\"go-home-btn\" [routerLink]=\"['/app/categories']\" expand=\"block\" fill=\"outline\">Back to Home page</ion-button>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.module.ts ***!
  \*********************************************************/
/*! exports provided: PageNotFoundModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundModule", function() { return PageNotFoundModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _page_not_found_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page-not-found.page */ "./src/app/page-not-found/page-not-found.page.ts");








let PageNotFoundModule = class PageNotFoundModule {
};
PageNotFoundModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                {
                    path: '',
                    component: _page_not_found_page__WEBPACK_IMPORTED_MODULE_7__["PageNotFound"]
                }
            ])
        ],
        declarations: [_page_not_found_page__WEBPACK_IMPORTED_MODULE_7__["PageNotFound"]]
    })
], PageNotFoundModule);



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.page.ts ***!
  \*******************************************************/
/*! exports provided: PageNotFound */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFound", function() { return PageNotFound; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let PageNotFound = class PageNotFound {
    constructor(menu) {
        this.menu = menu;
    }
    ngOnInit() {
        this.menu.enable(false);
    }
};
PageNotFound.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] }
];
PageNotFound = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-not-found',
        template: __webpack_require__(/*! raw-loader!./page-not-found.page.html */ "./node_modules/raw-loader/index.js!./src/app/page-not-found/page-not-found.page.html"),
        styles: [__webpack_require__(/*! ./styles/page-not-found.page.scss */ "./src/app/page-not-found/styles/page-not-found.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])
], PageNotFound);



/***/ }),

/***/ "./src/app/page-not-found/styles/page-not-found.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/page-not-found/styles/page-not-found.page.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --page-margin: var(--app-fair-margin);\n}\n\n.not-found-content {\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  --padding-top: var(--page-margin);\n  --padding-bottom: var(--page-margin);\n}\n\n.not-found-content .illustration-wrapper {\n  margin: 0px 10%;\n}\n\n.not-found-content .not-found-title {\n  text-align: center;\n  font-size: 30px;\n  font-weight: 500;\n}\n\n.not-found-content .not-found-text {\n  text-align: center;\n  font-size: 22px;\n  margin-bottom: 40px;\n  font-weight: 500;\n}\n\n.not-found-content .go-home-btn {\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS1ub3QtZm91bmQvc3R5bGVzL0Q6XFxzaGl0XFxwb2Qvc3JjXFxhcHBcXHBhZ2Utbm90LWZvdW5kXFxzdHlsZXNcXHBhZ2Utbm90LWZvdW5kLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZS1ub3QtZm91bmQvc3R5bGVzL3BhZ2Utbm90LWZvdW5kLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHFDQUFBO0FDREY7O0FES0E7RUFDRSxtQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsaUNBQUE7RUFDQSxvQ0FBQTtBQ0ZGOztBRElFO0VBQ0UsZUFBQTtBQ0ZKOztBREtFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNISjs7QURNRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNKSjs7QURPRTtFQUNFLFdBQUE7QUNMSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3N0eWxlcy9wYWdlLW5vdC1mb3VuZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDdXN0b20gdmFyaWFibGVzXG4vLyBOb3RlOiAgVGhlc2Ugb25lcyB3ZXJlIGFkZGVkIGJ5IHVzIGFuZCBoYXZlIG5vdGhpbmcgdG8gZG8gd2l0aCBJb25pYyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWZhaXItbWFyZ2luKTtcbn1cblxuLy8gTm90ZTogIEFsbCB0aGUgQ1NTIHZhcmlhYmxlcyBkZWZpbmVkIGJlbG93IGFyZSBvdmVycmlkZXMgb2YgSW9uaWMgZWxlbWVudHMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXG4ubm90LWZvdW5kLWNvbnRlbnQge1xuICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgLS1wYWRkaW5nLWVuZDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAtLXBhZGRpbmctdG9wOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIC0tcGFkZGluZy1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcblxuICAuaWxsdXN0cmF0aW9uLXdyYXBwZXIge1xuICAgIG1hcmdpbjogMHB4IDEwJTtcbiAgfVxuXG4gIC5ub3QtZm91bmQtdGl0bGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuXG4gIC5ub3QtZm91bmQtdGV4dCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cblxuICAuZ28taG9tZS1idG4ge1xuICAgIG1hcmdpbjogMHB4O1xuICB9XG59XG4iLCI6aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1mYWlyLW1hcmdpbik7XG59XG5cbi5ub3QtZm91bmQtY29udGVudCB7XG4gIC0tcGFkZGluZy1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAtLXBhZGRpbmctZW5kOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIC0tcGFkZGluZy10b3A6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgLS1wYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xufVxuLm5vdC1mb3VuZC1jb250ZW50IC5pbGx1c3RyYXRpb24td3JhcHBlciB7XG4gIG1hcmdpbjogMHB4IDEwJTtcbn1cbi5ub3QtZm91bmQtY29udGVudCAubm90LWZvdW5kLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4ubm90LWZvdW5kLWNvbnRlbnQgLm5vdC1mb3VuZC10ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIycHg7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4ubm90LWZvdW5kLWNvbnRlbnQgLmdvLWhvbWUtYnRuIHtcbiAgbWFyZ2luOiAwcHg7XG59Il19 */"

/***/ })

}]);
//# sourceMappingURL=page-not-found-page-not-found-module-es2015.js.map