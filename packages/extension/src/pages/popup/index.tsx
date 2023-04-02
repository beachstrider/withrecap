import React from 'react'
import { createRoot } from 'react-dom/client'

import Popup from './popup'
import './index.css'

const container = document.getElementById('app-container') as Element
const root = createRoot(container)

root.render(<Popup />)
