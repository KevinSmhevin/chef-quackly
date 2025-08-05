import { useState } from "react"

export default function Main() {
    const [ingredients, setIngredients] = useState([])

    const ingredienListItems = ingredients.map((ingredient, index) => (
        <li key={index}>{ingredient}</li>
    ))

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
            {ingredients.length > 0 && 
            <section>
                <h2>Ingredients on hand:</h2>
                <ul className="ingredients-list" aria-live="polite">
                    {ingredienListItems}
                </ul>
                {
                    ingredients.length > 3 && 
                    <div className="get-recipe-container">
                        <div>
                            <h3>Ready for a recipe?</h3>
                            <p>Generate a recipe from your list of ingredients.</p>
                        </div>
                        <button onClick={toggleRecipe}>Get a recipe</button>
                    </div>
                }
            </section>
    }
            {recipeShown && 
                <section>
                    <h2>Your Recipe:</h2>
                    <p>Delicious recipe goes here...</p>
                </section>
            }
        
        </main>
    )
}