import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-side-nav-toggle',
  templateUrl: './side-nav-toggle.component.html',
  styleUrls: ['./side-nav-toggle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideNavToggleComponent implements OnInit {

  @Input() menuGroupListOpened = true;

  constructor() { }

  ngOnInit(): void {
  }

}
