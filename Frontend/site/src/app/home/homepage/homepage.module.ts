
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { HeaderHomepageComponent } from './header/header.component';
import { HomepageRoutingModule } from './homepage-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HomepageRoutingModule
  ],
  declarations: [HomepageComponent, HeaderHomepageComponent]
})
export class HomepageModule { }
