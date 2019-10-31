import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LanguageTranslationModule } from './shared/modules/language-translation/language-translation.module';
import { NgxPopper } from 'angular-popper';
import { JwtModule } from '@auth0/angular-jwt';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { AuthService } from './auth.service';
import * as $ from 'jquery';
import * as moment from 'moment';

export function tokenGetter() {
    return localStorage.getItem('access_token');
  }

@NgModule({
   imports: [
      CommonModule,
      BrowserModule,
      HttpClientModule,
      BrowserAnimationsModule,
      LanguageTranslationModule,
      AppRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      NgxPopper,
      JwtModule.forRoot({
        config: {
          tokenGetter: tokenGetter,
          whitelistedDomains: ['localhost:4000'],
          blacklistedRoutes: ['localhost:4000/api/auth']
        }
      })
   ],
   declarations: [
      AppComponent
   ],
   exports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule
   ],
   providers: [
    AuthService,
    AuthGuard
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule {}
