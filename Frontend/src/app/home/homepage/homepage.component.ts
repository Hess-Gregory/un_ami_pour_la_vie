/// <reference types='@types/googlemaps' />
import {} from 'googlemaps';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { routerTransition } from './../../router.animations';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [routerTransition()]
})
export class HomepageComponent implements OnInit {
  title = 'ASBL-Un Ami Pour La Vie (Page Accueil)';
  constructor(private titleService: Title, private metaTagService: Meta) {}

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.metaTagService.updateTag({
      name: 'description',
      content: 'ASBL-Un Ami Pour La Vie (Page Accueil)'
    });
  }
}
