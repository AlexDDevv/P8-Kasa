import React from 'react'

export default function Banner(props) {
  return (
    <div className="banner-container">
        <h1 className="banner-title">{props.title}</h1>
        <img src={props.src} alt="Bannière Kasa" className="banner-img"/>
    </div>
  )
}
