import { RouterModule, Routes } from '@angular/router';
import {EmployeeListComponent} from './employees/employee-list.component';
import {EmployeeEditComponent} from './employees/employee-edit.component';
import {WelcomeComponent} from './Welcome/Welcome.Component';
import {employeeDetailComponent} from './employees/employee-details.component';


const routes: Routes = [
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: 'welcome', component: WelcomeComponent },
    
];


export const routing = RouterModule.forRoot(routes);