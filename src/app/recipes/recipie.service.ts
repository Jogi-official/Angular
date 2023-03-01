import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredients.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";



@Injectable()



export class RecipeService{

  private recipes : Recipe[] = [
    new Recipe('Chicken',
    'This is Chicken Biryani' ,
    'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80',
    [
      new Ingredient('Meat' , 1),
      new Ingredient('Eggs' , 20),
      new Ingredient('Tomato' , 2)
    ]),
    new Recipe('Donuts',
     'Glaced Donuts with Coke' ,
     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVPTVxKFwqL3_wgTS__Mw49Zkfuet0eGaepw&usqp=CAU',
     [
      new Ingredient('Wheat' , 1),
      new Ingredient('French Fries' , 20),
      new Ingredient('Cola' , 2)
     ])
  ];
  recipesChanged = new Subject<Recipe[]>();

constructor(private slService : ShoppingListService ){}


getRecipes(){
  return this.recipes.slice();
}

addIngredientsToShoppingList(ingrdeients : Ingredient[] ){
  this.slService.addIngrdients(ingrdeients);
}

getRecipe(index : number){
  return this.recipes[index];
}

addRecipe(recipe : Recipe){
  this.recipes.push(recipe);
  this.recipesChanged.next(this.recipes.slice());
}

updateRecipe(index : number ,newRecipe : Recipe){
  this.recipes[index]  = newRecipe;
  this.recipesChanged.next(this.recipes.slice());
}


}
