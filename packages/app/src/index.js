import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { RecoilRoot as Store } from 'recoil'

import App from './App'

import './globals.css'
import './styleguide.css'

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <Store>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Store>
  </React.StrictMode>
)
