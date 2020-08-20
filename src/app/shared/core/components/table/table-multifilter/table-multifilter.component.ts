import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { FormControl } from '@angular/forms';
import { LocalStorageService } from 'app/shared/core/services/local-storage.service';
import { ExportCsvService } from '../../../services/export-csv.service';

@Component({
  selector: 'app-table-multifilter',
  templateUrl: './table-multifilter.component.html',
  styleUrls: ['./table-multifilter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableMultifilterComponent implements OnInit {

  @Input() tableId: string;
  @Input() columns: any[];
  @Input() pageSize: string;
  @Input() pageSizeOptions: string[];

  @Input() actions = false;
  @Input() index = false;

  @Input() listStatus: any[];
  @Input() showStatus = false;
  @Input() statusSelected = '';

  @Input() filters: any[];
  @Input() showFilters = false;
  @Input() filterSelected = '';
  filterValue = '';

  @Input() showBtnDownload = false;
  @Input() showBtnAdd = false;

  displayedColumns: string[] = [];
  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatPaginator) paginator: MatPaginator;


  @Output() clicBtn = new EventEmitter();
  @Output() runFilter = new EventEmitter();
  @Output() newRegister = new EventEmitter();

  columnsSelected = new FormControl();

  constructor(
    private lsSvc: LocalStorageService,
    private eCvsSvc: ExportCsvService
  ) {
  }

  ngOnInit(): void {
    this.columnsSelected.setValue(this.handleDisplayCols());
  }

  handleDisplayCols(): string[] {
    // this.lsSvc.remove(`tc_${this.tableId}`);
    let lsCols = this.lsSvc.getItem(`tc_${this.tableId}`, true);
    if (lsCols) {
      this.displayedColumns = lsCols;
    } else {
      this.displayedColumns = this.columns.map(column => column.key );
      this.index && this.displayedColumns.unshift('index');
      this.actions && this.displayedColumns.push('actions');
    }
    return this.displayedColumns;
  }

  chargeDataTable(rows: []): void {
    this.dataSource = new MatTableDataSource<any>(rows);
    this.dataSource.paginator = this.paginator;
  }

  handleAction(action, row: any): void {
    this.clicBtn.emit( { action: action.action, row } );
  }

  handleStatus(event: string): void {
    this.statusSelected = event;
    this.handleRefresh();
  }

  handleFilterKey(event: string): void {
    this.filterSelected = event;
    this.handleRefresh();
  }

  handleFilterValue(event: string): void {
    this.filterValue = event;
    this.handleRefresh();
  }

  handleRefresh(): void {
    this.runFilter.emit( { status: this.statusSelected, filterKey: this.filterSelected, filterValue: this.filterValue } );
  }

  handleNew(): void {
    this.newRegister.emit( true );
  }

  exportToCsv(): void {
    const data = this.dataSource.filteredData.map(item => {
      let newItem = {};
      this.columns.map(row => {
        newItem[row.key] = item[row.key];
      });
      return newItem;
    });
    this.eCvsSvc.exportCsv('cursos', data);
  }

  chooseColumns(event): void {
    this.lsSvc.setItem(`tc_${this.tableId}`, event, true);
    this.handleDisplayCols();
  }

}
