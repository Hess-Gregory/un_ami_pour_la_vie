import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Role } from './../../../../shared/exports';
import { Router} from '@angular/router';
declare let $: any;

@Injectable({
  providedIn: 'root'
})
export class UserAddService {
    stringifydata: string;
    parsedata: any;


  constructor(private http: HttpClient, private router: Router) { }

  getRole() {
    return this.http.get<Role[]>('/api/users/role');
  }

  addUser(
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
    adPvNum:  string,
    adPvStreet:  string,
    adPvCountry:  string,
    adPvZip: number,
    adPvCity: string,
     /* Adresse Privée */
     firm:  string,
     tva:  string,
     adProNum:  string,
     adProStreet:  string,
     adProCountry:  string,
     adProZip: number,
     adProCity:  string,
     /* Contact */
     contPhonePv:  string,
     contPhoneGsm:  string,
     contPhonePro:  string,
     contFacebook:  string,
     contWebsite:  string,
     /*  Autres informations */
     asbl:  string,
     shortDesc:  string,
     longDesc: string

       ) {

      this.http.post(`/api/auth/register`,
      {
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
         longDesc: longDesc,
         password: '123456'
      })
      .subscribe(
        data  => {
            console.log('PUT Request is successful ', data);
            this.stringifydata = JSON.stringify(data);
            this.parsedata = JSON.parse(this.stringifydata);
            console.log('this.parsedata:', this.parsedata);

             sessionStorage.setItem('idSelect', this.parsedata.id);
             // this.router.navigate([`admin/users/user-manager/user-get`]);
            },
        error => {
            console.log('Error', error);
            }
      );
    }
}
