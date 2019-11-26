import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import * as jwt_decode from 'jwt-decode';
import { AuthService } from './../../shared/services/auth.service';


@Component({
  selector: 'app-timer-bis',
  templateUrl: './timer-bis.component.html',
  styleUrls: ['./timer-bis.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimerBisComponent implements OnInit {
    deltaTime: Number;
    deltaTimeMessage: any;
    router: any;
    currentDate: any;
    date333: any;
    current_time: number;
    expirationTime: number;
    auth: any;
  constructor(auth: AuthService) {

}

  ngOnInit() {

    const jwtToken = localStorage.getItem('access_token');
    if (jwtToken) {

            const token = localStorage.getItem('access_token');
            const expirationTime = jwt_decode(token)['exp'];
            const current_time2: any  = Date.now() / 1000;
            const current_time: any =  Math.round(current_time2);
            this.currentDate = moment(new Date());

              if (current_time < expirationTime) {
                    this.date333 = new Date( parseInt(expirationTime) * 1000 );
                    this.deltaTime = Math.round((this.date333  - this.currentDate + 30000) / 1000 / 60);
                    this.deltaTimeMessage = ' La connexion expirera dans ' + this.deltaTime + ' min';
                    console.log(this.deltaTimeMessage);
                    return true;
                } else {
                  this.deltaTimeMessage = 'La connexion a expiré';
                  console.log(this.deltaTimeMessage);
                  this.router.navigate(['/login']);
                  this.auth.logout();
                  return false;
                }

      } else {
        this.deltaTimeMessage = 'La connexion a expiré';
        console.log(this.deltaTimeMessage);
        this.router.navigate(['/login']);
        return false;
      }
   }

}

