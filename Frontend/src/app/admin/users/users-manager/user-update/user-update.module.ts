import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserUpdateComponent } from './user-update.component';
import { UserUpdateRoutingModule } from './user-update-routing.module';
import { A11yModule } from '@angular/cdk/a11y';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatInputModule
} from '@angular/material';
import { TabMenuModule } from 'primeng/tabmenu';
import { UserControlsModule } from '../user-controls/user-controls.module';
@NgModule({
  imports: [
    CommonModule,
    TabMenuModule,
    UserUpdateRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    A11yModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSelectModule,
    PortalModule,
    ScrollingModule,
    ReactiveFormsModule,
    UserControlsModule
  ],
  declarations: [UserUpdateComponent],
  exports: []
})
export class UserUpdateModule {}
