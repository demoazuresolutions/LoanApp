"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DynamicformComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var DynamicformComponent = /** @class */ (function () {
    function DynamicformComponent(formBuilder, activeModal, formBuilderService, paymentService) {
        this.formBuilder = formBuilder;
        this.activeModal = activeModal;
        this.formBuilderService = formBuilderService;
        this.paymentService = paymentService;
        this.formFields = [];
        this.formValues = [];
        this.displaylistcontainer = false;
        this.selectedOption = 'Select an option';
        this.selectedvalue = '';
    }
    DynamicformComponent.prototype.ngOnInit = function () {
        this.getDynamicForm();
    };
    DynamicformComponent.prototype.getDynamicForm = function () {
        this.formFields = this.formBuilderService.formFields;
        this.dynamicForm = this.generateControlsForDynamicForm();
        if (this.action === 'Edit') {
            this.dynamicForm.setValue(this.data);
            if (this.entity === 'payment') {
                this.selectedOption = this.data.customerName;
            }
        }
        /*this.formFields = [{ key: 'amount' }, { key: 'amount1' }, { key: 'amount2' }];*/
    };
    DynamicformComponent.prototype.generateControlsForDynamicForm = function () {
        var _this = this;
        var form = this.formBuilder.group({});
        this.formFields.forEach(function (elem) {
            form.addControl(elem.key, _this.generateFormGroup(form, elem));
        });
        return form;
    };
    DynamicformComponent.prototype.generateFormGroup = function (form, field) {
        var _this = this;
        if (field.group) {
            var formGroup_1 = this.formBuilder.group({});
            field.group.forEach(function (elem) {
                formGroup_1.addControl(elem.key, _this.generateFormGroup(formGroup_1, elem));
            });
            return formGroup_1;
        }
        else {
            form.addControl(field.key, new forms_1.FormControl(null));
        }
        return form;
    };
    DynamicformComponent.prototype.togglelistcontainer = function () {
        this.displaylistcontainer = !this.displaylistcontainer;
    };
    DynamicformComponent.prototype.oncustomerSelect = function (optionName, value) {
        this.selectedOption = optionName;
        this.selectedvalue = value;
        this.displaylistcontainer = false;
    };
    DynamicformComponent.prototype.onSubmit = function () {
        if (this.entity === 'payment') {
            this.dynamicForm.value.customerId = this.selectedvalue;
            this.activeModal.close();
            this.paymentService.savePayment(this.dynamicForm.value).subscribe(function (data) {
                if (data) {
                    window.location.reload();
                    return "Payment added successfully";
                }
                else {
                    return "Payment failure, Please try again.";
                }
            });
        }
        console.log(this.dynamicForm.value);
    };
    __decorate([
        core_1.Input()
    ], DynamicformComponent.prototype, "entity", void 0);
    __decorate([
        core_1.Input()
    ], DynamicformComponent.prototype, "action", void 0);
    __decorate([
        core_1.Input()
    ], DynamicformComponent.prototype, "data", void 0);
    DynamicformComponent = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        core_1.Component({
            selector: 'app-dynamicform',
            templateUrl: './dynamicform.component.html',
            styleUrls: ['./dynamicform.component.css']
        })
    ], DynamicformComponent);
    return DynamicformComponent;
}());
exports.DynamicformComponent = DynamicformComponent;
//# sourceMappingURL=dynamicform.component.js.map