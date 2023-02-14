import { Component } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipie.service';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers : [RecipeService]
})
export class RecipesComponent {
selectedRecipes : Recipe;

}
