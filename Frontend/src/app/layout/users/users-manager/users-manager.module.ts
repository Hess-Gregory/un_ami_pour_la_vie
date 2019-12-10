import { UsersManagerRoutingModule } from './users-manager-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersManagerComponent } from './users-manager.component';
import { RouterModule } from '@angular/router';
import { UserControlsModule } from './user-controls/user-controls.module';
import { UserControlsComponent } from './user-controls/user-controls.component';




@NgModule({
    imports: [
        CommonModule,
        UsersManagerRoutingModule,
        RouterModule
    ],
    declarations: [
        UsersManagerComponent, UserControlsComponent
     ]
})
export class UsersManagerModule {}
