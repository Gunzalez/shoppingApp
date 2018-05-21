import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[];

  constructor(private shoppingListSerice: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListSerice.getIngredients();

    this.shoppingListSerice.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        console.log('subscribed')
        this.ingredients = ingredients
      }
    )
  }

}
