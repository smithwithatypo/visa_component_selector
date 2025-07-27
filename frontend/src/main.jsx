// React imports
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Visa imports
import '@visa/nova-styles/styles.css';
// import '@visa/nova-styles/themes/visa-light/index.css';   // light theme
import '@visa/nova-styles/themes/visa-dark/index.css';    // dark theme

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
