(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~cart-cart-module~details-details-module~search-search-module"],{

/***/ "./node_modules/ng2-date-picker/__ivy_ngcc__/fesm2015/ng2-date-picker.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/ng2-date-picker/__ivy_ngcc__/fesm2015/ng2-date-picker.js ***!
  \*******************************************************************************/
/*! exports provided: DatePickerComponent, DatePickerDirective, DayCalendarComponent, DayTimeCalendarComponent, DpDatePickerModule, ECalendarMode, ECalendarValue, MonthCalendarComponent, SelectEvent, TimeSelectComponent, ɵa, ɵb, ɵc, ɵd, ɵe, ɵf, ɵg, ɵh, ɵi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatePickerComponent", function() { return DatePickerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatePickerDirective", function() { return DatePickerDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayCalendarComponent", function() { return DayCalendarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayTimeCalendarComponent", function() { return DayTimeCalendarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DpDatePickerModule", function() { return DpDatePickerModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ECalendarMode", function() { return ECalendarMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ECalendarValue", function() { return ECalendarValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonthCalendarComponent", function() { return MonthCalendarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectEvent", function() { return SelectEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeSelectComponent", function() { return TimeSelectComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return DatePickerService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return UtilsService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return TimeSelectService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return DayTimeCalendarService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return DayCalendarService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return DomHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return DatePickerDirectiveService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return MonthCalendarService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return CalendarNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);










const _c0 = ["container"];
const _c1 = ["dayCalendar"];
const _c2 = ["monthCalendar"];
const _c3 = ["daytimeCalendar"];
const _c4 = ["timeSelect"];
function DatePickerComponent_dp_day_calendar_6_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "dp-day-calendar", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onGoToCurrent", function DatePickerComponent_dp_day_calendar_6_Template_dp_day_calendar_onGoToCurrent_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.onGoToCurrent.emit(); })("onLeftNav", function DatePickerComponent_dp_day_calendar_6_Template_dp_day_calendar_onLeftNav_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.onLeftNavClick($event); })("onRightNav", function DatePickerComponent_dp_day_calendar_6_Template_dp_day_calendar_onRightNav_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.onRightNavClick($event); })("onSelect", function DatePickerComponent_dp_day_calendar_6_Template_dp_day_calendar_onSelect_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.dateSelected($event, "day", ctx_r10.selectEvent.SELECTION, false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("config", ctx_r1.dayCalendarConfig)("displayDate", ctx_r1.displayDate)("ngModel", ctx_r1._selected)("theme", ctx_r1.theme);
} }
function DatePickerComponent_dp_month_calendar_7_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "dp-month-calendar", 8, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onGoToCurrent", function DatePickerComponent_dp_month_calendar_7_Template_dp_month_calendar_onGoToCurrent_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.onGoToCurrent.emit(); })("onLeftNav", function DatePickerComponent_dp_month_calendar_7_Template_dp_month_calendar_onLeftNav_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.onLeftNavClick($event); })("onRightNav", function DatePickerComponent_dp_month_calendar_7_Template_dp_month_calendar_onRightNav_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.onRightNavClick($event); })("onSelect", function DatePickerComponent_dp_month_calendar_7_Template_dp_month_calendar_onSelect_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r16.dateSelected($event, "month", ctx_r16.selectEvent.SELECTION, false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("config", ctx_r2.dayCalendarConfig)("displayDate", ctx_r2.displayDate)("ngModel", ctx_r2._selected)("theme", ctx_r2.theme);
} }
function DatePickerComponent_dp_time_select_8_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "dp-time-select", 11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onChange", function DatePickerComponent_dp_time_select_8_Template_dp_time_select_onChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r18.dateSelected($event, "second", ctx_r18.selectEvent.SELECTION, true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("config", ctx_r3.timeSelectConfig)("ngModel", ctx_r3._selected && ctx_r3._selected[0])("theme", ctx_r3.theme);
} }
function DatePickerComponent_dp_day_time_calendar_9_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "dp-day-time-calendar", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onChange", function DatePickerComponent_dp_day_time_calendar_9_Template_dp_day_time_calendar_onChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r21.dateSelected($event, "second", ctx_r21.selectEvent.SELECTION, true); })("onGoToCurrent", function DatePickerComponent_dp_day_time_calendar_9_Template_dp_day_time_calendar_onGoToCurrent_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r23.onGoToCurrent.emit(); })("onLeftNav", function DatePickerComponent_dp_day_time_calendar_9_Template_dp_day_time_calendar_onLeftNav_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r24.onLeftNavClick($event); })("onRightNav", function DatePickerComponent_dp_day_time_calendar_9_Template_dp_day_time_calendar_onRightNav_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r25.onRightNavClick($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("config", ctx_r4.dayTimeCalendarConfig)("displayDate", ctx_r4.displayDate)("ngModel", ctx_r4._selected && ctx_r4._selected[0])("theme", ctx_r4.theme);
} }
const _c5 = function (a0) { return { "dp-open": a0 }; };
function DayCalendarComponent_div_0_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 8);
} if (rf & 2) {
    const weekday_r4 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerText", ctx_r2.getWeekdayName(weekday_r4));
} }
function DayCalendarComponent_div_0_div_5_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 12);
} if (rf & 2) {
    const week_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerText", week_r5[0].date.isoWeek());
} }
function DayCalendarComponent_div_0_div_5_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DayCalendarComponent_div_0_div_5_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const day_r9 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r10.dayClicked(day_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const day_r9 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", day_r9.disabled)("innerText", ctx_r7.getDayBtnText(day_r9))("ngClass", ctx_r7.getDayBtnCssClass(day_r9));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-date", day_r9.date.format(ctx_r7.componentConfig.format));
} }
function DayCalendarComponent_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DayCalendarComponent_div_0_div_5_span_1_Template, 1, 1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DayCalendarComponent_div_0_div_5_button_2_Template, 1, 4, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const week_r5 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.componentConfig.showWeekNumbers);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", week_r5);
} }
const _c6 = function (a0) { return { "dp-hide-near-month": a0 }; };
function DayCalendarComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "dp-calendar-nav", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onGoToCurrent", function DayCalendarComponent_div_0_Template_dp_calendar_nav_onGoToCurrent_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.goToCurrent(); })("onLabelClick", function DayCalendarComponent_div_0_Template_dp_calendar_nav_onLabelClick_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.toggleCalendarMode(ctx_r14.CalendarMode.Month); })("onLeftNav", function DayCalendarComponent_div_0_Template_dp_calendar_nav_onLeftNav_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.onLeftNavClick(); })("onRightNav", function DayCalendarComponent_div_0_Template_dp_calendar_nav_onRightNav_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r16.onRightNavClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, DayCalendarComponent_div_0_span_4_Template, 1, 1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, DayCalendarComponent_div_0_div_5_Template, 3, 2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("isLabelClickable", ctx_r0.componentConfig.enableMonthSelector)("label", ctx_r0.navLabel)("showGoToCurrent", ctx_r0._shouldShowCurrent)("showLeftNav", ctx_r0.showLeftNav)("showRightNav", ctx_r0.showRightNav)("theme", ctx_r0.theme);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c6, !ctx_r0.componentConfig.showNearMonthDays));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.weekdays);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.weeks);
} }
function DayCalendarComponent_dp_month_calendar_1_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "dp-month-calendar", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onLeftNav", function DayCalendarComponent_dp_month_calendar_1_Template_dp_month_calendar_onLeftNav_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r17.onMonthCalendarLeftClick($event); })("onLeftSecondaryNav", function DayCalendarComponent_dp_month_calendar_1_Template_dp_month_calendar_onLeftSecondaryNav_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r19.onMonthCalendarSecondaryLeftClick($event); })("onNavHeaderBtnClick", function DayCalendarComponent_dp_month_calendar_1_Template_dp_month_calendar_onNavHeaderBtnClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r20.toggleCalendarMode(ctx_r20.CalendarMode.Day); })("onRightNav", function DayCalendarComponent_dp_month_calendar_1_Template_dp_month_calendar_onRightNav_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r21.onMonthCalendarRightClick($event); })("onRightSecondaryNav", function DayCalendarComponent_dp_month_calendar_1_Template_dp_month_calendar_onRightSecondaryNav_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r22.onMonthCalendarSecondaryRightClick($event); })("onSelect", function DayCalendarComponent_dp_month_calendar_1_Template_dp_month_calendar_onSelect_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r23.monthSelected($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("config", ctx_r1.monthCalendarConfig)("displayDate", ctx_r1._currentDateView)("ngModel", ctx_r1._selected)("theme", ctx_r1.theme);
} }
function MonthCalendarComponent_div_3_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MonthCalendarComponent_div_3_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const month_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r4.monthClicked(month_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const month_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", month_r3.disabled)("innerText", month_r3.text)("ngClass", ctx_r2.getMonthBtnCssClass(month_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-date", month_r3.date.format(ctx_r2.componentConfig.format));
} }
function MonthCalendarComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MonthCalendarComponent_div_3_button_1_Template, 1, 4, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const monthRow_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", monthRow_r1);
} }
function TimeSelectComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TimeSelectComponent_ng_container_10_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.increase("second"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TimeSelectComponent_ng_container_10_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.decrease("second"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerText", ctx_r0.componentConfig.timeSeparator);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r0.showIncSecond);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerText", ctx_r0.seconds);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r0.showDecSecond);
} }
function TimeSelectComponent_li_11_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TimeSelectComponent_li_11_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.toggleMeridiem(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TimeSelectComponent_li_11_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.toggleMeridiem(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r1.showToggleMeridiem);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerText", ctx_r1.meridiem);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r1.showToggleMeridiem);
} }
function CalendarNavComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CalendarNavComponent_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.leftSecondaryNavClicked(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r0.leftSecondaryNavDisabled);
} }
function CalendarNavComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CalendarNavComponent_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.onGoToCurrent.emit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CalendarNavComponent_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CalendarNavComponent_button_11_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.rightSecondaryNavClicked(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r2.rightSecondaryNavDisabled);
} }
var ECalendarMode;
(function (ECalendarMode) {
    ECalendarMode[ECalendarMode["Day"] = 0] = "Day";
    ECalendarMode[ECalendarMode["DayTime"] = 1] = "DayTime";
    ECalendarMode[ECalendarMode["Month"] = 2] = "Month";
    ECalendarMode[ECalendarMode["Time"] = 3] = "Time";
})(ECalendarMode || (ECalendarMode = {}));

var ECalendarValue;
(function (ECalendarValue) {
    ECalendarValue[ECalendarValue["Moment"] = 1] = "Moment";
    ECalendarValue[ECalendarValue["MomentArr"] = 2] = "MomentArr";
    ECalendarValue[ECalendarValue["String"] = 3] = "String";
    ECalendarValue[ECalendarValue["StringArr"] = 4] = "StringArr";
})(ECalendarValue || (ECalendarValue = {}));

var SelectEvent;
(function (SelectEvent) {
    SelectEvent["INPUT"] = "input";
    SelectEvent["SELECTION"] = "selection";
})(SelectEvent || (SelectEvent = {}));

var DomHelper_1;
let DomHelper = DomHelper_1 = class DomHelper {
    static setYAxisPosition(element, container, anchor, drops) {
        const anchorRect = anchor.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        const bottom = anchorRect.bottom - containerRect.top;
        const top = anchorRect.top - containerRect.top;
        if (drops === 'down') {
            element.style.top = (bottom + 1 + 'px');
        }
        else {
            element.style.top = (top - 1 - element.scrollHeight) + 'px';
        }
    }
    static setXAxisPosition(element, container, anchor, dimElem, opens) {
        const anchorRect = anchor.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        const left = anchorRect.left - containerRect.left;
        if (opens === 'right') {
            element.style.left = left + 'px';
        }
        else {
            element.style.left = left - dimElem.offsetWidth + anchor.offsetWidth + 'px';
        }
    }
    static isTopInView(el) {
        const { top } = el.getBoundingClientRect();
        return (top >= 0);
    }
    static isBottomInView(el) {
        const { bottom } = el.getBoundingClientRect();
        return (bottom <= window.innerHeight);
    }
    static isLeftInView(el) {
        const { left } = el.getBoundingClientRect();
        return (left >= 0);
    }
    static isRightInView(el) {
        const { right } = el.getBoundingClientRect();
        return (right <= window.innerWidth);
    }
    appendElementToPosition(config) {
        const { container, element } = config;
        if (!container.style.position || container.style.position === 'static') {
            container.style.position = 'relative';
        }
        if (element.style.position !== 'absolute') {
            element.style.position = 'absolute';
        }
        element.style.visibility = 'hidden';
        setTimeout(() => {
            this.setElementPosition(config);
            element.style.visibility = 'visible';
        });
    }
    setElementPosition({ element, container, anchor, dimElem, drops, opens }) {
        DomHelper_1.setYAxisPosition(element, container, anchor, 'down');
        DomHelper_1.setXAxisPosition(element, container, anchor, dimElem, 'right');
        if (drops !== 'down' && drops !== 'up') {
            if (DomHelper_1.isBottomInView(dimElem)) {
                DomHelper_1.setYAxisPosition(element, container, anchor, 'down');
            }
            else if (DomHelper_1.isTopInView(dimElem)) {
                DomHelper_1.setYAxisPosition(element, container, anchor, 'up');
            }
        }
        else {
            DomHelper_1.setYAxisPosition(element, container, anchor, drops);
        }
        if (opens !== 'left' && opens !== 'right') {
            if (DomHelper_1.isRightInView(dimElem)) {
                DomHelper_1.setXAxisPosition(element, container, anchor, dimElem, 'right');
            }
            else if (DomHelper_1.isLeftInView(dimElem)) {
                DomHelper_1.setXAxisPosition(element, container, anchor, dimElem, 'left');
            }
        }
        else {
            DomHelper_1.setXAxisPosition(element, container, anchor, dimElem, opens);
        }
    }
};
DomHelper.ɵfac = function DomHelper_Factory(t) { return new (t || DomHelper)(); };
DomHelper.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function DomHelper_Factory() { return new DomHelper(); }, token: DomHelper, providedIn: "root" });

const moment = moment__WEBPACK_IMPORTED_MODULE_4__;
let UtilsService = class UtilsService {
    static debounce(func, wait) {
        let timeout;
        return function () {
            const context = this, args = arguments;
            timeout = clearTimeout(timeout);
            setTimeout(() => {
                func.apply(context, args);
            }, wait);
        };
    }
    ;
    createArray(size) {
        return new Array(size).fill(1);
    }
    convertToMoment(date, format) {
        if (!date) {
            return null;
        }
        else if (typeof date === 'string') {
            return moment(date, format);
        }
        else {
            return date.clone();
        }
    }
    isDateValid(date, format) {
        if (date === '') {
            return true;
        }
        return moment(date, format, true).isValid();
    }
    // todo:: add unit test
    getDefaultDisplayDate(current, selected, allowMultiSelect, minDate) {
        if (current) {
            return current.clone();
        }
        else if (minDate && minDate.isAfter(moment())) {
            return minDate.clone();
        }
        else if (allowMultiSelect) {
            if (selected && selected[selected.length]) {
                return selected[selected.length].clone();
            }
        }
        else if (selected && selected[0]) {
            return selected[0].clone();
        }
        return moment();
    }
    // todo:: add unit test
    getInputType(value, allowMultiSelect) {
        if (Array.isArray(value)) {
            if (!value.length) {
                return ECalendarValue.MomentArr;
            }
            else if (typeof value[0] === 'string') {
                return ECalendarValue.StringArr;
            }
            else if (moment.isMoment(value[0])) {
                return ECalendarValue.MomentArr;
            }
        }
        else {
            if (typeof value === 'string') {
                return ECalendarValue.String;
            }
            else if (moment.isMoment(value)) {
                return ECalendarValue.Moment;
            }
        }
        return allowMultiSelect ? ECalendarValue.MomentArr : ECalendarValue.Moment;
    }
    // todo:: add unit test
    convertToMomentArray(value, config) {
        let retVal;
        switch (this.getInputType(value, config.allowMultiSelect)) {
            case (ECalendarValue.String):
                retVal = value ? [moment(value, config.format, true)] : [];
                break;
            case (ECalendarValue.StringArr):
                retVal = value.map(v => v ? moment(v, config.format, true) : null).filter(Boolean);
                break;
            case (ECalendarValue.Moment):
                retVal = value ? [value.clone()] : [];
                break;
            case (ECalendarValue.MomentArr):
                retVal = (value || []).map(v => v.clone());
                break;
            default:
                retVal = [];
        }
        return retVal;
    }
    // todo:: add unit test
    convertFromMomentArray(format, value, convertTo) {
        switch (convertTo) {
            case (ECalendarValue.String):
                return value[0] && value[0].format(format);
            case (ECalendarValue.StringArr):
                return value.filter(Boolean).map(v => v.format(format));
            case (ECalendarValue.Moment):
                return value[0] ? value[0].clone() : value[0];
            case (ECalendarValue.MomentArr):
                return value ? value.map(v => v.clone()) : value;
            default:
                return value;
        }
    }
    convertToString(value, format) {
        let tmpVal;
        if (typeof value === 'string') {
            tmpVal = [value];
        }
        else if (Array.isArray(value)) {
            if (value.length) {
                tmpVal = value.map((v) => {
                    return this.convertToMoment(v, format).format(format);
                });
            }
            else {
                tmpVal = value;
            }
        }
        else if (moment.isMoment(value)) {
            tmpVal = [value.format(format)];
        }
        else {
            return '';
        }
        return tmpVal.filter(Boolean).join(' | ');
    }
    // todo:: add unit test
    clearUndefined(obj) {
        if (!obj) {
            return obj;
        }
        Object.keys(obj).forEach((key) => (obj[key] === undefined) && delete obj[key]);
        return obj;
    }
    updateSelected(isMultiple, currentlySelected, date, granularity = 'day') {
        if (isMultiple) {
            return !date.selected
                ? currentlySelected.concat([date.date])
                : currentlySelected.filter(d => !d.isSame(date.date, granularity));
        }
        else {
            return !date.selected ? [date.date] : [];
        }
    }
    closestParent(element, selector) {
        if (!element) {
            return undefined;
        }
        const match = element.querySelector(selector);
        return match || this.closestParent(element.parentElement, selector);
    }
    onlyTime(m) {
        return m && moment.isMoment(m) && moment(m.format('HH:mm:ss'), 'HH:mm:ss');
    }
    granularityFromType(calendarType) {
        switch (calendarType) {
            case 'time':
                return 'second';
            case 'daytime':
                return 'second';
            default:
                return calendarType;
        }
    }
    createValidator({ minDate, maxDate, minTime, maxTime }, format, calendarType) {
        let isValid;
        let value;
        const validators = [];
        const granularity = this.granularityFromType(calendarType);
        if (minDate) {
            const md = this.convertToMoment(minDate, format);
            validators.push({
                key: 'minDate',
                isValid: () => {
                    const _isValid = value.every(val => val.isSameOrAfter(md, granularity));
                    isValid = isValid ? _isValid : false;
                    return _isValid;
                }
            });
        }
        if (maxDate) {
            const md = this.convertToMoment(maxDate, format);
            validators.push({
                key: 'maxDate',
                isValid: () => {
                    const _isValid = value.every(val => val.isSameOrBefore(md, granularity));
                    isValid = isValid ? _isValid : false;
                    return _isValid;
                }
            });
        }
        if (minTime) {
            const md = this.onlyTime(this.convertToMoment(minTime, format));
            validators.push({
                key: 'minTime',
                isValid: () => {
                    const _isValid = value.every(val => this.onlyTime(val).isSameOrAfter(md));
                    isValid = isValid ? _isValid : false;
                    return _isValid;
                }
            });
        }
        if (maxTime) {
            const md = this.onlyTime(this.convertToMoment(maxTime, format));
            validators.push({
                key: 'maxTime',
                isValid: () => {
                    const _isValid = value.every(val => this.onlyTime(val).isSameOrBefore(md));
                    isValid = isValid ? _isValid : false;
                    return _isValid;
                }
            });
        }
        return (inputVal) => {
            isValid = true;
            value = this.convertToMomentArray(inputVal, {
                format,
                allowMultiSelect: true
            }).filter(Boolean);
            if (!value.every(val => val.isValid())) {
                return {
                    format: {
                        given: inputVal
                    }
                };
            }
            const errors = validators.reduce((map, err) => {
                if (!err.isValid()) {
                    map[err.key] = {
                        given: value
                    };
                }
                return map;
            }, {});
            return !isValid ? errors : null;
        };
    }
    datesStringToStringArray(value) {
        return (value || '').split('|').map(m => m.trim()).filter(Boolean);
    }
    getValidMomentArray(value, format) {
        return this.datesStringToStringArray(value)
            .filter(d => this.isDateValid(d, format))
            .map(d => moment(d, format));
    }
    shouldShowCurrent(showGoToCurrent, mode, min, max) {
        return showGoToCurrent &&
            mode !== 'time' &&
            this.isDateInRange(moment(), min, max);
    }
    isDateInRange(date, from, to) {
        return date.isBetween(from, to, 'day', '[]');
    }
    convertPropsToMoment(obj, format, props) {
        props.forEach((prop) => {
            if (obj.hasOwnProperty(prop)) {
                obj[prop] = this.convertToMoment(obj[prop], format);
            }
        });
    }
    shouldResetCurrentView(prevConf, currentConf) {
        if (prevConf && currentConf) {
            if (!prevConf.min && currentConf.min) {
                return true;
            }
            else if (prevConf.min && currentConf.min && !prevConf.min.isSame(currentConf.min, 'd')) {
                return true;
            }
            else if (!prevConf.max && currentConf.max) {
                return true;
            }
            else if (prevConf.max && currentConf.max && !prevConf.max.isSame(currentConf.max, 'd')) {
                return true;
            }
            return false;
        }
        return false;
    }
    getNativeElement(elem) {
        if (!elem) {
            return null;
        }
        else if (typeof elem === 'string') {
            return document.querySelector(elem);
        }
        else {
            return elem;
        }
    }
};
UtilsService.ɵfac = function UtilsService_Factory(t) { return new (t || UtilsService)(); };
UtilsService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function UtilsService_Factory() { return new UtilsService(); }, token: UtilsService, providedIn: "root" });

const moment$1 = moment__WEBPACK_IMPORTED_MODULE_4__;
let DayCalendarService = class DayCalendarService {
    constructor(utilsService) {
        this.utilsService = utilsService;
        this.DEFAULT_CONFIG = {
            showNearMonthDays: true,
            showWeekNumbers: false,
            firstDayOfWeek: 'su',
            weekDayFormat: 'ddd',
            format: 'DD-MM-YYYY',
            allowMultiSelect: false,
            monthFormat: 'MMM, YYYY',
            enableMonthSelector: true,
            locale: moment$1.locale(),
            dayBtnFormat: 'DD',
            unSelectOnClick: true
        };
        this.DAYS = ['su', 'mo', 'tu', 'we', 'th', 'fr', 'sa'];
    }
    getConfig(config) {
        const _config = Object.assign(Object.assign({}, this.DEFAULT_CONFIG), this.utilsService.clearUndefined(config));
        this.utilsService.convertPropsToMoment(_config, _config.format, ['min', 'max']);
        moment$1.locale(_config.locale);
        return _config;
    }
    generateDaysMap(firstDayOfWeek) {
        const firstDayIndex = this.DAYS.indexOf(firstDayOfWeek);
        const daysArr = this.DAYS.slice(firstDayIndex, 7).concat(this.DAYS.slice(0, firstDayIndex));
        return daysArr.reduce((map, day, index) => {
            map[day] = index;
            return map;
        }, {});
    }
    generateMonthArray(config, month, selected) {
        let monthArray = [];
        const firstDayOfWeekIndex = this.DAYS.indexOf(config.firstDayOfWeek);
        const firstDayOfBoard = month.clone().startOf('month');
        while (firstDayOfBoard.day() !== firstDayOfWeekIndex) {
            firstDayOfBoard.subtract(1, 'day');
        }
        const current = firstDayOfBoard.clone();
        const prevMonth = month.clone().subtract(1, 'month');
        const nextMonth = month.clone().add(1, 'month');
        const today = moment$1();
        const daysOfCalendar = this.utilsService.createArray(42)
            .reduce((array) => {
            array.push({
                date: current.clone(),
                selected: !!selected.find(selectedDay => current.isSame(selectedDay, 'day')),
                currentMonth: current.isSame(month, 'month'),
                prevMonth: current.isSame(prevMonth, 'month'),
                nextMonth: current.isSame(nextMonth, 'month'),
                currentDay: current.isSame(today, 'day'),
                disabled: this.isDateDisabled(current, config)
            });
            current.add(1, 'day');
            return array;
        }, []);
        daysOfCalendar.forEach((day, index) => {
            const weekIndex = Math.floor(index / 7);
            if (!monthArray[weekIndex]) {
                monthArray.push([]);
            }
            monthArray[weekIndex].push(day);
        });
        if (!config.showNearMonthDays) {
            monthArray = this.removeNearMonthWeeks(month, monthArray);
        }
        return monthArray;
    }
    generateWeekdays(firstDayOfWeek) {
        const weekdayNames = {
            su: moment$1().day(0),
            mo: moment$1().day(1),
            tu: moment$1().day(2),
            we: moment$1().day(3),
            th: moment$1().day(4),
            fr: moment$1().day(5),
            sa: moment$1().day(6)
        };
        const weekdays = [];
        const daysMap = this.generateDaysMap(firstDayOfWeek);
        for (const dayKey in daysMap) {
            if (daysMap.hasOwnProperty(dayKey)) {
                weekdays[daysMap[dayKey]] = weekdayNames[dayKey];
            }
        }
        return weekdays;
    }
    isDateDisabled(date, config) {
        if (config.isDayDisabledCallback) {
            return config.isDayDisabledCallback(date);
        }
        if (config.min && date.isBefore(config.min, 'day')) {
            return true;
        }
        return !!(config.max && date.isAfter(config.max, 'day'));
    }
    // todo:: add unit tests
    getHeaderLabel(config, month) {
        if (config.monthFormatter) {
            return config.monthFormatter(month);
        }
        return month.format(config.monthFormat);
    }
    // todo:: add unit tests
    shouldShowLeft(min, currentMonthView) {
        return min ? min.isBefore(currentMonthView, 'month') : true;
    }
    // todo:: add unit tests
    shouldShowRight(max, currentMonthView) {
        return max ? max.isAfter(currentMonthView, 'month') : true;
    }
    generateDaysIndexMap(firstDayOfWeek) {
        const firstDayIndex = this.DAYS.indexOf(firstDayOfWeek);
        const daysArr = this.DAYS.slice(firstDayIndex, 7).concat(this.DAYS.slice(0, firstDayIndex));
        return daysArr.reduce((map, day, index) => {
            map[index] = day;
            return map;
        }, {});
    }
    getMonthCalendarConfig(componentConfig) {
        return this.utilsService.clearUndefined({
            min: componentConfig.min,
            max: componentConfig.max,
            format: componentConfig.format,
            isNavHeaderBtnClickable: true,
            allowMultiSelect: false,
            locale: componentConfig.locale,
            yearFormat: componentConfig.yearFormat,
            yearFormatter: componentConfig.yearFormatter,
            monthBtnFormat: componentConfig.monthBtnFormat,
            monthBtnFormatter: componentConfig.monthBtnFormatter,
            monthBtnCssClassCallback: componentConfig.monthBtnCssClassCallback,
            multipleYearsNavigateBy: componentConfig.multipleYearsNavigateBy,
            showMultipleYearsNavigation: componentConfig.showMultipleYearsNavigation,
            showGoToCurrent: componentConfig.showGoToCurrent,
            numOfMonthRows: componentConfig.numOfMonthRows
        });
    }
    getDayBtnText(config, day) {
        if (config.dayBtnFormatter) {
            return config.dayBtnFormatter(day);
        }
        return day.format(config.dayBtnFormat);
    }
    getDayBtnCssClass(config, day) {
        if (config.dayBtnCssClassCallback) {
            return config.dayBtnCssClassCallback(day);
        }
        return '';
    }
    removeNearMonthWeeks(currentMonth, monthArray) {
        if (monthArray[monthArray.length - 1].find((day) => day.date.isSame(currentMonth, 'month'))) {
            return monthArray;
        }
        else {
            return monthArray.slice(0, -1);
        }
    }
};
DayCalendarService.ɵfac = function DayCalendarService_Factory(t) { return new (t || DayCalendarService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](UtilsService)); };
DayCalendarService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DayCalendarService, factory: DayCalendarService.ɵfac });
DayCalendarService.ctorParameters = () => [
    { type: UtilsService }
];

const moment$2 = moment__WEBPACK_IMPORTED_MODULE_4__;
const FIRST_PM_HOUR = 12;
let TimeSelectService = class TimeSelectService {
    constructor(utilsService) {
        this.utilsService = utilsService;
        this.DEFAULT_CONFIG = {
            hours12Format: 'hh',
            hours24Format: 'HH',
            meridiemFormat: 'A',
            minutesFormat: 'mm',
            minutesInterval: 1,
            secondsFormat: 'ss',
            secondsInterval: 1,
            showSeconds: false,
            showTwentyFourHours: false,
            timeSeparator: ':',
            locale: moment$2.locale()
        };
    }
    getConfig(config) {
        const timeConfigs = {
            maxTime: this.utilsService.onlyTime(config && config.maxTime),
            minTime: this.utilsService.onlyTime(config && config.minTime)
        };
        const _config = Object.assign(Object.assign(Object.assign({}, this.DEFAULT_CONFIG), this.utilsService.clearUndefined(config)), timeConfigs);
        moment$2.locale(_config.locale);
        return _config;
    }
    getTimeFormat(config) {
        return (config.showTwentyFourHours ? config.hours24Format : config.hours12Format)
            + config.timeSeparator + config.minutesFormat
            + (config.showSeconds ? (config.timeSeparator + config.secondsFormat) : '')
            + (config.showTwentyFourHours ? '' : ' ' + config.meridiemFormat);
    }
    getHours(config, t) {
        const time = t || moment$2();
        return time && time.format(config.showTwentyFourHours ? config.hours24Format : config.hours12Format);
    }
    getMinutes(config, t) {
        const time = t || moment$2();
        return time && time.format(config.minutesFormat);
    }
    getSeconds(config, t) {
        const time = t || moment$2();
        return time && time.format(config.secondsFormat);
    }
    getMeridiem(config, time) {
        return time && time.format(config.meridiemFormat);
    }
    decrease(config, time, unit) {
        let amount = 1;
        switch (unit) {
            case 'minute':
                amount = config.minutesInterval;
                break;
            case 'second':
                amount = config.secondsInterval;
                break;
        }
        return time.clone().subtract(amount, unit);
    }
    increase(config, time, unit) {
        let amount = 1;
        switch (unit) {
            case 'minute':
                amount = config.minutesInterval;
                break;
            case 'second':
                amount = config.secondsInterval;
                break;
        }
        return time.clone().add(amount, unit);
    }
    toggleMeridiem(time) {
        if (time.hours() < FIRST_PM_HOUR) {
            return time.clone().add(12, 'hour');
        }
        else {
            return time.clone().subtract(12, 'hour');
        }
    }
    shouldShowDecrease(config, time, unit) {
        if (!config.min && !config.minTime) {
            return true;
        }
        const newTime = this.decrease(config, time, unit);
        return (!config.min || config.min.isSameOrBefore(newTime))
            && (!config.minTime || config.minTime.isSameOrBefore(this.utilsService.onlyTime(newTime)));
    }
    shouldShowIncrease(config, time, unit) {
        if (!config.max && !config.maxTime) {
            return true;
        }
        const newTime = this.increase(config, time, unit);
        return (!config.max || config.max.isSameOrAfter(newTime))
            && (!config.maxTime || config.maxTime.isSameOrAfter(this.utilsService.onlyTime(newTime)));
    }
    shouldShowToggleMeridiem(config, time) {
        if (!config.min && !config.max && !config.minTime && !config.maxTime) {
            return true;
        }
        const newTime = this.toggleMeridiem(time);
        return (!config.max || config.max.isSameOrAfter(newTime))
            && (!config.min || config.min.isSameOrBefore(newTime))
            && (!config.maxTime || config.maxTime.isSameOrAfter(this.utilsService.onlyTime(newTime)))
            && (!config.minTime || config.minTime.isSameOrBefore(this.utilsService.onlyTime(newTime)));
    }
};
TimeSelectService.ɵfac = function TimeSelectService_Factory(t) { return new (t || TimeSelectService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](UtilsService)); };
TimeSelectService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TimeSelectService, factory: TimeSelectService.ɵfac });
TimeSelectService.ctorParameters = () => [
    { type: UtilsService }
];

const moment$3 = moment__WEBPACK_IMPORTED_MODULE_4__;
const DAY_FORMAT = 'YYYYMMDD';
const TIME_FORMAT = 'HH:mm:ss';
const COMBINED_FORMAT = DAY_FORMAT + TIME_FORMAT;
let DayTimeCalendarService = class DayTimeCalendarService {
    constructor(utilsService, dayCalendarService, timeSelectService) {
        this.utilsService = utilsService;
        this.dayCalendarService = dayCalendarService;
        this.timeSelectService = timeSelectService;
        this.DEFAULT_CONFIG = {
            locale: moment$3.locale()
        };
    }
    getConfig(config) {
        const _config = Object.assign(Object.assign(Object.assign({}, this.DEFAULT_CONFIG), this.timeSelectService.getConfig(config)), this.dayCalendarService.getConfig(config));
        moment$3.locale(config.locale);
        return _config;
    }
    updateDay(current, day, config) {
        const time = current ? current : moment$3();
        let updated = moment$3(day.format(DAY_FORMAT) + time.format(TIME_FORMAT), COMBINED_FORMAT);
        if (config.min) {
            const min = config.min;
            updated = min.isAfter(updated) ? min : updated;
        }
        if (config.max) {
            const max = config.max;
            updated = max.isBefore(updated) ? max : updated;
        }
        return updated;
    }
    updateTime(current, time) {
        const day = current ? current : moment$3();
        return moment$3(day.format(DAY_FORMAT) + time.format(TIME_FORMAT), COMBINED_FORMAT);
    }
};
DayTimeCalendarService.ɵfac = function DayTimeCalendarService_Factory(t) { return new (t || DayTimeCalendarService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](UtilsService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](DayCalendarService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](TimeSelectService)); };
DayTimeCalendarService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DayTimeCalendarService, factory: DayTimeCalendarService.ɵfac });
DayTimeCalendarService.ctorParameters = () => [
    { type: UtilsService },
    { type: DayCalendarService },
    { type: TimeSelectService }
];

const moment$4 = moment__WEBPACK_IMPORTED_MODULE_4__;
let DatePickerService = class DatePickerService {
    constructor(utilsService, timeSelectService, daytimeCalendarService) {
        this.utilsService = utilsService;
        this.timeSelectService = timeSelectService;
        this.daytimeCalendarService = daytimeCalendarService;
        this.onPickerClosed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.defaultConfig = {
            closeOnSelect: true,
            closeOnSelectDelay: 100,
            closeOnEnter: true,
            format: 'DD-MM-YYYY',
            openOnFocus: true,
            openOnClick: true,
            onOpenDelay: 0,
            disableKeypress: false,
            showNearMonthDays: true,
            showWeekNumbers: false,
            enableMonthSelector: true,
            showGoToCurrent: true,
            locale: moment$4.locale(),
            hideOnOutsideClick: true
        };
    }
    // todo:: add unit tests
    getConfig(config, mode = 'daytime') {
        const _config = Object.assign(Object.assign(Object.assign({}, this.defaultConfig), { format: this.getDefaultFormatByMode(mode) }), this.utilsService.clearUndefined(config));
        this.utilsService.convertPropsToMoment(_config, _config.format, ['min', 'max']);
        if (config && config.allowMultiSelect && config.closeOnSelect === undefined) {
            _config.closeOnSelect = false;
        }
        moment$4.locale(_config.locale);
        return _config;
    }
    getDayConfigService(pickerConfig) {
        return {
            min: pickerConfig.min,
            max: pickerConfig.max,
            isDayDisabledCallback: pickerConfig.isDayDisabledCallback,
            weekDayFormat: pickerConfig.weekDayFormat,
            weekDayFormatter: pickerConfig.weekDayFormatter,
            showNearMonthDays: pickerConfig.showNearMonthDays,
            showWeekNumbers: pickerConfig.showWeekNumbers,
            firstDayOfWeek: pickerConfig.firstDayOfWeek,
            format: pickerConfig.format,
            allowMultiSelect: pickerConfig.allowMultiSelect,
            monthFormat: pickerConfig.monthFormat,
            monthFormatter: pickerConfig.monthFormatter,
            enableMonthSelector: pickerConfig.enableMonthSelector,
            yearFormat: pickerConfig.yearFormat,
            yearFormatter: pickerConfig.yearFormatter,
            dayBtnFormat: pickerConfig.dayBtnFormat,
            dayBtnFormatter: pickerConfig.dayBtnFormatter,
            dayBtnCssClassCallback: pickerConfig.dayBtnCssClassCallback,
            monthBtnFormat: pickerConfig.monthBtnFormat,
            monthBtnFormatter: pickerConfig.monthBtnFormatter,
            monthBtnCssClassCallback: pickerConfig.monthBtnCssClassCallback,
            multipleYearsNavigateBy: pickerConfig.multipleYearsNavigateBy,
            showMultipleYearsNavigation: pickerConfig.showMultipleYearsNavigation,
            locale: pickerConfig.locale,
            returnedValueType: pickerConfig.returnedValueType,
            showGoToCurrent: pickerConfig.showGoToCurrent,
            unSelectOnClick: pickerConfig.unSelectOnClick,
            numOfMonthRows: pickerConfig.numOfMonthRows
        };
    }
    getDayTimeConfigService(pickerConfig) {
        return this.daytimeCalendarService.getConfig(pickerConfig);
    }
    getTimeConfigService(pickerConfig) {
        return this.timeSelectService.getConfig(pickerConfig);
    }
    pickerClosed() {
        this.onPickerClosed.emit();
    }
    // todo:: add unit tests
    isValidInputDateValue(value, config) {
        value = value ? value : '';
        const datesStrArr = this.utilsService.datesStringToStringArray(value);
        return datesStrArr.every(date => this.utilsService.isDateValid(date, config.format));
    }
    // todo:: add unit tests
    convertInputValueToMomentArray(value, config) {
        value = value ? value : '';
        const datesStrArr = this.utilsService.datesStringToStringArray(value);
        return this.utilsService.convertToMomentArray(datesStrArr, config);
    }
    getDefaultFormatByMode(mode) {
        switch (mode) {
            case 'day':
                return 'DD-MM-YYYY';
            case 'daytime':
                return 'DD-MM-YYYY HH:mm:ss';
            case 'time':
                return 'HH:mm:ss';
            case 'month':
                return 'MMM, YYYY';
        }
    }
};
DatePickerService.ɵfac = function DatePickerService_Factory(t) { return new (t || DatePickerService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](UtilsService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](TimeSelectService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](DayTimeCalendarService)); };
DatePickerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DatePickerService, factory: DatePickerService.ɵfac });
DatePickerService.ctorParameters = () => [
    { type: UtilsService },
    { type: TimeSelectService },
    { type: DayTimeCalendarService }
];

var DatePickerComponent_1;
let DatePickerComponent = DatePickerComponent_1 = class DatePickerComponent {
    constructor(dayPickerService, domHelper, elemRef, renderer, utilsService, cd) {
        this.dayPickerService = dayPickerService;
        this.domHelper = domHelper;
        this.elemRef = elemRef;
        this.renderer = renderer;
        this.utilsService = utilsService;
        this.cd = cd;
        this.isInitialized = false;
        this.mode = 'day';
        this.placeholder = '';
        this.disabled = false;
        this.open = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onGoToCurrent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onLeftNav = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onRightNav = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.hideStateHelper = false;
        this.isFocusedTrigger = false;
        this.handleInnerElementClickUnlisteners = [];
        this.globalListenersUnlisteners = [];
        this.api = {
            open: this.showCalendars.bind(this),
            close: this.hideCalendar.bind(this),
            moveCalendarTo: this.moveCalendarTo.bind(this)
        };
        this.selectEvent = SelectEvent;
        this._areCalendarsShown = false;
        this._selected = [];
    }
    get openOnFocus() {
        return this.componentConfig.openOnFocus;
    }
    get openOnClick() {
        return this.componentConfig.openOnClick;
    }
    get areCalendarsShown() {
        return this._areCalendarsShown;
    }
    set areCalendarsShown(value) {
        if (value) {
            this.startGlobalListeners();
            this.domHelper.appendElementToPosition({
                container: this.appendToElement,
                element: this.calendarWrapper,
                anchor: this.inputElementContainer,
                dimElem: this.popupElem,
                drops: this.componentConfig.drops,
                opens: this.componentConfig.opens
            });
        }
        else {
            this.stopGlobalListeners();
            this.dayPickerService.pickerClosed();
        }
        this._areCalendarsShown = value;
    }
    get selected() {
        return this._selected;
    }
    set selected(selected) {
        this._selected = selected;
        this.inputElementValue = this.utilsService
            .convertFromMomentArray(this.componentConfig.format, selected, ECalendarValue.StringArr)
            .join(' | ');
        const val = this.processOnChangeCallback(selected);
        this.onChangeCallback(val, false);
        this.onChange.emit(val);
    }
    get currentDateView() {
        return this._currentDateView;
    }
    set currentDateView(date) {
        this._currentDateView = date;
        if (this.dayCalendarRef) {
            this.dayCalendarRef.moveCalendarTo(date);
        }
        if (this.monthCalendarRef) {
            this.monthCalendarRef.moveCalendarTo(date);
        }
        if (this.dayTimeCalendarRef) {
            this.dayTimeCalendarRef.moveCalendarTo(date);
        }
    }
    onClick() {
        if (!this.openOnClick) {
            return;
        }
        if (!this.isFocusedTrigger && !this.disabled) {
            this.hideStateHelper = true;
            if (!this.areCalendarsShown) {
                this.showCalendars();
            }
        }
    }
    onBodyClick() {
        if (this.componentConfig.hideOnOutsideClick) {
            if (!this.hideStateHelper && this.areCalendarsShown) {
                this.hideCalendar();
            }
            this.hideStateHelper = false;
        }
    }
    onScroll() {
        if (this.areCalendarsShown) {
            this.domHelper.setElementPosition({
                container: this.appendToElement,
                element: this.calendarWrapper,
                anchor: this.inputElementContainer,
                dimElem: this.popupElem,
                drops: this.componentConfig.drops,
                opens: this.componentConfig.opens
            });
        }
    }
    writeValue(value) {
        this.inputValue = value;
        if (value || value === '') {
            this.selected = this.utilsService
                .convertToMomentArray(value, this.componentConfig);
            this.init();
        }
        else {
            this.selected = [];
        }
        this.cd.markForCheck();
    }
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    onChangeCallback(_, changedByInput) {
    }
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
    onTouchedCallback() {
    }
    validate(formControl) {
        return this.validateFn(formControl.value);
    }
    processOnChangeCallback(selected) {
        if (typeof selected === 'string') {
            return selected;
        }
        else {
            return this.utilsService.convertFromMomentArray(this.componentConfig.format, selected, this.componentConfig.returnedValueType || this.utilsService.getInputType(this.inputValue, this.componentConfig.allowMultiSelect));
        }
    }
    initValidators() {
        this.validateFn = this.utilsService.createValidator({
            minDate: this.minDate,
            maxDate: this.maxDate,
            minTime: this.minTime,
            maxTime: this.maxTime
        }, this.componentConfig.format, this.mode);
        this.onChangeCallback(this.processOnChangeCallback(this.selected), false);
    }
    ngOnInit() {
        this.isInitialized = true;
        this.init();
    }
    ngOnChanges(changes) {
        if (this.isInitialized) {
            this.init();
        }
    }
    ngAfterViewInit() {
        this.setElementPositionInDom();
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
        this.cd.markForCheck();
    }
    setElementPositionInDom() {
        this.calendarWrapper = this.calendarContainer.nativeElement;
        this.setInputElementContainer();
        this.popupElem = this.elemRef.nativeElement.querySelector('.dp-popup');
        this.handleInnerElementClick(this.popupElem);
        const { appendTo } = this.componentConfig;
        if (appendTo) {
            if (typeof appendTo === 'string') {
                this.appendToElement = document.querySelector(appendTo);
            }
            else {
                this.appendToElement = appendTo;
            }
        }
        else {
            this.appendToElement = this.elemRef.nativeElement;
        }
        this.appendToElement.appendChild(this.calendarWrapper);
    }
    setInputElementContainer() {
        this.inputElementContainer = this.utilsService.getNativeElement(this.componentConfig.inputElementContainer)
            || this.elemRef.nativeElement.querySelector('.dp-input-container')
            || document.body;
    }
    handleInnerElementClick(element) {
        this.handleInnerElementClickUnlisteners.push(this.renderer.listen(element, 'click', () => {
            this.hideStateHelper = true;
        }));
    }
    init() {
        this.componentConfig = this.dayPickerService.getConfig(this.config, this.mode);
        this.currentDateView = this.displayDate
            ? this.utilsService.convertToMoment(this.displayDate, this.componentConfig.format).clone()
            : this.utilsService
                .getDefaultDisplayDate(this.currentDateView, this.selected, this.componentConfig.allowMultiSelect, this.componentConfig.min);
        this.dayCalendarConfig = this.dayPickerService.getDayConfigService(this.componentConfig);
        this.dayTimeCalendarConfig = this.dayPickerService.getDayTimeConfigService(this.componentConfig);
        this.timeSelectConfig = this.dayPickerService.getTimeConfigService(this.componentConfig);
        this.initValidators();
    }
    inputFocused() {
        if (!this.openOnFocus) {
            return;
        }
        clearTimeout(this.onOpenDelayTimeoutHandler);
        this.isFocusedTrigger = true;
        this.onOpenDelayTimeoutHandler = setTimeout(() => {
            if (!this.areCalendarsShown) {
                this.showCalendars();
            }
            this.hideStateHelper = false;
            this.isFocusedTrigger = false;
            this.cd.markForCheck();
        }, this.componentConfig.onOpenDelay);
    }
    inputBlurred() {
        clearTimeout(this.onOpenDelayTimeoutHandler);
        this.onTouchedCallback();
    }
    showCalendars() {
        this.hideStateHelper = true;
        this.areCalendarsShown = true;
        if (this.timeSelectRef) {
            this.timeSelectRef.api.triggerChange();
        }
        this.open.emit();
        this.cd.markForCheck();
    }
    hideCalendar() {
        this.areCalendarsShown = false;
        if (this.dayCalendarRef) {
            this.dayCalendarRef.api.toggleCalendarMode(ECalendarMode.Day);
        }
        this.close.emit();
        this.cd.markForCheck();
    }
    onViewDateChange(value) {
        const strVal = value ? this.utilsService.convertToString(value, this.componentConfig.format) : '';
        if (this.dayPickerService.isValidInputDateValue(strVal, this.componentConfig)) {
            this.selected = this.dayPickerService.convertInputValueToMomentArray(strVal, this.componentConfig);
            this.currentDateView = this.selected.length
                ? this.utilsService.getDefaultDisplayDate(null, this.selected, this.componentConfig.allowMultiSelect, this.componentConfig.min)
                : this.currentDateView;
            this.onSelect.emit({
                date: strVal,
                type: SelectEvent.INPUT,
                granularity: null
            });
        }
        else {
            this._selected = this.utilsService
                .getValidMomentArray(strVal, this.componentConfig.format);
            this.onChangeCallback(this.processOnChangeCallback(strVal), true);
        }
    }
    dateSelected(date, granularity, type, ignoreClose) {
        this.selected = this.utilsService
            .updateSelected(this.componentConfig.allowMultiSelect, this.selected, date, granularity);
        if (!ignoreClose) {
            this.onDateClick();
        }
        this.onSelect.emit({
            date: date.date,
            granularity,
            type
        });
    }
    onDateClick() {
        if (this.componentConfig.closeOnSelect) {
            setTimeout(this.hideCalendar.bind(this), this.componentConfig.closeOnSelectDelay);
        }
    }
    onKeyPress(event) {
        switch (event.keyCode) {
            case (9):
            case (27):
                this.hideCalendar();
                break;
        }
    }
    moveCalendarTo(date) {
        const momentDate = this.utilsService.convertToMoment(date, this.componentConfig.format);
        this.currentDateView = momentDate;
    }
    onLeftNavClick(change) {
        this.onLeftNav.emit(change);
    }
    onRightNavClick(change) {
        this.onRightNav.emit(change);
    }
    startGlobalListeners() {
        this.globalListenersUnlisteners.push(this.renderer.listen(document, 'keydown', (e) => {
            this.onKeyPress(e);
        }), this.renderer.listen(document, 'scroll', () => {
            this.onScroll();
        }), this.renderer.listen(document, 'click', () => {
            this.onBodyClick();
        }));
    }
    stopGlobalListeners() {
        this.globalListenersUnlisteners.forEach((ul) => ul());
        this.globalListenersUnlisteners = [];
    }
    ngOnDestroy() {
        this.handleInnerElementClickUnlisteners.forEach(ul => ul());
        if (this.appendToElement) {
            this.appendToElement.removeChild(this.calendarWrapper);
        }
    }
};
DatePickerComponent.ɵfac = function DatePickerComponent_Factory(t) { return new (t || DatePickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](DatePickerService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](DomHelper), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](UtilsService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"])); };
DatePickerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DatePickerComponent, selectors: [["dp-date-picker"]], viewQuery: function DatePickerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c3, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c4, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.calendarContainer = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.dayCalendarRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.monthCalendarRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.dayTimeCalendarRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.timeSelectRef = _t.first);
    } }, hostVars: 2, hostBindings: function DatePickerComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DatePickerComponent_click_HostBindingHandler() { return ctx.onClick(); })("resize", function DatePickerComponent_resize_HostBindingHandler() { return ctx.onScroll(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.theme);
    } }, inputs: { mode: "mode", placeholder: "placeholder", disabled: "disabled", config: "config", displayDate: "displayDate", theme: "theme", minDate: "minDate", maxDate: "maxDate", minTime: "minTime", maxTime: "maxTime" }, outputs: { open: "open", close: "close", onChange: "onChange", onGoToCurrent: "onGoToCurrent", onLeftNav: "onLeftNav", onRightNav: "onRightNav", onSelect: "onSelect" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([
            DatePickerService,
            DayTimeCalendarService,
            DayCalendarService,
            TimeSelectService,
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => DatePickerComponent_1),
                multi: true
            },
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => DatePickerComponent_1),
                multi: true
            }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 10, vars: 19, consts: [[3, "ngClass"], [1, "dp-input-container", 3, "hidden"], ["type", "text", 1, "dp-picker-input", 3, "disabled", "ngModel", "placeholder", "readonly", "blur", "focus", "ngModelChange", "keydown.enter"], ["container", ""], [3, "hidden", "ngSwitch"], [3, "config", "displayDate", "ngModel", "theme", "onGoToCurrent", "onLeftNav", "onRightNav", "onSelect", 4, "ngSwitchCase"], [3, "config", "ngModel", "theme", "onChange", 4, "ngSwitchCase"], [3, "config", "displayDate", "ngModel", "theme", "onChange", "onGoToCurrent", "onLeftNav", "onRightNav", 4, "ngSwitchCase"], [3, "config", "displayDate", "ngModel", "theme", "onGoToCurrent", "onLeftNav", "onRightNav", "onSelect"], ["dayCalendar", ""], ["monthCalendar", ""], [3, "config", "ngModel", "theme", "onChange"], ["timeSelect", ""], [3, "config", "displayDate", "ngModel", "theme", "onChange", "onGoToCurrent", "onLeftNav", "onRightNav"], ["daytimeCalendar", ""]], template: function DatePickerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("blur", function DatePickerComponent_Template_input_blur_2_listener() { return ctx.inputBlurred(); })("focus", function DatePickerComponent_Template_input_focus_2_listener() { return ctx.inputFocused(); })("ngModelChange", function DatePickerComponent_Template_input_ngModelChange_2_listener($event) { return ctx.onViewDateChange($event); })("keydown.enter", function DatePickerComponent_Template_input_keydown_enter_2_listener() { return ctx.componentConfig.closeOnEnter && ctx.hideCalendar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", null, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, DatePickerComponent_dp_day_calendar_6_Template, 2, 4, "dp-day-calendar", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, DatePickerComponent_dp_month_calendar_7_Template, 2, 4, "dp-month-calendar", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, DatePickerComponent_dp_time_select_8_Template, 2, 3, "dp-time-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, DatePickerComponent_dp_day_time_calendar_9_Template, 2, 4, "dp-day-time-calendar", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](17, _c5, ctx.areCalendarsShown));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.componentConfig.hideInputContainer);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-hidden", ctx.componentConfig.hideInputContainer);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.disabled)("ngModel", ctx.inputElementValue)("placeholder", ctx.placeholder)("readonly", ctx.componentConfig.disableKeypress);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("dp-popup ", ctx.theme, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx._areCalendarsShown)("ngSwitch", ctx.mode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-hidden", !ctx._areCalendarsShown);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "day");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "month");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "time");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "daytime");
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchCase"], DayCalendarComponent,
        MonthCalendarComponent,
        TimeSelectComponent,
        DayTimeCalendarComponent]; }, styles: ["dp-date-picker{display:inline-block}dp-date-picker.dp-material .dp-picker-input{box-sizing:border-box;height:30px;width:213px;font-size:13px;outline:0}dp-date-picker .dp-input-container{position:relative}dp-date-picker .dp-selected{background:#106cc8;color:#fff}.dp-popup{position:relative;background:#fff;box-shadow:1px 1px 5px 0 rgba(0,0,0,.1);border-left:1px solid rgba(0,0,0,.1);border-right:1px solid rgba(0,0,0,.1);border-bottom:1px solid rgba(0,0,0,.1);z-index:9999;white-space:nowrap}"], encapsulation: 2, changeDetection: 0 });
DatePickerComponent.ctorParameters = () => [
    { type: DatePickerService },
    { type: DomHelper },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: UtilsService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DatePickerComponent.prototype, "config", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DatePickerComponent.prototype, "mode", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DatePickerComponent.prototype, "placeholder", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DatePickerComponent.prototype, "disabled", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DatePickerComponent.prototype, "displayDate", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class'), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DatePickerComponent.prototype, "theme", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DatePickerComponent.prototype, "minDate", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DatePickerComponent.prototype, "maxDate", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DatePickerComponent.prototype, "minTime", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DatePickerComponent.prototype, "maxTime", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DatePickerComponent.prototype, "open", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DatePickerComponent.prototype, "close", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DatePickerComponent.prototype, "onChange", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DatePickerComponent.prototype, "onGoToCurrent", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DatePickerComponent.prototype, "onLeftNav", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DatePickerComponent.prototype, "onRightNav", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DatePickerComponent.prototype, "onSelect", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('container')
], DatePickerComponent.prototype, "calendarContainer", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dayCalendar')
], DatePickerComponent.prototype, "dayCalendarRef", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('monthCalendar')
], DatePickerComponent.prototype, "monthCalendarRef", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('daytimeCalendar')
], DatePickerComponent.prototype, "dayTimeCalendarRef", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('timeSelect')
], DatePickerComponent.prototype, "timeSelectRef", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click')
], DatePickerComponent.prototype, "onClick", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize')
], DatePickerComponent.prototype, "onScroll", null);

let DatePickerDirectiveService = class DatePickerDirectiveService {
    constructor(utilsService) {
        this.utilsService = utilsService;
    }
    convertToHTMLElement(attachTo, baseElement) {
        if (typeof attachTo === 'string') {
            return this.utilsService.closestParent(baseElement, attachTo);
        }
        else if (attachTo) {
            return attachTo.nativeElement;
        }
        return undefined;
    }
    getConfig(config = {}, baseElement, attachTo) {
        const _config = Object.assign({}, config);
        _config.hideInputContainer = true;
        let native;
        if (config.inputElementContainer) {
            native = this.utilsService.getNativeElement(config.inputElementContainer);
        }
        else {
            native = baseElement ? baseElement.nativeElement : null;
        }
        if (native) {
            _config.inputElementContainer = attachTo
                ? this.convertToHTMLElement(attachTo, native)
                : native;
        }
        return _config;
    }
};
DatePickerDirectiveService.ɵfac = function DatePickerDirectiveService_Factory(t) { return new (t || DatePickerDirectiveService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](UtilsService)); };
DatePickerDirectiveService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DatePickerDirectiveService, factory: DatePickerDirectiveService.ɵfac });
DatePickerDirectiveService.ctorParameters = () => [
    { type: UtilsService }
];

let DatePickerDirective = class DatePickerDirective {
    constructor(viewContainerRef, elemRef, componentFactoryResolver, service, formControl, utilsService) {
        this.viewContainerRef = viewContainerRef;
        this.elemRef = elemRef;
        this.componentFactoryResolver = componentFactoryResolver;
        this.service = service;
        this.formControl = formControl;
        this.utilsService = utilsService;
        this.open = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onGoToCurrent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onLeftNav = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onRightNav = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._mode = 'day';
    }
    get config() {
        return this._config;
    }
    set config(config) {
        this._config = this.service.getConfig(config, this.viewContainerRef.element, this.attachTo);
        this.updateDatepickerConfig();
        this.markForCheck();
    }
    get attachTo() {
        return this._attachTo;
    }
    set attachTo(attachTo) {
        this._attachTo = attachTo;
        this._config = this.service.getConfig(this.config, this.viewContainerRef.element, this.attachTo);
        this.updateDatepickerConfig();
        this.markForCheck();
    }
    get theme() {
        return this._theme;
    }
    set theme(theme) {
        this._theme = theme;
        if (this.datePicker) {
            this.datePicker.theme = theme;
        }
        this.markForCheck();
    }
    get mode() {
        return this._mode;
    }
    set mode(mode) {
        this._mode = mode;
        if (this.datePicker) {
            this.datePicker.mode = mode;
        }
        this.markForCheck();
    }
    get minDate() {
        return this._minDate;
    }
    set minDate(minDate) {
        this._minDate = minDate;
        if (this.datePicker) {
            this.datePicker.minDate = minDate;
            this.datePicker.ngOnInit();
        }
        this.markForCheck();
    }
    get maxDate() {
        return this._maxDate;
    }
    set maxDate(maxDate) {
        this._maxDate = maxDate;
        if (this.datePicker) {
            this.datePicker.maxDate = maxDate;
            this.datePicker.ngOnInit();
        }
        this.markForCheck();
    }
    get minTime() {
        return this._minTime;
    }
    set minTime(minTime) {
        this._minTime = minTime;
        if (this.datePicker) {
            this.datePicker.minTime = minTime;
            this.datePicker.ngOnInit();
        }
        this.markForCheck();
    }
    get maxTime() {
        return this._maxTime;
    }
    set maxTime(maxTime) {
        this._maxTime = maxTime;
        if (this.datePicker) {
            this.datePicker.maxTime = maxTime;
            this.datePicker.ngOnInit();
        }
        this.markForCheck();
    }
    get displayDate() {
        return this._displayDate;
    }
    set displayDate(displayDate) {
        this._displayDate = displayDate;
        this.updateDatepickerConfig();
        this.markForCheck();
    }
    ngOnInit() {
        this.datePicker = this.createDatePicker();
        this.api = this.datePicker.api;
        this.updateDatepickerConfig();
        this.attachModelToDatePicker();
        this.datePicker.theme = this.theme;
    }
    createDatePicker() {
        const factory = this.componentFactoryResolver.resolveComponentFactory(DatePickerComponent);
        return this.viewContainerRef.createComponent(factory).instance;
    }
    attachModelToDatePicker() {
        if (!this.formControl) {
            return;
        }
        this.datePicker.onViewDateChange(this.formControl.value);
        this.formControl.valueChanges.subscribe((value) => {
            if (value !== this.datePicker.inputElementValue) {
                const strVal = this.utilsService.convertToString(value, this.datePicker.componentConfig.format);
                this.datePicker.onViewDateChange(strVal);
            }
        });
        let setup = true;
        this.datePicker.registerOnChange((value, changedByInput) => {
            if (value) {
                const isMultiselectEmpty = setup && Array.isArray(value) && !value.length;
                if (!isMultiselectEmpty && !changedByInput) {
                    this.formControl.control.setValue(this.datePicker.inputElementValue);
                }
            }
            const errors = this.datePicker.validateFn(value);
            if (!setup) {
                this.formControl.control.markAsDirty({
                    onlySelf: true
                });
            }
            else {
                setup = false;
            }
            if (errors) {
                if (errors.hasOwnProperty('format')) {
                    const { given } = errors['format'];
                    this.datePicker.inputElementValue = given;
                    if (!changedByInput) {
                        this.formControl.control.setValue(given);
                    }
                }
                this.formControl.control.setErrors(errors);
            }
        });
    }
    onClick() {
        this.datePicker.onClick();
    }
    onFocus() {
        this.datePicker.inputFocused();
    }
    onEnter() {
        if (this.datePicker.componentConfig.closeOnEnter) {
            this.datePicker.hideCalendar();
        }
    }
    markForCheck() {
        if (this.datePicker) {
            this.datePicker.cd.markForCheck();
        }
    }
    updateDatepickerConfig() {
        if (this.datePicker) {
            this.datePicker.minDate = this.minDate;
            this.datePicker.maxDate = this.maxDate;
            this.datePicker.minTime = this.minTime;
            this.datePicker.maxTime = this.maxTime;
            this.datePicker.mode = this.mode || 'day';
            this.datePicker.displayDate = this.displayDate;
            this.datePicker.config = this.config;
            this.datePicker.open = this.open;
            this.datePicker.close = this.close;
            this.datePicker.onChange = this.onChange;
            this.datePicker.onGoToCurrent = this.onGoToCurrent;
            this.datePicker.onLeftNav = this.onLeftNav;
            this.datePicker.onRightNav = this.onRightNav;
            this.datePicker.onSelect = this.onSelect;
            this.datePicker.init();
            if (this.datePicker.componentConfig.disableKeypress) {
                this.elemRef.nativeElement.setAttribute('readonly', true);
            }
            else {
                this.elemRef.nativeElement.removeAttribute('readonly');
            }
        }
    }
};
DatePickerDirective.ɵfac = function DatePickerDirective_Factory(t) { return new (t || DatePickerDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](DatePickerDirectiveService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](UtilsService)); };
DatePickerDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: DatePickerDirective, selectors: [["", "dpDayPicker", ""]], hostBindings: function DatePickerDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DatePickerDirective_click_HostBindingHandler() { return ctx.onClick(); })("focus", function DatePickerDirective_focus_HostBindingHandler() { return ctx.onFocus(); })("keydown.enter", function DatePickerDirective_keydown_enter_HostBindingHandler() { return ctx.onEnter(); });
    } }, inputs: { config: ["dpDayPicker", "config"], attachTo: "attachTo", theme: "theme", mode: "mode", minDate: "minDate", maxDate: "maxDate", minTime: "minTime", maxTime: "maxTime", displayDate: "displayDate" }, outputs: { open: "open", close: "close", onChange: "onChange", onGoToCurrent: "onGoToCurrent", onLeftNav: "onLeftNav", onRightNav: "onRightNav", onSelect: "onSelect" }, exportAs: ["dpDayPicker"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([DatePickerDirectiveService])] });
DatePickerDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] },
    { type: DatePickerDirectiveService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] },
    { type: UtilsService }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('dpDayPicker')
], DatePickerDirective.prototype, "config", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DatePickerDirective.prototype, "attachTo", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DatePickerDirective.prototype, "theme", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DatePickerDirective.prototype, "mode", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DatePickerDirective.prototype, "minDate", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DatePickerDirective.prototype, "maxDate", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DatePickerDirective.prototype, "minTime", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DatePickerDirective.prototype, "maxTime", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DatePickerDirective.prototype, "displayDate", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DatePickerDirective.prototype, "open", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DatePickerDirective.prototype, "close", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DatePickerDirective.prototype, "onChange", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DatePickerDirective.prototype, "onGoToCurrent", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DatePickerDirective.prototype, "onLeftNav", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DatePickerDirective.prototype, "onRightNav", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DatePickerDirective.prototype, "onSelect", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click')
], DatePickerDirective.prototype, "onClick", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('focus')
], DatePickerDirective.prototype, "onFocus", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keydown.enter')
], DatePickerDirective.prototype, "onEnter", null);
DatePickerDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([ Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])())
], DatePickerDirective);

var DayCalendarComponent_1;
const moment$5 = moment__WEBPACK_IMPORTED_MODULE_4__;
let DayCalendarComponent = DayCalendarComponent_1 = class DayCalendarComponent {
    constructor(dayCalendarService, utilsService, cd) {
        this.dayCalendarService = dayCalendarService;
        this.utilsService = utilsService;
        this.cd = cd;
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onMonthSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onNavHeaderBtnClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onGoToCurrent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onLeftNav = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onRightNav = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.CalendarMode = ECalendarMode;
        this.isInited = false;
        this.currentCalendarMode = ECalendarMode.Day;
        this._shouldShowCurrent = true;
        this.api = {
            moveCalendarsBy: this.moveCalendarsBy.bind(this),
            moveCalendarTo: this.moveCalendarTo.bind(this),
            toggleCalendarMode: this.toggleCalendarMode.bind(this)
        };
    }
    get selected() {
        return this._selected;
    }
    set selected(selected) {
        this._selected = selected;
        this.onChangeCallback(this.processOnChangeCallback(selected));
    }
    get currentDateView() {
        return this._currentDateView;
    }
    set currentDateView(current) {
        this._currentDateView = current.clone();
        this.weeks = this.dayCalendarService
            .generateMonthArray(this.componentConfig, this._currentDateView, this.selected);
        this.navLabel = this.dayCalendarService.getHeaderLabel(this.componentConfig, this._currentDateView);
        this.showLeftNav = this.dayCalendarService.shouldShowLeft(this.componentConfig.min, this.currentDateView);
        this.showRightNav = this.dayCalendarService.shouldShowRight(this.componentConfig.max, this.currentDateView);
    }
    ;
    ngOnInit() {
        this.isInited = true;
        this.init();
        this.initValidators();
    }
    init() {
        this.componentConfig = this.dayCalendarService.getConfig(this.config);
        this.selected = this.selected || [];
        this.currentDateView = this.displayDate
            ? this.utilsService.convertToMoment(this.displayDate, this.componentConfig.format).clone()
            : this.utilsService
                .getDefaultDisplayDate(this.currentDateView, this.selected, this.componentConfig.allowMultiSelect, this.componentConfig.min);
        this.weekdays = this.dayCalendarService
            .generateWeekdays(this.componentConfig.firstDayOfWeek);
        this.inputValueType = this.utilsService.getInputType(this.inputValue, this.componentConfig.allowMultiSelect);
        this.monthCalendarConfig = this.dayCalendarService.getMonthCalendarConfig(this.componentConfig);
        this._shouldShowCurrent = this.shouldShowCurrent();
    }
    ngOnChanges(changes) {
        if (this.isInited) {
            const { minDate, maxDate, config } = changes;
            this.handleConfigChange(config);
            this.init();
            if (minDate || maxDate) {
                this.initValidators();
            }
        }
    }
    writeValue(value) {
        this.inputValue = value;
        if (value) {
            this.selected = this.utilsService
                .convertToMomentArray(value, this.componentConfig);
            this.inputValueType = this.utilsService
                .getInputType(this.inputValue, this.componentConfig.allowMultiSelect);
        }
        else {
            this.selected = [];
        }
        this.weeks = this.dayCalendarService
            .generateMonthArray(this.componentConfig, this.currentDateView, this.selected);
        this.cd.markForCheck();
    }
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    onChangeCallback(_) {
    }
    registerOnTouched(fn) {
    }
    validate(formControl) {
        if (this.minDate || this.maxDate) {
            return this.validateFn(formControl.value);
        }
        else {
            return () => null;
        }
    }
    processOnChangeCallback(value) {
        return this.utilsService.convertFromMomentArray(this.componentConfig.format, value, this.componentConfig.returnedValueType || this.inputValueType);
    }
    initValidators() {
        this.validateFn = this.utilsService.createValidator({ minDate: this.minDate, maxDate: this.maxDate }, this.componentConfig.format, 'day');
        this.onChangeCallback(this.processOnChangeCallback(this.selected));
    }
    dayClicked(day) {
        if (day.selected && !this.componentConfig.unSelectOnClick) {
            return;
        }
        this.selected = this.utilsService
            .updateSelected(this.componentConfig.allowMultiSelect, this.selected, day);
        this.weeks = this.dayCalendarService
            .generateMonthArray(this.componentConfig, this.currentDateView, this.selected);
        this.onSelect.emit(day);
    }
    getDayBtnText(day) {
        return this.dayCalendarService.getDayBtnText(this.componentConfig, day.date);
    }
    getDayBtnCssClass(day) {
        const cssClasses = {
            'dp-selected': day.selected,
            'dp-current-month': day.currentMonth,
            'dp-prev-month': day.prevMonth,
            'dp-next-month': day.nextMonth,
            'dp-current-day': day.currentDay
        };
        const customCssClass = this.dayCalendarService.getDayBtnCssClass(this.componentConfig, day.date);
        if (customCssClass) {
            cssClasses[customCssClass] = true;
        }
        return cssClasses;
    }
    onLeftNavClick() {
        const from = this.currentDateView.clone();
        this.moveCalendarsBy(this.currentDateView, -1, 'month');
        const to = this.currentDateView.clone();
        this.onLeftNav.emit({ from, to });
    }
    onRightNavClick() {
        const from = this.currentDateView.clone();
        this.moveCalendarsBy(this.currentDateView, 1, 'month');
        const to = this.currentDateView.clone();
        this.onRightNav.emit({ from, to });
    }
    onMonthCalendarLeftClick(change) {
        this.onLeftNav.emit(change);
    }
    onMonthCalendarRightClick(change) {
        this.onRightNav.emit(change);
    }
    onMonthCalendarSecondaryLeftClick(change) {
        this.onRightNav.emit(change);
    }
    onMonthCalendarSecondaryRightClick(change) {
        this.onLeftNav.emit(change);
    }
    getWeekdayName(weekday) {
        if (this.componentConfig.weekDayFormatter) {
            return this.componentConfig.weekDayFormatter(weekday.day());
        }
        return weekday.format(this.componentConfig.weekDayFormat);
    }
    toggleCalendarMode(mode) {
        if (this.currentCalendarMode !== mode) {
            this.currentCalendarMode = mode;
            this.onNavHeaderBtnClick.emit(mode);
        }
        this.cd.markForCheck();
    }
    monthSelected(month) {
        this.currentDateView = month.date.clone();
        this.currentCalendarMode = ECalendarMode.Day;
        this.onMonthSelect.emit(month);
    }
    moveCalendarsBy(current, amount, granularity = 'month') {
        this.currentDateView = current.clone().add(amount, granularity);
        this.cd.markForCheck();
    }
    moveCalendarTo(to) {
        if (to) {
            this.currentDateView = this.utilsService.convertToMoment(to, this.componentConfig.format);
        }
        this.cd.markForCheck();
    }
    shouldShowCurrent() {
        return this.utilsService.shouldShowCurrent(this.componentConfig.showGoToCurrent, 'day', this.componentConfig.min, this.componentConfig.max);
    }
    goToCurrent() {
        this.currentDateView = moment$5();
        this.onGoToCurrent.emit();
    }
    handleConfigChange(config) {
        if (config) {
            const prevConf = this.dayCalendarService.getConfig(config.previousValue);
            const currentConf = this.dayCalendarService.getConfig(config.currentValue);
            if (this.utilsService.shouldResetCurrentView(prevConf, currentConf)) {
                this._currentDateView = null;
            }
            if (prevConf.locale !== currentConf.locale) {
                if (this.currentDateView) {
                    this.currentDateView.locale(currentConf.locale);
                }
                this.selected.forEach(m => m.locale(currentConf.locale));
            }
        }
    }
};
DayCalendarComponent.ɵfac = function DayCalendarComponent_Factory(t) { return new (t || DayCalendarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](DayCalendarService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](UtilsService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"])); };
DayCalendarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DayCalendarComponent, selectors: [["dp-day-calendar"]], hostVars: 2, hostBindings: function DayCalendarComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.theme);
    } }, inputs: { config: "config", displayDate: "displayDate", minDate: "minDate", maxDate: "maxDate", theme: "theme" }, outputs: { onSelect: "onSelect", onMonthSelect: "onMonthSelect", onNavHeaderBtnClick: "onNavHeaderBtnClick", onGoToCurrent: "onGoToCurrent", onLeftNav: "onLeftNav", onRightNav: "onRightNav" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([
            DayCalendarService,
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => DayCalendarComponent_1),
                multi: true
            },
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => DayCalendarComponent_1),
                multi: true
            }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 2, consts: [["class", "dp-day-calendar-container", 4, "ngIf"], [3, "config", "displayDate", "ngModel", "theme", "onLeftNav", "onLeftSecondaryNav", "onNavHeaderBtnClick", "onRightNav", "onRightSecondaryNav", "onSelect", 4, "ngIf"], [1, "dp-day-calendar-container"], [3, "isLabelClickable", "label", "showGoToCurrent", "showLeftNav", "showRightNav", "theme", "onGoToCurrent", "onLabelClick", "onLeftNav", "onRightNav"], [1, "dp-calendar-wrapper", 3, "ngClass"], [1, "dp-weekdays"], ["class", "dp-calendar-weekday", 3, "innerText", 4, "ngFor", "ngForOf"], ["class", "dp-calendar-week", 4, "ngFor", "ngForOf"], [1, "dp-calendar-weekday", 3, "innerText"], [1, "dp-calendar-week"], ["class", "dp-week-number", 3, "innerText", 4, "ngIf"], ["class", "dp-calendar-day", "type", "button", 3, "disabled", "innerText", "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "dp-week-number", 3, "innerText"], ["type", "button", 1, "dp-calendar-day", 3, "disabled", "innerText", "ngClass", "click"], [3, "config", "displayDate", "ngModel", "theme", "onLeftNav", "onLeftSecondaryNav", "onNavHeaderBtnClick", "onRightNav", "onRightSecondaryNav", "onSelect"]], template: function DayCalendarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DayCalendarComponent_div_0_Template, 6, 11, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DayCalendarComponent_dp_month_calendar_1_Template, 1, 4, "dp-month-calendar", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.currentCalendarMode === ctx.CalendarMode.Day);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.currentCalendarMode === ctx.CalendarMode.Month);
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], CalendarNavComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], MonthCalendarComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]; }, styles: ["dp-day-calendar{display:inline-block}dp-day-calendar .dp-day-calendar-container{background:#fff}dp-day-calendar .dp-calendar-wrapper{box-sizing:border-box;border:1px solid #000}dp-day-calendar .dp-calendar-wrapper .dp-calendar-weekday:first-child{border-left:none}dp-day-calendar .dp-weekdays{font-size:15px;margin-bottom:5px}dp-day-calendar .dp-calendar-weekday{box-sizing:border-box;display:inline-block;width:30px;text-align:center;border-left:1px solid #000;border-bottom:1px solid #000}dp-day-calendar .dp-calendar-day{box-sizing:border-box;width:30px;height:30px;cursor:pointer}dp-day-calendar .dp-selected{background:#106cc8;color:#fff}dp-day-calendar .dp-next-month,dp-day-calendar .dp-prev-month{opacity:.5}dp-day-calendar .dp-hide-near-month .dp-next-month,dp-day-calendar .dp-hide-near-month .dp-prev-month{visibility:hidden}dp-day-calendar .dp-week-number{position:absolute;font-size:9px}dp-day-calendar.dp-material .dp-calendar-weekday{height:25px;width:30px;line-height:25px;color:#7a7a7a;border:none}dp-day-calendar.dp-material .dp-calendar-wrapper{border:1px solid #e0e0e0}dp-day-calendar.dp-material .dp-calendar-day,dp-day-calendar.dp-material .dp-calendar-month{box-sizing:border-box;background:#fff;border-radius:50%;border:none;outline:0}dp-day-calendar.dp-material .dp-calendar-day:hover,dp-day-calendar.dp-material .dp-calendar-month:hover{background:#e0e0e0}dp-day-calendar.dp-material .dp-selected{background:#106cc8;color:#fff}dp-day-calendar.dp-material .dp-selected:hover{background:#106cc8}dp-day-calendar.dp-material .dp-current-day{border:1px solid #106cc8}"], encapsulation: 2, changeDetection: 0 });
DayCalendarComponent.ctorParameters = () => [
    { type: DayCalendarService },
    { type: UtilsService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DayCalendarComponent.prototype, "config", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DayCalendarComponent.prototype, "displayDate", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DayCalendarComponent.prototype, "minDate", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DayCalendarComponent.prototype, "maxDate", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class'), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DayCalendarComponent.prototype, "theme", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DayCalendarComponent.prototype, "onSelect", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DayCalendarComponent.prototype, "onMonthSelect", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DayCalendarComponent.prototype, "onNavHeaderBtnClick", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DayCalendarComponent.prototype, "onGoToCurrent", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DayCalendarComponent.prototype, "onLeftNav", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DayCalendarComponent.prototype, "onRightNav", void 0);

const moment$6 = moment__WEBPACK_IMPORTED_MODULE_4__;
let MonthCalendarService = class MonthCalendarService {
    constructor(utilsService) {
        this.utilsService = utilsService;
        this.DEFAULT_CONFIG = {
            allowMultiSelect: false,
            yearFormat: 'YYYY',
            format: 'MM-YYYY',
            isNavHeaderBtnClickable: false,
            monthBtnFormat: 'MMM',
            locale: moment$6.locale(),
            multipleYearsNavigateBy: 10,
            showMultipleYearsNavigation: false,
            unSelectOnClick: true,
            numOfMonthRows: 3
        };
    }
    getConfig(config) {
        const _config = Object.assign(Object.assign({}, this.DEFAULT_CONFIG), this.utilsService.clearUndefined(config));
        this.validateConfig(_config);
        this.utilsService.convertPropsToMoment(_config, _config.format, ['min', 'max']);
        moment$6.locale(_config.locale);
        return _config;
    }
    generateYear(config, year, selected = null) {
        const index = year.clone().startOf('year');
        return this.utilsService.createArray(config.numOfMonthRows).map(() => {
            return this.utilsService.createArray(12 / config.numOfMonthRows).map(() => {
                const date = index.clone();
                const month = {
                    date,
                    selected: !!selected.find(s => index.isSame(s, 'month')),
                    currentMonth: index.isSame(moment$6(), 'month'),
                    disabled: this.isMonthDisabled(date, config),
                    text: this.getMonthBtnText(config, date)
                };
                index.add(1, 'month');
                return month;
            });
        });
    }
    isMonthDisabled(date, config) {
        if (config.min && date.isBefore(config.min, 'month')) {
            return true;
        }
        return !!(config.max && date.isAfter(config.max, 'month'));
    }
    shouldShowLeft(min, currentMonthView) {
        return min ? min.isBefore(currentMonthView, 'year') : true;
    }
    shouldShowRight(max, currentMonthView) {
        return max ? max.isAfter(currentMonthView, 'year') : true;
    }
    getHeaderLabel(config, year) {
        if (config.yearFormatter) {
            return config.yearFormatter(year);
        }
        return year.format(config.yearFormat);
    }
    getMonthBtnText(config, month) {
        if (config.monthBtnFormatter) {
            return config.monthBtnFormatter(month);
        }
        return month.format(config.monthBtnFormat);
    }
    getMonthBtnCssClass(config, month) {
        if (config.monthBtnCssClassCallback) {
            return config.monthBtnCssClassCallback(month);
        }
        return '';
    }
    validateConfig(config) {
        if (config.numOfMonthRows < 1 || config.numOfMonthRows > 12 || !Number.isInteger(12 / config.numOfMonthRows)) {
            throw new Error('numOfMonthRows has to be between 1 - 12 and divide 12 to integer');
        }
    }
};
MonthCalendarService.ɵfac = function MonthCalendarService_Factory(t) { return new (t || MonthCalendarService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](UtilsService)); };
MonthCalendarService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MonthCalendarService, factory: MonthCalendarService.ɵfac });
MonthCalendarService.ctorParameters = () => [
    { type: UtilsService }
];

var MonthCalendarComponent_1;
const moment$7 = moment__WEBPACK_IMPORTED_MODULE_4__;
let MonthCalendarComponent = MonthCalendarComponent_1 = class MonthCalendarComponent {
    constructor(monthCalendarService, utilsService, cd) {
        this.monthCalendarService = monthCalendarService;
        this.utilsService = utilsService;
        this.cd = cd;
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onNavHeaderBtnClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onGoToCurrent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onLeftNav = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onRightNav = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onLeftSecondaryNav = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onRightSecondaryNav = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isInited = false;
        this._shouldShowCurrent = true;
        this.api = {
            toggleCalendar: this.toggleCalendarMode.bind(this),
            moveCalendarTo: this.moveCalendarTo.bind(this)
        };
    }
    get selected() {
        return this._selected;
    }
    set selected(selected) {
        this._selected = selected;
        this.onChangeCallback(this.processOnChangeCallback(selected));
    }
    get currentDateView() {
        return this._currentDateView;
    }
    set currentDateView(current) {
        this._currentDateView = current.clone();
        this.yearMonths = this.monthCalendarService
            .generateYear(this.componentConfig, this._currentDateView, this.selected);
        this.navLabel = this.monthCalendarService.getHeaderLabel(this.componentConfig, this.currentDateView);
        this.showLeftNav = this.monthCalendarService.shouldShowLeft(this.componentConfig.min, this._currentDateView);
        this.showRightNav = this.monthCalendarService.shouldShowRight(this.componentConfig.max, this.currentDateView);
        this.showSecondaryLeftNav = this.componentConfig.showMultipleYearsNavigation && this.showLeftNav;
        this.showSecondaryRightNav = this.componentConfig.showMultipleYearsNavigation && this.showRightNav;
    }
    ngOnInit() {
        this.isInited = true;
        this.init();
        this.initValidators();
    }
    ngOnChanges(changes) {
        if (this.isInited) {
            const { minDate, maxDate, config } = changes;
            this.handleConfigChange(config);
            this.init();
            if (minDate || maxDate) {
                this.initValidators();
            }
        }
    }
    init() {
        this.componentConfig = this.monthCalendarService.getConfig(this.config);
        this.selected = this.selected || [];
        this.currentDateView = this.displayDate
            ? this.displayDate
            : this.utilsService
                .getDefaultDisplayDate(this.currentDateView, this.selected, this.componentConfig.allowMultiSelect, this.componentConfig.min);
        this.inputValueType = this.utilsService.getInputType(this.inputValue, this.componentConfig.allowMultiSelect);
        this._shouldShowCurrent = this.shouldShowCurrent();
    }
    writeValue(value) {
        this.inputValue = value;
        if (value) {
            this.selected = this.utilsService
                .convertToMomentArray(value, this.componentConfig);
            this.yearMonths = this.monthCalendarService
                .generateYear(this.componentConfig, this.currentDateView, this.selected);
            this.inputValueType = this.utilsService.getInputType(this.inputValue, this.componentConfig.allowMultiSelect);
        }
        else {
            this.selected = [];
            this.yearMonths = this.monthCalendarService
                .generateYear(this.componentConfig, this.currentDateView, this.selected);
        }
        this.cd.markForCheck();
    }
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    onChangeCallback(_) {
    }
    registerOnTouched(fn) {
    }
    validate(formControl) {
        if (this.minDate || this.maxDate) {
            return this.validateFn(formControl.value);
        }
        else {
            return () => null;
        }
    }
    processOnChangeCallback(value) {
        return this.utilsService.convertFromMomentArray(this.componentConfig.format, value, this.componentConfig.returnedValueType || this.inputValueType);
    }
    initValidators() {
        this.validateFn = this.validateFn = this.utilsService.createValidator({ minDate: this.minDate, maxDate: this.maxDate }, this.componentConfig.format, 'month');
        this.onChangeCallback(this.processOnChangeCallback(this.selected));
    }
    monthClicked(month) {
        if (month.selected && !this.componentConfig.unSelectOnClick) {
            return;
        }
        this.selected = this.utilsService
            .updateSelected(this.componentConfig.allowMultiSelect, this.selected, month, 'month');
        this.yearMonths = this.monthCalendarService
            .generateYear(this.componentConfig, this.currentDateView, this.selected);
        this.onSelect.emit(month);
    }
    onLeftNavClick() {
        const from = this.currentDateView.clone();
        this.currentDateView = this.currentDateView.clone().subtract(1, 'year');
        const to = this.currentDateView.clone();
        this.yearMonths = this.monthCalendarService.generateYear(this.componentConfig, this.currentDateView, this.selected);
        this.onLeftNav.emit({ from, to });
    }
    onLeftSecondaryNavClick() {
        let navigateBy = this.componentConfig.multipleYearsNavigateBy;
        const isOutsideRange = this.componentConfig.min &&
            this.currentDateView.year() - this.componentConfig.min.year() < navigateBy;
        if (isOutsideRange) {
            navigateBy = this.currentDateView.year() - this.componentConfig.min.year();
        }
        const from = this.currentDateView.clone();
        this.currentDateView = this.currentDateView.clone().subtract(navigateBy, 'year');
        const to = this.currentDateView.clone();
        this.onLeftSecondaryNav.emit({ from, to });
    }
    onRightNavClick() {
        const from = this.currentDateView.clone();
        this.currentDateView = this.currentDateView.clone().add(1, 'year');
        const to = this.currentDateView.clone();
        this.onRightNav.emit({ from, to });
    }
    onRightSecondaryNavClick() {
        let navigateBy = this.componentConfig.multipleYearsNavigateBy;
        const isOutsideRange = this.componentConfig.max &&
            this.componentConfig.max.year() - this.currentDateView.year() < navigateBy;
        if (isOutsideRange) {
            navigateBy = this.componentConfig.max.year() - this.currentDateView.year();
        }
        const from = this.currentDateView.clone();
        this.currentDateView = this.currentDateView.clone().add(navigateBy, 'year');
        const to = this.currentDateView.clone();
        this.onRightSecondaryNav.emit({ from, to });
    }
    toggleCalendarMode() {
        this.onNavHeaderBtnClick.emit();
    }
    getMonthBtnCssClass(month) {
        const cssClass = {
            'dp-selected': month.selected,
            'dp-current-month': month.currentMonth
        };
        const customCssClass = this.monthCalendarService.getMonthBtnCssClass(this.componentConfig, month.date);
        if (customCssClass) {
            cssClass[customCssClass] = true;
        }
        return cssClass;
    }
    shouldShowCurrent() {
        return this.utilsService.shouldShowCurrent(this.componentConfig.showGoToCurrent, 'month', this.componentConfig.min, this.componentConfig.max);
    }
    goToCurrent() {
        this.currentDateView = moment$7();
        this.onGoToCurrent.emit();
    }
    moveCalendarTo(to) {
        if (to) {
            this.currentDateView = this.utilsService.convertToMoment(to, this.componentConfig.format);
            this.cd.markForCheck();
        }
    }
    handleConfigChange(config) {
        if (config) {
            const prevConf = this.monthCalendarService.getConfig(config.previousValue);
            const currentConf = this.monthCalendarService.getConfig(config.currentValue);
            if (this.utilsService.shouldResetCurrentView(prevConf, currentConf)) {
                this._currentDateView = null;
            }
            if (prevConf.locale !== currentConf.locale) {
                if (this.currentDateView) {
                    this.currentDateView.locale(currentConf.locale);
                }
                (this.selected || []).forEach((m) => m.locale(currentConf.locale));
            }
        }
    }
};
MonthCalendarComponent.ɵfac = function MonthCalendarComponent_Factory(t) { return new (t || MonthCalendarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MonthCalendarService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](UtilsService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"])); };
MonthCalendarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MonthCalendarComponent, selectors: [["dp-month-calendar"]], hostVars: 2, hostBindings: function MonthCalendarComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.theme);
    } }, inputs: { config: "config", displayDate: "displayDate", minDate: "minDate", maxDate: "maxDate", theme: "theme" }, outputs: { onSelect: "onSelect", onNavHeaderBtnClick: "onNavHeaderBtnClick", onGoToCurrent: "onGoToCurrent", onLeftNav: "onLeftNav", onRightNav: "onRightNav", onLeftSecondaryNav: "onLeftSecondaryNav", onRightSecondaryNav: "onRightSecondaryNav" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([
            MonthCalendarService,
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => MonthCalendarComponent_1),
                multi: true
            },
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => MonthCalendarComponent_1),
                multi: true
            }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 4, vars: 9, consts: [[1, "dp-month-calendar-container"], [3, "isLabelClickable", "label", "showGoToCurrent", "showLeftNav", "showLeftSecondaryNav", "showRightNav", "showRightSecondaryNav", "theme", "onGoToCurrent", "onLabelClick", "onLeftNav", "onLeftSecondaryNav", "onRightNav", "onRightSecondaryNav"], [1, "dp-calendar-wrapper"], ["class", "dp-months-row", 4, "ngFor", "ngForOf"], [1, "dp-months-row"], ["class", "dp-calendar-month", "type", "button", 3, "disabled", "innerText", "ngClass", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "dp-calendar-month", 3, "disabled", "innerText", "ngClass", "click"]], template: function MonthCalendarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "dp-calendar-nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onGoToCurrent", function MonthCalendarComponent_Template_dp_calendar_nav_onGoToCurrent_1_listener() { return ctx.goToCurrent(); })("onLabelClick", function MonthCalendarComponent_Template_dp_calendar_nav_onLabelClick_1_listener() { return ctx.toggleCalendarMode(); })("onLeftNav", function MonthCalendarComponent_Template_dp_calendar_nav_onLeftNav_1_listener() { return ctx.onLeftNavClick(); })("onLeftSecondaryNav", function MonthCalendarComponent_Template_dp_calendar_nav_onLeftSecondaryNav_1_listener() { return ctx.onLeftSecondaryNavClick(); })("onRightNav", function MonthCalendarComponent_Template_dp_calendar_nav_onRightNav_1_listener() { return ctx.onRightNavClick(); })("onRightSecondaryNav", function MonthCalendarComponent_Template_dp_calendar_nav_onRightSecondaryNav_1_listener() { return ctx.onRightSecondaryNavClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MonthCalendarComponent_div_3_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("isLabelClickable", ctx.componentConfig.isNavHeaderBtnClickable)("label", ctx.navLabel)("showGoToCurrent", ctx.shouldShowCurrent())("showLeftNav", ctx.showLeftNav)("showLeftSecondaryNav", ctx.showSecondaryLeftNav)("showRightNav", ctx.showRightNav)("showRightSecondaryNav", ctx.showSecondaryRightNav)("theme", ctx.theme);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.yearMonths);
    } }, directives: function () { return [CalendarNavComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]]; }, styles: ["dp-month-calendar{display:inline-block}dp-month-calendar .dp-month-calendar-container{background:#fff}dp-month-calendar .dp-calendar-wrapper{border:1px solid #000}dp-month-calendar .dp-calendar-month{box-sizing:border-box;width:52.5px;height:52.5px;cursor:pointer}dp-month-calendar .dp-calendar-month.dp-selected{background:#106cc8;color:#fff}dp-month-calendar.dp-material .dp-calendar-weekday{height:25px;width:30px;line-height:25px;background:#e0e0e0;border:1px solid #e0e0e0}dp-month-calendar.dp-material .dp-calendar-wrapper{border:1px solid #e0e0e0}dp-month-calendar.dp-material .dp-calendar-month{box-sizing:border-box;background:#fff;border-radius:50%;border:none;outline:0}dp-month-calendar.dp-material .dp-calendar-month:hover{background:#e0e0e0}dp-month-calendar.dp-material .dp-selected{background:#106cc8;color:#fff}dp-month-calendar.dp-material .dp-selected:hover{background:#106cc8}dp-month-calendar.dp-material .dp-current-month{border:1px solid #106cc8}"], encapsulation: 2, changeDetection: 0 });
MonthCalendarComponent.ctorParameters = () => [
    { type: MonthCalendarService },
    { type: UtilsService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MonthCalendarComponent.prototype, "config", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MonthCalendarComponent.prototype, "displayDate", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MonthCalendarComponent.prototype, "minDate", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MonthCalendarComponent.prototype, "maxDate", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class'), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MonthCalendarComponent.prototype, "theme", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], MonthCalendarComponent.prototype, "onSelect", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], MonthCalendarComponent.prototype, "onNavHeaderBtnClick", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], MonthCalendarComponent.prototype, "onGoToCurrent", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], MonthCalendarComponent.prototype, "onLeftNav", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], MonthCalendarComponent.prototype, "onRightNav", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], MonthCalendarComponent.prototype, "onLeftSecondaryNav", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], MonthCalendarComponent.prototype, "onRightSecondaryNav", void 0);

var TimeSelectComponent_1;
const moment$8 = moment__WEBPACK_IMPORTED_MODULE_4__;
let TimeSelectComponent = TimeSelectComponent_1 = class TimeSelectComponent {
    constructor(timeSelectService, utilsService, cd) {
        this.timeSelectService = timeSelectService;
        this.utilsService = utilsService;
        this.cd = cd;
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isInited = false;
        this.api = {
            triggerChange: this.emitChange.bind(this)
        };
    }
    get selected() {
        return this._selected;
    }
    set selected(selected) {
        this._selected = selected;
        this.calculateTimeParts(this.selected);
        this.showDecHour = this.timeSelectService.shouldShowDecrease(this.componentConfig, this._selected, 'hour');
        this.showDecMinute = this.timeSelectService.shouldShowDecrease(this.componentConfig, this._selected, 'minute');
        this.showDecSecond = this.timeSelectService.shouldShowDecrease(this.componentConfig, this._selected, 'second');
        this.showIncHour = this.timeSelectService.shouldShowIncrease(this.componentConfig, this._selected, 'hour');
        this.showIncMinute = this.timeSelectService.shouldShowIncrease(this.componentConfig, this._selected, 'minute');
        this.showIncSecond = this.timeSelectService.shouldShowIncrease(this.componentConfig, this._selected, 'second');
        this.showToggleMeridiem = this.timeSelectService.shouldShowToggleMeridiem(this.componentConfig, this._selected);
        this.onChangeCallback(this.processOnChangeCallback(selected));
    }
    ngOnInit() {
        this.isInited = true;
        this.init();
        this.initValidators();
    }
    init() {
        this.componentConfig = this.timeSelectService.getConfig(this.config);
        this.selected = this.selected || moment$8();
        this.inputValueType = this.utilsService.getInputType(this.inputValue, false);
    }
    ngOnChanges(changes) {
        if (this.isInited) {
            const { minDate, maxDate, minTime, maxTime } = changes;
            this.init();
            if (minDate || maxDate || minTime || maxTime) {
                this.initValidators();
            }
            this.handleConfigChange(changes.config);
        }
    }
    writeValue(value) {
        this.inputValue = value;
        if (value) {
            const momentValue = this.utilsService
                .convertToMomentArray(value, {
                allowMultiSelect: false,
                format: this.timeSelectService.getTimeFormat(this.componentConfig)
            })[0];
            if (momentValue.isValid()) {
                this.selected = momentValue;
                this.inputValueType = this.utilsService
                    .getInputType(this.inputValue, false);
            }
        }
        this.cd.markForCheck();
    }
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    onChangeCallback(_) {
    }
    registerOnTouched(fn) {
    }
    validate(formControl) {
        if (this.minDate || this.maxDate || this.minTime || this.maxTime) {
            return this.validateFn(formControl.value);
        }
        else {
            return () => null;
        }
    }
    processOnChangeCallback(value) {
        return this.utilsService.convertFromMomentArray(this.timeSelectService.getTimeFormat(this.componentConfig), [value], this.componentConfig.returnedValueType || this.inputValueType);
    }
    initValidators() {
        this.validateFn = this.utilsService.createValidator({
            minDate: this.minDate,
            maxDate: this.maxDate,
            minTime: this.minTime,
            maxTime: this.maxTime
        }, undefined, 'day');
        this.onChangeCallback(this.processOnChangeCallback(this.selected));
    }
    decrease(unit) {
        this.selected = this.timeSelectService.decrease(this.componentConfig, this.selected, unit);
        this.emitChange();
    }
    increase(unit) {
        this.selected = this.timeSelectService.increase(this.componentConfig, this.selected, unit);
        this.emitChange();
    }
    toggleMeridiem() {
        this.selected = this.timeSelectService.toggleMeridiem(this.selected);
        this.emitChange();
    }
    emitChange() {
        this.onChange.emit({ date: this.selected, selected: false });
        this.cd.markForCheck();
    }
    calculateTimeParts(time) {
        this.hours = this.timeSelectService.getHours(this.componentConfig, time);
        this.minutes = this.timeSelectService.getMinutes(this.componentConfig, time);
        this.seconds = this.timeSelectService.getSeconds(this.componentConfig, time);
        this.meridiem = this.timeSelectService.getMeridiem(this.componentConfig, time);
    }
    handleConfigChange(config) {
        if (config) {
            const prevConf = this.timeSelectService.getConfig(config.previousValue);
            const currentConf = this.timeSelectService.getConfig(config.currentValue);
            if (prevConf.locale !== currentConf.locale) {
                this.selected = this.selected.clone().locale(currentConf.locale);
            }
        }
    }
};
TimeSelectComponent.ɵfac = function TimeSelectComponent_Factory(t) { return new (t || TimeSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](TimeSelectService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](UtilsService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"])); };
TimeSelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TimeSelectComponent, selectors: [["dp-time-select"]], hostVars: 2, hostBindings: function TimeSelectComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.theme);
    } }, inputs: { config: "config", displayDate: "displayDate", minDate: "minDate", maxDate: "maxDate", minTime: "minTime", maxTime: "maxTime", theme: "theme" }, outputs: { onChange: "onChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([
            TimeSelectService,
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => TimeSelectComponent_1),
                multi: true
            },
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => TimeSelectComponent_1),
                multi: true
            }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 12, vars: 9, consts: [[1, "dp-time-select-controls"], [1, "dp-time-select-control", "dp-time-select-control-hours"], ["type", "button", 1, "dp-time-select-control-up", 3, "disabled", "click"], [1, "dp-time-select-display-hours", 3, "innerText"], ["type", "button", 1, "dp-time-select-control-down", 3, "disabled", "click"], [1, "dp-time-select-control", "dp-time-select-separator", 3, "innerText"], [1, "dp-time-select-control", "dp-time-select-control-minutes"], [1, "dp-time-select-display-minutes", 3, "innerText"], [4, "ngIf"], ["class", "dp-time-select-control dp-time-select-control-meridiem", 4, "ngIf"], [1, "dp-time-select-control", "dp-time-select-control-seconds"], [1, "dp-time-select-display-seconds", 3, "innerText"], [1, "dp-time-select-control", "dp-time-select-control-meridiem"], [1, "dp-time-select-display-meridiem", 3, "innerText"]], template: function TimeSelectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TimeSelectComponent_Template_button_click_2_listener() { return ctx.increase("hour"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TimeSelectComponent_Template_button_click_4_listener() { return ctx.decrease("hour"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TimeSelectComponent_Template_button_click_7_listener() { return ctx.increase("minute"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TimeSelectComponent_Template_button_click_9_listener() { return ctx.decrease("minute"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, TimeSelectComponent_ng_container_10_Template, 6, 4, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, TimeSelectComponent_li_11_Template, 4, 3, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.showIncHour);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerText", ctx.hours);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.showDecHour);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerText", ctx.componentConfig.timeSeparator);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.showIncMinute);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerText", ctx.minutes);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.showDecMinute);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.componentConfig.showSeconds);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.componentConfig.showTwentyFourHours);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["dp-time-select{display:inline-block}dp-time-select .dp-time-select-controls{margin:0;padding:0;text-align:center;line-height:normal;background:#fff}dp-time-select .dp-time-select-control{display:inline-block;width:35px;margin:0 auto;vertical-align:middle;font-size:inherit;letter-spacing:1px}dp-time-select .dp-time-select-control-down,dp-time-select .dp-time-select-control-up{position:relative;display:block;width:24px;height:24px;margin:3px auto;cursor:pointer}dp-time-select .dp-time-select-control-down::before,dp-time-select .dp-time-select-control-up::before{position:relative;content:'';display:inline-block;height:8px;width:8px;vertical-align:baseline;border-style:solid;border-width:2px 2px 0 0}dp-time-select .dp-time-select-control-up::before{transform:rotate(-45deg);top:4px}dp-time-select .dp-time-select-control-down::before{transform:rotate(135deg)}dp-time-select .dp-time-select-separator{width:5px}dp-time-select.dp-material .dp-time-select-control-down,dp-time-select.dp-material .dp-time-select-control-up{box-sizing:border-box;background:0 0;border:none;outline:0;border-radius:50%}dp-time-select.dp-material .dp-time-select-control-down::before,dp-time-select.dp-material .dp-time-select-control-up::before{left:0}dp-time-select.dp-material .dp-time-select-control-down:hover,dp-time-select.dp-material .dp-time-select-control-up:hover{background:#e0e0e0}"], encapsulation: 2, changeDetection: 0 });
TimeSelectComponent.ctorParameters = () => [
    { type: TimeSelectService },
    { type: UtilsService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TimeSelectComponent.prototype, "config", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TimeSelectComponent.prototype, "displayDate", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TimeSelectComponent.prototype, "minDate", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TimeSelectComponent.prototype, "maxDate", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TimeSelectComponent.prototype, "minTime", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TimeSelectComponent.prototype, "maxTime", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class'), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TimeSelectComponent.prototype, "theme", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], TimeSelectComponent.prototype, "onChange", void 0);

let CalendarNavComponent = class CalendarNavComponent {
    constructor() {
        this.isLabelClickable = false;
        this.showLeftNav = true;
        this.showLeftSecondaryNav = false;
        this.showRightNav = true;
        this.showRightSecondaryNav = false;
        this.leftNavDisabled = false;
        this.leftSecondaryNavDisabled = false;
        this.rightNavDisabled = false;
        this.rightSecondaryNavDisabled = false;
        this.showGoToCurrent = true;
        this.onLeftNav = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onLeftSecondaryNav = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onRightNav = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onRightSecondaryNav = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onLabelClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onGoToCurrent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    leftNavClicked() {
        this.onLeftNav.emit();
    }
    leftSecondaryNavClicked() {
        this.onLeftSecondaryNav.emit();
    }
    rightNavClicked() {
        this.onRightNav.emit();
    }
    rightSecondaryNavClicked() {
        this.onRightSecondaryNav.emit();
    }
    labelClicked() {
        this.onLabelClick.emit();
    }
};
CalendarNavComponent.ɵfac = function CalendarNavComponent_Factory(t) { return new (t || CalendarNavComponent)(); };
CalendarNavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CalendarNavComponent, selectors: [["dp-calendar-nav"]], hostVars: 2, hostBindings: function CalendarNavComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.theme);
    } }, inputs: { isLabelClickable: "isLabelClickable", showLeftNav: "showLeftNav", showLeftSecondaryNav: "showLeftSecondaryNav", showRightNav: "showRightNav", showRightSecondaryNav: "showRightSecondaryNav", leftNavDisabled: "leftNavDisabled", leftSecondaryNavDisabled: "leftSecondaryNavDisabled", rightNavDisabled: "rightNavDisabled", rightSecondaryNavDisabled: "rightSecondaryNavDisabled", showGoToCurrent: "showGoToCurrent", label: "label", theme: "theme" }, outputs: { onLeftNav: "onLeftNav", onLeftSecondaryNav: "onLeftSecondaryNav", onRightNav: "onRightNav", onRightSecondaryNav: "onRightSecondaryNav", onLabelClick: "onLabelClick", onGoToCurrent: "onGoToCurrent" }, decls: 12, vars: 15, consts: [[1, "dp-calendar-nav-container"], [1, "dp-nav-header"], [3, "hidden", "innerText"], ["type", "button", 1, "dp-nav-header-btn", 3, "hidden", "innerText", "click"], [1, "dp-nav-btns-container"], [1, "dp-calendar-nav-container-left"], ["class", "dp-calendar-secondary-nav-left", "type", "button", 3, "disabled", "click", 4, "ngIf"], ["type", "button", 1, "dp-calendar-nav-left", 3, "disabled", "hidden", "click"], ["class", "dp-current-location-btn", "type", "button", 3, "click", 4, "ngIf"], [1, "dp-calendar-nav-container-right"], ["type", "button", 1, "dp-calendar-nav-right", 3, "disabled", "hidden", "click"], ["class", "dp-calendar-secondary-nav-right", "type", "button", 3, "disabled", "click", 4, "ngIf"], ["type", "button", 1, "dp-calendar-secondary-nav-left", 3, "disabled", "click"], ["type", "button", 1, "dp-current-location-btn", 3, "click"], ["type", "button", 1, "dp-calendar-secondary-nav-right", 3, "disabled", "click"]], template: function CalendarNavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CalendarNavComponent_Template_button_click_3_listener() { return ctx.labelClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CalendarNavComponent_button_6_Template, 1, 1, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CalendarNavComponent_Template_button_click_7_listener() { return ctx.leftNavClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, CalendarNavComponent_button_8_Template, 1, 0, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CalendarNavComponent_Template_button_click_10_listener() { return ctx.rightNavClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, CalendarNavComponent_button_11_Template, 1, 1, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.isLabelClickable)("innerText", ctx.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-hidden", ctx.isLabelClickable);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx.isLabelClickable)("innerText", ctx.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-hidden", !ctx.isLabelClickable);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showLeftSecondaryNav);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.leftNavDisabled)("hidden", !ctx.showLeftNav);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-hidden", !ctx.showLeftNav);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showGoToCurrent);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.rightNavDisabled)("hidden", !ctx.showRightNav);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-hidden", !ctx.showRightNav);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showRightSecondaryNav);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["dp-calendar-nav .dp-calendar-nav-container{position:relative;box-sizing:border-box;height:25px;border:1px solid #000;border-bottom:none}dp-calendar-nav .dp-nav-date-btn{box-sizing:border-box;height:25px;border:1px solid #000;border-bottom:none}dp-calendar-nav .dp-nav-btns-container{position:absolute;top:50%;transform:translateY(-50%);right:5px;display:inline-block}dp-calendar-nav .dp-calendar-nav-container-left,dp-calendar-nav .dp-calendar-nav-container-right{display:inline-block}dp-calendar-nav .dp-calendar-nav-left,dp-calendar-nav .dp-calendar-nav-right,dp-calendar-nav .dp-calendar-secondary-nav-left,dp-calendar-nav .dp-calendar-secondary-nav-right{position:relative;width:16px;cursor:pointer}dp-calendar-nav .dp-calendar-nav-left,dp-calendar-nav .dp-calendar-nav-right{line-height:0}dp-calendar-nav .dp-calendar-nav-left::before,dp-calendar-nav .dp-calendar-nav-right::before{position:relative;content:'';display:inline-block;height:8px;width:8px;vertical-align:baseline;border-style:solid;border-width:2px 2px 0 0;transform:rotate(45deg)}dp-calendar-nav .dp-calendar-secondary-nav-left,dp-calendar-nav .dp-calendar-secondary-nav-right{padding:0}dp-calendar-nav .dp-calendar-secondary-nav-left::after,dp-calendar-nav .dp-calendar-secondary-nav-left::before,dp-calendar-nav .dp-calendar-secondary-nav-right::after,dp-calendar-nav .dp-calendar-secondary-nav-right::before{position:relative;content:'';display:inline-block;height:8px;width:8px;vertical-align:baseline;border-style:solid;border-width:2px 2px 0 0;transform:rotate(45deg)}dp-calendar-nav .dp-calendar-secondary-nav-left::before,dp-calendar-nav .dp-calendar-secondary-nav-right::before{right:-10px}dp-calendar-nav .dp-calendar-secondary-nav-right{left:initial;right:5px}dp-calendar-nav .dp-calendar-nav-left::before,dp-calendar-nav .dp-calendar-secondary-nav-left::after,dp-calendar-nav .dp-calendar-secondary-nav-left::before{position:relative;content:'';display:inline-block;height:8px;width:8px;vertical-align:baseline;border-style:solid;border-width:2px 2px 0 0;transform:rotate(-135deg)}dp-calendar-nav .dp-calendar-secondary-nav-left::before{right:-10px}dp-calendar-nav .dp-nav-header{position:absolute;top:50%;transform:translateY(-50%);left:5px;display:inline-block;font-size:13px}dp-calendar-nav .dp-nav-header-btn{cursor:pointer}dp-calendar-nav .dp-current-location-btn{position:relative;top:-1px;height:16px;width:16px;vertical-align:middle;background:rgba(0,0,0,.6);border:1px solid rgba(0,0,0,.6);outline:0;border-radius:50%;box-shadow:inset 0 0 0 3px #fff;cursor:pointer}dp-calendar-nav .dp-current-location-btn:hover{background:#000}dp-calendar-nav.dp-material .dp-calendar-nav-container{height:30px;border:1px solid #e0e0e0}dp-calendar-nav.dp-material .dp-calendar-nav-left,dp-calendar-nav.dp-material .dp-calendar-nav-right,dp-calendar-nav.dp-material .dp-calendar-secondary-nav-left,dp-calendar-nav.dp-material .dp-calendar-secondary-nav-right{border:none;background:#fff;outline:0;font-size:16px;padding:0}dp-calendar-nav.dp-material .dp-calendar-secondary-nav-left,dp-calendar-nav.dp-material .dp-calendar-secondary-nav-right{width:20px}dp-calendar-nav.dp-material .dp-nav-header-btn{height:20px;width:80px;border:none;background:#fff;outline:0}dp-calendar-nav.dp-material .dp-nav-header-btn:hover{background:rgba(0,0,0,.05)}dp-calendar-nav.dp-material .dp-nav-header-btn:active{background:rgba(0,0,0,.1)}"], encapsulation: 2, changeDetection: 0 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CalendarNavComponent.prototype, "label", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CalendarNavComponent.prototype, "isLabelClickable", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CalendarNavComponent.prototype, "showLeftNav", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CalendarNavComponent.prototype, "showLeftSecondaryNav", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CalendarNavComponent.prototype, "showRightNav", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CalendarNavComponent.prototype, "showRightSecondaryNav", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CalendarNavComponent.prototype, "leftNavDisabled", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CalendarNavComponent.prototype, "leftSecondaryNavDisabled", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CalendarNavComponent.prototype, "rightNavDisabled", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CalendarNavComponent.prototype, "rightSecondaryNavDisabled", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CalendarNavComponent.prototype, "showGoToCurrent", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class'), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CalendarNavComponent.prototype, "theme", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], CalendarNavComponent.prototype, "onLeftNav", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], CalendarNavComponent.prototype, "onLeftSecondaryNav", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], CalendarNavComponent.prototype, "onRightNav", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], CalendarNavComponent.prototype, "onRightSecondaryNav", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], CalendarNavComponent.prototype, "onLabelClick", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], CalendarNavComponent.prototype, "onGoToCurrent", void 0);

var DayTimeCalendarComponent_1;
let DayTimeCalendarComponent = DayTimeCalendarComponent_1 = class DayTimeCalendarComponent {
    constructor(dayTimeCalendarService, utilsService, cd) {
        this.dayTimeCalendarService = dayTimeCalendarService;
        this.utilsService = utilsService;
        this.cd = cd;
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onGoToCurrent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onLeftNav = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onRightNav = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isInited = false;
        this.api = {
            moveCalendarTo: this.moveCalendarTo.bind(this)
        };
    }
    get selected() {
        return this._selected;
    }
    set selected(selected) {
        this._selected = selected;
        this.onChangeCallback(this.processOnChangeCallback(selected));
    }
    ;
    ngOnInit() {
        this.isInited = true;
        this.init();
        this.initValidators();
    }
    init() {
        this.componentConfig = this.dayTimeCalendarService.getConfig(this.config);
        this.inputValueType = this.utilsService.getInputType(this.inputValue, false);
    }
    ngOnChanges(changes) {
        if (this.isInited) {
            const { minDate, maxDate } = changes;
            this.init();
            if (minDate || maxDate) {
                this.initValidators();
            }
        }
    }
    writeValue(value) {
        this.inputValue = value;
        if (value) {
            this.selected = this.utilsService
                .convertToMomentArray(value, {
                format: this.componentConfig.format,
                allowMultiSelect: false
            })[0];
            this.inputValueType = this.utilsService
                .getInputType(this.inputValue, false);
        }
        else {
            this.selected = null;
        }
        this.cd.markForCheck();
    }
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    onChangeCallback(_) {
    }
    registerOnTouched(fn) {
    }
    validate(formControl) {
        if (this.minDate || this.maxDate) {
            return this.validateFn(formControl.value);
        }
        else {
            return () => null;
        }
    }
    processOnChangeCallback(value) {
        return this.utilsService.convertFromMomentArray(this.componentConfig.format, [value], this.componentConfig.returnedValueType || this.inputValueType);
    }
    initValidators() {
        this.validateFn = this.utilsService.createValidator({
            minDate: this.minDate,
            maxDate: this.maxDate
        }, undefined, 'daytime');
        this.onChangeCallback(this.processOnChangeCallback(this.selected));
    }
    dateSelected(day) {
        this.selected = this.dayTimeCalendarService.updateDay(this.selected, day.date, this.config);
        this.emitChange();
    }
    timeChange(time) {
        this.selected = this.dayTimeCalendarService.updateTime(this.selected, time.date);
        this.emitChange();
    }
    emitChange() {
        this.onChange.emit({ date: this.selected, selected: false });
    }
    moveCalendarTo(to) {
        if (to) {
            this.dayCalendarRef.moveCalendarTo(to);
        }
    }
    onLeftNavClick(change) {
        this.onLeftNav.emit(change);
    }
    onRightNavClick(change) {
        this.onRightNav.emit(change);
    }
};
DayTimeCalendarComponent.ɵfac = function DayTimeCalendarComponent_Factory(t) { return new (t || DayTimeCalendarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](DayTimeCalendarService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](UtilsService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"])); };
DayTimeCalendarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DayTimeCalendarComponent, selectors: [["dp-day-time-calendar"]], viewQuery: function DayTimeCalendarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.dayCalendarRef = _t.first);
    } }, hostVars: 2, hostBindings: function DayTimeCalendarComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.theme);
    } }, inputs: { config: "config", displayDate: "displayDate", minDate: "minDate", maxDate: "maxDate", theme: "theme" }, outputs: { onChange: "onChange", onGoToCurrent: "onGoToCurrent", onLeftNav: "onLeftNav", onRightNav: "onRightNav" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([
            DayTimeCalendarService,
            DayCalendarService,
            TimeSelectService,
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => DayTimeCalendarComponent_1),
                multi: true
            },
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => DayTimeCalendarComponent_1),
                multi: true
            }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 4, vars: 7, consts: [[3, "config", "displayDate", "ngModel", "theme", "onGoToCurrent", "onLeftNav", "onRightNav", "onSelect"], ["dayCalendar", ""], [3, "config", "ngModel", "theme", "onChange"], ["timeSelect", ""]], template: function DayTimeCalendarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "dp-day-calendar", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onGoToCurrent", function DayTimeCalendarComponent_Template_dp_day_calendar_onGoToCurrent_0_listener() { return ctx.onGoToCurrent.emit(); })("onLeftNav", function DayTimeCalendarComponent_Template_dp_day_calendar_onLeftNav_0_listener($event) { return ctx.onLeftNavClick($event); })("onRightNav", function DayTimeCalendarComponent_Template_dp_day_calendar_onRightNav_0_listener($event) { return ctx.onRightNavClick($event); })("onSelect", function DayTimeCalendarComponent_Template_dp_day_calendar_onSelect_0_listener($event) { return ctx.dateSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "dp-time-select", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onChange", function DayTimeCalendarComponent_Template_dp_time_select_onChange_2_listener($event) { return ctx.timeChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("config", ctx.componentConfig)("displayDate", ctx.displayDate)("ngModel", ctx._selected)("theme", ctx.theme);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("config", ctx.componentConfig)("ngModel", ctx._selected)("theme", ctx.theme);
    } }, directives: [DayCalendarComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], TimeSelectComponent], styles: ["dp-day-time-calendar{display:inline-block}dp-day-time-calendar dp-time-select{display:block;border:1px solid #000;border-top:0}dp-day-time-calendar.dp-material dp-time-select{border:1px solid #e0e0e0;border-top:0}"], encapsulation: 2, changeDetection: 0 });
DayTimeCalendarComponent.ctorParameters = () => [
    { type: DayTimeCalendarService },
    { type: UtilsService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DayTimeCalendarComponent.prototype, "config", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DayTimeCalendarComponent.prototype, "displayDate", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DayTimeCalendarComponent.prototype, "minDate", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DayTimeCalendarComponent.prototype, "maxDate", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class'), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DayTimeCalendarComponent.prototype, "theme", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DayTimeCalendarComponent.prototype, "onChange", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DayTimeCalendarComponent.prototype, "onGoToCurrent", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DayTimeCalendarComponent.prototype, "onLeftNav", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DayTimeCalendarComponent.prototype, "onRightNav", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dayCalendar')
], DayTimeCalendarComponent.prototype, "dayCalendarRef", void 0);

let DpDatePickerModule = class DpDatePickerModule {
};
DpDatePickerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: DpDatePickerModule });
DpDatePickerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function DpDatePickerModule_Factory(t) { return new (t || DpDatePickerModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
        ]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DomHelper, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UtilsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DayCalendarService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: UtilsService }]; }, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TimeSelectService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: UtilsService }]; }, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DayTimeCalendarService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: UtilsService }, { type: DayCalendarService }, { type: TimeSelectService }]; }, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DatePickerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: UtilsService }, { type: TimeSelectService }, { type: DayTimeCalendarService }]; }, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DatePickerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'dp-date-picker',
                template: "<div [ngClass]=\"{'dp-open': areCalendarsShown}\">\n  <div [attr.data-hidden]=\"componentConfig.hideInputContainer\"\n       [hidden]=\"componentConfig.hideInputContainer\"\n       class=\"dp-input-container\">\n    <input (blur)=\"inputBlurred()\"\n           (focus)=\"inputFocused()\"\n           (ngModelChange)=\"onViewDateChange($event)\"\n           (keydown.enter)=\"componentConfig.closeOnEnter && hideCalendar()\"\n           [disabled]=\"disabled\"\n           [ngModel]=\"inputElementValue\"\n           [placeholder]=\"placeholder\"\n           [readonly]=\"componentConfig.disableKeypress\"\n           class=\"dp-picker-input\"\n           type=\"text\"/>\n  </div>\n  <div #container>\n    <div [attr.data-hidden]=\"!_areCalendarsShown\"\n         [hidden]=\"!_areCalendarsShown\"\n         [ngSwitch]=\"mode\"\n         class=\"dp-popup {{theme}}\">\n      <dp-day-calendar #dayCalendar\n                       (onGoToCurrent)=\"onGoToCurrent.emit()\"\n                       (onLeftNav)=\"onLeftNavClick($event)\"\n                       (onRightNav)=\"onRightNavClick($event)\"\n                       (onSelect)=\"dateSelected($event, 'day', selectEvent.SELECTION, false)\"\n                       *ngSwitchCase=\"'day'\"\n                       [config]=\"dayCalendarConfig\"\n                       [displayDate]=\"displayDate\"\n                       [ngModel]=\"_selected\"\n                       [theme]=\"theme\">\n      </dp-day-calendar>\n\n      <dp-month-calendar #monthCalendar\n                         (onGoToCurrent)=\"onGoToCurrent.emit()\"\n                         (onLeftNav)=\"onLeftNavClick($event)\"\n                         (onRightNav)=\"onRightNavClick($event)\"\n                         (onSelect)=\"dateSelected($event, 'month', selectEvent.SELECTION, false)\"\n                         *ngSwitchCase=\"'month'\"\n                         [config]=\"dayCalendarConfig\"\n                         [displayDate]=\"displayDate\"\n                         [ngModel]=\"_selected\"\n                         [theme]=\"theme\">\n      </dp-month-calendar>\n\n      <dp-time-select #timeSelect\n                      (onChange)=\"dateSelected($event, 'second', selectEvent.SELECTION, true)\"\n                      *ngSwitchCase=\"'time'\"\n                      [config]=\"timeSelectConfig\"\n                      [ngModel]=\"_selected && _selected[0]\"\n                      [theme]=\"theme\">\n      </dp-time-select>\n\n      <dp-day-time-calendar #daytimeCalendar\n                            (onChange)=\"dateSelected($event, 'second', selectEvent.SELECTION, true)\"\n                            (onGoToCurrent)=\"onGoToCurrent.emit()\"\n                            (onLeftNav)=\"onLeftNavClick($event)\"\n                            (onRightNav)=\"onRightNavClick($event)\"\n                            *ngSwitchCase=\"'daytime'\"\n                            [config]=\"dayTimeCalendarConfig\"\n                            [displayDate]=\"displayDate\"\n                            [ngModel]=\"_selected && _selected[0]\"\n                            [theme]=\"theme\">\n      </dp-day-time-calendar>\n    </div>\n  </div>\n</div>\n",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                providers: [
                    DatePickerService,
                    DayTimeCalendarService,
                    DayCalendarService,
                    TimeSelectService,
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => DatePickerComponent_1),
                        multi: true
                    },
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => DatePickerComponent_1),
                        multi: true
                    }
                ],
                styles: ["dp-date-picker{display:inline-block}dp-date-picker.dp-material .dp-picker-input{box-sizing:border-box;height:30px;width:213px;font-size:13px;outline:0}dp-date-picker .dp-input-container{position:relative}dp-date-picker .dp-selected{background:#106cc8;color:#fff}.dp-popup{position:relative;background:#fff;box-shadow:1px 1px 5px 0 rgba(0,0,0,.1);border-left:1px solid rgba(0,0,0,.1);border-right:1px solid rgba(0,0,0,.1);border-bottom:1px solid rgba(0,0,0,.1);z-index:9999;white-space:nowrap}"]
            }]
    }], function () { return [{ type: DatePickerService }, { type: DomHelper }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }, { type: UtilsService }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }]; }, { mode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], open: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], close: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], onChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], onGoToCurrent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], onLeftNav: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], onRightNav: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], onSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['click']
        }], onScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['window:resize']
        }], config: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], displayDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], theme: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], minDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], maxDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], minTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], maxTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], calendarContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['container']
        }], dayCalendarRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['dayCalendar']
        }], monthCalendarRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['monthCalendar']
        }], dayTimeCalendarRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['daytimeCalendar']
        }], timeSelectRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['timeSelect']
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DatePickerDirectiveService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: UtilsService }]; }, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DatePickerDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                exportAs: 'dpDayPicker',
                providers: [DatePickerDirectiveService],
                selector: '[dpDayPicker]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] }, { type: DatePickerDirectiveService }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }] }, { type: UtilsService }]; }, { open: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], close: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], onChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], onGoToCurrent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], onLeftNav: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], onRightNav: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], onSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], config: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['dpDayPicker']
        }], attachTo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], theme: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], mode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], minDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], maxDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], minTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], maxTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], displayDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['click']
        }], onFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['focus']
        }], onEnter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['keydown.enter']
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DayCalendarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'dp-day-calendar',
                template: "<div *ngIf=\"currentCalendarMode ===  CalendarMode.Day\" class=\"dp-day-calendar-container\">\n  <dp-calendar-nav\n      (onGoToCurrent)=\"goToCurrent()\"\n      (onLabelClick)=\"toggleCalendarMode(CalendarMode.Month)\"\n      (onLeftNav)=\"onLeftNavClick()\"\n      (onRightNav)=\"onRightNavClick()\"\n      [isLabelClickable]=\"componentConfig.enableMonthSelector\"\n      [label]=\"navLabel\"\n      [showGoToCurrent]=\"_shouldShowCurrent\"\n      [showLeftNav]=\"showLeftNav\"\n      [showRightNav]=\"showRightNav\"\n      [theme]=\"theme\">\n  </dp-calendar-nav>\n\n  <div [ngClass]=\"{'dp-hide-near-month': !componentConfig.showNearMonthDays}\"\n       class=\"dp-calendar-wrapper\">\n    <div class=\"dp-weekdays\">\n      <span *ngFor=\"let weekday of weekdays\"\n            [innerText]=\"getWeekdayName(weekday)\"\n            class=\"dp-calendar-weekday\">\n      </span>\n    </div>\n    <div *ngFor=\"let week of weeks\" class=\"dp-calendar-week\">\n      <span *ngIf=\"componentConfig.showWeekNumbers\"\n            [innerText]=\"week[0].date.isoWeek()\"\n            class=\"dp-week-number\">\n      </span>\n      <button (click)=\"dayClicked(day)\"\n              *ngFor=\"let day of week\"\n              [attr.data-date]=\"day.date.format(componentConfig.format)\"\n              [disabled]=\"day.disabled\"\n              [innerText]=\"getDayBtnText(day)\"\n              [ngClass]=\"getDayBtnCssClass(day)\"\n              class=\"dp-calendar-day\"\n              type=\"button\">\n      </button>\n    </div>\n  </div>\n</div>\n\n<dp-month-calendar\n    (onLeftNav)=\"onMonthCalendarLeftClick($event)\"\n    (onLeftSecondaryNav)=\"onMonthCalendarSecondaryLeftClick($event)\"\n    (onNavHeaderBtnClick)=\"toggleCalendarMode(CalendarMode.Day)\"\n    (onRightNav)=\"onMonthCalendarRightClick($event)\"\n    (onRightSecondaryNav)=\"onMonthCalendarSecondaryRightClick($event)\"\n    (onSelect)=\"monthSelected($event)\"\n    *ngIf=\"currentCalendarMode ===  CalendarMode.Month\"\n    [config]=\"monthCalendarConfig\"\n    [displayDate]=\"_currentDateView\"\n    [ngModel]=\"_selected\"\n    [theme]=\"theme\">\n</dp-month-calendar>\n",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                providers: [
                    DayCalendarService,
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => DayCalendarComponent_1),
                        multi: true
                    },
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => DayCalendarComponent_1),
                        multi: true
                    }
                ],
                styles: ["dp-day-calendar{display:inline-block}dp-day-calendar .dp-day-calendar-container{background:#fff}dp-day-calendar .dp-calendar-wrapper{box-sizing:border-box;border:1px solid #000}dp-day-calendar .dp-calendar-wrapper .dp-calendar-weekday:first-child{border-left:none}dp-day-calendar .dp-weekdays{font-size:15px;margin-bottom:5px}dp-day-calendar .dp-calendar-weekday{box-sizing:border-box;display:inline-block;width:30px;text-align:center;border-left:1px solid #000;border-bottom:1px solid #000}dp-day-calendar .dp-calendar-day{box-sizing:border-box;width:30px;height:30px;cursor:pointer}dp-day-calendar .dp-selected{background:#106cc8;color:#fff}dp-day-calendar .dp-next-month,dp-day-calendar .dp-prev-month{opacity:.5}dp-day-calendar .dp-hide-near-month .dp-next-month,dp-day-calendar .dp-hide-near-month .dp-prev-month{visibility:hidden}dp-day-calendar .dp-week-number{position:absolute;font-size:9px}dp-day-calendar.dp-material .dp-calendar-weekday{height:25px;width:30px;line-height:25px;color:#7a7a7a;border:none}dp-day-calendar.dp-material .dp-calendar-wrapper{border:1px solid #e0e0e0}dp-day-calendar.dp-material .dp-calendar-day,dp-day-calendar.dp-material .dp-calendar-month{box-sizing:border-box;background:#fff;border-radius:50%;border:none;outline:0}dp-day-calendar.dp-material .dp-calendar-day:hover,dp-day-calendar.dp-material .dp-calendar-month:hover{background:#e0e0e0}dp-day-calendar.dp-material .dp-selected{background:#106cc8;color:#fff}dp-day-calendar.dp-material .dp-selected:hover{background:#106cc8}dp-day-calendar.dp-material .dp-current-day{border:1px solid #106cc8}"]
            }]
    }], function () { return [{ type: DayCalendarService }, { type: UtilsService }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }]; }, { onSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], onMonthSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], onNavHeaderBtnClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], onGoToCurrent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], onLeftNav: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], onRightNav: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], config: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], displayDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], minDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], maxDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], theme: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MonthCalendarService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: UtilsService }]; }, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MonthCalendarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'dp-month-calendar',
                template: "<div class=\"dp-month-calendar-container\">\n  <dp-calendar-nav\n      (onGoToCurrent)=\"goToCurrent()\"\n      (onLabelClick)=\"toggleCalendarMode()\"\n      (onLeftNav)=\"onLeftNavClick()\"\n      (onLeftSecondaryNav)=\"onLeftSecondaryNavClick()\"\n      (onRightNav)=\"onRightNavClick()\"\n      (onRightSecondaryNav)=\"onRightSecondaryNavClick()\"\n      [isLabelClickable]=\"componentConfig.isNavHeaderBtnClickable\"\n      [label]=\"navLabel\"\n      [showGoToCurrent]=\"shouldShowCurrent()\"\n      [showLeftNav]=\"showLeftNav\"\n      [showLeftSecondaryNav]=\"showSecondaryLeftNav\"\n      [showRightNav]=\"showRightNav\"\n      [showRightSecondaryNav]=\"showSecondaryRightNav\"\n      [theme]=\"theme\">\n  </dp-calendar-nav>\n\n  <div class=\"dp-calendar-wrapper\">\n    <div *ngFor=\"let monthRow of yearMonths\" class=\"dp-months-row\">\n      <button (click)=\"monthClicked(month)\"\n              *ngFor=\"let month of monthRow\"\n              [attr.data-date]=\"month.date.format(componentConfig.format)\"\n              [disabled]=\"month.disabled\"\n              [innerText]=\"month.text\"\n              [ngClass]=\"getMonthBtnCssClass(month)\"\n              class=\"dp-calendar-month\"\n              type=\"button\">\n      </button>\n    </div>\n  </div>\n</div>\n",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                providers: [
                    MonthCalendarService,
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => MonthCalendarComponent_1),
                        multi: true
                    },
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => MonthCalendarComponent_1),
                        multi: true
                    }
                ],
                styles: ["dp-month-calendar{display:inline-block}dp-month-calendar .dp-month-calendar-container{background:#fff}dp-month-calendar .dp-calendar-wrapper{border:1px solid #000}dp-month-calendar .dp-calendar-month{box-sizing:border-box;width:52.5px;height:52.5px;cursor:pointer}dp-month-calendar .dp-calendar-month.dp-selected{background:#106cc8;color:#fff}dp-month-calendar.dp-material .dp-calendar-weekday{height:25px;width:30px;line-height:25px;background:#e0e0e0;border:1px solid #e0e0e0}dp-month-calendar.dp-material .dp-calendar-wrapper{border:1px solid #e0e0e0}dp-month-calendar.dp-material .dp-calendar-month{box-sizing:border-box;background:#fff;border-radius:50%;border:none;outline:0}dp-month-calendar.dp-material .dp-calendar-month:hover{background:#e0e0e0}dp-month-calendar.dp-material .dp-selected{background:#106cc8;color:#fff}dp-month-calendar.dp-material .dp-selected:hover{background:#106cc8}dp-month-calendar.dp-material .dp-current-month{border:1px solid #106cc8}"]
            }]
    }], function () { return [{ type: MonthCalendarService }, { type: UtilsService }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }]; }, { onSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], onNavHeaderBtnClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], onGoToCurrent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], onLeftNav: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], onRightNav: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], onLeftSecondaryNav: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], onRightSecondaryNav: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], config: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], displayDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], minDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], maxDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], theme: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TimeSelectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'dp-time-select',
                template: "<ul class=\"dp-time-select-controls\">\n  <li class=\"dp-time-select-control dp-time-select-control-hours\">\n    <button (click)=\"increase('hour')\"\n            [disabled]=\"!showIncHour\"\n            class=\"dp-time-select-control-up\"\n            type=\"button\">\n    </button>\n    <span [innerText]=\"hours\"\n          class=\"dp-time-select-display-hours\">\n    </span>\n    <button (click)=\"decrease('hour')\"\n            [disabled]=\"!showDecHour\"\n            class=\"dp-time-select-control-down\"\n            type=\"button\">\n    </button>\n  </li>\n  <li [innerText]=\"componentConfig.timeSeparator\"\n      class=\"dp-time-select-control dp-time-select-separator\">\n  </li>\n  <li class=\"dp-time-select-control dp-time-select-control-minutes\">\n    <button (click)=\"increase('minute')\"\n            [disabled]=\"!showIncMinute\"\n            class=\"dp-time-select-control-up\"\n            type=\"button\"></button>\n    <span [innerText]=\"minutes\"\n          class=\"dp-time-select-display-minutes\">\n    </span>\n    <button (click)=\"decrease('minute')\"\n            [disabled]=\"!showDecMinute\" class=\"dp-time-select-control-down\"\n            type=\"button\">\n    </button>\n  </li>\n  <ng-container *ngIf=\"componentConfig.showSeconds\">\n    <li [innerText]=\"componentConfig.timeSeparator\"\n        class=\"dp-time-select-control dp-time-select-separator\">\n    </li>\n    <li class=\"dp-time-select-control dp-time-select-control-seconds\">\n      <button (click)=\"increase('second')\"\n              [disabled]=\"!showIncSecond\"\n              class=\"dp-time-select-control-up\"\n              type=\"button\"></button>\n      <span [innerText]=\"seconds\"\n            class=\"dp-time-select-display-seconds\">\n      </span>\n      <button (click)=\"decrease('second')\"\n              [disabled]=\"!showDecSecond\"\n              class=\"dp-time-select-control-down\"\n              type=\"button\">\n      </button>\n    </li>\n  </ng-container>\n  <li *ngIf=\"!componentConfig.showTwentyFourHours\" class=\"dp-time-select-control dp-time-select-control-meridiem\">\n    <button (click)=\"toggleMeridiem()\"\n            [disabled]=\"!showToggleMeridiem\"\n            class=\"dp-time-select-control-up\"\n            type=\"button\">\n    </button>\n    <span [innerText]=\"meridiem\"\n          class=\"dp-time-select-display-meridiem\">\n    </span>\n    <button (click)=\"toggleMeridiem()\"\n            [disabled]=\"!showToggleMeridiem\"\n            class=\"dp-time-select-control-down\"\n            type=\"button\">\n    </button>\n  </li>\n</ul>\n",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                providers: [
                    TimeSelectService,
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => TimeSelectComponent_1),
                        multi: true
                    },
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => TimeSelectComponent_1),
                        multi: true
                    }
                ],
                styles: ["dp-time-select{display:inline-block}dp-time-select .dp-time-select-controls{margin:0;padding:0;text-align:center;line-height:normal;background:#fff}dp-time-select .dp-time-select-control{display:inline-block;width:35px;margin:0 auto;vertical-align:middle;font-size:inherit;letter-spacing:1px}dp-time-select .dp-time-select-control-down,dp-time-select .dp-time-select-control-up{position:relative;display:block;width:24px;height:24px;margin:3px auto;cursor:pointer}dp-time-select .dp-time-select-control-down::before,dp-time-select .dp-time-select-control-up::before{position:relative;content:'';display:inline-block;height:8px;width:8px;vertical-align:baseline;border-style:solid;border-width:2px 2px 0 0}dp-time-select .dp-time-select-control-up::before{transform:rotate(-45deg);top:4px}dp-time-select .dp-time-select-control-down::before{transform:rotate(135deg)}dp-time-select .dp-time-select-separator{width:5px}dp-time-select.dp-material .dp-time-select-control-down,dp-time-select.dp-material .dp-time-select-control-up{box-sizing:border-box;background:0 0;border:none;outline:0;border-radius:50%}dp-time-select.dp-material .dp-time-select-control-down::before,dp-time-select.dp-material .dp-time-select-control-up::before{left:0}dp-time-select.dp-material .dp-time-select-control-down:hover,dp-time-select.dp-material .dp-time-select-control-up:hover{background:#e0e0e0}"]
            }]
    }], function () { return [{ type: TimeSelectService }, { type: UtilsService }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }]; }, { onChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], config: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], displayDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], minDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], maxDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], minTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], maxTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], theme: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CalendarNavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'dp-calendar-nav',
                template: "<div class=\"dp-calendar-nav-container\">\n  <div class=\"dp-nav-header\">\n    <span [attr.data-hidden]=\"isLabelClickable\"\n          [hidden]=\"isLabelClickable\"\n          [innerText]=\"label\">\n    </span>\n    <button (click)=\"labelClicked()\"\n            [attr.data-hidden]=\"!isLabelClickable\"\n            [hidden]=\"!isLabelClickable\"\n            [innerText]=\"label\"\n            class=\"dp-nav-header-btn\"\n            type=\"button\">\n    </button>\n  </div>\n\n  <div class=\"dp-nav-btns-container\">\n    <div class=\"dp-calendar-nav-container-left\">\n      <button (click)=\"leftSecondaryNavClicked()\"\n              *ngIf=\"showLeftSecondaryNav\"\n              [disabled]=\"leftSecondaryNavDisabled\"\n              class=\"dp-calendar-secondary-nav-left\"\n              type=\"button\">\n      </button>\n      <button (click)=\"leftNavClicked()\"\n              [attr.data-hidden]=\"!showLeftNav\"\n              [disabled]=\"leftNavDisabled\"\n              [hidden]=\"!showLeftNav\"\n              class=\"dp-calendar-nav-left\"\n              type=\"button\">\n      </button>\n    </div>\n    <button (click)=\"onGoToCurrent.emit()\"\n            *ngIf=\"showGoToCurrent\"\n            class=\"dp-current-location-btn\"\n            type=\"button\">\n    </button>\n    <div class=\"dp-calendar-nav-container-right\">\n      <button (click)=\"rightNavClicked()\"\n              [attr.data-hidden]=\"!showRightNav\"\n              [disabled]=\"rightNavDisabled\"\n              [hidden]=\"!showRightNav\"\n              class=\"dp-calendar-nav-right\"\n              type=\"button\">\n      </button>\n      <button (click)=\"rightSecondaryNavClicked()\"\n              *ngIf=\"showRightSecondaryNav\"\n              [disabled]=\"rightSecondaryNavDisabled\"\n              class=\"dp-calendar-secondary-nav-right\"\n              type=\"button\">\n      </button>\n    </div>\n  </div>\n</div>\n",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                styles: ["dp-calendar-nav .dp-calendar-nav-container{position:relative;box-sizing:border-box;height:25px;border:1px solid #000;border-bottom:none}dp-calendar-nav .dp-nav-date-btn{box-sizing:border-box;height:25px;border:1px solid #000;border-bottom:none}dp-calendar-nav .dp-nav-btns-container{position:absolute;top:50%;transform:translateY(-50%);right:5px;display:inline-block}dp-calendar-nav .dp-calendar-nav-container-left,dp-calendar-nav .dp-calendar-nav-container-right{display:inline-block}dp-calendar-nav .dp-calendar-nav-left,dp-calendar-nav .dp-calendar-nav-right,dp-calendar-nav .dp-calendar-secondary-nav-left,dp-calendar-nav .dp-calendar-secondary-nav-right{position:relative;width:16px;cursor:pointer}dp-calendar-nav .dp-calendar-nav-left,dp-calendar-nav .dp-calendar-nav-right{line-height:0}dp-calendar-nav .dp-calendar-nav-left::before,dp-calendar-nav .dp-calendar-nav-right::before{position:relative;content:'';display:inline-block;height:8px;width:8px;vertical-align:baseline;border-style:solid;border-width:2px 2px 0 0;transform:rotate(45deg)}dp-calendar-nav .dp-calendar-secondary-nav-left,dp-calendar-nav .dp-calendar-secondary-nav-right{padding:0}dp-calendar-nav .dp-calendar-secondary-nav-left::after,dp-calendar-nav .dp-calendar-secondary-nav-left::before,dp-calendar-nav .dp-calendar-secondary-nav-right::after,dp-calendar-nav .dp-calendar-secondary-nav-right::before{position:relative;content:'';display:inline-block;height:8px;width:8px;vertical-align:baseline;border-style:solid;border-width:2px 2px 0 0;transform:rotate(45deg)}dp-calendar-nav .dp-calendar-secondary-nav-left::before,dp-calendar-nav .dp-calendar-secondary-nav-right::before{right:-10px}dp-calendar-nav .dp-calendar-secondary-nav-right{left:initial;right:5px}dp-calendar-nav .dp-calendar-nav-left::before,dp-calendar-nav .dp-calendar-secondary-nav-left::after,dp-calendar-nav .dp-calendar-secondary-nav-left::before{position:relative;content:'';display:inline-block;height:8px;width:8px;vertical-align:baseline;border-style:solid;border-width:2px 2px 0 0;transform:rotate(-135deg)}dp-calendar-nav .dp-calendar-secondary-nav-left::before{right:-10px}dp-calendar-nav .dp-nav-header{position:absolute;top:50%;transform:translateY(-50%);left:5px;display:inline-block;font-size:13px}dp-calendar-nav .dp-nav-header-btn{cursor:pointer}dp-calendar-nav .dp-current-location-btn{position:relative;top:-1px;height:16px;width:16px;vertical-align:middle;background:rgba(0,0,0,.6);border:1px solid rgba(0,0,0,.6);outline:0;border-radius:50%;box-shadow:inset 0 0 0 3px #fff;cursor:pointer}dp-calendar-nav .dp-current-location-btn:hover{background:#000}dp-calendar-nav.dp-material .dp-calendar-nav-container{height:30px;border:1px solid #e0e0e0}dp-calendar-nav.dp-material .dp-calendar-nav-left,dp-calendar-nav.dp-material .dp-calendar-nav-right,dp-calendar-nav.dp-material .dp-calendar-secondary-nav-left,dp-calendar-nav.dp-material .dp-calendar-secondary-nav-right{border:none;background:#fff;outline:0;font-size:16px;padding:0}dp-calendar-nav.dp-material .dp-calendar-secondary-nav-left,dp-calendar-nav.dp-material .dp-calendar-secondary-nav-right{width:20px}dp-calendar-nav.dp-material .dp-nav-header-btn{height:20px;width:80px;border:none;background:#fff;outline:0}dp-calendar-nav.dp-material .dp-nav-header-btn:hover{background:rgba(0,0,0,.05)}dp-calendar-nav.dp-material .dp-nav-header-btn:active{background:rgba(0,0,0,.1)}"]
            }]
    }], function () { return []; }, { isLabelClickable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], showLeftNav: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], showLeftSecondaryNav: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], showRightNav: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], showRightSecondaryNav: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], leftNavDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], leftSecondaryNavDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], rightNavDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], rightSecondaryNavDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], showGoToCurrent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], onLeftNav: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], onLeftSecondaryNav: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], onRightNav: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], onRightSecondaryNav: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], onLabelClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], onGoToCurrent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], theme: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DayTimeCalendarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'dp-day-time-calendar',
                template: "<dp-day-calendar #dayCalendar\n                 (onGoToCurrent)=\"onGoToCurrent.emit()\"\n                 (onLeftNav)=\"onLeftNavClick($event)\"\n                 (onRightNav)=\"onRightNavClick($event)\"\n                 (onSelect)=\"dateSelected($event)\"\n                 [config]=\"componentConfig\"\n                 [displayDate]=\"displayDate\"\n                 [ngModel]=\"_selected\"\n                 [theme]=\"theme\">\n</dp-day-calendar>\n<dp-time-select #timeSelect\n                (onChange)=\"timeChange($event)\"\n                [config]=\"componentConfig\"\n                [ngModel]=\"_selected\"\n                [theme]=\"theme\">\n</dp-time-select>\n",
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                providers: [
                    DayTimeCalendarService,
                    DayCalendarService,
                    TimeSelectService,
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => DayTimeCalendarComponent_1),
                        multi: true
                    },
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => DayTimeCalendarComponent_1),
                        multi: true
                    }
                ],
                styles: ["dp-day-time-calendar{display:inline-block}dp-day-time-calendar dp-time-select{display:block;border:1px solid #000;border-top:0}dp-day-time-calendar.dp-material dp-time-select{border:1px solid #e0e0e0;border-top:0}"]
            }]
    }], function () { return [{ type: DayTimeCalendarService }, { type: UtilsService }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }]; }, { onChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], onGoToCurrent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], onLeftNav: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], onRightNav: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], config: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], displayDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], minDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], maxDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], theme: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], dayCalendarRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['dayCalendar']
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DpDatePickerModule, { declarations: function () { return [DatePickerComponent,
        DatePickerDirective,
        DayCalendarComponent,
        MonthCalendarComponent,
        CalendarNavComponent,
        TimeSelectComponent,
        DayTimeCalendarComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]; }, exports: function () { return [DatePickerComponent,
        DatePickerDirective,
        MonthCalendarComponent,
        DayCalendarComponent,
        TimeSelectComponent,
        DayTimeCalendarComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DpDatePickerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    DatePickerComponent,
                    DatePickerDirective,
                    DayCalendarComponent,
                    MonthCalendarComponent,
                    CalendarNavComponent,
                    TimeSelectComponent,
                    DayTimeCalendarComponent
                ],
                entryComponents: [
                    DatePickerComponent
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
                ],
                exports: [
                    DatePickerComponent,
                    DatePickerDirective,
                    MonthCalendarComponent,
                    DayCalendarComponent,
                    TimeSelectComponent,
                    DayTimeCalendarComponent
                ]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ng2-date-picker.js.map

/***/ }),

