import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Output,
  Input,
  EventEmitter,
  ChangeDetectorRef,
  NgModule
} from '@angular/core';
import { Subscription, Observable, timer } from 'rxjs';
import * as moment from 'moment';
import * as jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';
import { HttpClient, HttpHandler } from '@angular/common/http';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';
import { ModalService } from '../../../shared/modules/_modal/modal.service';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
  providers: [AuthService, HttpClient],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimerComponent implements OnInit {
  private subscription: Subscription;
  @Output() TimerExpired: EventEmitter<any> = new EventEmitter<any>();

  @Input() SearchDate: moment.Moment = moment();
  @Input() ElapsTime = 1200;

  searchEndDate: moment.Moment;
  remainingTime: number;
  minutes: number;
  seconds: number;
  delayCloseModal = false;

  Qminutes: number;
  Qseconds: any;
  Qhours: number;
  Sseconds: number;
  RestSeconds: number;

  deltaTimeMessage: any;
  currentDate: any;
  date333: any;
  current_time: number;
  expirationTime: number;

  everySecond: Observable<number> = timer(0, 1000);

  constructor(
    private modalService: ModalService,
    private ref: ChangeDetectorRef,
    private authService: AuthService,
    private router: Router
  ) {
    this.searchEndDate = this.SearchDate.add(this.ElapsTime, 'minutes');
  }

  ngOnInit() {
    this.subscription = this.everySecond.subscribe(seconds => {
      const currentTime: moment.Moment = moment();
      this.remainingTime = this.searchEndDate.diff(currentTime);
      this.remainingTime = this.remainingTime / 1000;

      if (this.remainingTime <= 0) {
        this.SearchDate = moment();
        this.searchEndDate = this.SearchDate.add(this.ElapsTime, 'minutes');

        this.TimerExpired.emit();
      } else {
        this.minutes = Math.floor(this.remainingTime / 60);
        this.seconds = Math.floor(this.remainingTime - this.minutes * 60);
      }
      this.ref.markForCheck();
      const jwtToken = localStorage.getItem('access_token');
      if (jwtToken) {
        const token = localStorage.getItem('access_token');
        const expirationTime = jwt_decode(token)['exp'];
        const current_time: any = Math.round(Date.now() / 1000);
        this.currentDate = moment(new Date());

        if (current_time < expirationTime) {
          this.date333 = new Date(Number(expirationTime) * 1000);
          let Qseconds = (this.date333 - this.currentDate + 30000) / 1000 - 31;
          const rest = (this.date333 - this.currentDate + 30000) / 1000 - 31;

          if (rest < 180) {
            this.openModal('advertisement');
          }
          const Qhours = Math.floor(Qseconds / 3600);
          Qseconds = Qseconds % 3600;
          const Qminutes = Math.floor(Qseconds / 60);
          Qseconds = Qseconds % 60;
          const Sseconds = Math.floor(Qseconds);
          this.RestSeconds = Qseconds;

          this.deltaTimeMessage =
            ' La connexion expirera dans ' +
            Qhours +
            ' h ' +
            Qminutes +
            ' min et ' +
            Sseconds +
            ' sec.';

          return true;
        } else {
          this.deltaTimeMessage = 'La connexion a expiré';
          console.log(this.deltaTimeMessage);
          this.authService.logout();
          return false;
        }
      } else {
        this.deltaTimeMessage = 'La connexion a expiré';
        console.log(this.deltaTimeMessage);
        this.authService.logout();
        return false;
      }
    });
  }
  openModal(id: string) {
    if (!this.delayCloseModal) {
      this.modalService.open(id);
      this.delayCloseModal = true;
    }
  }
  closeModal(id: string) {
    this.modalService.close(id);
  }
}
