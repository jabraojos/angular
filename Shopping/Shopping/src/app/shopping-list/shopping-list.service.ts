import { Ingredient } from '../shared/ingedient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredient[]>();
    private ingredients: Ingredient[] = [];

    getIngredients() {
        return this.ingredients.slice();
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
                //Añadimos el ingrediente con la nueva cantidad
                ingredientInList[0].amount += ingredient.amount;
            }
        }

        this.ingredientsChanged.next(this.ingredients.slice());

    }
}