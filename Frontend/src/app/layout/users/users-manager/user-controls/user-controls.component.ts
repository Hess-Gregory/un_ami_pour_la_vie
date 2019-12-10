import { Component, OnInit, Input } from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router, RoutesRecognized } from '@angular/router';
import { UserAddComponent } from './../user-add/user-add.component';
import { filter, pairwise } from 'rxjs/operators';
import { UserAddService } from '../user-add/user-add.service';
import { UserUpdateService } from '../user-update/user-update.service';
@Component({
  selector: 'app-user-controls',
  templateUrl: './user-controls.component.html',
  styleUrls: ['./user-controls.component.scss'],
  providers: [HttpClient, UserAddComponent, Location ]
})
export class UserControlsComponent implements OnInit {

    locked = true;
    create = false;
    previouspage = true;

  constructor(
      public router: Router,
      private userAdd: UserAddComponent,
      private _location: Location,
      public createService: UserAddService,
      public updateService: UserUpdateService
      ) {
        if (router.url === '/admin/users/user-manager/user-add') {
            this.create = true;
            this.locked = false;
        }
    this.router.events
    .pipe(filter((evt: any) => evt instanceof RoutesRecognized), pairwise())
    .subscribe((events: RoutesRecognized[]) => {
        if (this.create && events[0].urlAfterRedirects === '/admin/users/user-manager/users-update') {
            this.previouspage = false;
        }
    });
  }

  ngOnInit() {}

  onUnlock() {
    this.locked = false;
    this.router.navigate(['admin/users/user-manager/user-update']);
  }

  onSave(formData: any) {
      if (this.create) {
        this.createService.addFormSubmitted.emit(formData);
      }
      if (this.create) {
        this.updateService.editFormSubmitted.emit(formData);
      }
      this.locked = true;
    this.create = false;

  }
  onCreate() {
    this.create = true;
    this.router.navigate(['admin/users/user-manager/user-add']);
  }
  onCancel() {
    this.locked = true;
    this.create = false;
    if (this.previouspage) {
        this._location.back();
    } else {
       this.router.navigate(['admin/users/user-manager/user-get']);
    }
  }

  onDelete() {
    this.router.navigate(['admin/users/user-manager/user-delete']);
  }

  onClose() {
    this.locked = true;
    this.router.navigate(['admin/users/user-manager/users-list']);
  }

  onFrozen() {
    this.locked = true;
  }
}
