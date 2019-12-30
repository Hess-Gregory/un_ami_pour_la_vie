import { DeleteUserComponent } from "./delete-user/delete-user.component";
import { UpdateUserComponent } from "./update-user/update-user.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AllUsersComponent } from "./all-users.component";
import { AddUserComponent } from "./add-user/add-user.component";
import { GetUserComponent } from "./get-user/get-user.component";

const routes: Routes = [
  {
    path: "",
    data: {
      breadcrumb: null
    },
    component: AllUsersComponent,

    children: [
      {
        path: "create-new-user",
        data: { breadcrumb: "Ajouter utilisateur" },
        component: AddUserComponent
      },
      {
        path: "details",
        data: { breadcrumb: "details utilisateur" },
        component: GetUserComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllUsersRoutingModule {}
