import { Component, OnDestroy, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {UsernameValidator, PasswordValidator, ParentErrorStateMatcher} from './../../../../shared/validators';
import { routerTransition } from '../../../../router.animations';
import { User } from './../../../../shared/exports';
import { GetUserService } from './get-user.service';
import {Observable, of, Subject} from 'rxjs';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
declare let $: any;

export interface Error {
    objStringError: string;
    objError: any;
    ErrorstatusText: any;
    Errormessage: string;
    ErrorStatus: string;
  }


@Component({
  selector: 'app-get-user',
  templateUrl: './get-user.component.html',
  styleUrls: ['./get-user.component.scss'],
  animations: [routerTransition()]
})
export class GetUserComponent  implements  OnDestroy,  OnInit {

    [x: string]: any;
    adressbook = false;
    locked = true;
    create = false;
    public objStringError: string;
    public objError: any;
    public ErrorstatusText: any;
    public Errormessage: string;
    public ErrorStatus: string;
    public error: Error;
    alerts: Array<any> = [];
    users: any = [];
    status: any = [];
    dtTrigger: Subject<any> = new Subject();
    fileData: File = null;
    previewUrl: any = null;
    fileUploadProgress: string = null;
    uploadedFilePath: string = null;

  constructor(private userservice: GetUserService, private router: Router) {
    this.getUsers();
    this.getStatus();

    this.alerts.push( {
        id: 3,
        type: 'danger',
        message: 'this.Errormessage',
        });
    }

ngOnInit() {}

  onUnlock() {
    this.locked = false;
  }

  onSave() {
    this.locked = true;
    this.create = false;
    this.previewUrl = false;
  }
  onCreate() {
    this.create = true;
  }
  onCancel() {
    this.locked = true;
    this.create = false;
    this.previewUrl = false;
  }

  onDelete() {
    this.locked = true;
    this.previewUrl = false;
  }

  onClose() {
    this.locked = true;
    this.previewUrl = false;
    this.router.navigate(['admin/users/all-users']);
  }

  onFrozen() {
    this.locked = true;
  }

  getUsers() {

      this.userservice.getUsers().subscribe(
        response => {
            this.users = response;
            this.stringifyUsers = JSON.stringify(this.users);
            this.parseUsers = JSON.parse(this.stringifyUsers);
            this.adressbook = this.parseUsers.adressbook;
            this.user_id = this.parseUsers.id;
            const url: string = '/admin/users/user-list/details/' + this.user_id;
            this.router.navigateByUrl(url);
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
        this.userservice.getStatus().subscribe(
        response => {
            this.status = response;

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

