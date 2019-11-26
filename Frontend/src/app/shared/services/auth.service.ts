import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<boolean> {
    return this.http.post<{token: string}>('http://localhost:4000/api/auth/login',
    {email: email, password: password})
      .pipe(
        map(result => {
          localStorage.setItem('access_token', result.token);
          return true;
        })
      );
  }
  register(
  username: string, email: string, firstName: string,
   lastName: string, password: string
     ): Observable<Object> {
    return this.http.post('http://localhost:4000/api/auth/register',
    {

      username: username,
      email: email,
      firstName: firstName,
      lastName: lastName,
      password: password,
      adPvZip: null,
      adProZip: null,
      birthday: null,
      created_date: new Date(),
      updated_date: new Date(),
      id: null,
      role: 5,
      isActive: 0
    })
     ;
  }


  logout() {
    localStorage.removeItem('access_token');
  }


  public get loggedIn(): boolean {
    return (localStorage.getItem('access_token') !== null);
  }
}
