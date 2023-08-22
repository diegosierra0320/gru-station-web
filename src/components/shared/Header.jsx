// import React from 'react'
import { Link } from 'react-router-dom'
import BurguerButton from './burguerButton/BurguerButton'

const Header = () => {
  
  return (
    <header className='header'>
        <Link to='/'><img src="/utils/gru.PNG" alt="" /></Link>
        <nav className='header-nav'>
            <Link to='/'><b><i className="fa-solid fa-house"></i>Inicio</b></Link>
            <b><i className="fa-solid fa-file-lines"></i>Nuestra carta</b>
            <b><i className="fa-solid fa-calendar"></i>Reserva una mesa</b>
            <b><i className="fa-solid fa-location-dot"></i>Restaurantes</b>
        </nav>
        <div className='burguerButton'>
          <BurguerButton/>
        </div>
    </header>
  )
}

export default Header