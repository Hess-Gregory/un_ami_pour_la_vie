
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './shared/services/auth.service';
import * as jwt_decode from 'jwt-decode';
import { fakeAsync } from '@angular/core/testing';
  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  itUsername: string;
  Username = this.itUsername ;
  constructor(private auth: AuthService, private router: Router) { }


  logout() {
    this.auth.logout();
    this.router.navigate(['login']);
  }}

 const localStorage ='';
  
  if (localStorage === 'undefined') {
    console.log('nous sommes pas connecté');
    const jwtToken = localStorage.getItem('access_token');
    const decoded = jwt_decode(jwtToken);
    const itUsername = decoded.username;
    const itEmail = decoded.email;
    const itIsActive = decoded.isActive;
    const itRole = decoded.role;

     }
     else{
      console.log('nous sommes connecté');

     }

