export default function Spinner() {
    return (
        <svg className="spinner" width="48" height="48" viewBox="0 0 50 50" style={{ display: 'block', margin: '0 auto' }}>
            <circle className="path" cx="25" cy="25" r="20" fill="none" stroke="#4fa94d" strokeWidth="5" strokeLinecap="round" strokeDasharray="31.4 31.4" strokeDashoffset="0">
                <animateTransform attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="1s" repeatCount="indefinite" />
            </circle>
        </svg>
    );
}
