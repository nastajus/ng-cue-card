(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "Inspired by <a href=\"https://ncase.me/remember/\">Spaced Repetition Cue Cards Shoebox system</a>\r\n\r\n<!-- <app-test-box></app-test-box> -->\r\n\r\n<app-quiz></app-quiz>\r\n\r\n<app-cue-card-shoe-box></app-cue-card-shoe-box>\r\n\r\n<app-cue-card-selector></app-cue-card-selector>\r\n\r\n<app-cue-card-list></app-cue-card-list>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ng-cue-cards';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_cue_card_cue_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/cue-card/cue-card.component */ "./src/app/components/cue-card/cue-card.component.ts");
/* harmony import */ var _components_cue_card_list_cue_card_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/cue-card-list/cue-card-list.component */ "./src/app/components/cue-card-list/cue-card-list.component.ts");
/* harmony import */ var _services_db_fake_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/db-fake.service */ "./src/app/services/db-fake.service.ts");
/* harmony import */ var _components_cue_card_entry_form_cue_card_entry_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/cue-card-entry-form/cue-card-entry-form.component */ "./src/app/components/cue-card-entry-form/cue-card-entry-form.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_cue_card_selector_cue_card_selector_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/cue-card-selector/cue-card-selector.component */ "./src/app/components/cue-card-selector/cue-card-selector.component.ts");
/* harmony import */ var _components_cue_card_shoe_box_cue_card_shoe_box_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/cue-card-shoe-box/cue-card-shoe-box.component */ "./src/app/components/cue-card-shoe-box/cue-card-shoe-box.component.ts");
/* harmony import */ var _components_test_test_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/test/test.component */ "./src/app/components/test/test.component.ts");
/* harmony import */ var _components_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/quiz/quiz.component */ "./src/app/components/quiz/quiz.component.ts");
/* harmony import */ var _components_study_topic_study_topic_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/study-topic/study-topic.component */ "./src/app/components/study-topic/study-topic.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
















// import entire icon styles. But be careful! Whatever you import may end up bloating your final bundle with icons you're not using.


//import { fab } from '@fortawesome/free-brands-svg-icons';

_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_18__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__["fas"], _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_17__["far"]);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_cue_card_cue_card_component__WEBPACK_IMPORTED_MODULE_5__["CueCardComponent"],
                _components_cue_card_list_cue_card_list_component__WEBPACK_IMPORTED_MODULE_6__["CueCardListComponent"],
                _components_cue_card_entry_form_cue_card_entry_form_component__WEBPACK_IMPORTED_MODULE_8__["CueCardEntryFormComponent"],
                _components_cue_card_selector_cue_card_selector_component__WEBPACK_IMPORTED_MODULE_10__["CueCardSelectorComponent"],
                _components_cue_card_shoe_box_cue_card_shoe_box_component__WEBPACK_IMPORTED_MODULE_11__["CueCardShoeBoxComponent"],
                _components_test_test_component__WEBPACK_IMPORTED_MODULE_12__["TestComponent"],
                _components_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_13__["QuizComponent"],
                _components_study_topic_study_topic_component__WEBPACK_IMPORTED_MODULE_14__["StudyTopicComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_15__["FontAwesomeModule"]
            ],
            providers: [_services_db_fake_service__WEBPACK_IMPORTED_MODULE_7__["DbFakeService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            entryComponents: [_components_cue_card_cue_card_component__WEBPACK_IMPORTED_MODULE_5__["CueCardComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/cue-card-entry-form/cue-card-entry-form.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/cue-card-entry-form/cue-card-entry-form.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  <strong>cue-card-entry-form works!</strong>\r\n</p>\r\n\r\n<ng-container *ngIf=\"(ccLoaderService.cueCards$ | async) as cueCards\">\r\n\r\n<div class=\"scene-temporary-boundary\">\r\n  <form [formGroup]=\"ccEntryForm\">\r\n\r\n    <ul class=\"flex\">\r\n      <li>\r\n        <label for=\"f_question\">Question:</label><input formControlName=\"question\" id=\"f_question\">\r\n      </li>\r\n      <li>\r\n        <label for=\"f_answer\">Answer:</label>\r\n        <input formControlName=\"answer\" id=\"f_answer\">\r\n      </li>\r\n      <li>\r\n        <span *ngIf=\"question.invalid && (question.touched || answer.touched)\">Please input at least either a question,\r\n          an answer, or both.</span>\r\n      </li>\r\n      <li>\r\n        <button (click)=\"submitHandler(ccEntryForm.value)\"\r\n          [disabled]=\"!question.valid && !answer.valid\">{{ccLoaderService.cueCardActive === null ? 'Add' : 'Save'}}</button>\r\n        <button (click)=\"clearFormValues()\" [disabled]=\"!question.valid && !answer.valid\">Clear</button>\r\n        <button (click)=\"deleteFromService()\"\r\n          [disabled]=\"cueCards.length <= 0 || ccLoaderService.cueCardActive === null\">Delete</button>\r\n      </li>\r\n      <li>\r\n        <div *ngIf=\"successfulSubmissionTimer?.counter.valueOf() > 0\">Successfully Saved New Cue Card!</div>\r\n      </li>\r\n      Test: {{ ccEntryForm.value | json }}\r\n    </ul>\r\n\r\n  </form>\r\n\r\n</div>\r\n</ng-container>\r\n\r\n<hr>"

/***/ }),

/***/ "./src/app/components/cue-card-entry-form/cue-card-entry-form.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/cue-card-entry-form/cue-card-entry-form.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3VlLWNhcmQtZW50cnktZm9ybS9jdWUtY2FyZC1lbnRyeS1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/cue-card-entry-form/cue-card-entry-form.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/cue-card-entry-form/cue-card-entry-form.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CueCardEntryFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CueCardEntryFormComponent", function() { return CueCardEntryFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_cue_card_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/cue-card-loader.service */ "./src/app/services/cue-card-loader.service.ts");
/* harmony import */ var src_app_models_cue_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/cue-card */ "./src/app/models/cue-card.ts");





var CueCardEntryFormComponent = /** @class */ (function () {
    function CueCardEntryFormComponent(fb, ccLoaderService) {
        var _this = this;
        this.fb = fb;
        this.ccLoaderService = ccLoaderService;
        //TODO: unsubscribe?
        ccLoaderService.cueCardActive$.subscribe(function (cueCard) {
            _this.cueCardUpdateTo(cueCard);
        });
    }
    Object.defineProperty(CueCardEntryFormComponent.prototype, "question", {
        get: function () {
            return this.ccEntryForm.get('question');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CueCardEntryFormComponent.prototype, "answer", {
        get: function () {
            return this.ccEntryForm.get('answer');
        },
        enumerable: true,
        configurable: true
    });
    CueCardEntryFormComponent.prototype.ngOnInit = function () {
        this.cueCardUpdateTo(this.ccLoaderService.cueCardActive);
    };
    CueCardEntryFormComponent.prototype.cueCardUpdateTo = function (cueCardActive) {
        //ugly nested ternary operator, as TS doesn't yet support Null-conditional operators
        var q = cueCardActive == null ? '' : (cueCardActive.question == null ? '' : cueCardActive.question);
        var a = cueCardActive == null ? '' : (cueCardActive.answer == null ? '' : cueCardActive.answer);
        this.ccEntryForm = this.fb.group({
            question: [q, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            answer: [a, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        }, { validator: this.customValidationFunction });
        //this captures output when user types in the input field, bc `valueChanges` is an Observable
        this.ccEntryForm.valueChanges.subscribe(console.log);
    };
    //allow either field Q or A to be a valid cue card. 
    CueCardEntryFormComponent.prototype.customValidationFunction = function (formGroup) {
        // don't understand why question|answer are undefined. =/
        // let question = this.question.value;
        // let answer = this.answer.value;
        var question = formGroup.controls['question'].value;
        var answer = formGroup.controls['answer'].value;
        var result = {};
        //don't understand why ['answer'].value returns empty string "" instead of null. =/    
        //if (question !== null) { result.questionHasContent = true };
        //if (answer !== null) { result.answerHasContent = true };
        if (question !== "") {
            Object.assign(result, { questionHasContent: true });
        }
        ;
        if (answer !== "") {
            Object.assign(result, { answerHasContent: true });
        }
        ;
        return result === {} ? null : result;
    };
    //submit handles both Edit and Add scenarios
    CueCardEntryFormComponent.prototype.submitHandler = function (currentFormsCueCard) {
        if (this.ccLoaderService.cueCardActive !== null && currentFormsCueCard !== null) {
            this.editInService(currentFormsCueCard);
        }
        else {
            this.addToService();
        }
    };
    CueCardEntryFormComponent.prototype.addToService = function () {
        var cueCard = new src_app_models_cue_card__WEBPACK_IMPORTED_MODULE_4__["CueCard"](this.question.value, this.answer.value);
        var successful = false;
        try {
            this.ccLoaderService.add(cueCard);
            successful = true;
            this.successfulSubmissionTimer = new Timer();
        }
        catch (err) {
            console.error(err);
        }
        if (successful) {
            this.clearFormValues();
        }
    };
    CueCardEntryFormComponent.prototype.editInService = function (newCueCard) {
        try {
            this.ccLoaderService.edit(this.ccLoaderService.cueCardActive, newCueCard);
        }
        catch (err) {
            console.error(err);
        }
    };
    CueCardEntryFormComponent.prototype.deleteFromService = function () {
        try {
            this.ccLoaderService.delete(this.ccLoaderService.cueCardActive);
        }
        catch (err) {
            console.error(err);
        }
    };
    CueCardEntryFormComponent.prototype.clearFormValues = function () {
        //reset() affects restors to `untouched` state, but also puts `null`. want '' instead.
        this.question.reset();
        this.question.setValue('');
        this.answer.reset();
        this.answer.setValue('');
    };
    CueCardEntryFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cue-card-entry-form',
            template: __webpack_require__(/*! ./cue-card-entry-form.component.html */ "./src/app/components/cue-card-entry-form/cue-card-entry-form.component.html"),
            styles: [__webpack_require__(/*! ./cue-card-entry-form.component.scss */ "./src/app/components/cue-card-entry-form/cue-card-entry-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_services_cue_card_loader_service__WEBPACK_IMPORTED_MODULE_3__["CueCardLoaderService"]])
    ], CueCardEntryFormComponent);
    return CueCardEntryFormComponent;
}());

// just for limiting viewing time of "success!" message
var Timer = /** @class */ (function () {
    function Timer(counter) {
        if (counter === void 0) { counter = 2; }
        var _this = this;
        this.counter = counter;
        var intervalId = setInterval(function () {
            _this.counter = _this.counter - 1;
            console.log(_this.counter);
            if (_this.counter === 0)
                clearInterval(intervalId);
        }, 1000);
    }
    return Timer;
}());


/***/ }),

/***/ "./src/app/components/cue-card-list/cue-card-list.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/cue-card-list/cue-card-list.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3VlLWNhcmQtbGlzdC9jdWUtY2FyZC1saXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/cue-card-list/cue-card-list.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/cue-card-list/cue-card-list.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  <strong>cue card list</strong>\r\n</p>\r\n\r\n<ul>\r\n  <li *ngFor=\"let cueCard of (ccLoaderService.cueCards$ | async);\">\r\n    <app-cue-card [cueCard]=\"cueCard\"></app-cue-card>\r\n  </li>\r\n</ul>\r\n\r\nTest: <pre>{{ccLoaderService.cueCards$ | async | json}}</pre>\r\n"

/***/ }),

/***/ "./src/app/components/cue-card-list/cue-card-list.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/cue-card-list/cue-card-list.component.ts ***!
  \*********************************************************************/
/*! exports provided: CueCardListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CueCardListComponent", function() { return CueCardListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_cue_card_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/cue-card-loader.service */ "./src/app/services/cue-card-loader.service.ts");



var CueCardListComponent = /** @class */ (function () {
    function CueCardListComponent(ccLoaderService) {
        this.ccLoaderService = ccLoaderService;
    }
    CueCardListComponent.prototype.ngOnInit = function () {
    };
    CueCardListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cue-card-list',
            template: __webpack_require__(/*! ./cue-card-list.component.html */ "./src/app/components/cue-card-list/cue-card-list.component.html"),
            styles: [__webpack_require__(/*! ./cue-card-list.component.css */ "./src/app/components/cue-card-list/cue-card-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_cue_card_loader_service__WEBPACK_IMPORTED_MODULE_2__["CueCardLoaderService"]])
    ], CueCardListComponent);
    return CueCardListComponent;
}());



/***/ }),

/***/ "./src/app/components/cue-card-selector/cue-card-selector.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/cue-card-selector/cue-card-selector.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3VlLWNhcmQtc2VsZWN0b3IvY3VlLWNhcmQtc2VsZWN0b3IuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/cue-card-selector/cue-card-selector.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/cue-card-selector/cue-card-selector.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  <strong>cue-card-selector works!</strong>\r\n</p>\r\n\r\n<ng-container *ngIf=\"(ccLoaderService.cueCards$ | async) as cueCards\">\r\n<ul class=\"flex\">\r\n  <li>\r\n    <select class=\"cc-select\" [(ngModel)]=\"ccLoaderService.cueCardActive\">\r\n      <option *ngFor=\"let cueCard of cueCards\" [ngValue]=\"cueCard\" class=\"cc-option\">{{cueCard.question}}</option>\r\n    </select>\r\n  </li>\r\n  <li>\r\n    <button (click)=\"editHandler()\">Open Editor<span *ngIf=\"ccLoaderService.cueCardActive\"> for selected</span></button> <button (click)=\"cancelHandler()\">Close Editor</button>\r\n  </li>\r\n  <li>\r\n    Test: {{ccLoaderService.cueCardActive | json}} {{ cueCards.length | json }}\r\n  </li>\r\n</ul>\r\n</ng-container>\r\n\r\n<hr>\r\n\r\n<app-cue-card-entry-form *ngIf=\"uglyEditStateTracker\"></app-cue-card-entry-form>\r\n"

/***/ }),

/***/ "./src/app/components/cue-card-selector/cue-card-selector.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/cue-card-selector/cue-card-selector.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CueCardSelectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CueCardSelectorComponent", function() { return CueCardSelectorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_cue_card_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/cue-card-loader.service */ "./src/app/services/cue-card-loader.service.ts");



var CueCardSelectorComponent = /** @class */ (function () {
    function CueCardSelectorComponent(ccLoaderService) {
        this.ccLoaderService = ccLoaderService;
        this.uglyEditStateTracker = false; //replace with more reactive design
    }
    CueCardSelectorComponent.prototype.ngOnInit = function () {
    };
    CueCardSelectorComponent.prototype.editHandler = function () {
        this.uglyEditStateTracker = true;
    };
    CueCardSelectorComponent.prototype.cancelHandler = function () {
        this.uglyEditStateTracker = false;
        this.ccLoaderService.cueCardActive = null;
    };
    CueCardSelectorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cue-card-selector',
            template: __webpack_require__(/*! ./cue-card-selector.component.html */ "./src/app/components/cue-card-selector/cue-card-selector.component.html"),
            styles: [__webpack_require__(/*! ./cue-card-selector.component.css */ "./src/app/components/cue-card-selector/cue-card-selector.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_cue_card_loader_service__WEBPACK_IMPORTED_MODULE_2__["CueCardLoaderService"]])
    ], CueCardSelectorComponent);
    return CueCardSelectorComponent;
}());



