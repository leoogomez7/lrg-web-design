import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css' // Aquí es donde Tailwind hará su magia

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
