function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./node_modules/@ionic/core/dist/esm/button-active-a6787d69.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/button-active-a6787d69.js ***!
    \*********************************************************************/

  /*! exports provided: c */

  /***/
  function node_modulesIonicCoreDistEsmButtonActiveA6787d69Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "c", function () {
      return createButtonActiveGesture;
    });
    /* harmony import */


    var _index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./index-e806d1f6.js */
    "./node_modules/@ionic/core/dist/esm/index-e806d1f6.js");
    /* harmony import */


    var _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./index-f49d994d.js */
    "./node_modules/@ionic/core/dist/esm/index-f49d994d.js");
    /* harmony import */


    var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./haptic-27b3f981.js */
    "./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js");

    var createButtonActiveGesture = function createButtonActiveGesture(el, isButton) {
      var currentTouchedButton;
      var initialTouchedButton;

      var activateButtonAtPoint = function activateButtonAtPoint(x, y, hapticFeedbackFn) {
        if (typeof document === 'undefined') {
          return;
        }

        var target = document.elementFromPoint(x, y);

        if (!target || !isButton(target)) {
          clearActiveButton();
          return;
        }

        if (target !== currentTouchedButton) {
          clearActiveButton();
          setActiveButton(target, hapticFeedbackFn);
        }
      };

      var setActiveButton = function setActiveButton(button, hapticFeedbackFn) {
        currentTouchedButton = button;

        if (!initialTouchedButton) {
          initialTouchedButton = currentTouchedButton;
        }

        var buttonToModify = currentTouchedButton;
        Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
          return buttonToModify.classList.add('ion-activated');
        });
        hapticFeedbackFn();
      };

      var clearActiveButton = function clearActiveButton() {
        var dispatchClick = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        if (!currentTouchedButton) {
          return;
        }

        var buttonToModify = currentTouchedButton;
        Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () {
          return buttonToModify.classList.remove('ion-activated');
        });
        /**
         * Clicking on one button, but releasing on another button
         * does not dispatch a click event in browsers, so we
         * need to do it manually here. Some browsers will
         * dispatch a click if clicking on one button, dragging over
         * another button, and releasing on the original button. In that
         * case, we need to make sure we do not cause a double click there.
         */

        if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
          currentTouchedButton.click();
        }

        currentTouchedButton = undefined;
      };

      return Object(_index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__["createGesture"])({
        el: el,
        gestureName: 'buttonActiveDrag',
        threshold: 0,
        onStart: function onStart(ev) {
          return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["a"]);
        },
        onMove: function onMove(ev) {
          return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["b"]);
        },
        onEnd: function onEnd() {
          clearActiveButton(true);
          Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
          initialTouchedButton = undefined;
        }
      });
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/framework-delegate-4584ab5a.js":
  /*!**************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4584ab5a.js ***!
    \**************************************************************************/

  /*! exports provided: a, d */

  /***/
  function node_modulesIonicCoreDistEsmFrameworkDelegate4584ab5aJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "a", function () {
      return attachComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "d", function () {
      return detachComponent;
    });

    var attachComponent = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(delegate, container, component, cssClasses, componentProps) {
        var el;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!delegate) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));

              case 2:
                if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
                  _context.next = 4;
                  break;
                }

                throw new Error('framework delegate is missing');

              case 4:
                el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

                if (cssClasses) {
                  cssClasses.forEach(function (c) {
                    return el.classList.add(c);
                  });
                }

                if (componentProps) {
                  Object.assign(el, componentProps);
                }

                container.appendChild(el);

                if (!el.componentOnReady) {
                  _context.next = 11;
                  break;
                }

                _context.next = 11;
                return el.componentOnReady();

              case 11:
                return _context.abrupt("return", el);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function attachComponent(_x, _x2, _x3, _x4, _x5) {
        return _ref.apply(this, arguments);
      };
    }();

    var detachComponent = function detachComponent(delegate, element) {
      if (element) {
        if (delegate) {
          var container = element.parentElement;
          return delegate.removeViewFromDom(container, element);
        }

        element.remove();
      }

      return Promise.resolve();
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js":
  /*!**************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
    \**************************************************************/

  /*! exports provided: a, b, c, d, h */

  /***/
  function node_modulesIonicCoreDistEsmHaptic27b3f981Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "a", function () {
      return hapticSelectionStart;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "b", function () {
      return hapticSelectionChanged;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "c", function () {
      return hapticSelection;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "d", function () {
      return hapticImpact;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "h", function () {
      return hapticSelectionEnd;
    });

    var HapticEngine = {
      getEngine: function getEngine() {
        var win = window;
        return win.TapticEngine || win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics;
      },
      available: function available() {
        return !!this.getEngine();
      },
      isCordova: function isCordova() {
        return !!window.TapticEngine;
      },
      isCapacitor: function isCapacitor() {
        var win = window;
        return !!win.Capacitor;
      },
      impact: function impact(options) {
        var engine = this.getEngine();

        if (!engine) {
          return;
        }

        var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.impact({
          style: style
        });
      },
      notification: function notification(options) {
        var engine = this.getEngine();

        if (!engine) {
          return;
        }

        var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.notification({
          style: style
        });
      },
      selection: function selection() {
        this.impact({
          style: 'light'
        });
      },
      selectionStart: function selectionStart() {
        var engine = this.getEngine();

        if (!engine) {
          return;
        }

        if (this.isCapacitor()) {
          engine.selectionStart();
        } else {
          engine.gestureSelectionStart();
        }
      },
      selectionChanged: function selectionChanged() {
        var engine = this.getEngine();

        if (!engine) {
          return;
        }

        if (this.isCapacitor()) {
          engine.selectionChanged();
        } else {
          engine.gestureSelectionChanged();
        }
      },
      selectionEnd: function selectionEnd() {
        var engine = this.getEngine();

        if (!engine) {
          return;
        }

        if (this.isCapacitor()) {
          engine.selectionEnd();
        } else {
          engine.gestureSelectionEnd();
        }
      }
    };
    /**
     * Trigger a selection changed haptic event. Good for one-time events
     * (not for gestures)
     */

    var hapticSelection = function hapticSelection() {
      HapticEngine.selection();
    };
    /**
     * Tell the haptic engine that a gesture for a selection change is starting.
     */


    var hapticSelectionStart = function hapticSelectionStart() {
      HapticEngine.selectionStart();
    };
    /**
     * Tell the haptic engine that a selection changed during a gesture.
     */


    var hapticSelectionChanged = function hapticSelectionChanged() {
      HapticEngine.selectionChanged();
    };
    /**
     * Tell the haptic engine we are done with a gesture. This needs to be
     * called lest resources are not properly recycled.
     */


    var hapticSelectionEnd = function hapticSelectionEnd() {
      HapticEngine.selectionEnd();
    };
    /**
     * Use this to indicate success/failure/warning to the user.
     * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
     */


    var hapticImpact = function hapticImpact(options) {
      HapticEngine.impact(options);
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
    \***********************************************************************/

  /*! exports provided: S */

  /***/
  function node_modulesIonicCoreDistEsmSpinnerConfigsCd7845afJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S", function () {
      return SPINNERS;
    });

    var spinners = {
      'bubbles': {
        dur: 1000,
        circles: 9,
        fn: function fn(dur, index, total) {
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          var angle = 2 * Math.PI * index / total;
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
        fn: function fn(dur, index, total) {
          var step = index / total;
          var animationDelay = "".concat(dur * step - dur, "ms");
          var angle = 2 * Math.PI * step;
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
      'circular': {
        dur: 1400,
        elmDuration: true,
        circles: 1,
        fn: function fn() {
          return {
            r: 20,
            cx: 48,
            cy: 48,
            fill: 'none',
            viewBox: '24 24 48 48',
            transform: 'translate(0,0)',
            style: {}
          };
        }
      },
      'crescent': {
        dur: 750,
        circles: 1,
        fn: function fn() {
          return {
            r: 26,
            style: {}
          };
        }
      },
      'dots': {
        dur: 750,
        circles: 3,
        fn: function fn(_, index) {
          var animationDelay = -(110 * index) + 'ms';
          return {
            r: 6,
            style: {
              'left': "".concat(9 - 9 * index, "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'lines': {
        dur: 1000,
        lines: 12,
        fn: function fn(dur, index, total) {
          var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
          var animationDelay = "".concat(dur * index / total - dur, "ms");
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
        fn: function fn(dur, index, total) {
          var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          return {
            y1: 12,
            y2: 20,
            style: {
              'transform': transform,
              'animation-delay': animationDelay
            }
          };
        }
      }
    };
    var SPINNERS = spinners;
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
    \*************************************************************/

  /*! exports provided: c, g, h, o */

  /***/
  function node_modulesIonicCoreDistEsmThemeFf3fc52fJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "c", function () {
      return createColorClasses;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "g", function () {
      return getClassMap;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "h", function () {
      return hostContext;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "o", function () {
      return openURL;
    });

    var hostContext = function hostContext(selector, el) {
      return el.closest(selector) !== null;
    };
    /**
     * Create the mode and color classes for the component based on the classes passed in
     */


    var createColorClasses = function createColorClasses(color, cssClassMap) {
      return typeof color === 'string' && color.length > 0 ? Object.assign(_defineProperty({
        'ion-color': true
      }, "ion-color-".concat(color), true), cssClassMap) : cssClassMap;
    };

    var getClassList = function getClassList(classes) {
      if (classes !== undefined) {
        var array = Array.isArray(classes) ? classes : classes.split(' ');
        return array.filter(function (c) {
          return c != null;
        }).map(function (c) {
          return c.trim();
        }).filter(function (c) {
          return c !== '';
        });
      }

      return [];
    };

    var getClassMap = function getClassMap(classes) {
      var map = {};
      getClassList(classes).forEach(function (c) {
        return map[c] = true;
      });
      return map;
    };

    var SCHEME = /^[a-z][a-z0-9+\-.]*:/;

    var openURL = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(url, ev, direction, animation) {
        var router;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
                  _context2.next = 5;
                  break;
                }

                router = document.querySelector('ion-router');

                if (!router) {
                  _context2.next = 5;
                  break;
                }

                if (ev != null) {
                  ev.preventDefault();
                }

                return _context2.abrupt("return", router.push(url, direction, animation));

              case 5:
                return _context2.abrupt("return", false);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function openURL(_x6, _x7, _x8, _x9) {
        return _ref2.apply(this, arguments);
      };
    }();
    /***/

  },

  /***/
  "./src/app/details/share-modal/share-modal.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/details/share-modal/share-modal.component.ts ***!
    \**************************************************************/

  /*! exports provided: ShareModalComponent */

  /***/
  function srcAppDetailsShareModalShareModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShareModalComponent", function () {
      return ShareModalComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

    var ShareModalComponent = /*#__PURE__*/function () {
      function ShareModalComponent(activeModal) {
        _classCallCheck(this, ShareModalComponent);

        this.activeModal = activeModal;
      }

      _createClass(ShareModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "close",
        value: function close() {
          this.activeModal.dismiss();
        }
      }]);

      return ShareModalComponent;
    }();

    ShareModalComponent.ɵfac = function ShareModalComponent_Factory(t) {
      return new (t || ShareModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]));
    };

    ShareModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ShareModalComponent,
      selectors: [["app-share-modal"]],
      decls: 11,
      vars: 0,
      consts: [[1, "modal-header"], [1, "modal-title", "mx-auto"], ["type", "button", "aria-label", "Close", 1, "close-btn", 3, "click"], ["aria-hidden", "true"], [1, "social-img"], ["src", "./assets/images/facebook-icon.png"], ["src", "./assets/images/google-icon.png"], ["src", "./assets/images/apple-icon.png"], ["src", "./assets/images/edyoos-logo.svg"]],
      template: function ShareModalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Share this Place");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShareModalComponent_Template_button_click_3_listener() {
            return ctx.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "X");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".close-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  border-radius: 0.2rem;\n  border: 2px solid #d4d4d4;\n  background-color: #d4d4d4;\n  color: #111111;\n  padding: 0.2rem 0.75rem;\n  transition: 0.5s;\n}\n\n.close-btn[_ngcontent-%COMP%]:hover {\n  border: 2px solid red;\n  background-color: red;\n  color: white;\n}\n\n.modal-header[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  padding: unset;\n  border-bottom: unset;\n  border-top-left-radius: unset;\n  border-top-right-radius: unset;\n}\n\n.modal-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 500;\n  color: #000;\n  line-height: 1.29;\n  margin: 0 0 0.75rem;\n}\n\n.content-container[_ngcontent-%COMP%] {\n  padding: 0.25rem 0;\n}\n\n.content-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 500;\n  color: #818181;\n  text-align: center;\n  line-height: 1.49;\n}\n\n.social-img[_ngcontent-%COMP%] {\n  text-align: center !important;\n  margin: 0.75rem 0rem;\n}\n\n.social-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 3rem;\n  margin: 0rem 0.75rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWlscy9zaGFyZS1tb2RhbC9DOlxcVXNlcnNcXGhwXFxEZXNrdG9wXFxsYXRlc3RfY29kZV93ZWJcXEVkeW9vc1BvcnRhbC1VSVxcRWR5b29zUG9ydGFsL3NyY1xcYXBwXFxkZXRhaWxzXFxzaGFyZS1tb2RhbFxcc2hhcmUtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2RldGFpbHMvc2hhcmUtbW9kYWwvc2hhcmUtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURDQTtFQUNFLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FDRUY7O0FEQUE7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7QUNHRjs7QUREQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ0lGOztBREZBO0VBQ0Usa0JBQUE7QUNLRjs7QURIQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ01GOztBREpBO0VBQ0UsNkJBQUE7RUFDQSxvQkFBQTtBQ09GOztBRExBO0VBQ0UsV0FBQTtFQUNBLG9CQUFBO0FDUUYiLCJmaWxlIjoic3JjL2FwcC9kZXRhaWxzL3NoYXJlLW1vZGFsL3NoYXJlLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsb3NlLWJ0biB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMHB4O1xyXG4gIHJpZ2h0OiAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNkNGQ0ZDQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZDRkNDtcclxuICBjb2xvcjogIzExMTExMTtcclxuICBwYWRkaW5nOiAwLjJyZW0gMC43NXJlbTtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG59XHJcbi5jbG9zZS1idG46aG92ZXIge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5tb2RhbC1oZWFkZXIge1xyXG4gIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgcGFkZGluZzogdW5zZXQ7XHJcbiAgYm9yZGVyLWJvdHRvbTogdW5zZXQ7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogdW5zZXQ7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IHVuc2V0O1xyXG59XHJcbi5tb2RhbC10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogIzAwMDtcclxuICBsaW5lLWhlaWdodDogMS4yOTtcclxuICBtYXJnaW46IDAgMCAwLjc1cmVtO1xyXG59XHJcbi5jb250ZW50LWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMC4yNXJlbSAwO1xyXG59XHJcbi5jb250ZW50LWNvbnRhaW5lciBwIHtcclxuICBmb250LXNpemU6IDAuODVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogIzgxODE4MTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNDk7XHJcbn1cclxuLnNvY2lhbC1pbWcge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjogMC43NXJlbSAwcmVtO1xyXG59XHJcbi5zb2NpYWwtaW1nIGltZyB7XHJcbiAgd2lkdGg6IDNyZW07XHJcbiAgbWFyZ2luOiAwcmVtIDAuNzVyZW07XHJcbn1cclxuIiwiLmNsb3NlLWJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcbiAgYm9yZGVyOiAycHggc29saWQgI2Q0ZDRkNDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZDRkNDtcbiAgY29sb3I6ICMxMTExMTE7XG4gIHBhZGRpbmc6IDAuMnJlbSAwLjc1cmVtO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4uY2xvc2UtYnRuOmhvdmVyIHtcbiAgYm9yZGVyOiAycHggc29saWQgcmVkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm1vZGFsLWhlYWRlciB7XG4gIG1hcmdpbi10b3A6IDJyZW07XG4gIHBhZGRpbmc6IHVuc2V0O1xuICBib3JkZXItYm90dG9tOiB1bnNldDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogdW5zZXQ7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiB1bnNldDtcbn1cblxuLm1vZGFsLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjMDAwO1xuICBsaW5lLWhlaWdodDogMS4yOTtcbiAgbWFyZ2luOiAwIDAgMC43NXJlbTtcbn1cblxuLmNvbnRlbnQtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMC4yNXJlbSAwO1xufVxuXG4uY29udGVudC1jb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICM4MTgxODE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDEuNDk7XG59XG5cbi5zb2NpYWwtaW1nIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMC43NXJlbSAwcmVtO1xufVxuXG4uc29jaWFsLWltZyBpbWcge1xuICB3aWR0aDogM3JlbTtcbiAgbWFyZ2luOiAwcmVtIDAuNzVyZW07XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShareModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-share-modal',
          templateUrl: './share-modal.component.html',
          styleUrls: ['./share-modal.component.scss']
        }]
      }], function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/model/payment/attach_payment_request.model.ts":
  /*!***************************************************************!*\
    !*** ./src/app/model/payment/attach_payment_request.model.ts ***!
    \***************************************************************/

  /*! exports provided: AttachPaymentRequest */

  /***/
  function srcAppModelPaymentAttach_payment_requestModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AttachPaymentRequest", function () {
      return AttachPaymentRequest;
    });

    var AttachPaymentRequest = function AttachPaymentRequest() {
      _classCallCheck(this, AttachPaymentRequest);
    };
    /***/

  },

  /***/
  "./src/app/search/search-page/search-base.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/search/search-page/search-base.component.ts ***!
    \*************************************************************/

  /*! exports provided: SearchBaseComponent */

  /***/
  function srcAppSearchSearchPageSearchBaseComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchBaseComponent", function () {
      return SearchBaseComponent;
    });

    var SearchBaseComponent = /*#__PURE__*/function () {
      function SearchBaseComponent(mapsAPILoader) {
        _classCallCheck(this, SearchBaseComponent);

        this.mapsAPILoader = mapsAPILoader;
        this.componentForm = {
          street_number: 'short_name',
          route: 'long_name',
          locality: 'long_name',
          administrative_area_level_1: 'short_name',
          country: 'short_name',
          postal_code: 'short_name'
        };
      }

      _createClass(SearchBaseComponent, [{
        key: "getCurrentPosition",
        value: function getCurrentPosition() {
          var _this = this;

          navigator.geolocation.getCurrentPosition(function (position) {
            // 35.7021051,139.7750452 Akihabara
            // 47.59948195707674, -122.30985900179657 somewhere in USA
            // 30.0443567,31.2356568 Tahrir Square
            _this.currentLocation = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            _this.getAddress(_this.currentLocation);
          });
        }
      }, {
        key: "getAddress",
        value: function getAddress(address) {
          var _this2 = this;

          this.geoCoder.geocode({
            location: {
              lat: address.lat,
              lng: address.lng
            }
          }, function (results, status) {
            console.log(results);
            console.log(status);

            if (status === 'OK') {
              if (results[0]) {
                // debugger
                var _address = {}; // if(results[0].address_components[2].short_name)
                // address=results[0].address_components[2].short_name;
                // if(results[0].address_components[2].short_name)

                for (var i = 0; i < results[0].address_components.length; i++) {
                  var addressType = results[0].address_components[i].types[0];

                  if (_this2.componentForm[addressType]) {
                    var val = results[0].address_components[i][_this2.componentForm[addressType]];

                    if (addressType == 'street_number' || addressType == 'route') {
                      _address.street_number = val;
                    } else if (addressType == 'locality') {
                      // address.locality=address+','+val;
                      _address.locality = val;
                    } else if (addressType == 'administrative_area_level_1') {
                      // address=address+','+val;
                      _address.administrative_area_level_1 = val;
                    } else if (addressType == 'country') {
                      // address.country=address+','+val;
                      _address.country = val;
                    }
                  }
                }

                _this2.assignAddress(_address); // this.searchForm.updateValueAndValidity();

              }
            }
          });
        }
      }]);

      return SearchBaseComponent;
    }();
    /***/

  }
}]);
//# sourceMappingURL=common-es5.js.map