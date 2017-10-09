webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/account/hero-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h1>Hero Form</h1>\n    <form (ngSubmit)=\"onSubmit()\" #heroForm=\"ngForm\" name=\"userForm\" style=\"padding-left: 400px\">    \n\n      <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input type=\"text\" class=\"form-control\" id=\"username\" name=\"username\" [(ngModel)]=\"model.username\" minlength=\"4\" #username=\"ngModel\" required style=\"width:400px\">\n        <div *ngIf=\"username.invalid && (username.dirty || username.touched)\"\n             class=\"alert alert-info\" style=\"width:400px\">\n\n          <div *ngIf=\"username.errors.required\">\n            Username is required.\n          </div>\n          <div *ngIf=\"username.errors.minlength\">\n            Username must be at least 4 characters long.\n          </div>\n\n          <div *ngIf=\"this.accountsService.username_error\">\n            Invalid Username\n          </div>\n\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"email\">Email</label>\n        <input type=\"Email\" class=\"form-control\" id=\"email\" name=\"email\" [(ngModel)]=\"model.email\" #email=\"ngModel\"    required pattern=\"[^ @]*@[^ @]*\" style=\"width:400px\">\n        <div *ngIf=\"email.invalid && (email.dirty || email.touched)\"\n             class=\"alert alert-info\" style=\"width:400px\">\n\n          <div *ngIf=\"email.errors.required\">\n            Email is required.\n          </div>\n          <div *ngIf=\"email.errors.pattern\">\n            Email address is not valid.\n          </div>\n\n          <div *ngIf=\"this.accountsService.email_error\">\n            This email address is already registered\n          </div>\n\n        </div>\n\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"password1\">Password</label>\n        <input type=\"Password\" class=\"form-control\" id=\"password1\" required minlength=\"8\" \n            [(ngModel)]=\"model.password1\" name=\"password1\" #password1=\"ngModel\" style=\"width:400px\">\n        <div *ngIf=\"password1.invalid && (password1.dirty || password1.touched)\"\n             class=\"alert alert-info\" style=\"width:400px\">\n\n          <div *ngIf=\"password1.errors.required\">\n            Password is required.\n          </div>\n          <div *ngIf=\"password1.errors.minlength\">\n            Password must be 8 characters long\n          </div>\n\n        </div>\n\n          <br />\n\n        <label for=\"password2\"> Confirm Password</label>\n        <input type=\"Password\" class=\"form-control\" id=\"password2\" required minlength=\"8\" \n            [(ngModel)] =\"model.password2\" name=\"password2\" #password2=\"ngModel\" style=\"width:400px\">     \n        <div *ngIf=\"password2.touched && (password1.value!=password2.value) \"\n             class=\"alert alert-info\" style=\"width:400px\">\n              Password doesnot match\n        </div>\n      </div>\n\n      <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!heroForm.form.valid\" \n        [disabled]=\"password1.value!=password2.value\" >Signup</button>\n    </form>\n</div>\n\n\n<!-- <pre>{{ heroForm.value | json }}</pre> -->"

/***/ }),

/***/ "../../../../../src/app/account/hero-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hero_hero__ = __webpack_require__("../../../../../src/app/hero/hero.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_accounts_service__ = __webpack_require__("../../../../../src/app/services/accounts.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeroFormComponent = (function () {
    function HeroFormComponent(accountsService) {
        this.accountsService = accountsService;
        this.model = __WEBPACK_IMPORTED_MODULE_1__hero_hero__["b" /* User */];
    }
    HeroFormComponent.prototype.onSubmit = function () {
        // debugger
        if (this.form.valid) {
            this.accountsService.signup(this.form.value);
            console.log("Form Submitted!");
        }
    };
    return HeroFormComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('heroForm'),
    __metadata("design:type", Object)
], HeroFormComponent.prototype, "form", void 0);
HeroFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'hero-form',
        template: __webpack_require__("../../../../../src/app/account/hero-form.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_accounts_service__["a" /* AccountsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_accounts_service__["a" /* AccountsService */]) === "function" && _a || Object])
], HeroFormComponent);

