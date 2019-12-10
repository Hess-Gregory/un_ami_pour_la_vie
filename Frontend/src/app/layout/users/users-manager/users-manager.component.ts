import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-users-manager',
    templateUrl: './users-manager.component.html',
    styleUrls: ['./users-manager.component.scss'],
    providers: [HttpClient]
})
export class UsersManagerComponent implements OnInit {


    Module = 'Utilisateurs';
    constructor(public router: Router) {
        sessionStorage.setItem('Module', this.Module);
    }

    ngOnInit() {}

}
