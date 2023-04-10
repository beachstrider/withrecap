import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import PublicHome from './pages/index'

export default function App() {
  return (
    <Routes>
      <Route index element={<PublicHome />} />
      <Route path="home" element={<Home />} />
    </Routes>
  )
}
