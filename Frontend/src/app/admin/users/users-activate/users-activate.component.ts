import { UsersActivateService } from './users-activate.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-users-activate',
  templateUrl: './users-activate.component.html',
  styleUrls: ['./users-activate.scss']
})
export class UsersActivateComponent implements OnInit {
  [x: string]: any;

  @ViewChild(MatPaginator, { static: false }) paginator1: MatPaginator;
  @ViewChild(MatPaginator, { static: false }) paginator2: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort1: MatSort;
  @ViewChild(MatSort, { static: false }) sort2: MatSort;
  title = 'Un Ami Pour La Vie - Admin :  activation/désactivation des comptes';

  displayedColumns: any[] = [
    'id',
    'username',
    'firstName',
    'lastName',
    'email',
    'status',
    'action'
  ];

  MyDataSourceIsNotActive: any;
  MyDataSourceIsActive: any;

  public objStringError: string;
  public objError: any;
  public ErrorstatusText: any;
  public Errormessage: string;
  public ErrorStatus: string;
  public ErrorMsg: string;
  public error: Error;
  alerts: Array<any> = [];
  loading = true;
  ErrorValid = false;
  alertError = false;

  constructor(
    private thisService: UsersActivateService,
    private router: Router,
    private titleService: Title,
    private metaTagService: Meta
  ) {
    sessionStorage.setItem('Module', 'Activation/désactivation des comptes');
    // sessionStorage.setItem('typeIcon', 'Awesone');
    sessionStorage.setItem('typeIcon', 'MatIcons');
    sessionStorage.setItem('nameIcon', 'verified_user');
  }

  ngOnInit() {
    this.RenderDataTableNotActive();
    this.RenderDataTableActive();

    sessionStorage.setItem('page', 'users-activate');
    this.titleService.setTitle(this.title);
    this.metaTagService.updateTag({
      name: 'description',
      content:
        'Un Ami Pour La Vie - Admin : activation/désactivation des comptes'
    });
  }

  closeAlert(alert: any) {
    this.ErrorValid = true;
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
    this.router.navigate(['admin/users/users-info/not-found']);
  }

  applyFilter(filterValue: string) {
    this.MyDataSourceIsNotActive.filter = filterValue.trim().toLowerCase();
    this.MyDataSourceIsActive.filter = filterValue.trim().toLowerCase();
  }
  RenderDataTableNotActive() {
    this.thisService.GetAllRecordsNotActive().subscribe(
      data1 => {
        this.loading = false;
        this.MyDataSourceIsNotActive = new MatTableDataSource();
        this.MyDataSourceIsNotActive.data = data1;
        this.MyDataSourceIsNotActive.paginator = this.paginator1;
        this.MyDataSourceIsNotActive.sort = this.sort1;
      },
      error => {
        this.objStringError = JSON.stringify(error);
        this.objError = JSON.parse(this.objStringError);
        this.ErrorMsg = this.objError.error.message;
        this.alerts.push({
          type: 'danger',
          message: this.ErrorMsg
        });
        this.alertError = true;
      }
    );
  }
  RenderDataTableActive() {
    this.thisService.GetAllRecordsActive().subscribe(
      data2 => {
        this.loading = false;
        this.MyDataSourceIsActive = new MatTableDataSource();
        this.MyDataSourceIsActive.data = data2;
        this.MyDataSourceIsActive.paginator = this.paginator2;
        this.MyDataSourceIsActive.sort = this.sort2;
      },
      error => {
        this.objStringError = JSON.stringify(error);
        this.objError = JSON.parse(this.objStringError);
        this.ErrorMsg = this.objError.error.message;
        this.alerts.push({
          type: 'danger',
          message: this.ErrorMsg
        });
        this.alertError = true;
      }
    );
  }
  activer(post: any, event: any) {
    event.stopPropagation();

    this.userCurrentRole = post.idROLE;
    const jwtToken = localStorage.getItem('access_token');
    if (jwtToken) {
      const token = localStorage.getItem('access_token');
      const itRole = jwt_decode(token)['role'];
      const itId = jwt_decode(token)['id'];
      if (
        (itRole === 9 && itId === 1) || // Si WebMaster , alors pas de restriction // ou :
        (itRole > 6 && // Si admin plus élevé que redacteur (min. modérateur)
        itRole > post.idROLE && // empecher qu'il modifie un admin egal ou superieur à son grade
        itId !== post.id && // empecher qu'il se modifie lui-méme
          post.idROLE !== 9) // empecher un super admin de modifier un autre super admin
      ) {
        this.submitted = true;
        this.thisService.setActivate(post.id);
        alert('Parfait!! :-)\n\n vous avez activé ce membre');
      } else {
        alert('Désolé!! :-(\n\n vous n\'avez pas la permission pour ce membre');
      }
    }
    return this.post.idROLE;
  }

  desactiver(post: any, event: any) {
    event.stopPropagation();

    this.userCurrentRole = post.idROLE;
    const jwtToken = localStorage.getItem('access_token');
    if (jwtToken) {
      const token = localStorage.getItem('access_token');
      const itRole = jwt_decode(token)['role'];
      const itId = jwt_decode(token)['id'];
      if (
        (itRole === 9 && itId === 1) || // Si WebMaster , alors pas de restriction // ou :
        (itRole > 6 && // Si admin plus élevé que redacteur (min. modérateur)
        itRole > post.idROLE && // empecher qu'il modifie un admin egal ou superieur à son grade
        itId !== post.id && // empecher qu'il se modifie lui-méme
          post.idROLE !== 9) // empecher un super admin de modifier un autre super admin
      ) {
        this.submitted = true;
        this.thisService.setNotactivate(post.id);
        alert('Parfait!! :-)\n\n vous avez gelé ce membre');
      } else {
        alert('Désolé!! :-(\n\n vous n\'avez pas la permission pour ce membre');
      }
    }
    return this.post.idROLE;
  }

  RowSelected(res: any) {
    this.data = res;
    // sessionStorage.setItem('idSelect', this.data);
    if (Math.floor(res.newRegister) === 1) {
      sessionStorage.setItem('new', 'true');
    } else {
      sessionStorage.setItem('new', 'false');
    }
    this.router.navigate([`admin/users/user-manager/user-get`, res.id]);
  }
}
