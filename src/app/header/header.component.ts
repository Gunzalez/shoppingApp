import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() onNavigateTo = new EventEmitter<string>();

  navigateTo(page:string){
    this.onNavigateTo.emit(page);
  }

}