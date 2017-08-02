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
var employee_service_1 = require("./employee.service");
var EmployeeListComponent = (function () {
    function EmployeeListComponent(_employeeService, route) {
        this._employeeService = _employeeService;
        this.route = route;
        this.pageTitle = 'Employee List';
    }
    EmployeeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listFilter = this.route.snapshot.queryParams['filterby'] || '';
        this._employeeService.getEmployees()
            .subscribe(function (employees) {
            _this.employees = employees;
        });
    };
    EmployeeListComponent.prototype.delete = function (employee) {
        var _this = this;
        this._employeeService
            .deleteServiceWithId(employee.Id)
            .subscribe(function () {
            _this.employees = _this.employees.filter(function (h) { return h !== employee; });
        });
    };
    return EmployeeListComponent;
}());
EmployeeListComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/employees/employee-list.component.html',
        styleUrls: ['app/employees/employee-list.component.css']
    }),
    __metadata("design:paramtypes", [employee_service_1.EmployeeService,
        router_1.ActivatedRoute])
], EmployeeListComponent);
exports.EmployeeListComponent = EmployeeListComponent;
//# sourceMappingURL=employee-list.component.js.map