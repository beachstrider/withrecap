import React from 'react'

export default function NoScroll() {
  return (
    <style>{`
      #app {
        height: 100vh;
        overflow-y: hidden;
      }
    `}</style>
  )
}
