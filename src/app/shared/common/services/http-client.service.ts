import { Injectable } from '@angular/core';
import { LoadingOverlayService } from '@common/components/loading-overlay/loading-overlay.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, finalize, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from '@core/services/local-storage.service';

interface FilterAllow {
  key: string;
  label: string;
}
// TODO: preparar distintas interface para cada una de las respuestas: por ejemplo items, item
interface IHttpResponse<T> {
  statusCode?: number;
  success: boolean;
  messageId: string;
  kindMessage?: string;
  data: {
    hasFilter?: boolean,
    hasPaging?: boolean,
    itemsCounter?: number,
    item?: T;
    items?: T[];
  };
  applied: {};
  filtersAllowed?: FilterAllow[],
  timeLapse: {
    started: string;
    ended: string;
    duration: number;
    durationLabel: string;
  };
}
@Injectable({
  providedIn: 'root',
})
export class HttpClientService {
  constructor(
    private httpClient: HttpClient,
    private loadingOverlay: LoadingOverlayService,
    private lsSvc: LocalStorageService
  ) {}

  get<T>({
    nameAPI = '',
    urlOrPath = '',
    headers = [],
    params = [],
    addCredentials = false,
    addApiKey = false,
    addContentTypeJson = true,
    loadingOverlay = false,
  }): Observable<IHttpResponse<T>> {
    // url
    const url = this.buildUrl({ nameAPI, urlOrPath });
    // headers
    const securityHeaders = addCredentials ? this.getCredentialsHeaders() : [];
    const apiKeyHeaders = addApiKey ? this.getApiKey() : [];
    const httpHeaders = this.buildHeaders({
      headers: [...headers, ...securityHeaders, ...apiKeyHeaders],
      addContentTypeJson,
    });
    // params
    const httpParams = this.buildParams({ params });
    // loading
    loadingOverlay && this.loadingOverlay.show();
    //+
    return this.httpClient
      .get<IHttpResponse<T>>(url, {
        headers: httpHeaders,
        params: httpParams,
      })
      .pipe(
        map((result) => {
          loadingOverlay && this.loadingOverlay.hide();
          return result;
        })
      );
  }

  post<T>({
    nameAPI = '',
    urlOrPath = '',
    headers = [],
    body = '',
    jsonParse = true,
    addCredentials = false,
    addApiKey = false,
    addContentTypeJson = true,
    loadingOverlay = false,
  }): Observable<IHttpResponse<T>> {
    // url
    const url = this.buildUrl({ nameAPI, urlOrPath });
    // headers
    const securityHeaders = addCredentials ? this.getCredentialsHeaders() : [];
    const apiKeyHeaders = addApiKey ? this.getApiKey() : [];
    const httpHeaders = this.buildHeaders({
      headers: [...headers, ...securityHeaders, ...apiKeyHeaders],
      addContentTypeJson,
    });
    // body
    body = jsonParse ? JSON.stringify(body) : body;
    // loading
    loadingOverlay && this.loadingOverlay.show();
    //+
    return this.httpClient
      .post<IHttpResponse<T>>(url, body, {
        headers: httpHeaders,
      })
      .pipe(
        map((result) => {
          loadingOverlay && this.loadingOverlay.hide();
          return result;
        })
      );
  }

  patch<T>({
    nameAPI = '',
    urlOrPath = '',
    headers = [],
    body = '',
    jsonParse = true,
    addCredentials = false,
    addApiKey = false,
    addContentTypeJson = true,
    loadingOverlay = false,
  }): Observable<IHttpResponse<T>> {
    // url
    const url = this.buildUrl({ nameAPI, urlOrPath });
    // headers
    const securityHeaders = addCredentials ? this.getCredentialsHeaders() : [];
    const apiKeyHeaders = addApiKey ? this.getApiKey() : [];
    const httpHeaders = this.buildHeaders({
      headers: [...headers, ...securityHeaders, ...apiKeyHeaders],
      addContentTypeJson,
    });
    // body
    body = jsonParse ? JSON.stringify(body) : body;
    // loading
    loadingOverlay && this.loadingOverlay.show();
    //+
    return this.httpClient
      .patch<IHttpResponse<T>>(url, body, {
        headers: httpHeaders,
      })
      .pipe(
        map((result) => {
          loadingOverlay && this.loadingOverlay.hide();
          return result;
        })
      );
  }

  private buildHeaders({ headers, addContentTypeJson }): HttpHeaders {
    let httpHeaders = new HttpHeaders();
    if (addContentTypeJson) httpHeaders.set('Content-type', 'application/json');
    if (headers) {
      headers.forEach((element) => {
        httpHeaders = httpHeaders.set(element['key'], element['val']);
      });
      return httpHeaders;
    }
    // return undefined
  }

  private buildParams({ params }): HttpParams {
    if (params) {
      let httpParams = new HttpParams();
      params.forEach((element) => {
        httpParams = httpParams.set(element['key'], element['val']);
      });
      return httpParams;
    }
    // return undefined
  }

  private buildUrl({ nameAPI, urlOrPath }): string {
    let url = '';
    if (nameAPI) {
      url = environment[nameAPI] || '';
    }
    return `${url}${urlOrPath}`;
  }

  private getCredentialsHeaders() {
    const session = this.lsSvc.getItem('xDolYs') || {};
    return [
      { key: 'user_id', val: session.userId || '' },
      { key: 'user_token', val: session.token || '' },
    ];
  }

  private getApiKey() {
    const apiKey = environment['GENERAL_API_KEY'];
    return [{ key: 'api_key', val: apiKey || '' }];
  }
}
