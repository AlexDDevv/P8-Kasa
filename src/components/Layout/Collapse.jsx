import React, { useState } from 'react'
import ArrowCollapse from '../../assets/images/arrows/arrow-menu.png'

export default function Collapse(props) {
    const [toggle, setToggle] = useState(Array(props.data.length).fill(false))
    
    const toggleState = (id) => {
        const newToggle = [...toggle];
        newToggle[id] = !newToggle[id];
        setToggle(newToggle)
    }

  return (
    <div className="collapse-container">
        {props.data.map((item, id) => (
            <div key={id} className="menu-collapse">
                <div className="menu-title">
                    <h2 className="title-collapse">{item.title}</h2>
                    <img onClick={() => toggleState(id)} src={ArrowCollapse} alt="Chevron pour ouvrir le menu" className={toggle[id] ? "arrow-collapse rotate" : "arrow-collapse"} />
                </div>
                <div className={toggle[id] ? "menu-description open-menu" : "menu-description"}>
                    <p className="p-description">{item.description}</p>
                </div>
            </div>
        ))}
    </div>
  )
}
