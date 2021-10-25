import React from 'react'
import Header from '../components/header/Header'
import Carrusel from '../components/carrusel/Carrusel'
import Options from '../components/options/Options'
import Footer from '../components/footer/Footer'
import '../viewPages/home.css'



export default function Home() {
    return (
        <div>
         
         <Header />
         <div className="main-container">

         <Carrusel />
         <Options />

         </div>

         <Footer />

        </div>
    )
}