/***/ }),

/***/ "./src/app/components/cue-card-shoe-box/cue-card-shoe-box.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/cue-card-shoe-box/cue-card-shoe-box.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  <strong>cue-card-shoe-box works!</strong>\r\n</p>\r\n\r\n<div class=\"scene\">\r\n  <div class=\"box show-iso\">\r\n    <div id=\"faces\">\r\n        <!-- <div class=\"box__face box__face--top\">top</div> -->\r\n        <div class=\"box__face box__face--bottom\">bottom</div>\r\n        <div class=\"box__face box__face--back\">back</div>\r\n        <div class=\"box__face box__face--front\">front</div>\r\n        <div class=\"box__face box__face--left\">left</div>\r\n        <div class=\"box__face box__face--right\">right</div>    \r\n    </div>\r\n\r\n    <div id=\"cards\">\r\n      <ng-container *ngFor=\"let cueCard of (ccLoaderService.cueCards$ | async); let i = index;\">\r\n        <app-cue-card [cueCard]=\"cueCard\" class=\"put-card-in-box\" shoeBox=\"anyStringAtAll\" [id]=\"'bcc'+i\" [ccId]=\"'bcc'+i\" #cc></app-cue-card>\r\n      </ng-container>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\nTest: <pre>{{ ccLoaderService.cueCards$ | async | json }}</pre>\r\n"

/***/ }),

/***/ "./src/app/components/cue-card-shoe-box/cue-card-shoe-box.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/cue-card-shoe-box/cue-card-shoe-box.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex li {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center; }\n\n.flex > li > label {\n  flex: 1 0 50px;\n  max-width: 100px; }\n\n/* We tell all items to be 200px width, via flex-basis */\n\n.flex > li > label + * {\n  flex: 3 1 100px; }\n\n.flex li button {\n  margin: auto;\n  padding: 22px 46px; }\n\n.scene {\n  -webkit-perspective: 800px;\n          perspective: 800px;\n  width: 768px;\n  height: 512px;\n  border: 2px dashed gray; }\n\n.box {\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n  position: relative;\n  width: 244px;\n  height: 300px;\n  -webkit-transform: translateZ(calc((100 / 2) * 1px));\n          transform: translateZ(calc((100 / 2) * 1px));\n  left: 425px;\n  top: 175px; }\n\n.box__face {\n  position: absolute;\n  background-color: rgba(255, 69, 0, 0.2);\n  border: 5px solid black;\n  border-radius: 7px; }\n\n.box__face--top,\n.box__face--bottom {\n  width: 300px;\n  height: 244px; }\n\n.box__face--back,\n.box__face--front {\n  width: 100px;\n  height: 244px; }\n\n.box__face--left,\n.box__face--right {\n  width: 300px;\n  height: 100px; }\n\n.box__face--top {\n  -webkit-transform: rotateY(0deg) translateZ(calc((100 / 2) * 1px));\n          transform: rotateY(0deg) translateZ(calc((100 / 2) * 1px)); }\n\n.box__face--bottom {\n  -webkit-transform: rotateY(180deg) translateZ(calc((100 / 2) * 1px));\n          transform: rotateY(180deg) translateZ(calc((100 / 2) * 1px)); }\n\n.box__face--front {\n  -webkit-transform: rotateY(-90deg) translateZ(calc((100 / 2) * 1px));\n          transform: rotateY(-90deg) translateZ(calc((100 / 2) * 1px)); }\n\n.box__face--back {\n  -webkit-transform: rotateY(90deg) translateZ(calc(300px - calc((100 / 2) * 1px)));\n          transform: rotateY(90deg) translateZ(calc(300px - calc((100 / 2) * 1px))); }\n\n.box__face--left {\n  -webkit-transform: rotateX(90deg) translateZ(calc((100 / 2) * 1px));\n          transform: rotateX(90deg) translateZ(calc((100 / 2) * 1px)); }\n\n.box__face--right {\n  -webkit-transform: rotateX(-90deg) translateZ(calc(244px - calc((100 / 2) * 1px)));\n          transform: rotateX(-90deg) translateZ(calc(244px - calc((100 / 2) * 1px))); }\n\n.box.show-top {\n  -webkit-transform: translateZ(calc( -1 * calc((100 / 2) * 1px))) rotateY(0deg);\n          transform: translateZ(calc( -1 * calc((100 / 2) * 1px))) rotateY(0deg); }\n\n.box.show-bottom {\n  -webkit-transform: translateZ(calc( -1 * calc((100 / 2) * 1px))) rotateY(-180deg);\n          transform: translateZ(calc( -1 * calc((100 / 2) * 1px))) rotateY(-180deg); }\n\n.box.show-front {\n  -webkit-transform: translateZ(calc( -1 * calc((100 / 2) * 1px))) rotateY(90deg);\n          transform: translateZ(calc( -1 * calc((100 / 2) * 1px))) rotateY(90deg); }\n\n.box.show-back {\n  -webkit-transform: translateZ(calc( -1 * calc(300px - calc((100 / 2) * 1px)))) rotateY(-90deg);\n          transform: translateZ(calc( -1 * calc(300px - calc((100 / 2) * 1px)))) rotateY(-90deg); }\n\n.box.show-left {\n  -webkit-transform: translateZ(calc( -1 * calc((100 / 2) * 1px))) rotateX(-90deg);\n          transform: translateZ(calc( -1 * calc((100 / 2) * 1px))) rotateX(-90deg); }\n\n.box.show-right {\n  -webkit-transform: translateZ(calc( -1 * calc(244px - calc((100 / 2) * 1px)))) rotateX(90deg);\n          transform: translateZ(calc( -1 * calc(244px - calc((100 / 2) * 1px)))) rotateX(90deg); }\n\n.box.show-iso, .box.show-isometric {\n  -webkit-transform: rotateX(45deg) rotateZ(-45deg);\n          transform: rotateX(45deg) rotateZ(-45deg); }\n\n.put-card-in-box {\n  position: absolute;\n  -webkit-transform: rotateX(-90deg) rotateY(-90deg) translateZ(-100px);\n          transform: rotateX(-90deg) rotateY(-90deg) translateZ(-100px); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jdWUtY2FyZC1zaG9lLWJveC9DOlxcVXNlcnNcXGlhbm5hXFxEb2N1bWVudHNcXEdpdFxcc2xcXG5nLWN1ZS1jYXJkL3NyY1xcc3R5bGVzXFxiYXNlLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY3VlLWNhcmQtc2hvZS1ib3gvQzpcXFVzZXJzXFxpYW5uYVxcRG9jdW1lbnRzXFxHaXRcXHNsXFxuZy1jdWUtY2FyZC9zcmNcXGFwcFxcY29tcG9uZW50c1xcY3VlLWNhcmQtc2hvZS1ib3hcXGN1ZS1jYXJkLXNob2UtYm94LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsY0FBYztFQUNkLGdCQUFnQixFQUFBOztBQUVsQix3REFBQTs7QUFDQTtFQUNFLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxZQUFZO0VBQ1osa0JBQWtCLEVBQUE7O0FDL0VwQjtFQUNFLDBCQUFrQjtVQUFsQixrQkFBa0I7RUFJbEIsWUQrQmlCO0VDOUJqQixhRCtCa0I7RUM5QmxCLHVCQUF1QixFQUFBOztBQUl6QjtFQUNFLG9DQUE0QjtVQUE1Qiw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLFlEb0NZO0VDbkNaLGFEa0NhO0VDaENiLG9EQUFrRDtVQUFsRCw0Q0FBa0Q7RUFDbEQsV0FBVztFQUNYLFVBQVUsRUFBQTs7QUFHWjtFQUNFLGtCQUFrQjtFQUNsQix1Q0FBdUM7RUFDdkMsdUJBQXVCO0VBQ3ZCLGtCQUFrQixFQUFBOztBQUdwQjs7RUFFSSxZRGtCVztFQ2pCWCxhRGtCVSxFQUFBOztBQ2ZkOztFQUVJLFlEY1c7RUNiWCxhRFlVLEVBQUE7O0FDVGQ7O0VBRUksWURNVztFQ0xYLGFET1csRUFBQTs7QUNKZjtFQUFxQixrRUFBa0U7VUFBbEUsMERBQWtFLEVBQUE7O0FBQ3ZGO0VBQXFCLG9FQUFrRTtVQUFsRSw0REFBa0UsRUFBQTs7QUFDdkY7RUFBcUIsb0VBQThEO1VBQTlELDREQUE4RCxFQUFBOztBQUVuRjtFQUFxQixpRkFBOEQ7VUFBOUQseUVBQThELEVBQUE7O0FBRW5GO0VBQXFCLG1FQUFrRTtVQUFsRSwyREFBa0UsRUFBQTs7QUFFdkY7RUFBcUIsa0ZBQStEO1VBQS9ELDBFQUErRCxFQUFBOztBQUVwRjtFQUFtQiw4RUFBa0Y7VUFBbEYsc0VBQWtGLEVBQUE7O0FBQ3JHO0VBQW1CLGlGQUFrRjtVQUFsRix5RUFBa0YsRUFBQTs7QUFDckc7RUFBbUIsK0VBQWtGO1VBQWxGLHVFQUFrRixFQUFBOztBQUNyRztFQUFtQiw4RkFBNkU7VUFBN0Usc0ZBQTZFLEVBQUE7O0FBQ2hHO0VBQW1CLGdGQUFtRjtVQUFuRix3RUFBbUYsRUFBQTs7QUFDdEc7RUFBbUIsNkZBQStFO1VBQS9FLHFGQUErRSxFQUFBOztBQUVsRztFQUFxQyxpREFBMEM7VUFBMUMseUNBQTBDLEVBQUE7O0FBRS9FO0VBQ0Usa0JBQWtCO0VBQ2xCLHFFQUE2RDtVQUE3RCw2REFBNkQsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3VlLWNhcmQtc2hvZS1ib3gvY3VlLWNhcmQtc2hvZS1ib3guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vIHZhcmlhYmxlcyByZWxhdGVkIHRvIGN1ZSBjYXJkXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuJHByaW1hcnktZm9udC1jb2xvcjogI2ZmZjtcclxuJHByaW1hcnktY2FyZC1iYWNrZ3JvdW5kOiAjZjMwZDM2O1xyXG4kc2Vjb25kYXJ5LWNhcmQtYmFja2dyb3VuZDogI2MzMGQxNjtcclxuJHRlcnRpYXJ5LWNhcmQtYmFja2dyb3VuZDogI2EzMDAwMDtcclxuJGxpc3QtZm9udC1mYW1pbHk6IFwiVHJlYnVjaGV0IE1TXCIsIFwiTHVjaWRhIEdyYW5kZVwiLCBcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcIiwgXCJMdWNpZGEgU2Fuc1wiLCBUYWhvbWEsIHNhbnMtc2VyaWY7XHJcbiRsaXN0LWZvbnQtc2l6ZTogMS4xZW07XHJcbi8vZm9udC1zaXplOiAxNHB4OyBmb250LXN0eWxlOiBub3JtYWw7IGZvbnQtdmFyaWFudDogbm9ybWFsOyBmb250LXdlaWdodDogNzAwOyBsaW5lLWhlaWdodDogMTUuNHB4O1wiXHJcblxyXG5cclxuJGNhcmQtd2lkdGgtcHg6IDQwMHB4O1xyXG4kY2FyZC1oZWlnaHQtcHg6IDIwMHB4O1xyXG4kY2FyZC1wYWRkaW5nLXB4OiAyMHB4O1xyXG5cclxuJGNhcmQtd2lkdGgtd2l0aC1wYWRkaW5nLXB4OiBjYWxjKCAjeyRjYXJkLXdpZHRoLXB4fSArICN7JGNhcmQtcGFkZGluZy1weH0gKyAjeyRjYXJkLXBhZGRpbmctcHh9ICk7XHJcbiRjYXJkLWhlaWdodC13aXRoLXBhZGRpbmctcHg6IGNhbGMoICN7JGNhcmQtaGVpZ2h0LXB4fSArICN7JGNhcmQtcGFkZGluZy1weH0gKyAjeyRjYXJkLXBhZGRpbmctcHh9ICk7XHJcblxyXG4kY2FyZC1zbGlkZS1kaXN0YW5jZS1weDogY2FsYyggI3skY2FyZC13aWR0aC13aXRoLXBhZGRpbmctcHh9ICsgMTAwcHgpO1xyXG5cclxuXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gdmFyaWFibGVzIHJlbGF0ZWQgdG8gY2FyZCBpbiBib3hcclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuJGNhcmQtaW4tYm94LXdpZHRoLXB4OiAyMDBweDtcclxuJGNhcmQtaW4tYm94LWhlaWdodC1weDogMTAwcHg7XHJcblxyXG5cclxuJG1hZ2ljLW51bWJlci1sZWZ0LW9mZnNldC1weDogNTNweDtcclxuLy91c2luZyBgbGVmdDogJG1hZ2ljLW51bWJlci1sZWZ0LW9mZnNldC1weGAgYXBwZWFycyB0byBwdXQgZXhhY3RseSBsaW5lZCB1cCBhdCBpbnNpZGUgZWRnZSAuLi4gSSAqY2FuJ3QqIGV4cGxhaW4gd2h5IHlldCFcclxuLy9jYXJkLWxlZnQ6IDUzcHggYXBwZWFycyBjb3JyZWN0bHktbGVmdC1hbGlnbmVkIGZvciBib3gtd2lkdGg6IDIwMHB4LzIwNHB4ICYmIGNhcmQtYm9yZGVyOiAycHgsIHByb3ZlbiBieSByZWR1Y2luZyAxIHBpeGVsLCByZWJ1aWxkaW5nLCBhbmQgc2VlaW5nIGludGVyc2VjdGlvbi5cclxuLy90aGlzIGlzIGFwcGxpZWQgZXhjbHVzaXZlbHkgYXQgcnVudGltZSB2aWEgamF2YXNjcmlwdC5cclxuXHJcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gdmFyaWFibGVzIHJlbGF0ZWQgdG8gc2hvZSBib3hcclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuJHNjZW5lLXdpZHRoOiA3NjhweDtcclxuJHNjZW5lLWhlaWdodDogNTEycHg7XHJcblxyXG4vL0RJTUVOU0lPTiBSRVFVSVJFTUVOVFM6IENVRSBDQVJEUyBJTiAyOjEgUkFUSU8gKEhFTkNFPT0gQk9YIFdJRFRIIDIgOiBCT1ggSEVJR0hUIDEpXHJcbi8vQk9YIEFOWSBMRU5HVEgsIElERUFMTFkgXCJTSE9FIEJPWFwiIExFTkdUSC5cclxuLy9SRUZFUkVOQ0U6IEFDVFVBTCBTSE9FIEJPWCAxNFwiIHggOFwiIHggNVwiIC0tIEFMTU9TVCBTQU1FLlxyXG5cclxuLy9pbiB0aGlzIGNhc2UsICB0aGluayBvZiBldmVyeSBkaXYgYmVpbmcgY2VudGVyZWQgb24gdGhlIFwibWluaW11bSBkaW1lbnNpb25cIiwgc28gY2VudGVyZWQgYXQgNTBweCBhZnRlciByb3RhdGlvbnMsIHNpbmNlIG1pbmltdW0gZGltZW5zaW9uIGlzIGhlaWdodDogMTAwLiAoYmVjYXVzZSB3aWxsIGRvIGEgdHJhbnNsYXRlWSgxMDApIG9uIGFsbCBkaXZzIGFzIGJhc2UgcHJlbWlzZS4pXHJcblxyXG4kYm94LWxlbmd0aDogMzAwO1xyXG4kYm94LXdpZHRoOiAyNDQ7XHJcbiRib3gtaGVpZ2h0OiAxMDA7XHJcblxyXG4kYm94LWxlbmd0aC1weDogI3skYm94LWxlbmd0aH1weDtcclxuJGJveC13aWR0aC1weDogI3skYm94LXdpZHRofXB4O1xyXG4kYm94LWhlaWdodC1weDogI3skYm94LWhlaWdodH1weDtcclxuXHJcbiRib3gtbGVuZ3RoLWhhbHZlZC1weDogY2FsYygoI3skYm94LWxlbmd0aH0gLyAyKSAqIDFweCk7XHJcbiRib3gtd2lkdGgtaGFsdmVkLXB4OiBjYWxjKCgjeyRib3gtd2lkdGh9IC8gMikgKiAxcHgpO1xyXG4kYm94LWRpc3RhbmNlLWZyb20tcGl2b3QtcHg6IGNhbGMoKCN7JGJveC1oZWlnaHR9IC8gMikgKiAxcHgpO1xyXG5cclxuLy91c2UgdGhlc2UgbmV4dCAqMiogdmFyaWFibGVzIChmcm9udCwgYmFjaykgaW4gamF2YXNjcmlwdCB0byBkZXRlcm1pbmUgY2FyZCBwb3NpdGlvblxyXG4kYm94LWZyb250LXRyYW5zbGF0ZS1weDogI3skYm94LWRpc3RhbmNlLWZyb20tcGl2b3QtcHh9O1xyXG4kYm94LWJhY2stdHJhbnNsYXRlLXB4OiBjYWxjKCN7JGJveC1sZW5ndGgtcHh9IC0gI3skYm94LWRpc3RhbmNlLWZyb20tcGl2b3QtcHh9KTtcclxuJGJveC1yaWdodC10cmFuc2xhdGUtcHg6IGNhbGMoI3skYm94LXdpZHRoLXB4fSAtICN7JGJveC1kaXN0YW5jZS1mcm9tLXBpdm90LXB4fSk7XHJcblxyXG4uZmxleCBsaSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmZsZXggPiBsaSA+IGxhYmVsIHtcclxuICBmbGV4OiAxIDAgNTBweDtcclxuICBtYXgtd2lkdGg6IDEwMHB4O1xyXG59XHJcbi8qIFdlIHRlbGwgYWxsIGl0ZW1zIHRvIGJlIDIwMHB4IHdpZHRoLCB2aWEgZmxleC1iYXNpcyAqL1xyXG4uZmxleCA+IGxpID4gbGFiZWwgKyAqIHtcclxuICBmbGV4OiAzIDEgMTAwcHg7XHJcbn1cclxuXHJcbi5mbGV4IGxpIGJ1dHRvbiB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDIycHggNDZweDtcclxufVxyXG4iLCJAaW1wb3J0ICdzcmMvc3R5bGVzL2Jhc2Uuc2Nzcyc7XHJcblxyXG5cclxuLnNjZW5lIHtcclxuICBwZXJzcGVjdGl2ZTogODAwcHg7XHJcbiAgLy8gcGVyc3BlY3RpdmUtb3JpZ2luOiAtODAlO1xyXG4gIC8vIHBlcnNwZWN0aXZlLW9yaWdpbjogdG9wIGxlZnQ7ICAgICAvL1BMQVkgV0lUSCBUSElTIFRPIFNFRSBXSEVSRSBTSURFUyBMSU5FIFVQIFNDRU5FIEVER0UgKFRPR0dMRSBPTi9PRkYpXHJcbiAgLy8gcGVyc3BlY3RpdmUtb3JpZ2luOiBib3R0b20gcmlnaHQ7IC8vUExBWSBXSVRIIFRISVMgVE8gU0VFIFdIRVJFIFNJREVTIExJTkUgVVAgU0NFTkUgRURHRSAoVE9HR0xFIE9OL09GRilcclxuICB3aWR0aDogJHNjZW5lLXdpZHRoO1xyXG4gIGhlaWdodDogJHNjZW5lLWhlaWdodDtcclxuICBib3JkZXI6IDJweCBkYXNoZWQgZ3JheTtcclxuICAvL21hcmdpbjogMTAwcHg7XHJcbn1cclxuXHJcbi5ib3gge1xyXG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAkYm94LXdpZHRoLXB4O1xyXG4gIGhlaWdodDogJGJveC1sZW5ndGgtcHg7XHJcbiAgLy90cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTUwcHgpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigkYm94LWRpc3RhbmNlLWZyb20tcGl2b3QtcHgpOyAvL1wiVU5GVVpaIFRFWFRcIiwgV09OJ1QgTk9USUNFIFdIRU4gTk8gV09SRFNcclxuICBsZWZ0OiA0MjVweDsgICAvL1BMQVkgV0lUSCBUSElTIFRPIFNFRSBTSURFIChBREpVU1QgSFVORFJFRFMgT0YgUFgpXHJcbiAgdG9wOiAxNzVweDsgICAgLy9QTEFZIFdJVEggVEhJUyBUTyBTRUUgU0lERSAoQURKVVNUIEhVTkRSRURTIE9GIFBYKVxyXG59XHJcblxyXG4uYm94X19mYWNlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDY5LCAwLCAwLjIpO1xyXG4gIGJvcmRlcjogNXB4IHNvbGlkIGJsYWNrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcclxufVxyXG5cclxuLmJveF9fZmFjZS0tdG9wLCBcclxuLmJveF9fZmFjZS0tYm90dG9tIHtcclxuICAgIHdpZHRoOiAkYm94LWxlbmd0aC1weDtcclxuICAgIGhlaWdodDogJGJveC13aWR0aC1weDtcclxufVxyXG5cclxuLmJveF9fZmFjZS0tYmFjayxcclxuLmJveF9fZmFjZS0tZnJvbnQge1xyXG4gICAgd2lkdGg6ICRib3gtaGVpZ2h0LXB4O1xyXG4gICAgaGVpZ2h0OiAkYm94LXdpZHRoLXB4O1xyXG59XHJcblxyXG4uYm94X19mYWNlLS1sZWZ0LFxyXG4uYm94X19mYWNlLS1yaWdodCB7XHJcbiAgICB3aWR0aDogJGJveC1sZW5ndGgtcHg7XHJcbiAgICBoZWlnaHQ6ICRib3gtaGVpZ2h0LXB4O1xyXG59XHJcblxyXG4uYm94X19mYWNlLS10b3AgICAgeyB0cmFuc2Zvcm06IHJvdGF0ZVkoICAwZGVnKSB0cmFuc2xhdGVaKCRib3gtZGlzdGFuY2UtZnJvbS1waXZvdC1weCk7IH1cclxuLmJveF9fZmFjZS0tYm90dG9tIHsgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZykgdHJhbnNsYXRlWigkYm94LWRpc3RhbmNlLWZyb20tcGl2b3QtcHgpOyB9XHJcbi5ib3hfX2ZhY2UtLWZyb250ICB7IHRyYW5zZm9ybTogcm90YXRlWSgtOTBkZWcpIHRyYW5zbGF0ZVooJGJveC1mcm9udC10cmFuc2xhdGUtcHgpOyB9XHJcbi8vLmJveF9fZmFjZS0tYmFjayAgIHsgdHJhbnNmb3JtOiByb3RhdGVZKCA5MGRlZykgdHJhbnNsYXRlWigyNTBweCk7IH1cclxuLmJveF9fZmFjZS0tYmFjayAgIHsgdHJhbnNmb3JtOiByb3RhdGVZKCA5MGRlZykgdHJhbnNsYXRlWigkYm94LWJhY2stdHJhbnNsYXRlLXB4ICk7IH1cclxuLy8uYm94X19mYWNlLS1sZWZ0ICAgeyB0cmFuc2Zvcm06IHJvdGF0ZVgoIDkwZGVnKSB0cmFuc2xhdGVaKDUwcHgpOyB9XHJcbi5ib3hfX2ZhY2UtLWxlZnQgICB7IHRyYW5zZm9ybTogcm90YXRlWCggOTBkZWcpIHRyYW5zbGF0ZVooJGJveC1kaXN0YW5jZS1mcm9tLXBpdm90LXB4KTsgfVxyXG4vLy5ib3hfX2ZhY2UtLXJpZ2h0ICB7IHRyYW5zZm9ybTogcm90YXRlWCgtOTBkZWcpIHRyYW5zbGF0ZVooMTUwcHgpIDsgfVxyXG4uYm94X19mYWNlLS1yaWdodCAgeyB0cmFuc2Zvcm06IHJvdGF0ZVgoLTkwZGVnKSB0cmFuc2xhdGVaKCRib3gtcmlnaHQtdHJhbnNsYXRlLXB4ICkgOyB9XHJcblxyXG4uYm94LnNob3ctdG9wICAgIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKGNhbGMoIC0xICogI3skYm94LWRpc3RhbmNlLWZyb20tcGl2b3QtcHh9KSkgcm90YXRlWSggICAwZGVnKTsgfVxyXG4uYm94LnNob3ctYm90dG9tIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKGNhbGMoIC0xICogI3skYm94LWRpc3RhbmNlLWZyb20tcGl2b3QtcHh9KSkgcm90YXRlWSgtMTgwZGVnKTsgfVxyXG4uYm94LnNob3ctZnJvbnQgIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKGNhbGMoIC0xICogI3skYm94LWRpc3RhbmNlLWZyb20tcGl2b3QtcHh9KSkgcm90YXRlWSggIDkwZGVnKTsgfVxyXG4uYm94LnNob3ctYmFjayAgIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKGNhbGMoIC0xICogI3skYm94LWJhY2stdHJhbnNsYXRlLXB4fSkpIHJvdGF0ZVkoIC05MGRlZyk7IH1cclxuLmJveC5zaG93LWxlZnQgICB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWihjYWxjKCAtMSAqICN7JGJveC1kaXN0YW5jZS1mcm9tLXBpdm90LXB4fSkpICByb3RhdGVYKCAtOTBkZWcpOyB9XHJcbi5ib3guc2hvdy1yaWdodCAgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooY2FsYyggLTEgKiAjeyRib3gtcmlnaHQtdHJhbnNsYXRlLXB4fSkpICByb3RhdGVYKCAgOTBkZWcpOyB9XHJcblxyXG4uYm94LnNob3ctaXNvLCAuYm94LnNob3ctaXNvbWV0cmljIHsgdHJhbnNmb3JtOiByb3RhdGVYKCA0NWRlZykgcm90YXRlWigtNDVkZWcpOyB9XHJcblxyXG4ucHV0LWNhcmQtaW4tYm94IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGVYKC05MGRlZykgcm90YXRlWSgtOTBkZWcpIHRyYW5zbGF0ZVooLTEwMHB4KTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/cue-card-shoe-box/cue-card-shoe-box.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/cue-card-shoe-box/cue-card-shoe-box.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CueCardShoeBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CueCardShoeBoxComponent", function() { return CueCardShoeBoxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_cue_card_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/cue-card-loader.service */ "./src/app/services/cue-card-loader.service.ts");
/* harmony import */ var src_app_generated_styles_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/generated/styles/base */ "./src/app/generated/styles/base.ts");
/* harmony import */ var node_modules_reduce_css_calc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! node_modules/reduce-css-calc */ "./node_modules/reduce-css-calc/dist/index.js");
/* harmony import */ var node_modules_reduce_css_calc__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(node_modules_reduce_css_calc__WEBPACK_IMPORTED_MODULE_4__);





