import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipe: Recipe = new Recipe('Super Amazing Recipe', 'Hmm will it work', 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2016/10/mexican-chicken-burger.jpg?itok=_AGDavEw')

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe){
    console.log('Emit recieved')
    //console.log(recipe)
  }

}
