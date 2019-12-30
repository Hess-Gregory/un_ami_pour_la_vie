import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressBookComponent } from './address-book.component';
import { AddressBookRoutingModule } from './address-book-routing.module';
import { DataTableDirective, DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JumboUserModule } from '../services/jumbo-user/jumbo-user.module';

@NgModule({
  imports: [
    CommonModule,
    AddressBookRoutingModule,
    DataTablesModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    JumboUserModule
  ],
  declarations: [AddressBookComponent],
  exports: [DataTableDirective]
})
export class AddressBookModule {}
