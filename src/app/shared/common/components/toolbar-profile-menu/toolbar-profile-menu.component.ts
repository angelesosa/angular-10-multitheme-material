import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../../../modules/auth/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { ChangePasswordComponent } from '../change-password/change-password.component';

@Component({
  selector: 'app-toolbar-profile-menu',
  templateUrl: './toolbar-profile-menu.component.html',
  styleUrls: ['./toolbar-profile-menu.component.scss']
})
export class ToolbarProfileMenuComponent implements OnInit {

  @Input() imgsrc = '';
  @Input() fullName = '***';
  @Input() profile = '***';
  @Input() email = '***';

  constructor(
    private authSvc: AuthService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  handleLogout(): void {
    const dataLogout = { closeAll: false, confirmed: true};
    this.authSvc.logout({body: dataLogout}).subscribe();
  }

  handleCloseAllSession(): void {
    const dataLogout = { closeAll: true, confirmed: true};
    this.authSvc.logout({body: dataLogout}).subscribe();
  }

  public modalChangePassword: any;

  handleChangePass(): void {
    this.modalChangePassword = this.dialog.open(ChangePasswordComponent, {
      disableClose: true,
      maxWidth: 360,
      panelClass: 'app-dialog',
      data: {
        // blackList: item
      },
    });
    // this.modalChangePassword.afterClosed().subscribe( (result) => {
    //   if (result) {
    //   }
    // });
  }

}
