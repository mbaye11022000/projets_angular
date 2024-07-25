import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-team-dialog',
  templateUrl: './team-dialog.component.html',
  styleUrls: ['./team-dialog.component.css']
})
export class TeamDialogComponent {
  constructor(public dialogRef: MatDialogRef<TeamDialogComponent>) {}

  // Vous pouvez ajouter des méthodes pour gérer les clics sur les boutons ici, si nécessaire
}
