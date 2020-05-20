import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';

import { UsersInfoComponent } from './users-info.component';
import { UsersInfoModule } from './users-info.module';
import { HttpClientModule } from '@angular/common/http';

describe('UsersInfoComponent', () => {
  let component: UsersInfoComponent;
  let fixture: ComponentFixture<UsersInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        UsersInfoModule,
        RouterTestingModule,
        HttpClientModule,
        TranslateModule.forRoot()
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
