import { Ingredients } from './../shared/ingredients.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent implements OnInit {
  ingredients: Ingredients[] = [
    new Ingredients('Apples',5),
    new Ingredients('Tomatos',4)
  ];
  constructor() { }

  ngOnInit() {
  }

}