var CueCardShoeBoxComponent = /** @class */ (function () {
    function CueCardShoeBoxComponent(ccLoaderService) {
        this.ccLoaderService = ccLoaderService;
    }
    CueCardShoeBoxComponent.prototype.ngOnInit = function () { };
    CueCardShoeBoxComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.ccLoaderService.cueCards$.subscribe(function (cueCards) {
            _this.rebalanceBoxCardPositions(cueCards);
        });
        // //first call has *no* changes *yet*, so call directly first time.
        // this.rebalanceBoxCardPositions(this.ccLoaderService.cueCards$);
        // this.cc.changes.subscribe(t => {
        //   //subsequent calls to capture *changes* to model of cueCards, especially additions and deletions, but also modifications will trigger this.
        //   this.rebalanceBoxCardPositions(this.ccLoaderService.cueCards);
        // })
    };
    CueCardShoeBoxComponent.prototype.ngAfterViewChecked = function () {
        console.log("yo");
    };
    ;
    CueCardShoeBoxComponent.prototype.rebalanceBoxCardPositions = function (cueCards) {
        // 1) composing by offsets is fun
        var frontTranslatePixels = this.getCssObject('$box-front-translate-px', src_app_generated_styles_base__WEBPACK_IMPORTED_MODULE_3__["default"]);
        var boxFront = parseInt(node_modules_reduce_css_calc__WEBPACK_IMPORTED_MODULE_4__(frontTranslatePixels.compiledValue), 10);
        var backTranslatePixels = this.getCssObject('$box-back-translate-px', src_app_generated_styles_base__WEBPACK_IMPORTED_MODULE_3__["default"]);
        var boxBack = parseInt(node_modules_reduce_css_calc__WEBPACK_IMPORTED_MODULE_4__(backTranslatePixels.compiledValue), 10);
        var boxLength = boxFront + boxBack;
        // 2) centers cards in box -- NOTE: centering only works after a *rebuild* (included in a *restart*). 
        var boxWidthPixels = this.getCssObject('$box-width-px', src_app_generated_styles_base__WEBPACK_IMPORTED_MODULE_3__["default"]);
        var boxWidth = parseInt(boxWidthPixels.compiledValue, 10);
        var cardWidthPixels = this.getCssObject('$card-in-box-width-px', src_app_generated_styles_base__WEBPACK_IMPORTED_MODULE_3__["default"]);
        var cardWidth = parseInt(cardWidthPixels.compiledValue, 10);
        var cardOffsetToCenterX = (boxWidth - cardWidth) / 2;
        var boxHeightPixels = this.getCssObject('$box-height-px', src_app_generated_styles_base__WEBPACK_IMPORTED_MODULE_3__["default"]);
        var boxHeight = parseInt(boxHeightPixels.compiledValue, 10);
        var cardHeightPixels = this.getCssObject('$card-in-box-height-px', src_app_generated_styles_base__WEBPACK_IMPORTED_MODULE_3__["default"]);
        var cardHeight = parseInt(cardHeightPixels.compiledValue, 10);
        var cardOffsetToCenterZ = (boxHeight - cardHeight) / 2;
        var magicNumberLeftOffsetX = parseInt(this.getCssObject('$magic-number-left-offset-px', src_app_generated_styles_base__WEBPACK_IMPORTED_MODULE_3__["default"]).compiledValue, 10);
        //this is firing before the view updates... hmm.
        for (var i = 0; i < cueCards.length; i++) {
            var cardPosition = boxLength / cueCards.length * (i + 1);
            var boxLerpData = this.lerpCardInBox(boxFront, boxBack, cardPosition);
            var elem = document.getElementById("bcc" + i);
            elem.setAttribute("style", "transform: rotateX(-90deg) rotateY(-90deg) translateZ(" + (cardOffsetToCenterZ + boxLerpData) + "px) translateX(" + (cardOffsetToCenterX + magicNumberLeftOffsetX) + "px)");
        }
    };
    //TODO: put in utils class or something
    CueCardShoeBoxComponent.prototype.getCssObject = function (cssPropertyName, searchSassExportObject) {
        var result = searchSassExportObject.variables.find(function (obj) {
            return obj.name === cssPropertyName;
        });
        return result;
    };
    CueCardShoeBoxComponent.prototype.lerpCardInBox = function (boxFront, boxBack, cardPlacement) {
        var result;
        if (cardPlacement < 0) {
            result = -boxFront;
        }
        else if (cardPlacement < boxFront) {
            result = -cardPlacement;
        }
        else if (cardPlacement === boxFront) {
            result = 0;
        }
        else if (cardPlacement > boxFront && cardPlacement <= (boxFront + boxBack)) {
            result = cardPlacement - boxFront;
        }
        else if (cardPlacement > (boxFront + boxBack)) {
            result = boxFront + boxBack;
        }
        else {
            result = null; //throw error?
        }
        result -= (boxBack - boxFront); //ugh
        return result;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('cc'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], CueCardShoeBoxComponent.prototype, "cc", void 0);
    CueCardShoeBoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cue-card-shoe-box',
            template: __webpack_require__(/*! ./cue-card-shoe-box.component.html */ "./src/app/components/cue-card-shoe-box/cue-card-shoe-box.component.html"),
            styles: [__webpack_require__(/*! ./cue-card-shoe-box.component.scss */ "./src/app/components/cue-card-shoe-box/cue-card-shoe-box.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_cue_card_loader_service__WEBPACK_IMPORTED_MODULE_2__["CueCardLoaderService"]])
    ], CueCardShoeBoxComponent);
    return CueCardShoeBoxComponent;
}());



