import { CommonModule, registerLocaleData } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LanguageTranslationModule } from './shared/modules/language-translation/language-translation.module';
import { JwtModule } from '@auth0/angular-jwt';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AuthService } from './shared/services/auth.service';
import { AppRoutingModule } from './app-routing.module';
import { AccordionModule } from 'primeng/accordion';
import { AppComponent } from './app.component';
import { AuthGuard, PageHeaderModule } from './shared';
import {Globals} from './globals';
import { TableModule } from 'primeng/table';
import { DataTablesModule, DataTableDirective } from 'angular-datatables';
import { MatButtonModule, MatCheckboxModule, MatSelectModule,  MatDatepickerModule,
MatNativeDateModule, MatInputModule } from '@angular/material';
import localeFr from '@angular/common/locales/fr';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BreadcrumbModule } from 'primeng/primeng';
import { RouterModule } from '@angular/router';
    registerLocaleData(localeFr, 'fr');

export function tokenGetter() { return localStorage.getItem('access_token'); }

@NgModule({
    imports: [
        AccordionModule,
        AppRoutingModule,
        BrowserModule,
        RouterModule,
        BrowserAnimationsModule,
        BreadcrumbModule,
        CommonModule,
        DataTablesModule,
        HttpClientModule,
        FormsModule,
        LanguageTranslationModule,
        MatButtonModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSelectModule,
        MatCheckboxModule,
        NgbDropdownModule,
        NgbModule,
        PageHeaderModule,
        ReactiveFormsModule,
        TableModule,
        JwtModule.forRoot({
            config: {
              tokenGetter: tokenGetter,
              whitelistedDomains: ['localhost:4000'],
              blacklistedRoutes: ['localhost:4000/api/auth']
            }
          })
    ],
    declarations: [AppComponent],
    exports: [
      DataTableDirective
   ],
    providers: [ AuthService, AuthGuard, Globals,{ provide: LOCALE_ID, useValue: 'fr-FR' }],
    bootstrap: [AppComponent],
    schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule {}

