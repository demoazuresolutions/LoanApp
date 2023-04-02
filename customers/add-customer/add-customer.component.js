"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddCustomerComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var AddCustomerComponent = /** @class */ (function () {
    function AddCustomerComponent(activeModal, customerService, router, formBuilderService) {
        this.activeModal = activeModal;
        this.customerService = customerService;
        this.router = router;
        this.formBuilderService = formBuilderService;
    }
    Object.defineProperty(AddCustomerComponent.prototype, "data", {
        set: function (value) {
            this.customerForm = this.getCustomer(value);
        },
        enumerable: false,
        configurable: true
    });
    AddCustomerComponent.prototype.ngOnInit = function () {
    };
    AddCustomerComponent.prototype.getCustomer = function (value) {
        value = value || { customerId: '', firstName: null, lastName: null, phoneNumber: null, emailAddress: null, address: null, department: null, image: null };
        return new forms_1.FormGroup({
            customerId: new forms_1.FormControl(value.customerId),
            firstName: new forms_1.FormControl(value.firstName),
            lastName: new forms_1.FormControl(value.lastName),
            phoneNumber: new forms_1.FormControl(value.phoneNumber),
            emailAddress: new forms_1.FormControl(value.emailAddress),
            address: new forms_1.FormControl(value.address),
            department: new forms_1.FormControl(value.department),
            action: new forms_1.FormControl(value.action)
        });
        //this.formBuilderService.formFields = this.customerService.setForm(value);
        //return this.customerService.setForm(value);
    };
    AddCustomerComponent.prototype.submit = function () {
        var _this = this;
        this.activeModal.close(this.customerForm.value);
        console.log(this.customerForm.value);
        this.customerService.saveCustomer(this.customerForm.value).subscribe(function (data) {
            if (data) {
                alert('Customer Added Successfully');
                _this.router.navigateByUrl('customers');
                /*this.router.navigate(['/customers']);*/
            }
            else {
                alert('There is a error while adding Customer. Please try again.');
            }
        });
    };
    __decorate([
        core_1.Input()
    ], AddCustomerComponent.prototype, "data", null);
    __decorate([
        core_1.Input()
    ], AddCustomerComponent.prototype, "action", void 0);
    AddCustomerComponent = __decorate([
        core_1.Component({
            selector: 'app-add-customer',
            templateUrl: './add-customer.component.html',
            styleUrls: ['./add-customer.component.css']
        })
    ], AddCustomerComponent);
    return AddCustomerComponent;
}());
exports.AddCustomerComponent = AddCustomerComponent;
//# sourceMappingURL=add-customer.component.js.map