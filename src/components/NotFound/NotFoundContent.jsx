import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFoundContent() {
  return (
    <section className="erreur-section">
        <div className="erreur-content">
            <h1 className="erreur-title">404</h1>
            <p className="erreur-p">Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/home" className="return-home">Retourner sur la page d'accueil</Link>
        </div>
    </section>
  )
}
