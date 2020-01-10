import { Component, OnInit, ViewChild } from '@angular/core';
import { AllUsersService } from './all-users.service';
import { debounceTime, switchMap, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.scss']
})
export class AllUsersComponent implements OnInit {
  [x: string]: any;

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  title = 'Un Ami Pour La Vie - Admin : Liste des utilisateurs';
  MyDataSource: any;
  displayedColumns: string[] = [
    'id',
    'username',
    'firstName',
    'lastName',
    'email',
    'created_date',
    'roleName',
    'status'
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

  constructor(
    private thisService: AllUsersService,
    private router: Router,
    private titleService: Title,
    private metaTagService: Meta
  ) {
    sessionStorage.setItem('Module', 'Gestion des utilisateurs');
    //sessionStorage.setItem('typeIcon', 'Awesone');
    sessionStorage.setItem('typeIcon', 'MatIcons');
    sessionStorage.setItem('nameIcon', 'supervisor_account');
  }

  ngOnInit() {
    this.RenderDataTable();
    sessionStorage.setItem('page', 'users-list');
    this.titleService.setTitle(this.title);
    this.metaTagService.updateTag({
      name: 'description',
      content: 'Un Ami Pour La Vie - Admin : Liste des utilisateurs'
    });
  }
  applyFilter(filterValue: string) {
    this.MyDataSource.filter = filterValue.trim().toLowerCase();
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
