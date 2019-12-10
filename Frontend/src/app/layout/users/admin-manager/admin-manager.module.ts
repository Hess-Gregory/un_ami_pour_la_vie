import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminManagerRoutingModule } from './admin-manager-routing.module';
import { AdminManagerComponent } from './admin-manager.component';
import { DataTablesModule, DataTableDirective } from 'angular-datatables';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JumboUserModule } from '../services/jumbo-user/jumbo-user.module';

@NgModule({
    imports: [
        CommonModule,
        AdminManagerRoutingModule,
        DataTablesModule,
        FormsModule,
        NgbModule,
        HttpClientModule,
        JumboUserModule


    ],
    declarations: [
        AdminManagerComponent
    ],
    exports: [
      DataTableDirective
   ]
})
export class AdminManagerModule {}
