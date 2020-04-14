import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';
import { Observable, of, Subject } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserUpdateService } from './user-update.service';
import {
  UsernameValidator,
  ParentErrorStateMatcher
} from './../../../../shared/validators';
import { Title, Meta } from '@angular/platform-browser';
import { HttpEvent, HttpClient, HttpEventType } from '@angular/common/http';
import {Appearance, GermanAddress, Location} from '@angular-material-extensions/google-maps-autocomplete';
// import moment from 'moment';
import { countryList } from '../../../../shared/exports/form-data';
import { validationMsg } from './../../../../shared/validators/msg-validator-data';
import { FormbuilderGroupService } from '../../../../shared/validators/formbuilder-group.service';
import { MatSnackBar } from '@angular/material';
declare let $: any;

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserUpdateComponent implements  OnInit {
  title = 'Un Ami Pour La Vie - Admin : Modification Utilisateur ';
  loading = true;
  locked = false;
  activateExist = false;
  previewUrl: any = null;
  [x: string]: any;
  adressbook = false;
  public objStringError: string;
  public objError: any;
  public ErrorstatusText: any;
  public Errormessage: string;
  public ErrorStatus: string;
  public error: Error;
  alerts: Array<any> = [];
  users: any = [];
    firm1 ='';
  adProNum1: any;
  adProStreet1 ='';
  adProZip1: any;
  adProCity1: any;
  countrypro1 ='';
  countrypro ='';
  adPvNum1: any;
  adPvStreet1 ='';
  adPvZip1: any;
  adPvCity1: any;
  countryprivate: string[];
  adProLat: any;
  adProLong: any;
  adPvLat: any;
  adPvLong: any;
  user_username: any;
  user_email: any;
  user_role: any;
  user_isActive: any;
  user_adressbook: any;
  user_firstName: any;
  user_lastName: any;
  user_birthday: any;
  user_sexGenre: any;
  user_adPvNum: any;
  user_adPvStreet: any;
  user_adPvCountry: any;
  user_adPvZip: any;
  user_adPvCity: any;
  user_firm: any;
  user_tva: any;
  user_adProNum: any;
  user_adProStreet: any;
  user_adProCountry: any;
  user_adProZip: any;
  user_adProCity: any;
  user_contPhonePv: any;
  user_contPhoneGsm: any;
  user_contPhonePro: any;
  user_contFacebook: any;
  user_contWebsite: any;
  new_username: any;
  user_asbl: any;
  user_shortDesc: any;
  user_longDesc: any;
  roles: any = [];
  disablePicture: any = [];
  activePictures: any = [];
  idPictureActive: string;
  status: any = [];
  dtTrigger: Subject<any> = new Subject();
  fileData: File = null;
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;
  public erreur: string;
  userDetailsForm: FormGroup;
  country_phone_group: FormGroup;
  parentErrorStateMatcher = new ParentErrorStateMatcher();
  public userRoleId: any;
  selected = this.userRoleId;
  public id: string;
  bookadress: any;
  allCountries = countryList;
  validation_messages = validationMsg;
  dateNow = new Date();
  YearNow = this.dateNow.getFullYear();
  minYearNow = this.YearNow - 100;
  maxYearNow = this.YearNow - 18;
  MonthNow = this.dateNow.getMonth() - 1;
  DayNow = this.dateNow.getDate();
  startDate = new Date(1910, 0, 1);
  minDate = new Date(1910, 0, 1);
  maxDate = new Date(this.maxYearNow, this.MonthNow, this.DayNow);


  genders = ['Homme', 'Femme', 'Autre'];

  activateds = [
    { isActive: '0', name: 'Gelé' },
    { isActive: '1', name: 'Activé' }
  ];


  constructor(
    private userservice: UserUpdateService,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private metaTagService: Meta,
    private fb: FormBuilder,
    private http: HttpClient,
    private _snackBar: MatSnackBar,
    private formbuilder: FormbuilderGroupService
  ) {
    if (this.adressbook) {
      this.bookadress = true;
    } else {
      this.bookadress = false;
    }
  }

  ngOnInit() {

    sessionStorage.setItem('page', 'user-update');

    this.getAllInfoUser();
    this.createForms();
    this.getDisablePicture();

    this.titleService.setTitle(this.title);
    this.metaTagService.updateTag({
      name: 'description',
      content: 'Un Ami Pour La Vie - Admin : Modification Utilisateur'
    });

    this.id = this.activatedRoute.snapshot.paramMap.get('id');

    this.userservice.getActivePictures(this.id).subscribe(
        response => {
        this.activePictures = response;
        this.stringifyPicture = JSON.stringify(this.activePictures);
        this.parsePicture = JSON.parse(this.stringifyPicture);
        this.idPictureActive = this.parsePicture.id;
        return this.activateExist = true;
        },
        error => {
        this.objStringError = JSON.stringify(error);
        this.objError = JSON.parse(this.objStringError);
        this.ErrorStatus = this.objError.status;
        this.ErrorstatusText = this.objError.statusText;
        this.Errormessage = this.objError.message;
        }
    );

    this.userservice.getActivePicture(this.id).subscribe(
      response => {
        this.pictureActive = response;
        this.stringifyPicture = JSON.stringify(this.pictureActive);
        console.log('stringifyPicture :', this.stringifyPicture);
        this.idPicture = this.stringifyPicture['id'];
        this.obj = JSON.parse(this.stringifyPicture);
        console.log('id 1:', this.obj.id);
        this.idPictureActive = this.obj.id;
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

  createForms() {
    this.userDetailsForm = this.formbuilder.createFormsBuild;
}


  privateAdress($event: GermanAddress ) {
    console.log('onGermanAddressMapped2', $event);
    console.log('onGermanAddressMapped2', $event.streetName);
    this.adPvNum1 = $event.streetNumber;
    this.adPvStreet1 = $event.streetName;
    this.adPvZip1 = $event.postalCode;
    this.adPvCity1 = $event.locality.long;
    this.adPvLat1 = $event.geoLocation.latitude;
    this.adPvLong1 = $event.geoLocation.longitude;
  }
  onLocationSelected($event: GermanAddress ) {
    console.log('onGermanAddressMapped2', $event);
    console.log('onGermanAddressMapped2', $event.name);
    this.firm1 = $event.name;
    this.adProNum1 = $event.streetNumber;
    this.adProStreet1 = $event.streetName;
    this.adProZip1 = $event.postalCode;
    this.adProCity1 = $event.locality.long;
    this.adProLat1 = $event.geoLocation.latitude;
    this.adProLong1 = $event.geoLocation.longitude;
  }
  onSubmitUserDetails(value: any) {
    this._snackBar.open('Formulaire', 'Envoie du formulaire en cours...', {
      duration: 1000
    });

    if (value.adressbook) {
      value.adressbook = 1;
    } else {
      value.adressbook = 0;
    }

    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    value.id = this.id;

    if (value.username === null || value.username === '' || !value.username) {
      value.username = this.user_username;
    }
    if (value.email === null || value.email === '' || !value.email) {
      value.email = this.user_email;
    }
    if (value.role === null || value.role === '' || !value.role) {
      value.role = this.user_role;
    }
    if (value.isActive === null || value.isActive === '' || !value.isActive) {
      value.isActive = this.user_isActive;
    }
    if (
      value.firstName === null ||
      value.firstName === '' ||
      !value.firstName
    ) {
      value.firstName = this.user_firstName;
    }
    if (value.lastName === null || value.lastName === '' || !value.lastName) {
      value.lastName = this.user_lastName;
    }
    if (value.birthday === null || value.birthday === '' || !value.birthday) {
    value.birthday = this.user_birthday;
    }
    if (value.sexGenre === null || value.sexGenre === '' || !value.sexGenre) {
      value.sexGenre = this.user_sexGenre;
    }

    if (value.adPvNum === null || value.adPvNum === '' || !value.adPvNum) {value.adPvNum = this.user_adPvNum; }
   if (this.adPvNum1 && value.adPvNum === null) {

        value.adPvNum = this.adPvNum1 ;
    }


    if ( value.adPvStreet === null ||value.adPvStreet === '' ||!value.adPvStreet) {value.adPvStreet = this.user_adPvStreet; }
        if (this.adPvStreet1 && value.adPvStreet === null) {
        value.adPvStreet = this.adPvStreet1 ;
    }


    if (value.adPvCountry === null ||value.adPvCountry === '' ||value.adPvCountry) { value.adPvCountry = this.user_adPvCountry; }



    if (value.adPvZip === null || value.adPvZip === '' || !value.adPvZip) { value.adPvZip = this.user_adPvZip;}
    if (this.adPvZip1 && value.adPvZip === null) {
        value.adPvZip = this.adPvZip1 ;

    }

    if (value.adPvCity === null || value.adPvCity === '' || !value.adPvCity) { value.adPvCity = this.user_adPvCity; }
    if (this.adPvCity1 && value.adPvCity === null) {
        value.adPvCity = this.adPvCity1 ;
    }


    if (value.firm === null || value.firm === '' || !value.firm) { value.firm = this.user_firm;}
    if (this.firm1 && value.firm === null) {
        value.firm = this.firm1 ;
    }


    if (value.tva === null || value.tva === '' || !value.tva) { value.tva = this.user_tva; }

    if (value.adProNum === null || value.adProNum === '' || !value.adProNum) { value.adProNum = this.user_adProNum; }
    if (this.adProNum1 && value.adProNum === null) {
        value.adProNum = this.adProNum1 ;
    }


    if ( value.adProStreet === null ||value.adProStreet === '' || !value.adProStreet ) {  value.adProStreet = this.user_adProStreet; }
    if (this.adProStreet1 && value.adProStreet === null) {
        value.adProStreet = this.adProStreet1 ;
    }


    if ( value.adProCountry === null || value.adProCountry === '' || !value.adProCountry ) { value.adProCountry = this.user_adProCountry; }



    if (value.adProZip === null || value.adProZip === '' || !value.adProZip) { value.adProZip = this.user_adProZip; }
    if (this.adProZip1 && value.adProZip === null) {
        value.adProZip = this.adProZip1 ;
    }


    if (value.adProCity === null ||value.adProCity === '' || !value.adProCity ) { value.adProCity = this.user_adProCity; }
    if (this.adProCity1 && value.adProCity === null) {
        value.adProCity = this.adProCity1 ;
    }


    if ( value.contPhonePv === null || value.contPhonePv === '' || !value.contPhonePv  ) { value.contPhonePv = this.user_contPhonePv; }

    if (
      value.contPhoneGsm === null ||
      value.contPhoneGsm === '' ||
      !value.contPhoneGsm
    ) {
      value.contPhoneGsm = this.user_contPhoneGsm;
    }
    if (
      value.contPhonePro === null ||
      value.contPhonePro === '' ||
      !value.contPhonePro
    ) {
      value.contPhonePro = this.user_contPhonePro;
    }
    if (
      value.contFacebook === null ||
      value.contFacebook === '' ||
      !value.contFacebook
    ) {
      value.contFacebook = this.user_contFacebook;
    }
    if (
      value.contWebsite === null ||
      value.contWebsite === '' ||
      !value.contWebsite
    ) {
      value.contWebsite = this.user_contWebsite;
    }
    if (value.asbl === null || value.asbl === '' || !value.asbl) {
      value.asbl = this.user_asbl;
    }
    if (
      value.shortDesc === null ||
      value.shortDesc === '' ||
      !value.shortDesc
    ) {
      value.shortDesc = this.user_shortDesc;
    }


    if (value.longDesc === null || value.longDesc === '' || !value.longDesc) {
      value.longDesc = this.user_longDesc;
    }

    value.adProLat = this.adProLat1;
    value.adProLong = this.adProLong1;
    value.adPvLat = this.adPvLat1;
    value.adPvLong = this.adPvLong1;


    // const dateObj = new Date(value.birthday);
    // const momentObj = moment(dateObj);
    // value.birthday = momentObj.format('YYYY/DD/MM');

    this.userservice.update(
      value.id,
      value.adProLat,
      value.adProLong,
      value.adPvLat,
      value.adPvLong,
      /* Login et Role */
      value.username,
      value.email,
      value.role,
      value.isActive,
      /* Informations générales */
      value.adressbook,
      value.firstName,
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
    // console.log(localStorage.setItem('username', JSON.stringify(value)));
  }



  getBook() {
    return this.adressbook;
  }

  getDisablePicture() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.userservice.getDisablePicture(this.id).subscribe(
      response => {
        this.disablePicture = response;

      },
      error => {
        const objStringError = JSON.stringify(error);
        const objError = JSON.parse(objStringError);
        this.ErrorStatus = objError.status;
        this.ErrorstatusText = objError.statusText;
        this.Errormessage = objError.message;
      }
    );
  }


  getAllInfoUser() {

    // users= res[0]  activePicture= res[1]  status= res[2]

        this.id = this.activatedRoute.snapshot.paramMap.get('id');
        this.userservice.getAllInfoUser(this.id)
        .subscribe(
        res => {

            // users= res[0]
            this.users = res[0];

            if (this.users) {
                const stringifyUsers = JSON.stringify(this.users);
                const parseUsers = JSON.parse(stringifyUsers);
                this.adressbook = parseUsers.adressbook;
                this.user_id = parseUsers.id;
                this.user_username = parseUsers.username;
                this.user_email = parseUsers.email;
                this.user_role = parseUsers.idROLE;
                this.user_isActive = parseUsers.isActive;
                this.user_adressbook = parseUsers.adressbook;
                this.user_firstName = parseUsers.firstName;
                this.user_lastName = parseUsers.lastName;
                if (parseUsers.birthday) {
                this.user_birthday =  new FormControl(new Date(parseUsers.birthday).toISOString().slice(0, -1));
                }
                this.user_sexGenre = parseUsers.sexGenre;
                this.user_adPvNum = parseUsers.adPvNum;
                this.user_adPvStreet = parseUsers.adPvStreet;
                this.user_adPvCountry = parseUsers.adPvCountry;
                this.user_adPvZip = parseUsers.adPvZip;
                this.user_adPvCity = parseUsers.adPvCity;
                this.user_firm = parseUsers.firm;
                this.user_tva = parseUsers.tva;
                this.user_adProNum = parseUsers.adProNum;
                this.user_adProStreet = parseUsers.adProStreet;
                this.user_adProCountry = parseUsers.adProCountry;
                this.user_adProZip = parseUsers.adProZip;
                this.user_adProCity = parseUsers.adProCity;
                this.user_contPhonePv = parseUsers.contPhonePv;
                this.user_contPhoneGsm = parseUsers.contPhoneGsm;
                this.user_contPhonePro = parseUsers.contPhonePro;
                this.user_contFacebook = parseUsers.contFacebook;
                this.user_contWebsite = parseUsers.contWebsite;
                this.user_asbl = parseUsers.asbl;
                this.user_shortDesc = parseUsers.shortDesc;
                this.user_longDesc = parseUsers.longDesc;
            }

            // roles= res[1]
            this.roles  = res[1];

            if (this.roles) {
                const stringifyRole = JSON.stringify(this.roles);
                const parseRole = JSON.parse(stringifyRole);
                this.roleListName = parseRole.roleName;
                this.roleListId = parseRole.idROLE;
            }

            // status= res[2]
            this.status  = res[2];

            if (this.status) {
                const stringifyStatus = JSON.stringify(this.status);
                const parseStatus = JSON.parse(stringifyStatus);
                this.userRoleId = parseStatus.idROLE;
            }
            if (this.users && this.roles && this.status) {
                this.loading = false;
            }
    },
        err => {
              const stringifyError = JSON.stringify(err);
              const parseError = JSON.parse(stringifyError);
              this.ErrorCode1 = parseError.status;
              this.ErrorText1 = parseError.error.message;
              if (this.idPicture) {
                  this.activeExist = true;
              } else {
                this.alerts.push({
                  type: 'danger',
                  code: this.ErrorCode1,
                  message: this.ErrorText1
                });
              this.alertError = true;
              this.isLoadingResults = false;
              }
        });

    }




  onSubmit(e) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.fileArr.forEach((item) => {
        this.fileObj.push(item.item);
      });
    this.userDetailsForm.patchValue({
        avatar: this.fileObj
      });

      this.userDetailsForm.get('avatar').updateValueAndValidity();
    this.userservice.addFiles(this.id, this.userDetailsForm.value.avatar)
      .subscribe((event: HttpEvent<any>) => {
        switch (event.type) {
          case HttpEventType.Sent:
            console.log('Request has been made!');
            break;
          case HttpEventType.ResponseHeader:
            console.log('Response header has been received!');
            break;
          case HttpEventType.UploadProgress:
            this.progress = Math.round(event.loaded / event.total * 100);
            console.log(`Uploaded! ${this.progress}%`);
            this.fileArrValid = true;
            break;
          case HttpEventType.Response:
            console.log('File uploaded successfully!', event.body);
            setTimeout(() => {
              this.progress = 0;
              this.fileArr = [];
              this.fileObj = [];
              this.msg = 'File uploaded successfully!';
            }, 3000);
        }
      });

  }
  activate(e) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');

      this.userservice.getActivePicture(this.id).subscribe(
        response => {
          this.pictureActive = response;
          console.log('response :', response);
          const stringifyPicture = JSON.stringify(this.pictureActive);
            this.idPicture = stringifyPicture['id'];
            const obj = JSON.parse(this.stringifyPicture);

            console.log('id 1:', obj.id);
            this.idPictureActive = obj.id;
            if (this.activateExist) {
                console.log('photo active existe');
                this.userservice.disablePicture(this.idPictureActive, 0);
                this.userservice.enablePicture(e, 1);

            } else {
                console.log('aucune photo active');
                this.userservice.enablePicture(e, 1);
            }

        },
        error => {
          const objStringError = JSON.stringify(error);
          const objError = JSON.parse(objStringError);
          this.ErrorStatus = objError.status;
          this.ErrorstatusText = objError.statusText;
          this.Errormessage = objError.message;
        }
      );

  }
//   delete(e) {

//     this.userDetailsForm.deletePicture({
//         id: e
//       });
//   }

  public closeAlert(alert: any) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
  }



}
