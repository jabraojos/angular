import { Ingredient } from '../shared/ingedient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();
    private ingredients: Ingredient[] = [];

    getIngredients() {
        return this.ingredients.slice();
    }

    getIngredient(index: number){
        return this.ingredients[index];
    }

    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]){
        for(let ingredient of ingredients){
            var ingredientInList = this.ingredients.filter(
                function(el){
                    return el.name === ingredient.name;
                }
            );

            if(ingredientInList.length === 0){
                this.ingredients.push(ingredient);
            } else {
                // Añadimos el ingrediente con la nueva cantidad
                ingredientInList[0].amount += ingredient.amount;
            }
        }

        this.ingredientsChanged.next(this.ingredients.slice());

    }

    updateIngredient(index: number, newIngredient: Ingredient){
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    deleteIngredient(index: number){
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}