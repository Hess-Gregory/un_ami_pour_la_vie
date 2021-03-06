import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { AgmCoreModule } from '@agm/core';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    data: { breadcrumb: 'Home' }
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canActivate: [AuthGuard],
    data: { breadcrumb: 'admin' }
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./signup/signup.module').then(m => m.SignupModule)
  },
  {
    path: 'error',
    loadChildren: () =>
      import('./server-error/server-error.module').then(
        m => m.ServerErrorModule
      )
  },
  {
    path: 'access-denied',
    loadChildren: () =>
      import('./access-denied/access-denied.module').then(
        m => m.AccessDeniedModule
      )
  },
  {
    path: 'not-found',
    loadChildren: () =>
      import('./not-found/not-found.module').then(m => m.NotFoundModule)
  },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled'
    }),
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyCAWUjNXIL8xtVOS7j1qtX0vGgRapbE2-c' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
