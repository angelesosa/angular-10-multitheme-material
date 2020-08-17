import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarProfileIconLayoutComponent } from './toolbar-profile-icon-layout.component';

describe('ToolbarProfileIconLayoutComponent', () => {
  let component: ToolbarProfileIconLayoutComponent;
  let fixture: ComponentFixture<ToolbarProfileIconLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbarProfileIconLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarProfileIconLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
