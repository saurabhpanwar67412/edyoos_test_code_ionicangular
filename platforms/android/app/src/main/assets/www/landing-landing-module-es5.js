function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["landing-landing-module"], {
  /***/
  "./src/app/landing/about-us/about-us.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/landing/about-us/about-us.component.ts ***!
    \********************************************************/

  /*! exports provided: AboutUsComponent */

  /***/
  function srcAppLandingAboutUsAboutUsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function () {
      return AboutUsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AboutUsComponent = /*#__PURE__*/function () {
      function AboutUsComponent() {
        _classCallCheck(this, AboutUsComponent);
      }

      _createClass(AboutUsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutUsComponent;
    }();

    AboutUsComponent.ɵfac = function AboutUsComponent_Factory(t) {
      return new (t || AboutUsComponent)();
    };

    AboutUsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutUsComponent,
      selectors: [["app-about-us"]],
      decls: 67,
      vars: 0,
      consts: [[2, "background-color", "#e2eaf7"], [1, "container-fluid", "mx-auto", "py-5"], [1, "row", "justify-content-center"], [1, "col-8"], [1, ""], [1, "h1", "text-center", 2, "font-size", "40px"], [1, "text-center", "h3"], [1, "row", "no-gutters", "justify-content-center"], [1, "col-3", "bg-light", "p-0", "mx-3", "rounded"], [1, "img-section", "text-center"], ["src", "/assets/images/iphoen-edy.PNG", "alt", "", 1, "img", "img-fluid", 2, "height", "200px", "width", "100%"], [1, "bg-silver", "pl-2", "pb-2", "text-section"], [1, "h1", "mb-0", "text-dark", "mt-2", "font-weight-bold", 2, "font-size", "25px"], [1, "mt-0"], [1, "mb-0"], ["src", "/assets/images/visa-banner.PNG", "alt", "", 1, "img", "img-fluid", 2, "height", "200px", "width", "100%"], ["src", "/assets/images/park-banner.PNG", "alt", "", 1, "img", "img-fluid", 2, "height", "200px", "width", "100%"], [1, "text-center", "mt-4", "h3"], ["src", "/assets/images/logo-banner.PNG", "alt", "", 1, "img", "img-fluid", 2, "height", "200px", "width", "100%"], ["src", "/assets/images/watch-banner.PNG", "alt", "", 1, "img", "img-fluid", 2, "height", "200px", "width", "100%"], ["src", "/assets/images/money-banner.PNG", "alt", "", 1, "img", "img-fluid", 2, "height", "200px", "width", "100%"]],
      template: function AboutUsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " HOW IT WORKS ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " For Users ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h1", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "hr", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Select the date and time you need parking.then receive the spot you want online.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h1", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Pay");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "hr", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Pay for your parking ahead of your time through the edyoos website or app.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h1", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Park");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "hr", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Arrive on-site and park your reserved spot. No searching, no waiting");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h3", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " For Businesses ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h1", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "List Your Spot");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "hr", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "upload unlimited parking spaces. you can include the locations,pictures and details.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h1", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Set Availablity");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "hr", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Let youe customers know when your spot is ready to be reserved.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h1", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Make Money");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "hr", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Edyoos is completelty free.Every time your space is rented, the payment goes to you.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".bg-silver[_ngcontent-%COMP%] {\n  background-color: #D3D3D3;\n}\n\n.text-section[_ngcontent-%COMP%] {\n  min-height: 130px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy9hYm91dC11cy9DOlxcVXNlcnNcXGhwXFxEZXNrdG9wXFxsYXRlc3RfY29kZV93ZWJcXEVkeW9vc1BvcnRhbC1VSVxcRWR5b29zUG9ydGFsL3NyY1xcYXBwXFxsYW5kaW5nXFxhYm91dC11c1xcYWJvdXQtdXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xhbmRpbmcvYWJvdXQtdXMvYWJvdXQtdXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtBQ0NKOztBRENBO0VBQ0ksaUJBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmcvYWJvdXQtdXMvYWJvdXQtdXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmctc2lsdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0QzRDNEMztcclxufVxyXG4udGV4dC1zZWN0aW9ue1xyXG4gICAgbWluLWhlaWdodDogMTMwcHg7XHJcbn0iLCIuYmctc2lsdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0QzRDNEMztcbn1cblxuLnRleHQtc2VjdGlvbiB7XG4gIG1pbi1oZWlnaHQ6IDEzMHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutUsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-about-us',
          templateUrl: './about-us.component.html',
          styleUrls: ['./about-us.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/landing/landing-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/landing/landing-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: LandingRoutingModule */

  /***/
  function srcAppLandingLandingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LandingRoutingModule", function () {
      return LandingRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./about-us/about-us.component */
    "./src/app/landing/about-us/about-us.component.ts");
    /* harmony import */


    var _landing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./landing.component */
    "./src/app/landing/landing.component.ts");
    /* harmony import */


    var _why_Edyoos_why_Edyoos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./why-Edyoos/why-Edyoos.component */
    "./src/app/landing/why-Edyoos/why-Edyoos.component.ts");
    /* harmony import */


    var _why_us_why_us_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./why-us/why-us.component */
    "./src/app/landing/why-us/why-us.component.ts");

    var routes = [{
      path: '',
      component: _landing_component__WEBPACK_IMPORTED_MODULE_3__["LandingComponent"],
      children: [{
        path: 'home',
        component: _why_us_why_us_component__WEBPACK_IMPORTED_MODULE_5__["WhyUsComponent"]
      }, {
        path: 'about',
        component: _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_2__["AboutUsComponent"]
      }, {
        path: 'why-Edyoos',
        component: _why_Edyoos_why_Edyoos_component__WEBPACK_IMPORTED_MODULE_4__["WhyEdyoosComponent"]
      }]
    }];

    var LandingRoutingModule = function LandingRoutingModule() {
      _classCallCheck(this, LandingRoutingModule);
    };

    LandingRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: LandingRoutingModule
    });
    LandingRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function LandingRoutingModule_Factory(t) {
        return new (t || LandingRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LandingRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/landing/landing.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/landing/landing.component.ts ***!
    \**********************************************/

  /*! exports provided: LandingComponent */

  /***/
  function srcAppLandingLandingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LandingComponent", function () {
      return LandingComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _main_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./main/main.component */
    "./src/app/landing/main/main.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../footer/footer.component */
    "./src/app/footer/footer.component.ts");

    var LandingComponent = /*#__PURE__*/function () {
      function LandingComponent() {
        _classCallCheck(this, LandingComponent);
      }

      _createClass(LandingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LandingComponent;
    }();

    LandingComponent.ɵfac = function LandingComponent_Factory(t) {
      return new (t || LandingComponent)();
    };

    LandingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LandingComponent,
      selectors: [["app-landing"]],
      decls: 3,
      vars: 0,
      template: function LandingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
        }
      },
      directives: [_main_main_component__WEBPACK_IMPORTED_MODULE_1__["MainComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-landing',
          templateUrl: './landing.component.html',
          styleUrls: ['./landing.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/landing/landing.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/landing/landing.module.ts ***!
    \*******************************************/

  /*! exports provided: LandingModule */

  /***/
  function srcAppLandingLandingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LandingModule", function () {
      return LandingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _landing_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./landing-routing.module */
    "./src/app/landing/landing-routing.module.ts");
    /* harmony import */


    var _landing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./landing.component */
    "./src/app/landing/landing.component.ts");
    /* harmony import */


    var _why_us_why_us_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./why-us/why-us.component */
    "./src/app/landing/why-us/why-us.component.ts");
    /* harmony import */


    var _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pricing/pricing.component */
    "./src/app/landing/pricing/pricing.component.ts");
    /* harmony import */


    var _main_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./main/main.component */
    "./src/app/landing/main/main.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./about-us/about-us.component */
    "./src/app/landing/about-us/about-us.component.ts");
    /* harmony import */


    var _why_Edyoos_why_Edyoos_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./why-Edyoos/why-Edyoos.component */
    "./src/app/landing/why-Edyoos/why-Edyoos.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var LandingModule = function LandingModule() {
      _classCallCheck(this, LandingModule);
    };

    LandingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: LandingModule
    });
    LandingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function LandingModule_Factory(t) {
        return new (t || LandingModule)();
      },
      imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _landing_routing_module__WEBPACK_IMPORTED_MODULE_1__["LandingRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LandingModule, {
        declarations: [_landing_component__WEBPACK_IMPORTED_MODULE_2__["LandingComponent"], _why_us_why_us_component__WEBPACK_IMPORTED_MODULE_3__["WhyUsComponent"], _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_4__["PricingComponent"], _main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"], _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_7__["AboutUsComponent"], _why_Edyoos_why_Edyoos_component__WEBPACK_IMPORTED_MODULE_8__["WhyEdyoosComponent"]],
        imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _landing_routing_module__WEBPACK_IMPORTED_MODULE_1__["LandingRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_landing_component__WEBPACK_IMPORTED_MODULE_2__["LandingComponent"], _why_us_why_us_component__WEBPACK_IMPORTED_MODULE_3__["WhyUsComponent"], _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_4__["PricingComponent"], _main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"], _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_7__["AboutUsComponent"], _why_Edyoos_why_Edyoos_component__WEBPACK_IMPORTED_MODULE_8__["WhyEdyoosComponent"]],
          imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _landing_routing_module__WEBPACK_IMPORTED_MODULE_1__["LandingRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/landing/main/main.component.metadata.ts":
  /*!*********************************************************!*\
    !*** ./src/app/landing/main/main.component.metadata.ts ***!
    \*********************************************************/

  /*! exports provided: SEARCH_FROM_METADATA, Mode */

  /***/
  function srcAppLandingMainMainComponentMetadataTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SEARCH_FROM_METADATA", function () {
      return SEARCH_FROM_METADATA;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Mode", function () {
      return Mode;
    });

    var SEARCH_FROM_METADATA = {
      vehicleCategory: 'vehicleCategory',
      searchBar: 'searchBar',
      vehicleLength: 'vehicleLength'
    };
    var Mode;

    (function (Mode) {
      Mode["City_Parking"] = "city";
      Mode["Airport_Parking"] = "airplane";
      Mode["Truck_And_Trailer"] = "truckandtrailer";
      Mode["Boat"] = "boat";
      Mode["Semi_Truck"] = "semitruck";
      Mode["Seaplane"] = "seaplane";
      Mode["Helicopter"] = "helicopter";
    })(Mode || (Mode = {}));
    /***/

  },

  /***/
  "./src/app/landing/main/main.component.ts":
  /*!************************************************!*\
    !*** ./src/app/landing/main/main.component.ts ***!
    \************************************************/

  /*! exports provided: MainComponent */

  /***/
  function srcAppLandingMainMainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainComponent", function () {
      return MainComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _main_component_metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./main.component.metadata */
    "./src/app/landing/main/main.component.metadata.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_search_search_page_search_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/search/search-page/search-base.component */
    "./src/app/search/search-page/search-base.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _agm_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @agm/core */
    "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
    /* harmony import */


    var src_app_shared_search_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/search.service */
    "./src/app/shared/search.service.ts");
    /* harmony import */


    var src_app_shared_places_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/shared/places.service */
    "./src/app/shared/places.service.ts");
    /* harmony import */


    var _navbar_new_navbar_new_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../navbar-new/navbar-new.component */
    "./src/app/navbar-new/navbar-new.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_numbers_only_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../shared/numbers-only.directive */
    "./src/app/shared/numbers-only.directive.ts");
    /* harmony import */


    var _shared_pipe_enumtoarray_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../shared/pipe/enumtoarray.pipe */
    "./src/app/shared/pipe/enumtoarray.pipe.ts");

    var _c0 = ["searchBar"];

    function MainComponent_option_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var vehicleCategory_r3 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.Mode[vehicleCategory_r3]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", vehicleCategory_r3.replace("_", " ").replace("And_", "&"), "");
      }
    }

    function MainComponent_span_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("placeholder", "", ctx_r2.modePlaceholder, " length in ft");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx_r2.SEARCH_FROM_METADATA.vehicleLength);
      }
    }

    var MainComponent = /*#__PURE__*/function (_src_app_search_searc) {
      _inherits(MainComponent, _src_app_search_searc);

      var _super = _createSuper(MainComponent);

      function MainComponent(router, http, mapsAPILoader, formBuilder, searchService, ngZone, placeService) {
        var _this;

        _classCallCheck(this, MainComponent);

        _this = _super.call(this, mapsAPILoader);
        _this.router = router;
        _this.http = http;
        _this.mapsAPILoader = mapsAPILoader;
        _this.formBuilder = formBuilder;
        _this.searchService = searchService;
        _this.ngZone = ngZone;
        _this.placeService = placeService; // vehicleLength

        _this.Mode = _main_component_metadata__WEBPACK_IMPORTED_MODULE_1__["Mode"];
        _this.SEARCH_FROM_METADATA = _main_component_metadata__WEBPACK_IMPORTED_MODULE_1__["SEARCH_FROM_METADATA"];
        _this.searchAddress = {};
        return _this;
      }

      _createClass(MainComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.createForm();
          this.placeService.vehicleCategory.subscribe(function (data) {
            _this2.searchForm.get(_main_component_metadata__WEBPACK_IMPORTED_MODULE_1__["SEARCH_FROM_METADATA"].vehicleCategory).setValue(data);
          }); // this.searchForm.get(SEARCH_FROM_METADATA.vehicleCategory).setValue(Mode.City_Parking);
          // this.changeSearchMode(Mode.City_Parking);
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.initializeAutoComplete();
        } //   getVehicleCategoryEnum() : Array<string> {
        //     var keys = Object.keys(this.Mode);
        //     return keys;
        // }

      }, {
        key: "createForm",
        value: function createForm() {
          var _this$formBuilder$gro;

          this.searchForm = this.formBuilder.group((_this$formBuilder$gro = {}, _defineProperty(_this$formBuilder$gro, _main_component_metadata__WEBPACK_IMPORTED_MODULE_1__["SEARCH_FROM_METADATA"].searchBar, ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]), _defineProperty(_this$formBuilder$gro, _main_component_metadata__WEBPACK_IMPORTED_MODULE_1__["SEARCH_FROM_METADATA"].vehicleCategory, [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]), _defineProperty(_this$formBuilder$gro, _main_component_metadata__WEBPACK_IMPORTED_MODULE_1__["SEARCH_FROM_METADATA"].vehicleLength, ['']), _this$formBuilder$gro));
        }
      }, {
        key: "initializeAutoComplete",
        value: function initializeAutoComplete() {
          var _this3 = this;

          this.mapsAPILoader.load().then(function () {
            _this3.geoCoder = new google.maps.Geocoder();
            var autocomplete = new google.maps.places.Autocomplete(_this3.searchElementRef.nativeElement);
            autocomplete.addListener('place_changed', function () {
              _this3.ngZone.run(function () {
                var place = autocomplete.getPlace(); //verify result

                if (place.geometry === undefined || place.geometry === null) {
                  return;
                }

                _this3.searchForm.get(_main_component_metadata__WEBPACK_IMPORTED_MODULE_1__["SEARCH_FROM_METADATA"].searchBar).patchValue(place.formatted_address);

                _this3.currentLocation = {
                  lat: place.geometry.location.lat(),
                  lng: place.geometry.location.lng()
                };

                for (var i = 0; i < place.address_components.length; i++) {
                  var addressType = place.address_components[i].types[0];

                  if (_this3.componentForm[addressType]) {
                    var val = place.address_components[i][_this3.componentForm[addressType]];

                    if (addressType == 'street_number' || addressType == 'route') {
                      _this3.searchAddress.street_number = _this3.searchAddress.street_number ? _this3.searchAddress.street_number + ' ' + val : val;
                    } else if (addressType == 'locality') {
                      // address.locality=address+','+val;
                      _this3.searchAddress.locality = val;
                    } else if (addressType == 'administrative_area_level_1') {
                      // address=address+','+val;
                      _this3.searchAddress.administrative_area_level_1 = val;
                    } else if (addressType == 'country') {
                      // address.country=address+','+val;
                      _this3.searchAddress.country = val;
                    }
                  }
                }

                if (_this3.searchForm.valid) {
                  _this3.search();
                }
              });
            }); // this function calls assignAddressInternally

            _this3.getCurrentPosition();

            _this3.setCurrentLocation();
          });
        }
      }, {
        key: "setCurrentLocation",
        value: function setCurrentLocation() {
          var _this4 = this;

          navigator.geolocation.getCurrentPosition(function (position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;

            _this4.geoCoder.geocode({
              location: {
                lat: latitude,
                lng: longitude
              }
            }, function (results, status) {
              if (status === "OK") {
                var address = results[results.length - 3].formatted_address;

                _this4.searchForm.get(_main_component_metadata__WEBPACK_IMPORTED_MODULE_1__["SEARCH_FROM_METADATA"].searchBar).setValue(address);

                localStorage.setItem("currentAddress", results[0].formatted_address);
              }
            });
          });
        }
      }, {
        key: "assignAddress",
        value: function assignAddress(formatedAddress) {// this.searchAddress = formatedAddress;
          // let searchAddress: string;
          // if (formatedAddress.street_number) {
          //   searchAddress = formatedAddress.street_number;
          // }
          // if (formatedAddress.locality) {
          //   searchAddress = searchAddress + "," + formatedAddress.locality;
          // }
          // if (formatedAddress.administrative_area_level_1) {
          //   searchAddress = searchAddress + "," + formatedAddress.administrative_area_level_1;
          // }
          // if (formatedAddress.country) {
          //   searchAddress = searchAddress + "," + formatedAddress.country;
          // }
          // this.searchForm
          //   .get(SEARCH_FROM_METADATA.searchBar)
          //   .patchValue(formatedAddress);
        }
      }, {
        key: "changeSearchMode",
        value: function changeSearchMode(mode) {
          if (mode == _main_component_metadata__WEBPACK_IMPORTED_MODULE_1__["Mode"].Boat || mode == _main_component_metadata__WEBPACK_IMPORTED_MODULE_1__["Mode"].Seaplane) {
            this.displayLength = true;
            this.modePlaceholder = mode;
            this.searchForm.get(_main_component_metadata__WEBPACK_IMPORTED_MODULE_1__["SEARCH_FROM_METADATA"].vehicleLength).setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
            this.searchForm.get(_main_component_metadata__WEBPACK_IMPORTED_MODULE_1__["SEARCH_FROM_METADATA"].vehicleLength).updateValueAndValidity();
          } else {
            this.displayLength = false;
            this.searchForm.get(_main_component_metadata__WEBPACK_IMPORTED_MODULE_1__["SEARCH_FROM_METADATA"].vehicleLength).clearValidators();
            this.searchForm.get(_main_component_metadata__WEBPACK_IMPORTED_MODULE_1__["SEARCH_FROM_METADATA"].vehicleLength).updateValueAndValidity();
          }
        } // isSelected(mode) {
        //   if (mode == this.selectedMode) {
        //     return true;
        //   } else {
        //     return false;
        //   }
        // }
        // onSearchChange(e) {
        // debugger
        // keyword = 'new'
        // e.target.value = this.searchResults;
        // }

      }, {
        key: "search",
        value: function search() {
          this.searchService.searchText = this.searchForm.get(_main_component_metadata__WEBPACK_IMPORTED_MODULE_1__["SEARCH_FROM_METADATA"].searchBar).value;

          if (this.currentLocation && this.currentLocation.lat) {
            var vehicleLength = this.searchForm.get(_main_component_metadata__WEBPACK_IMPORTED_MODULE_1__["SEARCH_FROM_METADATA"].vehicleLength).value;
            var search = {};
            search.lat = this.currentLocation.lat;
            search.lng = this.currentLocation.lng;
            search.mode = this.searchForm.get(_main_component_metadata__WEBPACK_IMPORTED_MODULE_1__["SEARCH_FROM_METADATA"].vehicleCategory).value;
            if (this.searchAddress.street_number) search.street = this.searchAddress.street_number;
            if (this.searchAddress.locality) search.locality = this.searchAddress.locality;
            search.search = this.searchService.searchText;

            if (vehicleLength) {
              search.vehiclelength = vehicleLength;
              this.router.navigate(['/search', search]); // this.router.navigateByUrl(
              //   `/search?lat=${this.currentLocation.lat}&lng=${this.currentLocation.lng}&mode=${this.selectedMode}&length=${vehicleLength}&searchfilter=${this.searchService.searchText}`
              // );
            } else {
              this.router.navigate(['/search', search]); // this.router.navigateByUrl(
              //   `/search?lat=${this.currentLocation.lat}&lng=${this.currentLocation.lng}
              //   &mode=${this.selectedMode}&street=${this.searchAddress.street_number}
              //   &locality=${this.searchAddress.locality}&search=${this.searchAddress.administrative_area_level_1},${this.searchAddress.country}`
              // );
            }
          } else {
            this.router.navigateByUrl("/search");
          }
        }
      }]);

      return MainComponent;
    }(src_app_search_search_page_search_base_component__WEBPACK_IMPORTED_MODULE_3__["SearchBaseComponent"]);

    MainComponent.ɵfac = function MainComponent_Factory(t) {
      return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_agm_core__WEBPACK_IMPORTED_MODULE_6__["MapsAPILoader"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_search_service__WEBPACK_IMPORTED_MODULE_7__["SearchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_places_service__WEBPACK_IMPORTED_MODULE_8__["PlacesService"]));
    };

    MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MainComponent,
      selectors: [["app-main"]],
      viewQuery: function MainComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchElementRef = _t.first);
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 27,
      vars: 9,
      consts: [[1, "landing-page-wrapper"], [1, "container"], [1, "head-container"], [1, "row"], [1, "col-md-12"], [1, "search-container"], [1, "font-poponis", "search-engine-heading"], ["accept-charset", "UTF-8", "method", "get", 1, "form-group", "mb-0", 3, "formGroup"], [1, "input-group", "w-100"], [1, "input-group-btn", "col-md-3", "col-sm-6", "col-12", "px-1", "mx-md-0", "mx-auto", "mb-md-0", "mb-2"], ["id", "select-control", "name", "args", 1, "form-control", "form-control-lg", "rounded", "font-adjust", 3, "formControlName", "change"], ["disabled", "", "selected", "", "hidden", "", 3, "value"], [3, "value", 4, "ngFor", "ngForOf"], [1, "input-group-btn", "col-md", "col-sm-10", "col-12", "px-1", "mx-md-0", "mx-auto", "mb-md-0", "mb-2"], ["type", "text", "name", "search", "id", "search", "placeholder", "Search by Location Or Address", "type", "text", "name", "search-text", 1, "form-control", "form-control-lg", "rounded", "font-adjust", 3, "formControlName"], ["searchBar", ""], ["style", "max-width: 170px;", "class", "col-md-auto col-sm-6 col-12 mx-md-0  mx-auto px-1 mb-md-0 mb-2", 4, "ngIf"], [1, "input-group-btn", "col-auto", "mx-md-0", "mx-auto", "px-1"], ["data-disable-with", "Search", "name", "commit", "id", "searchbtn", "type", "submit", 1, "form-control", "rounded", "btn", "btn-search", "px-5", "py-3", 3, "disabled", "click"], [1, "home-container"], [1, "image-wrapper"], ["src", "/assets/images/bg-car-couple.png"], [3, "value"], [1, "col-md-auto", "col-sm-6", "col-12", "mx-md-0", "mx-auto", "px-1", "mb-md-0", "mb-2", 2, "max-width", "170px"], ["type", "text", "name", "boat_length", "id", "boat_length", "value", "", "numbersOnly", "", "maxlength", "3", 1, "form-control", "form-control-lg", "font-adjust", 3, "formControlName", "placeholder"]],
      template: function MainComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-nav-bar-new");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "THE SMARTER WAY TO PARK");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "select", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MainComponent_Template_select_change_12_listener($event) {
            return ctx.changeSearchMode($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Type of Parking");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, MainComponent_option_15_Template, 2, 2, "option", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "enumToArray");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 14, 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, MainComponent_span_20_Template, 2, 2, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainComponent_Template_button_click_22_listener() {
            return ctx.search();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Search ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.searchForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx.SEARCH_FROM_METADATA.vehicleCategory);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 7, ctx.Mode));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx.SEARCH_FROM_METADATA.searchBar);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayLength);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.searchForm.invalid);
        }
      },
      directives: [_navbar_new_navbar_new_component__WEBPACK_IMPORTED_MODULE_9__["NavBarNewComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _shared_numbers_only_directive__WEBPACK_IMPORTED_MODULE_11__["NumbersOnlyDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"]],
      pipes: [_shared_pipe_enumtoarray_pipe__WEBPACK_IMPORTED_MODULE_12__["EnumToArrayPipe"]],
      styles: [".follow[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 1%;\n  top: 25%;\n  writing-mode: vertical-rl;\n  color: black;\n  background-color: #ffffff86;\n  border-radius: 30px;\n  padding: 15px 0px;\n  z-index: 2;\n}\n\n.follow[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding-left: 10px;\n  padding-right: 8px;\n  padding-bottom: 6px;\n}\n\n.follow[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 25px;\n  margin-right: 6px;\n}\n\n.col-2-5[_ngcontent-%COMP%] {\n  flex: 0 0 20%;\n  max-width: 20%;\n}\n\n.btn-switch[_ngcontent-%COMP%] {\n  background-color: #226ec5;\n  border: 1px solid #0b3c5f;\n  color: #f4f4f4;\n}\n\n.btn-switch[_ngcontent-%COMP%]:hover {\n  color: #226ec5;\n  border: 1px solid #0b3c5f;\n  background-color: #ffffff;\n}\n\n.btn-switchSelected[_ngcontent-%COMP%] {\n  color: #226ec5;\n  border: 1px solid #0b3c5f;\n  background-color: #ffffff;\n}\n\n.btn-search[_ngcontent-%COMP%] {\n  background-color: #4cda64 !important;\n  color: #f4f4f4;\n}\n\n.btn-search[_ngcontent-%COMP%]:hover {\n  background-color: black !important;\n  color: #f4f4f4 !important;\n  outline: none !important;\n  border: none !important;\n  outline: none !important;\n  outline-width: 0 !important;\n  box-shadow: none;\n  -moz-box-shadow: none;\n  -webkit-box-shadow: none;\n}\n\n.btn-search[_ngcontent-%COMP%]:hover {\n  color: #226ec5;\n  background-color: #ffffff;\n  background-color: black !important;\n  color: #f4f4f4 !important;\n  outline: none !important;\n  border: none !important;\n  outline: none !important;\n  outline-width: 0 !important;\n  box-shadow: none;\n  -moz-box-shadow: none;\n  -webkit-box-shadow: none;\n}\n\n.search-group[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  background-color: #ffffff;\n}\n\n.home-background[_ngcontent-%COMP%] {\n  background-image: url(\"https://static.wixstatic.com/media/a37347_ccc56a0f485a48c18c6d1d0daca30ee7~mv2.jpg/v1/fill/w_2880,h_1020,al_t,q_90,usm_0.66_1.00_0.01/a37347_ccc56a0f485a48c18c6d1d0daca30ee7~mv2.webp\");\n  background-repeat: no-repeat;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: top center;\n  height: auto;\n  z-index: -1;\n}\n\n.landing-page-wrapper[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/img-bg.jpg\");\n  background-size: cover;\n  background-repeat: no-repeat;\n  min-height: 510px;\n  position: relative;\n}\n\n@media only screen and (max-height: 500px) {\n  .home-background[_ngcontent-%COMP%] {\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center;\n    z-index: -1;\n  }\n}\n\n.home[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n  border-bottom: 3px solid #ffffff;\n}\n\n.home[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 20px;\n}\n\n.centered[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.button-a[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 10px 30px;\n  text-decoration: none;\n  font-size: 1.4em;\n  margin: 15px 15px;\n  border-radius: 50px;\n  border: 2px solid #226ec5;\n  background-color: #226ec5;\n  color: #f4f4f4;\n  transition: all 0.3s ease 0s;\n}\n\n.button-a[_ngcontent-%COMP%]:hover {\n  border: 2px solid #226ec5;\n  color: #226ec5;\n  background-color: #f4f4f4;\n}\n\n#boat[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0%;\n  right: 0%;\n}\n\n#car[_ngcontent-%COMP%] {\n  position: absolute;\n  position: absolute;\n  bottom: 9px;\n  left: 50%;\n  transform: translate(-50%, 10px);\n  \n  \n  max-height: 100%;\n  z-index: 1000;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n#truck[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 50%;\n  left: 50%;\n  transform: translate(-50%, 0%);\n}\n\n#helicopter[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0%;\n  right: 0%;\n}\n\n#plane2[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0%;\n  left: 0%;\n}\n\n#plane1[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0%;\n  left: 0%;\n}\n\n.no-focus[_ngcontent-%COMP%]:focus, .no-focus[_ngcontent-%COMP%]:active, .no-focus[_ngcontent-%COMP%]:hover {\n  outline: none !important;\n  border: none !important;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  background-color: #dbdbdb;\n}\n\n.form-control[_ngcontent-%COMP%]:hover, .form-control[_ngcontent-%COMP%]:active, .form-control[_ngcontent-%COMP%]:focus {\n  outline: none !important;\n  border: none !important;\n  outline: none !important;\n  outline-width: 0 !important;\n  box-shadow: none;\n  -moz-box-shadow: none;\n  -webkit-box-shadow: none;\n  background-color: #4cda64 !important;\n}\n\nselect[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  margin: 40px;\n  background: #ffffff !important;\n  color: #000 !important;\n  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.4) !important;\n}\n\n#searchbtn[_ngcontent-%COMP%] {\n  min-height: 46px;\n  display: flex;\n  align-items: center;\n}\n\n#searchbtn[_ngcontent-%COMP%]:hover {\n  outline: none !important;\n  border: none !important;\n  outline: none !important;\n  outline-width: 0 !important;\n  box-shadow: none;\n  -moz-box-shadow: none;\n  -webkit-box-shadow: none;\n}\n\n.form-control-lg[_ngcontent-%COMP%] {\n  border-radius: 5px !important;\n  min-height: 46px;\n}\n\n.font-adjust[_ngcontent-%COMP%] {\n  font-size: 16px !important;\n}\n\n.smart-heading[_ngcontent-%COMP%] {\n  font-size: 34px;\n  letter-spacing: 6px;\n}\n\n@media (max-width: 991.98px) {\n  .search-container[_ngcontent-%COMP%] {\n    padding: 30px 50px;\n  }\n\n  .smart-heading[_ngcontent-%COMP%] {\n    font-size: 28px;\n    letter-spacing: 3px;\n  }\n}\n\n@media (max-width: 768.98px) {\n  #car[_ngcontent-%COMP%] {\n    position: absolute;\n    \n    bottom: 9px;\n    left: 50%;\n    transform: translate(-50%, 10px);\n    max-height: 100%;\n    z-index: 1000;\n    \n    width: auto !important;\n    height: 193px;\n    -o-object-fit: cover;\n    object-fit: cover;\n    max-width: 100%;\n  }\n\n  .landing-page-wrapper[_ngcontent-%COMP%] {\n    min-height: 600px !important;\n  }\n\n  .search-container[_ngcontent-%COMP%] {\n    padding: 40px;\n  }\n}\n\n@media (max-width: 500.98px) {\n  .search-container[_ngcontent-%COMP%] {\n    padding: 10px;\n  }\n\n  .smart-heading[_ngcontent-%COMP%] {\n    font-size: 20px;\n    letter-spacing: 3px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy9tYWluL0M6XFxVc2Vyc1xcaHBcXERlc2t0b3BcXGxhdGVzdF9jb2RlX3dlYlxcRWR5b29zUG9ydGFsLVVJXFxFZHlvb3NQb3J0YWwvc3JjXFxhcHBcXGxhbmRpbmdcXG1haW5cXG1haW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xhbmRpbmcvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtBQ0NGOztBRENBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0VGOztBREFBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0FDR0Y7O0FEREE7RUFDRSxhQUFBO0VBQ0EsY0FBQTtBQ0lGOztBREZBO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUNLRjs7QURIQTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0FDTUY7O0FESkE7RUFDRSxjQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtBQ09GOztBRExBO0VBQ0Usb0NBQUE7RUFDQSxjQUFBO0FDUUY7O0FEUEU7RUFDRSxrQ0FBQTtFQUNBLHlCQUFBO0VBQ0Usd0JBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esd0JBQUE7QUNTTjs7QUROQTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGtDQUFBO0VBQ0UseUJBQUE7RUFDRSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtBQ1NOOztBRE5BO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtBQ1NGOztBRExBO0VBRUUsK01BQUE7RUFDQSw0QkFBQTtFQUVBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSwrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDTUY7O0FESkE7RUFDRSxrREFBQTtFQUVBLHNCQUFBO0VBRUEsNEJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDS0Y7O0FESEE7RUFDRTtJQUVFLDRCQUFBO0lBQ0Esc0JBQUE7SUFDQSwyQkFBQTtJQUNBLFdBQUE7RUNLRjtBQUNGOztBRE1BO0VBQ0Usa0JBQUE7RUFDQSxnQ0FBQTtBQ0pGOztBRE1BO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FDSEY7O0FES0E7RUFDRSxrQkFBQTtBQ0ZGOztBRElBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtBQ0RGOztBRElBO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUNERjs7QURJQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUNERjs7QURHQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQW1DLG9CQUFBO0VBQ25DLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBRUUsb0JBQUE7S0FBQSxpQkFBQTtBQ0FKOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLDhCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0FDRUY7O0FEQUE7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FDR0Y7O0FEREE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0FDSUY7O0FEREU7RUFDRSx3QkFBQTtFQUNBLHVCQUFBO0FDSUo7O0FEREE7RUFDRSx5QkFBQTtBQ0lGOztBREhFO0VBQ0Usd0JBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQ0FBQTtBQ0tKOztBREZBO0VBQ0UsWUFBQTtFQUNBLDhCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrREFBQTtBQ0tGOztBREhBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNNRjs7QURMRTtFQUNFLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0FDT0o7O0FETEE7RUFFRSw2QkFBQTtFQUNBLGdCQUFBO0FDT0Y7O0FEc0JBO0VBQ0UsMEJBQUE7QUNuQkY7O0FEc0JBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FDbkJGOztBRHFCQTtFQUVFO0lBQ0Usa0JBQUE7RUNuQkY7O0VEc0JBO0lBQ0UsZUFBQTtJQUNBLG1CQUFBO0VDbkJGO0FBQ0Y7O0FEc0JDO0VBQ0M7SUFDRSxrQkFBQTtJQUNBLHdCQUFBO0lBQ0EsV0FBQTtJQUNBLFNBQUE7SUFDQSxnQ0FBQTtJQUNBLGdCQUFBO0lBQ0EsYUFBQTtJQUNBLGtCQUFBO0lBQ0Esc0JBQUE7SUFDQSxhQUFBO0lBQ0Esb0JBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7RUNwQkY7O0VEc0JGO0lBQ0UsNEJBQUE7RUNuQkE7O0VEcUJGO0lBQ0UsYUFBQTtFQ2xCQTtBQUNGOztBRG9CQztFQUNDO0lBQ0UsYUFBQTtFQ2xCRjs7RURvQkE7SUFDRSxlQUFBO0lBQ0EsbUJBQUE7RUNqQkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmcvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvbGxvdyB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHJpZ2h0OiAxJTtcclxuICB0b3A6IDI1JTtcclxuICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLXJsO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmODY7XHJcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICBwYWRkaW5nOiAxNXB4IDBweDtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcbi5mb2xsb3cgcCB7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNnB4O1xyXG59XHJcbi5mb2xsb3cgaW1nIHtcclxuICB3aWR0aDogMjVweDtcclxuICBtYXJnaW4tcmlnaHQ6IDZweDtcclxufVxyXG4uY29sLTItNSB7XHJcbiAgZmxleDogMCAwIDIwJTtcclxuICBtYXgtd2lkdGg6IDIwJTtcclxufVxyXG4uYnRuLXN3aXRjaCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyNmVjNTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMGIzYzVmO1xyXG4gIGNvbG9yOiAjZjRmNGY0O1xyXG59XHJcbi5idG4tc3dpdGNoOmhvdmVyIHtcclxuICBjb2xvcjogIzIyNmVjNTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMGIzYzVmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuLmJ0bi1zd2l0Y2hTZWxlY3RlZCB7XHJcbiAgY29sb3I6ICMyMjZlYzU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzBiM2M1ZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbi5idG4tc2VhcmNoIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc2LCAyMTgsIDEwMCkgIWltcG9ydGFudDtcclxuICBjb2xvcjogI2Y0ZjRmNDtcclxuICAmOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogI2Y0ZjRmNCAhaW1wb3J0YW50O1xyXG4gICAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICBvdXRsaW5lOm5vbmUgIWltcG9ydGFudDtcclxuICAgICAgb3V0bGluZS13aWR0aDogMCAhaW1wb3J0YW50O1xyXG4gICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAtbW96LWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTsgIH1cclxuICBcclxufVxyXG4uYnRuLXNlYXJjaDpob3ZlciB7XHJcbiAgY29sb3I6ICMyMjZlYzU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCkgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjZjRmNGY0ICFpbXBvcnRhbnQ7XHJcbiAgICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgIG91dGxpbmU6bm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICBvdXRsaW5lLXdpZHRoOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgIC1tb3otYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lOyBcclxufVxyXG5cclxuLnNlYXJjaC1ncm91cCB7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcblxyXG4uaG9tZS1iYWNrZ3JvdW5kIHtcclxuICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy92aWFnYWxhY3RpY2EtRHhIUjhLNUVnamstdW5zcGxhc2hfZWRpdGVkX2VkaXRlZC5qcGdcIik7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9zdGF0aWMud2l4c3RhdGljLmNvbS9tZWRpYS9hMzczNDdfY2NjNTZhMGY0ODVhNDhjMThjNmQxZDBkYWNhMzBlZTd+bXYyLmpwZy92MS9maWxsL3dfMjg4MCxoXzEwMjAsYWxfdCxxXzkwLHVzbV8wLjY2XzEuMDBfMC4wMS9hMzczNDdfY2NjNTZhMGY0ODVhNDhjMThjNmQxZDBkYWNhMzBlZTd+bXYyLndlYnBcIik7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAvL2JhY2tncm91bmQtc2l6ZTogMTAwdncgMTAwdmg7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246ICB0b3AgY2VudGVyO1xyXG4gIGhlaWdodDogYXV0bztcclxuICB6LWluZGV4OiAtMTtcclxufVxyXG4ubGFuZGluZy1wYWdlLXdyYXBwZXJ7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvaW1nLWJnLmpwZ1wiKTtcclxuICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL3N0YXRpYy53aXhzdGF0aWMuY29tL21lZGlhL2EzNzM0N19jY2M1NmEwZjQ4NWE0OGMxOGM2ZDFkMGRhY2EzMGVlN35tdjIuanBnL3YxL2ZpbGwvd18yODgwLGhfMTAyMCxhbF90LHFfOTAsdXNtXzAuNjZfMS4wMF8wLjAxL2EzNzM0N19jY2M1NmEwZjQ4NWE0OGMxOGM2ZDFkMGRhY2EzMGVlN35tdjIud2VicFwiKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIC8vIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIG1pbi1oZWlnaHQ6IDUxMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA1MDBweCkge1xyXG4gIC5ob21lLWJhY2tncm91bmQge1xyXG4gICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kX2ltZy5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gIH1cclxufVxyXG4vLyAuaG9tZSB7XHJcbi8vICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4vLyAgIHRvcDogMHB4O1xyXG4vLyAgIHBhZGRpbmc6IDIwcHggMHB4O1xyXG4vLyAgIGhlaWdodDogNTAwcHg7XHJcbi8vICAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzJjMzAzNDkxO1xyXG4vLyAgIGNvbG9yOiB3aGl0ZTtcclxuLy8gfVxyXG5cclxuLmhvbWUgaDEge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2ZmZmZmZjtcclxufVxyXG4uaG9tZSBwIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbi5jZW50ZXJlZCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5idXR0b24tYSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6IDEwcHggMzBweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxLjRlbTtcclxuICBtYXJnaW46IDE1cHggMTVweDtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICMyMjZlYzU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyNmVjNTtcclxuICBjb2xvcjogI2Y0ZjRmNDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xyXG59XHJcblxyXG4uYnV0dG9uLWE6aG92ZXIge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICMyMjZlYzU7XHJcbiAgY29sb3I6ICMyMjZlYzU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcclxufVxyXG5cclxuI2JvYXQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDAlO1xyXG4gIHJpZ2h0OiAwJTtcclxufVxyXG4jY2FyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogOXB4O1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAxMHB4KTsgIC8qIG1heC13aWR0aDogMzAlOyAqL1xyXG4gIC8qIHdpZHRoOiAzMCU7ICovXHJcbiAgbWF4LWhlaWdodDogMTAwJTtcclxuICB6LWluZGV4OiAxMDAwO1xyXG4gIFxyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuI3RydWNre1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLDAlKTtcclxufVxyXG4jaGVsaWNvcHRlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMCU7XHJcbiAgcmlnaHQ6IDAlO1xyXG59XHJcbiNwbGFuZTIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDAlO1xyXG4gIGxlZnQ6IDAlO1xyXG59XHJcbiNwbGFuZTEge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDAlO1xyXG4gIGxlZnQ6IDAlO1xyXG59XHJcbi5uby1mb2N1c3tcclxuICAmOmZvY3VzLCY6YWN0aXZlLCY6aG92ZXJ7XHJcbiAgICBvdXRsaW5lOiAgbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiAgbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4uZm9ybS1jb250cm9sIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE5LCAyMTksIDIxOSk7XHJcbiAgJjpob3ZlciwgJjphY3RpdmUsJjpmb2N1c3tcclxuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgb3V0bGluZTpub25lICFpbXBvcnRhbnQ7XHJcbiAgICBvdXRsaW5lLXdpZHRoOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NiwgMjE4LCAxMDApICFpbXBvcnRhbnQ7O1xyXG4gIH1cclxufVxyXG5zZWxlY3Qgb3B0aW9uIHtcclxuICBtYXJnaW46IDQwcHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XHJcbiAgdGV4dC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjQpICFpbXBvcnRhbnQ7XHJcbn1cclxuI3NlYXJjaGJ0biB7XHJcbiAgbWluLWhlaWdodDogNDZweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgJjpob3ZlcntcclxuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgb3V0bGluZTpub25lICFpbXBvcnRhbnQ7XHJcbiAgICBvdXRsaW5lLXdpZHRoOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lOyAgfVxyXG59XHJcbi5mb3JtLWNvbnRyb2wtbGd7XHJcbiAgLy9mb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcclxuICBtaW4taGVpZ2h0OiA0NnB4O1xyXG59XHJcbi8vIDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIEVkZ2UgKi9cclxuLy8gICBjb2xvcjogIzAwMDAwMDtcclxuLy8gICBmb250LXdlaWdodDogYm9sZDtcclxuLy8gICBmb250LXNpemU6IDE0cHg7XHJcbi8vIH1cclxuXHJcbi8vIDotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMC0xMSAqL1xyXG4vLyAgIGNvbG9yOiAjMDAwMDAwO1xyXG4vLyAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4vLyAgIGZvbnQtc2l6ZTogMTRweDtcclxuXHJcbi8vIH1cclxuLy8gc2VsZWN0IG9wdGlvbiB7XHJcbi8vICAgY29sb3I6ICMwMDAwMDA7XHJcbi8vICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbi8vICAgZm9udC1zaXplOiAxNHB4O1xyXG4vLyB9XHJcbi8vIDo6cGxhY2Vob2xkZXIge1xyXG4vLyAgIGNvbG9yOiAjMDAwMDAwO1xyXG4vLyAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4vLyAgIGZvbnQtc2l6ZTogMTRweDtcclxuLy8gfVxyXG4vLyBzZWxlY3R7XHJcbi8vICAgY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcclxuLy8gICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xyXG4vLyAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4vLyB9XHJcbi5mb250LWFkanVzdHtcclxuICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNtYXJ0LWhlYWRpbmcge1xyXG4gIGZvbnQtc2l6ZTogMzRweDtcclxuICBsZXR0ZXItc3BhY2luZzogNnB4O1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTEuOThweCkgeyBcclxuXHJcbiAgLnNlYXJjaC1jb250YWluZXJ7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDUwcHg7XHJcblxyXG4gIH1cclxuICAuc21hcnQtaGVhZGluZ3tcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbiAgfVxyXG5cclxuIH1cclxuIEBtZWRpYSAobWF4LXdpZHRoOiA3NjguOThweCkge1xyXG4gICNjYXJ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7ICovXHJcbiAgICBib3R0b206IDlweDtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDEwcHgpO1xyXG4gICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgICAvKiB3aWR0aDogOTI3cHg7ICovXHJcbiAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAxOTNweDtcclxuICAgIC1vLW9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4ubGFuZGluZy1wYWdlLXdyYXBwZXJ7XHJcbiAgbWluLWhlaWdodDogNjAwcHggIWltcG9ydGFudDtcclxufVxyXG4uc2VhcmNoLWNvbnRhaW5lcntcclxuICBwYWRkaW5nOiA0MHB4O1xyXG59XHJcbiB9XHJcbiBAbWVkaWEgKG1heC13aWR0aDogNTAwLjk4cHgpIHtcclxuICAuc2VhcmNoLWNvbnRhaW5lcntcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG4gIC5zbWFydC1oZWFkaW5ne1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcclxuICB9XHJcbn1cclxuIiwiLmZvbGxvdyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDElO1xuICB0b3A6IDI1JTtcbiAgd3JpdGluZy1tb2RlOiB2ZXJ0aWNhbC1ybDtcbiAgY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmODY7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIHBhZGRpbmc6IDE1cHggMHB4O1xuICB6LWluZGV4OiAyO1xufVxuXG4uZm9sbG93IHAge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG4gIHBhZGRpbmctYm90dG9tOiA2cHg7XG59XG5cbi5mb2xsb3cgaW1nIHtcbiAgd2lkdGg6IDI1cHg7XG4gIG1hcmdpbi1yaWdodDogNnB4O1xufVxuXG4uY29sLTItNSB7XG4gIGZsZXg6IDAgMCAyMCU7XG4gIG1heC13aWR0aDogMjAlO1xufVxuXG4uYnRuLXN3aXRjaCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjZlYzU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwYjNjNWY7XG4gIGNvbG9yOiAjZjRmNGY0O1xufVxuXG4uYnRuLXN3aXRjaDpob3ZlciB7XG4gIGNvbG9yOiAjMjI2ZWM1O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMGIzYzVmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuXG4uYnRuLXN3aXRjaFNlbGVjdGVkIHtcbiAgY29sb3I6ICMyMjZlYzU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwYjNjNWY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG5cbi5idG4tc2VhcmNoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRjZGE2NCAhaW1wb3J0YW50O1xuICBjb2xvcjogI2Y0ZjRmNDtcbn1cbi5idG4tc2VhcmNoOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmNGY0ZjQgIWltcG9ydGFudDtcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICBvdXRsaW5lLXdpZHRoOiAwICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIC1tb3otYm94LXNoYWRvdzogbm9uZTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xufVxuXG4uYnRuLXNlYXJjaDpob3ZlciB7XG4gIGNvbG9yOiAjMjI2ZWM1O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICBjb2xvcjogI2Y0ZjRmNCAhaW1wb3J0YW50O1xuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gIG91dGxpbmUtd2lkdGg6IDAgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgLW1vei1ib3gtc2hhZG93OiBub25lO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5zZWFyY2gtZ3JvdXAge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG5cbi5ob21lLWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL3N0YXRpYy53aXhzdGF0aWMuY29tL21lZGlhL2EzNzM0N19jY2M1NmEwZjQ4NWE0OGMxOGM2ZDFkMGRhY2EzMGVlN35tdjIuanBnL3YxL2ZpbGwvd18yODgwLGhfMTAyMCxhbF90LHFfOTAsdXNtXzAuNjZfMS4wMF8wLjAxL2EzNzM0N19jY2M1NmEwZjQ4NWE0OGMxOGM2ZDFkMGRhY2EzMGVlN35tdjIud2VicFwiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGNlbnRlcjtcbiAgaGVpZ2h0OiBhdXRvO1xuICB6LWluZGV4OiAtMTtcbn1cblxuLmxhbmRpbmctcGFnZS13cmFwcGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvaW1nLWJnLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgbWluLWhlaWdodDogNTEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNTAwcHgpIHtcbiAgLmhvbWUtYmFja2dyb3VuZCB7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICB6LWluZGV4OiAtMTtcbiAgfVxufVxuLmhvbWUgaDEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjZmZmZmZmO1xufVxuXG4uaG9tZSBwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5jZW50ZXJlZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJ1dHRvbi1hIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAxMHB4IDMwcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAxLjRlbTtcbiAgbWFyZ2luOiAxNXB4IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMyMjZlYzU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjZlYzU7XG4gIGNvbG9yOiAjZjRmNGY0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xufVxuXG4uYnV0dG9uLWE6aG92ZXIge1xuICBib3JkZXI6IDJweCBzb2xpZCAjMjI2ZWM1O1xuICBjb2xvcjogIzIyNmVjNTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcbn1cblxuI2JvYXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMCU7XG4gIHJpZ2h0OiAwJTtcbn1cblxuI2NhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDlweDtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAxMHB4KTtcbiAgLyogbWF4LXdpZHRoOiAzMCU7ICovXG4gIC8qIHdpZHRoOiAzMCU7ICovXG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IDEwMDA7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4jdHJ1Y2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xufVxuXG4jaGVsaWNvcHRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwJTtcbiAgcmlnaHQ6IDAlO1xufVxuXG4jcGxhbmUyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDAlO1xuICBsZWZ0OiAwJTtcbn1cblxuI3BsYW5lMSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwJTtcbiAgbGVmdDogMCU7XG59XG5cbi5uby1mb2N1czpmb2N1cywgLm5vLWZvY3VzOmFjdGl2ZSwgLm5vLWZvY3VzOmhvdmVyIHtcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmZvcm0tY29udHJvbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkYmRiZGI7XG59XG4uZm9ybS1jb250cm9sOmhvdmVyLCAuZm9ybS1jb250cm9sOmFjdGl2ZSwgLmZvcm0tY29udHJvbDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgb3V0bGluZS13aWR0aDogMCAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lO1xuICAtbW96LWJveC1zaGFkb3c6IG5vbmU7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRjZGE2NCAhaW1wb3J0YW50O1xufVxuXG5zZWxlY3Qgb3B0aW9uIHtcbiAgbWFyZ2luOiA0MHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG4gIHRleHQtc2hhZG93OiAwIDFweCAwIHJnYmEoMCwgMCwgMCwgMC40KSAhaW1wb3J0YW50O1xufVxuXG4jc2VhcmNoYnRuIHtcbiAgbWluLWhlaWdodDogNDZweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbiNzZWFyY2hidG46aG92ZXIge1xuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gIG91dGxpbmUtd2lkdGg6IDAgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgLW1vei1ib3gtc2hhZG93OiBub25lO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5mb3JtLWNvbnRyb2wtbGcge1xuICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcbiAgbWluLWhlaWdodDogNDZweDtcbn1cblxuLmZvbnQtYWRqdXN0IHtcbiAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5zbWFydC1oZWFkaW5nIHtcbiAgZm9udC1zaXplOiAzNHB4O1xuICBsZXR0ZXItc3BhY2luZzogNnB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkxLjk4cHgpIHtcbiAgLnNlYXJjaC1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDMwcHggNTBweDtcbiAgfVxuXG4gIC5zbWFydC1oZWFkaW5nIHtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OC45OHB4KSB7XG4gICNjYXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7ICovXG4gICAgYm90dG9tOiA5cHg7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDEwcHgpO1xuICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgei1pbmRleDogMTAwMDtcbiAgICAvKiB3aWR0aDogOTI3cHg7ICovXG4gICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDE5M3B4O1xuICAgIC1vLW9iamVjdC1maXQ6IGNvdmVyO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5sYW5kaW5nLXBhZ2Utd3JhcHBlciB7XG4gICAgbWluLWhlaWdodDogNjAwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5zZWFyY2gtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiA0MHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTAwLjk4cHgpIHtcbiAgLnNlYXJjaC1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cblxuICAuc21hcnQtaGVhZGluZyB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-main',
          templateUrl: './main.component.html',
          styleUrls: ['./main.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
        }, {
          type: _agm_core__WEBPACK_IMPORTED_MODULE_6__["MapsAPILoader"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: src_app_shared_search_service__WEBPACK_IMPORTED_MODULE_7__["SearchService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: src_app_shared_places_service__WEBPACK_IMPORTED_MODULE_8__["PlacesService"]
        }];
      }, {
        searchElementRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['searchBar']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/landing/pricing/pricing.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/landing/pricing/pricing.component.ts ***!
    \******************************************************/

  /*! exports provided: PricingComponent */

  /***/
  function srcAppLandingPricingPricingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PricingComponent", function () {
      return PricingComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function PricingComponent_h2_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "$");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PricingComponent_h2_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "$$$");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PricingComponent_h2_32_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "$");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PricingComponent_h2_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "$$$");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PricingComponent_h2_48_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "$");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PricingComponent_h2_49_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "$$$");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var PricingComponent = /*#__PURE__*/function () {
      function PricingComponent() {
        _classCallCheck(this, PricingComponent);
      }

      _createClass(PricingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "togglePeriod",
        value: function togglePeriod() {
          this.isAnnual = !this.isAnnual;
        }
      }]);

      return PricingComponent;
    }();

    PricingComponent.ɵfac = function PricingComponent_Factory(t) {
      return new (t || PricingComponent)();
    };

    PricingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PricingComponent,
      selectors: [["app-pricing"]],
      decls: 61,
      vars: 6,
      consts: [["id", "booking", 1, "container"], [1, "top"], [1, "toggle-btn"], [2, "margin", "0.8em"], [1, "switch"], ["type", "checkbox", "id", "checbox", 3, "click"], [1, "slider", "round"], [1, "package-container"], [1, "packages"], ["class", "text1", 4, "ngIf"], [1, "list"], [1, "first"], ["href", "#", 1, "button", "button1"], [1, "text1"]],
      template: function PricingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Plans & Pricing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Monthly");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PricingComponent_Template_input_click_8_listener() {
            return ctx.togglePeriod();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Annually");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Car");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, PricingComponent_h2_16_Template, 2, 0, "h2", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, PricingComponent_h2_17_Template, 2, 0, "h2", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Lorem ipsum");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Lorem ipsum");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Lorem ipsum");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Lorem ipsum");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Book");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Boat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, PricingComponent_h2_32_Template, 2, 0, "h2", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, PricingComponent_h2_33_Template, 2, 0, "h2", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "ul", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Lorem ipsum");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Lorem ipsum");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Lorem ipsum");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Lorem ipsum");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Book");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Helicopter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, PricingComponent_h2_48_Template, 2, 0, "h2", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, PricingComponent_h2_49_Template, 2, 0, "h2", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "ul", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Lorem ipsum");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Lorem ipsum");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Lorem ipsum");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Lorem ipsum");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Book");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isAnnual);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAnnual);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isAnnual);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAnnual);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isAnnual);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAnnual);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      styles: [".container[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n\n.packages[_ngcontent-%COMP%] {\n  margin: 20px;\n  width: 250px;\n  padding-bottom: 1.5em;\n  height: 100%;\n  background-color: #1e2321;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  border-radius: 10px;\n  box-shadow: 0 19px 38px #1e2321, 0 15px 12px rgba(30, 35, 33, 0.2);\n  flex-wrap: wrap;\n  color: #f4f4f4;\n}\n\n.container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2.2em;\n}\n\n.list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 20px;\n  list-style: none;\n  border-bottom: 1px solid #f4f4f4;\n  -webkit-padding-start: 0;\n          padding-inline-start: 0;\n  border-width: 1px;\n  padding: 10px;\n}\n\n.first[_ngcontent-%COMP%] {\n  margin-top: 40px;\n  border-top: 1px solid #f4f4f4;\n}\n\n.list[_ngcontent-%COMP%] {\n  width: 80%;\n}\n\nol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\ninput[_ngcontent-%COMP%], label[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: middle;\n  margin: 10px 0;\n}\n\n.button[_ngcontent-%COMP%] {\n  padding: 10px 30px;\n  text-decoration: none;\n  font-size: 1.4em;\n  margin: 15px 15px;\n  border-radius: 50px;\n  color: #f4f4f4;\n  transition: all 0.3s ease 0s;\n}\n\n.button[_ngcontent-%COMP%]:hover {\n  transform: scale(1.2);\n}\n\n.button1[_ngcontent-%COMP%] {\n  background-color: #175785;\n  box-shadow: 0 0 10px 0 #175785 inset, 0 0 20px 2px #175785;\n}\n\n.switch[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.slider[_ngcontent-%COMP%] {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #1e2321;\n  -webkit-transition: 0.4s;\n  box-shadow: 2px 6px 25px #1e2321;\n  transform: translate(0px, 0px);\n  transition: 0.6s ease transform, 0.6s box-shadow;\n}\n\n.slider[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: \"\";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  transition: 0.4s;\n}\n\ninput[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%] {\n  background-color: #175785;\n}\n\ninput[_ngcontent-%COMP%]:focus    + .slider[_ngcontent-%COMP%] {\n  box-shadow: 0 0 1px #175785;\n}\n\ninput[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%]:before {\n  transform: translateX(26px);\n}\n\n.slider.round[_ngcontent-%COMP%] {\n  border-radius: 34px;\n}\n\n.slider.round[_ngcontent-%COMP%]:before {\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy9wcmljaW5nL0M6XFxVc2Vyc1xcaHBcXERlc2t0b3BcXGxhdGVzdF9jb2RlX3dlYlxcRWR5b29zUG9ydGFsLVVJXFxFZHlvb3NQb3J0YWwvc3JjXFxhcHBcXGxhbmRpbmdcXHByaWNpbmdcXHByaWNpbmcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xhbmRpbmcvcHJpY2luZy9wcmljaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUNERjs7QURJQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrRUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDREY7O0FESUE7O0VBRUUsZ0JBQUE7QUNERjs7QURJQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQ0RGOztBRElBO0VBQ0UsZ0JBQUE7RUFDQSw2QkFBQTtBQ0RGOztBRElBO0VBQ0UsVUFBQTtBQ0RGOztBRElBOztFQUVFLFVBQUE7QUNERjs7QURJQTs7RUFFRSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQ0RGOztBRElBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtBQ0RGOztBRElBO0VBQ0UscUJBQUE7QUNERjs7QURJQTtFQUNFLHlCQUFBO0VBQ0EsMERBQUE7QUNERjs7QURJQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0RGOztBRElBO0VBQ0UsVUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FDREY7O0FESUE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUVBLGdDQUFBO0VBQ0EsOEJBQUE7RUFDQSxnREFBQTtBQ0ZGOztBREtBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBRUEsZ0JBQUE7QUNGRjs7QURLQTtFQUNFLHlCQUFBO0FDRkY7O0FES0E7RUFDRSwyQkFBQTtBQ0ZGOztBREtBO0VBR0UsMkJBQUE7QUNGRjs7QURLQTtFQUNFLG1CQUFBO0FDRkY7O0FES0E7RUFDRSxrQkFBQTtBQ0ZGIiwiZmlsZSI6InNyYy9hcHAvbGFuZGluZy9wcmljaW5nL3ByaWNpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4ucGFja2FnZXMge1xyXG4gIG1hcmdpbjogMjBweDtcclxuICB3aWR0aDogMjUwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDEuNWVtO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUyMzIxO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMTlweCAzOHB4IHJnYmEoMzAsIDM1LCAzMywgMSksIDAgMTVweCAxMnB4IHJnYmEoMzAsIDM1LCAzMywgMC4yKTtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgY29sb3I6ICNmNGY0ZjQ7XHJcbn1cclxuXHJcbi5jb250YWluZXIgaDEsXHJcbi5jb250YWluZXIgaDIge1xyXG4gIGZvbnQtc2l6ZTogMi4yZW07XHJcbn1cclxuXHJcbi5saXN0IGxpIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Y0ZjRmNDtcclxuICBwYWRkaW5nLWlubGluZS1zdGFydDogMDtcclxuICBib3JkZXItd2lkdGg6IDFweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uZmlyc3Qge1xyXG4gIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmNGY0ZjQ7XHJcbn1cclxuXHJcbi5saXN0IHtcclxuICB3aWR0aDogODAlO1xyXG59XHJcblxyXG5vbCxcclxudWwge1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbmlucHV0LFxyXG5sYWJlbCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgbWFyZ2luOiAxMHB4IDA7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gIHBhZGRpbmc6IDEwcHggMzBweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxLjRlbTtcclxuICBtYXJnaW46IDE1cHggMTVweDtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIGNvbG9yOiAjZjRmNGY0O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XHJcbn1cclxuXHJcbi5idXR0b246aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxufVxyXG5cclxuLmJ1dHRvbjEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNzU3ODU7XHJcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggMCAjMTc1Nzg1IGluc2V0LCAwIDAgMjBweCAycHggIzE3NTc4NTtcclxufVxyXG5cclxuLnN3aXRjaCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogNjBweDtcclxuICBoZWlnaHQ6IDM0cHg7XHJcbn1cclxuXHJcbi5zd2l0Y2ggaW5wdXQge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgd2lkdGg6IDA7XHJcbiAgaGVpZ2h0OiAwO1xyXG59XHJcblxyXG4uc2xpZGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUyMzIxO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcclxuXHJcbiAgYm94LXNoYWRvdzogMnB4IDZweCAyNXB4ICMxZTIzMjE7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAwcHgpO1xyXG4gIHRyYW5zaXRpb246IDAuNnMgZWFzZSB0cmFuc2Zvcm0sIDAuNnMgYm94LXNoYWRvdztcclxufVxyXG5cclxuLnNsaWRlcjpiZWZvcmUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGhlaWdodDogMjZweDtcclxuICB3aWR0aDogMjZweDtcclxuICBsZWZ0OiA0cHg7XHJcbiAgYm90dG9tOiA0cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xyXG4gIHRyYW5zaXRpb246IDAuNHM7XHJcbn1cclxuXHJcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTc1Nzg1O1xyXG59XHJcblxyXG5pbnB1dDpmb2N1cyArIC5zbGlkZXIge1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxcHggIzE3NTc4NTtcclxufVxyXG5cclxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcclxufVxyXG5cclxuLnNsaWRlci5yb3VuZCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMzRweDtcclxufVxyXG5cclxuLnNsaWRlci5yb3VuZDpiZWZvcmUge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG4iLCIuY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuLnBhY2thZ2VzIHtcbiAgbWFyZ2luOiAyMHB4O1xuICB3aWR0aDogMjUwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxLjVlbTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUyMzIxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDAgMTlweCAzOHB4ICMxZTIzMjEsIDAgMTVweCAxMnB4IHJnYmEoMzAsIDM1LCAzMywgMC4yKTtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBjb2xvcjogI2Y0ZjRmNDtcbn1cblxuLmNvbnRhaW5lciBoMSxcbi5jb250YWluZXIgaDIge1xuICBmb250LXNpemU6IDIuMmVtO1xufVxuXG4ubGlzdCBsaSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmNGY0ZjQ7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwO1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmZpcnN0IHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmNGY0ZjQ7XG59XG5cbi5saXN0IHtcbiAgd2lkdGg6IDgwJTtcbn1cblxub2wsXG51bCB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmlucHV0LFxubGFiZWwge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1hcmdpbjogMTBweCAwO1xufVxuXG4uYnV0dG9uIHtcbiAgcGFkZGluZzogMTBweCAzMHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMS40ZW07XG4gIG1hcmdpbjogMTVweCAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBjb2xvcjogI2Y0ZjRmNDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcbn1cblxuLmJ1dHRvbjpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbn1cblxuLmJ1dHRvbjEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTc1Nzg1O1xuICBib3gtc2hhZG93OiAwIDAgMTBweCAwICMxNzU3ODUgaW5zZXQsIDAgMCAyMHB4IDJweCAjMTc1Nzg1O1xufVxuXG4uc3dpdGNoIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDM0cHg7XG59XG5cbi5zd2l0Y2ggaW5wdXQge1xuICBvcGFjaXR5OiAwO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xufVxuXG4uc2xpZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFlMjMyMTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xuICBib3gtc2hhZG93OiAycHggNnB4IDI1cHggIzFlMjMyMTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAwcHgpO1xuICB0cmFuc2l0aW9uOiAwLjZzIGVhc2UgdHJhbnNmb3JtLCAwLjZzIGJveC1zaGFkb3c7XG59XG5cbi5zbGlkZXI6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDI2cHg7XG4gIHdpZHRoOiAyNnB4O1xuICBsZWZ0OiA0cHg7XG4gIGJvdHRvbTogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNzU3ODU7XG59XG5cbmlucHV0OmZvY3VzICsgLnNsaWRlciB7XG4gIGJveC1zaGFkb3c6IDAgMCAxcHggIzE3NTc4NTtcbn1cblxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbn1cblxuLnNsaWRlci5yb3VuZCB7XG4gIGJvcmRlci1yYWRpdXM6IDM0cHg7XG59XG5cbi5zbGlkZXIucm91bmQ6YmVmb3JlIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PricingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-pricing',
          templateUrl: './pricing.component.html',
          styleUrls: ['./pricing.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/landing/why-Edyoos/why-Edyoos.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/landing/why-Edyoos/why-Edyoos.component.ts ***!
    \************************************************************/

  /*! exports provided: WhyEdyoosComponent */

  /***/
  function srcAppLandingWhyEdyoosWhyEdyoosComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WhyEdyoosComponent", function () {
      return WhyEdyoosComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var WhyEdyoosComponent = /*#__PURE__*/function () {
      function WhyEdyoosComponent() {
        _classCallCheck(this, WhyEdyoosComponent);
      }

      _createClass(WhyEdyoosComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return WhyEdyoosComponent;
    }();

    WhyEdyoosComponent.ɵfac = function WhyEdyoosComponent_Factory(t) {
      return new (t || WhyEdyoosComponent)();
    };

    WhyEdyoosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WhyEdyoosComponent,
      selectors: [["app-why-Edyoos"]],
      decls: 48,
      vars: 0,
      consts: [[2, "background-color", "#8aa7c3"], [1, "container", "mx-auto", "text-light", "py-3"], [1, "row", "no-gutters"], [1, "col-8", "text-center"], [1, "bg-light-color", "py-4", 2, "width", "80%"], ["src", "https://static.wixstatic.com/media/a37347_b13d8573cace4f02b6ea5617adfdacf0~mv2.jpg/v1/fill/w_600,h_400,al_c,q_80,usm_0.66_1.00_0.01/edyoos1.webp", "alt", "", 1, "img-banner"], [1, "col", "text-center"], [1, "icon-section", "text-center"], [1, "material-icons", 2, "font-size", "10rem", "color", "#f5f5f5"], [1, "h1", "my-1", 2, "font-size", "40px"], [1, "h3", "my-2"], [1, "p", "mb-0"], [2, "background-color", "#575e65"], [1, "container", "mx-auto", "text-light", "py-5"], [1, "material-icons", 2, "font-size", "10rem", "color", "f5f5f5"], ["src", "https://static.wixstatic.com/media/a37347_5c5c71462b524f51a2266fe63bd73444~mv2.jpg/v1/fill/w_600,h_400,al_c,q_80,usm_0.66_1.00_0.01/car-1149997_1920.webp", "alt", "", 1, "img-banner-right"], ["src", "https://static.wixstatic.com/media/a37347_348b9b900ae347ad963225b4d229ebc9~mv2.jpg/v1/fill/w_600,h_400,al_c,q_80,usm_0.66_1.00_0.01/russia-95311_1920.webp", "alt", "", 1, "img-banner"]],
      template: function WhyEdyoosComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " business ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " For Businesses ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " #1 In Revenue Retention ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Say goodbye to costly parking management fees. Enjoy cost-free, hassle-free, real-time parking management with Edyoos. We'll even customize your plan with flexible software and digital marketing support. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " directions_car ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h1", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " For Visitors ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h3", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Easy, Real-Time Reservations ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Edyoos is the ultimate parking reservation platform for visitors and clients. Offer a completely contact-free, zero-fuss alternative to crowded lots, packed garages, and complicated street parking. With secure payment options and real-time tracking, scoring the perfect spot has never been easier ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "section", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "section", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " business ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h1", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " For Employees ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h3", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Convenient, Reliable Parking ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " No busy work week is complete without rush-hour commutes, and crazy city traffic. Let Edyoos can make mornings easier on your business with simple parking solutions for all your employees. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".img-banner[_ngcontent-%COMP%] {\n  position: relative;\n  left: -30px;\n}\n\n.img-banner-right[_ngcontent-%COMP%] {\n  position: relative;\n  right: -30px;\n}\n\n.bg-light-color[_ngcontent-%COMP%] {\n  background-color: #f0ffff !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy93aHktRWR5b29zL0M6XFxVc2Vyc1xcaHBcXERlc2t0b3BcXGxhdGVzdF9jb2RlX3dlYlxcRWR5b29zUG9ydGFsLVVJXFxFZHlvb3NQb3J0YWwvc3JjXFxhcHBcXGxhbmRpbmdcXHdoeS1FZHlvb3NcXHdoeS1FZHlvb3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xhbmRpbmcvd2h5LUVkeW9vcy93aHktRWR5b29zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUNFSjs7QURBQTtFQUNJLG9DQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC9sYW5kaW5nL3doeS1FZHlvb3Mvd2h5LUVkeW9vcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWctYmFubmVye1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogLTMwcHg7XHJcbn1cclxuLmltZy1iYW5uZXItcmlnaHR7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICByaWdodDogLTMwcHg7XHJcbn1cclxuLmJnLWxpZ2h0LWNvbG9ye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZmZmZiAhaW1wb3J0YW50O1xyXG59IiwiLmltZy1iYW5uZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IC0zMHB4O1xufVxuXG4uaW1nLWJhbm5lci1yaWdodCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcmlnaHQ6IC0zMHB4O1xufVxuXG4uYmctbGlnaHQtY29sb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmZmZmICFpbXBvcnRhbnQ7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WhyEdyoosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-why-Edyoos',
          templateUrl: './why-Edyoos.component.html',
          styleUrls: ['./why-Edyoos.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/landing/why-us/why-us.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/landing/why-us/why-us.component.ts ***!
    \****************************************************/

  /*! exports provided: WhyUsComponent */

  /***/
  function srcAppLandingWhyUsWhyUsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WhyUsComponent", function () {
      return WhyUsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _main_main_component_metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../main/main.component.metadata */
    "./src/app/landing/main/main.component.metadata.ts");
    /* harmony import */


    var src_app_shared_places_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/places.service */
    "./src/app/shared/places.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var WhyUsComponent = /*#__PURE__*/function () {
      function WhyUsComponent(placeService, router) {
        _classCallCheck(this, WhyUsComponent);

        this.placeService = placeService;
        this.router = router;
        this.vehicleCategory = _main_main_component_metadata__WEBPACK_IMPORTED_MODULE_1__["Mode"];
      }

      _createClass(WhyUsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "navigatetoTop",
        value: function navigatetoTop(category) {
          debugger;
          var url;

          if (category == _main_main_component_metadata__WEBPACK_IMPORTED_MODULE_1__["Mode"].City_Parking) {
            url = '/pages/city-parking';
          } else if (category == _main_main_component_metadata__WEBPACK_IMPORTED_MODULE_1__["Mode"].Helicopter) {
            url = '/pages/helicopter-parking';
          } else if (category == _main_main_component_metadata__WEBPACK_IMPORTED_MODULE_1__["Mode"].Seaplane) {
            url = '/pages/seaplane-parking';
          } else if (category == _main_main_component_metadata__WEBPACK_IMPORTED_MODULE_1__["Mode"].Semi_Truck) {
            url = '/pages/semi-truck-parking';
          } else if (category == _main_main_component_metadata__WEBPACK_IMPORTED_MODULE_1__["Mode"].Truck_And_Trailer) {
            url = '/pages/truck-parking';
          } else if (category == _main_main_component_metadata__WEBPACK_IMPORTED_MODULE_1__["Mode"].Airport_Parking) {
            url = '/pages/airport-parking';
          } else if (category == _main_main_component_metadata__WEBPACK_IMPORTED_MODULE_1__["Mode"].Boat) {
            url = '/pages/boat-parking';
          }

          this.router.navigate([url]); // window.scrollTo(0, 0);
          // this.placeService.vehicleCategory.next(category);
        }
      }]);

      return WhyUsComponent;
    }();

    WhyUsComponent.ɵfac = function WhyUsComponent_Factory(t) {
      return new (t || WhyUsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_places_service__WEBPACK_IMPORTED_MODULE_2__["PlacesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    WhyUsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WhyUsComponent,
      selectors: [["app-why-us"]],
      decls: 217,
      vars: 0,
      consts: [[1, "pg-container", 2, "overflow", "hidden"], [1, "what-wrapper"], [1, "container-fluid", "mt-5", 2, "overflow", "hidden"], [1, "container", "mx-auto", "mt-2"], [1, "row", "no-gutters"], [1, "col-lg", "mx-auto", "text-center"], ["src", "https://www.youtube.com/embed/kckPu7ZnPqA", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", ""], [1, "how-works", "col-lg", "col-12"], [1, "mb-5"], [1, "heading-1", "font-poponis"], [1, "text-left", "mb-lg-4", "font-futura", "f16", 2, "color", "#180849"], [1, "row", "f16"], [1, "col-12", "mb-4"], [1, "icon-howed", "icon-how-location"], [1, "mb-0", "mt-1", "icon-howp", "font-futura", "font-weight-bold"], [1, "icon-howed", "icon-how-clock"], [1, "icon-howed", "icon-how-car"], [1, "mobile-section", "mb-5", 2, "background-color", "#dbdbdb"], [1, "container-fluid", "mx-auto"], [1, "mob-app-container", "py-3"], [1, "col-auto", "mx-lg-0", "mx-auto"], [1, "font-poponis", "mobdown-header"], [1, "py-1", "font-futura", 2, "font-size", "18px"], [1, "mt-3", "fl100"], [1, "col-xl-4", "col-lg-5", "col-md-6", "col-12", "mx-lg-0", "mx-auto"], [1, "img-section", "pt-3", "pb-2", "pl-2"], ["src", "/assets/images/responsive-mobile.png", "alt", "Mobile Icon"], [1, "rounded-circle", "mb-5"], [1, "container-fluid", "mx-auto", "px-0"], [1, "m-0"], [1, "row"], [1, "col-md-12", "col-12"], [1, "find-spot-cms"], ["version", "1.1", "id", "svgbauhaus-comp-kfsclre6img", 2, "width", "0", "height", "0", "left", "0", "top", "0", "overflow", "hidden", "position", "absolute"], ["color-interpolation-filters", "sRGB", "id", "bauhaus-comp-kfsclre6img"], ["result", "srcRGB"], ["values", "0", "type", "saturate"], ["values", "0.9098039215686274 0 0 0 0 0.7568627450980392 0 0 0 0.15294117647058825 0.3803921568627451 0 0 0 0.5294117647058824 0 0 0 1 0", "type", "matrix"], ["viewBox", "0 0 268 268", "height", "268", "width", "268", "aria-label", "mark-chan-UeiEu2D8cTA-unsplash.jpg", "role", "img", "version", "1.1", "id", "svgcomp-kfsclre6img"], ["id", "mask-comp-kfsclre6img"], ["y", "0", "x", "0", "height", "100%", "width", "100%", 0, "xlink", "href", "#mask-comp-kfsclre6img-svg", "id", "mask-comp-kfsclre6img-svg-use"], ["role", "img", "data-type", "shape", "xmlns", "http://www.w3.org/2000/svg", "width", "200", "height", "200", "viewBox", "20 20 160 160", "data-bbox", "20 20 160 160", "id", "mask-comp-kfsclre6img-svg", "preserveAspectRatio", "none"], ["d", "M180 100c0 44.183-35.817 80-80 80s-80-35.817-80-80 35.817-80 80-80 80 35.817 80 80z"], ["filter", "url(#bauhaus-comp-kfsclre6img)", "data-svg-mask", "mask-comp-kfsclre6img-svg", "mask", "url(#mask-comp-kfsclre6img)", 0, "xlink", "href", "/assets/images/city-background-268.jpg", "data-type", "image", "id", "comp-kfsclre6imgimage", "preserveAspectRatio", "xMidYMid slice", "transform", "", "y", "0", "x", "0", "height", "268", "width", "268", 2, "display", "block", "position", "absolute", "top", "auto", "right", "auto", "bottom", "auto", "left", "auto", "width", "268px", "height", "268px"], [1, "text-center", "py-2"], [1, "f22", "pt-2", "pb-0", "font-poponis", 2, "margin-bottom", "10px", "font-weight", "500", "letter-spacing", "0.1em"], [1, "btn", "px-5", "btn-search", 3, "click"], ["filter", "url(#bauhaus-comp-kfsclre6img)", "data-svg-mask", "mask-comp-kfsclre6img-svg", "mask", "url(#mask-comp-kfsclre6img)", 0, "xlink", "href", "/assets/images/truck-parking-268.jpg", "data-type", "image", "id", "comp-kfsclre6imgimage", "preserveAspectRatio", "xMidYMid slice", "transform", "", "y", "0", "x", "0", "height", "268", "width", "268", 2, "display", "block", "position", "absolute", "top", "auto", "right", "auto", "bottom", "auto", "left", "auto", "width", "268px", "height", "268px"], ["filter", "url(#bauhaus-comp-kfsclre6img)", "data-svg-mask", "mask-comp-kfsclre6img-svg", "mask", "url(#mask-comp-kfsclre6img)", 0, "xlink", "href", "/assets/images/airport-parking-268.jpg", "data-type", "image", "id", "comp-kfsclre6imgimage", "preserveAspectRatio", "xMidYMid slice", "transform", "", "y", "0", "x", "0", "height", "268", "width", "268", 2, "display", "block", "position", "absolute", "top", "auto", "right", "auto", "bottom", "auto", "left", "auto", "width", "268px", "height", "268px"], [1, "mt-5"], [1, ""], [1, "row", "justify-content-center"], [1, "find-spot-cms", "find-spot-cms-4"], ["filter", "url(#bauhaus-comp-kfsclre6img)", "data-svg-mask", "mask-comp-kfsclre6img-svg", "mask", "url(#mask-comp-kfsclre6img)", 0, "xlink", "href", "/assets/images/boat-parking-1-268.jpg", "data-type", "image", "id", "comp-kfsclre6imgimage", "preserveAspectRatio", "xMidYMid slice", "transform", "", "y", "0", "x", "0", "height", "268", "width", "268", 2, "display", "block", "position", "absolute", "top", "auto", "right", "auto", "bottom", "auto", "left", "auto", "width", "268px", "height", "268px"], ["filter", "url(#bauhaus-comp-kfsclre6img)", "data-svg-mask", "mask-comp-kfsclre6img-svg", "mask", "url(#mask-comp-kfsclre6img)", 0, "xlink", "href", "/assets/images/semi-truck-parking-268.jpg", "data-type", "image", "id", "comp-kfsclre6imgimage", "preserveAspectRatio", "xMidYMid slice", "transform", "", "y", "0", "x", "0", "height", "268", "width", "268", 2, "display", "block", "position", "absolute", "top", "auto", "right", "auto", "bottom", "auto", "left", "auto", "width", "268px", "height", "268px"], ["filter", "url(#bauhaus-comp-kfsclre6img)", "data-svg-mask", "mask-comp-kfsclre6img-svg", "mask", "url(#mask-comp-kfsclre6img)", 0, "xlink", "href", "/assets/images/sea-plane-parking-268.jpg", "data-type", "image", "id", "comp-kfsclre6imgimage", "preserveAspectRatio", "xMidYMid slice", "transform", "", "y", "0", "x", "0", "height", "268", "width", "268", 2, "display", "block", "position", "absolute", "top", "auto", "right", "auto", "bottom", "auto", "left", "auto", "width", "268px", "height", "268px"], ["filter", "url(#bauhaus-comp-kfsclre6img)", "data-svg-mask", "mask-comp-kfsclre6img-svg", "mask", "url(#mask-comp-kfsclre6img)", 0, "xlink", "href", "/assets/images/helicopter-parking-268.jpg", "data-type", "image", "id", "comp-kfsclre6imgimage", "preserveAspectRatio", "xMidYMid slice", "transform", "", "y", "0", "x", "0", "height", "268", "width", "268", 2, "display", "block", "position", "absolute", "top", "auto", "right", "auto", "bottom", "auto", "left", "auto", "width", "268px", "height", "268px"], [1, "clearfix"], [1, "container", "mx-auto"], [1, "col-md-12"], [1, "w-100", "mx-auto", "mb-5", "mt-5", 2, "max-width", "860px"], ["src", "https://www.youtube.com/embed/jj2dHtVYX2E", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", "", 1, "mx-auto", "w-100", "h-100", "video-container", 2, "height", "450px !important"]],
      template: function WhyUsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "iframe", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "HOW EDYOOS WORKS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Edyoos is the easiest way to reserve parking for all your travels, near or far. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Use Edyoos' simple search bar to find parking for any vehicle by location, city, or address. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Book a spot for the time & date you need. Pay in advance to reserve parking through our secure server. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " That's it! On the day of your reservation, locate your spot with our real-time tracking. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "section", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Download The Edyoos App! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Easy booking for on-the-go. Real-time tracking & support at your fingertips. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "section", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "ul", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "svg", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "defs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "filter", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "feComponentTransfer", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "feColorMatrix", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "feColorMatrix", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "feComponentTransfer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "svg", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "defs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "style");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "#mask-comp-kfsclre6img-svg * {fill: #fff; stroke: #fff; stroke-width: 0;}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mask", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "use", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "svg", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "path", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "image", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "CITY PARKING ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "button", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WhyUsComponent_Template_button_click_66_listener() {
            return ctx.navigatetoTop(ctx.vehicleCategory.City_Parking);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " Find A Spot ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "svg", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "defs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "filter", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "feComponentTransfer", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "feColorMatrix", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "feColorMatrix", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "feComponentTransfer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "svg", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "defs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "style");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "#mask-comp-kfsclre6img-svg * {fill: #fff; stroke: #fff; stroke-width: 0;}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "mask", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "use", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "svg", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "path", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "image", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "TRUCK & TRAILER PARKING");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "button", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WhyUsComponent_Template_button_click_89_listener() {
            return ctx.navigatetoTop(ctx.vehicleCategory.Truck_And_Trailer);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " Find A Spot ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "svg", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "defs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "filter", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "feComponentTransfer", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "feColorMatrix", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "feColorMatrix", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "feComponentTransfer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "svg", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "defs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "style");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "#mask-comp-kfsclre6img-svg * {fill: #fff; stroke: #fff; stroke-width: 0;}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "mask", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "use", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "svg", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "path", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "image", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "AIRPORT PARKING");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "button", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WhyUsComponent_Template_button_click_112_listener() {
            return ctx.navigatetoTop(ctx.vehicleCategory.Airport_Parking);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, " Find A Spot ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "ul", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "svg", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "defs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "filter", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "feComponentTransfer", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "feColorMatrix", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "feColorMatrix", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "feComponentTransfer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "svg", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "defs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "style");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "#mask-comp-kfsclre6img-svg * {fill: #fff; stroke: #fff; stroke-width: 0;}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "mask", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "use", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "svg", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "path", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "image", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "BOAT PARKING ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "button", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WhyUsComponent_Template_button_click_140_listener() {
            return ctx.navigatetoTop(ctx.vehicleCategory.Boat);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, " Find A Spot ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "svg", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "defs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "filter", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "feComponentTransfer", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "feColorMatrix", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "feColorMatrix", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "feComponentTransfer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "svg", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "defs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "style");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "#mask-comp-kfsclre6img-svg * {fill: #fff; stroke: #fff; stroke-width: 0;}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "mask", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "use", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "svg", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "path", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "image", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "SEMI-TRUCK PARKING ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "button", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WhyUsComponent_Template_button_click_163_listener() {
            return ctx.navigatetoTop(ctx.vehicleCategory.Semi_Truck);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, " Find A Spot ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "svg", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "defs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "filter", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](169, "feComponentTransfer", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "feColorMatrix", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "feColorMatrix", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "feComponentTransfer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "svg", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "defs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "style");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "#mask-comp-kfsclre6img-svg * {fill: #fff; stroke: #fff; stroke-width: 0;}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "mask", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](178, "use", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "svg", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](181, "path", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](182, "image", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "SEAPLANE PARKING ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "button", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WhyUsComponent_Template_button_click_186_listener() {
            return ctx.navigatetoTop(ctx.vehicleCategory.Seaplane);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, " Find A Spot ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "svg", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "defs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "filter", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](192, "feComponentTransfer", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](193, "feColorMatrix", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](194, "feColorMatrix", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](195, "feComponentTransfer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "svg", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "defs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "style");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "#mask-comp-kfsclre6img-svg * {fill: #fff; stroke: #fff; stroke-width: 0;}");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "mask", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](201, "use", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "svg", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](204, "path", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](205, "image", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "HELICOPTER PARKING ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "button", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WhyUsComponent_Template_button_click_209_listener() {
            return ctx.navigatetoTop(ctx.vehicleCategory.Helicopter);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, " Find A Spot ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](211, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](216, "iframe", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@1,500&display=swap\");\n.font-futura[_ngcontent-%COMP%] {\n  font-family: \"Futura\", Arial, sans-serif;\n}\n.container-us[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  width: 100%;\n}\n.packages-eus[_ngcontent-%COMP%] {\n  margin: 20px;\n  height: 100%;\n  font-size: 20px;\n  background-color: #3489eb;\n  box-shadow: 0 5px 10px #3489eb, 0 4px 3px #3489eb21;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  border-radius: 30px;\n  flex-wrap: wrap;\n  color: #f4f4f4;\n}\n.packages-us[_ngcontent-%COMP%] {\n  margin: 20px;\n  width: 250px;\n  height: 100%;\n  background-color: #3489eb;\n  box-shadow: 0 5px 10px #3489eb, 0 4px 3px #3489eb21;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  border-radius: 30px;\n  flex-wrap: wrap;\n  color: #f4f4f4;\n}\n.packages-us[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 20px;\n  list-style: none;\n  -webkit-padding-start: 0;\n          padding-inline-start: 0;\n  padding: 10px;\n  color: #f4f4f4;\n}\n.packages-us[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 90px;\n}\n.packages-table[_ngcontent-%COMP%] {\n  margin: 20px;\n  height: 100%;\n  background-color: #3489eb;\n  box-shadow: 0 5px 10px #3489eb, 0 4px 3px #3489eb21;\n  border-radius: 30px;\n  color: #f4f4f4;\n}\n.packages-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 50%;\n  font-size: 20px;\n  float: left;\n}\n.table-border[_ngcontent-%COMP%] {\n  border-left: 1px solid #ffffff;\n}\n@media only screen and (max-width: 411px) {\n  .table-border[_ngcontent-%COMP%] {\n    border-left: none;\n  }\n}\n.table-mark[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n}\n.icon-2x[_ngcontent-%COMP%] {\n  font-size: 3rem;\n}\n.icon-color[_ngcontent-%COMP%] {\n  color: #070d3b;\n}\n.icon-3x[_ngcontent-%COMP%] {\n  font-size: 3.7rem;\n}\n.icon-4x[_ngcontent-%COMP%] {\n  font-size: 7rem;\n}\n.icon-5x[_ngcontent-%COMP%] {\n  font-size: 11rem;\n}\n.icon-6x[_ngcontent-%COMP%] {\n  font-size: 12rem;\n}\n.heading-1[_ngcontent-%COMP%] {\n  font-size: 34px;\n  letter-spacing: 0.1em;\n}\n.bg-blue[_ngcontent-%COMP%] {\n  background-color: #e2eaf7;\n}\n.hw-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 600px;\n  margin-bottom: 250px;\n}\n.how-works[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  padding: 0 0 0 35px;\n}\n.material-icons[_ngcontent-%COMP%]:hover {\n  color: #062a78;\n}\n.container-us[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -17px;\n  box-shadow: none;\n}\n.btn-search[_ngcontent-%COMP%] {\n  background-color: #4cda64 !important;\n  color: #f4f4f4;\n}\n.btn-search[_ngcontent-%COMP%]:hover {\n  background-color: black !important;\n  color: #f4f4f4 !important;\n  outline: none !important;\n  border: none !important;\n  outline: none !important;\n  outline-width: 0 !important;\n  box-shadow: none;\n  -moz-box-shadow: none;\n  -webkit-box-shadow: none;\n}\niframe[_ngcontent-%COMP%] {\n  width: 560px;\n  height: 310px;\n}\n@media only screen and (max-width: 1200px) {\n  .img-custom[_ngcontent-%COMP%] {\n    width: 300px !important;\n    height: 200px !important;\n  }\n}\n.mobile-img[_ngcontent-%COMP%] {\n  width: 507px;\n  height: 379px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n@media (max-width: 1399.98px) {\n  .mobile-img[_ngcontent-%COMP%] {\n    width: 507px;\n    height: 240px;\n    -o-object-fit: initial !important;\n       object-fit: initial !important;\n  }\n}\n@media (max-width: 991.98px) {\n  .mobile-img[_ngcontent-%COMP%] {\n    width: 507px;\n    height: 300px;\n    -o-object-fit: initial !important;\n       object-fit: initial !important;\n  }\n}\n@media (max-width: 768.98px) {\n  iframe[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 310px;\n  }\n}\n.icon-howed[_ngcontent-%COMP%] {\n  width: 56px;\n  float: left;\n  height: 56px;\n  margin: 0 15px 0 0;\n}\n.icon-how-location[_ngcontent-%COMP%] {\n  background: url('how-pointer.png') no-repeat;\n}\n.icon-how-clock[_ngcontent-%COMP%] {\n  background: url('how-clock.png') no-repeat;\n}\n.icon-how-car[_ngcontent-%COMP%] {\n  background: url('how-car.png') no-repeat;\n}\n.mob-app-container[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  max-width: 980px;\n}\n.find-spot-cms[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.find-spot-cms[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0 27px;\n}\n.find-spot-cms.find-spot-cms-4[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 0 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy93aHktdXMvQzpcXFVzZXJzXFxocFxcRGVza3RvcFxcbGF0ZXN0X2NvZGVfd2ViXFxFZHlvb3NQb3J0YWwtVUlcXEVkeW9vc1BvcnRhbC9zcmNcXGFwcFxcbGFuZGluZ1xcd2h5LXVzXFx3aHktdXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xhbmRpbmcvd2h5LXVzL3doeS11cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSw0RkFBQTtBQUdSO0VBQ0Usd0NBQUE7QUNERjtBRE9BO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0FDSkY7QURPQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsbURBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0pGO0FET0E7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG1EQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNKRjtBRE9BO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FDSkY7QURNQTtFQUNFLFlBQUE7QUNIRjtBREtBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG1EQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDRkY7QURJQTtFQUNFLFVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ0RGO0FESUE7RUFDRSw4QkFBQTtBQ0RGO0FER0E7RUFDRTtJQUNFLGlCQUFBO0VDQUY7QUFDRjtBREVBO0VBQ0UsZ0JBQUE7QUNBRjtBREdBO0VBQ0UsZUFBQTtBQ0FGO0FER0E7RUFDRSxjQUFBO0FDQUY7QURFQTtFQUNFLGlCQUFBO0FDQ0Y7QURDQTtFQUNFLGVBQUE7QUNFRjtBREFBO0VBQ0UsZ0JBQUE7QUNHRjtBRERBO0VBQ0UsZ0JBQUE7QUNJRjtBREZBO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0FDS0Y7QURGQTtFQUNFLHlCQUFBO0FDS0Y7QURIQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQ01GO0FESkE7RUFDRSxrQ0FBQTtFQUNBLG1CQUFBO0FDT0Y7QURDRTtFQUNFLGNBQUE7QUNFSjtBRENBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUNFRjtBREFBO0VBQ0Usb0NBQUE7RUFDQSxjQUFBO0FDR0Y7QURGRTtFQUNFLGtDQUFBO0VBQ0EseUJBQUE7RUFDRSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtBQ0lOO0FET0U7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQ0pKO0FETUU7RUFDRTtJQUNFLHVCQUFBO0lBQ0Esd0JBQUE7RUNISjtBQUNGO0FETUU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUNKSjtBRE1FO0VBQ0U7SUFDRSxZQUFBO0lBQ0YsYUFBQTtJQUNBLGlDQUFBO09BQUEsOEJBQUE7RUNIRjtBQUNGO0FEUUU7RUFDRTtJQUNFLFlBQUE7SUFDRixhQUFBO0lBQ0EsaUNBQUE7T0FBQSw4QkFBQTtFQ05GO0FBQ0Y7QURTRztFQUNDO0lBQ0UsV0FBQTtJQUNBLGFBQUE7RUNQSjtBQUNGO0FEU0U7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ1BKO0FEU0E7RUFDRSw0Q0FBQTtBQ05GO0FEUUE7RUFDRSwwQ0FBQTtBQ0xGO0FET0E7RUFDRSx3Q0FBQTtBQ0pGO0FETUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUNIRjtBREtBO0VBQ0Usa0JBQUE7QUNGRjtBRElBO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0FDREY7QURHQTtFQUNFLGVBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmcvd2h5LXVzL3doeS11cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6aXRhbCx3Z2h0QDEsNTAwJmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuXHJcbi5mb250LWZ1dHVyYXtcclxuICBmb250LWZhbWlseTogJ0Z1dHVyYScsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5wZy1jb250YWluZXIge1xyXG4gIC8vYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMjU1LDI1NSwyNTUsMSkgMCUsIHJnYmEoMjQxLDI0NCwyNTEsMSkgMTAwJSk7XHJcbn1cclxuXHJcbi5jb250YWluZXItdXMge1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ucGFja2FnZXMtZXVzIHtcclxuICBtYXJnaW46IDIwcHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ4OWViO1xyXG4gIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggIzM0ODllYiwgMCA0cHggM3B4ICMzNDg5ZWIyMTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgY29sb3I6ICNmNGY0ZjQ7XHJcbn1cclxuXHJcbi5wYWNrYWdlcy11cyB7XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0ODllYjtcclxuICBib3gtc2hhZG93OiAwIDVweCAxMHB4ICMzNDg5ZWIsIDAgNHB4IDNweCAjMzQ4OWViMjE7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGNvbG9yOiAjZjRmNGY0O1xyXG59XHJcblxyXG4ucGFja2FnZXMtdXMgcCB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDA7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBjb2xvcjogI2Y0ZjRmNDtcclxufVxyXG4ucGFja2FnZXMtdXMgaW1nIHtcclxuICBoZWlnaHQ6IDkwcHg7XHJcbn1cclxuLnBhY2thZ2VzLXRhYmxlIHtcclxuICBtYXJnaW46IDIwcHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDg5ZWI7XHJcbiAgYm94LXNoYWRvdzogMCA1cHggMTBweCAjMzQ4OWViLCAwIDRweCAzcHggIzM0ODllYjIxO1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgY29sb3I6ICNmNGY0ZjQ7XHJcbn1cclxuLnBhY2thZ2VzLXRhYmxlIHRhYmxlIHtcclxuICB3aWR0aDogNTAlO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLnRhYmxlLWJvcmRlciB7XHJcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZmZmZmZmO1xyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDExcHgpIHtcclxuICAudGFibGUtYm9yZGVyIHtcclxuICAgIGJvcmRlci1sZWZ0OiBub25lO1xyXG4gIH1cclxufVxyXG4udGFibGUtbWFyayB7XHJcbiAgZm9udC1zaXplOiAxLjVlbTtcclxufVxyXG5cclxuLmljb24tMngge1xyXG4gIGZvbnQtc2l6ZTogM3JlbTtcclxufVxyXG5cclxuLmljb24tY29sb3J7XHJcbiAgY29sb3I6ICMwNzBkM2IgO1xyXG59XHJcbi5pY29uLTN4IHtcclxuICBmb250LXNpemU6IDMuN3JlbTtcclxufVxyXG4uaWNvbi00eCB7XHJcbiAgZm9udC1zaXplOiA3cmVtO1xyXG59XHJcbi5pY29uLTV4IHtcclxuICBmb250LXNpemU6IDExcmVtO1xyXG59XHJcbi5pY29uLTZ4IHtcclxuICBmb250LXNpemU6IDEycmVtO1xyXG59XHJcbi5oZWFkaW5nLTF7XHJcbiAgZm9udC1zaXplOiAzNHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcclxufVxyXG5cclxuLmJnLWJsdWUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMmVhZjc7XHJcbn1cclxuLmh3LXdyYXBwZXJ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1pbi1oZWlnaHQ6IDYwMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDI1MHB4O1xyXG59XHJcbi5ob3ctd29ya3Mge1xyXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgcGFkZGluZzowIDAgMCAzNXB4O1xyXG4gIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAvLyB0b3A6IDE3NXB4O1xyXG4gIC8vIGxlZnQ6IDI1JTtcclxuICAvLyB3aWR0aDogOTAlO1xyXG4gIC8vIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0yMiUsIDU1JSk7XHJcbn1cclxuLm1hdGVyaWFsLWljb25zIHtcclxuICAmOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMDYyYTc4O1xyXG4gIH1cclxufVxyXG4uY29udGFpbmVyLXVze1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC0xN3B4O1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuLmJ0bi1zZWFyY2gge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzYsIDIxOCwgMTAwKSAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjZjRmNGY0O1xyXG4gICY6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCkgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjZjRmNGY0ICFpbXBvcnRhbnQ7XHJcbiAgICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgIG91dGxpbmU6bm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICBvdXRsaW5lLXdpZHRoOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgIC1tb3otYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lOyAgfVxyXG4gIFxyXG59XHJcblxyXG4uaW1nYWUtdGVzdHtcclxuICBcclxuICAvLyBib3gtc2hhZG93OiBpbnNldCAyMDAwcHggMCAwIDAgcmdiYSgwLCAxMjUsIDI1NSwgMC41KTtcclxuICAvLyBib3JkZXItY29sb3I6IHJnYmEoMCwgMTI1LCAyNTUsIDEpO1xyXG59XHJcbiAgXHJcblxyXG4gIGlmcmFtZXtcclxuICAgIHdpZHRoOiA1NjBweDtcclxuICAgIGhlaWdodDogMzEwcHg7XHJcbiAgfVxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAuaW1nLWN1c3RvbXtcclxuICAgICAgd2lkdGg6IDMwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGhlaWdodDogMjAwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5tb2JpbGUtaW1nIHtcclxuICAgIHdpZHRoOiA1MDdweDtcclxuICAgIGhlaWdodDogMzc5cHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjsgXHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMzk5Ljk4cHgpIHsgXHJcbiAgICAubW9iaWxlLWltZ3tcclxuICAgICAgd2lkdGg6IDUwN3B4O1xyXG4gICAgaGVpZ2h0OiAyNDBweDtcclxuICAgIG9iamVjdC1maXQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIFxyXG4gICB9XHJcbiAgXHJcbiBcclxuICBAbWVkaWEgKG1heC13aWR0aDogOTkxLjk4cHgpIHsgXHJcbiAgICAubW9iaWxlLWltZ3tcclxuICAgICAgd2lkdGg6IDUwN3B4O1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIG9iamVjdC1maXQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIFxyXG4gICB9XHJcbiAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjguOThweCkge1xyXG4gICAgaWZyYW1le1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAzMTBweDtcclxuICAgIH1cclxuICB9XHJcbiAgLmljb24taG93ZWQge1xyXG4gICAgd2lkdGg6IDU2cHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGhlaWdodDogNTZweDtcclxuICAgIG1hcmdpbjogMCAxNXB4IDAgMDtcclxufVxyXG4uaWNvbi1ob3ctbG9jYXRpb24ge1xyXG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2hvdy1wb2ludGVyLnBuZykgbm8tcmVwZWF0O1xyXG59XHJcbi5pY29uLWhvdy1jbG9jayB7XHJcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvaG93LWNsb2NrLnBuZykgbm8tcmVwZWF0O1xyXG59XHJcbi5pY29uLWhvdy1jYXIge1xyXG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2hvdy1jYXIucG5nKSBuby1yZXBlYXQ7XHJcbn1cclxuLm1vYi1hcHAtY29udGFpbmVyIHtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBtYXgtd2lkdGg6IDk4MHB4O1xyXG59XHJcbi5maW5kLXNwb3QtY21zIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmZpbmQtc3BvdC1jbXMgbGkge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOiAwIDI3cHg7XHJcbn1cclxuLmZpbmQtc3BvdC1jbXMuZmluZC1zcG90LWNtcy00IGxpIHtcclxuICBwYWRkaW5nOiAwIDEwcHg7XHJcbn1cclxuXHJcbiIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOml0YWwsd2dodEAxLDUwMCZkaXNwbGF5PXN3YXBcIik7XG4uZm9udC1mdXR1cmEge1xuICBmb250LWZhbWlseTogXCJGdXR1cmFcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG59XG5cbi5jb250YWluZXItdXMge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5wYWNrYWdlcy1ldXMge1xuICBtYXJnaW46IDIwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ4OWViO1xuICBib3gtc2hhZG93OiAwIDVweCAxMHB4ICMzNDg5ZWIsIDAgNHB4IDNweCAjMzQ4OWViMjE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBjb2xvcjogI2Y0ZjRmNDtcbn1cblxuLnBhY2thZ2VzLXVzIHtcbiAgbWFyZ2luOiAyMHB4O1xuICB3aWR0aDogMjUwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0ODllYjtcbiAgYm94LXNoYWRvdzogMCA1cHggMTBweCAjMzQ4OWViLCAwIDRweCAzcHggIzM0ODllYjIxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgY29sb3I6ICNmNGY0ZjQ7XG59XG5cbi5wYWNrYWdlcy11cyBwIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogMDtcbiAgcGFkZGluZzogMTBweDtcbiAgY29sb3I6ICNmNGY0ZjQ7XG59XG5cbi5wYWNrYWdlcy11cyBpbWcge1xuICBoZWlnaHQ6IDkwcHg7XG59XG5cbi5wYWNrYWdlcy10YWJsZSB7XG4gIG1hcmdpbjogMjBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ4OWViO1xuICBib3gtc2hhZG93OiAwIDVweCAxMHB4ICMzNDg5ZWIsIDAgNHB4IDNweCAjMzQ4OWViMjE7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGNvbG9yOiAjZjRmNGY0O1xufVxuXG4ucGFja2FnZXMtdGFibGUgdGFibGUge1xuICB3aWR0aDogNTAlO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4udGFibGUtYm9yZGVyIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZmZmZmZmO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQxMXB4KSB7XG4gIC50YWJsZS1ib3JkZXIge1xuICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICB9XG59XG4udGFibGUtbWFyayB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG59XG5cbi5pY29uLTJ4IHtcbiAgZm9udC1zaXplOiAzcmVtO1xufVxuXG4uaWNvbi1jb2xvciB7XG4gIGNvbG9yOiAjMDcwZDNiO1xufVxuXG4uaWNvbi0zeCB7XG4gIGZvbnQtc2l6ZTogMy43cmVtO1xufVxuXG4uaWNvbi00eCB7XG4gIGZvbnQtc2l6ZTogN3JlbTtcbn1cblxuLmljb24tNXgge1xuICBmb250LXNpemU6IDExcmVtO1xufVxuXG4uaWNvbi02eCB7XG4gIGZvbnQtc2l6ZTogMTJyZW07XG59XG5cbi5oZWFkaW5nLTEge1xuICBmb250LXNpemU6IDM0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcbn1cblxuLmJnLWJsdWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlYWY3O1xufVxuXG4uaHctd3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLWhlaWdodDogNjAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDI1MHB4O1xufVxuXG4uaG93LXdvcmtzIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBwYWRkaW5nOiAwIDAgMCAzNXB4O1xufVxuXG4ubWF0ZXJpYWwtaWNvbnM6aG92ZXIge1xuICBjb2xvcjogIzA2MmE3ODtcbn1cblxuLmNvbnRhaW5lci11cyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMTdweDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmJ0bi1zZWFyY2gge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGNkYTY0ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZjRmNGY0O1xufVxuLmJ0bi1zZWFyY2g6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICBjb2xvcjogI2Y0ZjRmNCAhaW1wb3J0YW50O1xuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gIG91dGxpbmUtd2lkdGg6IDAgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgLW1vei1ib3gtc2hhZG93OiBub25lO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG59XG5cbmlmcmFtZSB7XG4gIHdpZHRoOiA1NjBweDtcbiAgaGVpZ2h0OiAzMTBweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgLmltZy1jdXN0b20ge1xuICAgIHdpZHRoOiAzMDBweCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMjAwcHggIWltcG9ydGFudDtcbiAgfVxufVxuLm1vYmlsZS1pbWcge1xuICB3aWR0aDogNTA3cHg7XG4gIGhlaWdodDogMzc5cHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTM5OS45OHB4KSB7XG4gIC5tb2JpbGUtaW1nIHtcbiAgICB3aWR0aDogNTA3cHg7XG4gICAgaGVpZ2h0OiAyNDBweDtcbiAgICBvYmplY3QtZml0OiBpbml0aWFsICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTEuOThweCkge1xuICAubW9iaWxlLWltZyB7XG4gICAgd2lkdGg6IDUwN3B4O1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgb2JqZWN0LWZpdDogaW5pdGlhbCAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4Ljk4cHgpIHtcbiAgaWZyYW1lIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDMxMHB4O1xuICB9XG59XG4uaWNvbi1ob3dlZCB7XG4gIHdpZHRoOiA1NnB4O1xuICBmbG9hdDogbGVmdDtcbiAgaGVpZ2h0OiA1NnB4O1xuICBtYXJnaW46IDAgMTVweCAwIDA7XG59XG5cbi5pY29uLWhvdy1sb2NhdGlvbiB7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2hvdy1wb2ludGVyLnBuZykgbm8tcmVwZWF0O1xufVxuXG4uaWNvbi1ob3ctY2xvY2sge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9ob3ctY2xvY2sucG5nKSBuby1yZXBlYXQ7XG59XG5cbi5pY29uLWhvdy1jYXIge1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9ob3ctY2FyLnBuZykgbm8tcmVwZWF0O1xufVxuXG4ubW9iLWFwcC1jb250YWluZXIge1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LXdpZHRoOiA5ODBweDtcbn1cblxuLmZpbmQtc3BvdC1jbXMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5maW5kLXNwb3QtY21zIGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAwIDI3cHg7XG59XG5cbi5maW5kLXNwb3QtY21zLmZpbmQtc3BvdC1jbXMtNCBsaSB7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WhyUsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-why-us',
          templateUrl: './why-us.component.html',
          styleUrls: ['./why-us.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_shared_places_service__WEBPACK_IMPORTED_MODULE_2__["PlacesService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/search.service.ts":
  /*!******************************************!*\
    !*** ./src/app/shared/search.service.ts ***!
    \******************************************/

  /*! exports provided: SearchService */

  /***/
  function srcAppSharedSearchServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchService", function () {
      return SearchService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SearchService = /*#__PURE__*/function () {
      function SearchService() {
        _classCallCheck(this, SearchService);
      }

      _createClass(SearchService, [{
        key: "searchText",
        get: function get() {
          return this._searchText;
        },
        set: function set(value) {
          this._searchText = value;
        }
      }, {
        key: "selectedPlace",
        get: function get() {
          return this._selectedPlace;
        },
        set: function set(value) {
          this._selectedPlace = value;
        }
      }, {
        key: "fromDate",
        get: function get() {
          return this._fromDate;
        },
        set: function set(value) {
          this._fromDate = value;
        }
      }, {
        key: "toDate",
        get: function get() {
          return this._toDate;
        },
        set: function set(value) {
          this._toDate = value;
        }
      }]);

      return SearchService;
    }();

    SearchService.ɵfac = function SearchService_Factory(t) {
      return new (t || SearchService)();
    };

    SearchService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SearchService,
      factory: SearchService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=landing-landing-module-es5.js.map