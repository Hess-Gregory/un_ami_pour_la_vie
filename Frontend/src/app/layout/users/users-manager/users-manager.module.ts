import { UsersInfoComponent } from './../users-info/users-info.component';
import { UsersManagerRoutingModule } from './users-manager-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersManagerComponent } from './users-manager.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserControlsComponent } from './user-controls/user-controls.component';

// import { DataTablesModule } from 'angular-datatables';
// import { UsersRoutingModule } from './users-routing.module';
// import { UsersComponent } from './users.component';
// import { AddressBookComponent } from './address-book/address-book.component';
// import { AdminManagerComponent } from './admin-manager/admin-manager.component';
// import { AllUsersComponent } from './all-users/all-users.component';
// import { UsersActivateComponent } from './users-activate/users-activate.component';
// import { UsersInfoComponent } from './users-info/users-info.component';
// import { HttpClientModule } from '@angular/common/http';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { AddUserComponent } from './all-users/add-user/add-user.component';
// import { MatButtonModule, MatCheckboxModule, MatSelectModule,  MatDatepickerModule,
//     MatNativeDateModule, MatInputModule } from '@angular/material';
// import { PageHeaderModule } from '../../shared';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        UsersManagerRoutingModule,
        // DataTablesModule,
        // FormsModule,
        // NgbModule,
        // HttpClientModule,
        // PageHeaderModule,
        // FormsModule,
        // MatButtonModule,
        // MatInputModule,
        // MatDatepickerModule,
        // MatNativeDateModule,
        // MatCheckboxModule,
        // MatSelectModule,
        // ReactiveFormsModule
    ],
    declarations: [
        UsersManagerComponent,
        UserControlsComponent,
        UserDetailComponent,
        UserUpdateComponent,
        UserDeleteComponent,
        UserAddComponent
     ]
})
export class UsersManagerModule {}