/***/ }),

/***/ "./src/app/components/cue-card/cue-card.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/cue-card/cue-card.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tp-wrapper\">\r\n  <div [ngClass]=\"shoeBox ? 'tp-card--in-box' : 'tp-card'\" (click)=\"toggleFlip()\" [@flipper]=\"flipState\">\r\n    <div [ngClass]=\"shoeBox ? 'tp-card__side--in-box' : 'tp-card__side'\" class=\"tp-card__front\">\r\n      <span class=\"title\">Question:</span><br/>\r\n      <span>{{cueCard.question}}</span>\r\n    </div>\r\n    <div [ngClass]=\"shoeBox ? 'tp-card__side--in-box' : 'tp-card__side'\" class=\"tp-card__back\">\r\n      <span class=\"title\">Answer:</span><br/>\r\n      <span>{{cueCard.answer}}</span>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/cue-card/cue-card.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/cue-card/cue-card.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3VlLWNhcmQvY3VlLWNhcmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/cue-card/cue-card.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/cue-card/cue-card.component.ts ***!
  \***********************************************************/
/*! exports provided: CueCardComponent, getCssObject, slideDistance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CueCardComponent", function() { return CueCardComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCssObject", function() { return getCssObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideDistance", function() { return slideDistance; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_cue_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/cue-card */ "./src/app/models/cue-card.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _cue_card_shoe_box_cue_card_shoe_box_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cue-card-shoe-box/cue-card-shoe-box.component */ "./src/app/components/cue-card-shoe-box/cue-card-shoe-box.component.ts");
/* harmony import */ var src_app_generated_styles_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/generated/styles/base */ "./src/app/generated/styles/base.ts");
/* harmony import */ var node_modules_reduce_css_calc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! node_modules/reduce-css-calc */ "./node_modules/reduce-css-calc/dist/index.js");
/* harmony import */ var node_modules_reduce_css_calc__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(node_modules_reduce_css_calc__WEBPACK_IMPORTED_MODULE_6__);






//import 'rxjs/add/operator/takeUntil';

var CueCardComponent = /** @class */ (function () {
    function CueCardComponent() {
        this.flipState = 'flip-front';
        this._hasRecalled = null;
        //to indicate back was *ever* shown to parent even once during a card instance lifetime.
        this._backShown = false;
        this.onBackShown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isDoneAnim = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    Object.defineProperty(CueCardComponent.prototype, "hasRecalled", {
        set: function (val) {
            this._hasRecalled = val;
        },
        enumerable: true,
        configurable: true
    });
    ;
    CueCardComponent.prototype.ngOnInit = function () {
        if (!this.cueCard) {
            throw new Error("No CueCard passed in! Cannot initialize CueCard component!");
        }
    };
    CueCardComponent.prototype.ngOnChanges = function () {
        if (this._backShown) {
            // this.toggleFlip();   //this causes some weird state too... 
            this.resetFlip();
        }
    };
    CueCardComponent.prototype.ngAfterViewInit = function () {
        if (this.ccId === undefined) {
            return;
        }
        this._elem = document.getElementById(this.ccId);
        this._colorPrimary = getCssObject('$primary-card-background').compiledValue;
        this._colorSecondary = getCssObject('$secondary-card-background').compiledValue;
        this._elemKid = this._elem.querySelector('.tp-card__front');
        //possibly causes my 2x call error to ngOnDestroy?
        // this._mouseSubscription = fromEvent(document, 'mousemove').subscribe( (e: MouseEvent) => { 
        //   //change height
        //   let distance = this.calculateDistance(this._elem, e.pageX, e.pageY);
        //   this.lerpChangeCardHeight(distance, this._elem);
        //   //change color
        //   this.lerpChangeCardColor(distance, this._elemKid);
        // })
    };
    CueCardComponent.prototype.ngOnDestroy = function () {
        //TODO remove this ugly hack -- it's ugly because it buries an unknown problem, and will lead to more problems later.
        // if (!this._mouseSubscription) { 
        //   console.warn(`attempting to destroy cue card despite it already destroying successfully earlier... hiding error related to second unnecessary attempt to unsubscribe:  ${this._mouseSubscription}... `);
        //   return;
        // }
        // this._mouseSubscription.unsubscribe();
    };
    CueCardComponent.prototype.toggleFlip = function () {
        this.flipState = (this.flipState == 'flip-front') ? 'flip-back' : 'flip-front';
        this._backShown = !this._backShown;
        this.onBackShown.emit(this._backShown);
    };
    CueCardComponent.prototype.resetFlip = function () {
        this.flipState = 'flip-front';
        this._backShown = false;
        this.onBackShown.emit(this._backShown);
    };
    //slideLeftToUnder
    CueCardComponent.prototype.pickAnim = function () {
        if (this._hasRecalled) {
            return 'slideRightToOffscreen';
        }
        if (this._hasRecalled == false) {
            return 'slideLeftToUnder';
        }
        return undefined;
    };
    //presumably i need this, as *ngIf in the parent isn't good enough ....... or wait... i can use this emit... and then i *CAN* USE the parent's own *ngIf="some expre!"
    //doneAnimGoUnderDeck($event) {
    //doneAnimGoOffScreen($event) {
    CueCardComponent.prototype.doneAnim = function ($event) {
        //if ($event.toState == "slideLeftToUnder") {
        //if ($event.toState == "slideLeftToUnder" || $event.toState == "slideRightToOffscreen") {
        //if ($event && $event.toState) {
        if ($event && ($event.toState == "slideLeftToUnder" || $event.toState == "slideRightToOffscreen")) {
            this.isDoneAnim.emit(true);
        }
    };
    //TODO: test performance on low-power devices, ugly jittering jumps visible console was logging, but gone without.
    //TODO: consider refactor. it's upsetting i need to use a mixof global variable + mix with parameter variables...  try to see if this can be rewritten more 'reactively'(?) later??? (not sure this solves it)
    CueCardComponent.prototype.lerpChangeCardHeight = function (distance, elem) {
        var cardHeightChange = this.lerp(0, 30, distance < 100 ? 30 / distance : 0);
        var styleAttribute = elem.getAttribute('style').split('translateY')[0];
        elem.setAttribute('style', styleAttribute + " translateY(-" + cardHeightChange + "px)");
        return cardHeightChange;
    };
    CueCardComponent.prototype.lerpChangeCardColor = function (distance, elem) {
        var lerpAmount = distance < 200 ? 1 / distance * 400 : 0;
        var lerpedHexValue = this.lerpColor("0x" + this._colorPrimary.split('#').pop(), "0x" + this._colorSecondary.split('#').pop(), lerpAmount);
        var rgbaArray = [lerpedHexValue.r, lerpedHexValue.g, lerpedHexValue.b, 1];
        elem.setAttribute('style', "background-color: rgba(" + rgbaArray + ")");
    };
    CueCardComponent.prototype.calculateDistance = function (elem, mouseX, mouseY) {
        return Math.floor(Math.sqrt(Math.pow(mouseX - (this.getElementOffset(elem).left + (elem.clientWidth / 2)), 2) + Math.pow(mouseY - (this.getElementOffset(elem).top + (elem.clientHeight / 2)), 2)));
    };
    CueCardComponent.prototype.getElementOffset = function (element) {
        var de = document.documentElement;
        var box = element.getBoundingClientRect();
        var top = box.top + window.pageYOffset - de.clientTop;
        var left = box.left + window.pageXOffset - de.clientLeft;
        return { top: top, left: left };
    };
    CueCardComponent.prototype.lerp = function (value1, value2, amount) {
        amount = amount < 0 ? 0 : amount;
        amount = amount > 1 ? 1 : amount;
        return value1 + (value2 - value1) * amount;
    };
    ;
    // returns under 255 for each field, except when amount > 1, worst example is 33.33333333333333 returns  [1357, 13, 1013, 1]
    // I deliberately 'abuse' this function, submitting values exceeding `amount > 1`, which results in a beautiful color range from blue to pink. It maxes out at pink, because the delta between the two primary and secondary colors is unchanging for 1 of 3 parameters, "g: 13", whereas the other 2 parameters "r: 255" and "b: 255" max out at 255, giving the result "pink". Otherwise if there was any slight difference in that last parameter, instead it would max out at entirely white.
    /**
    * A linear interpolator for hex colors.
    *
    * Found at:
    * https://gist.github.com/nikolas/b0cce2261f1382159b507dd492e1ceef
    *
    * @param {Number} a  (hex color start val)
    * @param {Number} b  (hex color end val)
    * @param {Number} amount  (the amount to fade from a to b)
    *
    * @example
    * // returns 0x7f7f7f
    * lerpColor(0x000000, 0xffffff, 0.5)
    *
    * @returns {Number}
    */
    CueCardComponent.prototype.lerpColor = function (a, b, amount) {
        var ar = a >> 16, ag = a >> 8 & 0xff, ab = a & 0xff, br = b >> 16, bg = b >> 8 & 0xff, bb = b & 0xff, rr = ar + amount * (br - ar), rg = ag + amount * (bg - ag), rb = ab + amount * (bb - ab);
        //i don't understand the addition arithmetic singular total, nor the negatives that appear randomly / so I don't need. 
        //return (rr << 16) + (rg << 8) + (rb | 0);
        return { r: Math.round(Math.abs(rr)), g: Math.round(Math.abs(rg)), b: Math.round(Math.abs(rb)) };
    };
    ;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_models_cue_card__WEBPACK_IMPORTED_MODULE_2__["CueCard"]
        //simply used to detect any bound string at all in template, to affect which style class is applied
        )
    ], CueCardComponent.prototype, "cueCard", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _cue_card_shoe_box_cue_card_shoe_box_component__WEBPACK_IMPORTED_MODULE_4__["CueCardShoeBoxComponent"])
    ], CueCardComponent.prototype, "shoeBox", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CueCardComponent.prototype, "ccId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], CueCardComponent.prototype, "onBackShown", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], CueCardComponent.prototype, "isDoneAnim", void 0);
    CueCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cue-card',
            template: __webpack_require__(/*! ./cue-card.component.html */ "./src/app/components/cue-card/cue-card.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('flipper', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('flip-front', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                        transform: 'rotateY(0)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('flip-back', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                        transform: 'rotateY(180deg)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('flip-front => flip-back', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('500ms ease-in')),
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('slider', [
                    //this state needs to exist, and to have it's name reused in the transition, for it to persist beyond animation.
                    //which may be okay to not exist after all, because i'm going to be deleting immediately anyways.
                    // state('slideLeftToUnder', 
                    //   style({ 'z-index': '-1' }) //, transform: 'translateX(-660px)' })
                    // ),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => slideLeftToUnder', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ 'z-index': '1' }),
                        //WARNING: this usage occasionally causes @Component to appear broken in VSCODE... but app still works... ever since calling `export function`.
                        //probably a *SECOND* good reason to push `slideDistance` into a `base.scss` variable instead, after clean code.
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('0.5s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ transform: "translateX(-" + slideDistance() + "px)" })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ 'z-index': '-1' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('0.5s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ transform: 'translateX(0)' })),
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => slideRightToOffscreen', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ 'z-index': '1' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('0.8s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ transform: 'translateX(+1200px)' })),
                    ])
                ]),
            ],
            host: { '[@slider]': "this.pickAnim()", '(@slider.done)': "this.doneAnim($event)" },
            styles: [__webpack_require__(/*! ./cue-card.component.scss */ "./src/app/components/cue-card/cue-card.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CueCardComponent);
    return CueCardComponent;
}());

//TODO: put in utils class or something
function getCssObject(cssPropertyName) {
    var result = src_app_generated_styles_base__WEBPACK_IMPORTED_MODULE_5__["default"].variables.find(function (obj) {
        return obj.name === cssPropertyName;
    });
    return result;
}
function slideDistance() {
    return parseInt(node_modules_reduce_css_calc__WEBPACK_IMPORTED_MODULE_6__("calc(" + getCssObject('$card-width-with-padding-px').compiledValue + " + 100px"), 10);
}


/***/ }),

