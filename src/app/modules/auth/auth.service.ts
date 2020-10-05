import { Injectable } from '@angular/core';
import { HttpClientService } from '../../shared/common/services/http-client.service';
import { Router } from '@angular/router';
import { ApiNames } from '../../config/apis.enum';
import { SessionService } from './session.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClientService,
    private sessionSvc: SessionService,
    private router: Router,
  ) { }

  login({ headers = [], body}) {
    return this.http.post({
      nameAPI: ApiNames.security,
      urlOrPath: `/session/login`,
      headers,
      body,
      loadingOverlay: true,
      addCredentials: false,
    }).pipe(
      map((res: any) => {
        !res.changePassword && this.sessionSvc.setSession( {token: res.token, ...res.info} )
        return res;
      }),
    );
  }

  logout({ headers = [], body}) {
    return this.http.post({
      nameAPI: ApiNames.security,
      urlOrPath: `/session/logout`,
      headers,
      body,
      loadingOverlay: true,
      addCredentials: true,
    }).pipe(
      map((res: any) => {
        this.sessionSvc.logout();
        return res;
      }),
    );
  }

  changePasswordFisrtTime({ headers = [], body, userId}) {
    return this.http.patch({
      nameAPI: ApiNames.security,
      urlOrPath: `/pass/change/${userId}`,
      headers,
      body,
      loadingOverlay: true,
      addCredentials: false,
    }).pipe(
      map((res: any) => {
        this.sessionSvc.logout();
        return res;
      }),
    );
  }

  changePassword({ headers = [], body, userId}) {
    return this.http.patch({
      nameAPI: ApiNames.security,
      urlOrPath: `/pass/change/${userId}`,
      headers,
      body,
      loadingOverlay: true,
      addCredentials: true,
    }).pipe(
      map((res: any) => {
        this.sessionSvc.logout();
        return res;
      }),
    );
  }


}
