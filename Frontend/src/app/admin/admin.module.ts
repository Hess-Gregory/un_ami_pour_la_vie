import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { BreadcrumbModule, AccordionModule } from 'primeng/primeng';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PageHeaderModule } from '../shared';
import { TableModule } from 'primeng/table';
import { LanguageTranslationModule } from '../shared/modules/language-translation/language-translation.module';
import { TimingRefreshModule } from '../shared/modules/auto-refresh/timing-refresh.module';

@NgModule({
  imports: [
    TimingRefreshModule,
    AccordionModule,
    CommonModule,
    AdminRoutingModule,
    TranslateModule,
    LanguageTranslationModule,
    NgbDropdownModule,
    BreadcrumbModule,
    NgbModule,
    HttpClientModule,
    PageHeaderModule,
    ReactiveFormsModule,
    FormsModule,
    TableModule
  ],
  declarations: [
    AdminComponent,
    SidebarComponent,
    HeaderComponent,
    BreadcrumbComponent
  ],
  exports: [NgbModule]
})
export class AdminModule {}
