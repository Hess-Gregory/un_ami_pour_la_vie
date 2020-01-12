import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatInputModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { UserDetailComponent } from './user-detail.component';
import { UserDetailRoutingModule } from './user-detail-routing.module';
import { UserControlsModule } from '../user-controls/user-controls.module';

@NgModule({
  imports: [
    CommonModule,
    UserDetailRoutingModule,
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
  declarations: [UserDetailComponent],
  exports: [UserDetailComponent]
})
export class UserDetailModule {}
