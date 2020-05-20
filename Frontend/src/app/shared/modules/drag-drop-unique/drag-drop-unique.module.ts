import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DragDropUniqueComponent } from './drag-drop-unique.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragDropFileUploadDirective } from './../../../drag-drop-file-upload.directive';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [DragDropUniqueComponent, DragDropFileUploadDirective],
  exports: [DragDropUniqueComponent]
})
export class DragDropUniqueModule {}
