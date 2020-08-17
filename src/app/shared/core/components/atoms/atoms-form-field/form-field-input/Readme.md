# Input of form use material


## Input for form field
* `<app-form-field-input>` Is an Input component that use in a Form


## Basic Usage Example
### Import AtomsFormFieldModule in your *.module.ts:
* import { AtomsFormFieldModule } from './shared/core/atoms-form-field/atoms-form-field.module';
### Add the AtomsFormFieldModule View:
* `<app-form-field-input label="este es un label" appearance="legacy" formControlName="user" type="text"> </app-form-field-input>`


## Supported Attributes

| Attribute | type | required | description |
| --- | --- | --- | --- |
| appearance | string | true | accept two values:  'legacy' and 'outline' |
| floatLabel | string | false | Is the position of label, accept two values:  'auto' and 'always', default is 'auto' |
| label | string | false | Is a label for your input |
| placeholder | string | false | Is a placeholder for your input |
| icon | string | false | Consult in: [icons](https://material.io/resources/icons/?style=baseline) |
| alignIcon | string | false | Is the align of icon, accept two values:  'right' and 'left', default is 'right' |
| type | string | true | Accept values:  'text', 'number', 'password', 'date' |
| mask | string | false | Consult in: [npm ngx-mask](https://www.npmjs.com/package/ngx-mask#then) |

