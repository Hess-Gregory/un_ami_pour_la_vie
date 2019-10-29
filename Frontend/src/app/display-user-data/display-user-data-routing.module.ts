import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayUserDataComponent } from './display-user-data.component';

const routes: Routes = [
    {
        path: '', component: DisplayUserDataComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DisplayUserDataRoutingModule {
}
