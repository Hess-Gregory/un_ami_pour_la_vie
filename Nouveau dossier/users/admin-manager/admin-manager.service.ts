import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Admin, User } from "../users-export";

@Injectable({
  providedIn: "root"
})
export class AdminManagerService {
  constructor(private http: HttpClient) {}

  getAdmins() {
    return this.http.get<Admin[]>("/api/admins");
  }
  getUsers() {
    return this.http.get<User[]>("/api/users");
  }
}
