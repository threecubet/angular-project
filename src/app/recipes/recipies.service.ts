import { ShopingListService } from './../shoping-list/shoping-list.service';
import { Injectable, EventEmitter } from '@angular/core';

import { Recipe } from './recipes.model';
import { Ingredients } from '../shared/ingredients.model';

@Injectable({
  providedIn: 'root'
})
export class RecipiesService {
  recipeSelected = new EventEmitter<Recipe>();
  constructor(private slServices : ShopingListService) { }
  recipes : Recipe[] = [
    new Recipe(
    'This is a recipes',
    'discreption for rescipes',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Foods_%28cropped%29.jpg/800px-Foods_%28cropped%29.jpg',
    [
      new Ingredients("apple",2),
      new Ingredients("corn",3),
      new Ingredients("cheese",1)
    ]),
    new Recipe(
    'This is another recipes',
    'discreption for rescipes',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Foods_%28cropped%29.jpg/800px-Foods_%28cropped%29.jpg',
    [
      new Ingredients("milk",2),
      new Ingredients("beans",3),
      new Ingredients("sasasas",1),
    ])
   ];
   getRecipes(){
     return this.recipes.slice();
   }
   getRecipe(index:number){
     return this.recipes[index];
   }
   addingredientsToShoppingList(ingredients : Ingredients[]){
    this.slServices.addIngredients(ingredients);
   }
}
