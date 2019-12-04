import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import {BreadcrumbComponent} from './breadcrumb/breadcrumb.component';
import {BreadcrumbModule} from 'primeng/primeng';
import { TimerBisComponent} from './timer-bis/timer-bis.component';
import { UsersComponent } from './users/users.component';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PageHeaderModule } from '../shared';
import { MatButtonModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, MatSelectModule } from '@angular/material';
@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        TranslateModule,
        NgbDropdownModule,
        BreadcrumbModule,
        DataTablesModule,
        FormsModule,
        NgbModule,
        HttpClientModule,
        PageHeaderModule,
        FormsModule,
        MatButtonModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatCheckboxModule,
        MatSelectModule,
        ReactiveFormsModule,
        DataTablesModule,
        FormsModule,
        NgbModule,
        HttpClientModule
    ],
    declarations: [UsersComponent, LayoutComponent, SidebarComponent, HeaderComponent,
        BreadcrumbComponent, TimerBisComponent]
})
export class LayoutModule {}
