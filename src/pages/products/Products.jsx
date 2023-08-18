// import React from 'react'
import Header from '../../components/shared/Header'
import './Products.css'
import Footer from '../../components/shared/Footer'
import SwiperProducts from '../../components/shared/swiperProducts/SwiperProducts'

const Products = () => {
  return (
    <div >
        <Header/>
      <div className='products-container'>
        <div className='slider'>
          <SwiperProducts />
        </div>
        <div className='products-info'>
          <div className='products-item'>
            <img src="https://images.unsplash.com/photo-1561758033-d89a9ad46330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFtYnVyZ3VlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt=""/>
            <b>Hamburguesas</b>
            <i className="fa-solid fa-chevron-down"></i>
          </div>
          <div className='products-item'>
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
          </div>
        </div>
        <Footer/>
        </div>
    </div>
  )
}

export default Products