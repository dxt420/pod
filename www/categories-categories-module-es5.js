(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["categories-categories-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/categories/categories.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/categories/categories.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Categories\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row class=\"categories-list\">\n    <ion-col class=\"category-item travel-category\" size=\"12\">\n      <app-image-shell [mode]=\"'cover'\" class=\"category-cover\" animation=\"spinner\" [src]=\"'./assets/sample-images/categories/travel.png'\">\n        <app-aspect-ratio [ratio]=\"{w:75, h:49}\">\n          <a class=\"category-anchor\" [routerLink]=\"['/app/categories/travel']\">\n            <h2 class=\"category-title\">Travel</h2>\n          </a>\n        </app-aspect-ratio>\n      </app-image-shell>\n    </ion-col>\n    <ion-col class=\"category-item fashion-category\" size=\"6\">\n      <app-image-shell [mode]=\"'cover'\" class=\"category-cover\" animation=\"spinner\" [src]=\"'./assets/sample-images/categories/fashion.png'\">\n        <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\n          <a class=\"category-anchor\" [routerLink]=\"['/app/categories/fashion']\">\n            <h2 class=\"category-title\">Fashion</h2>\n          </a>\n        </app-aspect-ratio>\n      </app-image-shell>\n    </ion-col>\n    <ion-col class=\"category-item food-category\" size=\"6\">\n      <app-image-shell [mode]=\"'cover'\" class=\"category-cover\" animation=\"spinner\" [src]=\"'./assets/sample-images/categories/food.png'\">\n        <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\n          <a class=\"category-anchor\" [routerLink]=\"['/app/categories/food']\">\n            <h2 class=\"category-title\">Food</h2>\n          </a>\n        </app-aspect-ratio>\n      </app-image-shell>\n    </ion-col>\n    <ion-col class=\"category-item deals-category\" size=\"12\">\n      <app-image-shell [mode]=\"'cover'\" class=\"category-cover\" animation=\"spinner\" [src]=\"'./assets/sample-images/categories/deals.png'\">\n        <app-aspect-ratio [ratio]=\"{w:75, h:30}\">\n          <a class=\"category-anchor\" [routerLink]=\"['/app/categories/deals']\">\n            <h2 class=\"category-title\">Deals</h2>\n          </a>\n        </app-aspect-ratio>\n      </app-image-shell>\n    </ion-col>\n    <ion-col class=\"category-item real-state-category\" size=\"12\">\n      <app-image-shell [mode]=\"'cover'\" class=\"category-cover\" animation=\"spinner\" [src]=\"'./assets/sample-images/categories/real-state.png'\">\n        <app-aspect-ratio [ratio]=\"{w:75, h:30}\">\n          <a class=\"category-anchor\" [routerLink]=\"['/app/categories/real-state']\">\n            <h2 class=\"category-title\">Real State</h2>\n          </a>\n        </app-aspect-ratio>\n      </app-image-shell>\n    </ion-col>\n  </ion-row>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/categories/categories.module.ts":
/*!*************************************************!*\
  !*** ./src/app/categories/categories.module.ts ***!
  \*************************************************/
/*! exports provided: CategoriesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesPageModule", function() { return CategoriesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _categories_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./categories.page */ "./src/app/categories/categories.page.ts");








var categoriesRoutes = [
    {
        path: '',
        component: _categories_page__WEBPACK_IMPORTED_MODULE_7__["CategoriesPage"]
    }
];
var CategoriesPageModule = /** @class */ (function () {
    function CategoriesPageModule() {
    }
    CategoriesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(categoriesRoutes),
                _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"]
            ],
            declarations: [_categories_page__WEBPACK_IMPORTED_MODULE_7__["CategoriesPage"]]
        })
    ], CategoriesPageModule);
    return CategoriesPageModule;
}());



/***/ }),

/***/ "./src/app/categories/categories.page.ts":
/*!***********************************************!*\
  !*** ./src/app/categories/categories.page.ts ***!
  \***********************************************/
