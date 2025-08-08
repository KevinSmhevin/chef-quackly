import { useState } from "react"


import QuacklyRecipe from "./components/QuacklyRecipe";
import IngredientsList from "./components/IngredientsList";
import Spinner from "./components/Spinner";

import { getRecipeFromChefClaude } from "./ai"

export default function Main() {
    const [ingredients, setIngredients] = useState([])
    const [recipe, setRecipe] = useState("");
    const [isLoading, setIsLoading] = useState(false);


    function addIngredient(formData) {
        const newIngredient = formData.get('ingredient').trim();
        setIngredients(prevIngredients => [...prevIngredients, newIngredient]);
    }

    function removeIngredient(index) {
        setIngredients(prevIngredients => prevIngredients.filter((_, i) => i !== index));
    }

    async function getRecipe() {
        setIsLoading(true);
        try {
            const recipeMarkdown = await getRecipeFromChefClaude(ingredients);
            setRecipe(recipeMarkdown);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <main>
            <form className="add-ingredient-form" action={addIngredient}>
                <input 
                    aria-label="Add ingredient"
                    type="text" 
                    placeholder="Add ingredients here" 
                    name="ingredient"
                />
                <button type="submit">Add ingredient</button>
            </form>
            {ingredients.length > 0 && 
                <IngredientsList 
                    ingredients={ingredients}
                    getRecipe={getRecipe}
                    onRemoveIngredient={removeIngredient}
                />
            }
            {isLoading && (
                <div className="loading-screen">
                    <Spinner />
                    <span className="loading-text">Loading recipe...</span>
                </div>
            )}
            {!isLoading && recipe && <QuacklyRecipe recipe={recipe} />}
        </main>
    )
}