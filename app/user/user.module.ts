import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login.component';
import { AuthService } from './auth.service';
import {MessageService} from '../messages/message.service'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path:'login',component: LoginComponent}
    ])
  ],
  declarations: [
    LoginComponent
  ],
  providers: [
    AuthService,
    MessageService
  ]
})
export class UserModule { }