// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-dossier',
//   templateUrl: './dossier.component.html',
//   styleUrl: './dossier.component.css'
// })
// export class DossierComponent {

// }



import { Component } from '@angular/core';

@Component({
  selector: 'app-dossier',
  templateUrl: './dossier.component.html',
  styleUrls: ['./dossier.component.css']
})
export class DossierComponent {
  isModalOpen: boolean = false;
  folders: { name: string, color: string }[] = [];
$even: { name: string; color: string; }|undefined;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  addFolder(folder: { name: string, color: string } | undefined) {
    if (folder) {
      this.folders.push(folder);
    }
    this.closeModal();
  }



  
}
