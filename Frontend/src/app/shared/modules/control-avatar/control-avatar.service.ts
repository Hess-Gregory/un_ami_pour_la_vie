import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
declare let $: any;
@Injectable({
  providedIn: 'root'
})
export class ControlAvatarService {
  private wsUrlRoot = '/api/fileupload/userpicture';

  constructor(private http: HttpClient) {}

  getActivePicture(id: string): Observable<any> {
    return this.http.get(`${this.wsUrlRoot}/active/${id}`);
  }
  disablePicture(id: string, active: number) {
    console.log('service disable id :', id);
    return this.http
      .put(`${this.wsUrlRoot}/disable/${id}`, { active: active })
      .subscribe(
        data => {
          console.log('La demande PUT a réussi ', data);
        },
        error => {
          console.log('Erreur', error);
        }
      );
  }

  enablePicture(id: string, active: number) {
    console.log('service enable id :', id);
    return this.http
      .put(`${this.wsUrlRoot}/enable/${id}`, { active: active })
      .subscribe(
        data => {
          console.log('PUT Request is successful ', data);
        },
        error => {
          console.log('Error', error);
        }
      );
  }

  deletePicture(id: string) {}
}
