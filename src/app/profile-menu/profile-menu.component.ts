


import { Component, OnInit } from '@angular/core';
import { DropdownService } from '../dropdown.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.css']
})
export class ProfileMenuComponent implements OnInit {
  isOpen$!: Observable<boolean>;

  constructor(private dropdownService: DropdownService) {}

  ngOnInit() {
    this.isOpen$ = this.dropdownService.isOpen$;
  }

  toggleMenu() {
    this.dropdownService.toggleMenu();
  }

  closeMenu() {
    this.dropdownService.close();
  }
}
