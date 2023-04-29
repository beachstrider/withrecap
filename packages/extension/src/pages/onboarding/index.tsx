import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { initSentry, ToastContainer } from '@recap/shared'
import { ErrorBoundary } from '@sentry/react'

import 'react-toastify/dist/ReactToastify.css'

import { App } from './App'

import './index.css'

const FallbackComponent = () => {
  return <div>An unexpected error has occurred</div>
}

initSentry('extension:onboarding')

const container = document.getElementById('app-container') as Element
const root = createRoot(container)

root.render(
  <StrictMode>
    <ErrorBoundary fallback={FallbackComponent}>
      <HashRouter>
        <App />
        <ToastContainer />
      </HashRouter>
    </ErrorBoundary>
  </StrictMode>
)
