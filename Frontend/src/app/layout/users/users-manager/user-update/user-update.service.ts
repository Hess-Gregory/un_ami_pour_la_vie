
import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { User } from './../../../../shared/exports';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Observable,  Subject, of } from 'rxjs';
import { map } from 'rxjs/operators';
declare let $: any;
@Injectable({
  providedIn: 'root'
})
export class UserUpdateService {
    userid: string;
    users: any;
    status: any;
    userdetail: any;

  constructor(private http: HttpClient) { }

  editFormSubmitted = new EventEmitter<any>();
  getUsers() {
    this.userid = sessionStorage.getItem('idSelect');
    return this.http.get<User[]>(`/api/users/${this.userid}`);
  }
  getStatus() {
    this.userid = sessionStorage.getItem('idSelect');
    return this.http.get<User[]>(`/api/users/status/${this.userid}`);
  }
}
