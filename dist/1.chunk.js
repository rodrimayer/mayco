webpackJsonp([1],{

/***/ "../../../../../src/app/company/company-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__company_component__ = __webpack_require__("../../../../../src/app/company/company.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__company_component__["a" /* CompanyComponent */]
    }
];
var CompanyRoutingModule = (function () {
    function CompanyRoutingModule() {
    }
    return CompanyRoutingModule;
}());
CompanyRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
        ]
    })
], CompanyRoutingModule);

//# sourceMappingURL=company-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/company/company.component.html":
/***/ (function(module, exports) {

module.exports = "\n    <!-- Page Content -->\n    <div class=\"container\">\n        \n              <!-- Introduction Row -->\n              <h1 class=\"my-4\">About Us\n                <small>It's Nice to Meet You!</small>\n              </h1>\n              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, explicabo dolores ipsam aliquam inventore corrupti eveniet quisquam quod totam laudantium repudiandae obcaecati ea consectetur debitis velit facere nisi expedita vel?</p>\n        \n              <!-- Team Members Row -->\n              <div class=\"row\">\n                <div class=\"col-lg-12\">\n                  <h2 class=\"my-4\">Our Team</h2>\n                </div>\n                <div class=\"col-lg-4 col-sm-6 text-center mb-4\">\n                  <img class=\"rounded-circle img-fluid d-block mx-auto\" src=\"http://placehold.it/200x200\" alt=\"\">\n                  <h3>John Smith\n                    <small>Job Title</small>\n                  </h3>\n                  <p>What does this team member to? Keep it short! This is also a great spot for social links!</p>\n                </div>\n                <div class=\"col-lg-4 col-sm-6 text-center mb-4\">\n                  <img class=\"rounded-circle img-fluid d-block mx-auto\" src=\"http://placehold.it/200x200\" alt=\"\">\n                  <h3>John Smith\n                    <small>Job Title</small>\n                  </h3>\n                  <p>What does this team member to? Keep it short! This is also a great spot for social links!</p>\n                </div>\n                <div class=\"col-lg-4 col-sm-6 text-center mb-4\">\n                  <img class=\"rounded-circle img-fluid d-block mx-auto\" src=\"http://placehold.it/200x200\" alt=\"\">\n                  <h3>John Smith\n                    <small>Job Title</small>\n                  </h3>\n                  <p>What does this team member to? Keep it short! This is also a great spot for social links!</p>\n                </div>\n                <div class=\"col-lg-4 col-sm-6 text-center mb-4\">\n                  <img class=\"rounded-circle img-fluid d-block mx-auto\" src=\"http://placehold.it/200x200\" alt=\"\">\n                  <h3>John Smith\n                    <small>Job Title</small>\n                  </h3>\n                  <p>What does this team member to? Keep it short! This is also a great spot for social links!</p>\n                </div>\n                <div class=\"col-lg-4 col-sm-6 text-center mb-4\">\n                  <img class=\"rounded-circle img-fluid d-block mx-auto\" src=\"http://placehold.it/200x200\" alt=\"\">\n                  <h3>John Smith\n                    <small>Job Title</small>\n                  </h3>\n                  <p>What does this team member to? Keep it short! This is also a great spot for social links!</p>\n                </div>\n                <div class=\"col-lg-4 col-sm-6 text-center mb-4\">\n                  <img class=\"rounded-circle img-fluid d-block mx-auto\" src=\"http://placehold.it/200x200\" alt=\"\">\n                  <h3>John Smith\n                    <small>Job Title</small>\n                  </h3>\n                  <p>What does this team member to? Keep it short! This is also a great spot for social links!</p>\n                </div>\n              </div>\n        \n            </div>\n        <!-- /.container -->"

/***/ }),

/***/ "../../../../../src/app/company/company.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CompanyComponent = (function () {
    function CompanyComponent() {
    }
    CompanyComponent.prototype.ngOnInit = function () {
    };
    return CompanyComponent;
}());
CompanyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'nr-company',
        template: __webpack_require__("../../../../../src/app/company/company.component.html"),
        styles: []
    }),
    __metadata("design:paramtypes", [])
], CompanyComponent);

//# sourceMappingURL=company.component.js.map

/***/ }),

/***/ "../../../../../src/app/company/company.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__company_routing_module__ = __webpack_require__("../../../../../src/app/company/company-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__company_component__ = __webpack_require__("../../../../../src/app/company/company.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyModule", function() { return CompanyModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CompanyModule = (function () {
    function CompanyModule() {
    }
    return CompanyModule;
}());
CompanyModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_0__company_routing_module__["a" /* CompanyRoutingModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__company_component__["a" /* CompanyComponent */]]
    })
], CompanyModule);

//# sourceMappingURL=company.module.js.map

/***/ })

});
//# sourceMappingURL=1.chunk.js.map