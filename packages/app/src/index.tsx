import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from '@recap/shared'

import App from './App'

import 'react-toastify/dist/ReactToastify.css'
import './globals.css'
import './styleguide.css'

const container = document.getElementById('app') as Element
const root = ReactDOM.createRoot(container)

root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <ToastContainer />
    </BrowserRouter>
  </StrictMode>
)
