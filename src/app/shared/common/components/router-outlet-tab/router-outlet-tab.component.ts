import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { ITabMenu } from '@common/models/tab-menu';
@Component({
  selector: 'app-router-outlet-tab',
  templateUrl: './router-outlet-tab.component.html',
  styleUrls: ['./router-outlet-tab.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class RouterOutletTabComponent implements OnInit {

  @Input() navLinks: ITabMenu[] = [];

  constructor() {}

  ngOnInit(): void {}
}
