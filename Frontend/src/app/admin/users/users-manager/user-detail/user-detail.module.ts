import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {
  MatExpansionModule,
  MatButtonModule,
  MatCheckboxModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatInputModule,
  MatIconModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';
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
    MatExpansionModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSelectModule,
    AgmCoreModule,
    ReactiveFormsModule,
    UserControlsModule
  ],
  declarations: [UserDetailComponent],
  exports: [UserDetailComponent]
})
export class UserDetailModule {}
