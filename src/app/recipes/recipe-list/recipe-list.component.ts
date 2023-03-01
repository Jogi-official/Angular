import { Component,OnInit } from '@angular/core';
import { RecipeService } from '../recipie.service';
import { Recipe } from '../recipe.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  subscription : Subscription;

  recipes : Recipe[] ;

  constructor(private recipeService : RecipeService,
    private router : Router ,
    private route : ActivatedRoute){

  }
  ngOnInit(){
  this.subscription =   this.recipeService.recipesChanged.subscribe((recipes : Recipe[]) =>{
        this.recipes = recipes;
    })
    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe(){
      this.router.navigate(['new'] , {relativeTo : this.route})
  }

  ngDestroy(){
      this.subscription.unsubscribe();
  }

}
