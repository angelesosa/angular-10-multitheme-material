import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavItemLayoutComponent } from './side-nav-item-layout.component';

describe('SideNavItemLayoutComponent', () => {
  let component: SideNavItemLayoutComponent;
  let fixture: ComponentFixture<SideNavItemLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideNavItemLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavItemLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
