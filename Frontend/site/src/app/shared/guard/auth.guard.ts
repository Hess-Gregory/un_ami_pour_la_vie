import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import * as jwt_decode from 'jwt-decode';

@Injectable()
export class AuthGuard implements CanActivate {
    deltaTime: any;
    deltaTimeMessage;
    currentDate: any;
    date333: any;
    constructor(private router: Router) {}

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      const jwtToken = localStorage.getItem('access_token');
      if (jwtToken) {
         console.log('jwtToken: ', jwtToken);

            if (jwtToken) {
            const decoded = jwt_decode(jwtToken);
            const expirationTime = decoded.exp;
            new Date().toString();
            const date = new Date(0);
            date.setUTCSeconds(expirationTime);
            date.valueOf();
            const current_time2 = Date.now() / 1000;
            const current_time =  Math.round(current_time2);

                if (current_time  < expirationTime) {

                    this.currentDate = moment(new Date());
                    this.date333 = new Date( parseInt(expirationTime) * 1000 );
                    this.deltaTime = Math.round((this.date333 - this.currentDate + 30000) / 1000 / 60);
                    this.deltaTimeMessage = ' La connexion expirera dans ' + this.deltaTime + ' min';
                    console.log(this.deltaTimeMessage);
                    return true;
                    } else {
                    this.deltaTimeMessage = 'La connexion a expiré';
                    console.log(this.deltaTimeMessage);
                    this.router.navigate(['/login']);
                    return false;
                }
            }
        }


    }
}
