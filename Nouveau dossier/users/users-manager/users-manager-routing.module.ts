import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AllUsersComponent } from "./../users-list/all-users.component";
import { UsersManagerComponent } from "./users-manager.component";
import { GetUserComponent } from "./user-detail/user-detail.component";
import { UpdateUserComponent } from "./user-update/user-update.component";
import { DeleteUserComponent } from "./user-delete/user-delete.component";
import { AddUserComponent } from "./user-add/user-add.component";

const routes: Routes = [
  {
    path: "",
    data: {
      breadcrumb: "Gestion membre"
    },
    component: UsersManagerComponent,
    children: [
      { path: "", redirectTo: "users-list", data: { breadcrumb: null } },
      {
        path: "users-list",
        data: { breadcrumb: "Liste des membres" },
        component: AllUsersComponent
      },
      {
        path: "user-get/:id",
        data: { breadcrumb: "Détail du membre" },
        component: GetUserComponent
      },
      {
        path: "user-update/:id",
        data: { breadcrumb: "Modifier le membre" },
        component: UpdateUserComponent
      },
      {
        path: "user-delete/:id",
        data: { breadcrumb: "Supprimer le membre" },
        component: DeleteUserComponent
      },
      {
        path: "user-add",
        data: { breadcrumb: "Ajouter un membre" },
        component: AddUserComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersManagerRoutingModule {}
