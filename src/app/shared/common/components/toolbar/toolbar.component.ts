import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Input() menuGroupListOpened;
  @Input() sideNavOpened;
	@Output() clickMenuToggle = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClickMenuToggle() {
	  this.clickMenuToggle.emit();
  }

}
