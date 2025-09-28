import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './fanta.css'
import App from './App.jsx'

/*Inject root in index.html with App*/
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
