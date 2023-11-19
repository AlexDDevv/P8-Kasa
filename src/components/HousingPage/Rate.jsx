import React from 'react'
import FullStar from '../../assets/images/rate/full-star.png'
import EmptyStar from '../../assets/images/rate/empty-star.png'

export default function Rate(props) {
    const ratingStar = [1, 2, 3, 4, 5]

  return (
    <div className="rate-container">
        {ratingStar.map(i => (
            <img key={i}
            src={i <= props.rating ? FullStar : EmptyStar} 
            alt="Notation d'étoile" 
            className="rate-stars"/>
        ))}
    </div>
  )
}
