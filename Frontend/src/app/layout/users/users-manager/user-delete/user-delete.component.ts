import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import { UserDeleteService } from './user-delete.service';
import { HttpClient } from '@angular/common/http';
import { ModalService } from '../../../../shared/modules/_modal';
import * as jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [HttpClient]
})
export class UserDeleteComponent implements OnInit {
  loading = true;

  users: any = [];
  stringifyUsers: string;
  parseUsers: any;
  role: number;
  userid: number;
  public objStringError: string;
  public objError: any;
  public ErrorstatusText: any;
  public Errormessage: string;
  public ErrorStatus: string;
  alertMsg = this.userDeleteservice.alertMsg;
  deleteEnd = this.userDeleteservice.deleteEnd;

  constructor(
    private userDeleteservice: UserDeleteService,
    private modalService: ModalService,
    private router: Router
  ) {}

  ngOnInit() {
    sessionStorage.setItem('page', 'user-delete');
    console.log('user delete component (ngOnInit)');
    this.getUsers();
  }

  openModal(id: string) {
    console.log('alertMsg modal 3', this.alertMsg);
    this.closeModal('custom-modal-2');
    setTimeout(() => {
      this.modalService.open(id);
    }, 2000);
    this.modalService.open(id);
  }
  closeModal(id: string) {
    this.modalService.close(id);
  }

  getUsers() {
    this.userDeleteservice.getUsers().subscribe(
      response => {
        this.loading = false;
        this.users = response;
        this.stringifyUsers = JSON.stringify(this.users);
        this.parseUsers = JSON.parse(this.stringifyUsers);
        this.userid = this.parseUsers.id;
        this.role = this.parseUsers.role;
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

  deleteUsers() {
    const jwtToken = localStorage.getItem('access_token');
    if (jwtToken) {
      const token = localStorage.getItem('access_token');
      const itRole = jwt_decode(token)['role'];
      const itId = jwt_decode(token)['id'];
      if (
        (itRole === 9 && itId === 1) || // Si Super-admin , alors pas de restriction // ou :
        (itRole > 6 && // Si admin plus élevé que redacteur (min. modérateur)
        itRole > this.role && // empecher qu'il modifie un admin egal ou superieur à son grade
        itId !== this.userid && // empecher qu'il se modifie lui-méme
          this.role !== 9) // empecher un super admin de modifier un autre super admin
      ) {
        console.log('alertMsg  1', this.alertMsg);
        this.userDeleteservice.deleteUser();

        console.log('alertMsg  2', this.alertMsg);

        setTimeout(() => {
          this.alertMsg = this.userDeleteservice.alertMsg;
        }, 1000);
        setTimeout(() => {
          console.log('alertMsg  3', this.alertMsg);
          this.openModal('custom-modal-3');
        }, 1500);
        // setTimeout(() => {
        // console.log('alertMsg  4', this.alertMsg);
        //                         this.router.navigate([`admin/users/user-manager/users-list`]);
        //                      }, 15000);

        // setTimeout(() => { this.modalService.close('custom-modal-2'); }, 60000);
      } else {
        this.alertMsg =
          "Désolé!! :-(\n\n vous n'avez pas la permission de changer le grade de ce membre";
        setTimeout(() => {
          this.router.navigate([`admin/users/user-manager/users-list`]);
        }, 1000);
        // setTimeout(() => { this.modalService.close('custom-modal-2'); }, 5000);
      }
    }
  }
}
