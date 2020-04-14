
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { UserDeleteComponent } from './user-delete.component';
import { HttpClient } from '@angular/common/http';

describe('UserDeleteComponent', () => {
  let component: UserDeleteComponent;
  let fixture: ComponentFixture<UserDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserDeleteComponent],

      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [HttpClient]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
