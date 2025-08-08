export default function IngredientItem({ ingredient, onRemove }) {
    return (
        <li className="ingredient-item">
            <button
                className="ingredient-btn"
                aria-label={`Remove ${ingredient}`}
                type="button"
                onClick={onRemove}
            >
                <span className="ingredient-text">{ingredient}</span>
                <svg className="ingredient-x" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="4" y1="4" x2="12" y2="12" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                    <line x1="12" y1="4" x2="4" y2="12" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                </svg>
            </button>
        </li>
    );
}
