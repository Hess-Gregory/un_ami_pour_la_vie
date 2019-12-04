import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-users-manager',
    templateUrl: './users-manager.component.html',
    styleUrls: ['./users-manager.component.scss']
})
export class UsersManagerComponent implements OnInit {

    Module = 'Utilisateurs';
    constructor(private router: Router) {
        sessionStorage.setItem('Module', this.Module);
    }

    ngOnInit() {}
    isHomeRoute() {
        return this.router.url === '/admin/users';
      }
}
