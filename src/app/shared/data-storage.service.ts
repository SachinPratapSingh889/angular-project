import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import { map } from "rxjs-compat/operator/map";


@Injectable({ providedIn: 'root' })
export class DataStorageService {
  
    constructor(private http: HttpClient, private recipeService: RecipeService) { }



    storeRecipes() {
        const recipes = this.recipeService.getRecipes();
        this.http.put('https://first-ng-project-56636-default-rtdb.firebaseio.com/recipes.json' ,recipes)
        .subscribe(Response=>{
            console.log(Response);
        });
    }
     

    fetchRecipes() {
     this.http
     .get<Recipe[]>('https://first-ng-project-56636-default-rtdb.firebaseio.com/recipes.json')
    
     
    .subscribe(recipes =>{
    this.recipeService.setRecipes(recipes);
     })
    }

}
