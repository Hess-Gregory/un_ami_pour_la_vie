import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headerhomepage',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderHomepageComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
  isHomeRoute() {
    return this.router.url === '/';
  }
}
