import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatCheckboxModule, MatSelectModule,  MatDatepickerModule,
    MatNativeDateModule, MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule, DataTableDirective } from 'angular-datatables';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { UserDeleteComponent } from './user-delete.component';
import { UserDeleteRoutingModule } from './user-delete-routing.module';

@NgModule({
    imports: [
        CommonModule,
        UserDeleteRoutingModule,
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
        UserDeleteComponent
    ],
    exports: [
      DataTableDirective
   ]
})
export class UserDeleteModule {}
