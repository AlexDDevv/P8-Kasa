import React from 'react'
import ArrowCollapse from '../../assets/images/arrows/arrow-menu.png'
import DataCollapse from '../../data/dataCollapse.json'

export default function Collapse() {
  return (
    <div className="collapse-container">
        {DataCollapse.map(item => (
            <div key={item.id} className="menu-collapse">
                <div className="menu-title">
                    <h2 className="title-collapse">{item.title}</h2>
                    <img src={ArrowCollapse} alt="Chevron pour ouvrir le menu" className="arrow-collapse" />
                </div>
                <div className="menu-description">
                    <p className="p-description">{item.description}</p>
                </div>
            </div>
        ))}
    </div>
  )
}
