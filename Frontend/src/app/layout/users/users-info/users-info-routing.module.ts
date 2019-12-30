import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersInfoComponent } from './users-info.component';

const routes: Routes = [
  {
    path: '',
    data: { breadcrumb: 'Infos Générales' },
    component: UsersInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersInfoRoutingModule {}
