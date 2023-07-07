import React, { StrictMode } from 'react'

import { ErrorBoundary } from '@sentry/react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { initSentry } from '@recap/shared'

import { App } from './App'
import './index.css'

const FallbackComponent = () => {
  return <div>An unexpected error has occurred</div>
}

initSentry('extension:popup')

const container = document.getElementById('app-container') as Element
const root = createRoot(container)

root.render(
  <StrictMode>
    <ErrorBoundary fallback={FallbackComponent}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>
)
