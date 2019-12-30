import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';

@Injectable()
export class RoleGuard {
  //authLevel: number ;
  static authLevel: number;

  constructor() {
    let authLevel = 0;
    const jwtToken = localStorage.getItem('access_token');
    if (jwtToken) {
      if (jwtToken) {
        const token = localStorage.getItem('access_token');
        const itRole = jwt_decode(token)['role'];
        if (itRole === 1) {
          return (authLevel = 1);
        }
        if (itRole === 2) {
          return (authLevel = 2);
        }
        if (itRole === 3) {
          return (authLevel = 3);
        }
        if (itRole === 4) {
          return (authLevel = 4);
        }
        if (itRole === 5) {
          return (authLevel = 5);
        }
        if (itRole === 6) {
          return (authLevel = 6);
        }
        if (itRole === 7) {
          return (authLevel = 7);
        }
        if (itRole === 8) {
          return (authLevel = 8);
        }
        if (itRole === 9) {
          return (authLevel = 9);
        }
        console.log('jwtToken auth guard: ', authLevel);
      }
      return authLevel;
    }
  }
}
