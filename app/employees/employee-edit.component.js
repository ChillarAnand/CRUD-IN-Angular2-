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
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var employee_service_1 = require("./employee.service");
var EmployeeEditComponent = (function () {
    function EmployeeEditComponent(route, location, _router, _employeeService, fb) {
        this.route = route;
        this.location = location;
        this._router = _router;
        this._employeeService = _employeeService;
        this.fb = fb;
        this.PageTitle = 'Edit Page';
    }
    EmployeeEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.fb.group({
            FirstName: ['', [forms_1.Validators.required, forms_1.Validators.minLength(2)]],
            LastName: ['', [forms_1.Validators.required]],
            Birthdate: ['', [forms_1.Validators.required]],
            Department: ['', [forms_1.Validators.required]],
            JobPosition: ['', [forms_1.Validators.required]]
        });
        this.route.data.subscribe(function (data) {
            _this.onEmployeeRetrieved(data['employee']);
        });
    };
    EmployeeEditComponent.prototype.onEmployeeRetrieved = function (employee) {
        if (this.user) {
            this.user.reset();
        }
        this.employee = employee;
        if (this.employee.Id === 0) {
            this.PageTitle = 'Add Employee';
        }
        else {
            this.PageTitle = "Edit Employee: " + this.employee.FirstName;
        }
        this.user.patchValue({
            FirstName: this.employee.FirstName,
            LastName: this.employee.LastName,
            Birthdate: this.employee.Birthdate,
            Department: this.employee.Department,
            JobPosition: this.employee.JobPosition
        });
    };
    EmployeeEditComponent.prototype.saveEmployee = function () {
        var _this = this;
        if (this.user.dirty && this.user.valid) {
            var e = Object.assign({}, this.employee, this.user.value);
            this._employeeService.saveEmployee(e)
                .subscribe(function () { return _this.onSave(); });
        }
        else if (!this.user.dirty) {
            this.onSave();
        }
    };
    EmployeeEditComponent.prototype.onSave = function () {
        this.user.reset();
        this._router.navigate(['/employees'], { preserveQueryParams: true });
    };
    return EmployeeEditComponent;
}());
EmployeeEditComponent = __decorate([
    core_1.Component({
        selector: 'em-employees-edit',
        templateUrl: 'app/employees/employee-edit.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        common_1.Location,
        router_1.Router,
        employee_service_1.EmployeeService,
        forms_1.FormBuilder])
], EmployeeEditComponent);
exports.EmployeeEditComponent = EmployeeEditComponent;
//# sourceMappingURL=employee-edit.component.js.map