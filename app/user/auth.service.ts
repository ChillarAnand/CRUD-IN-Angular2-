import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams  } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { IUser } from './user';
import { MessageService } from '../messages/message.service';

@Injectable()
export class AuthService {
    token: string;
    private baseUrl: string = 'http://localhost:64038/Token';
    private headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' })
    currentUser: IUser;

    constructor(private messageService: MessageService, private http: Http) { }

    login(userName: string, password: string) {
        if (!userName || !password) {
            this.messageService.addMessage('Please enter your userName and password');
            return;
        }
        let body = new URLSearchParams();
        body.set('username', userName);
        body.set('password', password);
        body.set('grant_type', 'password');
        return this.http.post(this.baseUrl, body, this.headers)
            .map(res => {
                return {
                    token: res.json().access_token,
                    username: res.json().userName
                }
            })
            .do(x => console.log(JSON.stringify(x)))
    }

    logout(): void {
        this.currentUser = null;
    }
}
