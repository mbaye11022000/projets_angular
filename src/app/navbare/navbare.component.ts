import { Component, OnInit } from '@angular/core';
import { DropdownService } from '../dropdown.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbare',
  templateUrl: './navbare.component.html',
  styleUrls: ['./navbare.component.css']
})
export class NavbareComponent implements OnInit {
  isOpen$: Observable<boolean>;

  constructor(private dropdownService: DropdownService) {
    this.isOpen$ = this.dropdownService.isOpen$;
  }

  ngOnInit() {
    this.isOpen$.subscribe(isOpen => {
      console.log('Dropdown Menu State:', isOpen);
    });
  }

  toggleMenu() {
    console.log('Avatar Clicked');
    this.dropdownService.toggleMenu();
  }
}
