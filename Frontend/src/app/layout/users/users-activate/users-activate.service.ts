import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './../../../shared/exports';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersActivateService {
  constructor(private http: HttpClient, private router: Router) {}

  getStatusUsers() {
    sessionStorage.setItem('page', '');
    return this.http.get<User[]>('/api/users/status');
  }
  setActivate(id: number) {
    this.http.put(`/api/users/${id}`, { isActive: 1 }).subscribe(
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
    this.http.put(`/api/users/${id}`, { isActive: 0 }).subscribe(
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
