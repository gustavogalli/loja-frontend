import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>
  ){}

  cancelar(){
    this.dialogRef.close(false);
  }

  confirmar(){
    this.dialogRef.close(true);
  }

}
