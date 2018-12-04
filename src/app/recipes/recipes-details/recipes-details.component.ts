import { RecipiesService } from './../recipies.service';
import { Recipe } from './../recipes.model';
import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.css']
})
export class RecipesDetailsComponent implements OnInit {

  recipe : Recipe;
  id :number;
  constructor(private recipeService : RecipiesService,
     private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params)=>{
        this.id = +params['id'];
        this.recipe =this.recipeService.getRecipe(this.id);
      }
    );
  }
  onAddToShoppingList(){
    this.recipeService.addingredientsToShoppingList(this.recipe.ingredients);
  }
}
