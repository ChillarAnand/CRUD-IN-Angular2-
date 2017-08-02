import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {EmployeeService} from './employee.service';
import {IEmployee} from './employee';

@Component({
    templateUrl: 'app/employees/employee-list.component.html',
    styleUrls: ['app/employees/employee-list.component.css']
})
export class EmployeeListComponent {
    pageTitle: string = 'Employee List';
    listFilter: string;
    employees: IEmployee[];
    editType: boolean;


    constructor(private _employeeService: EmployeeService,
        private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.listFilter = this.route.snapshot.queryParams['filterby'] || '';

        this._employeeService.getEmployees()
            .subscribe(employees => {
                this.employees = employees;
            });
    }

    delete(employee: IEmployee): void {
        this._employeeService
            .deleteServiceWithId(employee.Id)
            .subscribe(() => {
                this.employees = this.employees.filter(h => h !== employee);
            });
    }
}