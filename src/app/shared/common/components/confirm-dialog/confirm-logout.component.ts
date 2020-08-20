import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-logout',
  templateUrl: './confirm-logout.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmLogoutComponent implements OnInit {

  public confirmMessage: string;
  public title: string;
  public aliveSessions: number;

  constructor(public dialogRef: MatDialogRef<ConfirmLogoutComponent>) {
  }

  ngOnInit() {
  }

}
