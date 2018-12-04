import { ShopingListService } from './shoping-list.service';
import { Ingredients } from './../shared/ingredients.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent implements OnInit {
  ingredients: Ingredients[] 

  constructor(private slService:ShopingListService) { }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.slService.ingredientsChanged.subscribe(
      (ingrediants : Ingredients[])=>{
          this.ingredients = ingrediants;
    })
  }
  // onIngredientAdded(ingredient : Ingredients){
  //   this.ingredients.push(ingredient);
  // }
}
