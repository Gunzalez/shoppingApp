import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  destination: string = 'recipes'
  
  navigateTo(page){
    this.destination = page;
  }
}
