import ReactMarkdown from 'react-markdown';
import QuacklyDuck from './QuacklyDuck';

export default function QuacklyRecipe(props) {
    return (
        <section className="suggested-recipe-container" aria-live="polite">
            <h2>Chef Quackly suggests:</h2>
            <QuacklyDuck />
            <ReactMarkdown>{props.recipe}</ReactMarkdown>
        </section>
    )
}
