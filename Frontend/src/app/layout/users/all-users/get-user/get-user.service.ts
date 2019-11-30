import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../users-export';
@Injectable({
  providedIn: 'root'
})
export class GetUserService {
    userid: string;
    users: any;
    userdetail: any;

  constructor(private http: HttpClient) { }


  getUsers() {
    this.userid = sessionStorage.getItem('idSelect');
    return this.http.get<User[]>(`/api/users/${this.userid}`);
  }
  getStatus() {
    this.userid = sessionStorage.getItem('idSelect');
    return this.http.get<User[]>(`/api/users/status/${this.userid}`);
  }
}
