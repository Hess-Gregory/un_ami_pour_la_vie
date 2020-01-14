import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import { UserDeleteService } from './user-delete.service';
import { HttpClient } from '@angular/common/http';
import { ModalService } from '../../../../shared/modules/_modal';
import * as jwt_decode from 'jwt-decode';
import { Router, ActivatedRoute } from '@angular/router';

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
  public id: string;

  constructor(
    private userDeleteservice: UserDeleteService,
    private activatedRoute: ActivatedRoute,
    private modalService: ModalService,
    private router: Router
  ) {}

  ngOnInit() {
    sessionStorage.setItem('page', 'user-delete');
    this.getUsers();
  }

  openModal(id: string) {
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
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.userDeleteservice.getUsers(this.id).subscribe(
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
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    const jwtToken = localStorage.getItem('access_token');
    if (jwtToken) {
      const token = localStorage.getItem('access_token');
      const itRole = jwt_decode(token)['role'];
      const itId = jwt_decode(token)['id'];
      if (
        (itRole === 9 && itId === 1) || // Si Super-admin , alors pas de restriction // ou :
        (itRole > 6 && // Si admin plus élevé que redacteur (min. modérateur)
        itRole > this.role && // empecher qu'il modifie un admin egal ou superieur à son grade
        itId !== this.id && // empecher qu'il se modifie lui-méme
          this.role !== 9) // empecher un super admin de modifier un autre super admin
      ) {
        this.userDeleteservice.deleteUser(this.id);

        setTimeout(() => {
          this.alertMsg = this.userDeleteservice.alertMsg;
        }, 1000);
        setTimeout(() => {
          this.openModal('custom-modal-3');
        }, 1500);
      } else {
        this.alertMsg =
          "Désolé!! :-(\n\n vous n'avez pas la permission de changer le grade de ce membre";
        setTimeout(() => {
          this.router.navigate([`admin/users/user-manager/users-list`]);
        }, 1000);
      }
    }
  }
}
