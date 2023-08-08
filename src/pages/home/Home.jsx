// import React from 'react'
import './Home.css'
import { Link } from "react-router-dom"

const Home = () => {

  return (
    <div className='home-container'>
        <img src="/utils/gru.PNG" alt="" />
        <div className='home-nav'>
            <Link to='/carta'><b>NUESTRA CARTA</b></Link>
            <b>PEDIR COMIDA A DOMICILIO</b>
            <b>RESERVAR UNA MESA</b>
            <b>RESTAURANTES</b>
        </div>

        <div className='home-redes'>
        <b>Síguenos</b>
        <ul>
            <a href="https://www.facebook.com/p/GRU-Station-100063695045353/" target='blank'><li><i className="fa-brands fa-facebook"></i></li></a>
            <a href="https://www.instagram.com/grustation/" target='blank'><li><i className="fa-brands fa-instagram"></i></li></a>
            <a href="https://goo.gl/maps/pteefE69yTthLidi9" target='blank'><li><i className="fa-solid fa-location-dot"></i></li></a>
        </ul>
        </div>
    </div>
  )
}

export default Home