import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  collapedSideBar: boolean;
  dateNow = new Date();
  YearNow = this.dateNow.getFullYear();

  constructor() {}

  ngOnInit() {}

  receiveCollapsed($event: boolean) {
    this.collapedSideBar = $event;
  }
}
