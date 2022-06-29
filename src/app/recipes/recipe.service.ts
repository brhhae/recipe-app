import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 
                  'This is a test', 
                  'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg',
                  [
                    new Ingredient('Meat',1),
                    new Ingredient('Love', 3)
                  ]),
        new Recipe('A Test Recipe 2', 
                  'This is a test', 
                  'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg',
                  [
                    new Ingredient('Milk', 500),
                    new Ingredient('Honey', 2),
                    new Ingredient('Cinnamon', 4)
                  ]),
        new Recipe('A Test Recipe 3', 
                  'This is a test', 
                  'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg',
                  [
                    new Ingredient('Milk', 500),
                    new Ingredient('Honey', 2),
                    new Ingredient('Cinnamon', 4)
                  ])
      ];

      constructor(private slService: ShoppingListService){

      }
    
      getRecipes(){
        return this.recipes.slice(); //only get a copy, cannot access the og array
      }

      getRecipe(index: number) {
        return this.recipes[index];
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
      }
}