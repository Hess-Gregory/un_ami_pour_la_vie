import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatCheckboxModule, MatSelectModule,  MatDatepickerModule,
    MatNativeDateModule, MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule, DataTableDirective } from 'angular-datatables';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { UserUpdateComponent } from './user-update.component';
import { UserUpdateRoutingModule } from './user-update-routing.module';
import { UserDetailComponent } from '../user-detail/user-detail.component';

@NgModule({
    imports: [
        CommonModule,
        UserUpdateRoutingModule,
        DataTablesModule,
        FormsModule,
        NgbModule,
        HttpClientModule,
        MatButtonModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatCheckboxModule,
        MatSelectModule,
        ReactiveFormsModule

    ],
    declarations: [
        UserUpdateComponent
    ],
    exports: [
      DataTableDirective
   ]
})
export class UserUpdateModule {}
