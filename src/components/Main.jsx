export default function Main() {
    const ingredients = ["Chicken", "Rice", "Broccoli"]

    const ingredienListItems = ingredients.map((ingredient, index) => (
        <li key={index}>{ingredient}</li>
    ))

    function handleSubmit(event) {
        event.preventDefault()
        console.log("Form submitted!");

        const formData = new FormData(event.currentTarget);
        const newIngredient = formData.get('ingredient').trim();
        console.log(newIngredient);
        ingredients.push(newIngredient);
        console.log(ingredients);
    }

    return (
        <main>
            <form className="add-ingredient-form" onSubmit={handleSubmit}>
                <input 
                    aria-label="Add ingredient"
                    type="text" 
                    placeholder="Enter your recipe here..." 
                    name="ingredient"
                    />
                    <button type="submit">Add ingredient</button>
            </form>
            <ul>
                {ingredienListItems}
            </ul>
        </main>
    )
}