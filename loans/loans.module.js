"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoansModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var loans_component_1 = require("./loans.component");
var common_component_module_1 = require("../common/common-component/common-component.module");
var routes = [
    { path: '', component: loans_component_1.LoansComponent }
];
var LoansModule = /** @class */ (function () {
    function LoansModule() {
    }
    LoansModule = __decorate([
        core_1.NgModule({
            declarations: [loans_component_1.LoansComponent],
            imports: [
                common_1.CommonModule,
                common_component_module_1.CommonComponentModule,
                router_1.RouterModule.forChild(routes)
            ]
        })
    ], LoansModule);
    return LoansModule;
}());
exports.LoansModule = LoansModule;
//# sourceMappingURL=loans.module.js.map