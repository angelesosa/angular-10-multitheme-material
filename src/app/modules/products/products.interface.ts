export interface IProduct {
  productId?: string;
  productTypeId?: string;
  sponsorPayment?: string;
  name?: string;
  description?: string;
  type?: number;
  price?: string;
  active?: number;
}

export class Product {
  productId = '';
  productTypeId = '';
  sponsorPayment = '';
  name = '';
  description = '';
  type = 0;
  price = '';

  constructor(model?) {
    Object.assign(this, model);
  }
}

export interface IProductType {
  productTypeId?: string;
  name?: string;
  description?: string;
  setting?: object;
  packTypeId?: string;
}

export class ProductType {
  productTypeId = '';
  name = '';
  description = '';
  setting = {};
  packTypeId = '';

  constructor(model?) {
    Object.assign(this, model);
  }
}

