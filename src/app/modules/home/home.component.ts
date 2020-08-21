import { Component, OnInit } from '@angular/core';
import { ThemeService } from '@core/services/theme.service';
import { etc } from "./multi-filter.etc";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private themeSvc: ThemeService) { }

  etc = etc

  ngOnInit(): void {
  }


  theme(name: string) {
    this.themeSvc.reset();
    this.themeSvc.apply(name);
  }

  printFilter(filters) {
    console.log(filters)
  }

}
