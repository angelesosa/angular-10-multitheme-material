import { Component, OnInit, Output, EventEmitter, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'app-side-nav-layout',
	templateUrl: './side-nav-layout.component.html',
  styleUrls: ['./side-nav-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideNavLayoutComponent implements OnInit {

	@Output() sideNavExpanded = new EventEmitter<boolean>();

	@Input() isExpanded = true;

	constructor() {}

	ngOnInit(): void {}

	toggle() {
		this.isExpanded = !this.isExpanded;
		this.isExpanded ? this.sideNavExpanded.emit(true) : this.sideNavExpanded.emit(false);
	}
}
