/// <reference types='@types/googlemaps' />
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { routerTransition } from './../../router.animations';
import { Router } from '@angular/router';
import { MapsAPILoader } from '@agm/core';
import {} from 'googlemaps';
import { ViewChild, ElementRef, NgZone } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  animations: [routerTransition()]
})
export class HomepageComponent implements OnInit {
  constructor(
    private router: Router,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) {}
  public latitude: number;
  public longitude: number;
  public fillInAddress: '';
  public searchControl: FormControl;
  public zoom: number;
  public f_addr: string;
  public city: string;
  public country: string;
  public scountry: string;
  public postCode: string;
  public estab: string;
  public state: string;
  @ViewChild('search', { static: false }) public searchElement: ElementRef;

  ngOnInit() {}
  private setCurrentPosition() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }
}
