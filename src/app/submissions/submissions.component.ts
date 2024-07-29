import { Component } from '@angular/core';

@Component({
  selector: 'app-submissions',
  templateUrl: './submissions.component.html',
  styleUrls: ['./submissions.component.css']
})
export class SubmissionsComponent {


  
  
  onSort(column: string) {
    console.log('Sort by:', column);
    
  }
}