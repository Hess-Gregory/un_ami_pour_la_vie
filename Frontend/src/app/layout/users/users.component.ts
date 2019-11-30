import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

    Module = 'Utilisateurs';
    constructor() {
        sessionStorage.setItem('Module', this.Module);
    }

    ngOnInit() {}
}
