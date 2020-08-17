import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, OnChanges, forwardRef } from '@angular/core';
import { AlingIcon } from '../theme.enum';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';
import { ErrorMessage } from '../control-error/error-message';

@Component({
  selector: 'app-input-edit',
  templateUrl: './input-edit.component.html',
  styleUrls: ['./input-edit.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputEditComponent),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputEditComponent implements ControlValueAccessor, OnInit {

  @Input() alignIcon: string;
  //type input
  @Input() type: string;
  @Input() appearance: any;
  @Input() label: string;

  @Output() keyEnter = new EventEmitter();

  //mask input
  @Input() mask: string;
  @Input() showMaskTyped: string;
  @Input() suffix: string;
  @Input() prefix: string;

  @Input() isReadonly: boolean = false;

  @Input() error: any;
  @Input() errorMessage: string;

  icon: string;
  defaultText: string;
  value = new FormControl();
  isDisabled: boolean;
  onChange = (_: any) => { };
  onTouch = () => { };

  onInput(value: string): void {
    this.icon = value !== this.defaultText ? 'save' : 'edit';
    this.onTouch();
    this.onChange(this.value.value);
  }

  constructor() { }

  ngOnInit(): void {
    this.icon = 'edit';
    this.alignIcon = this.alignIcon ? AlingIcon[this.alignIcon] : AlingIcon.default;
    this.isReadonly = true;
  }

  writeValue(value: any): void {
    this.value.setValue(value || '');
    this.defaultText = value || '';
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
    if (this.icon === 'save') {
      this.setEnter();
    } else if (this.icon === 'edit') {
      this.isReadonly = false;
    }
  }

  esc(): void {
    this.isReadonly = true;
    this.value.setValue(this.defaultText);
    this.onChange(this.value.value);
    this.icon = 'edit';
  }

  setEnter(): void {
    this.isReadonly = true;
    this.icon = 'edit';
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
