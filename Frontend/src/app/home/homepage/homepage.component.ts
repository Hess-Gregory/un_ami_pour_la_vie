import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { routerTransition } from './../../router.animations';
import { Router } from '@angular/router';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  animations: [routerTransition()]
})
export class HomepageComponent implements OnInit {

    constructor(private router: Router) { }


    ngOnInit() {

    }


  }
