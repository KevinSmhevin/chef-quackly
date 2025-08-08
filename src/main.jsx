import { useState, useRef } from "react"

import QuacklyRecipe from "./components/QuacklyRecipe";
import IngredientsList from "./components/IngredientsList";
import Spinner from "./components/Spinner";

import { getRecipeFromChefClaude } from "./ai"

export default function Main() {
    const [ingredients, setIngredients] = useState([])
    const [recipe, setRecipe] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const loadingRef = useRef(null);
    const recipeRef = useRef(null);


    function addIngredient(formData) {
        const newIngredient = formData.get('ingredient').trim();
        if (!newIngredient) return; // Prevent adding empty or whitespace-only ingredients
        setIngredients(prevIngredients => [...prevIngredients, newIngredient]);
    }

    function removeIngredient(index) {
        setIngredients(prevIngredients => prevIngredients.filter((_, i) => i !== index));
    }

    async function getRecipe() {
        setIsLoading(true);
        // Scroll to loading screen
        setTimeout(() => {
            if (loadingRef.current) {
                loadingRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
            }
        }, 0);
        try {
            const recipeMarkdown = await getRecipeFromChefClaude(ingredients);
            setRecipe(recipeMarkdown);
            // Scroll to recipe after loading
            setTimeout(() => {
                if (recipeRef.current) {
                    recipeRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
                }
            }, 100); // slight delay to ensure render
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
                <div className="loading-screen" ref={loadingRef}>
                    <Spinner />
                    <span className="loading-text">Chef Quackly is working on your recipe ^.^</span>
                </div>
            )}
            {!isLoading && recipe && (
                <div ref={recipeRef}>
                    <QuacklyRecipe recipe={recipe} />
                </div>
            )}
        </main>
    )
}