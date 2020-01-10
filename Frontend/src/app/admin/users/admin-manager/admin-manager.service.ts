import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../services/users-export';
import { Role } from './../../../shared/exports';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminManagerService {
    private wsUrlRoot = '/api/admins/userandrole';
    private wsUrlRoot2 = '/api/users/role';
    stringifydata: string;
    parsedata: any;

  constructor(private httpClient: HttpClient, private router: Router) {}

  public getUsers() {
    return this.httpClient.get<User[]>(`${this.wsUrlRoot}`);
  }
  public getRoles() {
    return this.httpClient.get<Role[]>(`${this.wsUrlRoot2}`);
  }
  public GetAllRecords(): Observable<Object> {
    return this.httpClient.get<User[]>(`${this.wsUrlRoot}`);
  }
  update(userid: number, roleid: number) {
    this.httpClient
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
