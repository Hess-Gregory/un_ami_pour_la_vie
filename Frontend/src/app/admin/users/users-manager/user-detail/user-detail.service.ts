import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './../../../../shared/exports';
import { forkJoin, Observable } from 'rxjs';
declare let $: any;
@Injectable({
  providedIn: 'root'
})
export class UserDetailService {
  private wsUrlRoot = '/api/fileupload/userpicture';
  constructor(private http: HttpClient) {}

  getAllurl(id: string): Observable<any> {
    const Picture = this.http.get(`${this.wsUrlRoot}/active/${id}`);
    const status = this.http.get(`/api/users/status/${id}`);

    if (sessionStorage.getItem('new') === 'true') {
      this.http
        .put<User[]>(`/api/admins/user/${id}`, { newRegister: 0 })
        .subscribe(
          data => {
            console.log('PUT Request is successful ', data);
            sessionStorage.removeItem('new');
          },
          error => {
            console.log('Error', error);
          }
        );
      const user = this.http.get(`/api/users/${id}`);
    }
    const user = this.http.get(`/api/users/${id}`);

    return forkJoin([Picture, status, user]);
  }
}
