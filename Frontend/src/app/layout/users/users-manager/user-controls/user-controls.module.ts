import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserControlsComponent } from './user-controls.component';
import { UserDetailComponent } from '../user-detail/user-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        RouterModule

    ],
    declarations: [
        UserControlsComponent
    ],
    exports: [
        UserControlsComponent
    ]
})
export class UserControlsModule {}
