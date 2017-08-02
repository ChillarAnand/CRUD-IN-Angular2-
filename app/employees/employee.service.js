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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
require("rxjs/add/operator/toPromise");
require("rxjs/add/observable/of");
var EmployeeService = (function () {
    function EmployeeService(_http) {
        this._http = _http;
        this._productUrl = 'http://localhost:64038/api/Employee';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer nx_6H2gHd_w9wu8UXHx27jy8ju2UZI4wLpe2KMKDNesSYZ0HvlVj-W049IdpZw78QF8LW13XOfJMrh9y-ZaFrIi8T2Wv1Nr9P3t_sJT511ECAqhTbXpUkqDfixOQ9xJhY-tMfsfgWSJpmhxT1Ta-JyxqnwtmxSYdkRpKfNVEteY3cYbQnm0Wcr2NPbuUWE79otJ_E17hDIcjfUpRmcH-LrPmPOyaO_X2yxyGeayI8HDg9FkHd4NQc1uf_nsq5vFTPM-xpdhxkl4oQT4zVXvLkP3VvW-q4_VZi4e9wYg0jxmaPH994eydO_Z9wJaX-CSQVJ6nPXGA0FiLiQ9b6sPdQmyqYvzDeyfWl-rUfX1NUdPAgRkS3bUnmG6GW1CeCaCN4heUqv-KNsGtfnSuBYu2gttFJptlWmvJnRSwDfdPtjpYU6dGe-L8YNVnZdUZCcScRUxJs1lTAx8tDEy0EeWbzijhq0SSoiWJP28j41Gtb_O6hXuLDdUMvM5URitSFryl' });
    }
    EmployeeService.prototype.getEmployees = function () {
        return this._http.get(this._productUrl, { headers: this.headers })
            .map(function (response) { return response.json(); });
    };
    EmployeeService.prototype.getEmployee = function (id) {
        if (id === 0) {
            return Observable_1.Observable.of(this.initializeEmployee());
        }
        ;
        return this._http.get(this._productUrl + "/" + id, { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    EmployeeService.prototype.saveEmployee = function (employee) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: this.headers });
        if (employee.Id === 0) {
            return this.createEmployee(employee, options);
        }
        return this.updateEmployee(employee, options);
    };
    EmployeeService.prototype.deleteServiceWithId = function (id) {
        return this._http
            .delete(this._productUrl + "/" + id + " ", { headers: this.headers });
    };
    EmployeeService.prototype.createEmployee = function (employee, options) {
        return this._http.post(this._productUrl, employee, options)
            .map(function () { return employee; });
    };
    EmployeeService.prototype.updateEmployee = function (employee, options) {
        return this._http.put(this._productUrl + "/" + employee.Id, employee, options)
            .map(function () { return employee; });
    };
    EmployeeService.prototype.initializeEmployee = function () {
        return {
            Id: 0,
            FirstName: null,
            LastName: null,
            Birthdate: null,
            JobPosition: null,
            Department: null
        };
    };
    return EmployeeService;
}());
EmployeeService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], EmployeeService);
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=employee.service.js.map