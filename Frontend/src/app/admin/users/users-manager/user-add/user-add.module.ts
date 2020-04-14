import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatInputModule,
  MatIconModule,
  MatCardModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserAddComponent } from './user-add.component';
import { UserAddRoutingModule } from './user-add-routing.module';
import { UserControlsModule } from '../user-controls/user-controls.module';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { MatGoogleMapsAutocompleteModule } from '@angular-material-extensions/google-maps-autocomplete';
@NgModule({
  imports: [
    CommonModule,
    UserAddRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSelectModule,
    ReactiveFormsModule,
    UserControlsModule,
    FroalaEditorModule,
    MatGoogleMapsAutocompleteModule,
    FroalaViewModule
  ],
  declarations: [UserAddComponent],
  exports: []
})
export class UserAddModule {}
