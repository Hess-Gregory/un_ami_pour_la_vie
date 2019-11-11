
import { Component, OnInit, Input } from '@angular/core';
import { AppComponent} from './../app.component';
import { Globals } from '../globals';
import * as jwt_decode from 'jwt-decode';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl:
'./home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    Username: string;
    itUser: any;

  constructor(public globals: Globals ) {
    const jwtToken = localStorage.getItem('access_token');
        if (jwtToken) {
            console.log('Nouveau token: ', jwtToken);
            const decoded = jwt_decode(jwtToken);
            this.itUser = decoded.username;
            console.log('username : ', this.itUser);
            this.Username = this.itUser;
        }
   }

  ngOnInit() {

  }
}
