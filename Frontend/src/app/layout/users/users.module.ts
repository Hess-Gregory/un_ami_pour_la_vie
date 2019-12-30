import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  declarations: [UsersComponent],
  exports: []
})
export class UsersModule {}
