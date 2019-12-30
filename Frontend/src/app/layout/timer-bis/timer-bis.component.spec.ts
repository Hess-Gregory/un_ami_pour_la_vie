/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { TimerBisComponent } from './timer-bis.component';
import { DebugElement, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClient } from '@angular/common/http';

describe('TimerBisComponent', () => {
  let component: TimerBisComponent;
  let fixture: ComponentFixture<TimerBisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TimerBisComponent],

      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [HttpClient]
    }).compileComponents();
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
