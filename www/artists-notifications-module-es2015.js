(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["artists-notifications-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/artists/notifications.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/artists/notifications.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  \n    <ion-toolbar mode=\"ios\">\n        <ion-buttons color=\"light\" slot=\"start\">\n            <ion-back-button color=\"light\" defaultHref=\"app/user\"></ion-back-button>\n          </ion-buttons>\n        \n    </ion-toolbar>\n  </ion-header>\n\n<ion-content class=\"notifications-content\">\n\n    <div  class=\"user-photos-section\">\n        <ion-row class=\"heading-row\">\n          <h3 style=\"font-size:24px\" class=\"details-section-title\">Artists</h3>\n       \n        </ion-row>\n\n    </div>\n  <ng-container *ngIf=\"notifications\">\n    <ion-item-group>\n      \n           \n         \n       \n      <ion-item class=\"notification-item\" lines=\"none\" *ngFor=\"let notification of notifications.today\">\n        <ion-row class=\"notification-item-wrapper\">\n          <ion-col size=\"2\">\n            <app-aspect-ratio [ratio]=\"{w: 1, h: 1}\">\n              <app-image-shell class=\"notification-image\" [src]=\"notification.image\" [alt]=\"'user image'\"></app-image-shell>\n            </app-aspect-ratio>\n          </ion-col>\n          <ion-col class=\"details-wrapper\">\n            <h2 class=\"details-name\">{{ notification.name }}</h2>\n         \n          </ion-col>\n        \n        </ion-row>\n      </ion-item>\n    </ion-item-group>\n   \n  </ng-container>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/artists/notifications.module.ts":
/*!*************************************************!*\
  !*** ./src/app/artists/notifications.module.ts ***!
  \*************************************************/
/*! exports provided: NotificationsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsPageModule", function() { return NotificationsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _notifications_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./notifications.page */ "./src/app/artists/notifications.page.ts");
/* harmony import */ var _notifications_notifications_resolver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../notifications/notifications.resolver */ "./src/app/notifications/notifications.resolver.ts");
/* harmony import */ var _notifications_notifications_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../notifications/notifications.service */ "./src/app/notifications/notifications.service.ts");










let NotificationsPageModule = class NotificationsPageModule {
};
NotificationsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                {
                    path: '',
                    component: _notifications_page__WEBPACK_IMPORTED_MODULE_7__["NotificationsPage"],
                    resolve: {
                        data: _notifications_notifications_resolver__WEBPACK_IMPORTED_MODULE_8__["NotificationsResolver"]
                    }
                }
            ])
        ],
        declarations: [_notifications_page__WEBPACK_IMPORTED_MODULE_7__["NotificationsPage"]],
        providers: [
            _notifications_notifications_resolver__WEBPACK_IMPORTED_MODULE_8__["NotificationsResolver"],
            _notifications_notifications_service__WEBPACK_IMPORTED_MODULE_9__["NotificationsService"]
        ]
    })
], NotificationsPageModule);



/***/ }),

/***/ "./src/app/artists/notifications.page.ts":
/*!***********************************************!*\
  !*** ./src/app/artists/notifications.page.ts ***!
  \***********************************************/
/*! exports provided: NotificationsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsPage", function() { return NotificationsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let NotificationsPage = class NotificationsPage {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
        if (this.route && this.route.data) {
            this.route.data.subscribe(resolvedData => {
                const dataSource = resolvedData['data'];
                if (dataSource) {
                    dataSource.source.subscribe(pageData => {
                        if (pageData) {
                            this.notifications = pageData;
                        }
                    });
                }
            });
        }
    }
};
NotificationsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
NotificationsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notifications',
        template: __webpack_require__(/*! raw-loader!./notifications.page.html */ "./node_modules/raw-loader/index.js!./src/app/artists/notifications.page.html"),
        styles: [__webpack_require__(/*! ./styles/notifications.page.scss */ "./src/app/artists/styles/notifications.page.scss"), __webpack_require__(/*! ./styles/notifications.shell.scss */ "./src/app/artists/styles/notifications.shell.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], NotificationsPage);



/***/ }),

