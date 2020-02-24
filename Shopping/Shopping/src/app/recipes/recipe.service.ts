import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingedient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService{
    recipesChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe(
            'Tasty Schinitzel',
            'A super-tasty Schnitzel - just awesome!',
            'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]),
        new Recipe(
            'Big Fat Burger',
            'What else you nedd to say?',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cheeseburger.jpg/1200px-Cheeseburger.jpg',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meet', 1)
            ])
    ];

    constructor(private slService: ShoppingListService){

    }
    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number){
        return this.recipes.slice()[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number){
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}