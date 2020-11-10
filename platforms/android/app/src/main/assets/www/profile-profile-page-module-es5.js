function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-page-module"], {
  /***/
  "./src/app/profile/profile-page-routing.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/profile/profile-page-routing.module.ts ***!
    \********************************************************/

  /*! exports provided: ProfilePageRoutingModule */

  /***/
  function srcAppProfileProfilePageRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function () {
      return ProfilePageRoutingModule;
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


    var _profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./profile-page/profile-page.component */
    "./src/app/profile/profile-page/profile-page.component.ts");
    /* harmony import */


    var _shared_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/auth.guard */
    "./src/app/shared/auth.guard.ts");

    var routes = [{
      path: '',
      component: _profile_page_profile_page_component__WEBPACK_IMPORTED_MODULE_2__["ProfilePageComponent"],
      canActivate: [_shared_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }];

    var ProfilePageRoutingModule = function ProfilePageRoutingModule() {
      _classCallCheck(this, ProfilePageRoutingModule);
    };

    ProfilePageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ProfilePageRoutingModule
    });
    ProfilePageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ProfilePageRoutingModule_Factory(t) {
        return new (t || ProfilePageRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProfilePageRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfilePageRoutingModule, [{
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
  "./src/app/profile/profile-page.module.ts":
  /*!************************************************!*\
    !*** ./src/app/profile/profile-page.module.ts ***!
    \************************************************/

  /*! exports provided: ProfilePageModule */

  /***/
  function srcAppProfileProfilePageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function () {
      return ProfilePageModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _profile_page_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./profile-page-routing.module */
    "./src/app/profile/profile-page-routing.module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var ngx_webcam__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-webcam */
    "./node_modules/ngx-webcam/__ivy_ngcc__/fesm2015/ngx-webcam.js");
    /* harmony import */


    var _profile_page_take_photo_take_photo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./profile-page/take-photo/take-photo.component */
    "./src/app/profile/profile-page/take-photo/take-photo.component.ts");
    /* harmony import */


    var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-bootstrap/dropdown */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/dropdown/fesm2015/ngx-bootstrap-dropdown.js");
    /* harmony import */


    var ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-intl-tel-input */
    "./node_modules/ngx-intl-tel-input/__ivy_ngcc__/fesm2015/ngx-intl-tel-input.js");
    /* harmony import */


    var _profile_page_EditLicensePlate_EditLicensePlate_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./profile-page/EditLicensePlate/EditLicensePlate.component */
    "./src/app/profile/profile-page/EditLicensePlate/EditLicensePlate.component.ts");

    var ProfilePageModule = function ProfilePageModule() {
      _classCallCheck(this, ProfilePageModule);
    };

    ProfilePageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ProfilePageModule
    });
    ProfilePageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ProfilePageModule_Factory(t) {
        return new (t || ProfilePageModule)();
      },
      imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _profile_page_routing_module__WEBPACK_IMPORTED_MODULE_1__["ProfilePageRoutingModule"], ngx_webcam__WEBPACK_IMPORTED_MODULE_3__["WebcamModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"].forRoot(), ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_6__["NgxIntlTelInputModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProfilePageModule, {
        declarations: [// ProfilePageComponent,
        _profile_page_take_photo_take_photo_component__WEBPACK_IMPORTED_MODULE_4__["TakePhotoComponent"], _profile_page_EditLicensePlate_EditLicensePlate_component__WEBPACK_IMPORTED_MODULE_7__["EditLicensePlateComponent"]],
        imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _profile_page_routing_module__WEBPACK_IMPORTED_MODULE_1__["ProfilePageRoutingModule"], ngx_webcam__WEBPACK_IMPORTED_MODULE_3__["WebcamModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"], ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_6__["NgxIntlTelInputModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfilePageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [// ProfilePageComponent,
          _profile_page_take_photo_take_photo_component__WEBPACK_IMPORTED_MODULE_4__["TakePhotoComponent"], _profile_page_EditLicensePlate_EditLicensePlate_component__WEBPACK_IMPORTED_MODULE_7__["EditLicensePlateComponent"]],
          entryComponents: [_profile_page_take_photo_take_photo_component__WEBPACK_IMPORTED_MODULE_4__["TakePhotoComponent"]],
          imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _profile_page_routing_module__WEBPACK_IMPORTED_MODULE_1__["ProfilePageRoutingModule"], ngx_webcam__WEBPACK_IMPORTED_MODULE_3__["WebcamModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"].forRoot(), ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_6__["NgxIntlTelInputModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=profile-profile-page-module-es5.js.map