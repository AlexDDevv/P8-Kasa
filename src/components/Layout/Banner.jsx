import React from 'react'

export default function Banner({ ifTitle, title, src }) {
  return (
    <div className="banner-container">
        {ifTitle && 
          <h1 className="banner-title">{title}</h1>
        }
        <img src={src} alt="Bannière Kasa" className="banner-img"/>
    </div>
  )
}
