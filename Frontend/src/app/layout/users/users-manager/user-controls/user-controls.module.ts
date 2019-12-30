import { UserDeleteModule } from './../user-delete/user-delete.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserControlsComponent } from './user-controls.component';
import { RouterModule } from '@angular/router';
import { ModalModule } from '../../../../shared/modules/_modal';

@NgModule({
  imports: [CommonModule, RouterModule, ModalModule, UserDeleteModule],
  declarations: [UserControlsComponent],
  exports: [UserControlsComponent]
})
export class UserControlsModule {}
