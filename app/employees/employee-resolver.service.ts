import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

import { Observable } from 'rxjs/Observable';

import {IEmployee} from './employee';
import {EmployeeService} from './employee.service';

@Injectable()

export class EmployeeResolver implements Resolve<IEmployee>{
    constructor(private employeeService: EmployeeService) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IEmployee> {
        let id = +route.params['id'];
        return this.employeeService.getEmployee(id); 
    }

}