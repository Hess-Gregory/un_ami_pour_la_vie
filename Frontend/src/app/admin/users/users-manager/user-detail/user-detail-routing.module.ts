import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDetailComponent } from './user-detail.component';

const routes: Routes = [
  {
    path: '',
    data: { breadcrumb: 'Détails membre' },
    component: UserDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserDetailRoutingModule {}
