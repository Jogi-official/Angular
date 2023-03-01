import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute , Params } from '@angular/router';
import { RecipeService } from '../recipie.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id : number;
  editMode = false;
  recipeForm : FormGroup;


 constructor(private route : ActivatedRoute ,
            private recipeService : RecipeService){}

 ngOnInit(){
  this.route.params
  .subscribe((params : Params)=>{
   this.id = +params['id'];
   this.editMode  = params['id'] != null;
   this.initForm();
  });
 }

private initForm(){
  let recipeName = '';
  let recipeImagePath = '';
  let recipeDescription = '';
  let recipeIngridents = new FormArray([]);

  if(this.editMode){
     const recipe = this.recipeService.getRecipe(this.id);
     recipeName = recipe.name;
     recipeImagePath = recipe.imagePath;
     recipeDescription = recipe.description;
       if(recipe['ingredients']){
        for(let ingridient of recipe.ingredients){
          recipeIngridents.push(
            new FormGroup({
              'name' : new FormControl(ingridient.name),
              'amount' : new FormControl(ingridient.amount)
            }))
        }
       }
  }
  this.recipeForm = new FormGroup({
    'name' : new FormControl(recipeName),
    'imgPath': new FormControl(recipeImagePath),
    'description' : new FormControl(recipeDescription),
    'ingredients' : recipeIngridents
  });
}

onSubmit(){
  console.log(this.recipeForm);
}

onAddIngrident(){
  (<FormArray>this.recipeForm.get('ingridients')).push(
    new FormGroup({
      'name' : new FormControl(''),
      'amount' : new FormControl('')
    })
  )
}

get controls() {
  return (<FormArray>this.recipeForm.get('ingredients')).controls;
}

}
