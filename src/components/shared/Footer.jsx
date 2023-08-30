import { Link } from 'react-router-dom'

const Footer = () => {

  return (
    <div className='footer'>
      <div className='footer-info1'>
      <Link to='/'><img src="/utils/gru.PNG" alt="" /></Link>
      <ul>
          <li>Gru Station © 2023</li>
          <li>Todos los derechos reservados</li>
          <li>Desarrolado por DS</li>
      </ul>
      </div>
      <hr/>
    <div className='footer-info2'>
      <b>ACERCA DE GRU STATION</b>
      <ul>
        <li>Nosotros</li>
        <li>Pide en linea</li>
        <li>Restaurantes</li>
        <li>Nuestra carta</li>
      </ul>
    </div>
    <hr/>
    <div className='footer-info3'>
      <b>AYUDA</b>
      <ul>
        <li>Escribenos</li>
        <li>Trabaja con nosotros</li>
      </ul>
    </div>
    <hr/>
    <div className='footer-info4'>
      <b>SÍGUENOS</b>
      <ul>
          <a href="https://www.facebook.com/p/GRU-Station-100063695045353/" target='blank'><li><i className="fa-brands fa-facebook"></i></li></a>
          <a href="https://www.instagram.com/grustation/" target='blank'><li><i className="fa-brands fa-instagram"></i></li></a>
          <a href="https://goo.gl/maps/pteefE69yTthLidi9" target='blank'><li><i className="fa-solid fa-location-dot"></i></li></a>
      </ul>
    </div>
  </div>
  )
}

export default Footer