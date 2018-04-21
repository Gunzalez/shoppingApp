import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('Apples', '16 Kilos'),
    new Ingredient('Sugar', '9 Cubes'),
    new Ingredient('Salt', 'Just a pinch')
  ];

  constructor() { }

  ngOnInit() {
  }

}
