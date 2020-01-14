import { Component, OnDestroy, OnInit } from '@angular/core';
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
import { HttpClient, HttpEventType } from '@angular/common/http';
declare let $: any;
export interface Error {
  objStringError: string;
  objError: any;
  ErrorstatusText: any;
  Errormessage: string;
  ErrorStatus: string;
}
@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss']
})
export class UserUpdateComponent implements OnDestroy, OnInit {
  title = 'Un Ami Pour La Vie - Admin : Modification Utilisateur ';
  loading = true;
  locked = false;
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
  user_asbl: any;
  user_shortDesc: any;
  user_longDesc: any;
  roles: any = [];
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

  sexGenre = ['Homme', 'Femme', 'Autre'];
  // countries = [
  //   new Country('BE', 'Uruguay'),
  //   new Country('FR', 'United States')
  // ];
  activateds = [
    { isActive: '0', name: 'Gelé' },
    { isActive: '1', name: 'Activé' }
  ];
  validation_messages = {
    username: [
      {
        type: 'required',
        message: "Le nom d'utilisateur est obligatoire."
      },
      {
        type: 'minlength',
        message: "Le nom d'utilisateur doit comporter au moins 5 caractères."
      },
      {
        type: 'maxlength',
        message: "Le nom d'utilisateur ne doit pas dépasser 25 caractères."
      },
      {
        type: 'pattern',
        message:
          'Votre nom d\'utilisateur ne doit contenir que des chiffres,des lettres, les espacements doivent être remplacés par: "-" "_".'
      },
      {
        type: 'validUsername',
        message: "Votre nom d'utilisateur a déjà été pris."
      }
    ],
    firstName: [{ type: 'required', message: 'Le prénom est obligatoire' }],
    lastName: [
      { type: 'required', message: 'Le nom de famille est obligatoire' }
    ],
    email: [
      { type: 'required', message: "L'adresse mail est obligatoire." },
      { type: 'pattern', message: 'Entrez une adresse mail valable.' }
    ],
    bio: [
      {
        type: 'maxlength',
        message: 'Bio cannot be more than 256 characters long'
      }
    ],
    gender: [{ type: 'required', message: 'Please select your gender' }],
    birthday: [{ type: 'required', message: 'Please insert your birthday' }],
    phone: [
      { type: 'required', message: 'Phone is required' },
      {
        type: 'validCountryPhone',
        message: 'Phone incorrect for the country selected'
      }
    ]
  };

  constructor(
    private userservice: UserUpdateService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private titleService: Title,
    private metaTagService: Meta,
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    this.alerts.push({
      id: 3,
      type: 'danger',
      message: 'this.Errormessage'
    });
    if (this.adressbook) {
      this.bookadress = true;
    } else {
      this.bookadress = false;
    }
  }

  ngOnInit() {
    sessionStorage.setItem('page', 'user-update');
    this.createForms();
    this.getUsers();
    this.getStatus();
    this.getRole();
    this.titleService.setTitle(this.title);
    this.metaTagService.updateTag({
      name: 'description',
      content: 'Un Ami Pour La Vie - Admin : Modification Utilisateur'
    });
  }

  createForms() {
    // user details form validations
    this.userDetailsForm = this.fb.group({
      /* Login et Role */

      image: [undefined],
      username: new FormControl(
        '',
        Validators.compose([
          UsernameValidator.validUsername,
          Validators.maxLength(25),
          Validators.minLength(5),
          Validators.pattern(
            '^[a-zA-Z0-9]+([a-zA-Z0-9](_|-)[a-zA-Z0-9])*[a-zA-Z0-9]+$'
          ),
          Validators.required
        ])
      ),
      email: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ])
      ),
      role: [undefined],
      isActive: [undefined],

      /* Informations générales */
      adressbook: [undefined],
      firstName: [undefined],
      lastName: [undefined],
      birthday: [undefined],
      sexGenre: [undefined],

      /* Adresse Privée */
      adPvNum: [undefined],
      adPvStreet: [undefined],
      adPvCountry: [undefined],
      adPvZip: [undefined],
      adPvCity: [undefined],

      /* Adresse Privée */
      firm: [undefined],
      tva: [undefined],
      adProNum: [undefined],
      adProStreet: [undefined],
      adProCountry: [undefined],
      adProZip: [undefined],
      adProCity: [undefined],

      /* Contact */
      contPhonePv: [undefined],
      contPhoneGsm: [undefined],
      contPhonePro: [undefined],
      contFacebook: [undefined],
      contWebsite: [undefined],

