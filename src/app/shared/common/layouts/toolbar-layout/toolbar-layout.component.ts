import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-toolbar-layout',
  templateUrl: './toolbar-layout.component.html',
  styleUrls: ['./toolbar-layout.component.scss']
})
export class ToolbarLayoutComponent implements OnInit {

  @Input() sideNavOpened: boolean;
  @Output() clickSideNavToggle = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onclickSideNavToggle() {
	  this.clickSideNavToggle.emit();
  }

}
