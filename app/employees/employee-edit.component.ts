import { Component, OnInit, OnDestroy} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

import {EmployeeService} from './employee.service';
import {IEmployee} from './employee';

@Component({
    selector: 'em-employees-edit',
    templateUrl: 'app/employees/employee-edit.component.html'
})
export class EmployeeEditComponent implements OnInit {
    employees: IEmployee[];
    employee: IEmployee;
    user: FormGroup;
    PageTitle: string = 'Edit Page';

    constructor(private route: ActivatedRoute,
        private location: Location,
        private _router: Router,
        private _employeeService: EmployeeService,
        private fb: FormBuilder) { }

    ngOnInit() {
        this.user = this.fb.group({
            FirstName: ['', [Validators.required, Validators.minLength(2)]],
            LastName: ['', [Validators.required]],
            Birthdate: ['', [Validators.required]],
            Department: ['', [Validators.required]],
            JobPosition: ['', [Validators.required]]
        });

        this.route.data.subscribe(
            data => {
                this.onEmployeeRetrieved(data['employee']);
            }
        );
    }

    onEmployeeRetrieved(employee: IEmployee) {
        if (this.user) {
            this.user.reset();
        }
        this.employee = employee;
        if (this.employee.Id === 0) {
            this.PageTitle = 'Add Employee';
        }
        else {
            this.PageTitle = `Edit Employee: ${this.employee.FirstName}`;
        }

        this.user.patchValue({
            FirstName: this.employee.FirstName,
            LastName: this.employee.LastName,
            Birthdate: this.employee.Birthdate,
            Department: this.employee.Department,
            JobPosition: this.employee.JobPosition
        });
    }

    saveEmployee(): void {
        if (this.user.dirty && this.user.valid) {
            let e = Object.assign({}, this.employee, this.user.value);
            this._employeeService.saveEmployee(e)
                .subscribe(
                () => this.onSave()
                );
        }
        else if (!this.user.dirty) {
            this.onSave();
        }
    }

    onSave(): void {
        this.user.reset();
        this._router.navigate(['/employees'], { preserveQueryParams: true });
    }
}