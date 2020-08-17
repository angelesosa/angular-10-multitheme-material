import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { IMenuGroup } from '@common/models/menu-group';

@Component({
  selector: 'app-side-nav-menu-group-list',
  templateUrl: './side-nav-menu-group-list.component.html',
  styleUrls: ['./side-nav-menu-group-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideNavMenuGroupListComponent implements OnInit {

  @Input() menuGroupListOpened: boolean = true;
  @Input() menuGroups: IMenuGroup[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
