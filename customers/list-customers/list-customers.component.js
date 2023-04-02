"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListCustomersComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var add_customer_component_1 = require("../add-customer/add-customer.component");
var ListCustomersComponent = /** @class */ (function () {
    function ListCustomersComponent(customerService, modalService, addCustomerComponent, router) {
        this.customerService = customerService;
        this.modalService = modalService;
        this.addCustomerComponent = addCustomerComponent;
        this.router = router;
        this.rows = [];
        this.rows1 = [];
        this.searchText = '';
        this.sortorderasc = true;
        //getCustomer(value): FormGroup {
        //  value = value || { name: null, surname: null };
        //  return new FormGroup({
        //    name: new FormControl(value.name),
        //    surname: new FormControl(value.surname)
        //  });
        //}
        this.form = new forms_1.FormGroup({
            customer: this.addCustomerComponent.getCustomer({ firstName: null, lastName: null, phoneNumber: null, emailAddress: null, address: null, department: null, image: null })
        });
    }
    ListCustomersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.columns = [
            { name: 'Customer Id', title: 'Customer Id', valueKey: 'customerId', field: 'link' },
            { name: 'First Name', title: 'First Name', valueKey: 'firstName', field: 'text' },
            { name: 'Last Name', title: 'Last Name', valueKey: 'lastName', field: 'text' },
            { name: 'Phone Number', title: 'Phone Number', valueKey: 'phoneNumber', field: 'text' },
            { name: 'Email Address', title: 'Email Address', valueKey: 'emailAddress', field: 'text' },
            { name: 'Address', title: 'Address', valueKey: 'address', field: 'text' },
            { name: 'Department', title: 'Department', valueKey: 'department', field: 'text' },
            { name: 'Action', title: 'Action', valueKey: 'action', field: 'image' },
        ];
        this.customerService.getCustomers().subscribe(function (data) {
            _this.rows = data;
            console.log(data);
        });
    };
    ListCustomersComponent.prototype.onChangePage = function (pageOfItems) {
        // update current page of items
        this.pageOfItems = pageOfItems;
    };
    ListCustomersComponent.prototype.addCustomer = function () {
        var _this = this;
        var modalRef = this.modalService.open(add_customer_component_1.AddCustomerComponent, { backdrop: 'static' });
        modalRef.componentInstance.data = this.form.value.customer;
        modalRef.componentInstance.action = 'Add';
        modalRef.result.then(function (result) {
            _this.form.get('customer').patchValue(result);
            window.location.reload();
        }, function (reason) {
        });
    };
    ListCustomersComponent.prototype.editCustomer = function (data) {
        var _this = this;
        this.form.setValue({
            customer: {
                customerId: data.customerId,
                firstName: data.firstName,
                lastName: data.lastName,
                phoneNumber: data.phoneNumber,
                emailAddress: data.emailAddress,
                address: data.address,
                department: data.department,
                action: ''
            }
        });
        var modalRef = this.modalService.open(add_customer_component_1.AddCustomerComponent, { backdrop: 'static' });
        modalRef.componentInstance.data = this.form.value.customer;
        modalRef.componentInstance.action = 'Edit';
        modalRef.result.then(function (result) {
            _this.form.get('customer').patchValue(result);
            window.location.reload();
        }, function (reason) {
        });
    };
    ListCustomersComponent.prototype.sort = function (valueKey) {
        //var fieldValues = [];
        //this.rows.forEach(function (el) {
        //  fieldValues.push(el[valueKey]);
        //});
        //console.log(fieldValues);
        //return fieldValues.sort();
        //return fieldValues.sort(function (a, b) { return a - b });
        /*this.rows = this.rows.sort((a, b) => a[valueKey] - b[valueKey]);*/
        this.sortorderasc = !this.sortorderasc;
        if (this.sortorderasc) {
            this.rows.sort(function (a, b) {
                return a[valueKey].localeCompare(b[valueKey]);
            });
        }
        else {
            this.rows.sort(function (a, b) {
                return b[valueKey].localeCompare(a[valueKey]);
            });
        }
    };
    __decorate([
        core_1.ViewChild('myTable', { static: true })
    ], ListCustomersComponent.prototype, "myTable", void 0);
    ListCustomersComponent = __decorate([
        core_1.Component({
            selector: 'app-list-customers',
            templateUrl: './list-customers.component.html',
            styleUrls: ['./list-customers.component.css'],
            /*providers: [LinkDirective]*/
        })
    ], ListCustomersComponent);
    return ListCustomersComponent;
}());
exports.ListCustomersComponent = ListCustomersComponent;
//# sourceMappingURL=list-customers.component.js.map