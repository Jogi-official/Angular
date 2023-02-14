import { Recipe } from "./recipe.model";

export class RecipeService{

  private recipes : Recipe[] = [
    new Recipe('Chicken', 'This is Chicken Biryani' , 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80'),
    new Recipe('XYUX', 'Chicken dadsad' , 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVPTVxKFwqL3_wgTS__Mw49Zkfuet0eGaepw&usqp=CAU'),
    new Recipe('CSDSDS', 'Chicken XYZ' , 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80'),
    new Recipe('DSDs', 'Chicken BDDD' , 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVPTVxKFwqL3_wgTS__Mw49Zkfuet0eGaepw&usqp=CAU'),
  ];

getRecipes(){
  return this.recipes.slice();
}

}
