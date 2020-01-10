import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { User } from '../services/users-export';

@Injectable({
  providedIn: 'root'
})
export class AllUsersService {
  private wsUrlRoot = '/api/admins/userandrole';

  constructor(private httpClient: HttpClient) {}

  public GetAllRecords(): Observable<Object> {
    return this.httpClient.get<User[]>(`${this.wsUrlRoot}`);
  }
}
