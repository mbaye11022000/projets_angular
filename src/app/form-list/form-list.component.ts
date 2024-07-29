import { Component, ViewChild, ElementRef } from '@angular/core';
import { FilterDialogComponent } from '../filter-dialog/filter-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { SortDialogComponent } from '../sort-dialog/sort-dialog.component';
import { DialogComponentComponent } from '../dialog-component/dialog-component.component';

@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrl: './form-list.component.css'
})
export class FormListComponent {
[x: string]: any;
  @ViewChild('filterButton', { read: ElementRef }) filterButton!: ElementRef;
handleOptionSelected($event: string) {
throw new Error('Method not implemented.');
}
selectsent($event: Event) {
throw new Error('Method not implemented.');
}


showCards: any;
$option: string | undefined;
toggleCards() {
throw new Error('Method not implemented.');

}
// isSearchVisible = false;

//   toggleSearch() {
//     this.isSearchVisible = !this.isSearchVisible;
//   }

isSearching = false;

  toggleSearch() {
    this.isSearching = !this.isSearching;
  }

  isFilterOpen = false;

  toggleFilter() {
    this.isFilterOpen = !this.isFilterOpen;
  }
  isSortMenuOpen = false;

  

  toggleSortMenu() {
    this.isSortMenuOpen = !this.isSortMenuOpen;
  }
showDialog = false; // Variable d'état pour afficher/masquer la boîte de dialogue modale






  openDialog() {
    this.showDialog = true;
  }

  closeDialog() {
    this.showDialog = false;
  }
  
  selectOption(option: string) {
    // Logique à implémenter en fonction de l'option sélectionnée
    console.log('Option sélectionnée : ', option);
    // Ajoutez ici la logique pour gérer les actions en fonction de l'option choisie
    // Par exemple, vous pouvez router vers une autre page ou exécuter une fonction spécifique
    // en fonction de l'option choisie.
  }
  
  constructor(public dialog: MatDialog) { }

  // openDialo(): void {
  //   const dialogRef = this.dialog.open(FilterDialogComponent, {
  //     width: '250px'
      
  
  //   });
    
    

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('Le dialogue a été fermé');
  //   });
   
    
  // }
  openDialo() {
    const rect = this.filterButton.nativeElement.getBoundingClientRect();
    const dialogRef = this.dialog.open(FilterDialogComponent, {
      position: {
        top: `${rect.bottom + window.scrollY}100px`,
        left: `${rect.left + window.scrollX}1000px`
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  openDialogg(): void {
    this.dialog.open(DialogComponentComponent);
    
  }
  openSortDialog() {
    const dialogRef = this.dialog.open(SortDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  


  

}



export class FormComponent {
  showCards = false; // Variable d'état

  toggleCards() {
    this.showCards = !this.showCards; // Change l'état pour afficher/masquer les cartes
  }
}



// form-list.component.ts



  

  

  

