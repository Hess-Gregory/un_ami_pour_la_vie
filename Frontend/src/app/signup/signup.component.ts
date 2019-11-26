import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {UsernameValidator, PasswordValidator, ParentErrorStateMatcher} from './validators';
import { FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import { routerTransition } from '../router.animations';
import { AuthService } from './../shared/services/auth.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {

    userDetailsForm: FormGroup;
    matching_passwords_group: FormGroup;
    parentErrorStateMatcher = new ParentErrorStateMatcher();
    http: any;
    public error: string;
    validation_messages = {
      'firstName': [
        { type: 'required', message: 'Le prénom est obligatoire' }
      ],
      'lastName': [
        { type: 'required', message: 'Le nom de famille est obligatoire' },
      ],
      'username': [
        { type: 'required', message: 'Le nom d\'utilisateur est obligatoire.' },
        { type: 'minlength', message: 'Le nom d\'utilisateur doit comporter au moins 5 caractères.' },
        { type: 'maxlength', message: 'Le nom d\'utilisateur ne doit pas dépasser 25 caractères.' },
        { type: 'pattern', message: 'Votre nom d\'utilisateur ne doit contenir que des chiffres,des lettres, les espacements doivent être remplacés par: "-" "_".' },
        { type: 'validUsername', message: 'Votre nom d\'utilisateur a déjà été pris.' }
      ],
      'email': [
        { type: 'required', message: 'L\'adresse mail est obligatoire.' },
        { type: 'pattern', message: 'Entrez une adresse mail valable.' }
      ],
      'confirm_password': [
        { type: 'required', message: 'La confirmation de votre mot de passe est obligatoire.' },
        { type: 'areEqual', message: 'Votre mot de passe ne se discorde pas.' }
      ],
      'password': [
        { type: 'required', message: 'Le mot de passe est obligatoire' },
        { type: 'minlength', message: 'Le mot de passe doit comporter au moins 5 caractères.' },
        { type: 'pattern', message: 'votre mot de passe doit contenir au moins une majuscule, une minuscule et un chiffre.' }
      ]
    };


    constructor(private auth: AuthService,  private router: Router, private fb: FormBuilder) {}

    ngOnInit()  {
        this.createForms();

      }
      createForms() {
        // matching passwords validation
        this.matching_passwords_group = new FormGroup({
          password: new FormControl('', Validators.compose([
            Validators.minLength(5),
            Validators.required,
            Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
          ])),
          confirm_password: new FormControl('', Validators.required)
        }, (formGroup: FormGroup) => {
          return PasswordValidator.areEqual(formGroup);
        });
        // user details form validations
        this.userDetailsForm = this.fb.group({
          firstName: ['', Validators.required ],
          lastName: ['', Validators.required ],
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
          ])),
          matching_passwords: this.matching_passwords_group
        }
        );
      }

      onSubmitUserDetails(value: any) {
        console.log('il est validé');
        console.log(value);

        console.log(value.matching_passwords.password);
        this.auth.register(
          value.username,
          value.email,
          value.firstName,
          value.lastName,
          value.matching_passwords.password
          )
        .pipe(first())
      .subscribe(
           result => this.router.navigate(['users']),
          err => this.error = 'Il semble avoir un problème'
        );
    console.log(localStorage.setItem('username', JSON.stringify(value)));

 }

}
