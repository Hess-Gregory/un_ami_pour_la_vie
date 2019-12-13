import { Component, OnInit, Input } from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router, RoutesRecognized } from '@angular/router';
import { UserAddComponent } from './../user-add/user-add.component';
import { filter, pairwise } from 'rxjs/operators';
import { UserAddService } from '../user-add/user-add.service';
import { UserUpdateService } from '../user-update/user-update.service';
@Component({
  selector: 'app-user-controls',
  templateUrl: './user-controls.component.html',
  styleUrls: ['./user-controls.component.scss'],
  providers: [HttpClient, UserAddComponent, Location ]
})
export class UserControlsComponent implements OnInit {

    locked = true;
    create = false;
    previouspage = true;
    userDetailsForm: any;
    userForm: any;

  constructor(
      public router: Router,
      private userAdd: UserAddComponent,
      private _location: Location,
      public createService: UserAddService,
      public updateService: UserUpdateService
      ) {
        if (router.url === '/admin/users/user-manager/user-add') {
            this.create = true;
            this.locked = false;
        }
    this.router.events
    .pipe(filter((evt: any) => evt instanceof RoutesRecognized), pairwise())
    .subscribe((events: RoutesRecognized[]) => {
        if (this.create && events[0].urlAfterRedirects === '/admin/users/user-manager/users-update') {
            this.previouspage = false;
        }
    });
  }

  ngOnInit() {}

  onUnlock() {
    this.locked = false;
    this.router.navigate(['admin/users/user-manager/user-update']);
  }

  onSubmitUserDetails(value: any)  {


    //   if (this.create) {
    //     console.log('la création est validé');
    //     console.log('value: ' , value);
    //     if (value.adressbook) {
    //         value.adressbook = 1;
    //     } else {
    //         value.adressbook = 0;
    //     }

    //     this.createService.addUser(
    //     /* Login et Role */
    //     value.username,
    //     value.email,
    //     value.role,
    //     value.isActive,
    //     /* Informations générales */
    //     value.adressbook,
    //     value.firstName,
    //     value.lastName,
    //     value.birthday,
    //     value.sexGenre,
    //     /* Adresse Privée */
    //     value.adPvNum,
    //     value.adPvStreet,
    //     value.adPvCountry,
    //     value.adPvZip,
    //     value.adPvCity,
    //      /* Adresse Privée */
    //      value.firm,
    //      value.tva,
    //      value.adProNum,
    //      value.adProStreet,
    //      value.adProCountry,
    //      value.adProZip,
    //      value.adProCity,
    //      /* Contact */
    //      value.contPhonePv,
    //      value.contPhoneGsm,
    //      value.contPhonePro,
    //      value.contFacebook,
    //      value.contWebsite,
    //     /*  Autres informations */
    //     value.asbl,
    //     value.shortDesc,
    //     value.longDesc
    //       );
    //   } if  (!this.create) {
    //     console.log('la mise à jour est validé');
    //     console.log('value: ' , value);
    //     if (value.adressbook) {
    //         value.adressbook = 1;
    //     } else {
    //         value.adressbook = 0;
    //     }

    //     this.updateService.update(
    //     /* Login et Role */
    //     value.username,
    //     value.email,
    //     value.role,
    //     value.isActive,
    //     /* Informations générales */
    //     value.adressbook,
    //     value.firstName,
    //     value.lastName,
    //     value.birthday,
    //     value.sexGenre,
    //     /* Adresse Privée */
    //     value.adPvNum,
    //     value.adPvStreet,
    //     value.adPvCountry,
    //     value.adPvZip,
    //     value.adPvCity,
    //      /* Adresse Privée */
    //      value.firm,
    //      value.tva,
    //      value.adProNum,
    //      value.adProStreet,
    //      value.adProCountry,
    //      value.adProZip,
    //      value.adProCity,
    //      /* Contact */
    //      value.contPhonePv,
    //      value.contPhoneGsm,
    //      value.contPhonePro,
    //      value.contFacebook,
    //      value.contWebsite,
    //     /*  Autres informations */
    //     value.asbl,
    //     value.shortDesc,
    //     value.longDesc
    //       );
    //   }
        this.locked = true;
        this.create = false;

  }
  onCreate() {
    this.create = true;
    this.router.navigate(['admin/users/user-manager/user-add']);
  }

  onCancel() {
    this.locked = true;
    this.create = false;
    if (this.previouspage) {
        this._location.back();
    } else {
       this.router.navigate(['admin/users/user-manager/user-get']);
    }
  }

  onDelete() {
    this.router.navigate(['admin/users/user-manager/user-delete']);
  }

  onClose() {
    this.locked = true;
    this.router.navigate(['admin/users/user-manager/users-list']);
  }

  onFrozen() {
    this.locked = true;
  }
}
