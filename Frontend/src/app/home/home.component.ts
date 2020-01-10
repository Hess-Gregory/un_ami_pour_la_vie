import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Globals } from '../globals';
import { Router } from '@angular/router';
import { routerTransition } from './../router.animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [routerTransition()]
})
export class HomeComponent implements OnInit {
  constructor(public globals: Globals, private router: Router) {}

  ngOnInit() {}
}
