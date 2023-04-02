"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GridlinkComponent = void 0;
var core_1 = require("@angular/core");
var dynamicform_component_1 = require("../../dynamicform/dynamicform.component");
var GridlinkComponent = /** @class */ (function () {
    function GridlinkComponent(modalService) {
        this.modalService = modalService;
    }
    GridlinkComponent.prototype.ngOnInit = function () {
        console.log(this.data);
    };
    GridlinkComponent.prototype.openEntity = function () {
        var modalRef = this.modalService.open(dynamicform_component_1.DynamicformComponent, { backdrop: 'static' });
        modalRef.componentInstance.data = this.data;
        modalRef.componentInstance.action = 'Edit';
        modalRef.componentInstance.entity = 'payment';
        modalRef.result.then(function (result) {
        }, function (reason) {
        });
    };
    __decorate([
        core_1.Input()
    ], GridlinkComponent.prototype, "param", void 0);
    __decorate([
        core_1.Input()
    ], GridlinkComponent.prototype, "data", void 0);
    GridlinkComponent = __decorate([
        core_1.Component({
            selector: 'app-gridlink',
            templateUrl: './gridlink.component.html',
            styleUrls: ['./gridlink.component.css']
        })
    ], GridlinkComponent);
    return GridlinkComponent;
}());
exports.GridlinkComponent = GridlinkComponent;
//# sourceMappingURL=gridlink.component.js.map