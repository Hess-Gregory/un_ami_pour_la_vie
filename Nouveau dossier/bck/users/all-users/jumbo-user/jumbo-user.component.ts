import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-jumbo-user",
  templateUrl: "./jumbo-user.component.html",
  styleUrls: ["./jumbo-user.component.scss"]
})
export class JumboUserComponent implements OnInit {
  Module: any = sessionStorage.getItem("Module");
  ModuleName = this.Module;
  constructor() {}

  ngOnInit() {}
}
