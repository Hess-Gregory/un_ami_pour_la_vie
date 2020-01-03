import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddressBookComponent } from './address-book.component';

const routes: Routes = [
  {
    path: '',
    data: { breadcrumb: 'Carnet d\'adresses' },
    component: AddressBookComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddressBookRoutingModule {}
