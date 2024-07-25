// import { Component, EventEmitter, Output } from '@angular/core';

// @Component({
//   selector: 'app-create-folder-modal',
//   templateUrl: './create-folder-modal.component.html',
//   styleUrls: ['./create-folder-modal.component.css']
// })
// export class CreateFolderModalComponent {
//   @Output() folderCreated = new EventEmitter<{ name: string, color: string }>();
//   folderName: string = '';
//   colors: string[] = ['#E57373', '#81C784', '#FFB74D', '#4DB6AC', '#BA68C8'];
//   selectedColor: string | null = null;

//   selectColor(color: string) {
//     this.selectedColor = color;
//   }

//   onSubmit() {
//     if (this.folderName && this.selectedColor) {
//       this.folderCreated.emit({ name: this.folderName, color: this.selectedColor });
//       this.closeModal();
//     }
//   }

//   closeModal() {
//     this.folderCreated.emit(undefined);
//   }
// }




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
  colors = ['#FF0000', '#00FF00', '#0000FF']; // Exemple de couleurs

  constructor(public dialogRef: MatDialogRef<CreateFolderModalComponent>) {}

  selectColor(color: string) {
    this.selectedColor = color;
  }

  onSubmit() {
    // Traitement du formulaire
    this.dialogRef.close(); // Ferme la modal après la soumission
  }
}

