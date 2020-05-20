import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlAvatarComponent } from './control-avatar.component';

describe('ControlAvatarComponent', () => {
  let component: ControlAvatarComponent;
  let fixture: ComponentFixture<ControlAvatarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ControlAvatarComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
