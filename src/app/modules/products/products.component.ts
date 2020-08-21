import { Component, OnInit, ViewChild } from '@angular/core';
import { TableMultifilterComponent } from '@core/components/table/table-multifilter/table-multifilter.component';
import { etc } from './products.etc';
import { HttpClientService } from '@common/services/http-client.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  etc = etc;
  countries: any[] = [];
  filters: any[] = [];

  @ViewChild(TableMultifilterComponent)
  tableMultifilter: TableMultifilterComponent;

  constructor(
    private httpClient: HttpClient,
    private httpClientSvc: HttpClientService,
    private router: Router
  ) {
    this.getProducts();
  }

  getProducts():void {

    let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.set('Content-type', 'application/json; charset=utf-8');
    // let httpHeaders = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
    httpHeaders = httpHeaders.append('user_id', '1');
    httpHeaders = httpHeaders.append('user_token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoiY2FybG9zLnRlZXZpbkBnbWFpbC5jb20iLCJ0b2tlbkdlbmVyYXRpb25UaW1lc3RhbXAiOjE1OTgwMzkzODA3ODQsInRva2VuRXhwaXJhdGlvblRpbWVzdGFtcCI6MTU5ODA4MjU4MDc4NCwiaWF0IjoxNTk4MDM5MzgwfQ.m8rey7sfYk88NxPHAK27OuQj5g-HUDLxoLgS8ZOzmwQ');
    if (this.filters.length) {
      httpHeaders = httpHeaders.append( 'filters', JSON.stringify(this.filters) );
    }
    this.httpClient.get('https://888fibo.proyectoexiste.com/customer/v1/products', {
        headers: httpHeaders,
      }).subscribe((resp: any) => {
        this.tableMultifilter.chargeDataTable(resp.data.items.map( ( item, i ) => {
          item['active'] = etc.active[item.active].label;
          item['actions'] = etc.listActions;
          return item;
        }));
      });
  }

  ngOnInit(): void {
  }

  handleFilter(event: any): void {
    console.log(event);
    this.filters = event;
    this.getProducts();
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
