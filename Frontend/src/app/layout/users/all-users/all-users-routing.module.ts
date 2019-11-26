import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllUsersComponent } from './all-users.component';
import { AddUserComponent } from './add-user/add-user.component';

const routes: Routes = [
    {
        path: '',
        data: {
            breadcrumb: null
        },
        component: AllUsersComponent,
        children: [
            { path: '', data: { breadcrumb: null }, component: AllUsersComponent },
            { path: 'add-user', data: { breadcrumb: 'Ajouter utilisateur bis' },  component: AddUserComponent},
           // ,{ path: 'update-user', data: { breadcrumb: 'Modifier utilisateur' }, component: UpdateUserComponent},
            // { path: 'delete-user', data: { breadcrumb: 'Supprimer utilisateur' },  component: DeleteUserComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AllUsersRoutingModule {}
