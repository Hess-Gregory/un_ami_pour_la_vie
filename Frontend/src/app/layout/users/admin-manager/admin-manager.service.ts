import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Admin } from '../users-export';


@Injectable({
    providedIn: 'root'
  })
export class AdminManagerService {


    constructor(private http: HttpClient) { }

    getAdmins() {
      return this.http.get<Admin[]>('/api/admins');
    }
  }
