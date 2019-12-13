import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { UserAddService } from './user-add.service';
import { Country, UsernameValidator, ParentErrorStateMatcher, PhoneValidator } from './../../../../shared/validators';
import { Router } from '@angular/router';
import {Observable, of, Subject} from 'rxjs';
import { FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';

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
    roles: any = [];
    dtTrigger: Subject<any> = new Subject();
    fileData: File = null;
    fileUploadProgress: string = null;
    uploadedFilePath: string = null;
    http: any;
    userDetailsForm: FormGroup;
    country_phone_group: FormGroup;
    parentErrorStateMatcher = new ParentErrorStateMatcher();

    bookadress: any ;

    genders = [
      'Homme',
      'Femme',
      'Autre'
    ];
    // countries = [
    //   new Country('BE', 'Uruguay'),
    //   new Country('FR', 'United States')
    // ];
    activateds = [

            {isActive: '0', name: 'Gelé'},
            {isActive: '1', name: 'Activé'}
      ];
    validation_messages = {
        'username': [
        { type: 'required', message: 'Le nom d\'utilisateur est obligatoire.' },
        { type: 'minlength', message: 'Le nom d\'utilisateur doit comporter au moins 5 caractères.' },
        { type: 'maxlength', message: 'Le nom d\'utilisateur ne doit pas dépasser 25 caractères.' },
        { type: 'pattern', message: 'Votre nom d\'utilisateur ne doit contenir que des chiffres,des lettres, les espacements doivent être remplacés par: "-" "_".' },
        { type: 'validUsername', message: 'Votre nom d\'utilisateur a déjà été pris.' }
        ],
        'firstName': [
        { type: 'required', message: 'Le prénom est obligatoire' }
        ],
        'lastName': [
        { type: 'required', message: 'Le nom de famille est obligatoire' },
        ],
        'email': [
        { type: 'required', message: 'L\'adresse mail est obligatoire.' },
        { type: 'pattern', message: 'Entrez une adresse mail valable.' }
        ],
      'bio': [
        { type: 'maxlength', message: 'Bio cannot be more than 256 characters long' },
      ],
      'sexGenre': [
        { type: 'required', message: 'Please select your gender' },
      ],
      'birthday': [
        { type: 'required', message: 'Please insert your birthday' },
      ],
      'phone': [
        { type: 'required', message: 'Phone is required' },
        { type: 'validCountryPhone', message: 'Phone incorrect for the country selected' }
      ]
    };

  constructor(private useraddservice: UserAddService, private router: Router, private fb: FormBuilder) {

    this.getRole();

    this.alerts.push( {
        id: 3,
        type: 'danger',
        message: 'this.Errormessage',
        });
        if (this.adressbook) {
            this.bookadress = 1;
            console.log(this.bookadress);

        } else {
            this.bookadress = 0;
            console.log(this.bookadress);
        }
   }

  ngOnInit() {
    this.createForms();
  }

  createForms() {

    // const country = new FormControl(this.countries[0]);
    // const phone = new FormControl('', {
    //     validators: Validators.compose([
    //         Validators.required,
    //         PhoneValidator.validCountryPhone(country)
    //     ])
    // });
    // this.country_phone_group = new FormGroup({
    //   country: country,
    //   phone: phone
    // });

    // user details form validations
    this.userDetailsForm = this.fb.group({

        /* Login et Role */
        username: new FormControl('', Validators.compose([
            UsernameValidator.validUsername,
            Validators.maxLength(25),
            Validators.minLength(5),
            Validators.pattern('^[a-zA-Z0-9]+([a-zA-Z0-9](_|-)[a-zA-Z0-9])*[a-zA-Z0-9]+$'),
            Validators.required
        ])),
        email: new FormControl('', Validators.compose([
            Validators.required,
            Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ]))

    });

  }



  onSubmitUserDetails(value: any) {
    console.log('il est validé');
    console.log('value: ' , value);
    if (value.adressbook) {
        value.adressbook = 1;
    } else {
        value.adressbook = 0;
    }

    this.useraddservice.addUser(
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
}



getBook() {
    return this.adressbook;
}

getRole() {
    this.useraddservice.getRole().subscribe(
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
if (mimeType.match(/image\/*/) == null ) {
  return;
}

const reader = new FileReader();
reader.readAsDataURL(this.fileData);
reader.onload = (_event) => {
  this.previewUrl = reader.result;
};
}

onSubmit() {
// const formData = new FormData();
// formData.append('files', this.fileData);

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
