import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  isActive: boolean;
  level: number;
  collapsed: boolean;
  showMenu: string;
  pushRightClass: string;
  Username: string;
  @Output() collapsedEvent = new EventEmitter<boolean>();

  constructor(private translate: TranslateService, public router: Router) {
    const jwtToken = localStorage.getItem('access_token');
    if (jwtToken) {
      const token = localStorage.getItem('access_token');
      this.Username = jwt_decode(token)['username'];
      const itRole = jwt_decode(token)['role'];
      if (itRole === 1) {
        this.level = 1;
      }
      if (itRole === 2) {
        this.level = 2;
      }
      if (itRole === 3) {
        this.level = 3;
      }
      if (itRole === 4) {
        this.level = 4;
      }
      if (itRole === 5) {
        this.level = 5;
      }
      if (itRole === 6) {
        this.level = 6;
      }
      if (itRole === 7) {
        this.level = 7;
      }
      if (itRole === 8) {
        this.level = 8;
      }
      if (itRole === 9) {
        this.level = 9;
      }
    }

    this.router.events.subscribe(val => {
      if (
        val instanceof NavigationEnd &&
        window.innerWidth <= 992 &&
        this.isToggled()
      ) {
        this.toggleSidebar();
      }
    });
  }

  ngOnInit() {
    this.isActive = false;
    this.collapsed = false;
    this.showMenu = '';
    this.pushRightClass = 'push-right';
  }

  eventCalled() {
    this.isActive = !this.isActive;
  }

  addExpandClass(element: any) {
    if (element === this.showMenu) {
      this.showMenu = '0';
    } else {
      this.showMenu = element;
    }
  }

  toggleCollapsed() {
    this.collapsed = !this.collapsed;
    this.collapsedEvent.emit(this.collapsed);
  }

  isToggled(): boolean {
    const dom: Element = document.querySelector('body');
    return dom.classList.contains(this.pushRightClass);
  }

  toggleSidebar() {
    const dom: any = document.querySelector('body');
    dom.classList.toggle(this.pushRightClass);
  }

  rltAndLtr() {
    const dom: any = document.querySelector('body');
    dom.classList.toggle('rtl');
  }

  changeLang(language: string) {
    this.translate.use(language);
  }

  onLoggedout() {
    localStorage.removeItem('access_token');
  }
}
