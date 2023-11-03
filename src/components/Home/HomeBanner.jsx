import React from 'react'
import Banner from '../Layout/Banner'
import homeBanner from '../../assets/images/banner/banner-home.png'

export default function HomeBanner() {
  return (
    <Banner 
        title="Chez vous, partout et ailleurs"
        src={homeBanner}
    />
  )
}
