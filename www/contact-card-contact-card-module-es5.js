(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contact-card-contact-card-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/contact-card/contact-card.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/contact-card/contact-card.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"contact-card-content\">\n  <ion-row class=\"user-details-wrapper\">\n    <ion-col size=\"4\">\n      <app-aspect-ratio [ratio]=\"{w: 1, h: 1}\">\n        <app-image-shell class=\"user-avatar\" animation=\"spinner\" [src]=\"'./assets/sample-images/notifications/100x100Notification2.jpg'\" [alt]=\"'notification image'\"></app-image-shell>\n      </app-aspect-ratio>\n    </ion-col>\n    <ion-col class=\"user-info-wrapper\" size=\"8\">\n      <h3 class=\"user-name\">Claire Hale</h3>\n      <h5 class=\"user-handle\">@clairehale</h5>\n    </ion-col>\n    <ion-col class=\"user-stats-wrapper\" size=\"6\">\n      <span class=\"user-stat-value\">1553</span>\n      <span class=\"user-stat-name\">Following</span>\n    </ion-col>\n    <ion-col class=\"user-stats-wrapper\" size=\"6\">\n      <span class=\"user-stat-value\">537</span>\n      <span class=\"user-stat-name\">Followers</span>\n    </ion-col>\n    <ion-col size=\"12\">\n      <p class=\"user-bio\">\n        I am a product and visual designer based in Uruguay. I have designed at Google, Amazon and Microsoft.\n      </p>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"user-preferences-wrapper\">\n    <ion-col size=\"12\">\n      <h4 class=\"preference-name\">Mobile</h4>\n      <p class=\"preference-value\">\n        +1-202-555-0102\n      </p>\n    </ion-col>\n    <ion-col size=\"12\">\n      <h4 class=\"preference-name\">Email</h4>\n      <p class=\"preference-value\">\n        clairhale@ionic.com\n      </p>\n    </ion-col>\n    <ion-col size=\"12\">\n      <h4 class=\"preference-name\">Address</h4>\n      <p class=\"preference-value\">\n        921 Church St, San Francisco, CA\n        <br/>\n        94114, USA\n      </p>\n    </ion-col>\n  </ion-row>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/contact-card/contact-card.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/contact-card/contact-card.module.ts ***!
  \*****************************************************/
/*! exports provided: ContactCardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactCardPageModule", function() { return ContactCardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _contact_card_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact-card.page */ "./src/app/contact-card/contact-card.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");








var ContactCardPageModule = /** @class */ (function () {
    function ContactCardPageModule() {
    }
    ContactCardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _contact_card_page__WEBPACK_IMPORTED_MODULE_6__["ContactCardPage"] }])
            ],
            declarations: [_contact_card_page__WEBPACK_IMPORTED_MODULE_6__["ContactCardPage"]]
        })
    ], ContactCardPageModule);
    return ContactCardPageModule;
}());



/***/ }),

/***/ "./src/app/contact-card/contact-card.page.ts":
/*!***************************************************!*\
  !*** ./src/app/contact-card/contact-card.page.ts ***!
  \***************************************************/
/*! exports provided: ContactCardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactCardPage", function() { return ContactCardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactCardPage = /** @class */ (function () {
    function ContactCardPage() {
    }
    ContactCardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-card',
            template: __webpack_require__(/*! raw-loader!./contact-card.page.html */ "./node_modules/raw-loader/index.js!./src/app/contact-card/contact-card.page.html"),
            styles: [__webpack_require__(/*! ./styles/contact-card.page.scss */ "./src/app/contact-card/styles/contact-card.page.scss"), __webpack_require__(/*! ./styles/contact-card.shell.scss */ "./src/app/contact-card/styles/contact-card.shell.scss")]
        })
    ], ContactCardPage);
    return ContactCardPage;
}());



/***/ }),

