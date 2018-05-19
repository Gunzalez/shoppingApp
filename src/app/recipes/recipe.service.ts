import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService{

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Sample Recipe', 'This is a test will it work', 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2016/10/mexican-chicken-burger.jpg?itok=_AGDavEw'),
        new Recipe('Another Sample Recipe', 'Wow it is working', 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2016/10/mexican-chicken-burger.jpg?itok=_AGDavEw')
    ]

    getRecipes(){
        return this.recipes.slice();
    }
    

}