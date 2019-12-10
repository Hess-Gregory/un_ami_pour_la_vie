import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

    Module = 'Utilisateurs';
    constructor(private router: Router) {
        sessionStorage.setItem('Module', this.Module);
    }

    ngOnInit() {}
    isHomeRoute() {
        return this.router.url === '/admin/users';
      }
}
