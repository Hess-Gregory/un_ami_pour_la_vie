import { Component, OnInit } from '@angular/core';
import * as jwt_decode from 'jwt-decode';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
    Username: string;
    collapedSideBar: boolean;
    dateNow = new Date();
    YearNow = this.dateNow.getFullYear();

    constructor() {
        const jwtToken = localStorage.getItem('access_token');
            if (jwtToken) {
                const token = localStorage.getItem('access_token');
                this.Username = jwt_decode(token)['username'];
            }
    }

    ngOnInit() {

    }

    receiveCollapsed($event: boolean) {
        this.collapedSideBar = $event;
    }
}
