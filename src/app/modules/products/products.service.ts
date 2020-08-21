import { Injectable } from '@angular/core';
import { HttpClientService } from '../../shared/common/services/http-client.service';
import { Observable } from 'rxjs';
import { IProduct } from './products.interface';

const SUBJECT = 'products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClientService
  ) { }

  items(headers?: { key: string, value: string }[]): Observable<Object> {
    return this.http.get<IProduct>({
      nameAPI: 'MULTILANG_API_URL',
      urlOrPath: `/${SUBJECT}`,
      headers,
      addCredentials: true,
      loadingOverlay: true
    });
  }

  item(productId: string): Observable<Object> {
    return this.http.get<IProduct>({
      nameAPI: 'MULTILANG_API_URL',
      urlOrPath: `/${SUBJECT}/${productId}`,
      addCredentials: true,
      loadingOverlay: true
    });
  }

}