var _a;
//# sourceMappingURL=hero-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/account/hero-login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h1>Login</h1>\n    <form (ngSubmit)=\"onLogin()\" #loginForm=\"ngForm\" style=\"padding-left: 400px\">  \n\n    <div *ngIf=\"this.accountsService.non_field_error\" class=\"alert alert-info\" style=\"width:400px\">\n      Invalid username or password\n    </div>   \n\n      <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input type=\"text\" class=\"form-control\" id=\"username\" required \n            [(ngModel)]=\"model.username\" name=\"username\" style=\"width:400px\">\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" class=\"form-control\" id=\"password\" required \n            [(ngModel)]=\"model.password\" name=\"password\" style=\"width:400px\">\n      </div>\n\n      <button type=\"submit\" class=\"btn btn-success\"  >Login</button>\n    </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/account/hero-login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hero_hero__ = __webpack_require__("../../../../../src/app/hero/hero.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_accounts_service__ = __webpack_require__("../../../../../src/app/services/accounts.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(accountsService, router) {
        this.accountsService = accountsService;
        this.router = router;
        this.model = __WEBPACK_IMPORTED_MODULE_1__hero_hero__["b" /* User */];
        this.loading = false;
        this.error = '';
    }
    LoginComponent.prototype.onLogin = function () {
        if (this.form.valid) {
            this.accountsService.login(this.form.value);
            console.log("Login Success");
        }
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    return LoginComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('loginForm'),
    __metadata("design:type", Object)
], LoginComponent.prototype, "form", void 0);
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'hero-login',
        template: __webpack_require__("../../../../../src/app/account/hero-login.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_accounts_service__["a" /* AccountsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_accounts_service__["a" /* AccountsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=hero-login.component.js.map

/***/ }),

