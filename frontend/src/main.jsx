import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { SnackbarProvider } from 'notistack'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <SnackbarProvider maxSnack={3} autoHideDuration={2500} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SnackbarProvider>
  </React.StrictMode>
)
