import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-acessibilidade-dialog',
  templateUrl: './acessibilidade-dialog.component.html',
  styleUrls: ['./acessibilidade-dialog.component.scss']
})
export class AcessibilidadeDialogComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  closeDialog() {
    this.dialog.closeAll();
  }

  onKeyPressAcess(e: KeyboardEvent){
    if(e.keyCode == 13)
        this.closeDialog();
  }
}
