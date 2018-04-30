import { Recipe } from './../recipe.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  
  @Output() recipeToEmit = new EventEmitter<Recipe>();
  
  recipes: Recipe[] = [
    new Recipe('Sample Recipe', 'This is a test will it work', 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2016/10/mexican-chicken-burger.jpg?itok=_AGDavEw'),
    new Recipe('Another Sample Recipe', 'Wow it is working', 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2016/10/mexican-chicken-burger.jpg?itok=_AGDavEw')
  ]

  constructor() { }

  ngOnInit() {
  }

  recipeSelected(recipe: Recipe){
    this.recipeToEmit.emit(recipe)
  }

}
