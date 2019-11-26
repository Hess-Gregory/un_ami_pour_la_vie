import { CommonModule, registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LanguageTranslationModule } from './shared/modules/language-translation/language-translation.module';
import { JwtModule } from '@auth0/angular-jwt';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AuthService } from './shared/services/auth.service';
import { AppRoutingModule } from './app-routing.module';
import { AccordionModule } from 'primeng/accordion';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import {Globals} from './globals';
import { TableModule } from 'primeng/table';
import { DataTablesModule } from 'angular-datatables';
import { MatButtonModule, MatCheckboxModule, MatSelectModule,  MatDatepickerModule,
    MatNativeDateModule, MatInputModule } from '@angular/material';
    import localeFr from '@angular/common/locales/fr';
    import localeFrExtra from '@angular/common/locales/extra/fr';

    registerLocaleData(localeFr, 'fr-FR', localeFrExtra);

export function tokenGetter() { return localStorage.getItem('access_token'); }

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        DataTablesModule,
        LanguageTranslationModule,
        AccordionModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatCheckboxModule,
        TableModule,
        MatSelectModule,
        JwtModule.forRoot({
            config: {
              tokenGetter: tokenGetter,
              whitelistedDomains: ['localhost:4000'],
              blacklistedRoutes: ['localhost:4000/api/auth']
            }
          })
    ],
    declarations: [AppComponent],
    providers: [ AuthService, AuthGuard, Globals],
    bootstrap: [AppComponent],
    schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule {}

