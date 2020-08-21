import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TablePaginationComponent } from '@core/components/table/table-pagination/table-pagination.component';
import { etc } from './countries.etc';
import { HttpClientService } from '@common/services/http-client.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
})
export class CountriesComponent implements OnInit {
  etc = etc;
  countries: any[] = [];

  @ViewChild(TablePaginationComponent)
  tablePagination: TablePaginationComponent;

  constructor(
    private httpClientSvc: HttpClientService,
    private router: Router
  ) {
      this.httpClientSvc.get({
        urlOrPath: 'https://restcountries.eu/rest/v2/lang/es',
        loadingOverlay: true,
        // headers: [{ key: string, value: string }]
      }).subscribe((resp: any) => {
        this.tablePagination.chargeDataTable(resp.map( ( item, i ) => {
          item['pKey'] = i + 1;
          item['actions'] = etc.listActions;
          return item;
        }));
      });
  }

  ngOnInit(): void {}

  handleFilter(event: any): void {
    console.log(event);
  }

  handleNew(event: any): void {
    this.router.navigate([`/countries/write/new`]);
  }

  handleAction(event): void {
    const action = etc.listActions.find((item) => item.action === event.action);
    this[action.function](event.row);
  }

  handleEdit(row: any): void {
    console.log(row);
  }
}