/***/ "../../../../../src/app/account/logout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hero_hero__ = __webpack_require__("../../../../../src/app/hero/hero.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_accounts_service__ = __webpack_require__("../../../../../src/app/services/accounts.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LogoutComponent = (function () {
    function LogoutComponent(accountsService, router) {
        this.accountsService = accountsService;
        this.router = router;
        this.model = __WEBPACK_IMPORTED_MODULE_1__hero_hero__["b" /* User */];
        this.loading = false;
        this.error = '';
    }
    LogoutComponent.prototype.ngOnInit = function () {
        this.accountsService.logout();
        console.log("Logout Success");
        // this.router.navigate(['login'])
    };
    return LogoutComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('loginForm'),
    __metadata("design:type", Object)
], LogoutComponent.prototype, "form", void 0);
LogoutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'hero-login',
        template: __webpack_require__("../../../../../src/app/account/hero-login.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_accounts_service__["a" /* AccountsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_accounts_service__["a" /* AccountsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LogoutComponent);

var _a, _b;
//# sourceMappingURL=logout.component.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hero_dashboard_component__ = __webpack_require__("../../../../../src/app/hero/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hero_heroes_component__ = __webpack_require__("../../../../../src/app/hero/heroes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hero_hero_detail_component__ = __webpack_require__("../../../../../src/app/hero/hero-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__account_hero_form_component__ = __webpack_require__("../../../../../src/app/account/hero-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__account_hero_login_component__ = __webpack_require__("../../../../../src/app/account/hero-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__account_logout_component__ = __webpack_require__("../../../../../src/app/account/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_accounts_service__ = __webpack_require__("../../../../../src/app/services/accounts.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// import { MyComponent }          from './hero/http-client.component';




var routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full',
    },
    {
        path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_2__hero_dashboard_component__["a" /* DashboardComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_8__services_accounts_service__["b" /* OnlyLoggedInUsersGuard */]]
    },
    {
        path: 'detail/:id',
        component: __WEBPACK_IMPORTED_MODULE_4__hero_hero_detail_component__["a" /* HeroDetailComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_8__services_accounts_service__["b" /* OnlyLoggedInUsersGuard */]]
    },
    {
        path: 'heroes',
        component: __WEBPACK_IMPORTED_MODULE_3__hero_heroes_component__["a" /* HeroesComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_8__services_accounts_service__["b" /* OnlyLoggedInUsersGuard */]]
    },
    {
        path: 'signup',
        component: __WEBPACK_IMPORTED_MODULE_5__account_hero_form_component__["a" /* HeroFormComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_8__services_accounts_service__["c" /* SignupGuard */]]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_6__account_hero_login_component__["a" /* LoginComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_8__services_accounts_service__["c" /* SignupGuard */]]
    },
    {
        path: 'logout',
        component: __WEBPACK_IMPORTED_MODULE_7__account_logout_component__["a" /* LogoutComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_8__services_accounts_service__["b" /* OnlyLoggedInUsersGuard */]]
    },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\n  font-size: 1.2em;\n  color: #999;\n  margin-bottom: 0;\n}\nh2 {\n  font-size: 2em;\n  margin-top: 0;\n  padding-top: 0;\n}\nnav a {\n  padding: 5px 10px;\n  text-decoration: none;\n  margin-top: 10px;\n  display: inline-block;\n  background-color: #eee;\n  border-radius: 4px;\n}\nnav a:visited, a:link {\n  color: #607D8B;\n}\nnav a:hover {\n  color: #039be5;\n  background-color: #CFD8DC;\n}\nnav a.active {\n  color: #039be5;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_accounts_service__ = __webpack_require__("../../../../../src/app/services/accounts.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(AccountsService) {
        this.AccountsService = AccountsService;
        this.title = 'Tour of Heroes';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'my-app',
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        template: "\n  \t\t<h1 style=\"padding-left:70px\">{{title}}</h1>\n  \t\t<nav>\n        <div *ngIf=\"this.AccountsService.isLoggedInn()\" style=\"padding-left:70px\">\n    \t\t  <a routerLink=\"/dashboard\" routerLinkActive=\"active\">Dashboard</a>\n    \t\t  <a routerLink=\"/heroes\" routerLinkActive=\"active\">Heroes</a>\n          <a routerLink=\"/logout\" routerLinkActive=\"active\">Logout</a>\n        </div>\n        <div *ngIf=\"!this.AccountsService.isLoggedInn()\" style=\"padding-left:70px\">\n          <a routerLink=\"/signup\" routerLinkActive=\"active\">Signup</a>\n          <a routerLink=\"/login\" routerLinkActive=\"active\">Login</a>\n        </div>\n  \t\t</nav>\n  \t\t<router-outlet></router-outlet>\n\t",
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_accounts_service__["a" /* AccountsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_accounts_service__["a" /* AccountsService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_guard__ = __webpack_require__("../../../../../src/app/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__hero_hero_detail_component__ = __webpack_require__("../../../../../src/app/hero/hero-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__hero_heroes_component__ = __webpack_require__("../../../../../src/app/hero/heroes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__hero_dashboard_component__ = __webpack_require__("../../../../../src/app/hero/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_hero_service__ = __webpack_require__("../../../../../src/app/services/hero.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__hero_hero_search_component__ = __webpack_require__("../../../../../src/app/hero/hero-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__account_hero_form_component__ = __webpack_require__("../../../../../src/app/account/hero-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__account_hero_login_component__ = __webpack_require__("../../../../../src/app/account/hero-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__account_logout_component__ = __webpack_require__("../../../../../src/app/account/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_accounts_service__ = __webpack_require__("../../../../../src/app/services/accounts.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














// import { MyComponent }          from './http-client.component'




var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClientModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__hero_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_8__hero_hero_detail_component__["a" /* HeroDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_9__hero_heroes_component__["a" /* HeroesComponent */],
            __WEBPACK_IMPORTED_MODULE_12__hero_hero_search_component__["a" /* HeroSearchComponent */],
            __WEBPACK_IMPORTED_MODULE_13__account_hero_form_component__["a" /* HeroFormComponent */],
            // MyComponent,
            __WEBPACK_IMPORTED_MODULE_14__account_hero_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_15__account_logout_component__["a" /* LogoutComponent */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_11__services_hero_service__["a" /* HeroService */],
            // AuthService,
            __WEBPACK_IMPORTED_MODULE_6__auth_guard__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_16__services_accounts_service__["a" /* AccountsService */],
            __WEBPACK_IMPORTED_MODULE_16__services_accounts_service__["b" /* OnlyLoggedInUsersGuard */],
            __WEBPACK_IMPORTED_MODULE_16__services_accounts_service__["c" /* SignupGuard */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page
        this.router.navigate(['/login']);
        return false;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], AuthGuard);

