
import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { User } from './../../../../shared/exports';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Observable,  Subject, of } from 'rxjs';
import { map } from 'rxjs/operators';
declare let $: any;
@Injectable({
  providedIn: 'root'
})
export class GetUserService {
    userid: string;
    users: any;
    status: any;
    userdetail: any;

  constructor(private http: HttpClient) { }


  getUsers() {
    this.userid = sessionStorage.getItem('idSelect');
    if (sessionStorage.getItem('new') === 'true') {
            this.http.put(`/api/users/${this.userid}`,
            { 'newRegister':  0 })
            .subscribe(
                data  => {
                    console.log('PUT Request is successful ', data);
                    },
                error => {
                    console.log('Rrror', error);
                    }
              );
    }
    return this.http.get<User[]>(`/api/users/${this.userid}`);
  }
  getStatus() {
    this.userid = sessionStorage.getItem('idSelect');
    return this.http.get<User[]>(`/api/users/status/${this.userid}`);
  }
}
