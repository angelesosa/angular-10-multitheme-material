import { Component, OnInit, Input, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { IMenu } from '@common/models/menu';

@Component({
  selector: 'app-side-nav-menu-item',
  templateUrl: './side-nav-menu-item.component.html',
  styleUrls: ['./side-nav-menu-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideNavMenuItemComponent implements OnInit {
  @Input() item: IMenu;
  @Input() menuGroupListOpened: boolean;
  @Input() extenalLink: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
