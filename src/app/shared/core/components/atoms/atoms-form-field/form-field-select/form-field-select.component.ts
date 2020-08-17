import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, OnChanges, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';
import { ErrorMessage } from '../control-error/error-message';

@Component({
  selector: 'app-form-field-select',
  templateUrl: './form-field-select.component.html',
  styleUrls: ['./form-field-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormFieldSelectComponent),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormFieldSelectComponent implements ControlValueAccessor, OnInit {

  @Input() appearance: string;
  @Input() label: string;
  @Input() icon: string;
  @Input() options;
  @Input() display = "display";
  @Input() key = "key";

  @Input() isDisabled: boolean = false;

  @Output() rowSelect = new EventEmitter();

  @Input() error: any;
  @Input() errorMessage: string;

  // value: string;
  // isDisabled: boolean;
  onChange = (_: any) => { };
  onTouch = () => { };

  value = new FormControl();

  onSelect(value: string): void {
    // this.value.setValue(value);
    this.onTouch();
    this.onChange(this.value.value);
    this.printRow();
  }

  constructor() { }

  ngOnInit(): void {
  }

  writeValue(value: any): void {
    this.value.setValue(value || '');
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  getMessage(): string {
    if (this.errorMessage) return this.errorMessage;
    for (let propertyName in this.error.errors) {
      if (this.error.errors.hasOwnProperty(propertyName) && this.error.dirty) {
        return ErrorMessage.getValitorMessage(
          propertyName,
          this.error.errors[propertyName]
        );
      }
    }
  }

  printRow(): void {
    this.rowSelect.emit(this.options.find( row => row[this.key] === this.value.value ));
  }

}
