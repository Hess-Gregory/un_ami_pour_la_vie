import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeHeaderComponent} from './home-header/home-header.component';
import { HomeNavbarComponent} from './home-navbar/home-navbar.component';
import { SliderComponent} from './slider/slider.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgbDropdownModule,
    NgbCarouselModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [HomeComponent, HomeHeaderComponent, HomeNavbarComponent, SliderComponent ]
})
export class HomeModule { }