/*! exports provided: CategoriesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesPage", function() { return CategoriesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CategoriesPage = /** @class */ (function () {
    function CategoriesPage() {
    }
    CategoriesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-categories',
            template: __webpack_require__(/*! raw-loader!./categories.page.html */ "./node_modules/raw-loader/index.js!./src/app/categories/categories.page.html"),
            styles: [__webpack_require__(/*! ./styles/categories.page.scss */ "./src/app/categories/styles/categories.page.scss"), __webpack_require__(/*! ./styles/categories.shell.scss */ "./src/app/categories/styles/categories.shell.scss"), __webpack_require__(/*! ./styles/categories.responsive.scss */ "./src/app/categories/styles/categories.responsive.scss")]
        })
    ], CategoriesPage);
    return CategoriesPage;
}());



/***/ }),

/***/ "./src/app/categories/styles/categories.page.scss":
/*!********************************************************!*\
  !*** ./src/app/categories/styles/categories.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --page-margin: var(--app-narrow-margin);\n  --page-categories-gutter: calc(var(--page-margin) / 4);\n  --page-category-background: var(--ion-color-medium);\n  --page-category-background-rgb: var(--ion-color-medium-rgb);\n}\n\n.categories-list {\n  --ion-grid-column-padding: var(--page-categories-gutter);\n  padding: calc(var(--page-categories-gutter) * 3);\n  height: 100%;\n  align-content: flex-start;\n  overflow: scroll;\n  -ms-overflow-style: none;\n  overflow: -moz-scrollbars-none;\n  scrollbar-width: none;\n}\n\n.categories-list::-webkit-scrollbar {\n  display: none;\n}\n\n.categories-list .category-item .category-anchor {\n  height: 100%;\n  text-decoration: none;\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n.categories-list .category-item .category-anchor .category-title {\n  margin: auto;\n  text-transform: uppercase;\n  font-weight: 400;\n  font-size: 18px;\n  letter-spacing: 1px;\n  padding: calc((var(--page-margin) / 4) * 3) var(--page-margin);\n  color: var(--ion-color-lightest);\n  background-color: var(--page-category-background);\n  border-radius: var(--app-fair-radius);\n}\n\n.categories-list .travel-category {\n  --page-category-background: #00AFFF;\n  --page-category-background-rgb: 0,175,255;\n}\n\n.categories-list .fashion-category {\n  --page-category-background: #cb328f;\n  --page-category-background-rgb: 203,50,143;\n}\n\n.categories-list .food-category {\n  --page-category-background: #ebbb00;\n  --page-category-background-rgb: 235,187,0;\n}\n\n.categories-list .deals-category {\n  --page-category-background: #70df70;\n  --page-category-background-rgb: 112,223,112;\n}\n\n.categories-list .real-state-category {\n  --page-category-background: #d9453a;\n  --page-category-background-rgb: 217,69,58;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcmllcy9zdHlsZXMvRDpcXHNoaXRcXHBvZC9zcmNcXGFwcFxcY2F0ZWdvcmllc1xcc3R5bGVzXFxjYXRlZ29yaWVzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY2F0ZWdvcmllcy9zdHlsZXMvY2F0ZWdvcmllcy5wYWdlLnNjc3MiLCJzcmMvYXBwL2NhdGVnb3JpZXMvc3R5bGVzL0Q6XFxzaGl0XFxwb2Qvc3JjXFx0aGVtZVxcbWl4aW5zXFxzY3JvbGxiYXJzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSx1Q0FBQTtFQUVBLHNEQUFBO0VBRUEsbURBQUE7RUFDQSwyREFBQTtBQ0xGOztBRFNBO0VBQ0Usd0RBQUE7RUFFQSxnREFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VFakJBLHdCQUFBO0VBR0EsOEJBQUE7RUFDQSxxQkFBQTtBRFNGOztBQ05FO0VBQ0UsYUFBQTtBRFFKOztBRE1JO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsdUJBQUE7QUNKTjs7QURNTTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsOERBQUE7RUFDQSxnQ0FBQTtFQUNBLGlEQUFBO0VBQ0EscUNBQUE7QUNKUjs7QURTRTtFQUNFLG1DQUFBO0VBQ0EseUNBQUE7QUNQSjs7QURVRTtFQUNFLG1DQUFBO0VBQ0EsMENBQUE7QUNSSjs7QURXRTtFQUNFLG1DQUFBO0VBQ0EseUNBQUE7QUNUSjs7QURZRTtFQUNFLG1DQUFBO0VBQ0EsMkNBQUE7QUNWSjs7QURhRTtFQUNFLG1DQUFBO0VBQ0EseUNBQUE7QUNYSiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3JpZXMvc3R5bGVzL2NhdGVnb3JpZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3RoZW1lL21peGlucy9zY3JvbGxiYXJzXCI7XG5cbi8vIEN1c3RvbSB2YXJpYWJsZXNcbi8vIE5vdGU6ICBUaGVzZSBvbmVzIHdlcmUgYWRkZWQgYnkgdXMgYW5kIGhhdmUgbm90aGluZyB0byBkbyB3aXRoIElvbmljIENTUyBDdXN0b20gUHJvcGVydGllc1xuOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtbmFycm93LW1hcmdpbik7XG5cbiAgLS1wYWdlLWNhdGVnb3JpZXMtZ3V0dGVyOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDQpO1xuXG4gIC0tcGFnZS1jYXRlZ29yeS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgLS1wYWdlLWNhdGVnb3J5LWJhY2tncm91bmQtcmdiOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXJnYik7XG59XG5cbi8vIE5vdGU6ICBBbGwgdGhlIENTUyB2YXJpYWJsZXMgZGVmaW5lZCBiZWxvdyBhcmUgb3ZlcnJpZGVzIG9mIElvbmljIGVsZW1lbnRzIENTUyBDdXN0b20gUHJvcGVydGllc1xuLmNhdGVnb3JpZXMtbGlzdCB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IHZhcigtLXBhZ2UtY2F0ZWdvcmllcy1ndXR0ZXIpO1xuXG4gIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1jYXRlZ29yaWVzLWd1dHRlcikgKiAzKTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuXG4gIEBpbmNsdWRlIGhpZGUtc2Nyb2xsYmFycygpO1xuXG4gIC5jYXRlZ29yeS1pdGVtIHtcbiAgICAuY2F0ZWdvcnktYW5jaG9yIHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblxuICAgICAgLmNhdGVnb3J5LXRpdGxlIHtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgIHBhZGRpbmc6IGNhbGMoKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDQpICogMykgdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1jYXRlZ29yeS1iYWNrZ3JvdW5kKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLWZhaXItcmFkaXVzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAudHJhdmVsLWNhdGVnb3J5IHtcbiAgICAtLXBhZ2UtY2F0ZWdvcnktYmFja2dyb3VuZDogIzAwQUZGRjtcbiAgICAtLXBhZ2UtY2F0ZWdvcnktYmFja2dyb3VuZC1yZ2I6IDAsMTc1LDI1NTtcbiAgfVxuXG4gIC5mYXNoaW9uLWNhdGVnb3J5IHtcbiAgICAtLXBhZ2UtY2F0ZWdvcnktYmFja2dyb3VuZDogI2NiMzI4ZjtcbiAgICAtLXBhZ2UtY2F0ZWdvcnktYmFja2dyb3VuZC1yZ2I6IDIwMyw1MCwxNDM7XG4gIH1cblxuICAuZm9vZC1jYXRlZ29yeSB7XG4gICAgLS1wYWdlLWNhdGVnb3J5LWJhY2tncm91bmQ6ICNlYmJiMDA7XG4gICAgLS1wYWdlLWNhdGVnb3J5LWJhY2tncm91bmQtcmdiOiAyMzUsMTg3LDA7XG4gIH1cblxuICAuZGVhbHMtY2F0ZWdvcnkge1xuICAgIC0tcGFnZS1jYXRlZ29yeS1iYWNrZ3JvdW5kOiAjNzBkZjcwO1xuICAgIC0tcGFnZS1jYXRlZ29yeS1iYWNrZ3JvdW5kLXJnYjogMTEyLDIyMywxMTI7XG4gIH1cblxuICAucmVhbC1zdGF0ZS1jYXRlZ29yeSB7XG4gICAgLS1wYWdlLWNhdGVnb3J5LWJhY2tncm91bmQ6ICNkOTQ1M2E7XG4gICAgLS1wYWdlLWNhdGVnb3J5LWJhY2tncm91bmQtcmdiOiAyMTcsNjksNTg7XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLW5hcnJvdy1tYXJnaW4pO1xuICAtLXBhZ2UtY2F0ZWdvcmllcy1ndXR0ZXI6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gNCk7XG4gIC0tcGFnZS1jYXRlZ29yeS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgLS1wYWdlLWNhdGVnb3J5LWJhY2tncm91bmQtcmdiOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXJnYik7XG59XG5cbi5jYXRlZ29yaWVzLWxpc3Qge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiB2YXIoLS1wYWdlLWNhdGVnb3JpZXMtZ3V0dGVyKTtcbiAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLWNhdGVnb3JpZXMtZ3V0dGVyKSAqIDMpO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcbiAgb3ZlcmZsb3c6IC1tb3otc2Nyb2xsYmFycy1ub25lO1xuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG59XG4uY2F0ZWdvcmllcy1saXN0Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uY2F0ZWdvcmllcy1saXN0IC5jYXRlZ29yeS1pdGVtIC5jYXRlZ29yeS1hbmNob3Ige1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cbi5jYXRlZ29yaWVzLWxpc3QgLmNhdGVnb3J5LWl0ZW0gLmNhdGVnb3J5LWFuY2hvciAuY2F0ZWdvcnktdGl0bGUge1xuICBtYXJnaW46IGF1dG87XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgcGFkZGluZzogY2FsYygodmFyKC0tcGFnZS1tYXJnaW4pIC8gNCkgKiAzKSB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLWNhdGVnb3J5LWJhY2tncm91bmQpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtZmFpci1yYWRpdXMpO1xufVxuLmNhdGVnb3JpZXMtbGlzdCAudHJhdmVsLWNhdGVnb3J5IHtcbiAgLS1wYWdlLWNhdGVnb3J5LWJhY2tncm91bmQ6ICMwMEFGRkY7XG4gIC0tcGFnZS1jYXRlZ29yeS1iYWNrZ3JvdW5kLXJnYjogMCwxNzUsMjU1O1xufVxuLmNhdGVnb3JpZXMtbGlzdCAuZmFzaGlvbi1jYXRlZ29yeSB7XG4gIC0tcGFnZS1jYXRlZ29yeS1iYWNrZ3JvdW5kOiAjY2IzMjhmO1xuICAtLXBhZ2UtY2F0ZWdvcnktYmFja2dyb3VuZC1yZ2I6IDIwMyw1MCwxNDM7XG59XG4uY2F0ZWdvcmllcy1saXN0IC5mb29kLWNhdGVnb3J5IHtcbiAgLS1wYWdlLWNhdGVnb3J5LWJhY2tncm91bmQ6ICNlYmJiMDA7XG4gIC0tcGFnZS1jYXRlZ29yeS1iYWNrZ3JvdW5kLXJnYjogMjM1LDE4NywwO1xufVxuLmNhdGVnb3JpZXMtbGlzdCAuZGVhbHMtY2F0ZWdvcnkge1xuICAtLXBhZ2UtY2F0ZWdvcnktYmFja2dyb3VuZDogIzcwZGY3MDtcbiAgLS1wYWdlLWNhdGVnb3J5LWJhY2tncm91bmQtcmdiOiAxMTIsMjIzLDExMjtcbn1cbi5jYXRlZ29yaWVzLWxpc3QgLnJlYWwtc3RhdGUtY2F0ZWdvcnkge1xuICAtLXBhZ2UtY2F0ZWdvcnktYmFja2dyb3VuZDogI2Q5NDUzYTtcbiAgLS1wYWdlLWNhdGVnb3J5LWJhY2tncm91bmQtcmdiOiAyMTcsNjksNTg7XG59IiwiLy8gSGlkZSBzY3JvbGxiYXJzOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzg5OTQ4MzcvMTExNjk1OVxuQG1peGluIGhpZGUtc2Nyb2xsYmFycygpIHtcbiAgLy8gSUUgMTArXG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcblxuICAvLyBGaXJlZm94XG4gIG92ZXJmbG93OiAtbW96LXNjcm9sbGJhcnMtbm9uZTtcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xuXG4gIC8vIFNhZmFyaSBhbmQgQ2hyb21lXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/categories/styles/categories.responsive.scss":
/*!**************************************************************!*\
  !*** ./src/app/categories/styles/categories.responsive.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* ----------- iPhone 4 and 4S ----------- */\n@media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) and (device-aspect-ratio: 2/3) {\n  .categories-list .category-item .category-anchor .category-title {\n    font-size: 16px;\n  }\n}\n/* ----------- iPhone 5, 5S, 5C and 5SE ----------- */\n/* ----------- iPhone 6, 6S, 7 and 8 ----------- */\n@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {\n  .categories-list .category-item .category-anchor .category-title {\n    font-size: 20px;\n    padding: var(--page-margin) calc((var(--page-margin) * 3) / 2);\n  }\n}\n/* ----------- iPhone X ----------- */\n@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) {\n  .categories-list .category-item .category-anchor .category-title {\n    font-size: 20px;\n    padding: var(--page-margin) calc((var(--page-margin) * 3) / 2);\n  }\n}\n/* ----------- iPhone 6+, 7+ and 8+ ----------- */\n@media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) {\n  .categories-list .category-item .category-anchor .category-title {\n    font-size: 20px;\n    padding: var(--page-margin) calc((var(--page-margin) * 3) / 2);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcmllcy9zdHlsZXMvRDpcXHNoaXRcXHBvZC9zcmNcXGFwcFxcY2F0ZWdvcmllc1xcc3R5bGVzXFxjYXRlZ29yaWVzLnJlc3BvbnNpdmUuc2NzcyIsInNyYy9hcHAvY2F0ZWdvcmllcy9zdHlsZXMvY2F0ZWdvcmllcy5yZXNwb25zaXZlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0EsNENBQUE7QUFDQTtFQWFRO0lBQ0UsZUFBQTtFQ2hCUjtBQUNGO0FEc0JBLHFEQUFBO0FBY0Esa0RBQUE7QUFDQTtFQVlRO0lBQ0UsZUFBQTtJQUNBLDhEQUFBO0VDNUNSO0FBQ0Y7QURrREEscUNBQUE7QUFDQTtFQVlRO0lBQ0UsZUFBQTtJQUNBLDhEQUFBO0VDM0RSO0FBQ0Y7QURpRUEsaURBQUE7QUFDQTtFQVlRO0lBQ0UsZUFBQTtJQUNBLDhEQUFBO0VDMUVSO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jYXRlZ29yaWVzL3N0eWxlcy9jYXRlZ29yaWVzLnJlc3BvbnNpdmUuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIChOb3RlOiBEb24ndCBjaGFuZ2UgdGhlIG9yZGVyIG9mIHRoZSBkZXZpY2VzIGFzIGl0IG1heSBicmVhayB0aGUgY29ycmVjdCBjc3MgcHJlY2VkZW5jZSlcblxuLy8gKHNlZTogaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9zbmlwcGV0cy9jc3MvbWVkaWEtcXVlcmllcy1mb3Itc3RhbmRhcmQtZGV2aWNlcy8jaXBob25lLXF1ZXJpZXMpXG4vLyAoc2VlOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNDc3NTAyNjEvMTExNjk1OSlcblxuLyogLS0tLS0tLS0tLS0gaVBob25lIDQgYW5kIDRTIC0tLS0tLS0tLS0tICovXG5AbWVkaWEgb25seSBzY3JlZW5cbiAgYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogMzIwcHgpXG4gIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDQ4MHB4KVxuICBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMilcbiAgYW5kIChkZXZpY2UtYXNwZWN0LXJhdGlvOiAyLzMpXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBwb3J0cmFpdDpcbiAgLy8gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBsYW5kc2NhcGU6XG4gIC8vIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSlcbntcbiAgLmNhdGVnb3JpZXMtbGlzdCB7XG4gICAgLmNhdGVnb3J5LWl0ZW0ge1xuICAgICAgLmNhdGVnb3J5LWFuY2hvciB7XG4gICAgICAgIC5jYXRlZ29yeS10aXRsZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qIC0tLS0tLS0tLS0tIGlQaG9uZSA1LCA1UywgNUMgYW5kIDVTRSAtLS0tLS0tLS0tLSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuXG4gIGFuZCAobWluLWRldmljZS13aWR0aCA6IDMyMHB4KVxuICBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA1NjhweClcbiAgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpXG4gIGFuZCAoZGV2aWNlLWFzcGVjdC1yYXRpbzogNDAgLyA3MSlcbiAgLy8gdW5jb21tZW50IGZvciBvbmx5IHBvcnRyYWl0OlxuICAvLyBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdClcbiAgLy8gdW5jb21tZW50IGZvciBvbmx5IGxhbmRzY2FwZTpcbiAgLy8gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKVxue1xuXG59XG5cbi8qIC0tLS0tLS0tLS0tIGlQaG9uZSA2LCA2UywgNyBhbmQgOCAtLS0tLS0tLS0tLSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuXG4gIGFuZCAobWluLWRldmljZS13aWR0aCA6IDM3NXB4KVxuICBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA2NjdweClcbiAgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBwb3J0cmFpdDpcbiAgLy8gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBsYW5kc2NhcGU6XG4gIC8vIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSlcbntcbiAgLmNhdGVnb3JpZXMtbGlzdCB7XG4gICAgLmNhdGVnb3J5LWl0ZW0ge1xuICAgICAgLmNhdGVnb3J5LWFuY2hvciB7XG4gICAgICAgIC5jYXRlZ29yeS10aXRsZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKSBjYWxjKCh2YXIoLS1wYWdlLW1hcmdpbikgKiAzKSAvIDIpIDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKiAtLS0tLS0tLS0tLSBpUGhvbmUgWCAtLS0tLS0tLS0tLSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuXG4gIGFuZCAobWluLWRldmljZS13aWR0aCA6IDM3NXB4KVxuICBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA4MTJweClcbiAgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW8gOiAzKVxuICAvLyB1bmNvbW1lbnQgZm9yIG9ubHkgcG9ydHJhaXQ6XG4gIC8vIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KVxuICAvLyB1bmNvbW1lbnQgZm9yIG9ubHkgbGFuZHNjYXBlOlxuICAvLyBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpXG57XG4gIC5jYXRlZ29yaWVzLWxpc3Qge1xuICAgIC5jYXRlZ29yeS1pdGVtIHtcbiAgICAgIC5jYXRlZ29yeS1hbmNob3Ige1xuICAgICAgICAuY2F0ZWdvcnktdGl0bGUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbikgY2FsYygodmFyKC0tcGFnZS1tYXJnaW4pICogMykgLyAyKSA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyogLS0tLS0tLS0tLS0gaVBob25lIDYrLCA3KyBhbmQgOCsgLS0tLS0tLS0tLS0gKi9cbkBtZWRpYSBvbmx5IHNjcmVlblxuICBhbmQgKG1pbi1kZXZpY2Utd2lkdGggOiA0MTRweClcbiAgYW5kIChtYXgtZGV2aWNlLXdpZHRoIDogNzM2cHgpXG4gIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAzKVxuICAvLyB1bmNvbW1lbnQgZm9yIG9ubHkgcG9ydHJhaXQ6XG4gIC8vIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KVxuICAvLyB1bmNvbW1lbnQgZm9yIG9ubHkgbGFuZHNjYXBlOlxuICAvLyBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpXG57XG4gIC5jYXRlZ29yaWVzLWxpc3Qge1xuICAgIC5jYXRlZ29yeS1pdGVtIHtcbiAgICAgIC5jYXRlZ29yeS1hbmNob3Ige1xuICAgICAgICAuY2F0ZWdvcnktdGl0bGUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbikgY2FsYygodmFyKC0tcGFnZS1tYXJnaW4pICogMykgLyAyKSA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi8qIC0tLS0tLS0tLS0tIGlQaG9uZSA0IGFuZCA0UyAtLS0tLS0tLS0tLSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogMzIwcHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogNDgwcHgpIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSBhbmQgKGRldmljZS1hc3BlY3QtcmF0aW86IDIvMykge1xuICAuY2F0ZWdvcmllcy1saXN0IC5jYXRlZ29yeS1pdGVtIC5jYXRlZ29yeS1hbmNob3IgLmNhdGVnb3J5LXRpdGxlIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbn1cbi8qIC0tLS0tLS0tLS0tIGlQaG9uZSA1LCA1UywgNUMgYW5kIDVTRSAtLS0tLS0tLS0tLSAqL1xuLyogLS0tLS0tLS0tLS0gaVBob25lIDYsIDZTLCA3IGFuZCA4IC0tLS0tLS0tLS0tICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiAzNzVweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA2NjdweCkgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpIHtcbiAgLmNhdGVnb3JpZXMtbGlzdCAuY2F0ZWdvcnktaXRlbSAuY2F0ZWdvcnktYW5jaG9yIC5jYXRlZ29yeS10aXRsZSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKSBjYWxjKCh2YXIoLS1wYWdlLW1hcmdpbikgKiAzKSAvIDIpO1xuICB9XG59XG4vKiAtLS0tLS0tLS0tLSBpUGhvbmUgWCAtLS0tLS0tLS0tLSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogMzc1cHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogODEycHgpIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAzKSB7XG4gIC5jYXRlZ29yaWVzLWxpc3QgLmNhdGVnb3J5LWl0ZW0gLmNhdGVnb3J5LWFuY2hvciAuY2F0ZWdvcnktdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbikgY2FsYygodmFyKC0tcGFnZS1tYXJnaW4pICogMykgLyAyKTtcbiAgfVxufVxuLyogLS0tLS0tLS0tLS0gaVBob25lIDYrLCA3KyBhbmQgOCsgLS0tLS0tLS0tLS0gKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDQxNHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDczNnB4KSBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMykge1xuICAuY2F0ZWdvcmllcy1saXN0IC5jYXRlZ29yeS1pdGVtIC5jYXRlZ29yeS1hbmNob3IgLmNhdGVnb3J5LXRpdGxlIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgcGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pIGNhbGMoKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDMpIC8gMik7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/categories/styles/categories.shell.scss":
/*!*********************************************************!*\
  !*** ./src/app/categories/styles/categories.shell.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-image-shell.category-cover {\n  --image-shell-loading-background: rgba(var(--page-category-background-rgb), .25);\n  --image-shell-spinner-color: var(--ion-color-lightest);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcmllcy9zdHlsZXMvRDpcXHNoaXRcXHBvZC9zcmNcXGFwcFxcY2F0ZWdvcmllc1xcc3R5bGVzXFxjYXRlZ29yaWVzLnNoZWxsLnNjc3MiLCJzcmMvYXBwL2NhdGVnb3JpZXMvc3R5bGVzL2NhdGVnb3JpZXMuc2hlbGwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdGQUFBO0VBQ0Esc0RBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3JpZXMvc3R5bGVzL2NhdGVnb3JpZXMuc2hlbGwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1pbWFnZS1zaGVsbC5jYXRlZ29yeS1jb3ZlciB7XG4gIC0taW1hZ2Utc2hlbGwtbG9hZGluZy1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXBhZ2UtY2F0ZWdvcnktYmFja2dyb3VuZC1yZ2IpLCAuMjUpO1xuICAtLWltYWdlLXNoZWxsLXNwaW5uZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG59XG4iLCJhcHAtaW1hZ2Utc2hlbGwuY2F0ZWdvcnktY292ZXIge1xuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogcmdiYSh2YXIoLS1wYWdlLWNhdGVnb3J5LWJhY2tncm91bmQtcmdiKSwgLjI1KTtcbiAgLS1pbWFnZS1zaGVsbC1zcGlubmVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xufSJdfQ== */"

/***/ })

}]);
//# sourceMappingURL=categories-categories-module-es5.js.map