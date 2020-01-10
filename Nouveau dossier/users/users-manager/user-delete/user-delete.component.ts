import { Component, OnInit } from "@angular/core";
import { routerTransition } from "../../../../router.animations";
import { DeleteUserService } from "./delete-user.service";

@Component({
  selector: "app-delete-user",
  templateUrl: "./delete-user.component.html",
  styleUrls: ["./delete-user.component.scss"],
  animations: [routerTransition()]
})
export class DeleteUserComponent implements OnInit {
  constructor(private deleteuserservice: DeleteUserService) {}

  ngOnInit() {}
}
