import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../countries.service';
import { Country } from '../countries.interface';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MyValidator } from './../../../shared/core/components/atoms/atoms-form-field/control-error/my-validator';
import { ToasterService } from '../../../shared/core/services/toaster.service';
import { LoadingOverlayService } from '../../../shared/common/components/loading-overlay/loading-overlay.service';

@Component({
  selector: 'app-country-write',
  templateUrl: './country-write.component.html',
  styleUrls: ['./country-write.component.scss']
})
export class CountryWriteComponent implements OnInit {

  id = '';
  country = new Country();

  pageType = '';
  form: FormGroup;

  constructor(
    public activatedRoute: ActivatedRoute,
    private router: Router,
    private _svc: CountriesService,
    private formBuilder: FormBuilder,
    private loadingOverlay: LoadingOverlayService,
    // private toast: ToasterService,
  ) {
    this.activatedRoute.params.subscribe( params => {
      this.id = params['id'];
      console.log(this.id);
      this._svc.item(this.id).subscribe({
        next: (result: any) => {
          // this.toast.show(result.kindMessage, '', '', 'success');
          // this.country = new Country(result.data.item);
          // this.form = this.createForm(this.country);
        },
        error: (err) => {
          this.loadingOverlay.hide();
          // this.toast.show(err['kindMessage'], '', '', 'error');
        }
      });
    });


  }

  ngOnInit(): void {
    this.form = this.createForm(this.country);
  }

  createForm(model: Country): FormGroup {
    return this.formBuilder.group({
      name: [model.name, Validators.compose( [ MyValidator.required, MyValidator.minLength(1) ] ) ],
      capital: [''],
    });
  }

  handleSubmit(): void {
    console.log('guardando');
    this.router.navigate(['/countries']);
  }

  handleCancel(): void {
    this.router.navigate(['/countries']);
  }

}
