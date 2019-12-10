import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllUsersComponent } from './all-users.component';

const routes: Routes = [
    {
        path: '',
        data: { breadcrumb: 'Liste des membres' },
        component: AllUsersComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AllUsersRoutingModule {
}
