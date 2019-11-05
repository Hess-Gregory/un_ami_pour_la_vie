import { Component, OnInit } from '@angular/core';
import {UserInfoModel} from '../models/userInfo';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { routerTransition } from '../router.animations';

@Component({
  selector: 'app-display-user-data',
  templateUrl: './display-user-data.component.html',
  styleUrls: ['./display-user-data.component.scss'],
  animations: [routerTransition()]
})

export class DisplayUserDataComponent implements OnInit {
// constructor(private http: HttpClient, private route: ActivatedRoute) {



user: UserInfoModel = new UserInfoModel({
    guid: 'D21ds12x',
    uid: 'cust2dsa12dsa',
    username: 'John',
    email: 'email@email.com',
    password: 'Idasn2x2#'});
    constructor() { }
// private subscriber: any;
ngOnInit() {
        // this.subscriber = this.route.params.subscribe(params => {

        //     this.http.get('/api/v1/customer/' + params.uid).subscribe((data: any) => {

        //         this.user = new UserInfoModel(data.customer);
        //     });
        // });
    }

}
