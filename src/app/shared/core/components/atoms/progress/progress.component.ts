import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressComponent implements OnInit {

  @Input() bgColor = '#0000001a';
  @Input() color = 'primary';
  @Input() diameter = 200;
  @Input() classContent = '';

  constructor() { }

  ngOnInit(): void {
  }

}
