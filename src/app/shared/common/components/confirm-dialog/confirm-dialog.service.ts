import { Injectable } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './confirm-dialog.component';
import { Observable } from 'rxjs';
import { ConfirmLogoutComponent } from './confirm-logout.component';

@Injectable({
  providedIn: 'root',
})
export class ConfirmDialogService {
  constructor(private dialog: MatDialog) {}

  public confirm({ msg, btnConfirm = 'SI', btnCancel = 'NO' }): Observable<boolean> {
    let dialogRef: MatDialogRef<ConfirmDialogComponent>;
    dialogRef = this.dialog.open(ConfirmDialogComponent, {
      panelClass: 'app-dialog',
      disableClose: true,
    });
    this.showConfirmation(dialogRef, msg, btnConfirm, btnCancel);
    return dialogRef.afterClosed();
  }

  public confirmLogout(confirmMessage: string, title: string = '', aliveSessions: number = 1): Observable<boolean> {
    let dialogRef: MatDialogRef<ConfirmLogoutComponent>;

    dialogRef = this.dialog.open(ConfirmLogoutComponent, {
      panelClass: 'app-dialog',
      disableClose: true,
    });
    dialogRef.componentInstance.title = title;
    dialogRef.componentInstance.confirmMessage = confirmMessage;
    dialogRef.componentInstance.aliveSessions = aliveSessions;

    return dialogRef.afterClosed();
  }

  showConfirmation(dialogRef, msg, btnConfirm, btnCancel) {
    // dialogRef.componentInstance.title = title;
    dialogRef.componentInstance.confirmMessage = msg;
    dialogRef.componentInstance.btnConfirm = btnConfirm;
    dialogRef.componentInstance.btnCancel = btnCancel;
  }
}
