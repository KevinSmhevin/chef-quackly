import ReactMarkdown from 'react-markdown';
import chefIcon from '../assets/chef_quackly_3.svg';

export default function QuacklyRecipe(props) {
    return (
        <section className="suggested-recipe-container" aria-live="polite">
            <h2>Chef Quackly suggests:</h2>
            <img src={chefIcon} className="image-response" alt="Chef Quackly Icon" />
            <ReactMarkdown>{props.recipe}</ReactMarkdown>
        </section>
    )
}
