import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    console = console;
    constructor(private auth: AuthService, private router: Router) {
    }
    logout() {
        this.auth.logout();
        this.router.navigate(['login']);
      }
    ngOnInit() {
    }
}
