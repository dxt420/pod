(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[65], {
  /***/
  "./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js":
  /*!****************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js ***!
    \****************************************************************/

  /*! exports provided: ion_spinner */

  /***/
  function node_modulesIonicCoreDistEsmIonSpinnerEntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_spinner", function () {
      return Spinner;
    });
    /* harmony import */


    var _chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./chunk-d0403a2f.js */
    "./node_modules/@ionic/core/dist/esm/chunk-d0403a2f.js");
    /* harmony import */


    var _chunk_1074393c_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./chunk-1074393c.js */
    "./node_modules/@ionic/core/dist/esm/chunk-1074393c.js");
    /* harmony import */


    var _chunk_353a032e_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./chunk-353a032e.js */
    "./node_modules/@ionic/core/dist/esm/chunk-353a032e.js");

    const spinners = {
      'lines': {
        dur: 1000,
        lines: 12,
        fn: (dur, index, total) => {
          const transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
          const animationDelay = "".concat(dur * index / total - dur, "ms");
          return {
            y1: 17,
            y2: 29,
            style: {
              'transform': transform,
              'animation-delay': animationDelay
            }
          };
        }
      },
      'lines-small': {
        dur: 1000,
        lines: 12,
        fn: (dur, index, total) => {
          const transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
          const animationDelay = "".concat(dur * index / total - dur, "ms");
          return {
            y1: 12,
            y2: 20,
            style: {
              'transform': transform,
              'animation-delay': animationDelay
            }
          };
        }
      },
      'bubbles': {
        dur: 1000,
        circles: 9,
        fn: (dur, index, total) => {
          const animationDelay = "".concat(dur * index / total - dur, "ms");
          const angle = 2 * Math.PI * index / total;
          return {
            r: 5,
            style: {
              'top': "".concat(9 * Math.sin(angle), "px"),
              'left': "".concat(9 * Math.cos(angle), "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'circles': {
        dur: 1000,
        circles: 8,
        fn: (dur, index, total) => {
          const step = index / total;
          const animationDelay = "".concat(dur * step - dur, "ms");
          const angle = 2 * Math.PI * step;
          return {
            r: 5,
            style: {
              'top': "".concat(9 * Math.sin(angle), "px"),
              'left': "".concat(9 * Math.cos(angle), "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'crescent': {
        dur: 750,
        circles: 1,
        fn: () => {
          return {
            r: 26,
            style: {}
          };
        }
      },
      'dots': {
        dur: 750,
        circles: 3,
        fn: (_, index) => {
          const animationDelay = -(110 * index) + 'ms';
          return {
            r: 6,
            style: {
              'left': "".concat(9 - 9 * index, "px"),
              'animation-delay': animationDelay
            }
          };
        }
      }
    };
    const SPINNERS = spinners;

    class Spinner {
      constructor(hostRef) {
        Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * If `true`, the spinner's animation will be paused.
         */

        this.paused = false;
      }

      getName() {
        const name = this.name || _chunk_1074393c_js__WEBPACK_IMPORTED_MODULE_1__["b"].get('spinner');

        const mode = Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);

        if (name) {
          return name;
        }

        return mode === 'ios' ? 'lines' : 'crescent';
      }

      render() {
        const mode = Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        const name = this.getName();
        const spinner = SPINNERS[name] || SPINNERS['lines'];
        const duration = typeof this.duration === 'number' && this.duration > 10 ? this.duration : spinner.dur;
        const svgs = [];

        if (spinner.circles !== undefined) {
          for (let i = 0; i < spinner.circles; i++) {
            svgs.push(buildCircle(spinner, duration, i, spinner.circles));
          }
        } else if (spinner.lines !== undefined) {
          for (let i = 0; i < spinner.lines; i++) {
            svgs.push(buildLine(spinner, duration, i, spinner.lines));
          }
        }

        return Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
          class: Object.assign({}, Object(_chunk_353a032e_js__WEBPACK_IMPORTED_MODULE_2__["c"])(this.color), {
            [mode]: true,
            ["spinner-".concat(name)]: true,
            'spinner-paused': !!this.paused || _chunk_1074393c_js__WEBPACK_IMPORTED_MODULE_1__["b"].getBoolean('_testing')
          })
        }, svgs);
      }

      static get style() {
        return ":host{display:inline-block;position:relative;width:28px;height:28px;color:var(--color);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host(.ion-color){color:var(--ion-color-base)}svg{left:0;top:0;-webkit-transform-origin:center;transform-origin:center;position:absolute;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0)}:host-context([dir=rtl]) svg,[dir=rtl] svg{left:unset;right:unset;right:0;-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}:host(.spinner-lines) line,:host(.spinner-lines-small) line{stroke-width:4px;stroke-linecap:round;stroke:currentColor}:host(.spinner-lines) svg,:host(.spinner-lines-small) svg{-webkit-animation:spinner-fade-out 1s linear infinite;animation:spinner-fade-out 1s linear infinite}:host(.spinner-bubbles) svg{-webkit-animation:spinner-scale-out 1s linear infinite;animation:spinner-scale-out 1s linear infinite;fill:currentColor}:host(.spinner-circles) svg{-webkit-animation:spinner-fade-out 1s linear infinite;animation:spinner-fade-out 1s linear infinite;fill:currentColor}:host(.spinner-crescent) circle{fill:transparent;stroke-width:4px;stroke-dasharray:128px;stroke-dashoffset:82px;stroke:currentColor}:host(.spinner-crescent) svg{-webkit-animation:spinner-rotate 1s linear infinite;animation:spinner-rotate 1s linear infinite}:host(.spinner-dots) circle{stroke-width:0;fill:currentColor}:host(.spinner-dots) svg{-webkit-animation:spinner-dots 1s linear infinite;animation:spinner-dots 1s linear infinite}:host(.spinner-paused) svg{-webkit-animation-play-state:paused;animation-play-state:paused}\@-webkit-keyframes spinner-fade-out{0%{opacity:1}to{opacity:0}}\@keyframes spinner-fade-out{0%{opacity:1}to{opacity:0}}\@-webkit-keyframes spinner-scale-out{0%{-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:scale(0);transform:scale(0)}}\@keyframes spinner-scale-out{0%{-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:scale(0);transform:scale(0)}}\@-webkit-keyframes spinner-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}\@keyframes spinner-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}\@-webkit-keyframes spinner-dots{0%{-webkit-transform:scale(1);transform:scale(1);opacity:.9}50%{-webkit-transform:scale(.4);transform:scale(.4);opacity:.3}to{-webkit-transform:scale(1);transform:scale(1);opacity:.9}}\@keyframes spinner-dots{0%{-webkit-transform:scale(1);transform:scale(1);opacity:.9}50%{-webkit-transform:scale(.4);transform:scale(.4);opacity:.3}to{-webkit-transform:scale(1);transform:scale(1);opacity:.9}}";
      }

    }

    const buildCircle = (spinner, duration, index, total) => {
      const data = spinner.fn(duration, index, total);
      data.style['animation-duration'] = "".concat(duration, "ms");
      return Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", {
        viewBox: "0 0 64 64",
        style: data.style
      }, Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("circle", {
        transform: "translate(32,32)",
        r: data.r
      }));
    };

    const buildLine = (spinner, duration, index, total) => {
      const data = spinner.fn(duration, index, total);
      data.style['animation-duration'] = "".concat(duration, "ms");
      return Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", {
        viewBox: "0 0 64 64",
        style: data.style
      }, Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("line", {
        transform: "translate(32,32)",
        y1: data.y1,
        y2: data.y2
      }));
    };
    /***/

  }
}]);
//# sourceMappingURL=65-es5.js.map