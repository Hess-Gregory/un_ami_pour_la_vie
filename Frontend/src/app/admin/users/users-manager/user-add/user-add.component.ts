import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { UserAddService } from './user-add.service';
import { Router } from '@angular/router';
import { Observable, of, Subject } from 'rxjs';
import { FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {Appearance, GermanAddress, Location} from '@angular-material-extensions/google-maps-autocomplete';
import { countryList } from '../../../../shared/exports/form-data';
import { validationMsg } from './../../../../shared/validators/msg-validator-data';
import { ParentErrorStateMatcher} from './../../../../shared/validators';
import * as _moment from 'moment';
import { FormbuilderGroupService } from '../../../../shared/validators/formbuilder-group.service';
declare var $: any;
export interface Error {
  objStringError: string;
  objError: any;
  ErrorstatusText: any;
  Errormessage: string;
  ErrorStatus: string;
}

@Component({
    selector: 'app-user-add',
    templateUrl: './user-add.component.html',
    styleUrls: ['./user-add.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class UserAddComponent implements OnDestroy, OnInit {
    countryprivate: string[];
    loading = true;
    duration: number;
    [x: string]: any;
    adressbook = false;
    public objStringError: string;
    public objError: any;
    public ErrorstatusText: any;
    public Errormessage: string;
    public ErrorStatus: string;
    public error: Error;
    alerts: Array<any> = [];
    roles: any = [];
    dtTrigger: Subject<any> = new Subject();
    fileData: File = null;
    http: any;
    userDetailsForm: FormGroup;
    country_phone_group: FormGroup;
    parentErrorStateMatcher = new ParentErrorStateMatcher();
    role = 0;
    bookadress: any;
    firm ='';
    adProNum: any;
    adProStreet ='';
    adProZip: any;
    adProCity: any;
    countrypro ='';
    adPvNum: any;
    adPvStreet ='';
    adPvZip: any;
    adPvCity: any;
    countryPv ='';
    adProLat: any;
    adProLong: any;
    adPvLat: any;
    adPvLong: any;
    dateNow = new Date();
    YearNow = this.dateNow.getFullYear();
    minYearNow = this.YearNow - 100;
    maxYearNow = this.YearNow - 18;
    MonthNow = this.dateNow.getMonth() - 1;
    DayNow = this.dateNow.getDate();
    startDate = new Date(1910, 0, 1);
    minDate = new Date(1910, 0, 1);
    maxDate = new Date(this.maxYearNow, this.MonthNow, this.DayNow);
    date = new FormControl(new Date());
    docDate = 'Jan 1, 2000, 21:43:11 UTC';
    serializedDate =  new FormControl(new Date(this.docDate).toISOString().slice(0, -1))

    allCountries = countryList;
    validation_messages = validationMsg;
    genders = ['Homme', 'Femme', 'Autre'];
    activateds = [{ isActive: 0, name: 'Gelé' },{ isActive: 1, name: 'Activé' }];



  constructor(
    private useraddservice: UserAddService,
    private router: Router,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private formbuilder: FormbuilderGroupService
  ) {
    this.getRole();

    this.alerts.push({
      id: 3,
      type: 'danger',
      message: 'this.Errormessage'
    });
    if (this.adressbook) {
      this.bookadress = 1;
    } else {
      this.bookadress = 0;
    }

  }

  ngOnInit() {
    sessionStorage.setItem('page', 'user-add');
    this.createForms();
    console.log('this.userDetailsForm:', this.userDetailsForm.value.birthday);
    console.log('this.userDetailsForm:', this.userDetailsForm.value.username);
}

createForms() {
    this.userDetailsForm = this.formbuilder.createFormsBuild;
}

  privateAdress($event: GermanAddress ) {
    console.log('onGermanAddressMapped2', $event);
    console.log('onGermanAddressMapped2', $event.streetName);
    this.adPvNum = $event.streetNumber;
    this.adPvStreet = $event.streetName;
    this.adPvZip = $event.postalCode;
    this.adPvCity = $event.locality.long;
    this.adPvLat = $event.geoLocation.latitude;
    this.adPvLong = $event.geoLocation.longitude;
  }
  onLocationSelected($event: GermanAddress ) {
    console.log('onGermanAddressMapped2', $event);
    console.log('onGermanAddressMapped2', $event.name);
    this.firm = $event.name;
    this.adProNum = $event.streetNumber;
    this.adProStreet = $event.streetName;
    this.adProZip = $event.postalCode;
    this.adProCity = $event.locality.long;
    this.adProLat = $event.geoLocation.latitude;
    this.adProLong = $event.geoLocation.longitude;
  }

  onSubmitUserDetails(value: any) {
    this._snackBar.open('Formulaire', 'Envoie du formulaire en cours...', {
      duration: 1000
    });
    console.log('il est validé');
    console.log('value: ', value);
    if (value.adressbook) {
      value.adressbook = 1;
    } else {
      value.adressbook = 0;
    }
    // if (this.adPvNum && value.adPvNum === null) {
    //     value.adPvNum = this.adPvNum ;
    // }
    // if (this.adPvStreet && value.adPvStreet === null) {
    //     value.adPvStreet = this.adPvStreet ;
    // }
    if (this.adPvZip && value.adPvZip === null) {
        value.adPvZip = this.adPvZip ;
    }
    if (this.adPvCity && value.adPvCity === null) {
        value.adPvCity = this.adPvCity ;
    }
    if (this.firm && value.firm === null) {
        value.firm = this.firm ;
    }
    if (this.adProNum && value.adProNum === null) {
        value.adProNum = this.adProNum ;
    }
    if (this.adProStreet && value.adProStreet === null) {
        value.adProStreet = this.adProStreet ;
    }
    if (this.adProZip && value.adProZip === null) {
        value.adProZip = this.adProZip ;
    }
    if (this.adProCity && value.adProCity === null) {
        value.adProCity = this.adProCity ;
    }
    this.adPvNum && value.adPvNum === null ? value.adPvNum = this.adPvNum : value.adPvNum ;
    this.adPvStreet && value.adPvStreet === null ? value.adPvStreet = this.adPvStreet = this.adPvNum : value.adPvStreet ;


    value.adProLat = this.adProLat,
    value.adProLong = this.adProLong,
    value.adPvLat = this.adPvLat,
    value.adPvLong = this.adPvLong,

    this.useraddservice.addUser(
      value.adProLat,
      value.adProLong,
      value.adPvLat,
      value.adPvLong,
      /* Login et Role */
      value.username,
      value.email,
      Number(value.role),
      value.isActive,
      /* Informations générales */
      value.adressbook,
      value.firstName,
      /* if('null' != value.adPvZip){value.adPvZip}, */
      value.lastName,
      value.birthday.value,
      value.sexGenre,
      /* Adresse Privée */
      value.adPvNum,
      value.adPvStreet,
      value.adPvCountry,
      value.adPvZip,
      value.adPvCity,
      /* Adresse Privée */
      value.firm,
      value.tva,
      value.adProNum,
      value.adProStreet,
      value.adProCountry,
      value.adProZip,
      value.adProCity,
      /* Contact */
      value.contPhonePv,
      value.contPhoneGsm,
      value.contPhonePro,
      value.contFacebook,
      value.contWebsite,
      /*  Autres informations */
      value.asbl,
      value.shortDesc,
      value.longDesc
    );
  }
  getBook() {
    return this.adressbook;
  }

  getRole() {
    this.useraddservice.getRole().subscribe(
      response => {
        this.loading = false;
        this.roles = response;
        this.stringifyRole = JSON.stringify(this.roles);
        this.parseRole = JSON.parse(this.stringifyRole);
        this.roleListName = this.parseRole.roleName;
        this.roleListId = this.parseRole.idROLE;
        this.dtTrigger.next();
      },
      error => {
        this.objStringError = JSON.stringify(error);
        this.objError = JSON.parse(this.objStringError);
        this.ErrorStatus = this.objError.status;
        this.ErrorstatusText = this.objError.statusText;
        this.Errormessage = this.objError.message;
      }
    );
  }






  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
  public closeAlert(alert: any) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
  }
}
