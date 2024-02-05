import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className='header'>
        <div className="header-logo">
            <img src="../../src/assets/images/logo/logo-desktop.png" alt="Logo de l'entreprise Kasa" className="logo-header" />
        </div>
        <nav className="nav-bar">
            <ul className="nav-list">
              <li className="nav-li">
                <NavLink to="/" className={({ isActive }) => isActive ? "active-nav-link" : "nav-link"}>Accueil</NavLink>
              </li>
              <li className="nav-li">
                <NavLink to="/about" className={({ isActive }) => isActive ? "active-nav-link" : "nav-link"}>À Propos</NavLink>
              </li>
            </ul>
        </nav>
    </header>
  )
}
