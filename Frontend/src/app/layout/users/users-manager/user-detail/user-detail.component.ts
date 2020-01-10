import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserDetailService } from './user-detail.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
declare let $: any;

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  providers: [HttpClient],
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnDestroy, OnInit {
  title = 'Un Ami Pour La Vie - Admin : Détails Utilisateur';
  loading = true;
  previewUrl: any = null;
  [x: string]: any;
  adressbook = false;
  public objStringError: string;
  public objError: any;
  public ErrorstatusText: any;
  public Errormessage: string;
  public ErrorStatus: string;
  alerts: Array<any> = [];
  users: any = [];
  status: any = [];
  fileData: File = null;
  public id: string;

  constructor(
    private userservice: UserDetailService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private titleService: Title,
    private metaTagService: Meta
  ) {
    this.getUsers();
    this.getStatus();
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.alerts.push({
      id: 3,
      type: 'danger',
      message: 'this.Errormessage'
    });
  }

  ngOnInit() {
    sessionStorage.setItem('page', 'user-get');
    this.titleService.setTitle(this.title);
    this.metaTagService.updateTag({
      name: 'description',
      content: 'Un Ami Pour La Vie - Admin : Détails Utilisateur'
    });
  }

  getUsers() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.userservice.getUsers(this.id).subscribe(
      response => {
        this.loading = false;
        this.users = response;
        this.stringifyUsers = JSON.stringify(this.users);
        this.parseUsers = JSON.parse(this.stringifyUsers);
        this.adressbook = this.parseUsers.adressbook;
        this.user_id = this.parseUsers.id;
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

  getBook() {
    return this.adressbook;
  }
  getStatus() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.userservice.getStatus(this.id).subscribe(
      response => {
        this.status = response;

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

  preview() {
    // Show preview
    const mimeType = this.fileData.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(this.fileData);
    reader.onload = _event => {
      this.previewUrl = reader.result;
    };
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
  public closeAlert(alert: any) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
  }
}
