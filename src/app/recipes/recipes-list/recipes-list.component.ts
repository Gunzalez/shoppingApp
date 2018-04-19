import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  
  recipes: Recipe[] = [
    new Recipe('Sample Recipe', 'This is a test will it work', 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2016/10/mexican-chicken-burger.jpg?itok=_AGDavEw')
  ]

  constructor() { }

  ngOnInit() {
  }

}
