import { AddressBookService } from './address-book.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

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
export class AddressBookComponent implements OnInit {
  [x: string]: any;

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  title = 'Un Ami Pour La Vie - Admin : Carnet d\'adresses ';
  MyDataSource: any;

  displayedColumns: any[] = [
    'firm',
    'asbl',
    'firstName',
    'lastName',
    'contPhonePv',
    'contPhoneGsm',
    'contPhonePro',
    'email'
  ];

  MyDataSourceIsNotActive: any;
  MyDataSourceIsActive: any;

  public ErrorMsg: string;
  public error: Error;
  alerts: Array<any> = [];
  loading = true;
  ErrorValid = false;
  alertError = false;

  constructor(
    private thisService: AddressBookService,
    private router: Router,
    private titleService: Title,
    private metaTagService: Meta
  ) {
    sessionStorage.setItem('Module', 'Carnet d\'adresses');
    sessionStorage.setItem('typeIcon', 'Awesone');
    sessionStorage.setItem('nameIcon', 'fa fa-lg fa-address-book');
    // sessionStorage.setItem('typeIcon', 'MatIcons');
    // sessionStorage.setItem('nameIcon', 'menu_book');
  }

  ngOnInit() {
    this.RenderDataTable();

    sessionStorage.setItem('page', 'address-book');
    this.titleService.setTitle(this.title);
    this.metaTagService.updateTag({
      name: 'description',
      content: 'Un Ami Pour La Vie - Admin : Carnet d\'adresses '
    });
  }

  closeAlert(alert: any) {
    this.ErrorValid = true;
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
    this.router.navigate(['admin/users/users-info/not-found']);
  }

  applyFilter(filterValue: string) {
    this.MyDataSource.filter = filterValue.trim().toLowerCase();
  }

  RenderDataTable() {
    this.thisService.GetAllRecords().subscribe(
      data => {
        this.loading = false;
        this.MyDataSource = new MatTableDataSource();
        this.MyDataSource.data = data;
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

  RowSelected(res: any) {
    this.data = res;
    console.log(res);
    // sessionStorage.setItem('idSelect', this.data);
    if (Math.floor(res.newRegister) === 1) {
      sessionStorage.setItem('new', 'true');
    } else {
      sessionStorage.setItem('new', 'false');
    }
    this.router.navigate([`admin/users/user-manager/user-get`, res.id]);
  }
}
