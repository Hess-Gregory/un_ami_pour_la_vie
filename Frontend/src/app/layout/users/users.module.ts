import { JumboUserComponent } from './all-users/jumbo-user/jumbo-user.component';
import { UpdateUserComponent } from './all-users/update-user/update-user.component';
import { DeleteUserComponent } from './all-users/delete-user/delete-user.component';
import { GetUserComponent } from './all-users/get-user/get-user.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { AddressBookComponent } from './address-book/address-book.component';
import { AdminManagerComponent } from './admin-manager/admin-manager.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { UsersActivateComponent } from './users-activate/users-activate.component';
import { UsersInfoComponent } from './users-info/users-info.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddUserComponent } from './all-users/add-user/add-user.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [CommonModule, UsersRoutingModule, DataTablesModule,
        FormsModule,
        NgbModule, HttpClientModule, PageHeaderModule],
    declarations: [UsersComponent, AddressBookComponent,
        AdminManagerComponent, AllUsersComponent,
        UsersActivateComponent, AddUserComponent,
        GetUserComponent, DeleteUserComponent,
        UpdateUserComponent, JumboUserComponent, UsersInfoComponent]
})
export class UsersModule {}
