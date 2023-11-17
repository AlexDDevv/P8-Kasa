import React from 'react'
import Datas from '../../data/data.json'
import { Link } from 'react-router-dom'

export default function Card() {
    return (
        <div className="cards-container">
            {Datas.map(item => (
                <div key={item.id} className="card">
                    <Link to={"Housing/" + item.id}>
                        <figure className="card-figure">
                            <img src={item.cover} alt="Image d'un appartement" className="card-img" />
                            <figcaption className="card-figcaption">
                                <h2 className="card-title">{item.title}</h2>
                            </figcaption>
                        </figure>
                    </Link>
                </div>
            ))}
        </div>
    )
}
