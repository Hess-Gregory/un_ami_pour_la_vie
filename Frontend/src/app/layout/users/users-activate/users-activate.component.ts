import { UsersActivateService } from './users-activate.service';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {  Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { Router} from '@angular/router';
declare let $: any;

export interface Error {
    objStringError: string;
    objError: any;
    ErrorstatusText: any;
    Errormessage: string;
    ErrorStatus: string;
  }
@Component({
    selector: 'app-users-activate',
    templateUrl: './users-activate.component.html',
    styleUrls: ['./users-activate.scss']
})
export class UsersActivateComponent implements OnDestroy,  OnInit {


    constructor(private allusersservice: UsersActivateService, private router: Router) {
        this.getActivate();
        this.getNotActivate();
    this.alerts.push( {
        id: 3,
        type: 'danger',
        message: 'this.Errormessage',
        });
 }

 [x: string]: any;
 public objStringError: string;
 public objError: any;
 public ErrorstatusText: any;
 public Errormessage: string;
 public ErrorStatus: string;
 public error: Error;
 alerts: Array<any> = [];
 usersactivates: any = [];
 usersnotactivates: any = [];
 dataSource = this.users;
 dtTrigger: Subject<any> = new Subject();
 dtOptions: DataTables.Settings = {};
 datatableElement: DataTableDirective;
 newregister = true;
 bgcolor = 'bg-dark';
 dtElement: DataTableDirective;
 dtInstance: Promise<DataTables.Api>;
    @ViewChild(DataTableDirective, {static: false})


        ngOnInit() {
            if (this.newregister) {
                this.bgcolor = 'bg-danger';
            }
}

getActivate() {
    this.dtOptions[0] = {
        pagingType: 'full_numbers',
        pageLength: 10,
        order: [3, 'asc']
    };
this.allusersservice.getActivate().subscribe(
    response => {
        this.usersactivates = response;
        console.log(response);
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

getNotActivate() {
    this.dtOptions[1] = {
        pagingType: 'full_numbers',
        pageLength: 10,
        order: [3, 'asc']
    };
this.allusersservice.getNotActivate().subscribe(
    response => {
        this.usersnotactivates = response;
        console.log(response);
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

    RowSelected1(usersactivate: any) {
        this.data = usersactivate.id;
        sessionStorage.setItem('idSelect', this.data);
        if (usersactivate.newRegister) {
        sessionStorage.setItem('new', 'true');
        }
        this.router.navigate([`admin/users/user-manager/user-get`]);
      }
      RowSelected2(usersnotactivate: any) {
        this.data = usersnotactivate.id;
        sessionStorage.setItem('idSelect', this.data);
        if (usersnotactivate.newRegister) {
        sessionStorage.setItem('new', 'true');
        }
        this.router.navigate([`admin/users/user-manager/user-get`]);
      }
      activer(usersactivate: any) {
        this.allusersservice.setActivate(usersactivate.id);
        this.router.navigate([`admin/users/users-activate`]);
        // rerender(): void  {
        //     this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        //       dtInstance.ajax.reload()
        //     });
      }
      desactiver(usersnotactivate: any) {
        this.allusersservice.setNotactivate(usersnotactivate.id);
        this.router.navigate([`admin/users/users-activate`]);
        // rerender(): void  {
        //     this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        //       dtInstance.ajax.reload()
        //     });
      }

}
