import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminManagerComponent } from './admin-manager.component';

const routes: Routes = [
    {
        path: '', component: AdminManagerComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminManagerRoutingModule {
}
