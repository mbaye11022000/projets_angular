import { Component, OnInit } from '@angular/core';
import { Observable, Subscribable } from 'rxjs';
import { DropdownService } from '../dropdown.service'
@Component({
  selector: 'app-navbare',
  templateUrl: './navbare.component.html',
  styleUrl: './navbare.component.css'
})
export class NavbareComponent implements OnInit{

  isOpen$: Observable<unknown> | Subscribable<unknown> | Promise<unknown> | undefined | undefined | undefined;

constructor(private dropdownService: DropdownService) {}

ngOnInit() {
  this.isOpen$ = this.dropdownService.isOpen$;
}

toggleMenu() {
  this.dropdownService.toggle();
}

closeMenu() {
  this.dropdownService.close();
}


}




 

