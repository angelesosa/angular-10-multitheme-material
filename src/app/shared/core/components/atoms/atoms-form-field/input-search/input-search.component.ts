import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, OnChanges, forwardRef } from '@angular/core';
import { AlingIcon } from '../theme.enum';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';
import { ErrorMessage } from '../control-error/error-message';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputSearchComponent),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputSearchComponent implements ControlValueAccessor, OnInit {

  @Input() alignIcon: string;
  //type input
  @Input() type: string;

  @Output() keyEnter = new EventEmitter();

  @Input() error: any;
  @Input() errorMessage: string;

  icon: string;
  appearance: string;
  value = new FormControl();
  isDisabled: boolean;
  onChange = (_: any) => { };
  onTouch = () => { };

  onInput(value: string) {
    this.icon = value ? 'clear' : 'search';
    this.onTouch();
    this.onChange(this.value.value);
  }

  constructor() { }

  ngOnInit(): void {
    this.icon = 'search';
    this.alignIcon = this.alignIcon ? AlingIcon[this.alignIcon] : AlingIcon.default;
    this.value.disable();
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

  setOnClick(): void {
    if (this.icon === 'clear') {
      this.value.setValue('');
      this.onChange(this.value.value);
      this.icon = 'search';
    } else if (this.icon === 'search') {
      this.appearance = 'outline';
    }
    this.value.enable();
  }

  esc(): void {
    this.value.disable();
    this.value.setValue('');
    this.onChange(this.value.value);
    this.icon = 'search';
    this.appearance = '';
  }

  setEnter(): void {
    this.keyEnter.emit(this.value.value);
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

}