var _a;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/hero/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[class*='col-'] {\n  float: left;\n  padding-right: 20px;\n  padding-bottom: 20px;\n}\n[class*='col-']:last-of-type {\n  padding-right: 0;\n}\na {\n  text-decoration: none;\n}\n*, *:after, *:before {\n  box-sizing: border-box;\n}\nh3 {\n  text-align: center; margin-bottom: 0;\n}\nh4 {\n  position: relative;\n}\n.grid {\n  margin: 0;\n}\n.col-1-4 {\n  width: 25%;\n}\n.module {\n  padding: 20px;\n  text-align: center;\n  color: #eee;\n  max-height: 120px;\n  min-width: 120px;\n  background-color: #607D8B;\n  border-radius: 2px;\n}\n.module:hover {\n  background-color: #EEE;\n  cursor: pointer;\n  color: #607d8b;\n}\n.grid-pad {\n  padding: 10px 0;\n}\n.grid-pad > [class*='col-']:last-of-type {\n  padding-right: 20px;\n}\n@media (max-width: 600px) {\n  .module {\n    font-size: 10px;\n    max-height: 75px; }\n}\n@media (max-width: 1024px) {\n  .grid {\n    margin: 0;\n  }\n  .module {\n    min-width: 60px;\n  }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/hero/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Top Heroes</h3>\n<div class=\"grid grid-pad\">\n  <a *ngFor=\"let hero of heroes\"  [routerLink]=\"['/detail', hero.id]\"  class=\"col-1-4\">\n    <div class=\"module hero\">\n      <h4>{{hero.name}}</h4>\n    </div>\n  </a>\n</div>\n<hero-search></hero-search>"

/***/ }),

/***/ "../../../../../src/app/hero/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_hero_service__ = __webpack_require__("../../../../../src/app/services/hero.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent(heroService) {
        this.heroService = heroService;
        this.heroes = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.heroService.getHeroes()
            .then(function (heroes) { return _this.heroes = heroes.slice(1, 5); });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'my-dashboard',
        template: __webpack_require__("../../../../../src/app/hero/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/hero/dashboard.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_hero_service__["a" /* HeroService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_hero_service__["a" /* HeroService */]) === "function" && _a || Object])
], DashboardComponent);

var _a;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/hero/hero-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"hero\">\n  <h2>{{hero.name}} details!</h2>\n  <div>\n    <label>id: </label>{{hero.id}}</div>\n  <div>\n    <label>name: </label>\n    <input [(ngModel)]=\"hero.name\" placeholder=\"name\" />\n  </div>\n  <button (click)=\"goBack()\">Back</button>\n  <button (click)=\"save()\">Save</button>\n</div>  "

/***/ }),

/***/ "../../../../../src/app/hero/hero-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_hero_service__ = __webpack_require__("../../../../../src/app/services/hero.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hero__ = __webpack_require__("../../../../../src/app/hero/hero.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Keep the Input import for now, you'll remove it later:






var HeroDetailComponent = (function () {
    function HeroDetailComponent(heroService, route, location) {
        this.heroService = heroService;
        this.route = route;
        this.location = location;
    }
    HeroDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (params) { return _this.heroService.getHero(+params.get('id')); })
            .subscribe(function (hero) { return _this.hero = hero; });
    };
    HeroDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    HeroDetailComponent.prototype.save = function () {
        var _this = this;
        this.heroService.update(this.hero)
            .then(function () { return _this.goBack(); });
    };
    return HeroDetailComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__hero__["a" /* Hero */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__hero__["a" /* Hero */]) === "function" && _a || Object)
], HeroDetailComponent.prototype, "hero", void 0);
HeroDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'hero-detail',
        template: __webpack_require__("../../../../../src/app/hero/hero-detail.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_hero_service__["a" /* HeroService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_hero_service__["a" /* HeroService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]) === "function" && _d || Object])
], HeroDetailComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=hero-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/hero/hero-search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".search-result{\n  border-bottom: 1px solid gray;\n  border-left: 1px solid gray;\n  border-right: 1px solid gray;\n  width:195px;\n  height: 16px;\n  padding: 5px;\n  background-color: white;\n  cursor: pointer;\n}\n\n.search-result:hover {\n  color: #eee;\n  background-color: #607D8B;\n}\n\n#search-box{\n  width: 200px;\n  height: 20px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/hero/hero-search.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"search-component\">\n  <h4>Hero Search</h4><br />\n  <input #searchBox id=\"search-box\" (keyup)=\"search(searchBox.value)\" />\n  <div>\n    <div *ngFor=\"let hero of heroes | async\"\n         (click)=\"gotoDetail(hero)\" class=\"search-result\" >\n      {{hero.name}}\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/hero/hero-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_hero_service__ = __webpack_require__("../../../../../src/app/services/hero.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// Observable class extensions

