import { Ingredient } from './../../shared/ingredient.model';
import { Recipe } from './../recipe.model';
import { Component, OnInit, Input } from '@angular/core';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {

  dropdownStatus: boolean = true;

  @Input() recipe: Recipe;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  setStatus(eventData){
    this.dropdownStatus = eventData;
  }

  addButtonWasClicked(recipe: Recipe){
    recipe.ingredients.map((ingredient: Ingredient)=>{
      this.shoppingListService.addIngredient(ingredient);
    })
    
  }



}
