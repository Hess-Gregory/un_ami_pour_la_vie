
import { MatDialog, MatTable } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTableDirective, DataTablesModule } from 'angular-datatables';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllUsersComponent } from './all-users.component';

@NgModule({
    imports: [CommonModule],
    declarations: [AllUsersComponent],
      exports: [
        DataTableDirective
     ]
})
export class AllUsersModule {}
