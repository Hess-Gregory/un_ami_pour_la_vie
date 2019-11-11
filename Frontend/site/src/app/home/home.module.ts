import { HeaderHomepageComponent } from './homepage/header/header.component';
import { TimerComponent } from './components/timer/timer.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeRoutingModule } from './home-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomepageComponent } from './homepage/homepage.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgbDropdownModule,
    TranslateModule,
    MDBBootstrapModule.forRoot()
  ],
  declarations: [HomeComponent, NavbarComponent, HomepageComponent, FooterComponent, HeaderHomepageComponent, TimerComponent ]
})
export class HomeModule { }
