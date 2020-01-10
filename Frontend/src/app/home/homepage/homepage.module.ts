import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { HomepageRoutingModule } from './homepage-routing.module';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [CommonModule, HomepageRoutingModule, AgmCoreModule],
  declarations: [HomepageComponent]
})
export class HomepageModule {}
