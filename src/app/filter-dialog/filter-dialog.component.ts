


import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-filter-dialog',
  templateUrl: './filter-dialog.component.html',
  styleUrls: ['./filter-dialog.component.css']
})
export class FilterDialogComponent {

  options = [
    { icon: 'star',  color: 'gold' },
    { icon: 'star_border', label: 'Sans étoile', color: 'silver' },
    { icon: 'fiber_manual_record', label: 'Réponses non lues', color: 'red' },
    { icon: 'fiber_manual_record_outlined', label: 'Sans réponses non lues', color: 'gray' },
    { icon: 'pause', label: 'Désactivé', color: 'orange' },
    { icon: 'play_arrow', label: 'Activée', color: 'green' },
    { icon: 'public', label: 'Publique', color: 'blue' },
    { icon: 'lock_open', label: 'Non répertorié', color: 'purple' },
    { icon: 'people', label: 'Limité', color: 'brown' },
    { icon: 'lock', label: 'Privé', color: 'black' },
  ];

  constructor(public dialogRef: MatDialogRef<FilterDialogComponent>) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
