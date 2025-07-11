import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router'
import './utils/styles/main.scss'
import AppRouter from './components/Router/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <AppRouter />
    </Router>
  </StrictMode>
)
