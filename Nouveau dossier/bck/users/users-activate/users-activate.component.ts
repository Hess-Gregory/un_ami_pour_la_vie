import { UsersActivateService } from "./users-activate.service";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../users-export";

@Component({
  selector: "app-users-activate",
  templateUrl: "./users-activate.component.html",
  styleUrls: ["./users-activate.scss"]
})
export class UsersActivateComponent implements OnInit {
  user$: Observable<User[]>;
  dtOptions: DataTables.Settings = {};

  constructor(private users: UsersActivateService) {}

  ngOnInit(): void {
    this.user$ = this.users.getUsers();
    this.dtOptions = {
      pagingType: "full_numbers"
    };
  }
}
