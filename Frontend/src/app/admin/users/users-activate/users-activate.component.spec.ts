import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';

import { UsersActivateComponent } from './users-activate.component';
import { UsersActivateModule } from './users-activate.module';

describe('UsersActivateComponent', () => {
  let component: UsersActivateComponent;
  let fixture: ComponentFixture<UsersActivateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        UsersActivateModule,
        RouterTestingModule,
        TranslateModule.forRoot()
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersActivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
