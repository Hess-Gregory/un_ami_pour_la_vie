import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './../../../shared/exports';


@Injectable({
    providedIn: 'root'
  })
export class UsersActivateService {

    constructor(private http: HttpClient) { }

    getActivate() {
        return this.http.get<User[]>('/api/users/status');
      }

      getNotActivate() {
        return this.http.get<User[]>('/api/users/status');
      }
setActivate(id: number) {
    this.http.put(`/api/users/${id}`,
    { 'isActive':  1 })
    .subscribe(
        data  => {
            console.log('Activation set :', data);
            },
        error => {
            console.log('error', error);
            }
        );
}

setNotactivate(id: number) {
    this.http.put(`/api/users/${id}`,
    { 'isActive':  0 })
    .subscribe(
        data  => {
            console.log('Activation set :', data);
            },
        error => {
            console.log('error', error);
            }
        );
}

}
