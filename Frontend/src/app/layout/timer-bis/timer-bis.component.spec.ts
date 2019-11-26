/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TimerBisComponent } from './timer-bis.component';

describe('TimerBisComponent', () => {
  let component: TimerBisComponent;
  let fixture: ComponentFixture<TimerBisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerBisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerBisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
