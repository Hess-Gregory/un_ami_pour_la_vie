import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersInfoRoutingModule } from './users-info-routing.module';
import { UsersInfoComponent } from './users-info.component';
import { JumboUserModule } from '../services/jumbo-user/jumbo-user.module';

@NgModule({
    imports: [
        CommonModule,
        UsersInfoRoutingModule,
        JumboUserModule

    ],
    declarations: [
        UsersInfoComponent
    ]
})
export class UsersInfoModule {}
