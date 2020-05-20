import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { JumboUserComponent } from './jumbo-user.component';

describe('JumboUserComponent', () => {
  let component: JumboUserComponent;
  let fixture: ComponentFixture<JumboUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [JumboUserComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JumboUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
