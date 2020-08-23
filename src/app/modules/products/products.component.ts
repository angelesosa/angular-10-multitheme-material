import { Component, OnInit, ViewChild } from '@angular/core';
import { TableMultifilterComponent } from '@core/components/table/table-multifilter/table-multifilter.component';
import { etc } from './products.etc';
import { Router } from '@angular/router';
import { IProduct } from './products.interface';
import { ToasterService } from '../../shared/core/services/toaster.service';
import { ProductsService } from './products.service';
import { filter, switchMap } from 'rxjs/operators';
import { ConfirmDialogService } from '../../shared/common/components/confirm-dialog/confirm-dialog.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  etc = etc;
  countries: IProduct[] = [];
  filters: any[] = [];

  filtersAllowed = [];

  token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoiY2FybG9zLnRlZXZpbkBnbWFpbC5jb20iLCJ0b2tlbkdlbmVyYXRpb25UaW1lc3RhbXAiOjE1OTgxNDEzMjkzMDQsInRva2VuRXhwaXJhdGlvblRpbWVzdGFtcCI6MTU5ODE4NDUyOTMwNCwiaWF0IjoxNTk4MTQxMzI5fQ.m0fgtwGt8AzJ_JtpOeTh4-dhGdpZOSA9i0ZkFZtJTEI';

  headers = [
    { key: `user_id`,  val: `1`},
    { key: `user_token`,  val: `${this.token}`},
  ];

  @ViewChild(TableMultifilterComponent)
  tableMultifilter: TableMultifilterComponent;

  constructor(
    private productSvc: ProductsService,
    private toast: ToasterService,
    private router: Router,
    private confirmSvc: ConfirmDialogService,
  ) {
    this.getProducts();
  }

  getProducts(): void {
    let headers = [
      { key: `user_id`,  val: `1`},
      { key: `user_token`,  val: `${this.token}`},
    ];
    if (this.filters.length) {
      headers.push( { key: 'filters', val: JSON.stringify(this.filters) } );
    }
    this.productSvc.items( { headers: headers } ).subscribe({
      next: (result) => {
        this.toast.success( { message: result['kindMessage'] } );
        this.tableMultifilter.chargeDataTable({
          rows: result.data.items.map(( item, i ) => {
            let actions = etc.listActions();
            !item.active && (actions.deactive.show = false);
            item.active && (actions.active.show = false);
            item['actions'] = Object.values(actions);
            item['active'] = etc.active[item.active].label;
            return item;
          }),
          filters: result.filtersAllowed
        });
        this.filtersAllowed = result.filtersAllowed;
      },
      error: (err) => {
        // this.loadingOverlay.hide();
        this.toast.error( { message: err['kindMessage'] } );
      }
    });

  }

  ngOnInit(): void {
  }

  handleFilter(event: any): void {
    this.filters = event;
    this.getProducts();
  }

  handleNew(event: any): void {
    this.router.navigate([`/products/write/new`]);
  }

  handleAction(event): void {
    const actions = Object.values(etc.listActions());
    const action = actions.find((item) => item.action === event.action);
    this[action.function](event.row);
  }

  handleEdit(row: IProduct): void {
    this.router.navigate([`/products/write/${row.productId}`]);
  }

  handleActive(item: IProduct): void {
    this.confirmSvc
      .confirm({msg: `Esta a punto de activar el pais (${item.productId}). ¿Proceder?`})
      .pipe(
        filter((confirm) => confirm),
        switchMap(() => {
          return this.productSvc.activateItem({ id: item.productId, headers: this.headers });
        })
      )
      .subscribe({
        next: (result) => {
          this.getProducts();
          this.toast.success( { message: result['kindMessage'] } );
        },
        error: (err) => {
          this.toast.error( { message: err['kindMessage'] } );
        }
      });
  }

  handleDeactive(item: IProduct): void {
    this.confirmSvc
      .confirm({msg: `Esta a punto de desactivar el pais (${item.productId}). ¿Proceder?`})
      .pipe(
        filter((confirm) => confirm),
        switchMap(() => {
          return this.productSvc.deactivateItem({ id: item.productId, headers: this.headers });
        })
      )
      .subscribe({
        next: (result) => {
          this.getProducts();
          this.toast.success( { message: result['kindMessage'] } );
        },
        error: (err) => {
          this.toast.error( { message: err['kindMessage'] } );
        }
      });
  }

}
