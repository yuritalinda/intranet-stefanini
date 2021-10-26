import React from 'react'
import Header from '../components/header/Header'
import Carrusel from '../components/carrusel/Carrusel'
import Footer from '../components/footer/Footer'
import '../viewPages/home.css'
import ShowOption from '../components/options/ShowOption'

export default function Home() {
    return (
        <div>
         
         <Header />
         <div className="main-container">

         <Carrusel />
         <ShowOption />
         </div>

         <Footer />

        </div>
    )
}







