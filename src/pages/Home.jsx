import React from 'react'
import Header from '../components/Layout/Header'
import HomeBanner from '../components/Home/HomeBanner'
import DisplayCard from '../components/Home/DisplayCard'
import Footer from '../components/Layout/Footer'

export default function Home() {
  return <>
    <Header />
    <HomeBanner />
    <DisplayCard />
    <Footer />
  </>
}