/***/ "./src/app/artists/styles/notifications.page.scss":
/*!********************************************************!*\
  !*** ./src/app/artists/styles/notifications.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: linear-gradient(to top, #060606, #690000);\n}\n\nion-toolbar {\n  --background: #680000;\n}\n\nion-item {\n  --ion-background-color: red !important;\n}\n\n.item, .list, .item-content, .item-complex {\n  --ion-background-color: transparent !important;\n}\n\n.user-photos-section {\n  margin: calc(var(--page-margin) * 2) var(--page-margin) var(--page-margin);\n  margin-top: 0px;\n  margin-left: 20px;\n}\n\n.user-photos-section .heading-row {\n  margin-bottom: var(--page-margin);\n  justify-content: space-between;\n  align-items: center;\n}\n\n.user-photos-section .heading-row .details-section-title {\n  margin: 0px;\n}\n\n.user-photos-section .heading-row .heading-call-to-action {\n  padding: calc(var(--page-margin) / 2) calc(var(--page-margin) / 4);\n  text-decoration: none;\n  color: var(--ion-color-secondary);\n}\n\n.user-photos-section .pictures-row {\n  --ion-grid-columns: 4;\n  --ion-grid-column-padding: 0px;\n  margin: 0px calc(var(--page-pictures-gutter) * -1);\n}\n\n.user-photos-section .pictures-row .picture-item {\n  padding: 0px var(--page-pictures-gutter) calc(var(--page-pictures-gutter) * 2);\n}\n\n.notifications-content ion-item-divider {\n  --background: var(--ion-color-light);\n  --padding-start: var(--page-margin);\n}\n\n.notifications-content .notification-item {\n  --padding-start: 0px;\n  --inner-padding-end: 0px;\n  padding: var(--page-margin);\n  color: var(--ion-color-medium);\n  box-shadow: inset 0 8px 2px -9px var(--ion-color-darkest);\n}\n\n.notifications-content .notification-item .notification-item-wrapper {\n  --ion-grid-column-padding: 0px;\n  width: 100%;\n  align-items: center;\n}\n\n.notifications-content .notification-item .details-wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  padding-left: var(--page-margin);\n}\n\n.notifications-content .notification-item .details-wrapper .details-name {\n  margin-top: 0px;\n  margin-bottom: 5px;\n  font-size: 16px;\n  font-weight: 400;\n  letter-spacing: 0.2px;\n  color: var(--ion-color-secondary);\n}\n\n.notifications-content .notification-item .details-wrapper .details-description {\n  font-size: 12px;\n  margin: 0px;\n}\n\n.notifications-content .notification-item .date-wrapper {\n  align-self: flex-start;\n}\n\n.notifications-content .notification-item .date-wrapper .notification-date {\n  margin: 0px;\n  font-size: 12px;\n  text-align: end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJ0aXN0cy9zdHlsZXMvRDpcXHNoaXRcXHBvZC9zcmNcXGFwcFxcYXJ0aXN0c1xcc3R5bGVzXFxub3RpZmljYXRpb25zLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYXJ0aXN0cy9zdHlsZXMvbm90aWZpY2F0aW9ucy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7RUFDRSx1REFBQTtBQ0xGOztBRFNBO0VBQ0UscUJBQUE7QUNORjs7QURVQTtFQUNFLHNDQUFBO0FDUEY7O0FEV0U7RUFDRSw4Q0FBQTtBQ1JKOztBRFlJO0VBQ0UsMEVBQUE7RUFFQSxlQUFBO0VBQ0EsaUJBQUE7QUNWTjs7QURZTTtFQUNFLGlDQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQ1ZSOztBRFlRO0VBQ0UsV0FBQTtBQ1ZWOztBRGFRO0VBQ0Usa0VBQUE7RUFDQSxxQkFBQTtFQUNBLGlDQUFBO0FDWFY7O0FEZU07RUFDRSxxQkFBQTtFQUNBLDhCQUFBO0VBRUEsa0RBQUE7QUNkUjs7QURnQlE7RUFDRSw4RUFBQTtBQ2RWOztBRHFCRTtFQUNFLG9DQUFBO0VBQ0EsbUNBQUE7QUNsQko7O0FEcUJFO0VBQ0Usb0JBQUE7RUFDQSx3QkFBQTtFQUVBLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSx5REFBQTtBQ3BCSjs7QURzQkk7RUFDRSw4QkFBQTtFQUVBLFdBQUE7RUFDQSxtQkFBQTtBQ3JCTjs7QUR3Qkk7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0FDdEJOOztBRHdCTTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDRCxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUNBQUE7QUN0QlA7O0FEeUJNO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUN2QlI7O0FEMkJJO0VBQ0Usc0JBQUE7QUN6Qk47O0FEMkJNO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDekJSIiwiZmlsZSI6InNyYy9hcHAvYXJ0aXN0cy9zdHlsZXMvbm90aWZpY2F0aW9ucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDdXN0b20gdmFyaWFibGVzXG4vLyBOb3RlOiAgVGhlc2Ugb25lcyB3ZXJlIGFkZGVkIGJ5IHVzIGFuZCBoYXZlIG5vdGhpbmcgdG8gZG8gd2l0aCBJb25pYyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbjpob3N0IHtcbiAgLy8gLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLW5hcnJvdy1tYXJnaW4pO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzA2MDYwNiwgIzY5MDAwMCk7XG5cbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICM2ODAwMDA7XG59XG5cblxuaW9uLWl0ZW0ge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiByZWQgIWltcG9ydGFudDtcbiAgfVxuXG5cbiAgLml0ZW0sIC5saXN0LCAuaXRlbS1jb250ZW50LCAuaXRlbS1jb21wbGV4IHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIH1cblxuXG4gICAgLnVzZXItcGhvdG9zLXNlY3Rpb24ge1xuICAgICAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpIHZhcigtLXBhZ2UtbWFyZ2luKSB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgICAvLyBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKTtcbiAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIFxuICAgICAgLmhlYWRpbmctcm93IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgXG4gICAgICAgIC5kZXRhaWxzLXNlY3Rpb24tdGl0bGUge1xuICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIC5oZWFkaW5nLWNhbGwtdG8tYWN0aW9uIHtcbiAgICAgICAgICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gNCk7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIFxuICAgICAgLnBpY3R1cmVzLXJvdyB7XG4gICAgICAgIC0taW9uLWdyaWQtY29sdW1uczogNDtcbiAgICAgICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuICAgIFxuICAgICAgICBtYXJnaW46IDBweCBjYWxjKHZhcigtLXBhZ2UtcGljdHVyZXMtZ3V0dGVyKSAqIC0xKTtcbiAgICBcbiAgICAgICAgLnBpY3R1cmUtaXRlbSB7XG4gICAgICAgICAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtcGljdHVyZXMtZ3V0dGVyKSBjYWxjKHZhcigtLXBhZ2UtcGljdHVyZXMtZ3V0dGVyKSAqIDIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4vLyBOb3RlOiAgQWxsIHRoZSBDU1MgdmFyaWFibGVzIGRlZmluZWQgYmVsb3cgYXJlIG92ZXJyaWRlcyBvZiBJb25pYyBlbGVtZW50cyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbi5ub3RpZmljYXRpb25zLWNvbnRlbnQge1xuICBpb24taXRlbS1kaXZpZGVyIHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIH1cblxuICAubm90aWZpY2F0aW9uLWl0ZW0ge1xuICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcblxuICAgIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCA4cHggMnB4IC05cHggdmFyKC0taW9uLWNvbG9yLWRhcmtlc3QpO1xuXG4gICAgLm5vdGlmaWNhdGlvbi1pdGVtLXdyYXBwZXIge1xuICAgICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuXG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLmRldGFpbHMtd3JhcHBlciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG5cbiAgICAgIC5kZXRhaWxzLW5hbWUge1xuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgXHRmb250LXdlaWdodDogNDAwO1xuICAgICAgXHRsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gICAgICBcdGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAgIH1cblxuICAgICAgLmRldGFpbHMtZGVzY3JpcHRpb24ge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5kYXRlLXdyYXBwZXIge1xuICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcblxuICAgICAgLm5vdGlmaWNhdGlvbi1kYXRlIHtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICMwNjA2MDYsICM2OTAwMDApO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogIzY4MDAwMDtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiByZWQgIWltcG9ydGFudDtcbn1cblxuLml0ZW0sIC5saXN0LCAuaXRlbS1jb250ZW50LCAuaXRlbS1jb21wbGV4IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuLnVzZXItcGhvdG9zLXNlY3Rpb24ge1xuICBtYXJnaW46IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMikgdmFyKC0tcGFnZS1tYXJnaW4pIHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cbi51c2VyLXBob3Rvcy1zZWN0aW9uIC5oZWFkaW5nLXJvdyB7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnVzZXItcGhvdG9zLXNlY3Rpb24gLmhlYWRpbmctcm93IC5kZXRhaWxzLXNlY3Rpb24tdGl0bGUge1xuICBtYXJnaW46IDBweDtcbn1cbi51c2VyLXBob3Rvcy1zZWN0aW9uIC5oZWFkaW5nLXJvdyAuaGVhZGluZy1jYWxsLXRvLWFjdGlvbiB7XG4gIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyA0KTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG59XG4udXNlci1waG90b3Mtc2VjdGlvbiAucGljdHVyZXMtcm93IHtcbiAgLS1pb24tZ3JpZC1jb2x1bW5zOiA0O1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4IGNhbGModmFyKC0tcGFnZS1waWN0dXJlcy1ndXR0ZXIpICogLTEpO1xufVxuLnVzZXItcGhvdG9zLXNlY3Rpb24gLnBpY3R1cmVzLXJvdyAucGljdHVyZS1pdGVtIHtcbiAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtcGljdHVyZXMtZ3V0dGVyKSBjYWxjKHZhcigtLXBhZ2UtcGljdHVyZXMtZ3V0dGVyKSAqIDIpO1xufVxuXG4ubm90aWZpY2F0aW9ucy1jb250ZW50IGlvbi1pdGVtLWRpdmlkZXIge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIC0tcGFkZGluZy1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xufVxuLm5vdGlmaWNhdGlvbnMtY29udGVudCAubm90aWZpY2F0aW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCA4cHggMnB4IC05cHggdmFyKC0taW9uLWNvbG9yLWRhcmtlc3QpO1xufVxuLm5vdGlmaWNhdGlvbnMtY29udGVudCAubm90aWZpY2F0aW9uLWl0ZW0gLm5vdGlmaWNhdGlvbi1pdGVtLXdyYXBwZXIge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm5vdGlmaWNhdGlvbnMtY29udGVudCAubm90aWZpY2F0aW9uLWl0ZW0gLmRldGFpbHMtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBwYWRkaW5nLWxlZnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cbi5ub3RpZmljYXRpb25zLWNvbnRlbnQgLm5vdGlmaWNhdGlvbi1pdGVtIC5kZXRhaWxzLXdyYXBwZXIgLmRldGFpbHMtbmFtZSB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufVxuLm5vdGlmaWNhdGlvbnMtY29udGVudCAubm90aWZpY2F0aW9uLWl0ZW0gLmRldGFpbHMtd3JhcHBlciAuZGV0YWlscy1kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luOiAwcHg7XG59XG4ubm90aWZpY2F0aW9ucy1jb250ZW50IC5ub3RpZmljYXRpb24taXRlbSAuZGF0ZS13cmFwcGVyIHtcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbn1cbi5ub3RpZmljYXRpb25zLWNvbnRlbnQgLm5vdGlmaWNhdGlvbi1pdGVtIC5kYXRlLXdyYXBwZXIgLm5vdGlmaWNhdGlvbi1kYXRlIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1hbGlnbjogZW5kO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/artists/styles/notifications.shell.scss":
/*!*********************************************************!*\
  !*** ./src/app/artists/styles/notifications.shell.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-image-shell.notification-image {\n  --image-shell-border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJ0aXN0cy9zdHlsZXMvRDpcXHNoaXRcXHBvZC9zcmNcXGFwcFxcYXJ0aXN0c1xcc3R5bGVzXFxub3RpZmljYXRpb25zLnNoZWxsLnNjc3MiLCJzcmMvYXBwL2FydGlzdHMvc3R5bGVzL25vdGlmaWNhdGlvbnMuc2hlbGwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdDQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hcnRpc3RzL3N0eWxlcy9ub3RpZmljYXRpb25zLnNoZWxsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtaW1hZ2Utc2hlbGwubm90aWZpY2F0aW9uLWltYWdlIHtcbiAgLS1pbWFnZS1zaGVsbC1ib3JkZXItcmFkaXVzOiA1MCU7XG59XG4iLCJhcHAtaW1hZ2Utc2hlbGwubm90aWZpY2F0aW9uLWltYWdlIHtcbiAgLS1pbWFnZS1zaGVsbC1ib3JkZXItcmFkaXVzOiA1MCU7XG59Il19 */"

/***/ })

}]);
//# sourceMappingURL=artists-notifications-module-es2015.js.map