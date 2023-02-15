import { Ingredient } from "../shared/ingredients.model";
import {EventEmitter} from '@angular/core'

export class ShoppingListService{

ingredientChanged = new EventEmitter<Ingredient[]>();

  ingredients : Ingredient[] = [
    new Ingredient('apples' , 5),
    new Ingredient('Tomatoes' , 5),
    new Ingredient('EggPlant' , 5)
  ];
  getIngredients(){
    return this.ingredients.slice();
  }


addIngrdient(ingredient : Ingredient){
  this.ingredients.push(ingredient);
  this.ingredientChanged.emit(this.ingredients.slice());
}
}
