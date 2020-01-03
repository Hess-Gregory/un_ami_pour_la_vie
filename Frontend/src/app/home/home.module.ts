import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeRoutingModule } from './home-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderHomepageComponent } from './components/header/header.component';
import { TimerModule } from './components/timer/timer.module';
@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgbDropdownModule,
    TranslateModule,
    TimerModule
  ],
  declarations: [
    HomeComponent,
    NavbarComponent,
    HeaderHomepageComponent,
    FooterComponent
  ]
})
export class HomeModule {}
