import React from 'react'
import Header from '../components/Layout/Header'
import AboutBanner from '../components/About/AboutBanner'
import DisplayCollapse from '../components/Layout/DisplayCollapse'
import Footer from '../components/Layout/Footer'

export default function About() {
  return <>
    <Header />
    <AboutBanner />
    <DisplayCollapse />
    <Footer />
  </>
}
