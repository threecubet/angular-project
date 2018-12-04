import { RecipiesService } from './../recipies.service';
import { Recipe } from './../recipes.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  
  recipes : Recipe[]; 

  constructor(private recipieServices : RecipiesService,
              private router : Router,
              private route : ActivatedRoute) { }

  ngOnInit() {
    this.recipes = this.recipieServices.getRecipes();   
  }
  onNewRecipe(){
    this.router.navigate(['new'] , {relativeTo: this.route});
  }
}
