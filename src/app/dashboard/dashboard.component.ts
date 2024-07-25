import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FolderDialogComponent } from '../folder-dialog/folder-dialog.component';
import { TeamDialogComponent } from '../team-dialog/team-dialog.component';
interface Folder {
  name: string;
  color: string;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  archiveCount: number = 0; // Exemple : Remplacez par les comptages réels
  trashCount: number = 0; // Exemple : Remplacez par les comptages réels
submissionMenu: any;

openModal() {
throw new Error('Method not implemented.');
}
folders: Folder[] = [];


  constructor(public dialog: MatDialog) {}

  openFolderDialog(): void {
    const dialogRef = this.dialog.open(FolderDialogComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.folders.push(result);
      }
    });
  }
 

  openTeamDialog(): void {
    const dialogRef = this.dialog.open(TeamDialogComponent, {
      width: '450px',
      height: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Action effectuée :', result);
      }
    });
  }

}








  











  