/***/ "./src/app/cart/components/add-cart/add-cart.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/cart/components/add-cart/add-cart.component.ts ***!
  \****************************************************************/
/*! exports provided: AddCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCartComponent", function() { return AddCartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _cart_checkout_cart_checkout_metadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cart-checkout/cart_checkout_metadata */ "./src/app/cart/components/cart-checkout/cart_checkout_metadata.ts");
/* harmony import */ var src_app_shared_payment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/payment.service */ "./src/app/shared/payment.service.ts");






const _c0 = ["cardElement"];
class AddCartComponent {
    constructor(formBuilder, 
    // tslint:disable-next-line:align
    paymentService) {
        this.formBuilder = formBuilder;
        this.paymentService = paymentService;
        this.CART_CHECKOUT_METADATA = _cart_checkout_cart_checkout_metadata__WEBPACK_IMPORTED_MODULE_2__["CART_CHECKOUT_METADATA"];
    }
    ngOnInit() {
        this.createGuestForm();
        // this.getPublishableKey();
        // this.addStripeElement();
    }
    createGuestForm() {
        this.paymentForm = this.formBuilder.group({
            [_cart_checkout_cart_checkout_metadata__WEBPACK_IMPORTED_MODULE_2__["CART_CHECKOUT_METADATA"].cardName]: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            [_cart_checkout_cart_checkout_metadata__WEBPACK_IMPORTED_MODULE_2__["CART_CHECKOUT_METADATA"].vehicleInfo]: this.formBuilder.group({
                [_cart_checkout_cart_checkout_metadata__WEBPACK_IMPORTED_MODULE_2__["CART_CHECKOUT_METADATA"].licenseNumber]: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)]],
                [_cart_checkout_cart_checkout_metadata__WEBPACK_IMPORTED_MODULE_2__["CART_CHECKOUT_METADATA"].vehicleMake]: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(100)]],
                [_cart_checkout_cart_checkout_metadata__WEBPACK_IMPORTED_MODULE_2__["CART_CHECKOUT_METADATA"].vehicleModel]: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)]],
            }),
        });
    }
    getPublishableKey() {
        this.paymentService.getPublishableKey()
            .subscribe((response) => {
            this.stripe = Stripe(response.data.publishableKey);
        });
    }
    addStripeElement() {
        const elements = this.stripe && this.stripe.elements();
        this.card = elements && elements.create('card', {
            classes: {
                base: 'form-control'
            }
        });
        this.card.mount(this.cardElement.nativeElement);
        this.card.addEventListener('change', (event) => {
            this.isValidCard = !event.complete;
            this.isValidCreditCard = event.complete;
            this.cardErrors = event.error ? event.error.message : null;
        });
    }
}
AddCartComponent.ɵfac = function AddCartComponent_Factory(t) { return new (t || AddCartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_payment_service__WEBPACK_IMPORTED_MODULE_3__["PaymentService"])); };
AddCartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddCartComponent, selectors: [["app-add-cart"]], viewQuery: function AddCartComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.cardElement = _t.first);
    } }, decls: 15, vars: 3, consts: [["action", "", 3, "formGroup"], [1, "row", "no-gutters"], [1, "col-lg-6", "col-md-8", "col-12", "px-2"], [1, "form-group"], ["for", "card-name"], ["type", "text", "id", "card-name", "aria-describedby", "cardname", "placeholder", "Card Name", 1, "form-control", 2, "min-height", "2.75rem", 3, "formControlName"], ["for", "card-element"], ["id", "card-element", 1, "border-style"], ["cardElement", ""], ["id", "card-error", "role", "alert", 1, "text-danger", "mb-0"]], template: function AddCartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Card holder name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Credit or debit number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.paymentForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx.CART_CHECKOUT_METADATA.cardName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.cardErrors);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcnQvY29tcG9uZW50cy9hZGQtY2FydC9hZGQtY2FydC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddCartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-cart',
                templateUrl: './add-cart.component.html',
                styleUrls: ['./add-cart.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_shared_payment_service__WEBPACK_IMPORTED_MODULE_3__["PaymentService"] }]; }, { cardElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['cardElement']
        }] }); })();


