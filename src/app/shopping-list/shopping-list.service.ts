import { Ingredient } from './../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {

    ingredientAdded = new EventEmitter<Ingredient[]>()

    ingredients: Ingredient[] = [
        new Ingredient('Apples', '16'),
        new Ingredient('Sugar', '9'),
        new Ingredient('Salt', '11')
    ];

    getIngredients(){
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        //this.ingredientAdded.emit(this.ingredients.slice());
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        ingredients.map((ingredient: Ingredient) => {
            this.ingredients.push(ingredient);
        })
    }

}