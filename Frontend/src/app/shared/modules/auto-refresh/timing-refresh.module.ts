import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from '../_modal';
import { AutoRefreshComponent } from './timing-refresh';
@NgModule({
  imports: [CommonModule, ModalModule],
  declarations: [AutoRefreshComponent],
  exports: [AutoRefreshComponent]
})
export class TimingRefreshModule {}
