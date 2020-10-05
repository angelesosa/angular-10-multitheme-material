import { Injectable } from '@angular/core';
import { LocalStorageService } from '../../shared/core/services/local-storage.service';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private loggedIn = false;

  constructor(
    private lsSvc: LocalStorageService,
    private router: Router,
  ) { }

  isLoggedIn(): Observable<boolean> {
    this.loggedIn = this.lsSvc.getItem('xDolYs') ? true : false;
    return of(this.loggedIn);
  }

  login(): Observable<boolean> {
    this.loggedIn = true;
    return this.isLoggedIn();
  }

  logout(): void {
    this.clearSession();
  }

  logoutInterceptor(): void {
    this.clearSession();
  }

  getSession() {
    this.isLoggedIn();
    return this.lsSvc.getItem('xDolYs', true) || false;
  }

  setSession(session: any): void {
    this.lsSvc.setItem('xDolYs', session, true);
    this.isLoggedIn();
  }

  clearSession(): void {
    this.lsSvc.remove('xDolYs');
    this.loggedIn = false;
    this.router.navigate(['/auth/login']);
  }
}
