
import { Component, OnInit , Input, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { first } from 'rxjs/operators';
import { AuthService } from '../auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [routerTransition()]
})
export class LoginComponent  implements OnInit {
    public email: string;
    public password: string;
    public error: string;
    @Input() data: string[];

    constructor(private auth: AuthService, public router: Router ) {}

      ngOnInit() {}

      public submit() {
        console.log('test');
    this.auth.login(this.email, this.password)
      .pipe(first())
      .subscribe(
        result => this.router.navigate(['/admin']),
        err => this.error = 'Erreur de connexion'
      );



  }



}
