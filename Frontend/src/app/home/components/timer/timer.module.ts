import { TimerComponent } from './timer.component';
import { ModalModule } from '../../../shared/modules/_modal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
@NgModule({
  imports: [CommonModule, ModalModule],
  declarations: [TimerComponent],
  exports: [TimerComponent]
})
export class TimerModule {}