/***/ }),

/***/ "./src/app/cart/components/cart-checkout/cart_checkout_metadata.ts":
/*!*************************************************************************!*\
  !*** ./src/app/cart/components/cart-checkout/cart_checkout_metadata.ts ***!
  \*************************************************************************/
/*! exports provided: CART_CHECKOUT_METADATA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CART_CHECKOUT_METADATA", function() { return CART_CHECKOUT_METADATA; });
const CART_CHECKOUT_METADATA = {
    card: 'card',
    cardName: 'cardName',
    cardNumber: 'cardNumber',
    expiration: 'expiration',
    cvc: 'cvc',
    email: 'email',
    phone: 'phone',
    vehicleId: 'vehicleId',
    addLater: 'addLater',
    vehicleInfo: 'vehicleInfo',
    licenseNumber: 'licenseNumber',
    vehicleMake: 'vehicleMake',
    vehicleModel: 'vehicleModel',
    vehicleColor: 'vehicleColor',
};


/***/ }),

/***/ "./src/app/model/cart/cart.model.ts":
/*!******************************************!*\
  !*** ./src/app/model/cart/cart.model.ts ***!
  \******************************************/
/*! exports provided: Cart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cart", function() { return Cart; });
class Cart {
}


/***/ }),

/***/ "./src/app/shared/payment.service.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/payment.service.ts ***!
  \*******************************************/
