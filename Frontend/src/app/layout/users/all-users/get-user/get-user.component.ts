import { GetUserService } from './get-user.service';
import { routerTransition } from '../../../../router.animations';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../../users-export';
import {of} from 'rxjs';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {  Subject } from 'rxjs';
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

    locked = true;
    [x: string]: any;
    public objStringError: string;
    public objError: any;
    public ErrorstatusText: any;
    public Errormessage: string;
    public ErrorStatus: string;
    public error: Error;
    users: Array<any> = [];

    dtTrigger: Subject<any> = new Subject();
    alerts: Array<any> = [];

    constructor(private userservice: GetUserService) {
        this.getUsers();
        this.getStatus();
        this.alerts.push( {
            id: 3,
            type: 'danger',
            message: 'this.Errormessage',
            });

    }

    ngOnInit() {
            console.log('locked is : ', this.locked);

    }

onUnlock() {this.locked = false; }
onSave() {this.locked = true; }
onCancel() {this.locked = true; }
onDelete() {this.locked = true; }
onClose() {this.locked = true; }

    getUsers() {

        this.userservice.getUsers().subscribe(
          response => {
              this.users = response;

              this.dtTrigger.next();
              },
          error => {
              this.objStringError = JSON.stringify(error);
              this.objError = JSON.parse(this.objStringError);
              this.ErrorStatus = this.objError.status;
              this.ErrorstatusText = this.objError.statusText;
              this.Errormessage = this.objError.message;
              console.log(error);
              }
        );
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
              console.log(error);
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

