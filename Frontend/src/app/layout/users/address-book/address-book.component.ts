import { AddressBookService } from './address-book.service';
import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
import { User } from '../users-export';
import { routerTransition } from '../../../router.animations';

@Component({
    selector: 'app-address-book',
    templateUrl: './address-book.component.html',
    styleUrls: ['./address-book.scss'],
    animations: [routerTransition()]
})
export class AddressBookComponent implements OnInit {

    user$: Observable<User[]>;
    dtOptions: DataTables.Settings = {};

    constructor(private users: AddressBookService) {}

    ngOnInit(): void {

        this.user$ = this.users.getUsers();
        this.dtOptions = {
            pagingType: 'full_numbers'
          };
      }
    }
