import { Component , OnInit } from '@angular/core';

import { RecipeService } from './recipie.service';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers : [RecipeService]
})
export class RecipesComponent {
constructor(){}

  ngOnInit(){
}
}
