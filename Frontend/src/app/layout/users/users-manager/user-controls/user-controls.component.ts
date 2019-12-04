import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../../router.animations';

@Component({
  selector: 'app-user-controls',
  templateUrl: './user-controls.component.html',
  styleUrls: ['./user-controls.component.scss'],
  animations: [routerTransition()]
})
export class UserControlsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
