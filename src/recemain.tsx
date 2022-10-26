import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './recepies'
import './style/index.css'


ReactDOM.createRoot(document.getElementById('recepies') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
