import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeRoutingModule } from './home-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgbDropdownModule,
    TranslateModule,
    NgModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
