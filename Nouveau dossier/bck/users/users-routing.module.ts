import { DeleteUserComponent } from "./all-users/delete-user/delete-user.component";
import { GetUserComponent } from "./all-users/get-user/get-user.component";
import { UpdateUserComponent } from "./all-users/update-user/update-user.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UsersComponent } from "./users.component";
import { AddressBookComponent } from "./address-book/address-book.component";
import { AdminManagerComponent } from "./admin-manager/admin-manager.component";
import { AllUsersComponent } from "./all-users/all-users.component";
import { UsersActivateComponent } from "./users-activate/users-activate.component";
import { UsersInfoComponent } from "./users-info/users-info.component";
import { AddUserComponent } from "./all-users/add-user/add-user.component";

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
        data: { breadcrumb: "Utilisateurs" },
        component: UsersInfoComponent
      },
      {
        path: "users-list",
        data: { breadcrumb: "Users List" },
        component: AllUsersComponent
      },
      { path: "add-user" },
      {
        path: "update-user",
        data: { breadcrumb: "Modifier utilisateur" },
        component: UpdateUserComponent
      },
      {
        path: "delete-user",
        data: { breadcrumb: "Supprimer utilisateur" },
        component: DeleteUserComponent
      },
      {
        path: "users-activate",
        data: { breadcrumb: "Activations" },
        component: UsersActivateComponent
      },
      {
        path: "admin-manager",
        data: { breadcrumb: "Gestion des administrateurs" },
        component: AdminManagerComponent
      },
      {
        path: "address-book",
        data: { breadcrumb: "Carnet adresse" },
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