      /*  Autres informations */
      asbl: [undefined],
      shortDesc: [undefined],
      longDesc: [undefined]
    });
  }

  onSubmitUserDetails(value: any) {
    console.log('value: ', value.image);
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
    if (value.adPvNum === null || value.adPvNum === '' || !value.adPvNum) {
      value.adPvNum = this.user_adPvNum;
    }
    if (
      value.adPvStreet === null ||
      value.adPvStreet === '' ||
      !value.adPvStreet
    ) {
      value.adPvStreet = this.user_adPvStreet;
    }
    if (
      value.adPvCountry === null ||
      value.adPvCountry === '' ||
      !value.adPvCountry
    ) {
      value.adPvCountry = this.user_adPvCountry;
    }
    if (value.adPvZip === null || value.adPvZip === '' || !value.adPvZip) {
      value.adPvZip = this.user_adPvZip;
    }
    if (value.adPvCity === null || value.adPvCity === '' || !value.adPvCity) {
      value.adPvCity = this.user_adPvCity;
    }
    if (value.firm === null || value.firm === '' || !value.firm) {
      value.firm = this.user_firm;
    }
    if (value.tva === null || value.tva === '' || !value.tva) {
      value.tva = this.user_tva;
    }
    if (value.adProNum === null || value.adProNum === '' || !value.adProNum) {
      value.adProNum = this.user_adProNum;
    }
    if (
      value.adProStreet === null ||
      value.adProStreet === '' ||
      !value.adProStreet
    ) {
      value.adProStreet = this.user_adProStreet;
    }
    if (
      value.adProCountry === null ||
      value.adProCountry === '' ||
      !value.adProCountry
    ) {
      value.adProCountry = this.user_adProCountry;
    }
    if (value.adProZip === null || value.adProZip === '' || !value.adProZip) {
      value.adProZip = this.user_adProZip;
    }
    if (
      value.adProCity === null ||
      value.adProCity === '' ||
      !value.adProCity
    ) {
      value.adProCity = this.user_adProCity;
    }
    if (
      value.contPhonePv === null ||
      value.contPhonePv === '' ||
      !value.contPhonePv
    ) {
      value.contPhonePv = this.user_contPhonePv;
    }
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
    this.userservice.update(
      value.id,
      /* Login et Role */
      value.username,
      value.email,
      value.role,
      value.isActive,
      /* Informations générales */
      value.adressbook,
      value.firstName,
      value.lastName,
      value.birthday,
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

  getUsers() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.userservice.getUsers(this.id).subscribe(
      response => {
        this.loading = false;
        this.users = response;
        this.stringifyUsers = JSON.stringify(this.users);
        this.parseUsers = JSON.parse(this.stringifyUsers);
        this.adressbook = this.parseUsers.adressbook;
        this.user_id = this.parseUsers.id;
        this.user_username = this.parseUsers.username;
        this.user_email = this.parseUsers.email;
        this.user_role = this.parseUsers.idROLE;
        this.user_isActive = this.parseUsers.isActive;
        this.user_adressbook = this.parseUsers.adressbook;
        this.user_firstName = this.parseUsers.firstName;
        this.user_lastName = this.parseUsers.lastName;
        this.user_birthday = this.parseUsers.birthday;
        this.user_sexGenre = this.parseUsers.sexGenre;
        this.user_adPvNum = this.parseUsers.adPvNum;
        this.user_adPvStreet = this.parseUsers.adPvStreet;
        this.user_adPvCountry = this.parseUsers.adPvCountry;
        this.user_adPvZip = this.parseUsers.adPvZip;
        this.user_adPvCity = this.parseUsers.adPvCity;
        this.user_firm = this.parseUsers.firm;
        this.user_tva = this.parseUsers.tva;
        this.user_adProNum = this.parseUsers.adProNum;
        this.user_adProStreet = this.parseUsers.adProStreet;
        this.user_adProCountry = this.parseUsers.adProCountry;
        this.user_adProZip = this.parseUsers.adProZip;
        this.user_adProCity = this.parseUsers.adProCity;
        this.user_contPhonePv = this.parseUsers.contPhonePv;
        this.user_contPhoneGsm = this.parseUsers.contPhoneGsm;
        this.user_contPhonePro = this.parseUsers.contPhonePro;
        this.user_contFacebook = this.parseUsers.contFacebook;
        this.user_contWebsite = this.parseUsers.contWebsite;
        this.user_asbl = this.parseUsers.asbl;
        this.user_shortDesc = this.parseUsers.shortDesc;
        this.user_longDesc = this.parseUsers.longDesc;
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

  getBook() {
    return this.adressbook;
  }
  getStatus() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.userservice.getStatus(this.id).subscribe(
      response => {
        this.status = response;
        this.stringifyStatus = JSON.stringify(this.status);
        this.parseStatus = JSON.parse(this.stringifyStatus);
        this.userRoleId = this.parseStatus.idROLE;

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
  getRole() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.userservice.getRole(this.id).subscribe(
      response => {
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

  fileProgress(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];
    this.preview();
  }

  preview() {
    // Show preview
    const mimeType = this.fileData.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(this.fileData);
    reader.onload = _event => {
      this.previewUrl = reader.result;
    };
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('files', this.fileData);

    this.http.post('http://localhost:4000', formData).subscribe(res => {
      console.log(res);
      this.uploadedFilePath = res.data.filePath;
      alert('SUCCESS !!');
    });

    // this.fileUploadProgress = '0%';
    // this.http.post('https://us-central1-tutorial-e6ea7.cloudfunctions.net/fileUpload', formData, {
    //   reportProgress: true,
    //   observe: 'events'
    // })
    // .subscribe(events => {
    //   if(events.type === HttpEventType.UploadProgress) {
    //     this.fileUploadProgress = Math.round(events.loaded / events.total * 100) + '%';
    //     console.log(this.fileUploadProgress);
    //   } else if(events.type === HttpEventType.Response) {
    //     this.fileUploadProgress = '';
    //     console.log(events.body);
    //     alert('SUCCESS !!');
    //   }
    // })
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
  public closeAlert(alert: any) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
  }
}
