import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { IpServiceService } from '../ip-service.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
    registered = false;
    submitted = false;
    userForm: FormGroup;
    constructor(private http: HttpClient, private ip: IpServiceService, private formBuilder: FormBuilder, public router: Router) {

    }

        invalidUsername() {
            return (this.submitted && this.userForm.controls.username.errors != null);
        }
        invalidEmail() {
            return (this.submitted && this.userForm.controls.email.errors != null);
        }
        invalidPassword() {
            return (this.submitted && this.userForm.controls.password.errors != null);
        }



    ngOnInit() {
        this.userForm = this.formBuilder.group({
            username: ['', Validators.required],
            role: 6,
            isActive : 0,
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(5), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]]
        });
        }

    onSubmit() {
        this.submitted = true;

        if (this.userForm.invalid === true) {
            return;
        } else {
            this.registered = true;
        }
    }

}
