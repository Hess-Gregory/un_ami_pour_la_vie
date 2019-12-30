import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../exports';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers() {
    console.log(
      'this http get:',
      JSON.stringify(this.http.get<User[]>('/api/users'))
    );

    return this.http.get<User[]>('/api/users');
  }
}
