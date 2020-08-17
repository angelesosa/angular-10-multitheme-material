import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-toolbar-profile-icon',
  templateUrl: './toolbar-profile-icon.component.html',
  styleUrls: ['./toolbar-profile-icon.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ToolbarProfileIconComponent implements OnInit {
  @Input() imgsrc;
  @Input() firstname = '';
  @Input() large = false;

  constructor() {}

  ngOnInit(): void {
    this.firstname = this.firstname.charAt(0);
  }
}
