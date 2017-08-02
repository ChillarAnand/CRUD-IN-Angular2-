import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http } from '@angular/http';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';


import {EmployeeModule} from './employees/employee.module';
import {UserModule} from './user/user.module';



import { AppComponent }  from './app.component';
import {WelcomeComponent} from './Welcome/Welcome.Component';
import {routing} from './app.route';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http, "./app/assets/i18n/", ".json");
}

@NgModule({
  imports: [BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    EmployeeModule,
    UserModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [Http]
      }
    })
    
  ],
  declarations: [AppComponent,
    WelcomeComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }