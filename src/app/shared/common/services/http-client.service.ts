import { Injectable } from '@angular/core';
import { LoadingOverlayService } from '@common/components/loading-overlay/loading-overlay.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize, map } from 'rxjs/operators';
import { environment } from 'environments/environment';
import { ToasterService } from '@core/services/toaster.service';
import { SessionService } from '../../../modules/auth/session.service';

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
    hasFilter?: boolean;
    hasPaging?: boolean;
    itemsCounter?: number;
    item?: T;
    items?: T[];
  };
  applied: {};
  filtersAllowed?: FilterAllow[];
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
    private sessionSvc: SessionService,
    private toastSvc: ToasterService
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
    showErrToastMsg = true,
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
        }),
        catchError((httpError) => {
          loadingOverlay && this.loadingOverlay.hide();
          showErrToastMsg && this.toastSvc.error({ message: this.getErrorMsg(httpError) });
          return throwError(httpError.error);
        })
      );
  }

  post<T>({
    nameAPI = '',
    urlOrPath = '',
    headers = [],
    body,
    jsonParse = true,
    addCredentials = false,
    addApiKey = false,
    addContentTypeJson = true,
    loadingOverlay = false,
    showErrToastMsg = true,
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
        }),
        catchError((httpError) => {
          console.error(httpError);
          loadingOverlay && this.loadingOverlay.hide();
          showErrToastMsg && this.toastSvc.error({ message: this.getErrorMsg(httpError) });
          return throwError(httpError.error);
        })
      );
  }

  patch<T>({
    nameAPI = '',
    urlOrPath = '',
    headers = [],
    body,
    jsonParse = true,
    addCredentials = false,
    addApiKey = false,
    addContentTypeJson = true,
    loadingOverlay = false,
    showErrToastMsg = true,
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
        }),
        catchError((httpError) => {
          loadingOverlay && this.loadingOverlay.hide();
          showErrToastMsg && this.toastSvc.error({ message: this.getErrorMsg(httpError) });
          return throwError(httpError.error);
        })
      );
  }

  delete<T>({
    nameAPI = '',
    urlOrPath = '',
    headers = [],
    jsonParse = true,
    addCredentials = false,
    addApiKey = false,
    addContentTypeJson = true,
    loadingOverlay = false,
    showErrToastMsg = true,
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
    // loading
    loadingOverlay && this.loadingOverlay.show();
    //+
    return this.httpClient
      .delete<IHttpResponse<T>>(url, {
        headers: httpHeaders,
      })
      .pipe(
        map((result) => {
          loadingOverlay && this.loadingOverlay.hide();
          return result;
        }),
        catchError((httpError) => {
          loadingOverlay && this.loadingOverlay.hide();
          showErrToastMsg && this.toastSvc.error({ message: this.getErrorMsg(httpError) });
          return throwError(httpError.error);
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
    const session = this.sessionSvc.getSession() || {};
    return [
      { key: 'user_id', val: `${session.userId}` },
      { key: 'user_token', val: `${session.token}` },
    ];
  }

  private getApiKey() {
    const apiKey = environment['GENERAL_API_KEY'];
    return [{ key: 'api_key', val: apiKey || '' }];
  }

  private getErrorMsg(httpError) {
    return `La solicitud no se procesó, inténtalo de nuevo [${httpError.status}]`;
  }
}
