import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/of';

import {IEmployee} from './employee';

@Injectable()

export class EmployeeService {
    private _productUrl = 'http://localhost:64038/api/Employee';
    private headers = new Headers({ 'Content-Type': 'application/json' , 'Authorization':'Bearer nx_6H2gHd_w9wu8UXHx27jy8ju2UZI4wLpe2KMKDNesSYZ0HvlVj-W049IdpZw78QF8LW13XOfJMrh9y-ZaFrIi8T2Wv1Nr9P3t_sJT511ECAqhTbXpUkqDfixOQ9xJhY-tMfsfgWSJpmhxT1Ta-JyxqnwtmxSYdkRpKfNVEteY3cYbQnm0Wcr2NPbuUWE79otJ_E17hDIcjfUpRmcH-LrPmPOyaO_X2yxyGeayI8HDg9FkHd4NQc1uf_nsq5vFTPM-xpdhxkl4oQT4zVXvLkP3VvW-q4_VZi4e9wYg0jxmaPH994eydO_Z9wJaX-CSQVJ6nPXGA0FiLiQ9b6sPdQmyqYvzDeyfWl-rUfX1NUdPAgRkS3bUnmG6GW1CeCaCN4heUqv-KNsGtfnSuBYu2gttFJptlWmvJnRSwDfdPtjpYU6dGe-L8YNVnZdUZCcScRUxJs1lTAx8tDEy0EeWbzijhq0SSoiWJP28j41Gtb_O6hXuLDdUMvM5URitSFryl'});

    constructor(private _http: Http) { }

    getEmployees(): Observable<IEmployee[]> {

        return this._http.get(this._productUrl,{headers:this.headers})
            .map((response: Response) => <IEmployee[]>response.json())

    }
    getEmployee(id: number): Observable<IEmployee> {
        if(id===0){
            return Observable.of(this.initializeEmployee())
        };
        return this._http.get(`${this._productUrl}/${id}`,{headers:this.headers})
            .map((res: Response) => <IEmployee>res.json())
    }
    saveEmployee(employee:IEmployee):Observable<IEmployee>{

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: this.headers });

        if (employee.Id=== 0) {
            return this.createEmployee(employee, options);
        }
        return this.updateEmployee(employee, options);
    }    


    deleteServiceWithId(id: number): Observable<Response> {
        return this._http
            .delete(`${this._productUrl}/${id} `, { headers: this.headers })
    }

    createEmployee(employee:IEmployee,options:RequestOptions):Observable<IEmployee>{
        return this._http.post(this._productUrl,employee,options)
        .map(()=>employee)
    }


    updateEmployee(employee:IEmployee,options:RequestOptions):Observable<IEmployee>{
        return this._http.put(`${this._productUrl}/${employee.Id}`,employee,options)
        .map(()=>employee)
       
    }





    initializeEmployee():IEmployee{
        return{
            Id:0,
        FirstName:null,
        LastName:null,
        Birthdate:null,
        JobPosition:null,
        Department:null
        }
    }
}