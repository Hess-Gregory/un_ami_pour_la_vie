import { UsersManagerRoutingModule } from './users-manager-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersManagerComponent } from './users-manager.component';
import { RouterModule } from '@angular/router';
import { UserControlsModule } from './user-controls/user-controls.module';
import { UserControlsComponent } from './user-controls/user-controls.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { MatCheckboxModule, MatNativeDateModule, MatInputModule, MatButtonModule, MatDatepickerModule, MatSelectModule } from '@angular/material';




@NgModule({
    imports: [
        CommonModule,
        UsersManagerRoutingModule,
        RouterModule
    ],
    declarations: [
        UsersManagerComponent
     ]
})
export class UsersManagerModule {}
