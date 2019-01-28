import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MouseWheelComponent } from './mouse-wheel.component';

describe('MouseWheelComponent', () => {
  let component: MouseWheelComponent;
  let fixture: ComponentFixture<MouseWheelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MouseWheelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MouseWheelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
