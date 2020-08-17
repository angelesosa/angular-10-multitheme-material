import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ErrorMessage } from './error-message';

@Component({
  selector: 'app-control-error',
  templateUrl: './control-error.component.html',
  styleUrls: ['./control-error.component.scss']
})
export class ControlErrorComponent implements OnInit {

  @Input() control: FormControl
  constructor() { }

  get errorMessage() {
    for (let propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && this.control.dirty) {
        return ErrorMessage.getValitorMessage(
          propertyName,
          this.control.errors[propertyName]
        );
      }
    }
    return null;
  }

  ngOnInit() {
  }

}
