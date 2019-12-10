import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersManagerComponent } from './users-manager.component';


//             { path: 'user-get', data: { breadcrumb: 'Détail du membre' },  component: UserDetailComponent},
//             { path: 'user-update', data: { breadcrumb: 'Modifier le membre' }, component: UserUpdateComponent},
//             { path: 'user-delete', data: { breadcrumb: 'Supprimer le membre' },  component: UserDeleteComponent},
//             { path: 'user-add', data: { breadcrumb: 'Ajouter un membre' },  component: UserAddComponent}



const routes: Routes = [
    {
        path: '',
        component: UsersManagerComponent,
        children: [

            { path: '', redirectTo: 'users-list', pathMatch: 'prefix'},
            { path: 'users-list', loadChildren: () => import('./../users-list/all-users.module')
                .then(m => m.AllUsersModule) },
            { path: 'user-get', loadChildren: () => import('./user-detail/user-detail.module')
                .then(m => m.UserDetailModule) },
            { path: 'user-update', loadChildren: () => import('./user-update/user-update.module')
                .then(m => m.UserUpdateModule) },
            { path: 'user-delete', loadChildren: () => import('./user-delete/user-delete.module')
            .then(m => m.UserDeleteModule) },
            { path: 'user-add', loadChildren: () => import('./user-add/user-add.module')
                .then(m => m.UserAddModule) },
            { path: 'error', loadChildren: () => import('./../../../server-error/server-error.module')
                .then(m => m.ServerErrorModule) },
            { path: 'access-denied', loadChildren: () => import('./../../../access-denied/access-denied.module')
                .then(m => m.AccessDeniedModule) },
            { path: 'not-found', loadChildren: () => import('./../../../not-found/not-found.module')
                .then(m => m.NotFoundModule) },
            { path: '**', redirectTo: 'not-found' }
        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersManagerRoutingModule {}
