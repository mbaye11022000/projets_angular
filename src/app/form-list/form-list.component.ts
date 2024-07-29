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
showDialog = false; 


  openDialog() {
    this.showDialog = true;
  }

  closeDialog() {
    this.showDialog = false;
  }
  
  selectOption(option: string) {
    
    console.log('Option sélectionnée : ', option);
    
  }
  
  constructor(public dialog: MatDialog) { }

  
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
  showCards = false; 

  toggleCards() {
    this.showCards = !this.showCards; 
  }
}







  

  

  

