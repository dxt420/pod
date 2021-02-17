(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-friends-user-friends-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/friends/user-friends.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/friends/user-friends.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserFriendsUserFriendsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <ion-header no-border>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"app/user\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content class=\"user-friends-content\">\n  <!-- <ion-segment class=\"user-friends-segment\" mode=\"md\" (ionChange)=\"segmentChanged($event)\">\n    <ion-segment-button mode=\"md\" checked=\"true\" value=\"friends\">\n      <ion-label>Friends</ion-label>\n    </ion-segment-button>\n    <ion-segment-button mode=\"md\" value=\"followers\">\n      <ion-label>Followers</ion-label>\n    </ion-segment-button>\n    <ion-segment-button mode=\"md\" value=\"following\">\n      <ion-label>Following</ion-label>\n    </ion-segment-button>\n  </ion-segment> -->\n\n  <ion-searchbar class=\"friends-searchbar\" animated mode=\"ios\" [(ngModel)]=\"searchQuery\" (ionChange)=\"searchList()\"></ion-searchbar>\n\n  <ng-template #friendItem let-friend=\"friend\">\n    <ion-row class=\"user-details-section\">\n      <ion-col class=\"user-image-wrapper\" size=\"2\">\n        <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\n          <app-image-shell class=\"user-image\" animation=\"spinner\" [src]=\"friend.image\" [alt]=\"'friend'\"></app-image-shell>\n        </app-aspect-ratio>\n      </ion-col>\n      <ion-col class=\"user-data-wrapper\">\n        <div class=\"user-info\">\n          <h3 class=\"user-name\">\n            <app-text-shell [data]=\"friend.name\"></app-text-shell>\n          </h3>\n          <h5 class=\"user-job\">\n            <app-text-shell [data]=\"friend.job\"></app-text-shell>\n          </h5>\n        </div>\n      </ion-col>\n      <ion-col class=\"user-actions-wrapper\">\n        <ion-button *ngIf=\"!friend.following\" class=\"user-action\" expand=\"block\" size=\"small\" color=\"primary\">Follow</ion-button>\n        <ion-button *ngIf=\"friend.following\" class=\"user-action\" expand=\"block\" size=\"small\" color=\"light\">Following</ion-button>\n      </ion-col>\n    </ion-row>\n  </ng-template>\n\n  <section [hidden]=\"segmentValue !== 'friends'\">\n    <ion-list class=\"friends-list\" *ngIf=\"friendsList.length > 0\">\n      <ion-item class=\"friend-item\" *ngFor=\"let friend of friendsList\">\n        <ng-container *ngTemplateOutlet=\"friendItem; context: { friend: friend }\"></ng-container>\n      </ion-item>\n    </ion-list>\n    <ng-container *ngIf=\"friendsList.length <= 0\">\n      <h3 class=\"empty-list-message\">No Friends</h3>\n    </ng-container>\n  </section>\n\n  <section [hidden]=\"segmentValue !== 'followers'\">\n    <ion-list class=\"friends-list\" *ngIf=\"followersList.length > 0\">\n      <ion-item class=\"friend-item\" *ngFor=\"let friend of followersList\">\n        <ng-container *ngTemplateOutlet=\"friendItem; context: { friend: friend }\"></ng-container>\n      </ion-item>\n    </ion-list>\n    <ng-container *ngIf=\"followersList.length <= 0\">\n      <h3 class=\"empty-list-message\">No Followers</h3>\n    </ng-container>\n  </section>\n\n  <section [hidden]=\"segmentValue !== 'following'\">\n    <ion-list class=\"friends-list\" *ngIf=\"followingList.length > 0\">\n      <ion-item class=\"friend-item\" *ngFor=\"let friend of followingList\">\n        <ng-container *ngTemplateOutlet=\"friendItem; context: { friend: friend }\"></ng-container>\n      </ion-item>\n    </ion-list>\n    <ng-container *ngIf=\"followingList.length <= 0\">\n      <h3 class=\"empty-list-message\">No Following</h3>\n    </ng-container>\n  </section>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/shell/data-store.ts":
  /*!*************************************!*\
    !*** ./src/app/shell/data-store.ts ***!
    \*************************************/

  /*! exports provided: ShellModel, DataStore */

  /***/
  function srcAppShellDataStoreTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShellModel", function () {
      return ShellModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataStore", function () {
      return DataStore;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _config_app_shell_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./config/app-shell.config */
    "./src/app/shell/config/app-shell.config.ts");

    class ShellModel {
      constructor() {
        this.isShell = false;
      }

    }

    class DataStore {
      constructor(shellModel) {
        this.shellModel = shellModel; // We wait on purpose 2 secs on local environment when fetching from json to simulate the backend roundtrip.
        // However, in production you should set this delay to 0 in the assets/config/app-shell.config.prod.json file.
        // tslint:disable-next-line:max-line-length

        this.networkDelay = _config_app_shell_config__WEBPACK_IMPORTED_MODULE_3__["AppShellConfig"].settings && _config_app_shell_config__WEBPACK_IMPORTED_MODULE_3__["AppShellConfig"].settings.networkDelay ? _config_app_shell_config__WEBPACK_IMPORTED_MODULE_3__["AppShellConfig"].settings.networkDelay : 0;
        this.timeline = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
      } // Static function with generics
      // (ref: https://stackoverflow.com/a/24293088/1116959)
      // Append a shell (T & ShellModel) to every value (T) emmited to the timeline


      static AppendShell(dataObservable, shellModel, networkDelay = 400) {
        const delayObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(true).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(networkDelay)); // Assign shell flag accordingly
        // (ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)

        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([delayObservable, dataObservable]).pipe( // Dismiss unnecessary delayValue
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(([delayValue, dataValue]) => Object.assign(dataValue, {
          isShell: false
        })), // Set the shell model as the initial value
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(Object.assign(shellModel, {
          isShell: true
        })));
      }

      load(dataSourceObservable) {
        const dataSourceWithShellObservable = DataStore.AppendShell(dataSourceObservable, this.shellModel, this.networkDelay);
        dataSourceWithShellObservable.subscribe(dataValue => {
          this.timeline.next(dataValue);
        });
      }

      get state() {
        return this.timeline.asObservable();
      }

    }
    /***/

  },

  /***/
  "./src/app/user/friends/styles/user-friends.md.scss":
  /*!**********************************************************!*\
    !*** ./src/app/user/friends/styles/user-friends.md.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserFriendsStylesUserFriendsMdScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host-context(.plt-mobile.md) .user-details-section .user-actions-wrapper {\n  max-width: 12ex;\n  max-width: 12ch;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9haXIvRG9jdW1lbnRzL0dpdEh1Yi9wb2Qvc3JjL2FwcC91c2VyL2ZyaWVuZHMvc3R5bGVzL3VzZXItZnJpZW5kcy5tZC5zY3NzIiwic3JjL2FwcC91c2VyL2ZyaWVuZHMvc3R5bGVzL3VzZXItZnJpZW5kcy5tZC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0UsZUFBQTtFQUNBLGVBQUE7QUNETiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvZnJpZW5kcy9zdHlsZXMvdXNlci1mcmllbmRzLm1kLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdC1jb250ZXh0KC5wbHQtbW9iaWxlLm1kKSB7XG4gIC51c2VyLWRldGFpbHMtc2VjdGlvbiB7XG4gICAgLnVzZXItYWN0aW9ucy13cmFwcGVyIHtcbiAgICAgIG1heC13aWR0aDogMTJleDtcbiAgICAgIG1heC13aWR0aDogMTJjaDtcbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0LWNvbnRleHQoLnBsdC1tb2JpbGUubWQpIC51c2VyLWRldGFpbHMtc2VjdGlvbiAudXNlci1hY3Rpb25zLXdyYXBwZXIge1xuICBtYXgtd2lkdGg6IDEyZXg7XG4gIG1heC13aWR0aDogMTJjaDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/user/friends/styles/user-friends.page.scss":
  /*!************************************************************!*\
    !*** ./src/app/user/friends/styles/user-friends.page.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserFriendsStylesUserFriendsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  --page-margin: var(--app-narrow-margin);\n  --page-border-radius: var(--app-fair-radius);\n  --page-segment-indicator-height: 2px;\n}\n\nion-list {\n  --ion-background-color: transparent !important;\n}\n\nion-content {\n  --background: linear-gradient(to top, #060606, #690000);\n}\n\nion-toolbar {\n  --background: #680000;\n}\n\n.user-friends-segment {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 8;\n}\n\n.user-friends-segment ion-segment-button {\n  --padding-end: var(--page-margin);\n  --padding-start: var(--page-margin);\n  --color: rgba(var(--ion-color-dark-rgb), 0.4);\n  --color-checked: var(--ion-color-dark);\n  --indicator-color-checked: var(--ion-color-dark);\n  text-transform: capitalize;\n  min-height: calc((var(--page-margin) * 3) - var(--page-segment-indicator-height));\n}\n\n.user-friends-segment ion-segment-button ion-label {\n  margin-top: calc(var(--page-margin) / 2);\n  margin-bottom: calc(var(--page-margin) / 4);\n}\n\nion-searchbar.friends-searchbar {\n  padding: var(--page-margin);\n}\n\n.friends-list {\n  padding: 0px var(--page-margin);\n  margin-bottom: calc(var(--page-margin) * 3);\n}\n\n.empty-list-message {\n  margin: calc(var(--page-margin) * 3);\n  color: rgba(var(--ion-color-dark-rgb), 0.4);\n  text-align: center;\n}\n\nion-item.friend-item {\n  --inner-padding-start: 0px;\n  --inner-padding-end: 0px;\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --padding-bottom: var(--page-margin);\n  --inner-padding-bottom: var(--page-margin);\n}\n\nion-item.friend-item:last-child {\n  --border-style: none;\n  --padding-bottom: 0px;\n  --inner-padding-bottom: 0px;\n}\n\nion-item.friend-item .user-details-section {\n  --ion-grid-column-padding: 0px;\n  width: 100%;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\nion-item.friend-item .user-details-section .user-data-wrapper {\n  padding-left: var(--page-margin);\n  padding-right: calc(var(--page-margin) / 2);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\nion-item.friend-item .user-details-section .user-data-wrapper .user-info:not(:last-child) {\n  margin-bottom: calc(var(--page-margin) / 2);\n}\n\nion-item.friend-item .user-details-section .user-data-wrapper .user-info .user-name {\n  margin: 0px;\n  margin-bottom: 4px;\n  font-size: 16px;\n}\n\nion-item.friend-item .user-details-section .user-data-wrapper .user-info .user-job {\n  margin: 0px;\n  color: rgba(var(--ion-color-dark-rgb), 0.4);\n  font-size: 14px;\n}\n\nion-item.friend-item .user-details-section .user-actions-wrapper {\n  font-size: 14px;\n  max-width: 10ex;\n  max-width: 10ch;\n}\n\nion-item.friend-item .user-details-section .user-actions-wrapper .user-action {\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9haXIvRG9jdW1lbnRzL0dpdEh1Yi9wb2Qvc3JjL2FwcC91c2VyL2ZyaWVuZHMvc3R5bGVzL3VzZXItZnJpZW5kcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3VzZXIvZnJpZW5kcy9zdHlsZXMvdXNlci1mcmllbmRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHVDQUFBO0VBRUEsNENBQUE7RUFFQSxvQ0FBQTtBQ0hGOztBRFNFO0VBQ0UsOENBQUE7QUNOSjs7QURVQTtFQUNFLHVEQUFBO0FDUEY7O0FEV0E7RUFDRSxxQkFBQTtBQ1JGOztBRFlBO0VBQ0Usd0JBQUE7RUFBQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0FDVEY7O0FEWUU7RUFDRSxpQ0FBQTtFQUNBLG1DQUFBO0VBRUEsNkNBQUE7RUFDQSxzQ0FBQTtFQUNBLGdEQUFBO0VBRUEsMEJBQUE7RUFDQSxpRkFBQTtBQ1pKOztBRGNJO0VBQ0Usd0NBQUE7RUFDQSwyQ0FBQTtBQ1pOOztBRGlCQTtFQUNFLDJCQUFBO0FDZEY7O0FEaUJBO0VBQ0UsK0JBQUE7RUFDQSwyQ0FBQTtBQ2RGOztBRGlCQTtFQUNFLG9DQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQkFBQTtBQ2RGOztBRGlCQTtFQUNFLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSwwQ0FBQTtBQ2RGOztBRGdCRTtFQUNFLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtBQ2RKOztBRGlCRTtFQUNFLDhCQUFBO0VBRUEsV0FBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNoQko7O0FEa0JJO0VBQ0UsZ0NBQUE7RUFDQSwyQ0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNoQk47O0FEbUJRO0VBQ0UsMkNBQUE7QUNqQlY7O0FEb0JRO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ2xCVjs7QURxQlE7RUFDRSxXQUFBO0VBQ0EsMkNBQUE7RUFDQSxlQUFBO0FDbkJWOztBRHdCSTtFQUNFLGVBQUE7RUFLQSxlQUFBO0VBQ0EsZUFBQTtBQzFCTjs7QUQ0Qk07RUFDRSxXQUFBO0FDMUJSIiwiZmlsZSI6InNyYy9hcHAvdXNlci9mcmllbmRzL3N0eWxlcy91c2VyLWZyaWVuZHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ3VzdG9tIHZhcmlhYmxlc1xuLy8gTm90ZTogIFRoZXNlIG9uZXMgd2VyZSBhZGRlZCBieSB1cyBhbmQgaGF2ZSBub3RoaW5nIHRvIGRvIHdpdGggSW9uaWMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXG46aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1uYXJyb3ctbWFyZ2luKTtcblxuICAtLXBhZ2UtYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLWZhaXItcmFkaXVzKTtcbiAgLy8gLS1wYWdlLXNlZ21lbnQtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQpO1xuICAtLXBhZ2Utc2VnbWVudC1pbmRpY2F0b3ItaGVpZ2h0OiAycHg7XG59XG5cblxuXG5cbiAgaW9uLWxpc3QgIHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIH1cblxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzA2MDYwNiwgIzY5MDAwMCk7XG5cbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICM2ODAwMDA7XG59XG5cbi8vIE5vdGU6ICBBbGwgdGhlIENTUyB2YXJpYWJsZXMgZGVmaW5lZCBiZWxvdyBhcmUgb3ZlcnJpZGVzIG9mIElvbmljIGVsZW1lbnRzIENTUyBDdXN0b20gUHJvcGVydGllc1xuLnVzZXItZnJpZW5kcy1zZWdtZW50IHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiA4O1xuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLXNlZ21lbnQtYmFja2dyb3VuZCk7XG5cbiAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgICAtLXBhZGRpbmctZW5kOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgLy8gLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLXNlZ21lbnQtYmFja2dyb3VuZCk7XG4gICAgLS1jb2xvcjogcmdiYSh2YXIoLS1pb24tY29sb3ItZGFyay1yZ2IpLCAwLjQpO1xuICAgIC0tY29sb3ItY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgIC0taW5kaWNhdG9yLWNvbG9yLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcblxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIG1pbi1oZWlnaHQ6IGNhbGMoKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDMpIC0gdmFyKC0tcGFnZS1zZWdtZW50LWluZGljYXRvci1oZWlnaHQpKTtcblxuICAgIGlvbi1sYWJlbCB7XG4gICAgICBtYXJnaW4tdG9wOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyA0KTtcbiAgICB9XG4gIH1cbn1cblxuaW9uLXNlYXJjaGJhci5mcmllbmRzLXNlYXJjaGJhciB7XG4gIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cblxuLmZyaWVuZHMtbGlzdCB7XG4gIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMyk7XG59XG5cbi5lbXB0eS1saXN0LW1lc3NhZ2Uge1xuICBtYXJnaW46IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMyk7XG4gIGNvbG9yOiByZ2JhKHZhcigtLWlvbi1jb2xvci1kYXJrLXJnYiksIDAuNCk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWl0ZW0uZnJpZW5kLWl0ZW0ge1xuICAtLWlubmVyLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIC0taW5uZXItcGFkZGluZy1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcblxuICAmOmxhc3QtY2hpbGQge1xuICAgIC0tYm9yZGVyLXN0eWxlOiBub25lO1xuICAgIC0tcGFkZGluZy1ib3R0b206IDBweDtcbiAgICAtLWlubmVyLXBhZGRpbmctYm90dG9tOiAwcHg7XG4gIH1cblxuICAudXNlci1kZXRhaWxzLXNlY3Rpb24ge1xuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgIHdpZHRoOiAxMDAlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAudXNlci1kYXRhLXdyYXBwZXIge1xuICAgICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgLnVzZXItaW5mbyB7XG4gICAgICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC51c2VyLW5hbWUge1xuICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIH1cblxuICAgICAgICAudXNlci1qb2Ige1xuICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgIGNvbG9yOiByZ2JhKHZhcigtLWlvbi1jb2xvci1kYXJrLXJnYiksIDAuNCk7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnVzZXItYWN0aW9ucy13cmFwcGVyIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcblxuICAgICAgLy8gTWFrZSBzdXJlIHdlIGFsd2F5cyBoYXZlIHNwYWNlIGZvciAxMCBjaGFyYWN0ZXJzXG4gICAgICAvLyBBcyBjaCAod2lkdGggb2YgdGhlIGNoYXJhY3RlciAnMCcpIHVuaXQgaXMgbm90IDEwMCUgc3VwcG9ydGVkLCB3ZSB3aWxsIHVzZSBleCAoaGVpZ2h0IG9mIHRoZSAneCcgY2hhcmFjdGVyKSBhcyBhIGZhbGxiYWNrXG4gICAgICAvLyBTZWU6IGh0dHBzOi8vd3d3LnF1aXJrc21vZGUub3JnL2Nzcy91bml0cy12YWx1ZXMvXG4gICAgICBtYXgtd2lkdGg6IDEwZXg7IC8vIFRoZSAneCcgY2hhcmFjdGVyIGlzIHNlbWktc3F1YXJlIGNoYXJcbiAgICAgIG1heC13aWR0aDogMTBjaDsgLy8gY2ggaXMgdGhlIG9ubHkgZm9udCB1bml0IGJhc2VkIG9uIHRoZSB3aWR0aCBvZiBjaGFyYWN0ZXJzXG5cbiAgICAgIC51c2VyLWFjdGlvbiB7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtbmFycm93LW1hcmdpbik7XG4gIC0tcGFnZS1ib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtZmFpci1yYWRpdXMpO1xuICAtLXBhZ2Utc2VnbWVudC1pbmRpY2F0b3ItaGVpZ2h0OiAycHg7XG59XG5cbmlvbi1saXN0IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICMwNjA2MDYsICM2OTAwMDApO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogIzY4MDAwMDtcbn1cblxuLnVzZXItZnJpZW5kcy1zZWdtZW50IHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiA4O1xufVxuLnVzZXItZnJpZW5kcy1zZWdtZW50IGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIC0tcGFkZGluZy1lbmQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIC0tY29sb3I6IHJnYmEodmFyKC0taW9uLWNvbG9yLWRhcmstcmdiKSwgMC40KTtcbiAgLS1jb2xvci1jaGVja2VkOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gIC0taW5kaWNhdG9yLWNvbG9yLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDMpIC0gdmFyKC0tcGFnZS1zZWdtZW50LWluZGljYXRvci1oZWlnaHQpKTtcbn1cbi51c2VyLWZyaWVuZHMtc2VnbWVudCBpb24tc2VnbWVudC1idXR0b24gaW9uLWxhYmVsIHtcbiAgbWFyZ2luLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyA0KTtcbn1cblxuaW9uLXNlYXJjaGJhci5mcmllbmRzLXNlYXJjaGJhciB7XG4gIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cblxuLmZyaWVuZHMtbGlzdCB7XG4gIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMyk7XG59XG5cbi5lbXB0eS1saXN0LW1lc3NhZ2Uge1xuICBtYXJnaW46IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogMyk7XG4gIGNvbG9yOiByZ2JhKHZhcigtLWlvbi1jb2xvci1kYXJrLXJnYiksIDAuNCk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWl0ZW0uZnJpZW5kLWl0ZW0ge1xuICAtLWlubmVyLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIC0taW5uZXItcGFkZGluZy1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cbmlvbi1pdGVtLmZyaWVuZC1pdGVtOmxhc3QtY2hpbGQge1xuICAtLWJvcmRlci1zdHlsZTogbm9uZTtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xuICAtLWlubmVyLXBhZGRpbmctYm90dG9tOiAwcHg7XG59XG5pb24taXRlbS5mcmllbmQtaXRlbSAudXNlci1kZXRhaWxzLXNlY3Rpb24ge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuaW9uLWl0ZW0uZnJpZW5kLWl0ZW0gLnVzZXItZGV0YWlscy1zZWN0aW9uIC51c2VyLWRhdGEtd3JhcHBlciB7XG4gIHBhZGRpbmctbGVmdDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBwYWRkaW5nLXJpZ2h0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbmlvbi1pdGVtLmZyaWVuZC1pdGVtIC51c2VyLWRldGFpbHMtc2VjdGlvbiAudXNlci1kYXRhLXdyYXBwZXIgLnVzZXItaW5mbzpub3QoOmxhc3QtY2hpbGQpIHtcbiAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbn1cbmlvbi1pdGVtLmZyaWVuZC1pdGVtIC51c2VyLWRldGFpbHMtc2VjdGlvbiAudXNlci1kYXRhLXdyYXBwZXIgLnVzZXItaW5mbyAudXNlci1uYW1lIHtcbiAgbWFyZ2luOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuaW9uLWl0ZW0uZnJpZW5kLWl0ZW0gLnVzZXItZGV0YWlscy1zZWN0aW9uIC51c2VyLWRhdGEtd3JhcHBlciAudXNlci1pbmZvIC51c2VyLWpvYiB7XG4gIG1hcmdpbjogMHB4O1xuICBjb2xvcjogcmdiYSh2YXIoLS1pb24tY29sb3ItZGFyay1yZ2IpLCAwLjQpO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5pb24taXRlbS5mcmllbmQtaXRlbSAudXNlci1kZXRhaWxzLXNlY3Rpb24gLnVzZXItYWN0aW9ucy13cmFwcGVyIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXgtd2lkdGg6IDEwZXg7XG4gIG1heC13aWR0aDogMTBjaDtcbn1cbmlvbi1pdGVtLmZyaWVuZC1pdGVtIC51c2VyLWRldGFpbHMtc2VjdGlvbiAudXNlci1hY3Rpb25zLXdyYXBwZXIgLnVzZXItYWN0aW9uIHtcbiAgbWFyZ2luOiAwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/user/friends/styles/user-friends.shell.scss":
  /*!*************************************************************!*\
    !*** ./src/app/user/friends/styles/user-friends.shell.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserFriendsStylesUserFriendsShellScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "app-image-shell.user-image {\n  --image-shell-border-radius: var(--page-border-radius);\n}\n\n.user-name > app-text-shell {\n  --text-shell-line-height: 16px;\n  max-width: 50%;\n}\n\n.user-name > app-text-shell.text-loaded {\n  max-width: unset;\n}\n\n.user-job > app-text-shell {\n  --text-shell-line-height: 14px;\n  max-width: 70%;\n}\n\n.user-job > app-text-shell.text-loaded {\n  max-width: unset;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9haXIvRG9jdW1lbnRzL0dpdEh1Yi9wb2Qvc3JjL2FwcC91c2VyL2ZyaWVuZHMvc3R5bGVzL3VzZXItZnJpZW5kcy5zaGVsbC5zY3NzIiwic3JjL2FwcC91c2VyL2ZyaWVuZHMvc3R5bGVzL3VzZXItZnJpZW5kcy5zaGVsbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0RBQUE7QUNDRjs7QURFQTtFQUNFLDhCQUFBO0VBQ0EsY0FBQTtBQ0NGOztBRENFO0VBQ0UsZ0JBQUE7QUNDSjs7QURHQTtFQUNFLDhCQUFBO0VBQ0EsY0FBQTtBQ0FGOztBREVFO0VBQ0UsZ0JBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvZnJpZW5kcy9zdHlsZXMvdXNlci1mcmllbmRzLnNoZWxsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtaW1hZ2Utc2hlbGwudXNlci1pbWFnZSB7XG4gIC0taW1hZ2Utc2hlbGwtYm9yZGVyLXJhZGl1czogdmFyKC0tcGFnZS1ib3JkZXItcmFkaXVzKTtcbn1cblxuLnVzZXItbmFtZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNnB4O1xuICBtYXgtd2lkdGg6IDUwJTtcblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBtYXgtd2lkdGg6IHVuc2V0O1xuICB9XG59XG5cbi51c2VyLWpvYiA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xuICBtYXgtd2lkdGg6IDcwJTtcblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBtYXgtd2lkdGg6IHVuc2V0O1xuICB9XG59XG4iLCJhcHAtaW1hZ2Utc2hlbGwudXNlci1pbWFnZSB7XG4gIC0taW1hZ2Utc2hlbGwtYm9yZGVyLXJhZGl1czogdmFyKC0tcGFnZS1ib3JkZXItcmFkaXVzKTtcbn1cblxuLnVzZXItbmFtZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNnB4O1xuICBtYXgtd2lkdGg6IDUwJTtcbn1cbi51c2VyLW5hbWUgPiBhcHAtdGV4dC1zaGVsbC50ZXh0LWxvYWRlZCB7XG4gIG1heC13aWR0aDogdW5zZXQ7XG59XG5cbi51c2VyLWpvYiA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xuICBtYXgtd2lkdGg6IDcwJTtcbn1cbi51c2VyLWpvYiA+IGFwcC10ZXh0LXNoZWxsLnRleHQtbG9hZGVkIHtcbiAgbWF4LXdpZHRoOiB1bnNldDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/user/friends/user-friends.model.ts":
  /*!****************************************************!*\
    !*** ./src/app/user/friends/user-friends.model.ts ***!
    \****************************************************/

  /*! exports provided: UserFriendsModel */

  /***/
  function srcAppUserFriendsUserFriendsModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserFriendsModel", function () {
      return UserFriendsModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _shell_data_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../shell/data-store */
    "./src/app/shell/data-store.ts");

    class UserFriendsModel extends _shell_data_store__WEBPACK_IMPORTED_MODULE_1__["ShellModel"] {
      constructor() {
        super();
        this.friends = [{
          image: '',
          name: '',
          job: '',
          followers: '',
          followings: '',
          following: false
        }, {
          image: '',
          name: '',
          job: '',
          followers: '',
          followings: '',
          following: true
        }, {
          image: '',
          name: '',
          job: '',
          followers: '',
          followings: '',
          following: false
        }, {
          image: '',
          name: '',
          job: '',
          followers: '',
          followings: '',
          following: false
        }];
        this.followers = [{
          image: '',
          name: '',
          job: '',
          followers: '',
          followings: '',
          following: false
        }, {
          image: '',
          name: '',
          job: '',
          followers: '',
          followings: '',
          following: false
        }, {
          image: '',
          name: '',
          job: '',
          followers: '',
          followings: '',
          following: false
        }, {
          image: '',
          name: '',
          job: '',
          followers: '',
          followings: '',
          following: true
        }];
        this.following = [{
          image: '',
          name: '',
          job: '',
          followers: '',
          followings: '',
          following: false
        }, {
          image: '',
          name: '',
          job: '',
          followers: '',
          followings: '',
          following: false
        }, {
          image: '',
          name: '',
          job: '',
          followers: '',
          followings: '',
          following: false
        }, {
          image: '',
          name: '',
          job: '',
          followers: '',
          followings: '',
          following: false
        }];
      }

    }
    /***/

  },

  /***/
  "./src/app/user/friends/user-friends.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/user/friends/user-friends.module.ts ***!
    \*****************************************************/

  /*! exports provided: UserFriendsPageModule */

  /***/
  function srcAppUserFriendsUserFriendsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserFriendsPageModule", function () {
      return UserFriendsPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _user_friends_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./user-friends.page */
    "./src/app/user/friends/user-friends.page.ts");
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../user.service */
    "./src/app/user/user.service.ts");
    /* harmony import */


    var _user_friends_resolver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./user-friends.resolver */
    "./src/app/user/friends/user-friends.resolver.ts");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../components/components.module */
    "./src/app/components/components.module.ts");

    const routes = [{
      path: '',
      component: _user_friends_page__WEBPACK_IMPORTED_MODULE_6__["UserFriendsPage"],
      resolve: {
        data: _user_friends_resolver__WEBPACK_IMPORTED_MODULE_8__["UserFriendsResolver"]
      }
    }];
    let UserFriendsPageModule = class UserFriendsPageModule {};
    UserFriendsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_9__["ComponentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      declarations: [_user_friends_page__WEBPACK_IMPORTED_MODULE_6__["UserFriendsPage"]],
      providers: [_user_friends_resolver__WEBPACK_IMPORTED_MODULE_8__["UserFriendsResolver"], _user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]]
    })], UserFriendsPageModule);
    /***/
  },

  /***/
  "./src/app/user/friends/user-friends.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/user/friends/user-friends.page.ts ***!
    \***************************************************/

  /*! exports provided: UserFriendsPage */

  /***/
  function srcAppUserFriendsUserFriendsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserFriendsPage", function () {
      return UserFriendsPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    let UserFriendsPage = class UserFriendsPage {
      constructor(route) {
        this.route = route;
        this.segmentValue = 'friends';
        this.searchQuery = '';
        this.showFilters = false;
      }

      get isShell() {
        return this.data && this.data.isShell ? true : false;
      }

      ngOnInit() {
        this.route.data.subscribe(resolvedRouteData => {
          const friendsDataStore = resolvedRouteData['data'];
          friendsDataStore.state.subscribe(state => {
            this.data = state;
            this.friendsList = this.data.friends;
            this.followersList = this.data.followers;
            this.followingList = this.data.following;
          }, error => {});
        }, error => {});
      }

      segmentChanged(ev) {
        this.segmentValue = ev.detail.value; // Check if there's any filter and apply it

        this.searchList();
      }

      searchList() {
        const query = this.searchQuery && this.searchQuery !== null ? this.searchQuery : '';

        if (this.segmentValue === 'friends') {
          this.friendsList = this.filterList(this.data.friends, query);
        } else if (this.segmentValue === 'followers') {
          this.followersList = this.filterList(this.data.followers, query);
        } else if (this.segmentValue === 'following') {
          this.followingList = this.filterList(this.data.following, query);
        }
      }

      filterList(list, query) {
        return list.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));
      }

    };

    UserFriendsPage.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.is-shell'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], UserFriendsPage.prototype, "isShell", null);
    UserFriendsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-friends',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-friends.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/friends/user-friends.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./styles/user-friends.page.scss */
      "./src/app/user/friends/styles/user-friends.page.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./styles/user-friends.shell.scss */
      "./src/app/user/friends/styles/user-friends.shell.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./styles/user-friends.md.scss */
      "./src/app/user/friends/styles/user-friends.md.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])], UserFriendsPage);
    /***/
  },

  /***/
  "./src/app/user/friends/user-friends.resolver.ts":
  /*!*******************************************************!*\
    !*** ./src/app/user/friends/user-friends.resolver.ts ***!
    \*******************************************************/

  /*! exports provided: UserFriendsResolver */

  /***/
  function srcAppUserFriendsUserFriendsResolverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserFriendsResolver", function () {
      return UserFriendsResolver;
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


    var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../user.service */
    "./src/app/user/user.service.ts");

    let UserFriendsResolver = class UserFriendsResolver {
      constructor(userService) {
        this.userService = userService;
      }

      resolve() {
        const dataSource = this.userService.getFriendsDataSource();
        const dataStore = this.userService.getFriendsStore(dataSource);
        return dataStore;
      }

    };

    UserFriendsResolver.ctorParameters = () => [{
      type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
    }];

    UserFriendsResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])], UserFriendsResolver);
    /***/
  },

  /***/
  "./src/app/user/profile/user-profile.model.ts":
  /*!****************************************************!*\
    !*** ./src/app/user/profile/user-profile.model.ts ***!
    \****************************************************/

  /*! exports provided: UserProfileModel */

  /***/
  function srcAppUserProfileUserProfileModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserProfileModel", function () {
      return UserProfileModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _shell_data_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../shell/data-store */
    "./src/app/shell/data-store.ts");

    class UserProfileModel extends _shell_data_store__WEBPACK_IMPORTED_MODULE_1__["ShellModel"] {
      constructor() {
        super();
        this.friends = [{
          image: '',
          name: ''
        }, {
          image: '',
          name: ''
        }, {
          image: '',
          name: ''
        }, {
          image: '',
          name: ''
        }];
        this.photos = ['', '', '', ''];
      }

    }
    /***/

  },

  /***/
  "./src/app/user/user.service.ts":
  /*!**************************************!*\
    !*** ./src/app/user/user.service.ts ***!
    \**************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppUserUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _profile_user_profile_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./profile/user-profile.model */
    "./src/app/user/profile/user-profile.model.ts");
    /* harmony import */


    var _friends_user_friends_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./friends/user-friends.model */
    "./src/app/user/friends/user-friends.model.ts");
    /* harmony import */


    var _shell_data_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shell/data-store */
    "./src/app/shell/data-store.ts");

    let UserService = class UserService {
      constructor(http) {
        this.http = http;
      }

      getProfileDataSource() {
        return this.http.get('./assets/sample-data/user/user-profile.json');
      }

      getProfileStore(dataSource) {
        // Use cache if available
        if (!this.profileDataStore) {
          // Initialize the model specifying that it is a shell model
          const shellModel = new _profile_user_profile_model__WEBPACK_IMPORTED_MODULE_3__["UserProfileModel"]();
          this.profileDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_5__["DataStore"](shellModel); // Trigger the loading mechanism (with shell) in the dataStore

          this.profileDataStore.load(dataSource);
        }

        return this.profileDataStore;
      }

      getFriendsDataSource() {
        return this.http.get('./assets/sample-data/user/user-friends.json');
      }

      getFriendsStore(dataSource) {
        // Use cache if available
        if (!this.friendsDataStore) {
          // Initialize the model specifying that it is a shell model
          const shellModel = new _friends_user_friends_model__WEBPACK_IMPORTED_MODULE_4__["UserFriendsModel"]();
          this.friendsDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_5__["DataStore"](shellModel); // Trigger the loading mechanism (with shell) in the dataStore

          this.friendsDataStore.load(dataSource);
        }

        return this.friendsDataStore;
      }

    };

    UserService.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
    }];

    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], UserService);
    /***/
  }
}]);
//# sourceMappingURL=user-friends-user-friends-module-es5.js.map