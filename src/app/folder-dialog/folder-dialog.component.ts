import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-folder-dialog',
  templateUrl: './folder-dialog.component.html',
  styleUrls: ['./folder-dialog.component.css']
})
export class FolderDialogComponent {
  folderName: string = '';
  selectedColor: string = '';
  colors: string[] = ['#ff0000', '#00ff00', '#0000ff', '#ffff00']; // Exemple de couleurs

  constructor(
    public dialogRef: MatDialogRef<FolderDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  selectColor(color: string) {
    this.selectedColor = color;
  }

  addColor() {
    const newColor = prompt('Entrez la nouvelle couleur en hexadécimal (par exemple, #123456) :');
    if (newColor) {
      this.colors.push(newColor);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.folderName && this.selectedColor) {
      this.dialogRef.close({ folderName: this.folderName, selectedColor: this.selectedColor });
    }
  }
}
