import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import { UserAddService } from './user-add.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss'],
  animations: [routerTransition()]
})
export class UserAddComponent implements OnInit {

  constructor(private useraddservice: UserAddService) { }

  ngOnInit() {
  }

}
