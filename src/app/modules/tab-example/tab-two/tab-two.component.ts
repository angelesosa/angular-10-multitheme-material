import { Component, OnInit } from '@angular/core';
import { LoadingOverlayService } from '@common/components/loading-overlay/loading-overlay.service';

@Component({
  selector: 'app-tab-two',
  templateUrl: './tab-two.component.html',
  styleUrls: ['./tab-two.component.scss']
})
export class TabTwoComponent implements OnInit {

  constructor(private loading: LoadingOverlayService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.loading.show();
  }

}
