
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
import { HeaderHomepageComponent } from './components/header/header.component';
@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgbDropdownModule,
    TranslateModule
  ],
  declarations: [HomeComponent, NavbarComponent, HeaderHomepageComponent, FooterComponent,  TimerComponent ]
})
export class HomeModule { }
