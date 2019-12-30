import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';

const routes: Routes = [
  {
    path: '',
    data: { breadcrumb: 'Utilisateurs' },
    component: UsersComponent,
    children: [
      { path: '', redirectTo: 'users-info', pathMatch: 'prefix' },
      {
        path: 'users-info',
        loadChildren: () =>
          import('./users-info/users-info.module').then(m => m.UsersInfoModule)
      },
      {
        path: 'user-manager',
        loadChildren: () =>
          import('./users-manager/users-manager.module').then(
            m => m.UsersManagerModule
          )
      },
      // { path: 'user-manager', loadChildren: () => import('./users-list/all-users.module')
      //     .then(m => m.AllUsersModule) },
      {
        path: 'admin-manager',
        loadChildren: () =>
          import('./admin-manager/admin-manager.module').then(
            m => m.AdminManagerModule
          )
      },
      {
        path: 'users-activate',
        loadChildren: () =>
          import('./users-activate/users-activate.module').then(
            m => m.UsersActivateModule
          )
      },
      {
        path: 'address-book',
        loadChildren: () =>
          import('./address-book/address-book.module').then(
            m => m.AddressBookModule
          )
      },
      {
        path: 'error',
        loadChildren: () =>
          import('./../../server-error/server-error.module').then(
            m => m.ServerErrorModule
          )
      },
      {
        path: 'access-denied',
        loadChildren: () =>
          import('./../../access-denied/access-denied.module').then(
            m => m.AccessDeniedModule
          )
      },
      {
        path: 'not-found',
        loadChildren: () =>
          import('./../../not-found/not-found.module').then(
            m => m.NotFoundModule
          )
      },
      { path: '**', redirectTo: 'not-found' }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}
