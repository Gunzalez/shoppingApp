
import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Beef Burger Recipe', 
            'Info about this amazing burger',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Hamburger_%28black_bg%29.jpg/1200px-Hamburger_%28black_bg%29.jpg',
            [
                new Ingredient('Beef Patty', '1'),
                new Ingredient('Buns', '2'),
                new Ingredient('Lettuce', '1')
            ]
        ),
        new Recipe(
            'Schnitzel',
            'Background on this meal',
            'https://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-7_edited.jpg',
            [
                new Ingredient('Chicken', '1'),
                new Ingredient('Lemon', '1')
            ])
    ]

    constructor(private shoppingListServcie: ShoppingListService){}

    getRecipes(){
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.shoppingListServcie.addIngredientsToShoppingList(ingredients)
    }

}