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
  filteredFruits: Observable<IFilter[]>;
  filters: IFilter[] = [];
  allFilters: IFilter[] = etc.allFilters;

  reglas = '';

  @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  constructor() {
    this.filteredFruits = this.filterCtrl.valueChanges.pipe(
        startWith(null),
        map((search: string | null) => {
          if(search && search.includes(':')) {
            return this._filterOptions(search.split(':')[0]).filter(fruit => fruit.name.toLowerCase().indexOf(search.toLowerCase()) === 0);
          }
          return search ? this._filter(search) : this.allFilters.slice()
        }
    ));
  }

  ngOnInit(): void {
  }

  add(event: MatChipInputEvent): void {
    const value = event.value;
    console.log('tecla',value )
    if( !value || ( value.includes(':') && !value.split(':')[1] ))
      return
    // Add our fruit
    this.addFilter(value)
  }

  remove(fruit: IFilter): void {
    const index = this.filters.indexOf(fruit);

    if (index >= 0) {
      this.filters.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    console.log('select',event.option.viewValue)
    this.addFilter(event.option.viewValue);

  }

  private _filter(value: string): IFilter[] {
    const filterValue = value.toLowerCase();
    return this.allFilters.filter(fruit => fruit.name.toLowerCase().indexOf(filterValue) === 0);
  }

  private _filterOptions(value: string): IFilter[] {
    let fruitSelected = this.allFilters.find( fruit => fruit.name.toLowerCase() === value.toLowerCase() ) || {id:'',name:'',hasOption:false,options: []}
    return fruitSelected.options && fruitSelected.options.map( fruitOption => {
      let fruit: IFilter= {id: '',name:''};
      fruit.id = `${fruitSelected.id}/${fruitOption.id}`;
      fruit.name =  `${fruitSelected.name}:${fruitOption.name}`;
      return fruit;
    }) || [];
  }



  addFilter( value : string ) {
    if( value.includes(':') ) {
      let fruitSelected = this.allFilters.find( fruit => fruit.name.toLowerCase() === value.toLowerCase() )
      fruitSelected && this.filters.push(fruitSelected);
      this.fruitInput.nativeElement.value = '';
      this.filterCtrl.setValue(null);
      this.fruitInput.nativeElement.blur();
    } else {
      this.fruitInput.nativeElement.value = `${value}:`;
      this.filterCtrl.setValue(`${value}:`);
      this.fruitInput.nativeElement
    }
  }

}
