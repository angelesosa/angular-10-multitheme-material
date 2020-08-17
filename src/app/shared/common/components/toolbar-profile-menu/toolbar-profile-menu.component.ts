import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-toolbar-profile-menu',
  templateUrl: './toolbar-profile-menu.component.html',
  styleUrls: ['./toolbar-profile-menu.component.scss']
})
export class ToolbarProfileMenuComponent implements OnInit {

   @Input() imgsrc = '';
   @Input() fullName = '***';
   @Input() profile = '***';
   @Input() email = '***';

  constructor() { }

  ngOnInit(): void {
  }

}
