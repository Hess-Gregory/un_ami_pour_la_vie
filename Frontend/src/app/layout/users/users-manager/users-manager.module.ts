import { UsersManagerRoutingModule } from './users-manager-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersManagerComponent } from './users-manager.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, UsersManagerRoutingModule, RouterModule],
  declarations: [UsersManagerComponent]
})
export class UsersManagerModule {}
