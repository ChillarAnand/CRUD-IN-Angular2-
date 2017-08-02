import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
    templateUrl: 'app/Welcome/welcome.component.html',
    styleUrls:['app/employees/employee-list.component.css']
})
export class WelcomeComponent {
    public pageTitle: string = 'Welcome';
}