/***/ "./src/app/components/quiz/quiz.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/quiz/quiz.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  quiz works!\r\n</p>\r\n\r\n<div class=\"quiz-wrapper\"> \r\n\r\n  <div #cc_container [ngStyle]=\"{ height: quizzableRemains.length > 0 ? cueCardHeight : 0 }\">\r\n    <ng-template #container></ng-template>\r\n  </div>\r\n\r\n  <div *ngIf=\"hasSeenBack\" style=\"text-align: center; margin-top: 20px;\">\r\n    <button (click)=\"nahForgot(quizzingCards[0])\" style=\"background: #ff4040\">nah, try again</button>\r\n    <button (click)=\"yahRecalled(quizzingCards[0]);\" style=\"background: #40ff40\">yup, onwards!</button>\r\n  </div>\r\n  \r\n  <div class=\"tp-wrapper\" \r\n      [ngStyle]=\"{ height: cueCardHeight }\" *ngIf=\"!quizzingCards\">\r\n    <div class=\"tp-card\" [ngStyle]=\"{'position': 'absolute', 'left': '0', 'right': '0', 'margin': 'auto' }\">\r\n      <div class=\"congratulations-tp-card__side\">\r\n        <fa-icon [icon]=\"['fas', 'grin-squint']\"></fa-icon>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"!hasSeenBack\" style=\"text-align: center; margin-top: 20px;\">\r\n    <div *ngIf=\"quizzableRemains.length > 0\">\r\n        try to recall ↑ then flip ↻ <br/>\r\n        (cards left: {{quizzableRemains.length}})\r\n    </div>\r\n    <div *ngIf=\"quizzableRemains.length == 0\">\r\n        done for now! <!-- keep scrolling  -->\r\n        <!-- ↓ -->\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/quiz/quiz.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/quiz/quiz.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex li {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center; }\n\n.flex > li > label {\n  flex: 1 0 50px;\n  max-width: 100px; }\n\n/* We tell all items to be 200px width, via flex-basis */\n\n.flex > li > label + * {\n  flex: 3 1 100px; }\n\n.flex li button {\n  margin: auto;\n  padding: 22px 46px; }\n\n.flex li {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center; }\n\n.flex > li > label {\n  flex: 1 0 50px;\n  max-width: 100px; }\n\n/* We tell all items to be 200px width, via flex-basis */\n\n.flex > li > label + * {\n  flex: 3 1 100px; }\n\n.flex li button {\n  margin: auto;\n  padding: 22px 46px; }\n\n.cc-select {\n  color: #fff;\n  background: #a30000;\n  font-family: \"Trebuchet MS\", \"Lucida Grande\", \"Lucida Sans Unicode\", \"Lucida Sans\", Tahoma, sans-serif;\n  font-size: 1.1em; }\n\n.cc-option {\n  color: #fff;\n  background: #c30d16;\n  font-family: \"Trebuchet MS\", \"Lucida Grande\", \"Lucida Sans Unicode\", \"Lucida Sans\", Tahoma, sans-serif;\n  font-size: 1.1em; }\n\ninput {\n  background-color: #656361;\n  color: white;\n  font-family: \"Trebuchet MS\", \"Lucida Grande\", \"Lucida Sans Unicode\", \"Lucida Sans\", Tahoma, sans-serif;\n  font-size: 1.1em; }\n\n.tp-wrapper {\n  -webkit-perspective: 800px;\n          perspective: 800px;\n  display: flex;\n  justify-content: center; }\n\n.tp-card, .tp-card--in-box {\n  position: relative;\n  width: calc( 400px + 20px + 20px);\n  height: calc( 200px + 20px + 20px);\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n  transition: -webkit-transform 1s;\n  transition: transform 1s;\n  transition: transform 1s, -webkit-transform 1s; }\n\n.tp-card--in-box {\n    width: 200px;\n    height: 100px; }\n\n.tp-card__side, .tp-card__side--in-box, .congratulations-tp-card__side {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  color: #fff;\n  text-align: center;\n  font-size: 24px;\n  font-weight: 700;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  text-align: center;\n  border-radius: 20px;\n  border: 2px solid white; }\n\n.tp-card__side--in-box {\n    font-size: 12px;\n    font-weight: 350;\n    border-radius: 14px;\n    cursor: default; }\n\n.tp-card__front {\n  background: #f30d36; }\n\n.tp-card__back {\n  background: #23262d;\n  -webkit-transform: rotateY(179.9deg);\n          transform: rotateY(179.9deg); }\n\n.title {\n  font-family: \"Comic Sans MS\", \"Comic Sans\", cursive; }\n\n.congratulations-tp-card__side {\n  cursor: default;\n  background-color: #b3b3b3;\n  font-family: \"Trebuchet MS\", \"Lucida Grande\", \"Lucida Sans Unicode\", \"Lucida Sans\", Tahoma, sans-serif;\n  font-size: 5em; }\n\n.quiz-wrapper {\n  height: calc( calc( 200px + 20px + 20px) + 50px); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9xdWl6L0M6XFxVc2Vyc1xcaWFubmFcXERvY3VtZW50c1xcR2l0XFxzbFxcbmctY3VlLWNhcmQvc3JjXFxzdHlsZXNcXGJhc2Uuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9xdWl6L0M6XFxVc2Vyc1xcaWFubmFcXERvY3VtZW50c1xcR2l0XFxzbFxcbmctY3VlLWNhcmQvc3JjXFxzdHlsZXNcXGN1ZS1jYXJkLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcXVpei9DOlxcVXNlcnNcXGlhbm5hXFxEb2N1bWVudHNcXEdpdFxcc2xcXG5nLWN1ZS1jYXJkL3NyY1xcYXBwXFxjb21wb25lbnRzXFxxdWl6XFxxdWl6LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsY0FBYztFQUNkLGdCQUFnQixFQUFBOztBQUVsQix3REFBQTs7QUFDQTtFQUNFLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxZQUFZO0VBQ1osa0JBQWtCLEVBQUE7O0FBakJwQjtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsY0FBYztFQUNkLGdCQUFnQixFQUFBOztBQUVsQix3REFBQTs7QUFDQTtFQUNFLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxZQUFZO0VBQ1osa0JBQWtCLEVBQUE7O0FDL0VwQjtFQUNJLFdERHFCO0VDRXJCLG1CREM4QjtFQ0E5QixzR0RDd0c7RUNBeEcsZ0JEQ2tCLEVBQUE7O0FDRXRCO0VBQ0ksV0RScUI7RUNTckIsbUJEUCtCO0VDUS9CLHNHRE53RztFQ094RyxnQkROa0IsRUFBQTs7QUNTdEI7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUdaLHNHRGYwRztFQ2dCMUcsZ0JEZm9CLEVBQUE7O0FDcUJ0QjtFQUNFLDBCQUFrQjtVQUFsQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QixFQUFBOztBQUd6QjtFQUNFLGtCQUFrQjtFQUNsQixpQ0RyQmdHO0VDc0JoRyxrQ0RyQmtHO0VDc0JsRyxvQ0FBNEI7VUFBNUIsNEJBQTRCO0VBQzVCLGdDQUF3QjtFQUF4Qix3QkFBd0I7RUFBeEIsOENBQXdCLEVBQUE7O0FBRXhCO0lBRUUsWURsQndCO0lDbUJ4QixhRGxCeUIsRUFBQTs7QUNzQjdCO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFFWixrQkFBa0I7RUFDbEIsbUNBQTJCO1VBQTNCLDJCQUEyQjtFQUMzQixXRHBEdUI7RUNxRHZCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZix5QkFBaUI7S0FBakIsc0JBQWlCO01BQWpCLHFCQUFpQjtVQUFqQixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQix1QkFBdUIsRUFBQTs7QUFFdkI7SUFFRSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixlQUFlLEVBQUE7O0FBSW5CO0VBQ0UsbUJEMUUrQixFQUFBOztBQzRFakM7RUFDRSxtQkFBbUI7RUFDbkIsb0NBQTRCO1VBQTVCLDRCQUE0QixFQUFBOztBQUU5QjtFQUNFLG1EQUFtRCxFQUFBOztBQ2xGckQ7RUFFSSxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLHNHRkF3RztFRUN4RyxjQUFjLEVBQUE7O0FBS2xCO0VBQ0ksZ0RBQTJELEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3F1aXovcXVpei5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gdmFyaWFibGVzIHJlbGF0ZWQgdG8gY3VlIGNhcmRcclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4kcHJpbWFyeS1mb250LWNvbG9yOiAjZmZmO1xyXG4kcHJpbWFyeS1jYXJkLWJhY2tncm91bmQ6ICNmMzBkMzY7XHJcbiRzZWNvbmRhcnktY2FyZC1iYWNrZ3JvdW5kOiAjYzMwZDE2O1xyXG4kdGVydGlhcnktY2FyZC1iYWNrZ3JvdW5kOiAjYTMwMDAwO1xyXG4kbGlzdC1mb250LWZhbWlseTogXCJUcmVidWNoZXQgTVNcIiwgXCJMdWNpZGEgR3JhbmRlXCIsIFwiTHVjaWRhIFNhbnMgVW5pY29kZVwiLCBcIkx1Y2lkYSBTYW5zXCIsIFRhaG9tYSwgc2Fucy1zZXJpZjtcclxuJGxpc3QtZm9udC1zaXplOiAxLjFlbTtcclxuLy9mb250LXNpemU6IDE0cHg7IGZvbnQtc3R5bGU6IG5vcm1hbDsgZm9udC12YXJpYW50OiBub3JtYWw7IGZvbnQtd2VpZ2h0OiA3MDA7IGxpbmUtaGVpZ2h0OiAxNS40cHg7XCJcclxuXHJcblxyXG4kY2FyZC13aWR0aC1weDogNDAwcHg7XHJcbiRjYXJkLWhlaWdodC1weDogMjAwcHg7XHJcbiRjYXJkLXBhZGRpbmctcHg6IDIwcHg7XHJcblxyXG4kY2FyZC13aWR0aC13aXRoLXBhZGRpbmctcHg6IGNhbGMoICN7JGNhcmQtd2lkdGgtcHh9ICsgI3skY2FyZC1wYWRkaW5nLXB4fSArICN7JGNhcmQtcGFkZGluZy1weH0gKTtcclxuJGNhcmQtaGVpZ2h0LXdpdGgtcGFkZGluZy1weDogY2FsYyggI3skY2FyZC1oZWlnaHQtcHh9ICsgI3skY2FyZC1wYWRkaW5nLXB4fSArICN7JGNhcmQtcGFkZGluZy1weH0gKTtcclxuXHJcbiRjYXJkLXNsaWRlLWRpc3RhbmNlLXB4OiBjYWxjKCAjeyRjYXJkLXdpZHRoLXdpdGgtcGFkZGluZy1weH0gKyAxMDBweCk7XHJcblxyXG5cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyB2YXJpYWJsZXMgcmVsYXRlZCB0byBjYXJkIGluIGJveFxyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG4kY2FyZC1pbi1ib3gtd2lkdGgtcHg6IDIwMHB4O1xyXG4kY2FyZC1pbi1ib3gtaGVpZ2h0LXB4OiAxMDBweDtcclxuXHJcblxyXG4kbWFnaWMtbnVtYmVyLWxlZnQtb2Zmc2V0LXB4OiA1M3B4O1xyXG4vL3VzaW5nIGBsZWZ0OiAkbWFnaWMtbnVtYmVyLWxlZnQtb2Zmc2V0LXB4YCBhcHBlYXJzIHRvIHB1dCBleGFjdGx5IGxpbmVkIHVwIGF0IGluc2lkZSBlZGdlIC4uLiBJICpjYW4ndCogZXhwbGFpbiB3aHkgeWV0IVxyXG4vL2NhcmQtbGVmdDogNTNweCBhcHBlYXJzIGNvcnJlY3RseS1sZWZ0LWFsaWduZWQgZm9yIGJveC13aWR0aDogMjAwcHgvMjA0cHggJiYgY2FyZC1ib3JkZXI6IDJweCwgcHJvdmVuIGJ5IHJlZHVjaW5nIDEgcGl4ZWwsIHJlYnVpbGRpbmcsIGFuZCBzZWVpbmcgaW50ZXJzZWN0aW9uLlxyXG4vL3RoaXMgaXMgYXBwbGllZCBleGNsdXNpdmVseSBhdCBydW50aW1lIHZpYSBqYXZhc2NyaXB0LlxyXG5cclxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vLyB2YXJpYWJsZXMgcmVsYXRlZCB0byBzaG9lIGJveFxyXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG4kc2NlbmUtd2lkdGg6IDc2OHB4O1xyXG4kc2NlbmUtaGVpZ2h0OiA1MTJweDtcclxuXHJcbi8vRElNRU5TSU9OIFJFUVVJUkVNRU5UUzogQ1VFIENBUkRTIElOIDI6MSBSQVRJTyAoSEVOQ0U9PSBCT1ggV0lEVEggMiA6IEJPWCBIRUlHSFQgMSlcclxuLy9CT1ggQU5ZIExFTkdUSCwgSURFQUxMWSBcIlNIT0UgQk9YXCIgTEVOR1RILlxyXG4vL1JFRkVSRU5DRTogQUNUVUFMIFNIT0UgQk9YIDE0XCIgeCA4XCIgeCA1XCIgLS0gQUxNT1NUIFNBTUUuXHJcblxyXG4vL2luIHRoaXMgY2FzZSwgIHRoaW5rIG9mIGV2ZXJ5IGRpdiBiZWluZyBjZW50ZXJlZCBvbiB0aGUgXCJtaW5pbXVtIGRpbWVuc2lvblwiLCBzbyBjZW50ZXJlZCBhdCA1MHB4IGFmdGVyIHJvdGF0aW9ucywgc2luY2UgbWluaW11bSBkaW1lbnNpb24gaXMgaGVpZ2h0OiAxMDAuIChiZWNhdXNlIHdpbGwgZG8gYSB0cmFuc2xhdGVZKDEwMCkgb24gYWxsIGRpdnMgYXMgYmFzZSBwcmVtaXNlLilcclxuXHJcbiRib3gtbGVuZ3RoOiAzMDA7XHJcbiRib3gtd2lkdGg6IDI0NDtcclxuJGJveC1oZWlnaHQ6IDEwMDtcclxuXHJcbiRib3gtbGVuZ3RoLXB4OiAjeyRib3gtbGVuZ3RofXB4O1xyXG4kYm94LXdpZHRoLXB4OiAjeyRib3gtd2lkdGh9cHg7XHJcbiRib3gtaGVpZ2h0LXB4OiAjeyRib3gtaGVpZ2h0fXB4O1xyXG5cclxuJGJveC1sZW5ndGgtaGFsdmVkLXB4OiBjYWxjKCgjeyRib3gtbGVuZ3RofSAvIDIpICogMXB4KTtcclxuJGJveC13aWR0aC1oYWx2ZWQtcHg6IGNhbGMoKCN7JGJveC13aWR0aH0gLyAyKSAqIDFweCk7XHJcbiRib3gtZGlzdGFuY2UtZnJvbS1waXZvdC1weDogY2FsYygoI3skYm94LWhlaWdodH0gLyAyKSAqIDFweCk7XHJcblxyXG4vL3VzZSB0aGVzZSBuZXh0ICoyKiB2YXJpYWJsZXMgKGZyb250LCBiYWNrKSBpbiBqYXZhc2NyaXB0IHRvIGRldGVybWluZSBjYXJkIHBvc2l0aW9uXHJcbiRib3gtZnJvbnQtdHJhbnNsYXRlLXB4OiAjeyRib3gtZGlzdGFuY2UtZnJvbS1waXZvdC1weH07XHJcbiRib3gtYmFjay10cmFuc2xhdGUtcHg6IGNhbGMoI3skYm94LWxlbmd0aC1weH0gLSAjeyRib3gtZGlzdGFuY2UtZnJvbS1waXZvdC1weH0pO1xyXG4kYm94LXJpZ2h0LXRyYW5zbGF0ZS1weDogY2FsYygjeyRib3gtd2lkdGgtcHh9IC0gI3skYm94LWRpc3RhbmNlLWZyb20tcGl2b3QtcHh9KTtcclxuXHJcbi5mbGV4IGxpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZmxleCA+IGxpID4gbGFiZWwge1xyXG4gIGZsZXg6IDEgMCA1MHB4O1xyXG4gIG1heC13aWR0aDogMTAwcHg7XHJcbn1cclxuLyogV2UgdGVsbCBhbGwgaXRlbXMgdG8gYmUgMjAwcHggd2lkdGgsIHZpYSBmbGV4LWJhc2lzICovXHJcbi5mbGV4ID4gbGkgPiBsYWJlbCArICoge1xyXG4gIGZsZXg6IDMgMSAxMDBweDtcclxufVxyXG5cclxuLmZsZXggbGkgYnV0dG9uIHtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgcGFkZGluZzogMjJweCA0NnB4O1xyXG59XHJcbiIsIkBpbXBvcnQgJ3NyYy9zdHlsZXMvYmFzZS5zY3NzJztcclxuXHJcbi8vIG1pc2NcclxuLmNjLXNlbGVjdCB7XHJcbiAgICBjb2xvcjogJHByaW1hcnktZm9udC1jb2xvcjtcclxuICAgIGJhY2tncm91bmQ6ICR0ZXJ0aWFyeS1jYXJkLWJhY2tncm91bmQ7XHJcbiAgICBmb250LWZhbWlseTogJGxpc3QtZm9udC1mYW1pbHk7XHJcbiAgICBmb250LXNpemU6ICRsaXN0LWZvbnQtc2l6ZTtcclxufVxyXG5cclxuLmNjLW9wdGlvbiB7XHJcbiAgICBjb2xvcjogJHByaW1hcnktZm9udC1jb2xvcjtcclxuICAgIGJhY2tncm91bmQ6ICRzZWNvbmRhcnktY2FyZC1iYWNrZ3JvdW5kO1xyXG4gICAgZm9udC1mYW1pbHk6ICRsaXN0LWZvbnQtZmFtaWx5O1xyXG4gICAgZm9udC1zaXplOiAkbGlzdC1mb250LXNpemU7XHJcbn1cclxuXHJcbmlucHV0IHsgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY1NjM2MTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgLy93aWR0aDogNDAwcHg7XHJcbiAgLy8gd2lkdGg6IDYwZW07XHJcbiAgZm9udC1mYW1pbHk6ICRsaXN0LWZvbnQtZmFtaWx5O1xyXG4gIGZvbnQtc2l6ZTogJGxpc3QtZm9udC1zaXplO1xyXG59XHJcblxyXG5cclxuLy8gZnJvbnQgLyBiYWNrIGJveCBjb2xvcnNcclxuXHJcbi50cC13cmFwcGVyIHtcclxuICBwZXJzcGVjdGl2ZTogODAwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnRwLWNhcmQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogJGNhcmQtd2lkdGgtd2l0aC1wYWRkaW5nLXB4O1xyXG4gIGhlaWdodDogJGNhcmQtaGVpZ2h0LXdpdGgtcGFkZGluZy1weDtcclxuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcztcclxuXHJcbiAgJi0taW4tYm94IHtcclxuICAgIEBleHRlbmQgLnRwLWNhcmQ7XHJcbiAgICB3aWR0aDogJGNhcmQtaW4tYm94LXdpZHRoLXB4O1xyXG4gICAgaGVpZ2h0OiAkY2FyZC1pbi1ib3gtaGVpZ2h0LXB4O1xyXG4gIH1cclxufVxyXG5cclxuLnRwLWNhcmRfX3NpZGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICAvL3BhZGRpbmc6ICRjYXJkLXBhZGRpbmctcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBjb2xvcjogJHByaW1hcnktZm9udC1jb2xvcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxuXHJcbiAgJi0taW4tYm94IHtcclxuICAgIEBleHRlbmQgLnRwLWNhcmRfX3NpZGU7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogMzUwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTRweDtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgIC8vdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIGNlbnRlcjtcclxuICB9XHJcbn1cclxuLnRwLWNhcmRfX2Zyb250IHtcclxuICBiYWNrZ3JvdW5kOiAkcHJpbWFyeS1jYXJkLWJhY2tncm91bmQ7XHJcbn1cclxuLnRwLWNhcmRfX2JhY2sge1xyXG4gIGJhY2tncm91bmQ6ICMyMzI2MmQ7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE3OS45ZGVnKTtcclxufVxyXG4udGl0bGUge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkNvbWljIFNhbnMgTVNcIiwgXCJDb21pYyBTYW5zXCIsIGN1cnNpdmU7XHJcbn1cclxuIiwiQGltcG9ydCAnc3JjL3N0eWxlcy9iYXNlLnNjc3MnO1xyXG5AaW1wb3J0ICdzcmMvc3R5bGVzL2N1ZS1jYXJkLnNjc3MnO1xyXG5cclxuLmNvbmdyYXR1bGF0aW9ucy10cC1jYXJkX19zaWRlIHtcclxuICAgIEBleHRlbmQgLnRwLWNhcmRfX3NpZGU7XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjNiM2IzO1xyXG4gICAgZm9udC1mYW1pbHk6ICRsaXN0LWZvbnQtZmFtaWx5O1xyXG4gICAgZm9udC1zaXplOiA1ZW07XHJcbn1cclxuXHJcbiRleHRyYTogNTBweDtcclxuXHJcbi5xdWl6LXdyYXBwZXIge1xyXG4gICAgaGVpZ2h0OiBjYWxjKCAjeyRjYXJkLWhlaWdodC13aXRoLXBhZGRpbmctcHh9ICsgI3skZXh0cmF9ICk7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/quiz/quiz.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/quiz/quiz.component.ts ***!
  \***************************************************/
