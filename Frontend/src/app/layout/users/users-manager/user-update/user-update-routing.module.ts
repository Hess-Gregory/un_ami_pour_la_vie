import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserUpdateComponent } from './user-update.component';

const routes: Routes = [
    {
        path: '',
        data: { breadcrumb: 'Mettre à jour le membre' },
        component: UserUpdateComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserUpdateRoutingModule {
}
