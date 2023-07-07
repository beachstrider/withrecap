import React, { StrictMode } from 'react'

import { ErrorBoundary } from '@sentry/react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'

import { ToastContainer, initSentry } from '@recap/shared'

import App from './App'
import './globals.css'

initSentry('web')

const container = document.getElementById('app') as Element
const root = ReactDOM.createRoot(container)

root.render(
  <StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <App />
        <ToastContainer />
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>
)