/*! exports provided: PaymentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentService", function() { return PaymentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _routes_apiroutes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes/apiroutes */ "./src/app/shared/routes/apiroutes.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class PaymentService {
    constructor(http) {
        this.http = http;
    }
    createPaymentIntent(purchase) {
        return this.http.post(_routes_apiroutes__WEBPACK_IMPORTED_MODULE_1__["apiRoutes"].payment.createPaymentIntent, purchase);
    }
    GetPaymentMethodsById() {
        return this.http.get(`${_routes_apiroutes__WEBPACK_IMPORTED_MODULE_1__["apiRoutes"].payment.GetPaymentMethodsById}`);
    }
    getPublishableKey() {
        return this.http.get(`${_routes_apiroutes__WEBPACK_IMPORTED_MODULE_1__["apiRoutes"].payment.getPublishableKey}`);
    }
    chargeCustomerByPaymentId(chargeCustomer) {
        return this.http.post(_routes_apiroutes__WEBPACK_IMPORTED_MODULE_1__["apiRoutes"].payment.chargeCustomerByPaymentId, chargeCustomer);
    }
    addBookingDetails(bookingRequest) {
        return this.http.post(_routes_apiroutes__WEBPACK_IMPORTED_MODULE_1__["apiRoutes"].booking.addBookingDetails, bookingRequest);
    }
    getBookingDetailsById(bookingID) {
        return this.http.get(`${_routes_apiroutes__WEBPACK_IMPORTED_MODULE_1__["apiRoutes"].booking.getOrderDetailsById}?bookingID=${bookingID}`);
    }
    cardPaymentIntent(cardSetupRequest) {
        return this.http.post(_routes_apiroutes__WEBPACK_IMPORTED_MODULE_1__["apiRoutes"].payment.cardSetup, cardSetupRequest);
    }
    saveCardDetails(attachPaymentRequest) {
        return this.http.post(_routes_apiroutes__WEBPACK_IMPORTED_MODULE_1__["apiRoutes"].payment.saveCard, attachPaymentRequest);
    }
    updatePaymentDetails(updatePaymentRequest) {
        return this.http.post(_routes_apiroutes__WEBPACK_IMPORTED_MODULE_1__["apiRoutes"].payment.updatePaymentDetails, updatePaymentRequest);
    }
    deletePaymentCardDetails(cardId) {
        return this.http.post(`${_routes_apiroutes__WEBPACK_IMPORTED_MODULE_1__["apiRoutes"].booking.deletePaymentCardDetails}?cardId=${cardId}`, null);
    }
    raiseRefundRequest(refundRequest) {
        return this.http.post(`${_routes_apiroutes__WEBPACK_IMPORTED_MODULE_1__["apiRoutes"].payment.refundPayment}`, refundRequest);
    }
}
PaymentService.ɵfac = function PaymentService_Factory(t) { return new (t || PaymentService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
PaymentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PaymentService, factory: PaymentService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaymentService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=default~cart-cart-module~details-details-module~search-search-module-es2015.js.map