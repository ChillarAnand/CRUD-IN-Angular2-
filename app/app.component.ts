import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

import {EmployeeService} from './employees/employee.service'

@Component({
    selector: 'pm-app',
    templateUrl:'app/app.component.html',
    providers: [EmployeeService]

})
export class AppComponent {
    constructor(private translate: TranslateService) {
        translate.addLangs(["English", "French","Telugu","Kannada"]);
        translate.setDefaultLang('English');

        let browserLang = translate.getBrowserLang();
        // translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
    }
}
