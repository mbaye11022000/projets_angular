// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class DropdownService {
//   private isOpen = new BehaviorSubject<boolean>(false);

//   get isOpen$() {
//     return this.isOpen.asObservable();
//   }

//   toggleMenu() {
//     console.log('Toggle Menu Called');
//     this.isOpen.next(!this.isOpen.value);
//   }

//   close() {
//     this.isOpen.next(false);
//   }
// }


import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {
  private isOpen = new BehaviorSubject<boolean>(false);

  get isOpen$() {
    return this.isOpen.asObservable();
  }

  toggleMenu() {
    this.isOpen.next(!this.isOpen.value);
  }

  close() {
    this.isOpen.next(false);
  }
}
