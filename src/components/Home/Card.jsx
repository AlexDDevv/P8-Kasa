import React from 'react'
import { Link } from 'react-router-dom'

export default function Card({ id, cover, title }) {
    return (
        <div key={id} className="card">
            <Link to={"housing/" + id}>
                <figure className="card-figure">
                    <img src={cover} alt="Image d'un appartement" className="card-img" />
                    <figcaption className="card-figcaption">
                        <h2 className="card-title">{title}</h2>
                    </figcaption>
                </figure>
            </Link>
        </div>
    )
}
