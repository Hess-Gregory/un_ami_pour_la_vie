import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserAddService {
    addFormSubmitted = new EventEmitter<any>();

  constructor(private http: HttpClient) { }

}
