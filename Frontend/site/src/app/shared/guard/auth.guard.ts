import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import * as jwt_decode from 'jwt-decode';

@Injectable()
export class AuthGuard implements CanActivate {

    currentDate: any;

    constructor(private router: Router) {}

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

      const jwtToken = localStorage.getItem('access_token');
      if (jwtToken) {
         console.log('jwtToken: ', jwtToken);

            if (jwtToken) {

                const token = localStorage.getItem('access_token');
                const expirationTime = jwt_decode(token)['exp'];
                const current_time2: any  = Date.now() / 1000;
                const current_time: any =  Math.round(current_time2);
                this.currentDate = moment(new Date());

                  if (current_time < expirationTime) {
                    return true;

                      } else {
                    this.router.navigate(['login']);
                    return false;
                  }

          } else {
            this.router.navigate(['/login']);
            return false;
          }

        }
}
}
