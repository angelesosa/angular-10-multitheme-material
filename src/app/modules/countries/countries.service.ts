import { Injectable } from '@angular/core';
import { HttpClientService } from '../../shared/common/services/http-client.service';
import { Observable } from 'rxjs';
import { ICountry } from './countries.interface';

const SUBJECT = 'countries';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(
    private http: HttpClientService
  ) { }

  items(headers?: { key: string, value: string }[]): Observable<Object> {
    return this.http.get<ICountry>({
      nameAPI: 'MULTILANG_API_URL',
      urlOrPath: `/${SUBJECT}`,
      headers,
      addCredentials: true,
      loadingOverlay: true
    });
  }

  item(currencyId: string): Observable<Object> {
    return this.http.get<ICountry>({
      nameAPI: 'MULTILANG_API_URL',
      urlOrPath: `/${SUBJECT}/${currencyId}`,
      addCredentials: true,
      loadingOverlay: true
    });
  }

}