// Observable operators




var HeroSearchComponent = (function () {
    function HeroSearchComponent(heroService, router) {
        this.heroService = heroService;
        this.router = router;
        this.searchTerms = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
    }
    // Push a search term into the observable stream.
    HeroSearchComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
    };
    HeroSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.heroes = this.searchTerms
            .debounceTime(300) // wait 300ms after each keystroke before considering the term
            .distinctUntilChanged() // ignore if next search term is same as previous
            .switchMap(function (term) { return term // switch to new observable each time the term changes
            ? _this.heroService.search(term)
            : __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of([]); })
            .catch(function (error) {
            // TODO: add real error handling
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of([]);
        });
    };
    HeroSearchComponent.prototype.gotoDetail = function (hero) {
        var link = ['/detail', hero.id];
        this.router.navigate(link);
    };
    return HeroSearchComponent;
}());
HeroSearchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'hero-search',
        template: __webpack_require__("../../../../../src/app/hero/hero-search.component.html"),
        styles: [__webpack_require__("../../../../../src/app/hero/hero-search.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_8__services_hero_service__["a" /* HeroService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_8__services_hero_service__["a" /* HeroService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_hero_service__["a" /* HeroService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], HeroSearchComponent);

var _a, _b;
//# sourceMappingURL=hero-search.component.js.map

/***/ }),

/***/ "../../../../../src/app/hero/hero.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Hero; });
/* unused harmony export Hero2 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return User; });
var Hero = (function () {
    function Hero(id, name) {
        this.id = id;
        this.name = name;
    }
    return Hero;
}());

var Hero2 = (function () {
    function Hero2(id, name, power, alterEgo) {
        this.id = id;
        this.name = name;
        this.power = power;
        this.alterEgo = alterEgo;
    }
    return Hero2;
}());

var User = (function () {
    function User(
        // public first_name: string,
        // public last_name: string,
        username, email, password1, password2) {
        this.username = username;
        this.email = email;
        this.password1 = password1;
        this.password2 = password2;
    }
    return User;
}());

//# sourceMappingURL=hero.js.map

/***/ }),

/***/ "../../../../../src/app/hero/heroes.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".selected {\n    background-color: #CFD8DC !important;\n    color: white;\n  }\n  .heroes {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n    width: 15em;\n  }\n  .heroes li {\n    cursor: pointer;\n    position: relative;\n    left: 0;\n    background-color: #EEE;\n    margin: .5em;\n    padding: .3em 0;\n    height: 1.6em;\n    border-radius: 4px;\n  }\n  .heroes li.selected:hover {\n    background-color: #BBD8DC !important;\n    color: white;\n  }\n  .heroes li:hover {\n    color: #607D8B;\n    background-color: #DDD;\n    left: .1em;\n  }\n  .heroes .text {\n    position: relative;\n    top: -3px;\n  }\n  .heroes .badge {\n    display: inline-block;\n    font-size: small;\n    color: white;\n    padding: 0.8em 0.7em 0 0.7em;\n    background-color: #607D8B;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 1.8em;\n    margin-right: .8em;\n    border-radius: 4px 0 0 4px;\n  }\n\n  button.delete {\n  float:right;\n  margin-top: 2px;\n  margin-right: .8em;\n  background-color: gray !important;\n  color:white;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/hero/heroes.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>My Heroes</h2>\n\t<ul class=\"heroes\">\n  \t\t<li *ngFor=\"let hero of heroes\" (click)=\"onSelect(hero)\"   [class.selected]=\"hero === selectedHero\" >\n  \t\t\t<span class=\"badge\">{{hero.id}}</span> <span>{{hero.name}}</span>\n        <button class=\"delete\"(click)=\"delete(hero); $event.stopPropagation()\">x</button>\n\t\t  </li>\n\t</ul>\n  <div *ngIf=\"selectedHero\">\n    <h2>\n      {{selectedHero.name | uppercase}} is my hero\n    </h2>\n    <button (click)=\"gotoDetail()\">View Details</button>\n  </div>\n\n  <div>\n    <label>Hero name:</label> <input #heroName />\n    <button (click)=\"add(heroName.value); heroName.value=''\">\n      Add\n    </button>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/hero/heroes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Hero */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_hero_service__ = __webpack_require__("../../../../../src/app/services/hero.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Hero = (function () {
    function Hero() {
    }
    return Hero;
}());

