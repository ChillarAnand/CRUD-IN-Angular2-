import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {IEmployee} from './employee';

import 'rxjs/add/operator/switchMap';

@Component({
    templateUrl: 'app/employees/employee-details.component.html'
})

export class employeeDetailComponent implements OnInit {

    employee: IEmployee;

    constructor(private _router: Router, private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.employee = this.route.snapshot.data['employee'];
    }

    onBack(): void {
        this._router.navigate(['/employees'],
            { preserveQueryParams: true });
    }

}