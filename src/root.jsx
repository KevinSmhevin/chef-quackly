import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Main from "./components/Main.jsx";
import Header from "./components/Header.jsx";
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
