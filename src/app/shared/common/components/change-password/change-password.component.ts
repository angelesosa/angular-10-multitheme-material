import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { LocalStorageService } from '../../../core/services/local-storage.service';
import { ToasterService } from '../../../core/services/toaster.service';
import { AuthService } from '../../../../modules/auth/auth.service';
import { MyValidator } from '../../../core/components/atoms/atoms-form-field/control-error/my-validator';
import { SessionService } from '../../../../modules/auth/session.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  iconPass = 'visibility';
  typePass = 'password';
  hidePassword = false;

  iconOldPass = 'visibility';
  typeOldPass = 'password';
  hideOldPassword = false;

  form: FormGroup;
  userInfo: any;

  constructor(
    private formBuilder: FormBuilder,
    private authSvc: AuthService,
    private toast: ToasterService,
    private sessionSvc: SessionService,
    public dialogRef: MatDialogRef<ChangePasswordComponent>,
    @Inject(MAT_DIALOG_DATA) public dataRef: any
  ) { }

  ngOnInit(): void {
    this.form = this.createForm();
    this.userInfo = this.sessionSvc.getSession();
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
      this.authSvc.changePassword({ body: data, userId: this.userInfo.userId }).subscribe({
        next: (result: any) => {
          this.dialogRef.close(true);
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
