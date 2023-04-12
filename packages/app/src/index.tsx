import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { RecoilRoot as Store } from 'recoil'

import App from './App'

import './globals.css'
import './styleguide.css'

const container = document.getElementById('app') as Element
const root = ReactDOM.createRoot(container)

root.render(
  <Store>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Store>
)
