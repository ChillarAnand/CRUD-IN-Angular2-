"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var core_2 = require("@ngx-translate/core");
var forms_1 = require("@angular/forms");
var employee_service_1 = require("./employee.service");
var employee_list_component_1 = require("./employee-list.component");
var employee_edit_component_1 = require("./employee-edit.component");
var employee_details_component_1 = require("./employee-details.component");
var employee_list_pipe_1 = require("./employee-list.pipe");
var employee_resolver_service_1 = require("./employee-resolver.service");
var EmployeeModule = (function () {
    function EmployeeModule() {
    }
    return EmployeeModule;
}());
EmployeeModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            core_2.TranslateModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            router_1.RouterModule.forChild([
                { path: 'employees', component: employee_list_component_1.EmployeeListComponent },
                {
                    path: 'employees/:id', component: employee_details_component_1.employeeDetailComponent,
                    resolve: { employee: employee_resolver_service_1.EmployeeResolver }
                },
                {
                    path: 'employees/:id/edit', component: employee_edit_component_1.EmployeeEditComponent,
                    resolve: { employee: employee_resolver_service_1.EmployeeResolver }
                }
            ])
        ],
        declarations: [
            employee_list_component_1.EmployeeListComponent,
            employee_edit_component_1.EmployeeEditComponent,
            employee_details_component_1.employeeDetailComponent,
            employee_list_pipe_1.EmployeeFilterPipe
        ],
        providers: [
            employee_service_1.EmployeeService,
            employee_resolver_service_1.EmployeeResolver
        ]
    })
], EmployeeModule);
exports.EmployeeModule = EmployeeModule;
//# sourceMappingURL=employee.module.js.map