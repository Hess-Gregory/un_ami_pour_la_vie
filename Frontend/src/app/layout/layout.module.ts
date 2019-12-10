import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import {BreadcrumbComponent} from './breadcrumb/breadcrumb.component';
import {BreadcrumbModule, AccordionModule} from 'primeng/primeng';
import { TimerBisComponent} from './timer-bis/timer-bis.component';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PageHeaderModule } from '../shared';
import { MatButtonModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, MatSelectModule } from '@angular/material';
import { TableModule } from 'primeng/table';
import { LanguageTranslationModule } from '../shared/modules/language-translation/language-translation.module';

@NgModule({
    imports: [
        AccordionModule,
        CommonModule,
        LayoutRoutingModule,
        TranslateModule,
        LanguageTranslationModule,
        NgbDropdownModule,
        BreadcrumbModule,
        DataTablesModule,
        NgbModule,
        HttpClientModule,
        PageHeaderModule,
        MatButtonModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatCheckboxModule,
        MatSelectModule,
        ReactiveFormsModule,
        FormsModule,
        TableModule

    ],
    declarations: [LayoutComponent, SidebarComponent, HeaderComponent,
        BreadcrumbComponent, TimerBisComponent],
    exports: [NgbModule]
})
export class LayoutModule {}
