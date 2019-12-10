import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import { UserDeleteService } from './user-delete.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.scss'],
  providers: [HttpClient]
})
export class UserDeleteComponent implements OnInit {

  constructor(private userDeleteservice: UserDeleteService) { }

  ngOnInit() {
  }

}

