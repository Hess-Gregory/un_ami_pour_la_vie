import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserAddComponent } from './user-add.component';

const routes: Routes = [
  {
    path: '',
    data: { breadcrumb: 'Ajout nouveau membre' },
    component: UserAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserAddRoutingModule {}
