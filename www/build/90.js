webpackJsonp([90],{

/***/ 577:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginLayout1Module", function() { return LoginLayout1Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_layout_1__ = __webpack_require__(828);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginLayout1Module = (function () {
    function LoginLayout1Module() {
    }
    LoginLayout1Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login_layout_1__["a" /* LoginLayout1 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login_layout_1__["a" /* LoginLayout1 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__login_layout_1__["a" /* LoginLayout1 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], LoginLayout1Module);
    return LoginLayout1Module;
}());

//# sourceMappingURL=login-layout-1.module.js.map

/***/ }),

/***/ 828:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginLayout1; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginLayout1 = (function () {
    function LoginLayout1() {
        var _this = this;
        this.isUsernameValid = true;
        this.isPasswordValid = true;
        this.onEvent = function (event) {
            if (event == "onLogin" && !_this.validate()) {
                return;
            }
            if (_this.events[event]) {
                _this.events[event]({
                    'username': _this.username,
                    'password': _this.password
                });
            }
        };
    }
    LoginLayout1.prototype.validate = function () {
        this.isUsernameValid = true;
        this.isPasswordValid = true;
        if (!this.username || this.username.length == 0) {
            this.isUsernameValid = false;
        }
        if (!this.password || this.password.length == 0) {
            this.isPasswordValid = false;
        }
        return this.isPasswordValid && this.isUsernameValid;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], LoginLayout1.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], LoginLayout1.prototype, "events", void 0);
    LoginLayout1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'login-layout-1',template:/*ion-inline-start:"/Users/xoxo/Downloads/prj666-g1/src/components/login/layout-1/login.html"*/'<!-- Themes Login + logo 1 -->\n\n<ion-content>\n\n  <ion-grid no-padding *ngIf="data != null">\n\n    <ion-row padding-horizontal align-self-center>\n\n      <ion-col align-self-start col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6>\n\n        <button ion-button button-clear text-capitalize clear float-left (click)="onEvent(\'onSkip\')">{{data.skip}}</button>\n\n        <button ion-button button-clear text-capitalize clear float-right (click)="onEvent(\'onForgot\')">{{data.forgotPassword}}</button>\n\n      </ion-col>\n\n      <ion-col align-self-end col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6>\n\n        <!---Logo-->\n\n        <img [src]="data.logo">\n\n        <!---Logo Subtitle-->\n\n        <h2 login-subtitle no-margin>{{data.subtitle}}</h2>\n\n        <!---Logo Title-->\n\n        <h1 ion-text padding-bottom login-title no-margin>{{data.title}}</h1>\n\n      </ion-col>\n\n      <ion-col align-self-start col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6>\n\n        <!---Input field username-->\n\n        <ion-item transparent>\n\n          <ion-label stacked>{{data.labelUsername}}</ion-label>\n\n          <ion-input required placeholder="{{data.username}}" type="text" [(ngModel)]="username"></ion-input>\n\n          <ion-label error-field color="primary" no-margin *ngIf="!isUsernameValid">{{data.errorUser}}</ion-label>\n\n      </ion-item>\n\n        <!---Input field password-->\n\n        <ion-item>\n\n          <ion-label stacked>{{data.labelPassword}}</ion-label>\n\n          <ion-input required type="password" placeholder="{{data.password}}" [(ngModel)]="password"></ion-input>\n\n          <ion-label error-field color="primary" no-margin *ngIf="!isPasswordValid">{{data.errorPassword}}</ion-label>\n\n        </ion-item>\n\n      </ion-col>\n\n      <!---Share Section-->\n\n      <ion-col align-self-end bottom-form col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6>\n\n        <!---Login button-->\n\n        <button ion-button  full text-capitalize default-button (click)="onEvent(\'onLogin\')">{{data.login}}</button>\n\n        <!---Facebook button-->\n\n        <button ion-button default-button color="facebook" full text-capitalize block (click)="onEvent(\'onFacebook\')">Login with Facebook</button>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <div description text-center>\n\n          <p>Don\'t have account? <a text-capitalize ion-text color="primary" (click)="onEvent(\'onRegister\')">{{data.register}}</a></p>\n\n        </div>\n\n      </ion-col>\n\n      <!---End Share Section-->\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/xoxo/Downloads/prj666-g1/src/components/login/layout-1/login.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], LoginLayout1);
    return LoginLayout1;
}());

//# sourceMappingURL=login-layout-1.js.map

/***/ })

});
//# sourceMappingURL=90.js.map