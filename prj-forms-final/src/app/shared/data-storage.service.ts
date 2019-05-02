import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  constructor(
    private http: Http,
    private recipeService: RecipeService
  ) { }

  storeRecipes() {
    return this.http.put(
      'https://ng-recipe-book-aa489.firebaseio.com/recipes.json', this.recipeService.getRecipes());
  }

  getRecipes() {
    return this.http
      .get("https://ng-recipe-book-aa489.firebaseio.com/recipes.json")
      .map((response: Response) => {
        const recipes: Recipe[] = response.json();
        for (let recipe of recipes) {
          if (!recipe["ingredient"]) {
            console.log(recipe);
            recipe["ingredient"] = [];
          }
        }
        return recipes;
      })
      .subscribe((recipes: Recipe[]) => {
        this.recipeService.setRecipes(recipes);
      });
  }
}
