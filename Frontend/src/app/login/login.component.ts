import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { first } from 'rxjs/operators';
import { AuthService } from '../auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    public username: string;
    public password: string;
    public error: string;

    constructor(private auth: AuthService, public router: Router ) {}
    onLoggedin() {
        localStorage.setItem('isLoggedin', 'true');

        console.log('onLoggedin');
    }

      public submit() {
    this.auth.login(this.username, this.password)
      .pipe(first())
      .subscribe(
        result => this.router.navigate(['']),
        err => this.error = 'Could not authenticate'
      );
          console.log('submit');
  }

    ngOnInit() {}


}
