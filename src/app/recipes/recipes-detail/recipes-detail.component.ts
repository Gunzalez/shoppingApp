import { Ingredient } from './../../shared/ingredient.model';
import { Recipe } from './../recipe.model';
import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {

  dropdownStatus: boolean = true;

  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  setStatus(eventData){
    this.dropdownStatus = eventData;
  }

  addButtonWasClicked(){
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
  
}
