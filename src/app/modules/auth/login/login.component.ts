import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MyValidator } from '../../../shared/core/components/atoms/atoms-form-field/control-error/my-validator';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';
import { ToasterService } from '../../../shared/core/services/toaster.service';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../../shared/core/services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  iconPass = 'visibility';
  typePass = 'password';
  hidePassword = false;

  form: FormGroup;

  $subscription: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private authSvc: AuthService,
    private toast: ToasterService,
    private router: Router,
    private lsSvc: LocalStorageService,
  ) { }

  ngOnInit(): void {
    this.form = this.createForm();
  }

  createForm(): FormGroup {
    return this.formBuilder.group({
      email: ['', Validators.compose([MyValidator.email, MyValidator.required])],
      password: ['', Validators.required]
    });
  }


  handleSubmit(): void {
    if (this.form.valid) {
      const data = this.form.getRawValue();
      const dataLogin = { username: data.email, password: data.password };
      // this.$subscription.add(
      this.authSvc.login({ body: dataLogin }).subscribe({
        next: (result: any) => {
          result.changePassword && this.lsSvc.setItem(`dIlxoP`, { token: result.token, ...result.info }, true);
          result.changePassword ? this.router.navigate(['/auth/first-time']) : this.router.navigate(['/home']);
        },
        error: (err) => {
          this.toast.error({ message: err.kindMessage });
        }
      });
      // )
    }
  }

  clickIconPass(): void {
    this.hidePassword = !this.hidePassword;
    this.iconPass = this.hidePassword ? 'visibility_off' : 'visibility';
    this.typePass = this.hidePassword ? 'text' : 'password';
  }

}
