import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './../../services/users-export';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserDeleteService {
  userid: string;
  stringifysuccess: string;
  parsesuccess: any;
  objStringError: string;
  objError: any;
  ErrorStatus: any;
  ErrorstatusText: any;
  url: any;
  name: any;
  message: any;
  error: any;
  private wsUrlRoot = '/api';
  alertMsg = '';
  deleteEnd = false;
  errorConcat1: string;
  errorConcat2: string;
  errorConcat3: string;
  errorConcat4: string;
  errorConcat5: string;
  errorConcat6: string;

  constructor(private httpClient: HttpClient, private router: Router) {}

  public getUsers() {
    this.userid = sessionStorage.getItem('idSelect');
    return this.httpClient.get<User[]>(
      `${this.wsUrlRoot}/users/${this.userid}`
    );
  }

  public deleteUser() {
    this.userid = sessionStorage.getItem('idSelect');
    return this.httpClient
      .delete<User[]>(`${this.wsUrlRoot}/admins/user/300`)
      .subscribe(
        success => {
          this.stringifysuccess = JSON.stringify(success);
          this.parsesuccess = JSON.parse(this.stringifysuccess);
          this.alertMsg = `Message: ${this.parsesuccess.message}.`;
          this.deleteEnd = true;
        },
        error => {
          this.objStringError = JSON.stringify(error);
          this.objError = JSON.parse(this.objStringError);
          this.ErrorStatus = this.objError.status;
          this.ErrorstatusText = this.objError.statusText;
          this.url = this.objError.url;
          this.name = this.objError.name;
          this.message = this.objError.message;
          this.error = this.objError.error;

          this.errorConcat1 =
            '<h2>Avertissement !!:</h2><br><h4>Vous ne pouvez pas supprimer cette utilisateur.</h4><br><p>Code erreur: ';
          this.errorConcat2 = '.<br>Motif: ';
          this.errorConcat3 = '<br> ';
          this.errorConcat4 = '<br><br> (';
          this.errorConcat5 = ' from ';
          this.errorConcat6 = ').</p>';
          this.alertMsg = this.errorConcat1
            .concat(this.ErrorStatus)
            .concat(this.errorConcat2)
            .concat(this.ErrorstatusText)
            .concat(this.errorConcat3)
            .concat(this.error.message)
            .concat(this.errorConcat4)
            .concat(this.name)
            .concat(this.errorConcat5)
            .concat(this.url)
            .concat(this.errorConcat6);
          this.deleteEnd = true;
        }
      );
  }
}
