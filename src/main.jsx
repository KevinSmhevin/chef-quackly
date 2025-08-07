import { useState } from "react"

import QuacklyRecipe from "./components/QuacklyRecipe";
import IngredientsList from "./components/IngredientsList";

export default function Main() {
    const [ingredients, setIngredients] = useState([])

    function addIngredient(formData) {
        const newIngredient = formData.get('ingredient').trim();
        setIngredients(prevIngredients => [...prevIngredients, newIngredient]);
    }

    const [recipeShown, setRecipeShown] = useState(false);

    function toggleRecipe() {
        setRecipeShown(prev => !prev);
    }

    return (
        <main>
            <form className="add-ingredient-form" action={addIngredient}>
                <input 
                    aria-label="Add ingredient"
                    type="text" 
                    placeholder="Enter your recipe here..." 
                    name="ingredient"
                    />
                    <button type="submit">Add ingredient</button>
            </form>
            {ingredients.length > 0 && <IngredientsList 
                ingredients={ingredients}
                toggleRecipe={toggleRecipe}
            />}
            {recipeShown && <QuacklyRecipe />}
        </main>
    )
}