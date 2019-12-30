import { Component, OnInit, Input } from '@angular/core';
import {
  Location,
  LocationStrategy,
  PathLocationStrategy
} from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router, RoutesRecognized } from '@angular/router';
import { UserAddComponent } from './../user-add/user-add.component';
import { filter, pairwise } from 'rxjs/operators';
import { UserAddService } from '../user-add/user-add.service';
import { UserUpdateService } from '../user-update/user-update.service';
import { ModalService } from '../../../../shared/modules/_modal';
@Component({
  selector: 'app-user-controls',
  templateUrl: './user-controls.component.html',
  styleUrls: ['./user-controls.component.scss'],
  providers: [HttpClient, UserAddComponent, Location]
})
export class UserControlsComponent implements OnInit {
  locked = true;
  create = false;
  previouspage = true;
  userDetailsForm: any;
  userForm: any;
  page: string;

  constructor(
    public router: Router,
    private userAdd: UserAddComponent,
    private _location: Location,
    public createService: UserAddService,
    public updateService: UserUpdateService,
    private modalService: ModalService
  ) {
    this.router.events
      .pipe(
        filter((evt: any) => evt instanceof RoutesRecognized),
        pairwise()
      )
      .subscribe((events: RoutesRecognized[]) => {
        if (
          this.create &&
          events[0].urlAfterRedirects ===
            '/admin/users/user-manager/users-update'
        ) {
          this.previouspage = false;
        }
      });
  }

  ngOnInit() {
    // this.deleteUsers() ;
    this.page = sessionStorage.getItem('page');
    if (this.page === 'user-add') {
      this.create = true;
      this.locked = false;
    }
    if (this.page === 'user-update') {
      this.create = false;
      this.locked = false;
    }
    if (this.page === 'user-get') {
      this.create = false;
      this.locked = true;
    }
  }

  onUnlock() {
    this.router.navigate(['admin/users/user-manager/user-update']);
  }

  onSubmitUserDetails(value: any) {
    if (this.previouspage) {
      this._location.back();
    } else {
      this.router.navigate(['admin/users/user-manager/users-list']);
    }
  }
  onCreate() {
    this.router.navigate(['admin/users/user-manager/user-add']);
  }

  onCancel() {
    if (this.previouspage) {
      this._location.back();
    } else {
      this.router.navigate(['admin/users/user-manager/user-get']);
    }
  }

  onDelete() {
    this.openModal('custom-modal-2');
    // this.router.navigate(['admin/users/user-manager/user-delete']);
  }

  onClose() {
    if (this.previouspage) {
      this._location.back();
    } else {
      this.router.navigate(['admin/users/user-manager/users-list']);
    }
  }

  onFrozen() {
    this.locked = true;
  }

  openModal(id: string) {
    this.modalService.open(id);
  }
  closeModal(id: string) {
    this.modalService.close(id);
  }
}
