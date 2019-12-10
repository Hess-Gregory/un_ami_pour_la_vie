import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { DataTablesModule } from 'angular-datatables';
// import { UsersRoutingModule } from './users-routing.module';
// import { HttpClientModule } from '@angular/common/http';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { MatButtonModule, MatCheckboxModule, MatSelectModule,  MatDatepickerModule,
//     MatNativeDateModule, MatInputModule } from '@angular/material';
// import { PageHeaderModule } from '../../shared';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { JumboUserComponent } from './services/jumbo-user/jumbo-user.component';

import { UsersComponent } from './users.component';
import { UsersInfoComponent } from './users-info/users-info.component';
import { AllUsersComponent } from './users-list/all-users.component';
import { UsersManagerComponent } from './users-manager/users-manager.component';
import { AdminManagerComponent } from './admin-manager/admin-manager.component';
import { UsersActivateComponent } from './users-activate/users-activate.component';
import { AddressBookComponent } from './address-book/address-book.component';

@NgModule({
    imports: [
        CommonModule, 
        // UsersRoutingModule, 
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
        UsersComponent, 
        UsersInfoComponent, 
        AllUsersComponent, 
        UsersManagerComponent,
        AdminManagerComponent,
        UsersActivateComponent, 
        AddressBookComponent,
        JumboUserComponent
    ]
})
export class UsersModule {}