var HeroesComponent = (function () {
    function HeroesComponent(heroService, router) {
        this.heroService = heroService;
        this.router = router;
    }
    HeroesComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    HeroesComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes; });
    };
    HeroesComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    HeroesComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedHero.id]);
    };
    HeroesComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.heroService.create(name)
            .then(function (hero) {
            _this.heroes.push(hero);
            _this.selectedHero = null;
        });
    };
    HeroesComponent.prototype.delete = function (hero) {
        var _this = this;
        this.heroService
            .delete(hero.id)
            .then(function () {
            _this.heroes = _this.heroes.filter(function (h) { return h !== hero; });
            if (_this.selectedHero === hero) {
                _this.selectedHero = null;
            }
        });
    };
    return HeroesComponent;
}());
HeroesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'my-heroes',
        template: __webpack_require__("../../../../../src/app/hero/heroes.component.html"),
        styles: [__webpack_require__("../../../../../src/app/hero/heroes.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_hero_service__["a" /* HeroService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_hero_service__["a" /* HeroService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], HeroesComponent);

var _a, _b;
//# sourceMappingURL=heroes.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/accounts.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountsService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return OnlyLoggedInUsersGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SignupGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AccountsService = (function () {
    function AccountsService(http, router) {
        this.http = http;
        this.router = router;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.isLoggedIn = false;
        this.non_field_error = false;
        this.email_error = false;
        this.username_error = false;
    }
    AccountsService.prototype.getisLoggedIn = function () {
        return this.isLoggedIn;
    };
    AccountsService.prototype.signup = function (data) {
        var _this = this;
        var user1;
        var data1;
        var url = "https://restheroes.herokuapp.com/api/rest-auth/registration/";
        return this.http
            .post(url, JSON.stringify(data), { headers: this.headers })
            .toPromise()
            .then(function (response) {
            user1 = response.json()['key'];
            _this.username_error = false;
            _this.email_error = false;
            if (user1) {
                localStorage.setItem('currentUser', user1);
            }
            data1 = localStorage.getItem('currentUser');
            _this.isLoggedIn = true;
            _this.router.navigate(['dashboard']);
            console.log(data1);
        })
            .catch(function (response) {
            user1 = response.json();
            if (user1.email) {
                _this.email_error = true;
            }
            if (user1.username) {
                _this.username_error = true;
            }
        });
    };
    AccountsService.prototype.login = function (data) {
        var _this = this;
        var user1;
        var data1;
        var url = "https://restheroes.herokuapp.com/api/rest-auth/login/";
        return this.http
            .post(url, JSON.stringify(data), { headers: this.headers })
            .toPromise()
            .then(function (response) {
            user1 = response.json()['key'];
            _this.non_field_error = false;
            if (user1) {
                localStorage.setItem('currentUser', user1);
            }
            data1 = localStorage.getItem('currentUser');
            _this.isLoggedIn = true;
            _this.router.navigate(['dashboard']);
            console.log(data1);
        })
            .catch(function (response) {
            user1 = response.json();
            if (user1.non_field_errors) {
                _this.non_field_error = true;
            }
        });
    };
    AccountsService.prototype.logout1 = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    };
    AccountsService.prototype.logout = function () {
        var _this = this;
        // remove user from local storage to log user out
        var url = "https://restheroes.herokuapp.com/api/rest-auth/logout/";
        return this.http
            .post(url, { headers: this.headers })
            .toPromise()
            .then(function (response) {
            localStorage.removeItem('currentUser');
            _this.isLoggedIn = false;
            _this.router.navigate(['login']);
        })
            .catch(this.handleError);
    };
    AccountsService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    AccountsService.prototype.isLoggedInn = function () {
        var data;
        data = localStorage.getItem('currentUser');
        if (data)
            return true;
        else
            return false;
    };
    return AccountsService;
}());
AccountsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AccountsService);

