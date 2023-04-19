import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { ToastContainer } from '@recap/shared'

import { App } from './App'

import './index.css'

const container = document.getElementById('app-container') as Element
const root = createRoot(container)

root.render(
  <StrictMode>
    <HashRouter>
      <App />
      <ToastContainer />
    </HashRouter>
  </StrictMode>
)
