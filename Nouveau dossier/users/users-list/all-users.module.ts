import { UpdateUserComponent } from './update-user/update-user.component';
import { GetUserComponent } from './get-user/get-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { MatDialog, MatTable } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTableDirective, DataTablesModule } from 'angular-datatables';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllUsersRoutingModule } from './all-users-routing.module';
import { AllUsersComponent } from './all-users.component';
import { AddUserComponent } from './add-user/add-user.component';

@NgModule({
    imports: [CommonModule, AllUsersRoutingModule,  DataTablesModule,
        FormsModule,
        NgbModule, HttpClientModule],
    declarations: [],
      exports: [
        DataTableDirective
     ]
})
export class AllUsersModule {}