/*! exports provided: QuizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizComponent", function() { return QuizComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_study_topic_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/study-topic-manager.service */ "./src/app/services/study-topic-manager.service.ts");
/* harmony import */ var src_app_models_cue_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/cue-card */ "./src/app/models/cue-card.ts");
/* harmony import */ var _cue_card_cue_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cue-card/cue-card.component */ "./src/app/components/cue-card/cue-card.component.ts");
/* harmony import */ var src_app_generated_styles_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/generated/styles/base */ "./src/app/generated/styles/base.ts");






// Responsible for administering a session's test of this set of cue cards, as it progresses through the leitner-system.
// does not track multiple attempts in a single session, deliberately to mirror website design at `ncase.me/remember`, but also to be forgiving to learners.
// Additionally, carefully controls the apperance of new cards at specific timings of animation.
var QuizComponent = /** @class */ (function () {
    function QuizComponent(stm, componentFactoryResolver) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.quizzingCards = [];
        this.hasSeenBack = false;
        this.hasRecalled = false;
        this.slideAnimDone = false;
        // Keep track of list of generated _components for removal purposes
        this._components = [];
        this.cueCardHeight = this.getCssObject('$card-height-with-padding-px').compiledValue;
        //TODO: decide which "cleaner" coding style I prefer better -- A) passing always by parameter, or B) referencing class vars inside fns? 
        //since the 'pass-by-val' nature of javascript *means* params are always *true* copies... as all functional params in javascript are...
        this.pickQuizCard(stm.studiableActive.quizCueCards);
    }
    QuizComponent.prototype.ngOnInit = function () {
    };
    QuizComponent.prototype.ngAfterViewInit = function () {
        this.addComponent(this.quizzingCards[0]);
        //this eliminates the issue with `ExpressionChangedAfterItHasBeenCheckedError`... 
        this._components[0].changeDetectorRef.detectChanges();
    };
    QuizComponent.prototype.addComponent = function (qcc) {
        var _this = this;
        // Create component dynamically inside the ng-template
        var componentClass = _cue_card_cue_card_component__WEBPACK_IMPORTED_MODULE_4__["CueCardComponent"];
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentClass);
        var component = this.container.createComponent(componentFactory);
        component.instance.cueCard = qcc;
        // vscode better understands types here, so these event binds stay here, to protect me from me.
        component.instance.isDoneAnim.subscribe(function (_evt) { return _this.onDoneAnimSlide(); });
        component.instance.onBackShown.subscribe(function (_evt) { return _this.showButtons(_evt); });
        //the template `quiz.component.html` contains additional stylings that are significantly affected by this "absolute" property
        //necessary to prevent overlapping second-instantiated `c-c-c`
        component.location.nativeElement.style.position = "absolute";
        //necessary bc of above position: absolute, to center horizontally.
        component.location.nativeElement.style.left = 0;
        component.location.nativeElement.style.right = 0;
        component.location.nativeElement.style.margin = "auto";
        // Push the component so that we can keep track of which _components are created
        this._components.push(component);
    };
    QuizComponent.prototype.removeFirstComponent = function () {
        // Find the first component
        var component = this._components.find(function (component) { return component.instance instanceof _cue_card_cue_card_component__WEBPACK_IMPORTED_MODULE_4__["CueCardComponent"]; });
        var componentIndex = this._components.indexOf(component);
        if (componentIndex !== -1) {
            // Remove component from both view and array
            this.container.remove(this.container.indexOf(component));
            this._components.splice(componentIndex, 1);
        }
    };
    QuizComponent.prototype.pickQuizCard = function (quizCueCards) {
        //filter out cards successfully recalled
        this.quizzableRemains = quizCueCards.filter(function (qcc) { return qcc.recall !== src_app_models_cue_card__WEBPACK_IMPORTED_MODULE_3__["QuizStatus"].pass; });
        //serve all non-attempted once in order, then serve any remaining un-passed in random order.
        var nonAttempted = this.quizzableRemains.filter(function (qcc) { return !qcc.attempted; });
        if (nonAttempted.length > 0) {
            this.quizzingCards.push(this.quizzableRemains.find(function (qcc) { return !qcc.attempted; }));
        }
        else if (this.quizzableRemains.length > 0) {
            var index = Math.floor(Math.random() * this.quizzableRemains.length);
            this.quizzingCards.push(this.quizzableRemains[index]);
        }
        else {
            //no cards left to quiz anymore
            this.quizzingCards = null;
        }
        //reset
        this.hasSeenBack = false;
    };
    //upon user successful recollection, trigger next card sequence, including animation.
    QuizComponent.prototype.yahRecalled = function (qcc) {
        qcc.recall = src_app_models_cue_card__WEBPACK_IMPORTED_MODULE_3__["QuizStatus"].pass;
        this.pickQuizCard(this.quizzableRemains);
        //any quizzing cards left
        if (this.quizzingCards) {
            //trigger animation: slide right off screen
            this._components[0].instance.hasRecalled = true;
            this.addComponent(this.quizzingCards.slice(-1)[0]); //gets last element.
        }
        else {
            //go immediately to normal "onDoneAnimSlide" scenario, since this time we're skipping that anyways.
            this.onDoneAnimSlide();
        }
    };
    //TODO: solve bug with rapid clicking: at some point, enough clicks here somehow stops the "auto-flip" happening.
    QuizComponent.prototype.nahForgot = function (qcc) {
        qcc.recall = src_app_models_cue_card__WEBPACK_IMPORTED_MODULE_3__["QuizStatus"].fail;
        qcc.attempted = true;
        this.pickQuizCard(this.quizzableRemains);
        //trigger animation: slide left and back under 'pile'.
        this._components[0].instance.hasRecalled = false;
        if (this.quizzingCards) {
            this.addComponent(this.quizzingCards.slice(-1)[0]); //gets last element.
        }
    };
    QuizComponent.prototype.showButtons = function ($event) {
        this.hasSeenBack = $event;
    };
    QuizComponent.prototype.onDoneAnimSlide = function () {
        this.slideAnimDone = true;
        if (this.quizzingCards) {
            this.setSecondCardAsPrimary();
        }
        this.removeFirstComponent();
        this.slideAnimDone = false;
    };
    QuizComponent.prototype.setSecondCardAsPrimary = function () {
        this.quizzingCards[0] = this.quizzingCards[1];
        this.quizzingCards.splice(-1, 1);
    };
    //TODO: put in utils class or something
    QuizComponent.prototype.getCssObject = function (cssPropertyName) {
        var result = src_app_generated_styles_base__WEBPACK_IMPORTED_MODULE_5__["default"].variables.find(function (obj) {
            return obj.name === cssPropertyName;
        });
        return result;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('container', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"])
    ], QuizComponent.prototype, "container", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('cc_container'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], QuizComponent.prototype, "cc_container", void 0);
    QuizComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-quiz',
            template: __webpack_require__(/*! ./quiz.component.html */ "./src/app/components/quiz/quiz.component.html"),
            styles: [__webpack_require__(/*! ./quiz.component.scss */ "./src/app/components/quiz/quiz.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_study_topic_manager_service__WEBPACK_IMPORTED_MODULE_2__["StudyTopicManagerService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]])
    ], QuizComponent);
    return QuizComponent;
}());



/***/ }),

/***/ "./src/app/components/study-topic/study-topic.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/study-topic/study-topic.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  study-topic works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/study-topic/study-topic.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/study-topic/study-topic.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3R1ZHktdG9waWMvc3R1ZHktdG9waWMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/study-topic/study-topic.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/study-topic/study-topic.component.ts ***!
  \*****************************************************************/
/*! exports provided: StudyTopicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudyTopicComponent", function() { return StudyTopicComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StudyTopicComponent = /** @class */ (function () {
    function StudyTopicComponent() {
    }
    StudyTopicComponent.prototype.ngOnInit = function () {
    };
    StudyTopicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-study-topic',
            template: __webpack_require__(/*! ./study-topic.component.html */ "./src/app/components/study-topic/study-topic.component.html"),
            styles: [__webpack_require__(/*! ./study-topic.component.scss */ "./src/app/components/study-topic/study-topic.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StudyTopicComponent);
    return StudyTopicComponent;
}());



/***/ }),

/***/ "./src/app/components/test/test.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/test/test.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  <strong>cue-card-shoe-box works!</strong>\r\n</p>\r\n\r\n<STRONG>\r\n<div class=\"scene\">\r\n  <div class=\"cube show-back\">\r\n    <div class=\"cube__face cube__face--front\">FRONT</div>\r\n    <div class=\"cube__face cube__face--back\">BACK</div>\r\n    <div class=\"cube__face cube__face--right\">RIGHT</div>\r\n    <div class=\"cube__face cube__face--left\">LEFT</div>\r\n    <!-- <div class=\"cube__face cube__face--top\">TOP</div> -->\r\n    <!-- <div class=\"cube__face cube__face--bottom\">BOTTOM</div> -->\r\n  </div>\r\n</div>\r\n</STRONG>\r\n\r\n<!-- \r\n<div class=\"scene\">\r\n  <div class=\"box\">\r\n    <div id=\"faces\">\r\n        <div class=\"box__face box__face--top\">top</div>\r\n        <div class=\"box__face box__face--bottom\">bottom</div>\r\n        <div class=\"box__face box__face--back\">back</div>\r\n        <div class=\"box__face box__face--front\">front</div>\r\n        <div class=\"box__face box__face--left\">left</div>\r\n        <div class=\"box__face box__face--right\">right</div>    \r\n    </div>\r\n\r\n    <div id=\"cards\">\r\n      <ng-container *ngFor=\"let cueCard of ccLoaderService.cueCards\">\r\n        <app-cue-card [cueCard]=\"cueCard\" class=\"put-card-in-box\" shoeBox=\"anyStringAtAll\"></app-cue-card>\r\n      </ng-container>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n -->"

