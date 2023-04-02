"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentsComponent = void 0;
var core_1 = require("@angular/core");
var dynamicform_component_1 = require("../dynamicform/dynamicform.component");
var PaymentsComponent = /** @class */ (function () {
    function PaymentsComponent(paymentService, formBuilderService, modalService, dynamicComponent, router) {
        this.paymentService = paymentService;
        this.formBuilderService = formBuilderService;
        this.modalService = modalService;
        this.dynamicComponent = dynamicComponent;
        this.router = router;
        this.rows = [];
    }
    PaymentsComponent.prototype.ngOnInit = function () {
        this.formBuilderService.formFields = this.paymentService.setForm();
        this.columns = [
            { name: 'Payment Id', title: 'Payment Id', valueKey: 'paymentId', field: 'link' },
            { name: 'Customer Id', title: 'Customer Id', valueKey: 'customerId', field: 'text' },
            { name: 'Customer Name', title: 'Customer Name', valueKey: 'customerName', field: 'text' },
            { name: 'Amount', title: 'Amount', valueKey: 'amount', field: 'text' },
            { name: 'Tax', title: 'Tax', valueKey: 'tax', field: 'text' },
            { name: 'Mode', title: 'Mode', valueKey: 'mode', field: 'text' },
            { name: 'Date', title: 'Date', valueKey: 'date', field: 'text' },
            { name: 'Notes', title: 'Notes', valueKey: 'notes', field: 'text' }
        ];
        //this.rows = [
        //  { paymentId: 'HL-HYD-8906', customerId: 'HYD8906', customerName: 'Brahmam', amount: '18,00,000', tax: '7.56%', mode: 'online', date: '05-08-2016', notes: 'House Loan' },
        //  { paymentId: 'HL-HYD-3579', customerId: 'HYD3579', customerName: 'Nellore PeddaReddy', amount: '20,00,000', tax: '12.56%', mode: 'online', date: '05-08-2016', notes: 'Personal Loan' },
        //];
        this.getPayments();
    };
    PaymentsComponent.prototype.getPayments = function () {
        var _this = this;
        this.paymentService.getPayments().subscribe(function (data) {
            _this.rows = data;
        });
    };
    PaymentsComponent.prototype.addPayment = function () {
        var modalRef = this.modalService.open(dynamicform_component_1.DynamicformComponent, { backdrop: 'static' });
        //modalRef.componentInstance.data = this.form.value.customer;
        modalRef.componentInstance.entity = 'payment';
        modalRef.componentInstance.action = 'Add';
        modalRef.result.then(function (result) {
            //this.form.get('customer').patchValue(result);
            window.location.reload();
        }, function (reason) {
        });
        //this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        //this.router.onSameUrlNavigation = 'reload';
        //this.router.navigateByUrl('payments');
    };
    PaymentsComponent = __decorate([
        core_1.Component({
            selector: 'app-payments',
            templateUrl: './payments.component.html',
            styleUrls: ['./payments.component.css']
        })
    ], PaymentsComponent);
    return PaymentsComponent;
}());
exports.PaymentsComponent = PaymentsComponent;
//# sourceMappingURL=payments.component.js.map