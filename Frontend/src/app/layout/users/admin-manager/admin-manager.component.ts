import { AdminManagerService } from './admin-manager.service';
import { Component, OnDestroy, OnInit, AfterViewInit, ViewChild, Input } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { User } from './../services/users-export';
import { routerTransition } from '../../../router.animations';

export interface Error {
    objStringError: string;
    objError: any;
    ErrorstatusText: any;
    Errormessage: string;
    ErrorStatus: string;
  }
@Component({
    // selector: 'app-admin-manager',
    templateUrl: './admin-manager.component.html',
    styleUrls: ['./admin-manager.scss'],
    animations: [routerTransition()]
})
export class AdminManagerComponent implements OnDestroy,  OnInit, AfterViewInit {

    public objStringError: string;
    public objError: any;
    public ErrorstatusText: any;
    public Errormessage: string;
    public ErrorStatus: string;
    public error: Error;
    user$: Observable<User[]>;

    @Input('master') masterName: string;
    alerts: Array<any> = [];

    constructor(private adminmanagerservice: AdminManagerService) {

        this.alerts.push( {
            id: 3,
            type: 'danger',
            message: 'this.Errormessage',
        });
     }

    @ViewChild(DataTableDirective, {static: false})
    datatableElement: DataTableDirective;
    admins: any = [];
    dtOptions: DataTables.Settings = {};
    dtTrigger: Subject<any> = new Subject();




    getAdmins() {
      this.dtOptions = { pagingType: 'full_numbers', pageLength: 100, order:[]
    };

      this.adminmanagerservice.getAdmins().subscribe(
        response => {
            this.admins = response;
            this.dtTrigger.next();
        },
        error => {
            this.objStringError = JSON.stringify(error);
            this.objError = JSON.parse(this.objStringError);
            this.ErrorStatus = this.objError.status;
            this.ErrorstatusText = this.objError.statusText;
            this.Errormessage = this.objError.message;


        }
      );
    }

    ngOnInit() {
        this.getAdmins();
        this.user$ = this.adminmanagerservice.getUsers();
        console.log(this.user$);
      }

    ngOnDestroy(): void {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
      }


      ngAfterViewInit(): void {
        //   console.log('this.datatableElement :', this.datatableElement);
        //   console.log('this.datatableElement.dtInstance :', this.datatableElement.dtInstance );

        this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
            // console.log('dtInstance.columns() :', dtInstance.columns());
          dtInstance.columns().every(function () {
            const that = this;
            $('input', this.footer()).on('keyup change', function () {
              if (that.search() !== this['value']) {
                console.log('this[value] :', this['value']);
                that
                  .search(this['value'])
                  .draw();
              }
            });
          });
        });
      }
    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }

  }
