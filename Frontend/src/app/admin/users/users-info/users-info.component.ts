import { Component, OnInit, ViewChild } from '@angular/core';
import { UserInfoService } from './users-info.service';
import { debounceTime, switchMap, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-users-info',
  templateUrl: './users-info.component.html',
  styleUrls: ['./users-info.scss']
})
export class UsersInfoComponent implements OnInit {
    searchTerm = new FormControl();
    searchTerm$: Observable<string> = this.searchTerm.valueChanges;
    result: any = [];
  [x: string]: any;


  title = 'Un Ami Pour La Vie - Admin : Liste des utilisateurs';
  MyDataSource: any;

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
    private thisService: UserInfoService,
    private router: Router,
    private titleService: Title,
    private metaTagService: Meta
  ) {
    sessionStorage.setItem('Module', 'Utilisateurs : infos générales');
    // sessionStorage.setItem('typeIcon', 'Awesone');
    sessionStorage.setItem('typeIcon', 'MatIcons');
    sessionStorage.setItem('nameIcon', 'supervisor_account');
  }

  ngOnInit() {
    sessionStorage.setItem('page', 'users-list');
    this.titleService.setTitle(this.title);
    this.metaTagService.updateTag({
      name: 'description',
      content: 'Un Ami Pour La Vie - Admin : Liste des utilisateurs'
    });
    this.searchTerm$
      .pipe(
        tap(viewtap => {
        console.log('1:', viewtap);
        this.loading = false;
            }
        ),
        debounceTime(1000),
        switchMap(word => this.thisService.search(word))
      )
      .subscribe(data => (this.result = data));
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

}
