import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../services/users-export';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersActivateService {
  private wsUrlRoot = '/api/users';
  private wsUrlActive = '/api/admins/list_users_active';
  private wsUrlNotActive = '/api/admins/list_users_not_active';
  stringifydata: string;
  parsedata: any;

  constructor(private httpClient: HttpClient, private router: Router) {}

  public GetAllRecordsActive(): Observable<Object> {
    return this.httpClient.get<User[]>(`${this.wsUrlActive}`);
  }
  public GetAllRecordsNotActive(): Observable<Object> {
    return this.httpClient.get<User[]>(`${this.wsUrlNotActive}`);
  }
  setActivate(id: number) {
    this.httpClient.put(`${this.wsUrlRoot}/${id}`, { isActive: 1 }).subscribe(
      data => {
        console.log('Activation set :', data);
        this.router.routeReuseStrategy.shouldReuseRoute = function() {
          return false;
        };
        const currentUrl = this.router.url + '?';
        this.router.navigateByUrl(currentUrl).then(() => {
          this.router.navigated = false;
          this.router.navigate([this.router.url]);
        });
      },
      error => {
        console.log('error', error);
      }
    );
  }

  setNotactivate(id: number) {
    this.httpClient.put(`${this.wsUrlRoot}/${id}`, { isActive: 0 }).subscribe(
      data => {
        console.log('Activation set :', data);
        this.router.routeReuseStrategy.shouldReuseRoute = function() {
          return false;
        };
        const currentUrl = this.router.url + '?';
        this.router.navigateByUrl(currentUrl).then(() => {
          this.router.navigated = false;
          this.router.navigate([this.router.url]);
        });
      },
      error => {
        console.log('error', error);
      }
    );
  }
}