var OnlyLoggedInUsersGuard = (function () {
    function OnlyLoggedInUsersGuard(AccountsService) {
        this.AccountsService = AccountsService;
    }
    ;
    OnlyLoggedInUsersGuard.prototype.canActivate = function () {
        console.log("OnlyLoggedInUsers");
        if (this.AccountsService.isLoggedInn()) {
            return true;
        }
        else {
            window.alert("You don't have permission to view this page");
            return false;
        }
    };
    return OnlyLoggedInUsersGuard;
}());
OnlyLoggedInUsersGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [AccountsService])
], OnlyLoggedInUsersGuard);

var SignupGuard = (function () {
    function SignupGuard(AccountsService) {
        this.AccountsService = AccountsService;
    }
    ;
    SignupGuard.prototype.canActivate = function () {
        if (this.AccountsService.isLoggedInn()) {
            window.alert("You are already logged in");
            return false;
        }
        else {
            return true;
        }
    };
    return SignupGuard;
}());
SignupGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [AccountsService])
], SignupGuard);

var _a, _b;
//# sourceMappingURL=accounts.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/hero.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accounts_service__ = __webpack_require__("../../../../../src/app/services/accounts.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HeroService = (function () {
    function HeroService(http, accountsService) {
        this.http = http;
        this.accountsService = accountsService;
        this.heroesUrl = 'https://restheroes.herokuapp.com/api'; // URL to web api
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */];
        var data1 = localStorage.getItem('currentUser');
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Authorization', "Token " + data1);
    }
    HeroService.prototype.getHeroes = function () {
        var url = this.heroesUrl + "/heroes/";
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    HeroService.prototype.getHero = function (id) {
        var url = this.heroesUrl + "/heroes/" + id + "/";
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    HeroService.prototype.update = function (hero) {
        var url = this.heroesUrl + "/heroes/" + hero.id + "/";
        return this.http
            .put(url, JSON.stringify(hero), { headers: this.headers })
            .toPromise()
            .then(function () { return hero; })
            .catch(this.handleError);
    };
    HeroService.prototype.create = function (name) {
        return this.http
            .post(this.heroesUrl + "/heroes/", JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    HeroService.prototype.delete = function (id) {
        var url = this.heroesUrl + "/heroes/" + id + "/";
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    HeroService.prototype.search = function (term) {
        var url = this.heroesUrl + "/search/" + term + "/";
        return this.http
            .get(url, { headers: this.headers })
            .map(function (response) { return response.json(); });
    };
    // signup(data:User): Promise<User> {
    //   const url = `http://localhost:8000/api/accounts/`;
    //   return this.http
    //     .post(url,JSON.stringify(data), {headers: this.headers})
    //     .toPromise()
    //     .then(response => response.json())
    //     .catch(this.handleError);
    // }
    //  login(data:User): Promise<any> {
    //   let user1:any;
    //   let data1:any;
    //   const url = `http://localhost:8000/rest-auth/login/`;
    //        return this.http
    //        .post(url,JSON.stringify(data), {headers: this.headers})
    //        .toPromise()
    //        .then(response =>{
    //           user1 = response.json()['token']
    //             // console.log(user1)
    //              if (user1) {
    //                  localStorage.setItem('currentUser', JSON.stringify(user1));
    //              }
    //              data1=localStorage.getItem('currentUser');
    //              console.log(data1)
    //            })
    //          .catch(this.handleError);
    //  }
    //  logout(): void {
    //       // clear token remove user from local storage to log user out
    //       // this.key = null;
    //       localStorage.removeItem('currentUser');
    //   }
    HeroService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return HeroService;
}());
HeroService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__accounts_service__["a" /* AccountsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__accounts_service__["a" /* AccountsService */]) === "function" && _b || Object])
], HeroService);

var _a, _b;
// @Injectable()
// export class HeroSearchService {
//   constructor(private http: Http) {}
//   private heroesUrl = 'http://localhost:8000/heroes/';
// } 
//# sourceMappingURL=hero.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map