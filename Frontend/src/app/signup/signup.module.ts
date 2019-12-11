import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import { MatButtonModule, MatCheckboxModule, MatSelectModule,  MatDatepickerModule,
    MatNativeDateModule, MatInputModule } from '@angular/material';
import { HttpClientModule, HttpClient } from '@angular/common/http';
@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    SignupRoutingModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSelectModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClient
  ],
  declarations: [SignupComponent],
  exports: [
    TranslateModule
  ]
})
export class SignupModule { }
