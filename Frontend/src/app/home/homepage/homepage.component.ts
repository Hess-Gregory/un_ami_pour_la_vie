/// <reference types='@types/googlemaps' />
import { Component, OnInit } from '@angular/core';
import {} from 'googlemaps';
import { Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
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
