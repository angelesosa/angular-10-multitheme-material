import { Validators, FormControl, ValidatorFn, AbstractControl } from '@angular/forms';
import SCHEMA from './schema';

export class MyValidator extends Validators {

  static email(control: FormControl): { [key: string]: boolean } | null {
    if (control.value && control.value.length > 0) {
      return (control.value.match(SCHEMA.email) ? null : { invalid_email: true })
    }
  }

  static integer(control: FormControl): { [key: string]: boolean } | null {
    if (control.value && control.value.length > 0) {
      return (control.value.match(SCHEMA.numbers.integer) ? null : { invalid_number: true })
    }
    return null;
  }

  static password(control: FormControl): { [key: string]: boolean } | null {
    if (control.value && control.value.length > 0) {
      return (control.value.match(SCHEMA.password.hard) ? null : { invalid_password: true })
    }
    return null;
  }

  static lettersAccentSpaces(control: FormControl): { [key: string]: boolean } | null {
    if (control.value && control.value.length > 0) {
      return (control.value.match(SCHEMA.letters.accentAndSpaces) ? null : { invalid_letters_accent_spaces: true })
    }
    return null;
  }

  static alphanumeric(control: FormControl): { [key: string]: boolean } | null {
    if (control.value && control.value.length > 0) {
      return (control.value.match(SCHEMA.alphanumeric) ? null : { invalid_alphanumeric: true })
    }
    return null;
  }

  static limitMinMax(min: number, max: number): ValidatorFn {
    return (control: FormControl) => {
      if (control.value && !isNaN(control.value)) {
        let value = parseFloat(control.value);
        return value > max || value < min ? { limitMinMax: { min, max } } : null
      }
      return null;
    }
  }

  static validateIpAddress(control: FormControl) {
    if (control.value && control.value.length > 0) {
      return (control.value.match(SCHEMA.ipAddress)) ? null : { invalid_ipAddress: true };
    }
    else {
      return null;
    }
  }

  static checked(control: FormControl): {[key: string]: boolean} {
    return control.value ? null : { mustBeCheckedError : true };
  }

}
