import { UsersActivateService } from './users-activate.service';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { Router } from '@angular/router';
import * as jwt_decode from 'jwt-decode';
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
export class UsersActivateComponent implements OnDestroy, OnInit {
  loading = true;
  [x: string]: any;
  public objStringError: string;
  public objError: any;
  public ErrorstatusText: any;
  public Errormessage: string;
  public ErrorStatus: string;
  public error: Error;
  alerts: Array<any> = [];
  users: any = [];
  // dataSource = this.users;
  dtTrigger: Subject<any> = new Subject();
  dtOptions: DataTables.Settings = {};
  datatableElement: DataTableDirective;
  dtElement: DataTableDirective;
  dtInstance: Promise<DataTables.Api>;

  constructor(
    private allusersservice: UsersActivateService,
    private router: Router
  ) {
    this.alerts.push({
      id: 3,
      type: 'danger',
      message: 'this.Errormessage'
    });
  }

  @ViewChild(DataTableDirective, { static: false })
  ngOnInit() {
    this.getActivate();
    this.getNotActivate();
    this.getUsers();
  }

  getUsers() {
    this.allusersservice.getStatusUsers().subscribe(
      response => {
        this.loading = false;
        this.users = response;
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
  getActivate() {
    this.dtOptions[0] = {
      pagingType: 'full_numbers',
      pageLength: 10,
      order: [3, 'asc']
    };
  }
  getNotActivate() {
    this.dtOptions[1] = {
      pagingType: 'full_numbers',
      pageLength: 10,
      order: [3, 'asc']
    };
  }
  RowSelected1(usersactivate: any) {
    this.data = usersactivate.id;
    sessionStorage.setItem('idSelect', this.data);
    if (Number(usersactivate.newRegister) === 1) {
      sessionStorage.setItem('new', 'true');
      console.log('new : true');
    } else {
      sessionStorage.setItem('new', 'false');
      console.log('new : false');
    }
    this.router.navigate([`admin/users/user-manager/user-get`]);
  }
  RowSelected2(usersnotactivate: any) {
    this.data = usersnotactivate.id;
    sessionStorage.setItem('idSelect', this.data);
    if (Number(usersnotactivate.newRegister) === 1) {
      sessionStorage.setItem('new', 'true');
      console.log('new : true');
    } else {
      sessionStorage.setItem('new', 'false');
      console.log('new : false');
    }
    this.router.navigate([`admin/users/user-manager/user-get`]);
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  public closeAlert(alert: any) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
  }

  activer(usersactivate: any) {
    this.stringifyUsers = JSON.stringify(this.users);
    this.parseUsers = JSON.parse(this.stringifyUsers);

    let index = -1;

    const filteredRes = this.parseUsers.find(function(item: any, i: any) {
      if (item.id === Number(usersactivate.id)) {
        index = i;
        return i;
      }
    });

    this.userCurrentRole = filteredRes.idROLE;

    const jwtToken = localStorage.getItem('access_token');
    if (jwtToken) {
      const token = localStorage.getItem('access_token');
      const itRole = jwt_decode(token)['role'];
      const itId = jwt_decode(token)['id'];
      if (
        (itRole === 9 && itId === 1) || // Si Super-admin , alors pas de restriction // ou :
        (itRole > 6 && // Si admin plus élevé que redacteur (min. modérateur)
        itRole > this.userCurrentRole && // empecher qu'il modifie un admin egal ou superieur à son grade
        itId !== usersactivate.id && // empecher qu'il se modifie lui-méme
          this.userCurrentRole !== 9) // empecher le WebMaster de modifier un autre super admin
      ) {
        this.submitted = true;
        this.allusersservice.setActivate(usersactivate.id);
        alert('Parfait!! :-)\n\n vous avez activé ce membre');
      } else {
        alert('Désolé!! :-(\n\n vous n\'avez pas la permission pour ce membre');
      }
    }
    return this.userCurrentRole;
  }
  desactiver(usersnotactivate: any) {
    this.stringifyUsers = JSON.stringify(this.users);
    this.parseUsers = JSON.parse(this.stringifyUsers);

    let index = -1;

    const filteredRes = this.parseUsers.find(function(item: any, i: any) {
      if (item.id === Number(usersnotactivate.id)) {
        index = i;
        return i;
      }
    });

    this.userCurrentRole = filteredRes.idROLE;

    const jwtToken = localStorage.getItem('access_token');
    if (jwtToken) {
      const token = localStorage.getItem('access_token');
      const itRole = jwt_decode(token)['role'];
      const itId = jwt_decode(token)['id'];
      if (
        (itRole === 9 && itId === 1) || // Si Super-admin , alors pas de restriction // ou :
        (itRole > 6 && // Si admin plus élevé que redacteur (min. modérateur)
        itRole > this.userCurrentRole && // empecher qu'il modifie un admin egal ou superieur à son grade
        itId !== usersnotactivate.id && // empecher qu'il se modifie lui-méme
          this.userCurrentRole !== 9) // empecher un super admin de modifier un autre super admin
      ) {
        this.submitted = true;
        this.allusersservice.setNotactivate(usersnotactivate.id);
        alert('Parfait!! :-)\n\n vous avez gelé ce membre');
      } else {
        alert('Désolé!! :-(\n\n vous n\'avez pas la permission pour ce membre');
      }
    }
    return this.userCurrentRole;
  }
}
