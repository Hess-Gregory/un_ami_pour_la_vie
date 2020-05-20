import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { DragDropUniqueComponent } from './drag-drop-unique.component';

describe('DragDropUniqueComponent', () => {
  let component: DragDropUniqueComponent;
  let fixture: ComponentFixture<DragDropUniqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DragDropUniqueComponent],
      imports: [ReactiveFormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragDropUniqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
