import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoAuthComponent } from './logo-auth.component';

describe('LogoComponent', () => {
  let component: LogoAuthComponent;
  let fixture: ComponentFixture<LogoAuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoAuthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
