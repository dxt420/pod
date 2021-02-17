(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["musicplayer-musicplayer-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/musicplayer/musicplayer.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/musicplayer/musicplayer.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMusicplayerMusicplayerPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    \n  <ion-toolbar mode=\"ios\">\n      <ion-buttons slot=\"start\">\n          <ion-back-button defaultHref=\"musicplayer\"></ion-back-button>\n        </ion-buttons>\n    <ion-title text-center text-uppercase color=\"light\">\n      Playing from Album\n      <br>\n     <span text-lowercase class=\"subT\">Rick and Morty</span> \n    </ion-title>\n   \n  \n  </ion-toolbar>\n  <!-- <ion-toolbar mode=\"ios\">\n    <ion-title text-center text-uppercase color=\"light\">Playing Music in Ionic-Capacitor</ion-title>\n  </ion-toolbar> -->\n</ion-header>\n\n<ion-content>\n  <div class=\"fixedContent\">\n    <ion-thumbnail [ngStyle]=\"{'background':'url('+ image +')'}\"></ion-thumbnail>\n  </div>\n\n  <div class=\"padding_Top\">\n    <div class=\"fixedContent\">\n      <ion-text color=\"light\">Hotel California</ion-text>\n      <p text-uppercase color=\"light\" class=\"pUser microsoft marquee \">Eagles</p>\n    </div>\n    <ion-range min=\"0\" max=\"{{duration}}\" [(ngModel)]=\"position\" color=\"light\">\n    </ion-range>\n    <div class=\"rangePlaytime\">\n      <ion-label class=\"startTime\" color=\"light\">{{ display_position }}</ion-label>\n      <ion-label class=\"endTime\" color=\"light\" *ngIf=\"duration == -1\">--:--</ion-label>\n      <ion-label class=\"endTime\" color=\"light\" *ngIf=\"duration != -1\">{{ display_duration }}</ion-label>\n    </div>\n\n  </div>\n\n  <ion-grid>\n    <ion-row justify-content-center align-items-center style=\"height: 100%\">\n      <ion-col>\n        <div class=\"flexRow\">\n          <div>\n            <ion-button fill=\"clear\" color=\"light\">\n              <ion-icon name=\"heart-empty\" class=\"Iconsize_For_Rev\"></ion-icon>\n            </ion-button>\n          </div>\n\n          <div>\n            <ion-button fill=\"clear\" color=\"light\" (click)=\"controlSeconds('back')\">\n              <ion-icon name=\"rewind\"></ion-icon>\n            </ion-button>\n          </div>\n\n          <div>\n            <ion-button class=\"play_pause_btn\" (click)=\"play()\" color=\"light\" *ngIf=\"!is_playing\" justify-content-center\n              [disabled]=\"!is_ready\" align-items-center>\n              <ion-icon name=\"play\" class=\"darkColor\"></ion-icon>\n            </ion-button>\n\n            <ion-button class=\"play_pause_btn\" (click)=\"pause()\" color=\"light\" *ngIf=\"is_playing\" justify-content-center\n              [disabled]=\"!is_ready\" align-items-center>\n              <ion-icon name=\"pause\" class=\"darkColor\"></ion-icon>\n            </ion-button>\n          </div>\n\n          <div>\n            <ion-button fill=\"clear\" color=\"light\" (click)=\"controlSeconds('forward')\">\n              <ion-icon name=\"fastforward\" class=\"Iconsize_For_Rev\"></ion-icon>\n            </ion-button>\n          </div>\n\n          <div>\n            <ion-button fill=\"clear\" color=\"light\">\n              <ion-icon name=\"remove-circle-outline\" class=\"Iconsize_For_Rev\"></ion-icon>\n            </ion-button>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item lines=\"none\" class=\"transparent_Item\">\n          <ion-button slot=\"start\" fill=\"clear\" color=\"light\">\n            <ion-icon name=\"flash\" expand=\"icon-only\" class=\"Iconsize_For_Rev\"></ion-icon>\n          </ion-button>\n          <ion-button slot=\"end\" fill=\"clear\" color=\"light\">\n            <ion-icon name=\"share\" expand=\"icon-only\" class=\"Iconsize_For_Rev\"></ion-icon>\n          </ion-button>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n<!-- <ion-footer color=\"primary\">\n  <ion-button expand=\"full\">\n    <a href=\"https://enappd.com\">More Ionic 4 Templates & Starters</a>\n  </ion-button>\n</ion-footer> -->";
    /***/
  },

  /***/
  "./src/app/musicplayer/musicplayer.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/musicplayer/musicplayer.module.ts ***!
    \***************************************************/

  /*! exports provided: MusicplayerPageModule */

  /***/
  function srcAppMusicplayerMusicplayerModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MusicplayerPageModule", function () {
      return MusicplayerPageModule;
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


    var _musicplayer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./musicplayer.page */
    "./src/app/musicplayer/musicplayer.page.ts");
    /**
     * Ionic 4 Spotify app starter - Ion Spotify (https://store.enappd.com/product/ionic-4-spotify-app-starter)
     *
     * Copyright © 2019-present Enappd. All rights reserved.
     *
     * This source code is licensed as per the terms found in the
     * LICENSE.md file in the root directory of this source tree.
     */


    const routes = [{
      path: '',
      component: _musicplayer_page__WEBPACK_IMPORTED_MODULE_6__["MusicplayerPage"]
    }];
    let MusicplayerPageModule = class MusicplayerPageModule {};
    MusicplayerPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_musicplayer_page__WEBPACK_IMPORTED_MODULE_6__["MusicplayerPage"]]
    })], MusicplayerPageModule);
    /***/
  },

  /***/
  "./src/app/musicplayer/musicplayer.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/musicplayer/musicplayer.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMusicplayerMusicplayerPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --background: linear-gradient(to top, #060606, #00695c);\n}\n\nion-toolbar {\n  --background: #00685b;\n}\n\nion-footer {\n  background: black;\n}\n\nion-footer a {\n  color: white !important;\n  text-decoration: none !important;\n}\n\n.marquee {\n  width: 450px;\n  margin: 0 auto;\n  overflow: hidden;\n  white-space: nowrap;\n  box-sizing: border-box;\n  -webkit-animation: marquee 50s linear infinite;\n          animation: marquee 50s linear infinite;\n}\n\nion-title {\n  font-size: 11px;\n}\n\n.subT {\n  font-weight: 400;\n}\n\nion-title.textSubtitle {\n  font-size: 11px;\n  font-weight: bold;\n}\n\n.marquee:hover {\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n}\n\n/* Make it move */\n\n@-webkit-keyframes marquee {\n  0% {\n    text-indent: 30em;\n  }\n  100% {\n    text-indent: -105em;\n  }\n}\n\n@keyframes marquee {\n  0% {\n    text-indent: 30em;\n  }\n  100% {\n    text-indent: -105em;\n  }\n}\n\n.fixedContent {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  padding-top: 24px;\n}\n\n.fixedContent ion-text {\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.fixedContent .pUser {\n  color: var(--ion-color-light-shade);\n  font-size: 14px;\n}\n\n.fixedContent ion-thumbnail {\n  width: 35vh;\n  height: 35vh;\n  background-size: cover !important;\n  background-position: center !important;\n  margin-bottom: 16px;\n  box-shadow: 0 4px 5px -2px rgba(0, 0, 0, 0.6), 0 2px 4px 0 rgba(0, 0, 0, 0.66), 0 1px 5px 0 rgba(0, 0, 0, 0.65);\n  -webkit-transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), background-color 15ms linear, color 15ms linear;\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), background-color 15ms linear, color 15ms linear;\n}\n\n.header-md:after {\n  bottom: 0px;\n}\n\nion-button.play_pause_btn {\n  width: 65px !important;\n  height: 65px !important;\n  --border-radius: 50%;\n  --box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  --transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), background-color 15ms linear, color 15ms linear;\n}\n\n.darkColor {\n  color: black !important;\n  font-size: 32px;\n  margin-left: 3px;\n}\n\nion-range {\n  padding-bottom: 0;\n  padding-top: 0;\n}\n\n.rangePlaytime {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\n.rangePlaytime .startTime {\n  padding-left: 9px;\n}\n\n.rangePlaytime .endTime {\n  padding-right: 15px;\n}\n\n.Iconsize_For_Rev {\n  font-size: 23px;\n}\n\n.flexRow {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\n.transparent_Item {\n  --background: transparent;\n}\n\n.padding_Top {\n  padding-top: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9haXIvRG9jdW1lbnRzL0dpdEh1Yi9wb2Qvc3JjL2FwcC9tdXNpY3BsYXllci9tdXNpY3BsYXllci5wYWdlLnNjc3MiLCJzcmMvYXBwL211c2ljcGxheWVyL211c2ljcGxheWVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLHVEQUFBO0FDQUY7O0FER0E7RUFDRSxxQkFBQTtBQ0FGOztBREdBO0VBQ0UsaUJBQUE7QUNBRjs7QURDRTtFQUNFLHVCQUFBO0VBQ0EsZ0NBQUE7QUNDSjs7QURHQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsOENBQUE7VUFBQSxzQ0FBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtBQ0FGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRjs7QURDQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ0VGOztBRENBO0VBQ0Usb0NBQUE7VUFBQSw0QkFBQTtBQ0VGOztBRENBLGlCQUFBOztBQUNBO0VBQ0U7SUFDRSxpQkFBQTtFQ0VGO0VEQ0E7SUFDRSxtQkFBQTtFQ0NGO0FBQ0Y7O0FEUkE7RUFDRTtJQUNFLGlCQUFBO0VDRUY7RURDQTtJQUNFLG1CQUFBO0VDQ0Y7QUFDRjs7QURFQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsaUJBQUE7QUNBRjs7QURDRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVFO0VBQ0UsbUNBQUE7RUFDQSxlQUFBO0FDQUo7O0FESUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlDQUFBO0VBQ0Esc0NBQUE7RUFDQSxtQkFBQTtFQUNBLCtHQUFBO0VBQ0Esa0hBQUE7RUFBQSwwR0FBQTtBQ0ZKOztBRE1BO0VBQ0UsV0FBQTtBQ0hGOztBRE1BO0VBQ0Usc0JBQUE7RUFDQSx1QkFBQTtFQUVBLG9CQUFBO0VBQ0EsaUhBQUE7RUFDQSw0R0FBQTtBQ0pGOztBRE9BO0VBQ0UsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNKRjs7QURPQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtBQ0pGOztBRE9BO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtBQ0pGOztBRE1FO0VBQ0UsaUJBQUE7QUNKSjs7QURPRTtFQUNFLG1CQUFBO0FDTEo7O0FEU0E7RUFDRSxlQUFBO0FDTkY7O0FEU0E7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtBQ05GOztBRFNBO0VBQ0UseUJBQUE7QUNORjs7QURTQTtFQUNFLGlCQUFBO0FDTkYiLCJmaWxlIjoic3JjL2FwcC9tdXNpY3BsYXllci9tdXNpY3BsYXllci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjMDYwNjA2LCAjMDA2OTVjKTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6ICMwMDY4NWI7XG59XG5cbmlvbi1mb290ZXIge1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgYSB7XG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLm1hcnF1ZWUge1xuICB3aWR0aDogNDUwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBhbmltYXRpb246IG1hcnF1ZWUgNTBzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuaW9uLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuLnN1YlR7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5pb24tdGl0bGUudGV4dFN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLm1hcnF1ZWU6aG92ZXIge1xuICBhbmltYXRpb24tcGxheS1zdGF0ZTogcGF1c2VkO1xufVxuXG4vKiBNYWtlIGl0IG1vdmUgKi9cbkBrZXlmcmFtZXMgbWFycXVlZSB7XG4gIDAlIHtcbiAgICB0ZXh0LWluZGVudDogMzBlbTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRleHQtaW5kZW50OiAtMTA1ZW07XG4gIH1cbn1cblxuLmZpeGVkQ29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nLXRvcDogMjRweDtcbiAgaW9uLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuXG4gIC5wVXNlciB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIC8vIG1hcmdpbjogMTJweDtcbiAgfVxuXG4gIGlvbi10aHVtYm5haWwge1xuICAgIHdpZHRoOiAzNXZoO1xuICAgIGhlaWdodDogMzV2aDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICBib3gtc2hhZG93OiAwIDRweCA1cHggLTJweCByZ2JhKDAsIDAsIDAsIDAuNiksIDAgMnB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC42NiksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC42NSk7XG4gICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAyODBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpLCBiYWNrZ3JvdW5kLWNvbG9yIDE1bXMgbGluZWFyLCBjb2xvciAxNW1zIGxpbmVhcjtcbiAgfVxufVxuXG4uaGVhZGVyLW1kOmFmdGVyIHtcbiAgYm90dG9tOiAwcHg7XG59XG5cbmlvbi1idXR0b24ucGxheV9wYXVzZV9idG4ge1xuICB3aWR0aDogNjVweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDY1cHggIWltcG9ydGFudDtcbiAgLy8gZm9udC1zaXplOiAyLjNlbSAhaW1wb3J0YW50O1xuICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLS1ib3gtc2hhZG93OiAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIC0tdHJhbnNpdGlvbjogYm94LXNoYWRvdyAyODBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpLCBiYWNrZ3JvdW5kLWNvbG9yIDE1bXMgbGluZWFyLCBjb2xvciAxNW1zIGxpbmVhcjtcbn1cblxuLmRhcmtDb2xvciB7XG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDMycHg7XG4gIG1hcmdpbi1sZWZ0OiAzcHg7XG59XG5cbmlvbi1yYW5nZSB7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xuICBwYWRkaW5nLXRvcDogMDtcbn1cblxuLnJhbmdlUGxheXRpbWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgLnN0YXJ0VGltZSB7XG4gICAgcGFkZGluZy1sZWZ0OiA5cHg7XG4gIH1cblxuICAuZW5kVGltZSB7XG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgfVxufVxuXG4uSWNvbnNpemVfRm9yX1JldiB7XG4gIGZvbnQtc2l6ZTogMjNweDtcbn1cblxuLmZsZXhSb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi50cmFuc3BhcmVudF9JdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLnBhZGRpbmdfVG9wIHtcbiAgcGFkZGluZy10b3A6IDI0cHg7XG59XG4iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzA2MDYwNiwgIzAwNjk1Yyk7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDA2ODViO1xufVxuXG5pb24tZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG59XG5pb24tZm9vdGVyIGEge1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5tYXJxdWVlIHtcbiAgd2lkdGg6IDQ1MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYW5pbWF0aW9uOiBtYXJxdWVlIDUwcyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbmlvbi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cblxuLnN1YlQge1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG5pb24tdGl0bGUudGV4dFN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLm1hcnF1ZWU6aG92ZXIge1xuICBhbmltYXRpb24tcGxheS1zdGF0ZTogcGF1c2VkO1xufVxuXG4vKiBNYWtlIGl0IG1vdmUgKi9cbkBrZXlmcmFtZXMgbWFycXVlZSB7XG4gIDAlIHtcbiAgICB0ZXh0LWluZGVudDogMzBlbTtcbiAgfVxuICAxMDAlIHtcbiAgICB0ZXh0LWluZGVudDogLTEwNWVtO1xuICB9XG59XG4uZml4ZWRDb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmctdG9wOiAyNHB4O1xufVxuLmZpeGVkQ29udGVudCBpb24tdGV4dCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uZml4ZWRDb250ZW50IC5wVXNlciB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uZml4ZWRDb250ZW50IGlvbi10aHVtYm5haWwge1xuICB3aWR0aDogMzV2aDtcbiAgaGVpZ2h0OiAzNXZoO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBib3gtc2hhZG93OiAwIDRweCA1cHggLTJweCByZ2JhKDAsIDAsIDAsIDAuNiksIDAgMnB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC42NiksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC42NSk7XG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMjgwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSwgYmFja2dyb3VuZC1jb2xvciAxNW1zIGxpbmVhciwgY29sb3IgMTVtcyBsaW5lYXI7XG59XG5cbi5oZWFkZXItbWQ6YWZ0ZXIge1xuICBib3R0b206IDBweDtcbn1cblxuaW9uLWJ1dHRvbi5wbGF5X3BhdXNlX2J0biB7XG4gIHdpZHRoOiA2NXB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNjVweCAhaW1wb3J0YW50O1xuICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLS1ib3gtc2hhZG93OiAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIC0tdHJhbnNpdGlvbjogYm94LXNoYWRvdyAyODBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpLCBiYWNrZ3JvdW5kLWNvbG9yIDE1bXMgbGluZWFyLCBjb2xvciAxNW1zIGxpbmVhcjtcbn1cblxuLmRhcmtDb2xvciB7XG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDMycHg7XG4gIG1hcmdpbi1sZWZ0OiAzcHg7XG59XG5cbmlvbi1yYW5nZSB7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xuICBwYWRkaW5nLXRvcDogMDtcbn1cblxuLnJhbmdlUGxheXRpbWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4ucmFuZ2VQbGF5dGltZSAuc3RhcnRUaW1lIHtcbiAgcGFkZGluZy1sZWZ0OiA5cHg7XG59XG4ucmFuZ2VQbGF5dGltZSAuZW5kVGltZSB7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG59XG5cbi5JY29uc2l6ZV9Gb3JfUmV2IHtcbiAgZm9udC1zaXplOiAyM3B4O1xufVxuXG4uZmxleFJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnRyYW5zcGFyZW50X0l0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4ucGFkZGluZ19Ub3Age1xuICBwYWRkaW5nLXRvcDogMjRweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/musicplayer/musicplayer.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/musicplayer/musicplayer.page.ts ***!
    \*************************************************/

  /*! exports provided: MusicplayerPage */

  /***/
  function srcAppMusicplayerMusicplayerPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MusicplayerPage", function () {
      return MusicplayerPage;
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


    var _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/media/ngx */
    "./node_modules/@ionic-native/media/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");

    let MusicplayerPage = class MusicplayerPage {
      constructor(platform, media) {
        this.platform = platform;
        this.media = media;
        this.image = 'assets/album_art.jpg';
        this.filename = 'Baba O`reily';
        this.duration = -1;
        this.play_The_track = "/android_asset/public/assets/GOT.mp3"; //note this specific url format is used in android only

        this.position = 0;
        this.is_playing = false;
        this.is_in_play = false;
        this.is_ready = false;
        this.display_position = '00:00';
        this.display_duration = '00:00';
      }

      ngOnInit() {
        // comment out the following line when adjusting UI in browsers
        this.prepareAudioFile();
      }

      prepareAudioFile() {
        this.platform.ready().then(res => {
          this.getDuration();
        });
      }

      getDuration() {
        this.curr_playing_file = this.media.create(this.play_The_track); // on occassions, the plugin only gives duration of the file if the file is played
        // at least once

        this.curr_playing_file.play();
        this.curr_playing_file.setVolume(0.0); // you don't want users to notice that you are playing the file

        const self = this; // The plugin does not give the correct duration on playback start
        // Need to check for duration repeatedly

        let temp_duration = self.duration;
        this.get_duration_interval = setInterval(() => {
          if (self.duration === -1 || !self.duration) {
            self.duration = ~~self.curr_playing_file.getDuration(); // make it an integer
          } else {
            if (self.duration !== temp_duration) {
              temp_duration = self.duration;
            } else {
              self.curr_playing_file.stop();
              self.curr_playing_file.release();
              clearInterval(self.get_duration_interval);
              this.display_duration = this.toHHMMSS(self.duration);
              self.setToPlayback();
            }
          }
        }, 100);
      }

      setToPlayback() {
        this.curr_playing_file = this.media.create(this.play_The_track);
        this.curr_playing_file.onStatusUpdate.subscribe(status => {
          switch (status) {
            case 1:
              break;

            case 2:
              // 2: playing
              this.is_playing = true;
              break;

            case 3:
              // 3: pause
              this.is_playing = false;
              break;

            case 4: // 4: stop

            default:
              this.is_playing = false;
              break;
          }
        });
        this.is_ready = true;
        this.getAndSetCurrentAudioPosition();
      }

      getAndSetCurrentAudioPosition() {
        const diff = 1;
        const self = this;
        this.get_position_interval = setInterval(() => {
          const last_position = self.position;
          self.curr_playing_file.getCurrentPosition().then(position => {
            if (position >= 0 && position < self.duration) {
              if (Math.abs(last_position - position) >= diff) {
                // set position
                self.curr_playing_file.seekTo(last_position * 1000);
              } else {
                // update position for display
                self.position = position;
                this.display_position = this.toHHMMSS(self.position);
              }
            } else if (position >= self.duration) {
              self.stop();
              self.setToPlayback();
            }
          });
        }, 100);
      }

      play() {
        this.curr_playing_file.play();
      }

      pause() {
        this.curr_playing_file.pause();
      }

      stop() {
        this.curr_playing_file.stop();
        this.curr_playing_file.release();
        clearInterval(this.get_position_interval);
        this.position = 0;
      }

      controlSeconds(action) {
        const step = 5;
        const numberRange = this.position;

        switch (action) {
          case 'back':
            this.position = numberRange < step ? 0.001 : numberRange - step;
            break;

          case 'forward':
            this.position = numberRange + step < this.duration ? numberRange + step : this.duration;
            break;

          default:
            break;
        }
      }

      ngOnDestroy() {
        this.stop();
      }

      toHHMMSS(secs) {
        var sec_num = parseInt(secs, 10);
        var minutes = Math.floor(sec_num / 60) % 60;
        var seconds = sec_num % 60;
        return [minutes, seconds].map(v => v < 10 ? "0" + v : v).filter((v, i) => v !== "00" || i >= 0).join(":");
      }

    };

    MusicplayerPage.ctorParameters = () => [{
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
    }, {
      type: _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_2__["Media"]
    }];

    MusicplayerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-musicplayer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./musicplayer.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/musicplayer/musicplayer.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./musicplayer.page.scss */
      "./src/app/musicplayer/musicplayer.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_2__["Media"]])], MusicplayerPage);
    /***/
  }
}]);
//# sourceMappingURL=musicplayer-musicplayer-module-es5.js.map