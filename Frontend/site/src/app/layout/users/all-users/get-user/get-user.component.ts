import { GetUserService } from './get-user.service';
import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../../router.animations';

@Component({
  selector: 'app-get-user',
  templateUrl: './get-user.component.html',
  styleUrls: ['./get-user.component.scss'],
  animations: [routerTransition()]
})
export class GetUserComponent implements OnInit {

  constructor(private getuserservice: GetUserService) { }

  ngOnInit() {
  }

}

