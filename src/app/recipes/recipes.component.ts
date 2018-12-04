import { RecipiesService } from './recipies.service';
import { Recipe } from './recipes.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers:[RecipiesService]
})
export class RecipesComponent implements OnInit {
  
  selectedRecipe : Recipe;
  constructor(private recipieServices : RecipiesService) { }

  ngOnInit() {
    this.recipieServices.recipeSelected.subscribe((recipe : Recipe)=>{
      this.selectedRecipe = recipe;
    });
  }
  
}
