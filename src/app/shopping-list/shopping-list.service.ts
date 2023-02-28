import { Ingredient } from "../shared/ingredients.model";
import { Subject } from "rxjs";

export class ShoppingListService{

ingredientChanged = new Subject<Ingredient[]>();
startedEditing = new Subject<number>();

  ingredients : Ingredient[] = [
    new Ingredient('apples' , 5),
    new Ingredient('Tomatoes' , 5),
    new Ingredient('EggPlant' , 5)
  ];
  getIngredients(){
    return this.ingredients.slice();
  }

getIngredient(index : number){
    return this.ingredients[index];
}

addIngrdient(ingredient : Ingredient){
  this.ingredients.push(ingredient);
  this.ingredientChanged.next(this.ingredients.slice());
}

addIngrdients(ingredients : Ingredient[]){
  // for(let ingrdient of ingredients){
  //   this.addIngrdient(ingrdient);
  // }

  this.ingredients.push(...ingredients);
  this.ingredientChanged.next(this.ingredients.slice());
}





}
