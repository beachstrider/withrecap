import React from 'react'
import { Link } from 'react-router-dom'

export default function NoPage() {
  return (
    <h5 className="flex items-center justify-center flex-1">
      404 | This page couldn't be found, go to&nbsp;
      <Link className="underline" to="/">
        Home page
      </Link>
    </h5>
  )
}
