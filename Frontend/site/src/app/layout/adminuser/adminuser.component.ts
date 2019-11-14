
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { User, UserService } from './../../shared/index';
import { Observable, Subscription } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Component({
    selector: 'app-adminuser',
    templateUrl: './adminuser.component.html',
    styleUrls: ['./adminuser.component.scss'],
    animations: [routerTransition()]
})
export class AdminuserComponent implements OnInit {
    user$: Observable<User[]>;

    constructor(private users: UserService, private http: HttpClient) {}


    ngOnInit(): void  {
        this.user$ = this.users.getUsers();
        this.user$.subscribe(value => console.log(value) );

    }


}
