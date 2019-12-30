import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

import { AuthGuard, RoleGuard } from './../shared';
const routes: Routes = [
  {
    path: '',
    data: { breadcrumb: 'Admin' },
    component: LayoutComponent,
    children: [
      // [RoleGuard.authLevel >= 10]
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'prefix',
        canActivate: [AuthGuard]
      },

      // tslint:disable-next-line:max-line-length
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then(m => m.DashboardModule),
        data: { breadcrumb: 'Panneau général' }
      },
      {
        path: 'users',
        loadChildren: () =>
          import('./users/users.module').then(m => m.UsersModule),
        canActivate: [AuthGuard]
      },
      // tslint:disable-next-line: max-line-length
      {
        path: 'charts',
        loadChildren: () =>
          import('./charts/charts.module').then(m => m.ChartsModule),
        data: { breadcrumb: 'Charts' },
        canActivate: [AuthGuard]
      },
      // tslint:disable-next-line: max-line-length
      {
        path: 'tables',
        loadChildren: () =>
          import('./tables/tables.module').then(m => m.TablesModule),
        data: { breadcrumb: 'Tables' }
      },
      {
        path: 'forms',
        loadChildren: () =>
          import('./form/form.module').then(m => m.FormModule),
        data: { breadcrumb: 'Forms' }
      },
      // tslint:disable-next-line: max-line-length
      {
        path: 'bs-element',
        loadChildren: () =>
          import('./bs-element/bs-element.module').then(m => m.BsElementModule),
        data: { breadcrumb: 'Bs-element' }
      },
      {
        path: 'grid',
        loadChildren: () =>
          import('./grid/grid.module').then(m => m.GridModule),
        data: { breadcrumb: 'Grid' }
      },
      // tslint:disable-next-line: max-line-length
      {
        path: 'components',
        loadChildren: () =>
          import('./bs-component/bs-component.module').then(
            m => m.BsComponentModule
          ),
        data: { breadcrumb: 'Components' }
      },
      // tslint:disable-next-line: max-line-length
      {
        path: 'blank-page',
        loadChildren: () =>
          import('./blank-page/blank-page.module').then(m => m.BlankPageModule),
        data: { breadcrumb: 'Blank-page' }
      },
      {
        path: 'error',
        loadChildren: () =>
          import('./../server-error/server-error.module').then(
            m => m.ServerErrorModule
          )
      },
      // tslint:disable-next-line: max-line-length
      {
        path: 'access-denied',
        loadChildren: () =>
          import('./../access-denied/access-denied.module').then(
            m => m.AccessDeniedModule
          )
      },
      {
        path: 'not-found',
        loadChildren: () =>
          import('./../not-found/not-found.module').then(m => m.NotFoundModule)
      },

      { path: '**', redirectTo: 'not-found' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {}
