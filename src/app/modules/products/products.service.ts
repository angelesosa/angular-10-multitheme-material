import { Injectable } from '@angular/core';
import { HttpClientService } from '../../shared/common/services/http-client.service';
import { Observable } from 'rxjs';
import { IProduct, IProductType } from './products.interface';
import { ApiNames } from '../../config/apis.enum';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  SUBJECT = 'products';

  token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoiY2FybG9zLnRlZXZpbkBnbWFpbC5jb20iLCJ0b2tlbkdlbmVyYXRpb25UaW1lc3RhbXAiOjE1OTgxNDEzMjkzMDQsInRva2VuRXhwaXJhdGlvblRpbWVzdGFtcCI6MTU5ODE4NDUyOTMwNCwiaWF0IjoxNTk4MTQxMzI5fQ.m0fgtwGt8AzJ_JtpOeTh4-dhGdpZOSA9i0ZkFZtJTEI';

  headers = [
    { key: `user_id`,  val: `1`},
    { key: `user_token`,  val: `${this.token}`},
  ];

  constructor(
    private http: HttpClientService
  ) { }

  items({ headers = [] }) {
    return this.http.get<IProduct>({
      nameAPI: ApiNames.antifraude,
      urlOrPath: `/${this.SUBJECT}`,
      headers,
      loadingOverlay: true,
      addApiKey: false,
    });
  }

  item({ id, headers = this.headers }) {
    return this.http.get<IProduct>({
      nameAPI: ApiNames.antifraude,
      urlOrPath: `/${this.SUBJECT}/${id}`,
      headers,
      loadingOverlay: true,
      addApiKey: false,
    });
  }

  newItem({ headers = this.headers, body }) {
    return this.http.post<IProduct>({
      nameAPI: ApiNames.antifraude,
      urlOrPath: `/${this.SUBJECT}`,
      headers,
      body,
      loadingOverlay: true,
      addApiKey: false,
    });
  }

  updItem({ id, headers = this.headers, body }) {
    return this.http.patch<IProduct>({
      nameAPI: ApiNames.antifraude,
      urlOrPath: `/${this.SUBJECT}/${id}`,
      headers,
      body,
      loadingOverlay: true,
      addApiKey: false,
    });
  }

  activateItem({ id, headers = [], body = {} }) {
    return this.http.patch<IProduct>({
      nameAPI: ApiNames.antifraude,
      urlOrPath: `/${this.SUBJECT}/${id}/activate`,
      headers,
      body,
      loadingOverlay: true,
      addApiKey: false,
    });
  }

  deactivateItem({ id, headers = [], body = {} }) {
    return this.http.patch<IProduct>({
      nameAPI: ApiNames.antifraude,
      urlOrPath: `/${this.SUBJECT}/${id}/deactivate`,
      headers,
      body,
      loadingOverlay: true,
      addApiKey: false,
    });
  }

  productTypeItems({ headers = this.headers }) {
    return this.http.get<IProductType>({
      nameAPI: ApiNames.antifraude,
      urlOrPath: `/product-types`,
      headers,
      loadingOverlay: true,
      addApiKey: false,
    });
  }

}
