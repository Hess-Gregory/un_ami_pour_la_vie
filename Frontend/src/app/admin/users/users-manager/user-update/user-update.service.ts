import { Injectable, EventEmitter } from '@angular/core';
import {
  HttpErrorResponse,
  HttpClient,
  HttpClientModule
} from '@angular/common/http';
import { User, Role } from './../../../../shared/exports';
import { forkJoin, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
declare let $: any;
@Injectable({
  providedIn: 'root'
})
export class UserUpdateService {
  userrole: number;
  users: any;
  status: any;
  userdetail: any;
  stringifydata: string;
  parsedata: any;
  objStringError: string;
  objError: any;
  ErrorStatus: any;
  ErrorstatusText: any;
  Errormessage: any;
  message: any;
  name: any;
  url: any;
  error: any;
  stringifysuccess: string;
  parsesuccess: any;
  previouspage = true;
  private wsUrlgetUsers = '/api/admins/user';
  private wsUrlRootMedia = '/api/fileupload/userpicture';
  private wsUrlUsers = '/api/users';

  constructor(private http: HttpClient, private router: Router) {}

  editFormSubmitted = new EventEmitter<any>();
  getUsers(id: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.wsUrlgetUsers}/${id}`);
  }
  getRole(id: string): Observable<Role[]> {
    return this.http.get<Role[]>('/api/users/role');
  }
  getStatus(id: string): Observable<User[]> {
    return this.http.get<User[]>(`/api/users/status/${id}`);
  }
  getDisablePicture(id: string): Observable<User[]> {
    return this.http.get<User[]>(`/api/fileupload/userpicture/disable/${id}`);
  }
  getActivePicture(id: string): Observable<User[]> {
    return this.http.get<User[]>(`/api/fileupload/userpicture/active/${id}`);
  }
  getActivePictures(id: string): Observable<User[]> {
    return this.http.get<User[]>(`/api/fileupload/userpicture/actives/${id}`);
  }
  disablePicture(id: string, active: number) {
    this.http
      .put(`/api/fileupload/userpicture/disable/${id}`, { active: active })
      .subscribe(
        data => {
          console.log('La demande PUT a réussi ', data);
          this.stringifydata = JSON.stringify(data);
          this.parsedata = JSON.parse(this.stringifydata);

          // sessionStorage.setItem('idSelect', this.parsedata.id);
          // this.router.navigate([`admin/users/user-manager/user-get`]);
        },
        error => {
          console.log('Erreur', error);
        }
      );
  }

  enablePicture(id: string, active: number) {
    this.http
      .put(`/api/fileupload/userpicture/enable/${id}`, { active: active })
      .subscribe(
        data => {
          console.log('La demande PUT a réussi ', data);
          this.stringifydata = JSON.stringify(data);
          this.parsedata = JSON.parse(this.stringifydata);

          // sessionStorage.setItem('idSelect', this.parsedata.id);
          // this.router.navigate([`admin/users/user-manager/user-get`]);
        },
        error => {
          console.log('Erreur', error);
        }
      );
  }

  // deletePicture(id:string) {

  // }

  addFiles(id: string, images: File) {
    const arr = [];
    const formData = new FormData();
    arr.push(images);

    arr[0].forEach((item, i) => {
      formData.append('avatar', arr[0][i]);
    });
    return this.http
      .post(`/api/userpicture/${id}`, formData, {
        reportProgress: true,
        observe: 'events'
      })
      .pipe(catchError(this.errorMgmt));
  }
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
  getAll() {
    return this.http.get('http://localhost:4000/public');
  }

  update(
    id: string,
    adProLat: number,
    adProLong: number,
    adPvLat: number,
    adPvLong: number,
    username: string,
    email: string,
    role: number,
    isActive: boolean,
    /* Informations générales */
    adressbook: string,
    firstName: string,
    lastName: string,
    birthday: any,
    sexGenre: string,
    /* Adresse Privée */
    adPvNum: string,
    adPvStreet: string,
    adPvCountry: string,
    adPvZip: number,
    adPvCity: string,
    /* Adresse Privée */
    firm: string,
    tva: string,
    adProNum: string,
    adProStreet: string,
    adProCountry: string,
    adProZip: number,
    adProCity: string,
    /* Contact */
    contPhonePv: string,
    contPhoneGsm: string,
    contPhonePro: string,
    contFacebook: string,
    contWebsite: string,
    /*  Autres informations */
    asbl: string,
    shortDesc: string,
    longDesc: string
  ) {
    this.http
      .put(`${this.wsUrlgetUsers}/${id}`, {
        adProLat: adProLat,
        adProLong: adProLong,
        adPvLat: adPvLat,
        adPvLong: adPvLong,
        /* Login et Role */
        username: username,
        email: email,
        role: role,
        isActive: Number(isActive),
        /* Informations générales */
        adressbook: adressbook,
        firstName: firstName,
        lastName: lastName,
        birthday: birthday,
        sexGenre: sexGenre,
        /* Adresse Privée */
        adPvNum: adPvNum,
        adPvStreet: adPvStreet,
        adPvCountry: adPvCountry,
        adPvZip: adPvZip,
        adPvCity: adPvCity,
        /* Adresse Privée */
        firm: firm,
        tva: tva,
        adProNum: adProNum,
        adProStreet: adProStreet,
        adProCountry: adProCountry,
        adProZip: adProZip,
        adProCity: adProCity,
        /* Contact */
        contPhonePv: contPhonePv,
        contPhoneGsm: contPhoneGsm,
        contPhonePro: contPhonePro,
        contFacebook: contFacebook,
        contWebsite: contWebsite,
        /*  Autres informations */
        asbl: asbl,
        shortDesc: shortDesc,
        longDesc: longDesc
      })
      .subscribe(
        data => {
          console.log('La demande PUT a réussi ', data);
          this.stringifydata = JSON.stringify(data);
          this.parsedata = JSON.parse(this.stringifydata);
          console.log(this.parsedata);
          let timeoutId;
          timeoutId = setTimeout(() => {
            alert(`Message: ${this.parsedata.message}`);
          }, 1500);
          this.router.navigate([`admin/users/user-manager/user-get/${id}`]);
        },
        error => {
          let timeoutId;
          timeoutId = setTimeout(() => {
            this.objStringError = JSON.stringify(error);
            this.objError = JSON.parse(this.objStringError);
            this.ErrorStatus = this.objError.status;
            this.ErrorstatusText = this.objError.statusText;
            this.url = this.objError.url;
            this.name = this.objError.name;
            this.message = this.objError.message;
            this.error = this.objError.error;
            // tslint:disable-next-line:max-line-length
            alert(
              `Avertissement !!: \n\n Vous ne pouvez pas valider le formulaire, il y a des erreurs ou des champs obligatoire qui sont vide.\n\n Code erreur: ${this.ErrorStatus}.\n Motif: (${this.ErrorstatusText}) \n${this.error.message}.\n\n(${this.name} from ${this.url}).`
            );
          }, 1500);
        }
      );
  }

  getAllInfoUser(id: string): Observable<any> {
    const users = this.http.get(`${this.wsUrlgetUsers}/${id}`);
    const role = this.http.get(`${this.wsUrlUsers}/role`);
    const status = this.http.get(`/api/users/status/${id}`);

    return forkJoin([users, role, status]);
  }

  getAllPicture(id: string): Observable<any> {
    const disablePicture = this.http.get(
      `${this.wsUrlRootMedia}/disable/${id}`
    );
    const activePicture = this.http.get(`${this.wsUrlRootMedia}/active/${id}`);
    const activesPicture = this.http.get(
      `${this.wsUrlRootMedia}/actives/${id}`
    );

    return forkJoin([disablePicture, activePicture, activesPicture]);
  }
}
