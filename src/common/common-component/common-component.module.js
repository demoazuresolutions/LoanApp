"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonComponentModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var gridlink_component_1 = require("../gridlink/gridlink.component");
var search_pipe_1 = require("../../pipes/search.pipe");
/*import { AddpaymentComponent } from '../../payments/add-edit/addpayment/addpayment.component';*/
var dynamicform_component_1 = require("../../dynamicform/dynamicform.component");
var forms_1 = require("@angular/forms");
var CommonComponentModule = /** @class */ (function () {
    function CommonComponentModule() {
    }
    CommonComponentModule = __decorate([
        core_1.NgModule({
            declarations: [gridlink_component_1.GridlinkComponent, search_pipe_1.FilterPipe, dynamicform_component_1.DynamicformComponent],
            imports: [
                common_1.CommonModule,
                forms_1.ReactiveFormsModule,
                forms_1.FormsModule
            ],
            exports: [gridlink_component_1.GridlinkComponent, search_pipe_1.FilterPipe, dynamicform_component_1.DynamicformComponent],
            schemas: [core_1.NO_ERRORS_SCHEMA, core_1.CUSTOM_ELEMENTS_SCHEMA],
        })
    ], CommonComponentModule);
    return CommonComponentModule;
}());
exports.CommonComponentModule = CommonComponentModule;
//# sourceMappingURL=common-component.module.js.map