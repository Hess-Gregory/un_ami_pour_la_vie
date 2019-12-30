import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../services/users-export';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  // private GETheaders: HttpHeaders;
  // private POSTheaders: HttpHeaders;

  private wsUrlRoot = '/api/users';

  constructor(private httpClient: HttpClient) {
    // this.GETheaders = new  HttpHeaders();
    // this.GETheaders.append('Authorization', localStorage.getItem('access_token'));
    // this.GETheaders.append('Accept', 'application/json');
    // this.GETheaders.append('Cache-Control', 'no-cache');
    // this.POSTheaders = new  HttpHeaders();
    // this.POSTheaders.append('Authorization', localStorage.getItem('access_token'));
    // this.POSTheaders.append('Content-Type', 'application/json');
    // this.POSTheaders.append('Accept', 'application/json');
  }

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

  public GetAllRecords(): Observable<Object> {
    return this.httpClient.get<User[]>(`${this.wsUrlRoot}`);
  }
  //   getStudiesList() {
  //     const options = new HttpRequest({ headers: this.GETheaders });
  //     return this.httpClient.get(`${this.wsUrlRoot}`, options)
  //     .pipe(
  //         map((data) => { return data })
  //         )
  //   }
}
