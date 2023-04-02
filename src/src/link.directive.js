"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkDirective = void 0;
var core_1 = require("@angular/core");
var LinkDirective = /** @class */ (function () {
    function LinkDirective() {
        console.log('entered link directive');
    }
    //@HostListener('click') onLinkClick() {
    //  this.navigate();
    //}
    LinkDirective.prototype.onClick = function (param) {
        alert("click item");
    };
    LinkDirective.prototype.mouseover = function (event) {
        alert('hover to editor div');
    };
    __decorate([
        core_1.Input()
    ], LinkDirective.prototype, "linkValue", void 0);
    __decorate([
        core_1.HostListener('click', ['$event.target'])
    ], LinkDirective.prototype, "onClick", null);
    __decorate([
        core_1.HostListener('mouseover', ['$event'])
    ], LinkDirective.prototype, "mouseover", null);
    LinkDirective = __decorate([
        core_1.Directive({
            selector: '[appLink]'
        }),
        core_1.Injectable({ providedIn: 'root' })
    ], LinkDirective);
    return LinkDirective;
}());
exports.LinkDirective = LinkDirective;
//# sourceMappingURL=link.directive.js.map