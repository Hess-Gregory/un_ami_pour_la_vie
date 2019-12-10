
import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
import { User } from '../users-export';
import { routerTransition } from '../../../router.animations';

@Component({
    selector: 'app-users-info',
    templateUrl: './users-info.component.html',
    styleUrls: ['./users-info.scss'],
    animations: [routerTransition()]
})
export class UsersInfoComponent implements OnInit {



    constructor() {}

    ngOnInit() {

      }
    }
