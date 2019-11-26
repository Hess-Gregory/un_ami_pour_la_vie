
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


  constructor(public globals: Globals ) {}

  ngOnInit() {

  }
}
