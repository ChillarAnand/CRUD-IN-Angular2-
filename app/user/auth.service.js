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
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
var message_service_1 = require("../messages/message.service");
var AuthService = (function () {
    function AuthService(messageService, http) {
        this.messageService = messageService;
        this.http = http;
        this.baseUrl = 'http://localhost:64038/Token';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    }
    AuthService.prototype.login = function (userName, password) {
        if (!userName || !password) {
            this.messageService.addMessage('Please enter your userName and password');
            return;
        }
        var body = new http_1.URLSearchParams();
        body.set('username', userName);
        body.set('password', password);
        body.set('grant_type', 'password');
        return this.http.post(this.baseUrl, body, this.headers)
            .map(function (res) {
            return {
                token: res.json().access_token,
                username: res.json().userName
            };
        })
            .do(function (x) { return console.log(JSON.stringify(x)); });
    };
    AuthService.prototype.logout = function () {
        this.currentUser = null;
    };
    return AuthService;
}());
AuthService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [message_service_1.MessageService, http_1.Http])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map