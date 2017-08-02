import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import {EmployeeService} from './employee.service';
import {EmployeeListComponent} from './employee-list.component';
import {EmployeeEditComponent} from './employee-edit.component';
import {employeeDetailComponent} from './employee-details.component';
import {EmployeeFilterPipe} from './employee-list.pipe';
import {EmployeeResolver} from './employee-resolver.service';

@NgModule({
    imports: [
        BrowserModule,
        TranslateModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild([
            { path: 'employees', component: EmployeeListComponent },
            {
                path: 'employees/:id', component: employeeDetailComponent,
                resolve: { employee: EmployeeResolver }
            },
            {
                path: 'employees/:id/edit', component: EmployeeEditComponent,
                resolve: { employee: EmployeeResolver }
            }
        ])
    ],
    declarations: [
        EmployeeListComponent,
        EmployeeEditComponent,
        employeeDetailComponent,
        EmployeeFilterPipe
    ],
    providers: [
        EmployeeService,
        EmployeeResolver
    ]
})

export class EmployeeModule { }