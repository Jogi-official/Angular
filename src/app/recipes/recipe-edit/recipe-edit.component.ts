import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute , Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
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
            private recipeService : RecipeService ,
            private router : Router){}

onAddIngrident(){
              (<FormArray>this.recipeForm.get('ingridients')).push(
                new FormGroup({
                  'name' : new FormControl(null ,Validators.required ),
                  'amount' : new FormControl(null , [Validators.required , Validators.pattern(/^[1-9]+[0-9]*$/)] )
                })
              )
            }

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
              'name' : new FormControl(ingridient.name , Validators.required),
              'amount' : new FormControl(ingridient.amount , [Validators.required , Validators.pattern(/^[1-9]+[0-9]*$/)])
            }))
        }
       }
  }
  this.recipeForm = new FormGroup({
    'name' : new FormControl(recipeName , Validators.required),
    'imgPath': new FormControl(recipeImagePath, Validators.required),
    'description' : new FormControl(recipeDescription , Validators.required),
    'ingredients' : recipeIngridents
  });
}

onSubmit(){
  // const newRecipe = new Recipe(this.recipeForm.value['name'] ,
  // this.recipeForm.value['description'],
  // this.recipeForm.value['imgPath'],
  // this.recipeForm.value['ingredients'] );
 if(this.editMode){
    this.recipeService.updateRecipe(this.id , this.recipeForm.value);
 }
 else{
    this.recipeService.addRecipe(this.recipeForm.value);
 }

 this.router.navigate(['../'] , {relativeTo:this.route})
}



get controls() {
  return (<FormArray>this.recipeForm.get('ingredients')).controls;
}

onCancel(){
  this.router.navigate(['../'] , {relativeTo:this.route})
}

onDeleteIngrident(index : number)
{
  (<FormArray>this.recipeForm.get('ingredients')).clear();
}
}
