import { Ingredient } from './../shared/ingredient.model';

export class ShoppingListService {

    ingredients: Ingredient[] = [
        new Ingredient('Apples', '16'),
        new Ingredient('Sugar', '9'),
        new Ingredient('Salt', '1')
    ];

    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
    }


}