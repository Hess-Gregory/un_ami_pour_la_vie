import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersActivateComponent } from './users-activate.component';

const routes: Routes = [
  {
    path: '',
    data: { breadcrumb: 'Activation des membres' },
    component: UsersActivateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersActivateRoutingModule {}