/***/ }),

/***/ "./src/app/components/test/test.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/test/test.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".scene {\n  width: 200px;\n  height: 200px;\n  -webkit-perspective: 600px;\n          perspective: 600px; }\n\n.cube {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d; }\n\n.cube__face {\n  position: absolute;\n  width: 200px;\n  height: 200px;\n  background-color: rgba(255, 69, 0, 0.2);\n  border: 3px dashed white; }\n\n.cube__face--front {\n  -webkit-transform: rotateY(0deg) translateZ(100px);\n          transform: rotateY(0deg) translateZ(100px);\n  width: 220px;\n  height: 200px; }\n\n.cube__face--right {\n  -webkit-transform: rotateY(90deg) translateZ(120px);\n          transform: rotateY(90deg) translateZ(120px); }\n\n.cube__face--back {\n  -webkit-transform: rotateY(180deg) translateZ(100px);\n          transform: rotateY(180deg) translateZ(100px); }\n\n.cube__face--left {\n  -webkit-transform: rotateY(-90deg) translateZ(100px);\n          transform: rotateY(-90deg) translateZ(100px); }\n\n.cube {\n  -webkit-transform: translateZ(-100px);\n          transform: translateZ(-100px); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90ZXN0L0M6XFxVc2Vyc1xcaWFubmFcXERvY3VtZW50c1xcR2l0XFxzbFxcbmctY3VlLWNhcmQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHRlc3RcXHRlc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLDBCQUFrQjtVQUFsQixrQkFBa0IsRUFBQTs7QUFJcEI7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixvQ0FBNEI7VUFBNUIsNEJBQTRCLEVBQUE7O0FBRzlCO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUNBQXVDO0VBQ3ZDLHdCQUF3QixFQUFBOztBQUsxQjtFQUFzQixrREFBNEM7VUFBNUMsMENBQTRDO0VBQ2hFLFlBQVk7RUFDWixhQUFhLEVBQUE7O0FBRWY7RUFBc0IsbURBQTRDO1VBQTVDLDJDQUE0QyxFQUFBOztBQUVsRTtFQUFzQixvREFBNEM7VUFBNUMsNENBQTRDLEVBQUE7O0FBQ2xFO0VBQXNCLG9EQUE0QztVQUE1Qyw0Q0FBNEMsRUFBQTs7QUFhbEU7RUFBUSxxQ0FBNkI7VUFBN0IsNkJBQTZCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Rlc3QvdGVzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uc2NlbmUge1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIHBlcnNwZWN0aXZlOiA2MDBweDtcclxuICAvL2JvcmRlcjogMXB4IGRhc2hlZCBncmF5O1xyXG59XHJcblxyXG4uY3ViZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG59XHJcblxyXG4uY3ViZV9fZmFjZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCA2OSwgMCwgMC4yKTtcclxuICBib3JkZXI6IDNweCBkYXNoZWQgd2hpdGU7XHJcbiAgLy9sZWZ0OiAtMTEwcHg7XHJcbn1cclxuXHJcbi8vKFNURVAgMSk6IGFjY2VwdCBwcmVtaXNlIG9mIGFuIGluaXRpYWwgXCJzcXVhcmUgZGlzdGFuY2UgZnJvbSBlcGljZW50ZXIsIGFuZCB1bmRlcnN0YW5kIHRoZSBsZWZ0LWhhbmQgYXhlcyBydWxlIHN5c3RlbSBpbiB1c2UhXHJcbi5jdWJlX19mYWNlLS1mcm9udCAgeyB0cmFuc2Zvcm06IHJvdGF0ZVkoICAwZGVnKSB0cmFuc2xhdGVaKDEwMHB4KTsgXHJcbiAgd2lkdGg6IDIyMHB4OyAgLy8oU1RFUCAyKTogZWxpbWluYXRlIGxlZnQgYW5kIHRvcCwgdGhhdCBtYWRlIHRoaXMgdG9vIGNvbmZ1c2luZy4ganVzdCBtYWtlIGFzIHdpZGUgb3IgdGFsbCBhcyBJIGxpa2UuXHJcbiAgaGVpZ2h0OiAyMDBweDtcclxufVxyXG4uY3ViZV9fZmFjZS0tcmlnaHQgIHsgdHJhbnNmb3JtOiByb3RhdGVZKCA5MGRlZykgdHJhbnNsYXRlWigxMjBweCk7IH0gLy8oU1RFUCAzKToganVzdCBwdXQgYWxsIHNoaWZ0aW5nIG9uIG9uZSBzaWRlLCB0aGUgc2lkZSBmYXIgYXdheSBmcm9tIHRoZSBUT1AgTEVGVCBDT1JORVIgb2YgdGhlIGFjdHVhbCBwYXJlbnQgZGl2IVxyXG4vLyBha2EgOiBwdXQgYWxsIHRoZSBcImV4dHJhIHNpemVcIiAoMjBweCkgYmV5b25kIHRoZSBcIm1pbmltYWwgc3F1YXJlXCIgaW50byBoZXJlIG9ubHkhIFxyXG4uY3ViZV9fZmFjZS0tYmFjayAgIHsgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZykgdHJhbnNsYXRlWigxMDBweCk7IH1cclxuLmN1YmVfX2ZhY2UtLWxlZnQgICB7IHRyYW5zZm9ybTogcm90YXRlWSgtOTBkZWcpIHRyYW5zbGF0ZVooMTAwcHgpOyB9IC8vKFNURVAgNCk6IGxlYXZlIGFsb25lLCBkbyBub3QgcHV0IGFueSBcImV4dHJhIHNpemVcIiBoZXJlIChsZWF2ZSBhdCBub3JtYWwgdHJhbnNsYXRpb24gZGlzdGFuY2UgZnJvbSBcInNxdWFyZSBjZW50ZXJcIiEpICBcclxuLy8gLmN1YmVfX2ZhY2UtLXRvcCAgICB7IHRyYW5zZm9ybTogcm90YXRlWCggOTBkZWcpIHRyYW5zbGF0ZVooMTAwcHgpOyB9XHJcbi8vIC5jdWJlX19mYWNlLS1ib3R0b20geyB0cmFuc2Zvcm06IHJvdGF0ZVgoLTkwZGVnKSB0cmFuc2xhdGVaKDEwMHB4KTsgfVxyXG5cclxuLy8gLmN1YmUuc2hvdy1mcm9udCAgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTEwMHB4KSByb3RhdGVZKCAgIDBkZWcpOyB9XHJcbi8vIC5jdWJlLnNob3ctcmlnaHQgIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0xMDBweCkgcm90YXRlWSggLTkwZGVnKTsgfVxyXG4vLyAuY3ViZS5zaG93LWJhY2sgICB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWigtMTAwcHgpIHJvdGF0ZVkoLTE4MGRlZyk7IH1cclxuLy8gLmN1YmUuc2hvdy1sZWZ0ICAgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTEwMHB4KSByb3RhdGVZKCAgOTBkZWcpOyB9XHJcbi8vIC5jdWJlLnNob3ctdG9wICAgIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0xMDBweCkgcm90YXRlWCggLTkwZGVnKTsgfVxyXG4vLyAuY3ViZS5zaG93LWJvdHRvbSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWigtMTAwcHgpIHJvdGF0ZVgoICA5MGRlZyk7IH1cclxuXHJcblxyXG5cclxuLmN1YmUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTEwMHB4KTsgfVxyXG5cclxuXHJcblxyXG4vLyBAaW1wb3J0ICdzcmMvc3R5bGVzL2N1ZS1jYXJkLnNjc3MnO1xyXG5cclxuXHJcbi8vICRib3gtbGVuZ3RoOiAzMDA7XHJcbi8vICRib3gtd2lkdGg6IDIwMDtcclxuLy8gJGJveC1oZWlnaHQ6IDEwMDtcclxuXHJcbi8vICRib3gtbGVuZ3RoLWhhbHZlZDogY2FsYyggKCAjeyRib3gtbGVuZ3RofSAvIDIgKSAqIDFweCApIDtcclxuLy8gJGJveC13aWR0aC1oYWx2ZWQ6ICBjYWxjKCAoICN7JGJveC13aWR0aH0gLyAyICkgKiAxcHggKSA7XHJcbi8vICRib3gtaGVpZ2h0LWhhbHZlZDogY2FsYyggKCAjeyRib3gtaGVpZ2h0fSAvIDIpICogMXB4ICkgO1xyXG5cclxuLy8gLnNjZW5lIHtcclxuLy8gICBwZXJzcGVjdGl2ZTogNTAwcHg7XHJcbi8vICAgLy8gcGVyc3BlY3RpdmUtb3JpZ2luOiAtODAlO1xyXG4vLyAgIC8vIHBlcnNwZWN0aXZlLW9yaWdpbjogdG9wIGxlZnQ7XHJcbi8vICAgcGVyc3BlY3RpdmUtb3JpZ2luOiBib3R0b20gcmlnaHQ7XHJcbi8vICAgd2lkdGg6IDc2OHB4O1xyXG4vLyAgIGhlaWdodDogNTEycHg7XHJcbi8vICAgYm9yZGVyOiAycHggZGFzaGVkIGdyYXk7XHJcbi8vICAgbWFyZ2luOiAxMDBweDtcclxuLy8gfVxyXG5cclxuLy8gLmJveCB7XHJcbi8vICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuLy8gICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbi8vICAgd2lkdGg6ICRib3gtd2lkdGggKyBweDtcclxuLy8gICBoZWlnaHQ6ICRib3gtbGVuZ3RoICsgcHg7XHJcbi8vICAgLy8gdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC01MHB4KTsgXHJcbi8vICAgLy8gbGVmdDogNDUwcHg7XHJcbi8vICAgLy8gdG9wOiAyNTBweDtcclxuLy8gICAvLyBsZWZ0OiAyMDBweDtcclxuLy8gICAvLyB0b3A6IDIwMHB4O1xyXG4vLyB9XHJcblxyXG4vLyAuYm94X19mYWNlIHtcclxuLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDY5LCAwLCAwLjYpO1xyXG4vLyAgIGJvcmRlcjogNXB4IHNvbGlkIGJsYWNrO1xyXG4vLyAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuLy8gfVxyXG5cclxuLy8gLmJveF9fZmFjZS0tdG9wLCBcclxuLy8gLmJveF9fZmFjZS0tYm90dG9tIHtcclxuLy8gICAgIHdpZHRoOiAkYm94LWxlbmd0aCArIHB4O1xyXG4vLyAgICAgaGVpZ2h0OiAkYm94LXdpZHRoICsgcHg7XHJcbi8vIH1cclxuXHJcbi8vIC5ib3hfX2ZhY2UtLWJhY2ssXHJcbi8vIC5ib3hfX2ZhY2UtLWZyb250IHtcclxuLy8gICAgIHdpZHRoOiAkYm94LWhlaWdodCArIHB4O1xyXG4vLyAgICAgaGVpZ2h0OiAkYm94LXdpZHRoICsgcHg7XHJcbi8vICAgICBsZWZ0OiAxMDBweCA7XHJcbi8vIH1cclxuXHJcbi8vIC5ib3hfX2ZhY2UtLWxlZnQsXHJcbi8vIC5ib3hfX2ZhY2UtLXJpZ2h0IHtcclxuLy8gICAgIHdpZHRoOiAkYm94LWxlbmd0aCArIHB4O1xyXG4vLyAgICAgaGVpZ2h0OiAkYm94LWhlaWdodCArIHB4O1xyXG4vLyAgICAgdG9wOiA1MHB4IDtcclxuLy8gfVxyXG5cclxuLy8gLmJveF9fZmFjZS0tdG9wICAgIHsgdHJhbnNmb3JtOiByb3RhdGVZKCAgMGRlZykgdHJhbnNsYXRlWigkYm94LWhlaWdodC1oYWx2ZWQpOyB9XHJcbi8vIC5ib3hfX2ZhY2UtLWJvdHRvbSB7IHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpIHRyYW5zbGF0ZVooJGJveC1oZWlnaHQtaGFsdmVkKTsgfVxyXG4vLyAuYm94X19mYWNlLS1mcm9udCAgeyB0cmFuc2Zvcm06IHJvdGF0ZVkoLTkwZGVnKSB0cmFuc2xhdGVaKCRib3gtbGVuZ3RoLWhhbHZlZCk7IH1cclxuLy8gLmJveF9fZmFjZS0tYmFjayAgIHsgdHJhbnNmb3JtOiByb3RhdGVZKCA5MGRlZykgdHJhbnNsYXRlWigkYm94LWxlbmd0aC1oYWx2ZWQpOyB9XHJcbi8vIC5ib3hfX2ZhY2UtLWxlZnQgICB7IHRyYW5zZm9ybTogcm90YXRlWCggOTBkZWcpIHRyYW5zbGF0ZVooJGJveC13aWR0aC1oYWx2ZWQpOyB9XHJcbi8vIC5ib3hfX2ZhY2UtLXJpZ2h0ICB7IHRyYW5zZm9ybTogcm90YXRlWCgtOTBkZWcpIHRyYW5zbGF0ZVooJGJveC13aWR0aC1oYWx2ZWQpOyB9XHJcblxyXG4vLyAuYm94LnNob3ctdG9wICAgIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKGNhbGMoIC0xICogI3skYm94LWhlaWdodC1oYWx2ZWR9KSkgcm90YXRlWSggICAwZGVnKTsgfVxyXG4vLyAuYm94LnNob3ctYm90dG9tIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKGNhbGMoIC0xICogI3skYm94LWhlaWdodC1oYWx2ZWR9KSkgcm90YXRlWSgtMTgwZGVnKTsgfVxyXG4vLyAuYm94LnNob3ctZnJvbnQgIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKGNhbGMoIC0xICogI3skYm94LWxlbmd0aC1oYWx2ZWR9KSkgcm90YXRlWSggIDkwZGVnKTsgfVxyXG4vLyAuYm94LnNob3ctYmFjayAgIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKGNhbGMoIC0xICogI3skYm94LWxlbmd0aC1oYWx2ZWR9KSkgcm90YXRlWSggLTkwZGVnKTsgfVxyXG4vLyAuYm94LnNob3ctbGVmdCAgIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKGNhbGMoIC0xICogI3skYm94LXdpZHRoLWhhbHZlZH0pKSAgcm90YXRlWCggLTkwZGVnKTsgfVxyXG4vLyAuYm94LnNob3ctcmlnaHQgIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKGNhbGMoIC0xICogI3skYm94LXdpZHRoLWhhbHZlZH0pKSAgcm90YXRlWCggIDkwZGVnKTsgfVxyXG5cclxuLy8gLmJveC5zaG93LWlzbywgLmJveC5zaG93LWlzb21ldHJpYyB7IHRyYW5zZm9ybTogcm90YXRlWCggNDVkZWcpIHJvdGF0ZVooLTQ1ZGVnKTsgfVxyXG5cclxuLy8gLnB1dC1jYXJkLWluLWJveCB7XHJcbi8vICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgIHRyYW5zZm9ybTogcm90YXRlWCgtOTBkZWcpIHJvdGF0ZVkoLTkwZGVnKSB0cmFuc2xhdGVaKC0xMDBweCk7XHJcbi8vIH0iXX0= */"

/***/ }),

