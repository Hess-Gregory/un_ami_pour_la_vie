import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../services/users-export';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AddressBookService {
  private wsUrlRoot = '/api/admins/adressbook';
  stringifydata: string;
  parsedata: any;

  constructor(private httpClient: HttpClient, private router: Router) {}

  public GetAllRecords(): Observable<Object> {
    return this.httpClient.get<User[]>(`${this.wsUrlRoot}`);
  }
}
