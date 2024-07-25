import { Component } from '@angular/core';

@Component({
  selector: 'app-submissions',
  templateUrl: './submissions.component.html',
  styleUrls: ['./submissions.component.css']
})
export class SubmissionsComponent {


  
  // Méthode de tri (vous pouvez ajouter la logique de tri ici)
  onSort(column: string) {
    console.log('Sort by:', column);
    // Ajoutez votre logique de tri ici
  }
}