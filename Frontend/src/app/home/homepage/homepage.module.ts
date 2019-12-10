

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { HomepageRoutingModule } from './homepage-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HomepageRoutingModule,
  ],
  declarations: [HomepageComponent ]
})
export class HomepageModule { }
