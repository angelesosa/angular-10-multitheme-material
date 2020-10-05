import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { SessionService } from '../../../modules/auth/session.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private sessionSvc: SessionService,
    private router: Router
  ) { }

  canActivate(): Observable<boolean> {
    return this.sessionSvc.isLoggedIn().pipe(
      tap((isLoggedIn) => isLoggedIn || this.router.navigate(['/auth/login']))
    );
  }

}
