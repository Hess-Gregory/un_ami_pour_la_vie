import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UsersInfoRoutingModule } from './users-info-routing.module';
import { UsersInfoComponent } from './users-info.component';
import { JumboUserModule } from '../services/jumbo-user/jumbo-user.module';

import {
  MatCardModule,
  MatButtonModule,
  MatInputModule,
  MatPaginatorModule,
  MatGridListModule,
  MatSortModule,
  MatMenuModule,
  MatIconModule,
  MatTableModule
} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    JumboUserModule,
    UsersInfoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatMenuModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatTableModule
  ],
  declarations: [UsersInfoComponent],
  exports: [
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatMenuModule
  ]
})
export class UsersInfoModule {}
