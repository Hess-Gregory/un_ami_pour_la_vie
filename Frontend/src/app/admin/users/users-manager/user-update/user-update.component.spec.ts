
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { UserUpdateComponent } from './user-update.component';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';



describe('UserUpdateComponent', () => {
  let component: UserUpdateComponent;
  let fixture: ComponentFixture<UserUpdateComponent>;
  const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);
  class RouterStub {
    navigateByUrl(url: string) {
    return url;
    }
    }
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserUpdateComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [{provide: Router, useClass: RouterStub}],
      imports: [
        RouterTestingModule
        ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
