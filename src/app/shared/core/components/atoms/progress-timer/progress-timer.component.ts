import { Component, OnInit, AfterViewInit, Input, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-progress-timer",
  templateUrl: "./progress-timer.component.html",
  styleUrls: ["./progress-timer.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressTimerComponent implements OnInit, AfterViewInit {
  color = "primary";
  mode = "determinate";

  @Input() totalTime: number;

  @Input() leftoverTime = 0; // tiempo restante

  totalProgress = 100;
  progress: number;

  constructor() {}

  ngOnInit(): void {
  }

  ngAfterViewInit() {
  }

  calcularProgress() {
    this.progress = Math.floor((this.leftoverTime * this.totalProgress) / this.totalTime);
    if (this.progress < 80 && this.progress > 40) {
      this.color = "accent";
    } else if (this.progress < 40) {
      this.color = "warn";
    }
  }
}
