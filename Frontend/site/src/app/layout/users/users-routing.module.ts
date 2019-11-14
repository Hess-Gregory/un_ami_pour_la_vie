import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { AddressBookComponent } from './address-book/address-book.component';
import { AdminManagerComponent } from './admin-manager/admin-manager.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { UsersActivateComponent } from './users-activate/users-activate.component';

const routes: Routes = [
    {
        path: '',
        data: {
            breadcrumb: null
        },
        component: UsersComponent,
        children: [
            { path: '', data: { breadcrumb: null }, component: UsersComponent },
            { path: 'address-book', data: { breadcrumb: 'Carnet adresse' },  component: AddressBookComponent},
            { path: 'admin-manager', data: { breadcrumb: 'Gestion des administrateurs' },  component: AdminManagerComponent},
            { path: 'all-users', data: { breadcrumb: 'Gestion des utilisateurs' },  component: AllUsersComponent},
            { path: 'users-activate', data: { breadcrumb: 'Activations' }, component: UsersActivateComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersRoutingModule {}
