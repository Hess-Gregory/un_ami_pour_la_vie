import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { AdminuserRoutingModule } from './adminuser-routing.module';
import { AdminuserComponent } from './adminuser.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, AdminuserRoutingModule, PageHeaderModule,
        DataTablesModule],
    declarations: [AdminuserComponent]
})
export class AdminuserModule {}
