(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["faq-faq-module"],{

/***/ "./src/app/faq/faq-routing.module.ts":
/*!*******************************************!*\
  !*** ./src/app/faq/faq-routing.module.ts ***!
  \*******************************************/
/*! exports provided: FaqRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqRoutingModule", function() { return FaqRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _faq_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./faq.component */ "./src/app/faq/faq.component.ts");





const routes = [{ path: '', component: _faq_component__WEBPACK_IMPORTED_MODULE_2__["FaqComponent"] }];
class FaqRoutingModule {
}
FaqRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FaqRoutingModule });
FaqRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FaqRoutingModule_Factory(t) { return new (t || FaqRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FaqRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FaqRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/faq/faq.component.ts":
/*!**************************************!*\
  !*** ./src/app/faq/faq.component.ts ***!
  \**************************************/
/*! exports provided: FaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqComponent", function() { return FaqComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/footer/footer.component.ts");




class FaqComponent {
    constructor() { }
    ngOnInit() {
        var acc = document.getElementsByClassName("accordion");
        var i;
        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function () {
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                }
                else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
            });
        }
    }
}
FaqComponent.ɵfac = function FaqComponent_Factory(t) { return new (t || FaqComponent)(); };
FaqComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FaqComponent, selectors: [["app-faq"]], decls: 63, vars: 0, consts: [[1, "faq-page"], [1, "container", "faq-container"], [1, "accordion"], [1, "panel"], ["href", "mailto:support@edyoos.com?subject=GiftCard"], ["href", "tel:8001234567"]], template: function FaqComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-nav-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Frequently Asked Questions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Can I buy an Edyoos gift card?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Yes! Contact us at ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "support@edyoos.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Do I have to reserve my parking space before I arrive?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "No, but we encourage it. If space is available you may pull in to the space and pay from your device onsite.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "What do I do if somebody is parked in my space?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Contact our customer help line at ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "800.123.4567");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " or email us at ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "support@edyoos.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, ". We are standing by to help.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Can I reserve a space for a future date?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Yes! Select Future Reservation on the search bar to reserve a space for a different day.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Can I rent out my parking space on Edyoos?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "We would love to help you rent your space and make some extra cash! Contact ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "support@edyoos.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " today to get started.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Will using Edyoos add time to my life span?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Edyoos is spreading all through out the U.S.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Where is Edyoos located?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "No comment. Wink wink.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Will using Edyoos make me look cool?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Yes, absolutely.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Do I have to get out of my car to pay?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "No. You find and reserve you space from the comfort of wherever you are on your personal device.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__["NavBarComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]], styles: ["@charset \"UTF-8\";\n.faq-container[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.faq-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-top: 5rem;\n  margin-bottom: 3rem;\n  font-weight: bold;\n  font-size: 2rem;\n}\n.accordion[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  color: #226ec5;\n  cursor: pointer;\n  padding: 1.25rem;\n  width: 100%;\n  border: none;\n  text-align: left;\n  outline: none;\n  font-size: 1.25rem;\n  transition: 0.4s;\n  border: 1px solid #dadce0;\n  margin-top: 0.25rem;\n}\n.active[_ngcontent-%COMP%], .accordion[_ngcontent-%COMP%]:hover {\n  background-color: #226ec5;\n  color: #ffffff;\n}\n.accordion[_ngcontent-%COMP%]:after {\n  content: \"+\";\n  color: #226ec5;\n  font-weight: bold;\n  float: right;\n  margin-left: 0.5rem;\n}\n.active[_ngcontent-%COMP%]::after, .accordion[_ngcontent-%COMP%]:hover::after {\n  color: #ffffff;\n}\n.active[_ngcontent-%COMP%]:after {\n  content: \"\u2212\";\n}\n.panel[_ngcontent-%COMP%] {\n  padding: 0 18px;\n  background-color: #e8f0fe;\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.2s ease-out;\n  text-align: left;\n}\n.panel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmFxL2ZhcS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZmFxL0M6XFxVc2Vyc1xcaHBcXERlc2t0b3BcXGxhdGVzdF9jb2RlX3dlYlxcRWR5b29zUG9ydGFsLVVJXFxFZHlvb3NQb3J0YWwvc3JjXFxhcHBcXGZhcVxcZmFxLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0doQjtFQUNJLGtCQUFBO0FEREo7QUNHQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QURBSjtBQ0VBO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBRENKO0FDRUU7RUFDRSx5QkFBQTtFQUNBLGNBQUE7QURDSjtBQ0VFO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBRENKO0FDQ0E7RUFDSSxjQUFBO0FERUo7QUNDRTtFQUNFLFlBQUE7QURFSjtBQ0NFO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtBREVKO0FDQUU7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBREdOIiwiZmlsZSI6InNyYy9hcHAvZmFxL2ZhcS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5mYXEtY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZmFxLWNvbnRhaW5lciBoMiB7XG4gIG1hcmdpbi10b3A6IDVyZW07XG4gIG1hcmdpbi1ib3R0b206IDNyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDJyZW07XG59XG5cbi5hY2NvcmRpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBjb2xvcjogIzIyNmVjNTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAxLjI1cmVtO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiBub25lO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBvdXRsaW5lOiBub25lO1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIHRyYW5zaXRpb246IDAuNHM7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkYWRjZTA7XG4gIG1hcmdpbi10b3A6IDAuMjVyZW07XG59XG5cbi5hY3RpdmUsIC5hY2NvcmRpb246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjI2ZWM1O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmFjY29yZGlvbjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiK1wiO1xuICBjb2xvcjogIzIyNmVjNTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbn1cblxuLmFjdGl2ZTo6YWZ0ZXIsIC5hY2NvcmRpb246aG92ZXI6OmFmdGVyIHtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5hY3RpdmU6YWZ0ZXIge1xuICBjb250ZW50OiBcIuKIklwiO1xufVxuXG4ucGFuZWwge1xuICBwYWRkaW5nOiAwIDE4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGYwZmU7XG4gIG1heC1oZWlnaHQ6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4ycyBlYXNlLW91dDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnBhbmVsIHAge1xuICBmb250LXNpemU6IDFyZW07XG4gIG1hcmdpbjogMC41cmVtO1xufSIsIi8vIC5mYXEtcGFnZXtcclxuICAvLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgyLDAsMzYsMSkgMCUsIHJnYmEoOSw5LDEyMSwxKSAzNSUsIHJnYmEoMCwyMTIsMjU1LDEpIDEwMCUpO1xyXG4vLyB9XHJcbi5mYXEtY29udGFpbmVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuLmZhcS1jb250YWluZXIgaDJ7XHJcbiAgICBtYXJnaW4tdG9wOiA1cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG59XHJcbi5hY2NvcmRpb24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGNvbG9yOiAjMjI2ZWM1O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcGFkZGluZzogMS4yNXJlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RhZGNlMDtcclxuICAgIG1hcmdpbi10b3A6IDAuMjVyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5hY3RpdmUsIC5hY2NvcmRpb246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIyNmVjNTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gIH1cclxuICBcclxuICAuYWNjb3JkaW9uOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICdcXDAwMkInO1xyXG4gICAgY29sb3I6ICMyMjZlYzU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XHJcbiAgfVxyXG4uYWN0aXZlOjphZnRlciwgLmFjY29yZGlvbjpob3Zlcjo6YWZ0ZXIge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgfVxyXG4gIFxyXG4gIC5hY3RpdmU6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcXDIyMTJcIjtcclxuICB9XHJcbiAgXHJcbiAgLnBhbmVsIHtcclxuICAgIHBhZGRpbmc6IDAgMThweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOGYwZmU7XHJcbiAgICBtYXgtaGVpZ2h0OiAwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4ycyBlYXNlLW91dDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG4gIC5wYW5lbCBwe1xyXG4gICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgIG1hcmdpbjogMC41cmVtO1xyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FaqComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-faq',
                templateUrl: './faq.component.html',
                styleUrls: ['./faq.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/faq/faq.module.ts":
/*!***********************************!*\
  !*** ./src/app/faq/faq.module.ts ***!
  \***********************************/
/*! exports provided: FaqModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqModule", function() { return FaqModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _faq_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./faq-routing.module */ "./src/app/faq/faq-routing.module.ts");
/* harmony import */ var _faq_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./faq.component */ "./src/app/faq/faq.component.ts");





class FaqModule {
}
FaqModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FaqModule });
FaqModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FaqModule_Factory(t) { return new (t || FaqModule)(); }, providers: [], imports: [[
            _faq_routing_module__WEBPACK_IMPORTED_MODULE_2__["FaqRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FaqModule, { declarations: [_faq_component__WEBPACK_IMPORTED_MODULE_3__["FaqComponent"]], imports: [_faq_routing_module__WEBPACK_IMPORTED_MODULE_2__["FaqRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FaqModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_faq_component__WEBPACK_IMPORTED_MODULE_3__["FaqComponent"]],
                imports: [
                    _faq_routing_module__WEBPACK_IMPORTED_MODULE_2__["FaqRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]
                ],
                providers: [],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=faq-faq-module-es2015.js.map