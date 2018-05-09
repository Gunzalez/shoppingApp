import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {

  dropdownStatus: boolean = true;

  @Input() recipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

  setStatus(eventData){
    this.dropdownStatus = eventData;
  }



}
