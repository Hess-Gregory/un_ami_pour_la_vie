import { AdminManagerService } from './admin-manager.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { debounceTime, switchMap, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from './../services/users-export';
import { Role } from './../../../shared/exports';
import * as jwt_decode from 'jwt-decode';
import { Title, Meta } from '@angular/platform-browser';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-admin-manager',
  templateUrl: './admin-manager.component.html',
  styleUrls: ['./admin-manager.scss']
})
export class AdminManagerComponent implements OnInit {
  [x: string]: any;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  title = 'Un Ami Pour La Vie - Admin : Gestion des admins';
  MyDataSource: any;
  displayedColumns: string[] = [
    'username',
    'firstName',
    'lastName',
    'email',
    'roleName'
  ];
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

  adminDetailsForm: FormGroup;
  submitted = false;
  user$: Observable<User[]>;
  roles: Observable<Role[]>;

  constructor(
    private thisService: AdminManagerService,
    private fb: FormBuilder,
    private router: Router,
    private titleService: Title,
    private metaTagService: Meta
  ) {
    sessionStorage.setItem('Module', 'Utilisateurs : Gestion des admins');
    // sessionStorage.setItem('typeIcon', 'Awesone');
    sessionStorage.setItem('typeIcon', 'MatIcons');
    sessionStorage.setItem('nameIcon', 'supervised_user_circle');
  }

  ngOnInit() {
    this.RenderDataTable();
    this.user$ = this.thisService.getUsers();
    this.roles = this.thisService.getRoles();
    this.createForms();
    sessionStorage.setItem('page', 'users-list');
    this.titleService.setTitle(this.title);
    this.metaTagService.updateTag({
      name: 'description',
      content: 'Un Ami Pour La Vie - Admin : Gestion des admins'
    });
  }

  applyFilter(filterValue: string) {
    this.MyDataSource.filter = filterValue.trim().toLowerCase();
  }
  createForms() {
    this.adminDetailsForm = this.fb.group({
      userid: ['', Validators.required],
      roleid: ['', Validators.required]
    });
  }
  get f() {
    return this.adminDetailsForm.controls;
  }
  onSubmitAdmin(value: any) {
    // stoper ici si le formulaire est invalide
    if (this.adminDetailsForm.invalid) {
      return;
    } else {
      this.user$.subscribe(
        response => {
          this.users = response;
          this.stringifyUsers = JSON.stringify(this.users);
          this.parseUsers = JSON.parse(this.stringifyUsers);
          let index = -1;
          const filteredRes = this.parseUsers.find(function(item: any, i: any) {
            if (item.id === Number(value.userid)) {
              index = i;
              return i;
            }
          });
          this.userCurrentRole = filteredRes.idROLE;
          console.log('this.userCurrentRole:', this.userCurrentRole);

          const jwtToken = localStorage.getItem('access_token');
          if (jwtToken) {
            const token = localStorage.getItem('access_token');
            const itRole = jwt_decode(token)['role'];
            const itId = jwt_decode(token)['id'];
            if (
              (itRole === 9 && itId === 1) || // Si Super-admin , alors pas de restriction // ou :
              (itRole > 6 && // Si admin plus élevé que redacteur (min. modérateur)
              itRole > this.userCurrentRole && // empecher qu'il modifie un admin egal ou superieur à son grade
              itId !== value.userid && // empecher qu'il se modifie lui-méme
                this.userCurrentRole !== 9) // empecher un super admin de modifier un autre super admin
            ) {
              this.submitted = true;
              this.thisService.update(value.userid, value.roleid);
              // display form values on success
              alert('Parfait!! :-)\n\n vous avez changer le grade du membre');
            } else {
              alert(
                "Désolé!! :-(\n\n vous n'avez pas la permission de changer le grade de ce membre"
              );
            }
          }
          return this.userCurrentRole;
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
  }
  closeAlert(alert: any) {
    this.ErrorValid = true;
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
    this.router.navigate(['admin/users/users-info/not-found']);
  }

  RowSelected(res: any) {
    this.data = res.id;
    sessionStorage.setItem('idSelect', this.data);
    if (Math.floor(res.newRegister) === 1) {
      sessionStorage.setItem('new', 'true');
    } else {
      sessionStorage.setItem('new', 'false');
    }
    this.router.navigate([`admin/users/user-manager/user-get`, res.id]);
  }

  RenderDataTable() {
    this.thisService.GetAllRecords().subscribe(
      data1 => {
        this.loading = false;
        this.MyDataSource = new MatTableDataSource();
        this.MyDataSource.data = data1;
        this.MyDataSource.paginator = this.paginator;
        this.MyDataSource.sort = this.sort;
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
}
