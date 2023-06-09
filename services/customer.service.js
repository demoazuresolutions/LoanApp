"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerService = void 0;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var CustomerService = /** @class */ (function () {
    function CustomerService(http, baseUrl) {
        this.http = http;
        this._baseUrl = baseUrl;
        this.headers = new http_1.HttpHeaders().set('content-type', 'application/json');
    }
    CustomerService.prototype.getCustomers = function () {
        return this.http.get(this._baseUrl + 'api/customers/getCustomers');
    };
    CustomerService.prototype.saveCustomer = function (data) {
        return this.http.post(this._baseUrl + 'api/customers/saveCustomer', data, { headers: this.headers });
    };
    CustomerService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __param(1, core_1.Inject('BASE_URL'))
    ], CustomerService);
    return CustomerService;
}());
exports.CustomerService = CustomerService;
//# sourceMappingURL=customer.service.js.map