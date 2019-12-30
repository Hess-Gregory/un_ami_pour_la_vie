import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './../../../shared/exports';

@Injectable({
  providedIn: 'root'
})
export class AddressBookService {
  constructor(private http: HttpClient) {}

  getUsers() {
    sessionStorage.setItem('page', '');
    return this.http.get<User[]>('/api/admins/user');
  }
}
