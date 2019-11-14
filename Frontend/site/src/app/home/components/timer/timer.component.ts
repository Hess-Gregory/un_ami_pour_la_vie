import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimerComponent implements OnInit {
    deltaTime: any;
    deltaTimeMessage;
    router: any;
    currentDate: any;
    date333: any;

  constructor() {

    const jwtToken = localStorage.getItem('access_token');
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
                    this.deltaTimeMessage = ' Votre connexion expirera dans ' + this.deltaTime + ' min';
                    console.log(this.deltaTimeMessage);

                 } else {
                    this.deltaTimeMessage = ' Votre connexion a expiré.';
                     console.log(this.deltaTimeMessage);
                }
    }
  }

  ngOnInit() { }

}
