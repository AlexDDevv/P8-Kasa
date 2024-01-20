import React from 'react'
import Header from '../components/Layout/Header'
import Banner from '../components/Layout/Banner'
import AboutContent from '../components/About/AboutContent'
import Footer from '../components/Layout/Footer'
import aboutBanner from '../assets/images/banner/banner-about.png'

export default function About() {
  return <>
    <Header />
    <Banner 
      ifTitle={false}
      src={aboutBanner}
    />
    <AboutContent />
    <Footer />
  </>
}
