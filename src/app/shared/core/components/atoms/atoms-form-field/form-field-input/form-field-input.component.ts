import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, OnChanges, forwardRef, ViewEncapsulation } from '@angular/core';
import { AlingIcon } from '../theme.enum';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';
import { ErrorMessage } from '../control-error/error-message';

@Component({
  selector: 'app-form-field-input',
  templateUrl: './form-field-input.component.html',
  styleUrls: ['./form-field-input.component.scss','./../general.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormFieldInputComponent),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  // encapsulation: ViewEncapsulation.None
})
export class FormFieldInputComponent implements ControlValueAccessor, OnInit {

  @Input() appearance: string;
  @Input() floatLabel = 'auto';
  @Input() label: string;
  @Input() placeholder: string;
  @Input() icon: string;
  @Input() alignIcon: string;
  //type input
  @Input() type: string;
  //mask input
  @Input() mask: string;
  @Input() showMaskTyped: string;
  @Input() suffix: string;
  @Input() prefix: string;


  @Input() isReadonly: boolean = false;
  @Input() dropSpecialCharacters = true;

  @Output() clickIcon = new EventEmitter();

  @Input() error: any;
  @Input() errorMessage: string;

  value = new FormControl();
  isDisabled: boolean;
  onChange = (_: any) => { };
  onTouch = () => { };

  onInput(value: string): void {
    // this.value = value;
    this.onTouch();
    this.onChange(this.value.value);
  }

  constructor() { }

  ngOnInit(): void {
    this.alignIcon = this.alignIcon ? AlingIcon[this.alignIcon] : AlingIcon.default;
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
    this.clickIcon.emit();
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
