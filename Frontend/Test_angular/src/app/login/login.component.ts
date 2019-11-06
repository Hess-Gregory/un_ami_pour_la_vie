import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public email: string;
  public password: string;
  public error: string;
  http: any;

  constructor(private auth: AuthService, private router: Router) { }

  public submit() {
    this.auth.login(this.email, this.password).pipe(first()).subscribe(
        result => this.router.navigate(['users']),
        err => this.error = 'Votre email ou votre mot de passe ne sont pas corrects, ou bien votre compte n\'est pas activé.'
      );
  }
}