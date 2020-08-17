export interface ICountry {
  pKey?: string;
  name?: string;
  capital?: string;
  population?: string;
  subregion?: string;
  area?: string;
}

export class Country {
  pKey = '';
  name = '';
  capital = '';
  population = '';
  subregion = '';
  area = '';

  constructor(model?) {
    Object.assign(this, model);
  }

}
