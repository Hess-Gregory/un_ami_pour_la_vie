import { JumboUserModule } from '../services/jumbo-user/jumbo-user.module';
import { UsersActivateRoutingModule } from './users-activate-routing.module';
import { UsersActivateComponent } from './users-activate.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    UsersActivateRoutingModule,
    JumboUserModule,
    CommonModule,
    NgbModule,
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
  declarations: [UsersActivateComponent],
  exports: [MatTableModule, MatPaginatorModule, MatSortModule]
})
export class UsersActivateModule {}
