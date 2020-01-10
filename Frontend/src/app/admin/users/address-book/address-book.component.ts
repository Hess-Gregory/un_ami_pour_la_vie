import { AddressBookService } from './address-book.service';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
declare let $: any;

export interface Error {
  objStringError: string;
  objError: any;
  ErrorstatusText: any;
  Errormessage: string;
  ErrorStatus: string;
}
@Component({
  selector: 'app-address-book',
  templateUrl: './address-book.component.html',
  styleUrls: ['./address-book.scss']
})
export class AddressBookComponent implements OnDestroy, OnInit {
  title = "Un Ami Pour La Vie - Admin Carnet d'adresses";
  constructor(
    private allusersservice: AddressBookService,
    private router: Router,
    private titleService: Title,
    private metaTagService: Meta
  ) {
    this.getUsers();
    this.alerts.push({
      id: 3,
      type: 'danger',
      message: 'this.Errormessage'
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
  users: any = [];
  dataSource = this.users;
  dtTrigger: Subject<any> = new Subject();
  dtOptions: DataTables.Settings = {};
  datatableElement: DataTableDirective;
  newregister = true;
  bgcolor = 'bg-dark';
  loading = true;

  @ViewChild(DataTableDirective, { static: false })
  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.metaTagService.updateTag({
      name: 'description',
      content: "Un Ami Pour La Vie - Admin Carnet d'adresses"
    });

    if (this.newregister) {
      this.bgcolor = 'bg-danger';
    }
  }

  getUsers() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      order: [1, 'asc']
    };
    this.allusersservice.getUsers().subscribe(
      response => {
        this.loading = false;
        this.users = response;
        this.stringifyUsers = JSON.stringify(this.users);
        this.parseUsers = JSON.parse(this.stringifyUsers);
        this.newregister = this.parseUsers.newregister;

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

  RowSelected(user: any) {
    this.data = user.id;
    sessionStorage.setItem('idSelect', this.data);
    if (Number(user.newRegister) === 1) {
      sessionStorage.setItem('new', 'true');
      console.log('new : true');
    } else {
      sessionStorage.setItem('new', 'false');
      console.log('new : false');
    }
    this.router.navigate([`admin/users/user-manager/user-get`]);
  }
}
