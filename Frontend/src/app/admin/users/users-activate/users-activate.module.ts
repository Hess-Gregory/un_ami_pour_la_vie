import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersActivateComponent } from './users-activate.component';
import { UsersActivateRoutingModule } from './users-activate-routing.module';
import { DataTableDirective, DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JumboUserModule } from '../services/jumbo-user/jumbo-user.module';
@NgModule({
  imports: [
    CommonModule,
    UsersActivateRoutingModule,
    DataTablesModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    JumboUserModule
  ],
  declarations: [UsersActivateComponent],
  exports: [DataTableDirective]
})
export class UsersActivateModule {}
