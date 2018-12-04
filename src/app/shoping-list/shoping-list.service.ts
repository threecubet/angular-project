import { Injectable, EventEmitter } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';

@Injectable({
  providedIn: 'root'
})
export class ShopingListService {
  ingredientsChanged = new EventEmitter<Ingredients[]>();
  constructor() { }
  private ingredients: Ingredients[] = [
    new Ingredients('Apples',5),
    new Ingredients('Tomatos',4)
  ];
  getIngredients(){
    return this.ingredients.slice();
  }
  addIngredient(ingredient : Ingredients){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
  addIngredients(ingredients : Ingredients[]){
  this.ingredients.push(...ingredients);
  this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