/***/ "./src/app/components/test/test.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/test/test.component.ts ***!
  \***************************************************/
/*! exports provided: TestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponent", function() { return TestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_cue_card_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/cue-card-loader.service */ "./src/app/services/cue-card-loader.service.ts");



var TestComponent = /** @class */ (function () {
    function TestComponent(ccLoaderService) {
        this.ccLoaderService = ccLoaderService;
    }
    TestComponent.prototype.ngOnInit = function () { };
    TestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-test-box',
            template: __webpack_require__(/*! ./test.component.html */ "./src/app/components/test/test.component.html"),
            styles: [__webpack_require__(/*! ./test.component.scss */ "./src/app/components/test/test.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_cue_card_loader_service__WEBPACK_IMPORTED_MODULE_2__["CueCardLoaderService"]])
    ], TestComponent);
    return TestComponent;
}());



/***/ }),

/***/ "./src/app/generated/styles/base.ts":
/*!******************************************!*\
  !*** ./src/app/generated/styles/base.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    "variables": [
        {
            "name": "$primary-font-color",
            "value": "#fff",
            "compiledValue": "#fff"
        },
        {
            "name": "$primary-card-background",
            "value": "#f30d36",
            "compiledValue": "#f30d36"
        },
        {
            "name": "$secondary-card-background",
            "value": "#c30d16",
            "compiledValue": "#c30d16"
        },
        {
            "name": "$tertiary-card-background",
            "value": "#a30000",
            "compiledValue": "#a30000"
        },
        {
            "name": "$list-font-family",
            "value": "\"Trebuchet MS\", \"Lucida Grande\", \"Lucida Sans Unicode\", \"Lucida Sans\", Tahoma, sans-serif",
            "compiledValue": "Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif"
        },
        {
            "name": "$list-font-size",
            "value": "1.1em",
            "compiledValue": "1.1em"
        },
        {
            "name": "$card-width-px",
            "value": "400px",
            "compiledValue": "400px"
        },
        {
            "name": "$card-height-px",
            "value": "200px",
            "compiledValue": "200px"
        },
        {
            "name": "$card-padding-px",
            "value": "20px",
            "compiledValue": "20px"
        },
        {
            "name": "$card-width-with-padding-px",
            "value": "calc( #{$card-width-px} + #{$card-padding-px} + #{$card-padding-px} )",
            "compiledValue": "calc( 400px + 20px + 20px)"
        },
        {
            "name": "$card-height-with-padding-px",
            "value": "calc( #{$card-height-px} + #{$card-padding-px} + #{$card-padding-px} )",
            "compiledValue": "calc( 200px + 20px + 20px)"
        },
        {
            "name": "$card-slide-distance-px",
            "value": "calc( #{$card-width-with-padding-px} + 100px)",
            "compiledValue": "calc( calc( 400px + 20px + 20px) + 100px)"
        },
        {
            "name": "$card-in-box-width-px",
            "value": "200px",
            "compiledValue": "200px"
        },
        {
            "name": "$card-in-box-height-px",
            "value": "100px",
            "compiledValue": "100px"
        },
        {
            "name": "$magic-number-left-offset-px",
            "value": "53px",
            "compiledValue": "53px"
        },
        {
            "name": "$scene-width",
            "value": "768px",
            "compiledValue": "768px"
        },
        {
            "name": "$scene-height",
            "value": "512px",
            "compiledValue": "512px"
        },
        {
            "name": "$box-length",
            "value": "300",
            "compiledValue": "300"
        },
        {
            "name": "$box-width",
            "value": "244",
            "compiledValue": "244"
        },
        {
            "name": "$box-height",
            "value": "100",
            "compiledValue": "100"
        },
        {
            "name": "$box-length-px",
            "value": "#{$box-length}px",
            "compiledValue": "300px"
        },
        {
            "name": "$box-width-px",
            "value": "#{$box-width}px",
            "compiledValue": "244px"
        },
        {
            "name": "$box-height-px",
            "value": "#{$box-height}px",
            "compiledValue": "100px"
        },
        {
            "name": "$box-length-halved-px",
            "value": "calc((#{$box-length} / 2) * 1px)",
            "compiledValue": "calc((300 / 2) * 1px)"
        },
        {
            "name": "$box-width-halved-px",
            "value": "calc((#{$box-width} / 2) * 1px)",
            "compiledValue": "calc((244 / 2) * 1px)"
        },
        {
            "name": "$box-distance-from-pivot-px",
            "value": "calc((#{$box-height} / 2) * 1px)",
            "compiledValue": "calc((100 / 2) * 1px)"
        },
        {
            "name": "$box-front-translate-px",
            "value": "#{$box-distance-from-pivot-px}",
            "compiledValue": "calc((100 / 2) * 1px)"
        },
        {
            "name": "$box-back-translate-px",
            "value": "calc(#{$box-length-px} - #{$box-distance-from-pivot-px})",
            "compiledValue": "calc(300px - calc((100 / 2) * 1px))"
        },
        {
            "name": "$box-right-translate-px",
            "value": "calc(#{$box-width-px} - #{$box-distance-from-pivot-px})",
            "compiledValue": "calc(244px - calc((100 / 2) * 1px))"
        }
    ]
});


/***/ }),

/***/ "./src/app/models/cue-card.ts":
/*!************************************!*\
  !*** ./src/app/models/cue-card.ts ***!
  \************************************/
/*! exports provided: CueCard, QuizzingCueCard, QuizStatus, QuizzingMoment, StudyTopic, Studiable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CueCard", function() { return CueCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizzingCueCard", function() { return QuizzingCueCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizStatus", function() { return QuizStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizzingMoment", function() { return QuizzingMoment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudyTopic", function() { return StudyTopic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Studiable", function() { return Studiable; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

//very simple initial design for rapid prototyping
var CueCard = /** @class */ (function () {
    function CueCard(q, a, t) {
        this.question = q;
        this.answer = a;
        this.topicCurrent = t;
    }
    return CueCard;
}());

var QuizzingCueCard = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](QuizzingCueCard, _super);
    function QuizzingCueCard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return QuizzingCueCard;
}(CueCard));

var QuizStatus;
(function (QuizStatus) {
    QuizStatus[QuizStatus["fail"] = 0] = "fail";
    QuizStatus[QuizStatus["pass"] = 1] = "pass";
})(QuizStatus || (QuizStatus = {}));
//a historic record
var QuizzingMoment = /** @class */ (function () {
    //constructor(t: string) {
    function QuizzingMoment(t) {
        this.topic = t;
    }
    return QuizzingMoment;
}());

//(probably pointless) an abstraction for a string. (probably should get rid of)
var StudyTopic = /** @class */ (function () {
    function StudyTopic(t) {
        this._topic = t;
    }
    Object.defineProperty(StudyTopic.prototype, "topic", {
        get: function () { return this._topic; },
        set: function (topic) {
            this._topic = topic;
        },
        enumerable: true,
        configurable: true
    });
    return StudyTopic;
}());

var Studiable = /** @class */ (function () {
    function Studiable(st, cc) {
        this.studyTopic = st;
        this.quizCueCards = cc;
        //this.quizCueCards.map( x => x.visible = true );
    }
    return Studiable;
}());



/***/ }),

/***/ "./src/app/services/cue-card-loader.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/cue-card-loader.service.ts ***!
  \*****************************************************/
/*! exports provided: CueCardLoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CueCardLoaderService", function() { return CueCardLoaderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_db_fake_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/db-fake.service */ "./src/app/services/db-fake.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var CueCardLoaderService = /** @class */ (function () {
    function CueCardLoaderService(fakeDb) {
        this.fakeDb = fakeDb;
        //EventEmitters are implied by ng documentation to not be used in services, instead to use Obsersables in their place.
        //Observable was not robust enough, needs to be ~~Subject~~, rather, a BehaviorSubject (which *does* accept param for init).
        this._cueCards = [];
        this.cueCardsSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this._cueCards); //for now, choosing to emit ENTIRE ARRAY... even if that's too much data when get above exists.
        this.cueCards$ = this.cueCardsSource.asObservable();
        this._cueCardActive = null;
        this.cueCardActiveSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this._cueCardActive);
        this.cueCardActive$ = this.cueCardActiveSource.asObservable();
        this._cueCards = this.fakeDb.records;
        //i need to emit this right away ... my design is now RELIANT on this reactive pattern, so, since I'm REMOVING get, this MUST happen.
        this.cueCardsSource.next(this._cueCards);
    }
    Object.defineProperty(CueCardLoaderService.prototype, "cueCardActive", {
        //debugging side-effect: something breaks when debugging on the first pass, when clicking "Edit" in ccSelector, it doesn't fire the first time. So weird.
        get: function () {
            return this._cueCardActive;
        },
        set: function (cueCard) {
            if (this._cueCards.includes(cueCard) || cueCard === null) {
                this._cueCardActive = cueCard;
                this.cueCardActiveSource.next(cueCard);
                this.cueCardsSource.next(this._cueCards);
            }
            else {
                throw new Error("invalid CueCard, it wasn't included in the existing set! Cannot set active!");
            }
        },
        enumerable: true,
        configurable: true
    });
    //Deliberately *NOT* forcing what is active in the service when adding. That sholud purely be a view-user decision, should be a decoupled responsibility 
    CueCardLoaderService.prototype.add = function (cueCard) {
        if (cueCard !== null) {
            this._cueCards.push(cueCard);
            this.cueCardsSource.next(this._cueCards);
        }
        else {
            throw new Error("invalid CueCard, it was null! Cannot add!");
        }
    };
    CueCardLoaderService.prototype.edit = function (ccOriginal, ccNew) {
        if (ccNew != null && ccOriginal !== null && this._cueCards.includes(ccOriginal)) {
            //replace with new object
            var i = this._cueCards.indexOf(ccOriginal);
            this._cueCards[i] = ccNew;
            this.cueCardActiveSource.next(ccNew);
            this.cueCardsSource.next(this._cueCards);
        }
        else {
            throw new Error("invalid CueCard, it is null or not found! Cannot edit!");
        }
    };
    CueCardLoaderService.prototype.delete = function (cueCard) {
        if (cueCard !== null) {
            var i = this._cueCards.indexOf(cueCard);
            this._cueCards.splice(i, 1);
            this._cueCardActive = null;
            this.cueCardActiveSource.next(null);
            this.cueCardsSource.next(this._cueCards);
        }
        else {
            throw new Error("invalid CueCard, it was null! Cannot delete!");
        }
    };
    CueCardLoaderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_db_fake_service__WEBPACK_IMPORTED_MODULE_2__["DbFakeService"]])
    ], CueCardLoaderService);
    return CueCardLoaderService;
}());



/***/ }),

/***/ "./src/app/services/db-fake.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/db-fake.service.ts ***!
  \*********************************************/
/*! exports provided: DbFakeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DbFakeService", function() { return DbFakeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_cue_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/cue-card */ "./src/app/models/cue-card.ts");



var DbFakeService = /** @class */ (function () {
    //this will be used to fake store in a database for the time being.
    //intend this to be written more generically than just "cue card db".
    function DbFakeService() {
        this._records = [
            //the topic is necessarily something i know *VERY* WELL, so I don't 
            //get bogged down in researching unimportant facts I would care about.
            //ideally something I consider so trivial as it takes near-zero effort.
            //yet still factually verifiable externally
            new _models_cue_card__WEBPACK_IMPORTED_MODULE_2__["CueCard"]("Super Mario Bros is for what platform?", "Nintendo"),
            new _models_cue_card__WEBPACK_IMPORTED_MODULE_2__["CueCard"]("The first female protagonist in video games is named ____ ?", "Samus"),
            new _models_cue_card__WEBPACK_IMPORTED_MODULE_2__["CueCard"]("The code to unlock 30 bonus lives in Contra III is?", "up down up down left right left right a b"),
            new _models_cue_card__WEBPACK_IMPORTED_MODULE_2__["CueCard"]("The Super Famicom was released in what year?") //no idea---deliberately no answer.
        ];
        this._topics = [
            new _models_cue_card__WEBPACK_IMPORTED_MODULE_2__["StudyTopic"]("video games")
        ];
        this._studiables = [];
        this._studiables.push(new _models_cue_card__WEBPACK_IMPORTED_MODULE_2__["Studiable"](this.topics[0], this.records.slice(1)));
        this.studiableActive = this._studiables[0];
    }
    Object.defineProperty(DbFakeService.prototype, "records", {
        get: function () { return this._records; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DbFakeService.prototype, "topics", {
        get: function () { return this._topics; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(DbFakeService.prototype, "studiables", {
        get: function () { return this._studiables; },
        enumerable: true,
        configurable: true
    });
    DbFakeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DbFakeService);
    return DbFakeService;
}());



/***/ }),

/***/ "./src/app/services/study-topic-manager.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/study-topic-manager.service.ts ***!
  \*********************************************************/
/*! exports provided: StudyTopicManagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudyTopicManagerService", function() { return StudyTopicManagerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_db_fake_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/db-fake.service */ "./src/app/services/db-fake.service.ts");



var StudyTopicManagerService = /** @class */ (function () {
    function StudyTopicManagerService(db) {
        this._topics = db.topics;
        this._studiables = db.studiables;
        this.topicActive = db.topicActive;
        this.studiableActive = db.studiableActive;
    }
    Object.defineProperty(StudyTopicManagerService.prototype, "topics", {
        get: function () { return this._topics; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StudyTopicManagerService.prototype, "studiables", {
        get: function () { return this._studiables; },
        enumerable: true,
        configurable: true
    });
    StudyTopicManagerService.prototype.add = function (topic) {
        if (!this._topics.includes(topic)) {
            this._topics.push(topic);
        }
        else {
            throw new Error("Study Topic cannot be added, " + topic + " already exists!");
        }
    };
    //TODO: consider redesigning this... this might be a silly design, requiring to pass in the original and the new... 
    StudyTopicManagerService.prototype.edit = function (topicNew, topicOriginal) {
        if (topicNew && topicOriginal && this._topics.includes(topicOriginal)) {
            var i = this._topics.indexOf(topicOriginal);
            this._topics[i] = topicNew;
        }
        else {
            throw new Error("Cannot edit topic, either invalid type or " + topicOriginal + " doesn't exist!");
        }
    };
    StudyTopicManagerService.prototype.delete = function (topic) {
        if (topic) {
            var i = this._topics.indexOf(topic);
            this._topics.splice(i, 1);
            //this._cueCardActive = null;
            //this.cueCardActiveSource.next(null);
            //this.cueCardsSource.next(this._cueCards); 
        }
        else {
            throw new Error("Cannot delete topic " + this._topics + ", something went wrong!");
        }
    };
    StudyTopicManagerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_db_fake_service__WEBPACK_IMPORTED_MODULE_2__["DbFakeService"]])
    ], StudyTopicManagerService);
    return StudyTopicManagerService;
}());



/***/ }),

/***/ "./src/empty.ts":
/*!**********************!*\
  !*** ./src/empty.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ianna\Documents\Git\sl\ng-cue-card\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map