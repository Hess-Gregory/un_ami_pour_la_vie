import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';
import { DataTableDirective, DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        UsersRoutingModule,
        DataTablesModule,
        FormsModule,
        NgbModule,
        HttpClientModule

    ],
    declarations: [
        UsersComponent
    ],
    exports: [
      DataTableDirective
   ]
})
export class UsersModule {}
