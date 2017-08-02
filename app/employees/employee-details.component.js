"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
require("rxjs/add/operator/switchMap");
var employeeDetailComponent = (function () {
    function employeeDetailComponent(_router, route) {
        this._router = _router;
        this.route = route;
    }
    employeeDetailComponent.prototype.ngOnInit = function () {
        this.employee = this.route.snapshot.data['employee'];
    };
    employeeDetailComponent.prototype.onBack = function () {
        this._router.navigate(['/employees'], { preserveQueryParams: true });
    };
    return employeeDetailComponent;
}());
employeeDetailComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/employees/employee-details.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute])
], employeeDetailComponent);
exports.employeeDetailComponent = employeeDetailComponent;
//# sourceMappingURL=employee-details.component.js.map