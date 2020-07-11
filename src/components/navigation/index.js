import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'

import './style.css'

const Navigation = () => {
  const history = useHistory()

  const handleLogout = () => {
    localStorage.removeItem('user')
    history.push('/')
  }

  return (
    <nav className="navigation">
      <div>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/chat">Chat</NavLink>
        <NavLink to="/profile">Profile</NavLink>
      </div>

      <button onClick={handleLogout}>X</button>
    </nav>
  )
}

export default React.memo(Navigation)
