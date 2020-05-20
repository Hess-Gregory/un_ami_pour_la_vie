import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Role } from './../../../../shared/exports';
import { Router } from '@angular/router';
declare let $: any;

@Injectable({
  providedIn: 'root'
})
export class UserAddService {
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

  constructor(private http: HttpClient, private router: Router) {}

  getRole() {
    return this.http.get<Role[]>('/api/users/role');
  }
  msgSuccess() {
    alert('Données enregistrées dans la database.');
  }
  msgError() {}
  addUser(
    adProLat: number,
    adProLong: number,
    adPvLat: number,
    adPvLong: number,
    username: string,
    email: string,
    role: number,
    isActive: string,
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
      .post(`/api/admins/user/add`, {
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
        longDesc: longDesc,
        password: '123456'
      })
      .subscribe(
        success => {
          this.stringifysuccess = JSON.stringify(success);
          this.parsesuccess = JSON.parse(this.stringifysuccess);
          console.log(this.parsesuccess);

          let timeoutId;
          timeoutId = setTimeout(() => {
            alert(
              `Message: ${this.parsesuccess.message}.\n Identifiant: ${this.parsesuccess.id} \n Email :${this.parsesuccess.email}\nUsername : ${this.parsesuccess.username}`
            );
          }, 1500);
          this.router.navigate([
            `admin/users/user-manager/user-get/${this.parsesuccess.id}`
          ]);
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
}
