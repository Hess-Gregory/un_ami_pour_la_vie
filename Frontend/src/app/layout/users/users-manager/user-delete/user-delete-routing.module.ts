import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDeleteComponent } from './user-delete.component';

const routes: Routes = [
    {
        path: '',
        data: { breadcrumb: 'Supprimer le membre' },
        component: UserDeleteComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserDeleteRoutingModule {
}
