import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import { AddUserService } from './add-user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
  animations: [routerTransition()]
})
export class AddUserComponent implements OnInit {

  constructor(private adduserservice: AddUserService) { }

  ngOnInit() {
  }

}
