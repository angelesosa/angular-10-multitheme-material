import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstTimeComponent } from './first-time.component';

describe('FirstTimeComponent', () => {
  let component: FirstTimeComponent;
  let fixture: ComponentFixture<FirstTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
