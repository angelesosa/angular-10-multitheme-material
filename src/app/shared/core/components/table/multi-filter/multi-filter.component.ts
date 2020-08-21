import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
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
  styleUrls: ['./multi-filter.component.scss']
})
export class MultiFilterComponent implements OnInit {

  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER];
  filterCtrl = new FormControl();
  $filtered: Observable<IFilter[]>;
  filters: IFilter[] = [];
  allFilters: IFilter[] = etc.allFilters;
  filteredList: IFilter[] = [];

  filterKeySelected = '';
  hasOptionsSelected = false;
  reglas = '';

  @ViewChild('filterInput') filterInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  constructor() {
    this.$filtered = this.filterCtrl.valueChanges.pipe(
        startWith(null),
        map((search: string | null) => {
          if(search && search.includes(':')) {
            this.filteredList = this._filterOptions(search.split(':')[0]).filter(filter => filter.name.toLowerCase().indexOf(search.toLowerCase()) === 0);
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
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.addFilter(event.option.viewValue);

  }

  private _filter(value: string): IFilter[] {
    const filterValue = value.toLowerCase();
    this.filterKeySelected = '';
    this.hasOptionsSelected = false;
    this.reglas = '';
    return this.allFilters.filter(filter => filter.name.toLowerCase().indexOf(filterValue) === 0);
  }

  private _filterOptions(value: string): IFilter[] {
    let filterSelected = this.allFilters.find( filter => filter.name.toLowerCase() === value.toLowerCase() );
    if (!filterSelected) return[];
    this.filterKeySelected = filterSelected.id;
    this.hasOptionsSelected = filterSelected.hasOption;
    this.reglas = filterSelected.reglas;
    return filterSelected.options && filterSelected.options.map( filterOption => {
      let filter: IFilter = { id: '', name: '' };
      filter.id = `${filterSelected.id}/${filterOption.id}`;
      filter.name =  `${filterSelected.name}:${filterOption.name}`;
      return filter;
    }) || [];
  }



  addFilter( value: string ): void {
    if ( value.includes(':') ) {
      let filterSelected = this.filteredList.find( filter => filter.name.toLowerCase() === value.toLowerCase() );
      this.hasOptionsSelected && filterSelected && this.filters.push( filterSelected );
      !this.hasOptionsSelected && this.filters.push( this.generateFilter(value) );
      this.filterInput.nativeElement.value = '';
      this.filterCtrl.setValue(null);
      this.reglas = '';
      // this.filterInput.nativeElement.blur();
    } else {
      let filterSelected = this.allFilters.find( filter => filter.name.toLowerCase() === value.toLowerCase() );
      if (!filterSelected) return;
      this.filterInput.nativeElement.value = `${value}:`;
      this.filterCtrl.setValue(`${value}:`);
    }
  }

  generateFilter( value: string ): IFilter {
    return {
      id: `${this.filterKeySelected}/${value.split(':')[1]}`,
      name: value,
    };
  }

}
