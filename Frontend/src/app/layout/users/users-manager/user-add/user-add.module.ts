import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatCheckboxModule, MatSelectModule,  MatDatepickerModule,
    MatNativeDateModule, MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule, DataTableDirective } from 'angular-datatables';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { UserAddComponent } from './user-add.component';
import { UserAddRoutingModule } from './user-add-routing.module';
import { UserControlsModule } from '../user-controls/user-controls.module';

@NgModule({
    imports: [
        CommonModule,
        UserAddRoutingModule,
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
        ReactiveFormsModule,
        UserControlsModule

    ],
    declarations: [
        UserAddComponent
    ],
    exports: [
      DataTableDirective
   ]
})
export class UserAddModule {}
