import { Component, OnInit } from '@angular/core';
import { SessionService } from './session.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  $routerEvents: Subscription;

  constructor(
    private sessionSvc: SessionService,
    private router: Router,
  ) {
    this.sessionSvc.isLoggedIn().subscribe((isLoggedIn) => {
      isLoggedIn && this.router.navigate(['/home']);
    });
  }

  ngOnInit(): void {
  }

}
