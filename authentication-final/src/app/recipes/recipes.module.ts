import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecipesComponent } from './recipes.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { DropdownDirective } from '../shared/dropdown.directive';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeStartComponent,
    RecipeListComponent,
    RecipeEditComponent,
    RecipeDetailComponent,
    RecipeItemComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class RecipesModule {
}
