import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import { UserDeleteService } from './user-delete.service';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.scss'],
  animations: [routerTransition()]
})
export class UserDeleteComponent implements OnInit {

  constructor(private userDeleteservice: UserDeleteService) { }

  ngOnInit() {
  }

}

