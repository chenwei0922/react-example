import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import App from './router/router.tsx'
// import './index.css'
import './theme/var.scss'
import './theme/base.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
