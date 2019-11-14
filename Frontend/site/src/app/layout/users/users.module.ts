
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { AddressBookComponent } from './address-book/address-book.component';
import { AdminManagerComponent } from './admin-manager/admin-manager.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { UsersActivateComponent } from './users-activate/users-activate.component';

@NgModule({
    imports: [CommonModule, UsersRoutingModule],
    declarations: [UsersComponent, AddressBookComponent, AdminManagerComponent, AllUsersComponent, UsersActivateComponent]
})
export class UsersModule {}
