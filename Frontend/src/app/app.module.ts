import { CommonModule, registerLocaleData } from '@angular/common';
import { CustomMatPaginatorIntl } from './shared/modules/language-translation/MatPaginationFr';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, LOCALE_ID } from '@angular/core';
import localeFr from '@angular/common/locales/fr';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AuthService } from './shared/services/auth.service';
import { AppRoutingModule } from './app-routing.module';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthGuard, PageHeaderModule } from './shared';
import { JwtModule } from '@auth0/angular-jwt';
import { Globals } from './globals';
import { TableModule } from 'primeng/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';
import { DataTablesModule, DataTableDirective } from 'angular-datatables';
import { BreadcrumbModule, DragDropModule } from 'primeng/primeng';
import { A11yModule } from '@angular/cdk/a11y';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatButtonModule,
  MatBottomSheetModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatStepperModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
  MAT_DATE_LOCALE,
  MatPaginatorIntl
} from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { PortalModule } from '@angular/cdk/portal';
import { CdkTreeModule } from '@angular/cdk/tree';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LanguageTranslationModule } from './shared/modules/language-translation/language-translation.module';
import { ModalModule } from './shared/modules/_modal';
import { TimingRefreshModule } from './shared/modules/auto-refresh/timing-refresh.module';
import { AgmCoreModule } from '@agm/core';
import { MatGoogleMapsAutocompleteModule } from '@angular-material-extensions/google-maps-autocomplete';
import { TimerModule } from './home/components/timer/timer.module';
import * as libphonenumber from 'google-libphonenumber';
registerLocaleData(localeFr, 'fr');

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  imports: [
    TimingRefreshModule,
    TimerModule,
    ModalModule,
    PageHeaderModule,
    NgbDropdownModule,
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
    DataTablesModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    // A11yModule,
    // CdkStepperModule,
    // CdkTableModule,
    // CdkTreeModule,
    DragDropModule,
    // MatAutocompleteModule,
    // MatBadgeModule,
    MatButtonModule,
    MatBottomSheetModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCardModule,
    // MatCheckboxModule,
    // MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    // MatDividerModule,
    // MatExpansionModule,
    MatFormFieldModule,
    // MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    // MatProgressBarModule,
    // MatProgressSpinnerModule,
    MatRadioModule,
    // MatRippleModule,
    // MatStepperModule,
    MatSelectModule,
    // MatSidenavModule,
    // MatSliderModule,
    // MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    // MatTabsModule,
    // MatToolbarModule,
    // MatTooltipModule,
    // MatTreeModule,
    PortalModule,
    ScrollingModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCAWUjNXIL8xtVOS7j1qtX0vGgRapbE2-c',
      libraries: ['places']
    }),
    TableModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:4000'],
        blacklistedRoutes: ['localhost:4000/api/auth']
      }
    }),
    MatGoogleMapsAutocompleteModule,
    AgmCoreModule.forRoot()
  ],
  declarations: [AppComponent],
  exports: [
    TimingRefreshModule,
    TimerModule,
    ModalModule,
    DataTableDirective,
    // A11yModule,
    // CdkStepperModule,
    // CdkTableModule,
    // CdkTreeModule,
    DragDropModule,
    // MatAutocompleteModule,
    // MatBadgeModule,
    MatButtonModule,
    MatBottomSheetModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCardModule,
    // MatCheckboxModule,
    // MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    // MatDividerModule,
    // MatExpansionModule,
    MatFormFieldModule,
    // MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    // MatProgressBarModule,
    // MatProgressSpinnerModule,
    MatRadioModule,
    // MatRippleModule,
    // MatStepperModule,
    MatSelectModule,
    // MatSidenavModule,
    // MatSliderModule,
    // MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule
    // MatTabsModule,
    // MatToolbarModule,
    // MatTooltipModule,
    // MatTreeModule,
  ],
  providers: [
    AuthService,
    AuthGuard,
    Globals,
    { provide: MatPaginatorIntl, useClass: CustomMatPaginatorIntl },
    { provide: LOCALE_ID, useValue: 'fr-FR' },
    { provide: MAT_DATE_LOCALE, useValue: 'fr-FR' }
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
