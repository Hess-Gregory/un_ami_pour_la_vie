import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';

import { AdminManagerComponent } from './admin-manager.component';
import { AdminManagerModule } from './admin-manager.module';

describe('AdminComponent', () => {
  let component: AdminManagerComponent;
  let fixture: ComponentFixture<AdminManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AdminManagerModule,
        RouterTestingModule,
        TranslateModule.forRoot()
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
