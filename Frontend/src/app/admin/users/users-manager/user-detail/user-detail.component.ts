/// <reference types="@types/googlemaps" />
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserDetailService } from './user-detail.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

declare let $: any;

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  providers: [HttpClient],
  styleUrls: ['./user-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserDetailComponent implements OnInit {
  id: string = this.activatedRoute.snapshot.paramMap.get('id');
  title = 'Un Ami Pour La Vie - Admin : Détails Utilisateur';

  isLoadingResults = true;
  user: any = {};
  statusUser: any = {};
  activePicture: any = {};
  adressbook: boolean;

  alerts: Array<any> = [];
  ErrorValid = false;
  alertError = false;
  stringifyError: any;
  parseError: any;
  public ErrorCode: any;
  public ErrorText: any;

  // Google Map:
  public GoogleLoading = false;
  fileData: File = null;
  public zoom: number;
  public latitudePv: any;
  public longitudePv: any;
  public latitude: number;
  public longitude: number;
  public latitudePro: any;
  public longitudePro: any;
  public latitude2: number;
  public longitude2: number;
  public latitudeCurrent: number;
  public longitudeCurrent: number;

  constructor(
    private userservice: UserDetailService,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private router: Router,
    private metaTagService: Meta
  ) {}

  ngOnInit() {
    sessionStorage.setItem('page', 'user-get');
    this.titleService.setTitle(this.title);
    this.metaTagService.updateTag({
      name: 'description',
      content: `Les details de l\'utilisateur : ${this.id} du panneau admin`
    });

    this.setCurrentPosition();
    this.getAllurl();
    setTimeout(() => {
      this.latitude = parseFloat(this.latitudePv);
      this.longitude = parseFloat(this.longitudePv);
      this.latitude2 = parseFloat(this.latitudePro);
      this.longitude2 = parseFloat(this.longitudePro);
    }, 500);
    setTimeout(() => {
      this.GoogleLoading = true;
    }, 1000);
    this.zoom = 12;
  }

  getAllurl() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.userservice.getAllurl(this.id).subscribe(
      res => {
        this.activePicture = res[0];
        this.statusUser = res[1];
        this.user = res[2];
        this.adressbook = this.user.adressbook;
        this.latitudePv = this.user.adPvLat;
        this.longitudePv = this.user.adPvLong;
        this.latitudePro = this.user.adProLat;
        this.longitudePro = this.user.adProLong;
        this.isLoadingResults = false;
      },
      err => {
        console.log(err);
        this.stringifyError = JSON.stringify(err);
        this.parseError = JSON.parse(this.stringifyError);
        this.ErrorCode = this.parseError.status;
        this.ErrorText = this.parseError.error.message;
        this.alerts.push({
          type: 'danger',
          code: this.ErrorCode,
          message: this.ErrorText
        });
        this.alertError = true;
        this.isLoadingResults = false;
      }
    );
  }

  private setCurrentPosition() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        this.latitudeCurrent = position.coords.latitude;
        this.longitudeCurrent = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }

  closeAlert(alert: any) {
    this.ErrorValid = true;
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
    this.router.navigate(['admin/users/users-info/not-found']);
  }
}
