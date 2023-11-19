import React, { useState } from 'react'
import LeftArrow from '../../assets/images/arrows/arrow-left.png'
import RightArrow from '../../assets/images/arrows/arrow-right.png'

export default function Gallery(props) {
    const [sliderIndex, setSliderIndex] = useState(1)

    const toggleImage = (indexPayLoad) => {
        setSliderIndex(state => {
            if (indexPayLoad + state > props.img.length) {
              return 1
            } else if (indexPayLoad + state < 1) {
              return props.img.length
            } else {
              return state + indexPayLoad
            }
        })
    }

  return (
    <>
        <div className="slider-container">
            {props.img.map((picture, i) => (
                <img key={i} src={picture} alt="Images de présentation de l'appartement" 
                className={i + 1 === sliderIndex ? 'slider-img' : 'slider-img hidden'} />
            ))}

            <img onClick={() => toggleImage(-1)} src={LeftArrow} alt="Flèche de gauche" className="carrousel-arrows arrow-left" />
            <img onClick={() => toggleImage(1)} src={RightArrow} alt="Flèche de droite" className="carrousel-arrows arrow-right" />

            <p className="slide-nb">{sliderIndex} / {props.img.length}</p>
        </div>
    </>
  )
}
