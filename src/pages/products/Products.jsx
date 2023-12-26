// import React from 'react'
import Header from '../../components/shared/Header'
import './Products.css'
import Footer from '../../components/shared/Footer'
import SwiperProducts from '../../components/shared/swiperProducts/SwiperProducts'
import { useState } from 'react'

const Products = () => {

  const [open, setOpen] = useState(false)

  const productsInfo = [
    {
      id: 1,
      name: "Hamburguesa clasica",
      description: "Pan artesanal, carne artesanal(150 grs), vegetales, queso, papa cabello de angel",
      price: 14500,
      image: "https://media.istockphoto.com/id/1206323282/es/foto/hamburguesa-jugosa-sobre-fondo-blanco.jpg?s=612x612&w=0&k=20&c=r2mLaVFZxtRk4MeKpdQLtwTkcctyOpGEP-OxPeyo4_c="
    },
    {
      id: 2,
      name: "Hamburguesa clasica doble carne",
      description: "Pan artesanal, carne artesanal(300 grs), vegetales, queso, papa cabello de angel",
      price: 24500,
      image: "https://media.istockphoto.com/id/1206323282/es/foto/hamburguesa-jugosa-sobre-fondo-blanco.jpg?s=612x612&w=0&k=20&c=r2mLaVFZxtRk4MeKpdQLtwTkcctyOpGEP-OxPeyo4_c="
    },
    {
      id: 3,
      name: "Hamburguesa criolla",
      description: "Pan artesanal, carne artesanal, vegetales, queso, papa cabello de angel, tocineta, huevo, jamon",
      price: 18500,
      image: "https://media.istockphoto.com/id/1206323282/es/foto/hamburguesa-jugosa-sobre-fondo-blanco.jpg?s=612x612&w=0&k=20&c=r2mLaVFZxtRk4MeKpdQLtwTkcctyOpGEP-OxPeyo4_c="
    },
    {
      id: 4,
      name: "Hamburguesa GRU",
      description: "Pan artesanal, carne artesanal, vegetales, queso, papa cabello de angel, tocineta, huevo, jamon, carne desmechada",
      price: 21000,
      image: "https://media.istockphoto.com/id/1206323282/es/foto/hamburguesa-jugosa-sobre-fondo-blanco.jpg?s=612x612&w=0&k=20&c=r2mLaVFZxtRk4MeKpdQLtwTkcctyOpGEP-OxPeyo4_c="
    },
    {
      id: 5,
      name: "Hamburguesa pollo",
      description: "Pan artesanal, pollo apanado, vegetales, queso, papa cabello de angel",
      price: 14500,
      image: "https://media.istockphoto.com/id/1206323282/es/foto/hamburguesa-jugosa-sobre-fondo-blanco.jpg?s=612x612&w=0&k=20&c=r2mLaVFZxtRk4MeKpdQLtwTkcctyOpGEP-OxPeyo4_c="
    }
  ]


  return (
    <div>
      <Header/>
      <div className='products-container'>
        <div className='slider'>
          <SwiperProducts />
        </div>
        
        <div className='info'>
          <div className='products-container_title'>
            <h1>NUESTRA CARTA</h1>
          </div>

          <div className='info-container'>
            <div className='info-item' onClick={()=>setOpen(!open)}>
              <div className='info-item_title'>
                <img src="https://images.unsplash.com/photo-1561758033-d89a9ad46330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFtYnVyZ3VlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt=""/>
                <b>Hamburguesas</b>
                <i className="fa-solid fa-chevron-down"></i>
              </div>
            </div>

              {open && (
                <div>
                  <ul>
                    { 
                      productsInfo.map((item) => (
                        <li key={item.id}>{item.name}</li>
                      ))
                    }
                  </ul>
                </div>
                )
              }
          </div>


          {/* <div className='header-text'>
            <ul className='horizontal-menu'>
              <li>
                <b>Hamburguesas</b>
                <img src="https://images.unsplash.com/photo-1561758033-d89a9ad46330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFtYnVyZ3VlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt=""/>
                <i className="fa-solid fa-chevron-down"></i>
                <ul className='vertical-menu'>
                  <li>
                    <b>Hamburguesa GRU</b>
                  </li><hr />
                  <li>
                    <b>Hamburguesa criolla</b>
                  </li><hr />
                </ul>
              </li>
            </ul>
          </div> */}

          {/* <div className='products-item'>
              <img src="https://images.unsplash.com/photo-1561758033-d89a9ad46330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFtYnVyZ3VlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt=""/>
              <b>Hamburguesas</b>
              <i className="fa-solid fa-chevron-down"></i>
          </div> */}

          {/* <div className='products-item'>
            <img src="https://images.unsplash.com/photo-1541214113241-21578d2d9b62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdCUyMGRvZ3xlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt=""/>
            <b>Perros</b>
            <i className="fa-solid fa-chevron-down"></i>
          </div>
          <div className='products-item'>
            <img src="https://images.unsplash.com/photo-1562967914-608f82629710?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2hpY2tlbiUyMGZvb2R8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60" alt=""/>
            <b>Pollo</b>
            <i className="fa-solid fa-chevron-down"></i>
          </div>
          <div className='products-item'>
            <img src="https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlbmNoJTIwZnJpZXN8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60" alt=""/>
            <b>Salchipapa</b>
            <i className="fa-solid fa-chevron-down"></i>
          </div> */}
        </div>

        <Footer/>
        </div>
    </div>
  )
}

export default Products