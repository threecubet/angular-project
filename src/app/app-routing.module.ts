import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipesDetailsComponent } from './recipes/recipes-details/recipes-details.component';
import { RecipesStartComponent } from './recipes/recipes-start/recipes-start.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { ShopingListComponent } from './shoping-list/shoping-list.component';

const appRouter : Routes = [
  { path:'', redirectTo:'/recipes' , pathMatch:'full'},
  { 
    path:'recipes', component: RecipesComponent, children:[
    { path:'', component: RecipesStartComponent },
    { path:':new', component: RecipeEditComponent },
    { path:':id', component: RecipesDetailsComponent },
    { path:':id/edit', component: RecipeEditComponent }
  ]},
  { path:'shopping-list', component: ShopingListComponent }
];
@NgModule({
  imports:[RouterModule.forRoot(appRouter)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
