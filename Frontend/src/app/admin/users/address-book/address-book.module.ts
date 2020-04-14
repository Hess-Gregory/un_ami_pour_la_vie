import { JumboUserModule } from '../services/jumbo-user/jumbo-user.module';
import { AddressBookComponent } from './address-book.component';
import { AddressBookRoutingModule } from './address-book-routing.module';
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
    AddressBookRoutingModule,
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
  declarations: [AddressBookComponent],
  exports: [MatTableModule, MatPaginatorModule, MatSortModule]
})
export class AddressBookModule {}
