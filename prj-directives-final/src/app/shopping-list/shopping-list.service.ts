// import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
export class ShoppingListService {
  ingredientChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  constructor() { }

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientChanged.emit(this.getIngredients());
  }
}
