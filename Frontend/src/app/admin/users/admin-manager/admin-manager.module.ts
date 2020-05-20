import { AdminManagerRoutingModule } from './admin-manager-routing.module';
import { AdminManagerComponent } from './admin-manager.component';
import { JumboUserModule } from '../services/jumbo-user/jumbo-user.module';
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
    AdminManagerRoutingModule,
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
  declarations: [AdminManagerComponent],
  exports: [MatTableModule, MatPaginatorModule, MatSortModule]
})

export class AdminManagerModule {}