/***/ "./src/app/contact-card/styles/contact-card.page.scss":
/*!************************************************************!*\
  !*** ./src/app/contact-card/styles/contact-card.page.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --page-margin: var(--app-broad-margin);\n  --page-background: var(--app-background-shade);\n  --page-highlighted-background: var(--ion-color-secondary-tint);\n}\n\nion-header ion-toolbar {\n  --background: var(--page-highlighted-background);\n}\n\n.contact-card-content {\n  --background: var(--page-background);\n  transform: translateZ(0);\n}\n\n.contact-card-content .user-details-wrapper {\n  --ion-grid-column-padding: 0px;\n  padding: 0px var(--page-margin) var(--page-margin);\n  background-color: var(--page-highlighted-background);\n  color: var(--ion-color-light);\n  align-items: center;\n}\n\n.contact-card-content .user-details-wrapper .user-avatar {\n  border: solid 3px var(--ion-color-light);\n}\n\n.contact-card-content .user-details-wrapper .user-info-wrapper {\n  padding-left: calc(var(--page-margin) / 2);\n}\n\n.contact-card-content .user-details-wrapper .user-info-wrapper .user-name {\n  margin: 0px 0px 5px;\n}\n\n.contact-card-content .user-details-wrapper .user-info-wrapper .user-handle {\n  margin: 0px;\n  font-weight: 400;\n}\n\n.contact-card-content .user-details-wrapper .user-stats-wrapper {\n  text-align: center;\n  padding-top: calc(var(--page-margin) / 2);\n}\n\n.contact-card-content .user-details-wrapper .user-stats-wrapper .user-stat-value {\n  margin-right: 5px;\n  font-weight: 500;\n  font-size: 18px;\n}\n\n.contact-card-content .user-details-wrapper .user-stats-wrapper .user-stat-name {\n  font-size: 16px;\n}\n\n.contact-card-content .user-details-wrapper .user-bio {\n  margin: var(--page-margin) 0px 0px;\n  line-height: 1.2;\n  font-size: 14px;\n}\n\n.contact-card-content .user-preferences-wrapper {\n  --ion-grid-column-padding: 0px;\n  padding: var(--page-margin);\n}\n\n.contact-card-content .user-preferences-wrapper .preference-name {\n  margin: 0px 0px 5px;\n  font-size: 16px;\n}\n\n.contact-card-content .user-preferences-wrapper .preference-value {\n  margin: 0px 0px calc(var(--page-margin) / 2);\n  font-size: 14px;\n  line-height: 1.4;\n  color: var(--ion-color-dark-tint);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC1jYXJkL3N0eWxlcy9EOlxcc2hpdFxccG9kL3NyY1xcYXBwXFxjb250YWN0LWNhcmRcXHN0eWxlc1xcY29udGFjdC1jYXJkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY29udGFjdC1jYXJkL3N0eWxlcy9jb250YWN0LWNhcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usc0NBQUE7RUFDQSw4Q0FBQTtFQUVBLDhEQUFBO0FDRkY7O0FET0U7RUFDRSxnREFBQTtBQ0pKOztBRFFBO0VBQ0Usb0NBQUE7RUFFQSx3QkFBQTtBQ05GOztBRFFFO0VBQ0UsOEJBQUE7RUFFQSxrREFBQTtFQUNBLG9EQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQ1BKOztBRFNJO0VBQ0Usd0NBQUE7QUNQTjs7QURVSTtFQUNFLDBDQUFBO0FDUk47O0FEVU07RUFDRSxtQkFBQTtBQ1JSOztBRFdNO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FDVFI7O0FEYUk7RUFDRSxrQkFBQTtFQUNBLHlDQUFBO0FDWE47O0FEYU07RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ1hSOztBRGNNO0VBQ0UsZUFBQTtBQ1pSOztBRGdCSTtFQUNFLGtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDZE47O0FEa0JFO0VBQ0UsOEJBQUE7RUFFQSwyQkFBQTtBQ2pCSjs7QURtQkk7RUFDRSxtQkFBQTtFQUNBLGVBQUE7QUNqQk47O0FEb0JJO0VBQ0UsNENBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQ0FBQTtBQ2xCTiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QtY2FyZC9zdHlsZXMvY29udGFjdC1jYXJkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEN1c3RvbSB2YXJpYWJsZXNcbi8vIE5vdGU6ICBUaGVzZSBvbmVzIHdlcmUgYWRkZWQgYnkgdXMgYW5kIGhhdmUgbm90aGluZyB0byBkbyB3aXRoIElvbmljIENTUyBDdXN0b20gUHJvcGVydGllc1xuOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtYnJvYWQtbWFyZ2luKTtcbiAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kLXNoYWRlKTtcblxuICAtLXBhZ2UtaGlnaGxpZ2h0ZWQtYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS10aW50KTtcbn1cblxuLy8gTm90ZTogIEFsbCB0aGUgQ1NTIHZhcmlhYmxlcyBkZWZpbmVkIGJlbG93IGFyZSBvdmVycmlkZXMgb2YgSW9uaWMgZWxlbWVudHMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXG5pb24taGVhZGVyIHtcbiAgaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1oaWdobGlnaHRlZC1iYWNrZ3JvdW5kKTtcbiAgfVxufVxuXG4uY29udGFjdC1jYXJkLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG4gIC8vIFRvIGZpeCBoYWxmIHBpeGVsIGxpbmUgYmV0d2VlbiBpb24taGVhZGVyIGFuZCAgaW9uLWNvbnRlbnRcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuXG4gIC51c2VyLWRldGFpbHMtd3JhcHBlciB7XG4gICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuXG4gICAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKSB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1oaWdobGlnaHRlZC1iYWNrZ3JvdW5kKTtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgLnVzZXItYXZhdGFyIHtcbiAgICAgIGJvcmRlcjogc29saWQgM3B4IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgfVxuXG4gICAgLnVzZXItaW5mby13cmFwcGVyIHtcbiAgICAgIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcblxuICAgICAgLnVzZXItbmFtZSB7XG4gICAgICAgIG1hcmdpbjogMHB4IDBweCA1cHg7XG4gICAgICB9XG5cbiAgICAgIC51c2VyLWhhbmRsZSB7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIC51c2VyLXN0YXRzLXdyYXBwZXIge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgcGFkZGluZy10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG5cbiAgICAgIC51c2VyLXN0YXQtdmFsdWUge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgfVxuXG4gICAgICAudXNlci1zdGF0LW5hbWUge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnVzZXItYmlvIHtcbiAgICAgIG1hcmdpbjogdmFyKC0tcGFnZS1tYXJnaW4pIDBweCAwcHg7XG4gICAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbiAgfVxuXG4gIC51c2VyLXByZWZlcmVuY2VzLXdyYXBwZXIge1xuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKTtcblxuICAgIC5wcmVmZXJlbmNlLW5hbWUge1xuICAgICAgbWFyZ2luOiAwcHggMHB4IDVweDtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG5cbiAgICAucHJlZmVyZW5jZS12YWx1ZSB7XG4gICAgICBtYXJnaW46IDBweCAwcHggY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCk7XG4gICAgfVxuICB9XG59XG4iLCI6aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1icm9hZC1tYXJnaW4pO1xuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQtc2hhZGUpO1xuICAtLXBhZ2UtaGlnaGxpZ2h0ZWQtYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS10aW50KTtcbn1cblxuaW9uLWhlYWRlciBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1oaWdobGlnaHRlZC1iYWNrZ3JvdW5kKTtcbn1cblxuLmNvbnRhY3QtY2FyZC1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG59XG4uY29udGFjdC1jYXJkLWNvbnRlbnQgLnVzZXItZGV0YWlscy13cmFwcGVyIHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1tYXJnaW4pIHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1oaWdobGlnaHRlZC1iYWNrZ3JvdW5kKTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uY29udGFjdC1jYXJkLWNvbnRlbnQgLnVzZXItZGV0YWlscy13cmFwcGVyIC51c2VyLWF2YXRhciB7XG4gIGJvcmRlcjogc29saWQgM3B4IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG4uY29udGFjdC1jYXJkLWNvbnRlbnQgLnVzZXItZGV0YWlscy13cmFwcGVyIC51c2VyLWluZm8td3JhcHBlciB7XG4gIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbn1cbi5jb250YWN0LWNhcmQtY29udGVudCAudXNlci1kZXRhaWxzLXdyYXBwZXIgLnVzZXItaW5mby13cmFwcGVyIC51c2VyLW5hbWUge1xuICBtYXJnaW46IDBweCAwcHggNXB4O1xufVxuLmNvbnRhY3QtY2FyZC1jb250ZW50IC51c2VyLWRldGFpbHMtd3JhcHBlciAudXNlci1pbmZvLXdyYXBwZXIgLnVzZXItaGFuZGxlIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4uY29udGFjdC1jYXJkLWNvbnRlbnQgLnVzZXItZGV0YWlscy13cmFwcGVyIC51c2VyLXN0YXRzLXdyYXBwZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xufVxuLmNvbnRhY3QtY2FyZC1jb250ZW50IC51c2VyLWRldGFpbHMtd3JhcHBlciAudXNlci1zdGF0cy13cmFwcGVyIC51c2VyLXN0YXQtdmFsdWUge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLmNvbnRhY3QtY2FyZC1jb250ZW50IC51c2VyLWRldGFpbHMtd3JhcHBlciAudXNlci1zdGF0cy13cmFwcGVyIC51c2VyLXN0YXQtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5jb250YWN0LWNhcmQtY29udGVudCAudXNlci1kZXRhaWxzLXdyYXBwZXIgLnVzZXItYmlvIHtcbiAgbWFyZ2luOiB2YXIoLS1wYWdlLW1hcmdpbikgMHB4IDBweDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmNvbnRhY3QtY2FyZC1jb250ZW50IC51c2VyLXByZWZlcmVuY2VzLXdyYXBwZXIge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG4gIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cbi5jb250YWN0LWNhcmQtY29udGVudCAudXNlci1wcmVmZXJlbmNlcy13cmFwcGVyIC5wcmVmZXJlbmNlLW5hbWUge1xuICBtYXJnaW46IDBweCAwcHggNXB4O1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uY29udGFjdC1jYXJkLWNvbnRlbnQgLnVzZXItcHJlZmVyZW5jZXMtd3JhcHBlciAucHJlZmVyZW5jZS12YWx1ZSB7XG4gIG1hcmdpbjogMHB4IDBweCBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/contact-card/styles/contact-card.shell.scss":
/*!*************************************************************!*\
  !*** ./src/app/contact-card/styles/contact-card.shell.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-image-shell.user-avatar {\n  --image-shell-loading-background: rgba(var(--ion-color-light-rgb), 0.25);\n  --image-shell-border-radius: 50%;\n  --image-shell-spinner-color: var(--ion-color-light);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC1jYXJkL3N0eWxlcy9EOlxcc2hpdFxccG9kL3NyY1xcYXBwXFxjb250YWN0LWNhcmRcXHN0eWxlc1xcY29udGFjdC1jYXJkLnNoZWxsLnNjc3MiLCJzcmMvYXBwL2NvbnRhY3QtY2FyZC9zdHlsZXMvY29udGFjdC1jYXJkLnNoZWxsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3RUFBQTtFQUNBLGdDQUFBO0VBQ0EsbURBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QtY2FyZC9zdHlsZXMvY29udGFjdC1jYXJkLnNoZWxsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtaW1hZ2Utc2hlbGwudXNlci1hdmF0YXIge1xuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItbGlnaHQtcmdiKSwgMC4yNSk7XG4gIC0taW1hZ2Utc2hlbGwtYm9yZGVyLXJhZGl1czogNTAlO1xuICAtLWltYWdlLXNoZWxsLXNwaW5uZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG4iLCJhcHAtaW1hZ2Utc2hlbGwudXNlci1hdmF0YXIge1xuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItbGlnaHQtcmdiKSwgMC4yNSk7XG4gIC0taW1hZ2Utc2hlbGwtYm9yZGVyLXJhZGl1czogNTAlO1xuICAtLWltYWdlLXNoZWxsLXNwaW5uZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59Il19 */"

/***/ })

}]);
//# sourceMappingURL=contact-card-contact-card-module-es5.js.map