import { JumboUserModule } from './../services/jumbo-user/jumbo-user.module';

import { MatDialog, MatTable } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTableDirective, DataTablesModule } from 'angular-datatables';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllUsersComponent } from './all-users.component';
import { AllUsersRoutingModule } from './all-users-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
    imports: [
        CommonModule,
        AllUsersRoutingModule,
        DataTablesModule,
        FormsModule,
        NgbModule,
        HttpClientModule,
        ReactiveFormsModule,
        JumboUserModule
    ],
    declarations: [AllUsersComponent],
      exports: [
        DataTableDirective
     ]
})
export class AllUsersModule {}
