import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../services/users-export';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  private wsUrlRoot = '/api/admins/userandrole';

  constructor(private httpClient: HttpClient) {}

  search(user: string): Observable<Object> {
    const userLowercase = user.toLocaleLowerCase();
    return this.httpClient.get<User[]>(`${this.wsUrlRoot}`).pipe(
      map(res =>
        res.filter(
          evt =>
            evt.username.toLocaleLowerCase().indexOf(user) > -1 ||
            evt.email.toLocaleLowerCase().indexOf(user) > -1
        )
      ),
      tap(filteredEvents => console.log('filtered:', filteredEvents))
    );
  }


}
