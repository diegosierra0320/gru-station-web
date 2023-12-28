// import React from 'react'
import Header from '../../components/shared/Header'
import './Products.css'
import Footer from '../../components/shared/Footer'
import SwiperProducts from '../../components/shared/swiperProducts/SwiperProducts'
import { useState } from 'react'

const Products = () => {

  const [open, setOpen] = useState(false)
  const [open2, setOpen2] = useState(false)
  const [open3, setOpen3] = useState(false)
  const [open4, setOpen4] = useState(false)
  const [open5, setOpen5] = useState(false)

  const productsInfo = [
    {
      id: 1,
      name: "Pollo GRU y Lucy",
      description: "1/2 Pollo, 6 Arepas",
      price: "$ 22.500",
      image: "https://media.istockphoto.com/id/1405190031/es/foto/pollo-frito-aislado-sobre-blanco.webp?b=1&s=170667a&w=0&k=20&c=ABZrcNgXBpBIqY3Bs_trkCHE9r08jZSIvxedm2jij50=",
      category: "chicken"
    },
    {
      id: 2,
      name: "Pollo familiar GRU",
      description: "1 Pollo, 8 Arepas, 1 Porción de papa",
      price: "$ 49.500",
      image: "https://media.istockphoto.com/id/1405190031/es/foto/pollo-frito-aislado-sobre-blanco.webp?b=1&s=170667a&w=0&k=20&c=ABZrcNgXBpBIqY3Bs_trkCHE9r08jZSIvxedm2jij50=",
      category: "chicken"
    },
    {
      id: 3,
      name: "Pollo super GRU",
      description: "1 1/2 Pollo, 8 Arepas, 1 Porción de papa",
      price: "$ 70.500",
      image: "https://media.istockphoto.com/id/1405190031/es/foto/pollo-frito-aislado-sobre-blanco.webp?b=1&s=170667a&w=0&k=20&c=ABZrcNgXBpBIqY3Bs_trkCHE9r08jZSIvxedm2jij50=",
      category: "chicken"
    },
    {
      id: 4,
      name: "GRU picada",
      description: "6 Colombinitas de Alas, 6 Alas, 1 porción Pop Corn, 1 porción de Nuggets, 1 porción de Yuca, 1 porción de papa criolla, 1 porción de para francesa, 1 porción casquitos, 8 Arepas, 1 Gaseosa 1.5 lt",
      price: "$ 54.000",
      image: "https://media.istockphoto.com/id/1405190031/es/foto/pollo-frito-aislado-sobre-blanco.webp?b=1&s=170667a&w=0&k=20&c=ABZrcNgXBpBIqY3Bs_trkCHE9r08jZSIvxedm2jij50=",
      category: "chicken"
    },
    {
      id: 5,
      name: "Cajita feliz",
      description: "",
      price: "$ 21.000",
      image: "https://media.istockphoto.com/id/1405190031/es/foto/pollo-frito-aislado-sobre-blanco.webp?b=1&s=170667a&w=0&k=20&c=ABZrcNgXBpBIqY3Bs_trkCHE9r08jZSIvxedm2jij50=",
      category: "chicken"
    },
    {
      id: 6,
      name: "Hamburguesa clasica",
      description: "Pan artesanal, carne artesanal(150 grs), vegetales, queso, papa cabello de angel",
      price: "$ 14.500",
      image: "https://media.istockphoto.com/id/1206323282/es/foto/hamburguesa-jugosa-sobre-fondo-blanco.jpg?s=612x612&w=0&k=20&c=r2mLaVFZxtRk4MeKpdQLtwTkcctyOpGEP-OxPeyo4_c=",
      category: "hamburguer"
    },
    {
      id: 7,
      name: "Hamburguesa pollo",
      description: "Pan artesanal, pollo apanado, vegetales, queso, papa cabello de angel",
      price: "$ 14.500",
      image: "https://media.istockphoto.com/id/1206323282/es/foto/hamburguesa-jugosa-sobre-fondo-blanco.jpg?s=612x612&w=0&k=20&c=r2mLaVFZxtRk4MeKpdQLtwTkcctyOpGEP-OxPeyo4_c=",
      category: "hamburguer"
    },
    {
      id: 8,
      name: "Hamburguesa criolla",
      description: "Pan artesanal, carne artesanal, vegetales, queso, papa cabello de angel, tocineta, huevo, jamon",
      price: "$ 18.500",
      image: "https://media.istockphoto.com/id/1206323282/es/foto/hamburguesa-jugosa-sobre-fondo-blanco.jpg?s=612x612&w=0&k=20&c=r2mLaVFZxtRk4MeKpdQLtwTkcctyOpGEP-OxPeyo4_c=",
      category: "hamburguer"
    },
    {
      id: 9,
      name: "Hamburguesa GRU",
      description: "Pan artesanal, carne artesanal, vegetales, queso, papa cabello de angel, tocineta, huevo, jamon, carne desmechada",
      price: "$ 21.000",
      image: "https://media.istockphoto.com/id/1206323282/es/foto/hamburguesa-jugosa-sobre-fondo-blanco.jpg?s=612x612&w=0&k=20&c=r2mLaVFZxtRk4MeKpdQLtwTkcctyOpGEP-OxPeyo4_c=",
      category: "hamburguer"
    },
    {
      id: 10,
      name: "Hamburguesa clasica doble carne",
      description: "Pan artesanal, carne artesanal(300 grs), vegetales, queso, papa cabello de angel",
      price: "$ 24.500",
      image: "https://media.istockphoto.com/id/1206323282/es/foto/hamburguesa-jugosa-sobre-fondo-blanco.jpg?s=612x612&w=0&k=20&c=r2mLaVFZxtRk4MeKpdQLtwTkcctyOpGEP-OxPeyo4_c=",
      category: "hamburguer"
    },
    {
      id: 11,
      name: "Perro clásico",
      description: "Pan bimbo, Salchicha Americana, Queso, Cebolla, Papa cabello de angel",
      price: "$ 12.000",
      image: "https://media.istockphoto.com/id/182819295/es/foto/perrito-caliente.webp?b=1&s=170667a&w=0&k=20&c=3dM328cJiW84c7I7Ja3t4MKEdhBdDV19dwShF0PqoIs=",
      category: "hotdog"
    },
    {
      id: 12,
      name: "Perro Haeaiano",
      description: "Pan bimbo, Salchicha Americana, Queso, Cebolla, Papa cabello de angel, Piña, Jamón",
      price: "$ 14.000",
      image: "https://media.istockphoto.com/id/182819295/es/foto/perrito-caliente.webp?b=1&s=170667a&w=0&k=20&c=3dM328cJiW84c7I7Ja3t4MKEdhBdDV19dwShF0PqoIs=",
      category: "hotdog"
    },
    {
      id: 13,
      name: "Perro GRU",
      description: "Pan bimbo, Salchicha Americana, Queso, Cebolla, Papa cabello de angel, Tocineta, Carne desmechada",
      price: "$ 16.000",
      image: "https://media.istockphoto.com/id/182819295/es/foto/perrito-caliente.webp?b=1&s=170667a&w=0&k=20&c=3dM328cJiW84c7I7Ja3t4MKEdhBdDV19dwShF0PqoIs=",
      category: "hotdog"
    },
    {
      id: 14,
      name: "Chorizo Santarosano",
      description: "",
      price: "$ 7.000",
      image: "https://media.istockphoto.com/id/174749745/es/foto/chorizo.webp?b=1&s=170667a&w=0&k=20&c=Xzing6Ftrb0c-gIt1X3gA-EMiBtzq-X5X3BjboDOHyM=",
      category: "chorizo"
    },
    {
      id: 15,
      name: "Choripán",
      description: "",
      price: "$ 8.000",
      image: "https://media.istockphoto.com/id/174749745/es/foto/chorizo.webp?b=1&s=170667a&w=0&k=20&c=Xzing6Ftrb0c-gIt1X3gA-EMiBtzq-X5X3BjboDOHyM=",
      category: "chorizo"
    },
    {
      id: 16,
      name: "Choriperro",
      description: "",
      price: "$ 13.000",
      image: "https://media.istockphoto.com/id/174749745/es/foto/chorizo.webp?b=1&s=170667a&w=0&k=20&c=Xzing6Ftrb0c-gIt1X3gA-EMiBtzq-X5X3BjboDOHyM=",
      category: "chorizo"
    },
    {
      id: 17,
      name: "Mazorcada",
      description: "",
      price: "$ 16.000",
      image: "https://perlanegracomidas.com/wp-content/uploads/mazorcada-pollo-perla-negra-comidas-rapidas-100.jpg",
      category: "mazorcada"
    },
    {
      id: 18,
      name: "Mazorcada mixta",
      description: "",
      price: "$ 21.000",
      image: "https://perlanegracomidas.com/wp-content/uploads/mazorcada-pollo-perla-negra-comidas-rapidas-100.jpg",
      category: "mazorcada"
    },
    {
      id: 19,
      name: "Salchipapa",
      description: "",
      price: "$ 14.000",
      image: "https://media.istockphoto.com/id/1345222192/es/foto/salchipapas-peruanas.webp?b=1&s=170667a&w=0&k=20&c=QyoeWmOoRTQdyCdsstXAA1D37VuTnilitC4Ayl7rAl4=",
      category: "salchipapa"
    },
    {
      id: 20,
      name: "Salchipapa especial",
      description: "",
      price: "$ 19.000",
      image: "https://media.istockphoto.com/id/1345222192/es/foto/salchipapas-peruanas.webp?b=1&s=170667a&w=0&k=20&c=QyoeWmOoRTQdyCdsstXAA1D37VuTnilitC4Ayl7rAl4=",
      category: "salchipapa"
    },
    {
      id: 21,
      name: "Salchipapa especial carne",
      description: "",
      price: "$ 23.500",
      image: "https://media.istockphoto.com/id/1345222192/es/foto/salchipapas-peruanas.webp?b=1&s=170667a&w=0&k=20&c=QyoeWmOoRTQdyCdsstXAA1D37VuTnilitC4Ayl7rAl4=",
      category: "salchipapa"
    },
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

              <div className="info-item" onClick={()=>setOpen(!open)}>
                <div className='info-item_title'>
                  <img src="https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=1746&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
                  <b>Pollo</b>
                  <i className={open ? "fa-solid fa-chevron-up" : "fa-solid fa-chevron-down"}></i>
                </div>
              </div>             

                {open && (
                  <div>
                    <ul className="info-item_description">
                      { 
                        productsInfo.filter(item => item.category === "chicken").map(item => (
                          <ul className='info-item_description_list' key={item.id}>
                            <li><img src={item.image} alt=""/></li>
                            <div className='info-item_description_list_2'>
                              <li><b>{item.name}</b></li> <br />
                              <li>{item.description}</li>
                            </div>
                            <li><b>{item.price}</b></li>
                          </ul>
                        ))
                      }
                    </ul>
                  </div>
                  )
                }

              <div className="info-item" onClick={()=>setOpen2(!open2)}>
                <div className='info-item_title'>
                  <img src="https://images.unsplash.com/photo-1561758033-d89a9ad46330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFtYnVyZ3VlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt=""/>
                  <b>Hamburguesas</b>
                  <i className={open2 ? "fa-solid fa-chevron-up" : "fa-solid fa-chevron-down"}></i>
                </div>
              </div>             

                {open2 && (
                  <div>
                    <ul className="info-item_description">
                      { 
                        productsInfo.filter(item => item.category === "hamburguer").map(item => (
                          <ul className='info-item_description_list' key={item.id}>
                            <li><img src={item.image} alt=""/></li>
                            <div className='info-item_description_list_2'>
                              <li><b>{item.name}</b></li> <br />
                              <li>{item.description}</li>
                            </div>
                            <li><b>{item.price}</b></li>
                          </ul>
                        ))
                      }
                    </ul>
                  </div>
                  )
                }

              <div className='info-item' onClick={()=>setOpen3(!open3)}>
                <div className='info-item_title'>
                <img src="https://images.unsplash.com/photo-1541214113241-21578d2d9b62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdCUyMGRvZ3xlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt=""/>
                  <b>Perros</b>
                  <i className={open3 ? "fa-solid fa-chevron-up" : "fa-solid fa-chevron-down"}></i>
                </div>
              </div>

                {open3 && (
                  <div>
                    <ul className="info-item_description">
                      { 
                        productsInfo.filter(item => item.category === "hotdog").map(item => (
                          <ul className='info-item_description_list' key={item.id}>
                            <li><img src={item.image} alt=""/></li>
                            <div className='info-item_description_list_2'>
                              <li><b>{item.name}</b></li> <br />
                              <li>{item.description}</li>
                            </div>
                            <li><b>{item.price}</b></li>
                          </ul>
                        ))
                      }
                    </ul>
                  </div>
                  )
                }

              <div className='info-item' onClick={()=>setOpen4(!open4)}>
                <div className='info-item_title'>
                <img src="https://images.unsplash.com/photo-1575861158310-c7c6bec1c4cf?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
                  <b>Chrorizos</b>
                  <i className={open4 ? "fa-solid fa-chevron-up" : "fa-solid fa-chevron-down"}></i>
                </div>
              </div>

                {open4 && (
                  <div>
                    <ul className="info-item_description">
                      { 
                        productsInfo.filter(item => item.category === "chorizo").map(item => (
                          <ul className='info-item_description_list' key={item.id}>
                            <li><img src={item.image} alt=""/></li>
                            <div className='info-item_description_list_2'>
                              <li><b>{item.name}</b></li> <br />
                              <li>{item.description}</li>
                            </div>
                            <li><b>{item.price}</b></li>
                          </ul>
                        ))
                      }
                    </ul>
                  </div>
                  )
                }

              <div className='info-item' onClick={()=>setOpen5(!open5)}>
                <div className='info-item_title'>
                <img src="https://media.istockphoto.com/id/982791638/es/foto/salchipapa-peruana-caseras-fritas.webp?b=1&s=170667a&w=0&k=20&c=ZkmmMRtC5JIuP7fgZOKz4XVVF7vtQfZ5JLFr-m97wQI=" alt=""/>
                  <b>Salchipapa</b>
                  <i className={open5 ? "fa-solid fa-chevron-up" : "fa-solid fa-chevron-down"}></i>
                </div>
              </div>

                {open5 && (
                  <div>
                    <ul className="info-item_description">
                      { 
                        productsInfo.filter(item => item.category === "salchipapa").map(item => (
                          <ul className='info-item_description_list' key={item.id}>
                            <li><img src={item.image} alt=""/></li>
                            <div className='info-item_description_list_2'>
                              <li><b>{item.name}</b></li> <br />
                              <li>{item.description}</li>
                            </div>
                            <li><b>{item.price}</b></li>
                          </ul>
                        ))
                      }
                    </ul>
                  </div>
                  )
                }

            </div>
        </div>

        <Footer/>
      </div>
    </div>
  )
}

export default Products