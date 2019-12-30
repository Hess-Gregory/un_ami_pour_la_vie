import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatInputModule,
  MatCardModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule, DataTableDirective } from 'angular-datatables';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { UserDeleteComponent } from './user-delete.component';
import { UserDeleteRoutingModule } from './user-delete-routing.module';
import { UserControlsModule } from '../user-controls/user-controls.module';
import { ModalModule } from '../../../../shared/modules/_modal';

@NgModule({
  imports: [
    CommonModule,
    UserDeleteRoutingModule,
    ModalModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatCardModule
  ],
  declarations: [UserDeleteComponent],
  exports: [UserDeleteComponent]
})
export class UserDeleteModule {}
