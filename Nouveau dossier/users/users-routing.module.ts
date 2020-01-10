import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UsersComponent } from "./users.component";
import { UsersInfoComponent } from "./users-info/users-info.component";
import { UsersManagerComponent } from "./users-manager/users-manager.component";
import { AdminManagerComponent } from "./admin-manager/admin-manager.component";
import { UsersActivateComponent } from "./users-activate/users-activate.component";
import { AddressBookComponent } from "./address-book/address-book.component";

const routes: Routes = [
  {
    path: "",
    data: {
      breadcrumb: null
    },
    component: UsersComponent,
    children: [
      { path: "", redirectTo: "users-info", data: { breadcrumb: null } },
      {
        path: "users-info",
        data: { breadcrumb: "Info Utilisateurs" },
        component: UsersInfoComponent
      },
      {
        path: "user-manager",
        data: { breadcrumb: "Gestion des membres" },
        component: UsersManagerComponent
      },
      {
        path: "admin-manager",
        data: { breadcrumb: "Gestion des administrateurs" },
        component: AdminManagerComponent
      },
      {
        path: "users-activate",
        data: { breadcrumb: "Activations des membres" },
        component: UsersActivateComponent
      },
      {
        path: "address-book",
        data: { breadcrumb: "Carnet d'adresses" },
        component: AddressBookComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}
