import { UpdateUserService } from "./update-user.service";
import { Component, OnInit } from "@angular/core";
import { routerTransition } from "../../../../router.animations";

@Component({
  selector: "app-update-user",
  templateUrl: "./update-user.component.html",
  styleUrls: ["./update-user.component.scss"],
  animations: [routerTransition()]
})
export class UpdateUserComponent implements OnInit {
  constructor(private updateuserservice: UpdateUserService) {}

  ngOnInit() {}
}
