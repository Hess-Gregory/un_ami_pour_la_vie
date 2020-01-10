import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminManagerComponent } from './admin-manager.component';

const routes: Routes = [
  {
    path: '',
    data: { breadcrumb: 'Gestion des administrateurs' },
    component: AdminManagerComponent,
    children: [
      {
        path: 'error',
        loadChildren: () =>
          import('./../../../server-error/server-error.module').then(
            m => m.ServerErrorModule
          )
      },
      {
        path: 'access-denied',
        loadChildren: () =>
          import('./../../../access-denied/access-denied.module').then(
            m => m.AccessDeniedModule
          )
      },
      {
        path: 'not-found',
        loadChildren: () =>
          import('./../../../not-found/not-found.module').then(
            m => m.NotFoundModule
          )
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule
            .forChild(routes)],
  exports: [RouterModule]
})
export class AdminManagerRoutingModule {}
