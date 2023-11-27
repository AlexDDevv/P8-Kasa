import React from 'react'
import Datas from '../../data/data.json'
import Gallery from '../Layout/Gallery'
import Rate from './Rate'
import Collapse from '../Layout/Collapse'
import { useParams, Navigate } from 'react-router-dom'


export default function HousingContent() {
    const { id } = useParams()
    const data = Datas.find(data => data.id === id)

    if (!data) {
        return <Navigate to="/notfound"/>
    }

    return <>
        <section key={data.id} className="house-section">
            <Gallery
                img={data.pictures}
            />
            <div className="house-content">
                <div className="flex-content">
                    <div className="title-and-tags">
                        <div className="title-and-location">
                            <h2 className="title-house">{data.title}</h2>
                            <p className="location-house">{data.location}</p>
                        </div>
                        <div className="tags-container">
                            {data.tags.map((tag, i) => (
                                <span key={i} className="tag">{tag}</span>
                            ))}
                        </div>
                    </div>
                    <div className="host-and-rate">
                        <div className="host-container">
                            <div className="host-name">
                                <p className="host-p">{data.host.name}</p>
                            </div>
                            <div className="host-avatar">
                                <img src={data.host.picture} alt="Image de l'hébergeur" className="host-img" />
                            </div>
                        </div>
                        <Rate 
                            rating={data.rating}
                        />
                    </div>
                </div>
                <div className="collapse-section">
                    <div className="collapse-container">
                        <Collapse 
                            title="Description"
                            description={data.description}
                        />
                    </div>
                    <div className="collapse-container">
                        <Collapse 
                            title="Équipements"
                            description=
                                {data.equipments.map((item, i) => (
                                    <span key={i} className="equipments">{item}</span>
                                ))}
                        />
                    </div>
                </div>
            </div>
        </section>
    </>
}

