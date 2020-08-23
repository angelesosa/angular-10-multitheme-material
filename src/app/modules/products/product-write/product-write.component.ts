import { Component, OnInit } from '@angular/core';
import { Product, IProduct } from '../products.interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';
import { ToasterService } from '../../../shared/core/services/toaster.service';
import { map, switchMap, filter } from 'rxjs/operators';
import { MyValidator } from '../../../shared/core/components/atoms/atoms-form-field/control-error/my-validator';

@Component({
  selector: 'app-product-write',
  templateUrl: './product-write.component.html',
  styleUrls: ['./product-write.component.scss']
})
export class ProductWriteComponent implements OnInit {

  id = '';
  product: Product;

  pageType = 'new';
  form: FormGroup;
  productTypes = [];

  constructor(
    public activatedRoute: ActivatedRoute,
    private router: Router,
    private productSvc: ProductsService,
    private formBuilder: FormBuilder,
    private toast: ToasterService,
  ) { }

  routeparam({ key }) {
    return this.activatedRoute.params.pipe(
      map((params) => {
        return params[key];
      })
    );
  }

  productItem({ id }) {
    return this.productSvc.item({ id }).pipe(
      map((result) => {
        return result.data.item;
      })
    );
  }

  productTypeItems() {
    return this.productSvc.productTypeItems({ }).pipe(
      map((result) => {
        return result.data.items;
      })
    );
  }

  ngOnInit(): void {
    this.form = this.createForm(new Product());
    this.productTypeItems()
      .pipe(
        switchMap((productTypes) => {
          this.productTypes = productTypes;
          // obtenemos el parametro
          return this.routeparam({ key: 'id' });
        }),
        filter((paramId) => paramId != 'new'),
        // filtramos que no sea new
        switchMap((paramId) => {
          this.pageType = 'upd';
          this.id = paramId;
          return this.productItem({ id: paramId });
        })
      )
      .subscribe((country: IProduct) => {
        this.form = this.createForm(new Product(country));
      });
  }

  sponsorOptions = [ {id: 1, name: 'Si'} , {id: 0, name: 'No'} ];

  createForm(model: Product): FormGroup {
    return this.formBuilder.group({
      productTypeId: [model.productTypeId, Validators.compose([MyValidator.required, MyValidator.alphanumeric])],
      productId: [model.productId, Validators.compose([MyValidator.required, MyValidator.alphanumeric])],
      name: [model.name, Validators.compose([MyValidator.required, MyValidator.minLength(1)])],
      description: [model.description, Validators.compose([MyValidator.required, MyValidator.minLength(1)])],
      type: [ 2 ],
      sponsorPayment: [ model.sponsorPayment || '0' ],
      price: [ model.price, Validators.compose([MyValidator.required, MyValidator.integer]) ]
    });
  }

  handleNewItem(): void {
    if (!this.form.valid) return;
    const data = this.form.value;
    this.productSvc
      .newItem({
        body: data,
      })
      .subscribe((result) => {
        this.router.navigate(['/products']);
      });
  }

  handleUpdItem(): void {
    if (!this.form.valid) return;
    const data = this.form.value;
    this.productSvc
      .updItem({
        id: this.id,
        body: data,
      })
      .subscribe((result) => {
        this.router.navigate(['/products']);
      });
  }

  handleCancel(): void {
    this.router.navigate(['/products']);
  }

}
