"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var jw_angular_pagination_1 = require("jw-angular-pagination");
var customers_component_1 = require("./customers.component");
var list_customers_component_1 = require("./list-customers/list-customers.component");
var add_customer_component_1 = require("./add-customer/add-customer.component");
var edit_customer_component_1 = require("./edit-customer/edit-customer.component");
var delete_customer_component_1 = require("./delete-customer/delete-customer.component");
var search_customer_component_1 = require("./search-customer/search-customer.component");
var common_component_module_1 = require("../common/common-component/common-component.module");
var forms_1 = require("@angular/forms");
/*import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';*/
/*import { GridlinkComponent } from '../common/gridlink/gridlink.component';*/
var routes = [
    { path: '', component: list_customers_component_1.ListCustomersComponent }
];
var CustomersModule = /** @class */ (function () {
    function CustomersModule() {
    }
    CustomersModule = __decorate([
        core_1.NgModule({
            declarations: [
                customers_component_1.CustomersComponent,
                list_customers_component_1.ListCustomersComponent,
                add_customer_component_1.AddCustomerComponent,
                edit_customer_component_1.EditCustomerComponent,
                delete_customer_component_1.DeleteCustomerComponent,
                search_customer_component_1.SearchCustomerComponent,
                jw_angular_pagination_1.JwPaginationComponent,
                /*GridlinkComponent*/
            ],
            imports: [
                common_1.CommonModule,
                common_component_module_1.CommonComponentModule,
                forms_1.ReactiveFormsModule,
                forms_1.FormsModule,
                /*NgbModule, NgbActiveModal,*/
                router_1.RouterModule.forChild(routes)
            ],
            schemas: [core_1.NO_ERRORS_SCHEMA, core_1.CUSTOM_ELEMENTS_SCHEMA],
            /*entryComponents: [AddCustomerComponent]*/
        })
    ], CustomersModule);
    return CustomersModule;
}());
exports.CustomersModule = CustomersModule;
//# sourceMappingURL=customers.module.js.map