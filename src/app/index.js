import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Routes from './routes'
import './style.css'

const App = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  )
}

export default App
