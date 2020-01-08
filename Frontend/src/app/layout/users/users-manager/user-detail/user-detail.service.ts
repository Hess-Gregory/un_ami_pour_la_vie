import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './../../../../shared/exports';
import { Observable } from 'rxjs';
declare let $: any;
@Injectable({
  providedIn: 'root'
})
export class UserDetailService {
  constructor(private http: HttpClient) {}

  getUsers(id: string): Observable<User[]> {
    if (sessionStorage.getItem('new') === 'true') {
      this.http
        .put<User[]>(`/api/admins/user/${id}`, { newRegister: 0 })
        .subscribe(
          data => {
            console.log('PUT Request is successful ', data);
            sessionStorage.removeItem('new');
          },
          error => {
            console.log('Error', error);
          }
        );
      return this.http.get<User[]>(`/api/users/${id}`);
    }
    if (sessionStorage.getItem('new') === 'false') {
      return this.http.get<User[]>(`/api/users/${id}`);
    }
  }
  getStatus(id: string): Observable<User[]> {
    return this.http.get<User[]>(`/api/users/status/${id}`);
  }
}
