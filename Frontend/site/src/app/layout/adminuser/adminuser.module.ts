import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminuserRoutingModule } from './adminuser-routing.module';
import { AdminuserComponent } from './adminuser.component';
import { PageHeaderModule } from './../../shared';
import { TableModule } from 'primeng/table';

@NgModule({
    imports: [CommonModule, AdminuserRoutingModule, PageHeaderModule, TableModule],
    declarations: [AdminuserComponent]
})
export class AdminuserModule {}
