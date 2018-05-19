import { RecipeService } from './../recipe.service';
import { Recipe } from './../recipe.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  
  @Output() recipeToEmit = new EventEmitter<Recipe>();
  
  recipes: Recipe[]

  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  recipeSelected(recipe: Recipe){
    this.recipeToEmit.emit(recipe)
  }

}
