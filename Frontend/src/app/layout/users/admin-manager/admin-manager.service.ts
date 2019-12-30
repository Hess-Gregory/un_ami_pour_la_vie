import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Admin, User } from './../services/users-export';
import { Role } from './../../../shared/exports';
import { Router } from '@angular/router';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AdminManagerService {
  stringifydata: string;
  parsedata: any;

  constructor(private http: HttpClient, private router: Router) {}

  getAdmins() {
    return this.http.get<Admin[]>('/api/admins/adminlist');
  }
  getUsers() {
    return this.http.get<User[]>('/api/users/status');
  }
  getRoles() {
    return this.http.get<Role[]>('/api/users/role');
  }
  update(userid: number, roleid: number) {
    this.http
      .put(`/api/users/${userid}`, {
        role: roleid
      })
      .subscribe(
        data => {
          console.log('La demande modification est réussi');
          this.router.routeReuseStrategy.shouldReuseRoute = function() {
            return false;
          };
          const currentUrl = this.router.url + '?';
          this.router.navigateByUrl(currentUrl).then(() => {
            this.router.navigated = false;
            this.router.navigate([this.router.url]);
          });
          this.stringifydata = JSON.stringify(data);
          this.parsedata = JSON.parse(this.stringifydata);
        },
        error => {
          console.log('Error', error);
        }
      );
  }
}
