import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DisplayUserDataRoutingModule } from './display-user-data-routing.module';
import { DisplayUserDataComponent } from './display-user-data.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    DisplayUserDataRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [DisplayUserDataComponent],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DisplayUserDataModule { }
