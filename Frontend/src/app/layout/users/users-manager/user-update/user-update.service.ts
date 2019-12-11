
import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { User, Role } from './../../../../shared/exports';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Observable,  Subject, of } from 'rxjs';
import { map } from 'rxjs/operators';
declare let $: any;
@Injectable({
  providedIn: 'root'
})
export class UserUpdateService {
    userid: string;
    userrole: number;
    users: any;
    status: any;
    userdetail: any;

  constructor(private http: HttpClient) { }

  editFormSubmitted = new EventEmitter<any>();
  getUsers() {
    this.userid = sessionStorage.getItem('idSelect');
    return this.http.get<User[]>(`/api/users/${this.userid}`);
  }
  getRole() {
    return this.http.get<Role[]>('/api/users/role');
  }
  getStatus() {
    this.userid = sessionStorage.getItem('idSelect');
    return this.http.get<User[]>(`/api/users/status/${this.userid}`);
  }
  update(

    username: string, email: string, firstName: string,
     lastName: string
       ): Observable<Object> {

    this.userid = sessionStorage.getItem('idSelect');
      return this.http.put(`/api/users/${this.userid}`,
      {
        username: username,
        email: email,
        firstName: firstName,
        lastName: lastName,
        adPvZip: null,
        adProZip: null,
        birthday: null,
        updated_date: new Date()
      })
       ;
    }
}
