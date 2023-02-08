import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponentt {
    ingredients : Ingredient[] = [
    new Ingredient('apples' , 5),
    new Ingredient('Tomatoes' , 5),
    new Ingredient('EggPlant' , 5)
  ];

  onIngredientAdded(ingredient: Ingredient){
    this.ingredients.push(ingredient);
  }

}
