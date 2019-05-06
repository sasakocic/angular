import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import 'rxjs/Rx';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataStorageService {
  constructor(private httpClient: HttpClient,
              private recipeService: RecipeService,
              private authService: AuthService) {
  }

  storeRecipes() {
    const token = this.authService.getToken();

    return this.httpClient.put(
      "https://ng-recipe-book-aa489.firebaseio.com/recipes.json?auth=" +
        token,
      this.recipeService.getRecipes(), {
        observe: 'body'
      }
    );
  }

  getRecipes() {
    const token = this.authService.getToken();
    this.httpClient
      // .get<Recipe[]>(
      //   "https://ng-recipe-book-aa489.firebaseio.com/recipes.json?auth=" +
      //     token
      // )
      .get(
        "https://ng-recipe-book-aa489.firebaseio.com/recipes.json?auth=" + token, {
          observe: 'body',
          responseType: 'json'
        }
      )
      .map(recipes => {
        console.log(recipes);
        for (let recipe of recipes) {
          if (!recipe["ingredients"]) {
            recipe["ingredients"] = [];
          }
        }
        return recipes;
      })
      .subscribe((recipes: Recipe[]) => {
        this.recipeService.setRecipes(recipes);
      });
  }
}
