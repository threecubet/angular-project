import { Recipe } from './../recipes.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
 recipes : Recipe[] = [
   new Recipe('This is a recipes','discreption for rescipes','https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Foods_%28cropped%29.jpg/800px-Foods_%28cropped%29.jpg'),
   new Recipe('This is a recipes','discreption for rescipes','https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Foods_%28cropped%29.jpg/800px-Foods_%28cropped%29.jpg')

  ];
  constructor() { }

  ngOnInit() {
  }

}
