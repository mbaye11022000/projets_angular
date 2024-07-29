




import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-folder-modal',
  templateUrl: './create-folder-modal.component.html',
  styleUrls: ['./create-folder-modal.component.css']
})
export class CreateFolderModalComponent {
  folderName: string = '';
  selectedColor: string | null = null;
  colors = ['#FF0000', '#00FF00', '#0000FF']; 
  constructor(public dialogRef: MatDialogRef<CreateFolderModalComponent>) {}

  selectColor(color: string) {
    this.selectedColor = color;
  }

  onSubmit() {
    
    this.dialogRef.close(); 
  }
}

