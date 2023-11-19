import React, { useState } from 'react'
import ArrowCollapse from '../../assets/images/arrows/arrow-menu.png'

export default function Collapse(props) {
    const [toggle, setToggle] = useState(false)

    const toggleState = () => {
        setToggle(!toggle)
    }

  return (
    <div className="menu-collapse">
        <div className="menu-title">
            <h2 className="title-collapse">{props.title}</h2>
            <img onClick={() => toggleState()} src={ArrowCollapse} alt="Chevron pour ouvrir le menu" className={toggle ? "arrow-collapse rotate" : "arrow-collapse"} />
        </div>
        <div className={toggle ? "menu-description open-menu" : "menu-description"}>
            <p className="p-description">{props.description}</p>
        </div>
    </div>
  )
}

