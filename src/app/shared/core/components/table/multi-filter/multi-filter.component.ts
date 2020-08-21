import { Component, OnInit, ElementRef, ViewChild, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent, MatAutocomplete } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { IFilter } from './multi-filter.interface';
import { etc } from "./multi-filter.etc";

@Component({
  selector: 'app-multi-filter',
  templateUrl: './multi-filter.component.html',
  styleUrls: ['./multi-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultiFilterComponent implements OnInit {

  @Input() allFilters: IFilter[] = [];

  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER];
  filterCtrl = new FormControl();
  $filtered: Observable<IFilter[]>;
  filters: IFilter[] = [];
  filteredList: IFilter[] = [];

  filterKeySelected = '';
  hasOptionsSelected = false;
  hint = '';

  @Output() runFilter = new EventEmitter();

  @ViewChild('filterInput') filterInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  constructor() {
    this.$filtered = this.filterCtrl.valueChanges.pipe(
        startWith(null),
        map((search: string | null) => {
          if(search && search.includes(':')) {
            this.filteredList = this._filterOptions(search.split(':')[0]).filter(filter => filter.label.toLowerCase().indexOf(search.toLowerCase()) === 0);
            return this.filteredList;
          }
          return search ? this._filter(search) : this.allFilters.slice();
        }
    ));
  }

  ngOnInit(): void {
  }

  add(event: MatChipInputEvent): void {
    const value = event.value;
    if( !value || ( value.includes(':') && !value.split(':')[1] )) {
      this.filterInput.nativeElement.value = `${value}`;
      this.filterCtrl.setValue(`${value}`);
      return;
    }
    this.addFilter(value);
  }

  remove(filter: IFilter): void {
    const index = this.filters.indexOf(filter);

    if (index >= 0) {
      this.filters.splice(index, 1);
    }
    this.handleGenerateFilter();
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.addFilter(event.option.viewValue);

  }

  private _filter(value: string): IFilter[] {
    const filterValue = value.toLowerCase();
    this.filterKeySelected = '';
    this.hint = '';
    return this.allFilters.filter(filter => filter.label.toLowerCase().indexOf(filterValue) === 0);
  }

  private _filterOptions(value: string): IFilter[] {
    let filterSelected = this.allFilters.find( filter => filter.label.toLowerCase() === value.toLowerCase() );
    if (!filterSelected) return[];
    this.filterKeySelected = filterSelected.key;
    this.hasOptionsSelected = filterSelected.hasOption;
    this.hint = filterSelected.hint;
    return filterSelected.options && filterSelected.options.map( filterOption => {
      let filter: IFilter = { key: '', label: '' };
      filter.key = `${filterSelected.key}/${filterOption.key}`;
      filter.label =  `${filterSelected.label}:${filterOption.label}`;
      return filter;
    }) || [];
  }



  addFilter( value: string ): void {
    if ( value.includes(':') ) {
      let filterSelected = this.filteredList.find( filter => filter.label.toLowerCase() === value.toLowerCase() );
      this.hasOptionsSelected && filterSelected && this.filters.push( filterSelected );
      !this.hasOptionsSelected && this.filters.push( this.generateFilter(value) );
      this.filterInput.nativeElement.value = '';
      this.filterCtrl.setValue(null);
      this.hint = '';
      this.handleGenerateFilter();
      // this.filterInput.nativeElement.blur();
    } else {
      let filterSelected = this.allFilters.find( filter => filter.label.toLowerCase() === value.toLowerCase() );
      if (!filterSelected) return;
      this.filterInput.nativeElement.value = `${value}:`;
      this.filterCtrl.setValue(`${value}:`);
    }
  }

  generateFilter( value: string ): IFilter {
    return {
      key: `${this.filterKeySelected}/${value.split(':')[1]}`,
      label: value,
    };
  }

  handleGenerateFilter() {
    const filters = this.filters.map( item => {
      return {
        key: item.key.split('/')[0],
        val: item.key.split('/')[1]
      };
    });
    this.runFilter.emit( filters );
  }

}
