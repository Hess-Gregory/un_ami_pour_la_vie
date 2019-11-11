import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminuserComponent } from './adminuser.component';

const routes: Routes = [
    {
        path: '', component: AdminuserComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminuserRoutingModule {
}
