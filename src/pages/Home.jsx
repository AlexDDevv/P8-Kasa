import React from 'react'
import Header from '../components/Layout/Header'
import Banner from '../components/Layout/Banner'
import Card from '../components/Home/Card'
import Footer from '../components/Layout/Footer'
import Datas from '../data/data.json'
import homeBanner from '../assets/images/banner/banner-home.png'

export default function Home() {
    return <>
        <Header />
        <Banner
            ifTitle={true}
            title="Chez vous, partout et ailleurs"
            src={homeBanner}
        />
        <section className="cards-container">
            {Datas.map(item => (
                <Card 
                    key={item.id}
                    id={item.id}
                    cover={item.cover}
                    title={item.title}
                />
            ))}
        </section>
        <Footer />
    </>
}
