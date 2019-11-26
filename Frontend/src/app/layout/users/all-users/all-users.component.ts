import { AllUsersService } from './all-users.service';
import { Component, OnDestroy, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {  Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { routerTransition } from '../../../router.animations';

declare let $: any;

export interface Error {
    objStringError: string;
    objError: any;
    ErrorstatusText: any;
    Errormessage: string;
    ErrorStatus: string;
  }
@Component({
    selector: 'app-all-users',
    templateUrl: './all-users.component.html',
    styleUrls: ['./all-users.scss'],
    animations: [routerTransition()]
})

export class AllUsersComponent implements OnDestroy,  OnInit {

    public objStringError: string;
    public objError: any;
    public ErrorstatusText: any;
    public Errormessage: string;
    public ErrorStatus: string;
    public error: Error;
    alerts: Array<any> = [];

    @ViewChild(DataTableDirective, {static: false})
    datatableElement: DataTableDirective;
    users: any = [];
    dtOptions: DataTables.Settings = {};
    dtTrigger: Subject<any> = new Subject();

    constructor(private allusersservice: AllUsersService) {

        this.getUsers();

        this.alerts.push( {
            id: 3,
            type: 'danger',
            message: 'this.Errormessage',
            });
     }

    ngOnInit() {
     }

    getUsers() {
      this.dtOptions = {
          pagingType: 'full_numbers',
          pageLength: 10
        };

      this.allusersservice.getUsers().subscribe(

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

    ngOnDestroy(): void {
        this.dtTrigger.unsubscribe();
      }

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
        }
}
