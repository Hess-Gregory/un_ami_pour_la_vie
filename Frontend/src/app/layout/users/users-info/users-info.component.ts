import { Component, OnInit, ViewChild } from '@angular/core';
import { UserInfoService } from './users-info.service';
import { debounceTime, switchMap, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
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

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  MyDataSource: any;
  displayedColumns: string[] = ['id', 'username', 'email'];

  constructor(private thisService: UserInfoService, private router: Router) {}

  ngOnInit() {
    this.RenderDataTable();
    this.searchTerm$
      .pipe(
        tap(viewtap => console.log('1:', viewtap)),
        debounceTime(1000),
        switchMap(word => this.thisService.search(word))
      )
      .subscribe(data => (this.result = data));
  }
  applyFilter(filterValue: string) {
    this.MyDataSource.filter = filterValue.trim().toLowerCase();
  }

  RowSelected(res: any) {
    this.data = res.id;
    sessionStorage.setItem('idSelect', this.data);
    if (Math.floor(res.newRegister) === 1) {
      sessionStorage.setItem('new', 'true');
      console.log('new : true');
    } else {
      sessionStorage.setItem('new', 'false');
      console.log('new : false');
    }
    this.router.navigate([`admin/users/user-manager/user-get`]);
  }

  RenderDataTable() {
    this.thisService.GetAllRecords().subscribe(
      data1 => {
          console.log()
        this.MyDataSource = new MatTableDataSource();
        this.MyDataSource.data = data1;
        this.MyDataSource.paginator = this.paginator;
        this.MyDataSource.sort = this.sort;
      },
      (err: string) => {
        console.log(
          'Une erreur s\'est produite lors de la récupération des datas: ' + err
        );
      }
    );
  }
}
