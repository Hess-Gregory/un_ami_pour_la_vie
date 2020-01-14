import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { User, Role } from './../../../../shared/exports';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { map } from 'rxjs/operators';
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
  private wsUrlgetUsers = '/api/admins/user';

  constructor(private http: HttpClient) {}

  editFormSubmitted = new EventEmitter<any>();
  getUsers(id: string): Observable<User[]> {
    console.log('service update id:', id);
    return this.http.get<User[]>(`${this.wsUrlgetUsers}/${id}`);
  }
  getRole(id: string): Observable<Role[]> {
    return this.http.get<Role[]>('/api/users/role');
  }
  getStatus(id: string): Observable<User[]> {
    return this.http.get<User[]>(`/api/users/status/${id}`);
  }
  update(
    id: string,
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
        /* Login et Role */
        username: username,
        email: email,
        role: role,
        isActive: isActive,
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
          console.log('PUT Request is successful ', data);
          this.stringifydata = JSON.stringify(data);
          this.parsedata = JSON.parse(this.stringifydata);
          console.log('this.parsedata:', this.parsedata);

          // sessionStorage.setItem('idSelect', this.parsedata.id);
          // this.router.navigate([`admin/users/user-manager/user-get`]);
        },
        error => {
          console.log('Error', error);
        }
      );
  }
}
