import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-progress-mat',
  templateUrl: './progress-mat.component.html',
  styleUrls: ['./progress-mat.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressMatComponent implements OnInit {

  @Input() bgColor = '#0000001a';
  @Input() color = 'primary';
  @Input() diameter = 200;
  @Input() classContent = '';

  constructor() { }

  ngOnInit(): void {
  }

}
