import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {

  public confirmMessage: string;
  public title: string;
  public btnConfirm: string = "SI";
  public btnCancel: string = "NO";

  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
  ) { }

  ngOnInit() {
  }

}
