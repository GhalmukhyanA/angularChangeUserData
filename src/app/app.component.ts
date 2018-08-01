import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor() {
        const user = {
            userName: 'An...',
            surName: 'Gh...',
            email: 'a...@mail.ru',
            password: '******'
        };
        this.userName = user.userName;
        this.surName = user.surName;
        this.email = user.email;
        this.password = user.password;
    }

    userName = 'An...';
    surName = 'Gh...';
    email = 'a...@mail.ru';
    password = '******';

    changeUserData() {
        this.userName = "Anahit";
        this.surName = "Ghalmukhyan";
        this.email = "aghalmukhyan@mail.ru";
        this.password = "111111";
    }
}
