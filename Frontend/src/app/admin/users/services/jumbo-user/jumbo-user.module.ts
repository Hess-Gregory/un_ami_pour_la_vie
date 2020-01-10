import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JumboUserComponent } from './jumbo-user.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material';

@NgModule({
  imports: [CommonModule, RouterModule, MatIconModule],
  declarations: [JumboUserComponent],
  exports: [JumboUserComponent]
})
export class JumboUserModule {}
