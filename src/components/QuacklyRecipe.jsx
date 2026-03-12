import ReactMarkdown from 'react-markdown';
import QuacklyDuck from './QuacklyDuck';

export default function QuacklyRecipe(props) {
    return (
        <section className="suggested-recipe-container" aria-live="polite" ref={props.recipeRef}>
            <QuacklyDuck />
            <ReactMarkdown>{props.recipe}</ReactMarkdown>
            <button className="get-recipe-button" onClick={props.getRecipe}>Try another recipe</button>
        </section>
    );
}
