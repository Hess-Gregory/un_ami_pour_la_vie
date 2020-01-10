import { Component, OnInit, ViewChild } from '@angular/core';
import {
  rotateInDownLeftOnEnterAnimation,
  rollInAnimation,
  zoomInDownOnEnterAnimation,
  hueRotateAnimation
} from 'angular-animations';

@Component({
  selector: 'app-jumbo-user',
  templateUrl: './jumbo-user.component.html',
  styleUrls: ['./jumbo-user.component.scss'],
  animations: [
    rotateInDownLeftOnEnterAnimation({ anchor: 'enter' }),
    zoomInDownOnEnterAnimation({ anchor: 'enterLetterAnim' }),
    rollInAnimation({ anchor: 'letterAnim' }),
    hueRotateAnimation({ anchor: 'hueLetter', duration: 5000 })
  ]
})
export class JumboUserComponent implements OnInit {
  Module: any = sessionStorage.getItem('Module');
  ModuleName = this.Module.split('');
  typeIcon: any = sessionStorage.getItem('typeIcon');
  typeIconName = this.typeIcon;
  typeMatIcons = false;
  typeAwesone = false;
  iconName = '';
  awesone: any = sessionStorage.getItem('nameIcon');

  animationState = false;
  animationWithState = false;
  hueState = false;
  hueBtnState = false;
  flashState = false;

  constructor() {
    setTimeout(() => {
      this.iconName = this.awesone;
    }, 6000);
  }

  getDelay(index: number, lenght: number) {
    if (index < lenght / 2 - 2) {
      return index * 100;
    } else {
      return lenght * 100 - index * 100;
    }
  }

  ngOnInit() {
    if (this.typeIconName === 'Awesone') {
      this.typeAwesone = true;
    }
    if (this.typeIconName === 'MatIcons') {
      this.typeMatIcons = true;
    }
  }
}
