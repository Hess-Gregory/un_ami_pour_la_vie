import { UserUpdateService } from './user-update.service';
import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../../router.animations';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss'],
  animations: [routerTransition()]
})
export class UserUpdateComponent implements OnInit {

  constructor(private userUpdateservice: UserUpdateService) { }

  ngOnInit() {
  }

}
