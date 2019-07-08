import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingedient.model';

export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'A Test Recipe', 
            'This is a Simple test', 
            'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
            [new Ingredient('Apples', 5)]),
        new Recipe(
            'Other Test Recipe', 
            'This is other Simple test', 
            'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
            [new Ingredient('Tomates', 10)])
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}