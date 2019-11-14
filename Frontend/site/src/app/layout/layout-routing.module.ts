import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

import { AuthGuard } from './../shared';
import { AddressBookComponent } from './users/address-book/address-book.component';
import { AdminManagerComponent } from './users/admin-manager/admin-manager.component';
import { AllUsersComponent } from './users/all-users/all-users.component';
import { UsersActivateComponent } from './users/users-activate/users-activate.component';

const routes: Routes = [
    {
        path: '',
        data: {
            breadcrumb: 'Interface Administrateur'
        },
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' , canActivate: [AuthGuard] },
            { path: 'dashboard',  loadChildren: () => import('./dashboard/dashboard.module')
                .then(m => m.DashboardModule), data: { breadcrumb: 'Panneau général' } },
            { path: 'users', loadChildren: () => import('./users/users.module')
                .then(m => m.UsersModule), data: { breadcrumb: 'Users' } },
            { path: 'charts', loadChildren: () => import('./charts/charts.module')
                .then(m => m.ChartsModule), data: { breadcrumb: 'Charts' } },
            { path: 'tables', loadChildren: () => import('./tables/tables.module')
                .then(m => m.TablesModule), data: { breadcrumb: 'Tables' } },
            { path: 'forms', loadChildren: () => import('./form/form.module')
                .then(m => m.FormModule), data: { breadcrumb: 'Forms' } },
            { path: 'bs-element', loadChildren: () => import('./bs-element/bs-element.module')
                .then(m => m.BsElementModule), data: { breadcrumb: 'Bs-element' } },
            { path: 'grid', loadChildren: () => import('./grid/grid.module')
                .then(m => m.GridModule), data: { breadcrumb: 'Grid' } },
            { path: 'components', loadChildren: () => import('./bs-component/bs-component.module')
                .then(m => m.BsComponentModule), data: { breadcrumb: 'Components' } },
            { path: 'blank-page', loadChildren: () => import('./blank-page/blank-page.module')
                .then(m => m.BlankPageModule), data: { breadcrumb: 'Blank-page' } }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
