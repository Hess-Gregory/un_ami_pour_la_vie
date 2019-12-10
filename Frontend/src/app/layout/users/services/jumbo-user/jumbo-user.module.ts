import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JumboUserComponent } from './jumbo-user.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        RouterModule


    ],
    declarations: [
        JumboUserComponent
    ],
    exports: [
        JumboUserComponent
    ]
})
export class JumboUserModule {}
