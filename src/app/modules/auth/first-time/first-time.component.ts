import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, AbstractControl, ValidationErrors, ValidatorFn, FormGroup } from '@angular/forms';
import { MyValidator } from '../../../shared/core/components/atoms/atoms-form-field/control-error/my-validator';
import { AuthService } from '../auth.service';
import { ToasterService } from '../../../shared/core/services/toaster.service';
import { LocalStorageService } from '../../../shared/core/services/local-storage.service';

@Component({
  selector: 'app-first-time',
  templateUrl: './first-time.component.html',
  styleUrls: ['./first-time.component.scss']
})
export class FirstTimeComponent implements OnInit {

  iconPass = 'visibility';
  typePass = 'password';
  hidePassword = false;

  iconOldPass = 'visibility';
  typeOldPass = 'password';
  hideOldPassword = false;

  form: FormGroup;
  userInfo: any;
  headers = [];

  constructor(
    private formBuilder: FormBuilder,
    private authSvc: AuthService,
    private toast: ToasterService,
    private lsSvc: LocalStorageService,
  ) { }

  ngOnInit(): void {
    this.form = this.createForm();
    this.userInfo = this.lsSvc.getItem('dIlxoP', true);
    this.headers = [
      { key: 'user_id', val: `${this.userInfo.userId}` },
      { key: 'user_token', val: `${this.userInfo.token}` },
    ]
  }

  createForm(): FormGroup {
    return this.formBuilder.group({
      oldPassword: ['', Validators.compose([MyValidator.required])],
      newPassword: ['', Validators.compose([
        MyValidator.required,
        this.patternValidator(/\d/, { hasNumber: true }),
        this.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
        this.patternValidator(/[a-z]/, { hasSmallCase: true }),
        MyValidator.minLength(5),
        MyValidator.maxLength(20)
      ])]
    });
  }

  handleSubmit(): void {
    if (this.form.valid) {
      let data = this.form.getRawValue();
      // this.$subscription.add(
      this.authSvc.changePasswordFisrtTime({ headers: this.headers, body: data, userId: this.userInfo.userId }).subscribe({
        next: (result: any) => {
          this.lsSvc.remove('dIlxoP');
          this.toast.success({ message: result.message });
        },
        error: (err) => {
          this.toast.error({ message: err.kindMessage });
        }
      });
      // )
    }
  }

  get f() {
    return this.form.controls;
  }

  private patternValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        // if control is empty return no error
        return null;
      }
      // test the value of the control against the regexp supplied
      const valid = regex.test(control.value);
      // if true, return no error (no error), else return error passed in the second parameter
      return valid ? null : error;
    };
  }

  clickIconPass(): void {
    this.hidePassword = !this.hidePassword;
    this.iconPass = this.hidePassword ? 'visibility_off' : 'visibility';
    this.typePass = this.hidePassword ? 'text' : 'password';
  }

  clickIconOldPass(): void {
    this.hideOldPassword = !this.hideOldPassword;
    this.iconOldPass = this.hideOldPassword ? 'visibility_off' : 'visibility';
    this.typeOldPass = this.hideOldPassword ? 'text' : 'password';
  }

}
