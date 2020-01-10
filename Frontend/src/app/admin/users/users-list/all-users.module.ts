import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AllUsersComponent } from './all-users.component';
import { AllUsersRoutingModule } from './all-users-routing.module';
import { JumboUserModule } from '../services/jumbo-user/jumbo-user.module';

import {
  MatCardModule,
  MatButtonModule,
  MatInputModule,
  MatPaginatorModule,
  MatSortModule,
  MatIconModule,
  MatTableModule
} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    JumboUserModule,
    AllUsersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule
  ],
  declarations: [AllUsersComponent],
  exports: [MatTableModule, MatPaginatorModule, MatSortModule]
})
export class AllUsersModule {}
