import React from 'react'
import { Link } from 'react-router-dom'
import BurguerButton from './burguerButton/BurguerButton'
import { useState } from 'react'

const Header = () => {

  const [ clicked, setClicked ] = useState(false)

  const handleClick = () => {
    setClicked(!clicked)
  }
  
  return (
    <div className='header'>
        <Link to='/'><img src="/utils/gru.PNG" alt="" /></Link>
        <nav className={`header-nav ${clicked ? 'active': ''}`}>
            <Link to='/'><b><i className="fa-solid fa-house"></i>Inicio</b></Link>
            <b><i className="fa-solid fa-file-lines"></i>Nuestra carta</b>
            <b><i className="fa-solid fa-calendar"></i>Reserva una mesa</b>
            <b><i className="fa-solid fa-location-dot"></i>Restaurantes</b>
        </nav>
        <div className='burguerButton'>
          <BurguerButton clicked={clicked} handleClick={handleClick}/>
        </div>
    </div>
  )
}

export default Header