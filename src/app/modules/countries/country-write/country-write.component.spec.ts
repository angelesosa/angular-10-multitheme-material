import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryWriteComponent } from './country-write.component';

describe('CountryWriteComponent', () => {
  let component: CountryWriteComponent;
  let fixture: ComponentFixture<CountryWriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryWriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryWriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
