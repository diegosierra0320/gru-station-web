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
  const [open6, setOpen6] = useState(false)
  const [open7, setOpen7] = useState(false)

  const productsInfo = [
    {
      id: 1,
      name: "POP Corn",
      description: "",
      price: "$ 12.500",
      image: "https://media.istockphoto.com/id/1171515902/es/foto/mordeduras-crujientes-de-palomitas-de-pollo-en-la-taza-cuadrada-de-papel-para-ni%C3%B1os-para.webp?b=1&s=170667a&w=0&k=20&c=xbJyPCNl1TfGvQdDIEbADGwEZk84WRu9Kd1CwZd4IIo=",
      category: "chicken"
    },
    {
      id: 2,
      name: "Pollo GRU y Lucy",
      description: "1/2 Pollo, 6 Arepas",
      price: "$ 22.500",
      image: "https://media.istockphoto.com/id/1405190031/es/foto/pollo-frito-aislado-sobre-blanco.webp?b=1&s=170667a&w=0&k=20&c=ABZrcNgXBpBIqY3Bs_trkCHE9r08jZSIvxedm2jij50=",
      category: "chicken"
    },
    {
      id: 3,
      name: "Alas en salsa",
      description: "En BBQ o miel mostaza, papas y gaseosa 400 ml",
      price: "$ 22.500",
      image: "https://media.istockphoto.com/id/1440555856/es/foto/alitas-de-pollo-con-ajo-miel.webp?b=1&s=170667a&w=0&k=20&c=EWaPcv0qEOEA5336PB0uw2LWKrHVNh-fjcbkTVQtcEU=",
      category: "chicken"
    },
    {
      id: 4,
      name: "Pollo familiar GRU",
      description: "1 Pollo, 8 Arepas, 1 Porción de papa",
      price: "$ 49.500",
      image: "https://media.istockphoto.com/id/1405190031/es/foto/pollo-frito-aislado-sobre-blanco.webp?b=1&s=170667a&w=0&k=20&c=ABZrcNgXBpBIqY3Bs_trkCHE9r08jZSIvxedm2jij50=",
      category: "chicken"
    },
    {
      id: 5,
      name: "GRU picada",
      description: "6 Colombinitas de Alas, 6 Alas, 1 porción Pop Corn, 1 porción de Nuggets, 1 porción de Yuca, 1 porción de papa criolla, 1 porción de para francesa, 1 porción casquitos, 8 Arepas, 1 Gaseosa 1.5 lt",
      price: "$ 54.000",
      image: "https://media.istockphoto.com/id/1405190031/es/foto/pollo-frito-aislado-sobre-blanco.webp?b=1&s=170667a&w=0&k=20&c=ABZrcNgXBpBIqY3Bs_trkCHE9r08jZSIvxedm2jij50=",
      category: "chicken"
    },
    {
      id: 6,
      name: "Pollo super GRU",
      description: "1 1/2 Pollo, 8 Arepas, 1 Porción de papa",
      price: "$ 70.500",
      image: "https://media.istockphoto.com/id/1405190031/es/foto/pollo-frito-aislado-sobre-blanco.webp?b=1&s=170667a&w=0&k=20&c=ABZrcNgXBpBIqY3Bs_trkCHE9r08jZSIvxedm2jij50=",
      category: "chicken"
    },
    {
      id: 7,
      name: "Cajita feliz",
      description: "",
      price: "$ 21.000",
      image: "https://media.istockphoto.com/id/1405190031/es/foto/pollo-frito-aislado-sobre-blanco.webp?b=1&s=170667a&w=0&k=20&c=ABZrcNgXBpBIqY3Bs_trkCHE9r08jZSIvxedm2jij50=",
      category: "chicken"
    },
    {
      id: 8,
      name: "Hamburguesa clasica",
      description: "Pan artesanal, carne artesanal(150 grs), vegetales, queso, papa cabello de angel",
      price: "$ 14.500",
      image: "https://media.istockphoto.com/id/1206323282/es/foto/hamburguesa-jugosa-sobre-fondo-blanco.jpg?s=612x612&w=0&k=20&c=r2mLaVFZxtRk4MeKpdQLtwTkcctyOpGEP-OxPeyo4_c=",
      category: "hamburguer"
    },
    {
      id: 9,
      name: "Hamburguesa pollo",
      description: "Pan artesanal, pollo apanado, vegetales, queso, papa cabello de angel",
      price: "$ 14.500",
      image: "https://media.istockphoto.com/id/1206323282/es/foto/hamburguesa-jugosa-sobre-fondo-blanco.jpg?s=612x612&w=0&k=20&c=r2mLaVFZxtRk4MeKpdQLtwTkcctyOpGEP-OxPeyo4_c=",
      category: "hamburguer"
    },
    {
      id: 10,
      name: "Hamburguesa criolla",
      description: "Pan artesanal, carne artesanal, vegetales, queso, papa cabello de angel, tocineta, huevo, jamon",
      price: "$ 18.500",
      image: "https://media.istockphoto.com/id/1206323282/es/foto/hamburguesa-jugosa-sobre-fondo-blanco.jpg?s=612x612&w=0&k=20&c=r2mLaVFZxtRk4MeKpdQLtwTkcctyOpGEP-OxPeyo4_c=",
      category: "hamburguer"
    },
    {
      id: 11,
      name: "Hamburguesa GRU",
      description: "Pan artesanal, carne artesanal, vegetales, queso, papa cabello de angel, tocineta, huevo, jamon, carne desmechada",
      price: "$ 21.000",
      image: "https://media.istockphoto.com/id/1206323282/es/foto/hamburguesa-jugosa-sobre-fondo-blanco.jpg?s=612x612&w=0&k=20&c=r2mLaVFZxtRk4MeKpdQLtwTkcctyOpGEP-OxPeyo4_c=",
      category: "hamburguer"
    },
    {
      id: 12,
      name: "Hamburguesa clasica doble carne",
      description: "Pan artesanal, carne artesanal(300 grs), vegetales, queso, papa cabello de angel",
      price: "$ 24.500",
      image: "https://media.istockphoto.com/id/1206323282/es/foto/hamburguesa-jugosa-sobre-fondo-blanco.jpg?s=612x612&w=0&k=20&c=r2mLaVFZxtRk4MeKpdQLtwTkcctyOpGEP-OxPeyo4_c=",
      category: "hamburguer"
    },
    {
      id: 13,
      name: "Perro clásico",
      description: "Pan bimbo, Salchicha Americana, Queso, Cebolla, Papa cabello de angel",
      price: "$ 12.000",
      image: "https://media.istockphoto.com/id/182819295/es/foto/perrito-caliente.webp?b=1&s=170667a&w=0&k=20&c=3dM328cJiW84c7I7Ja3t4MKEdhBdDV19dwShF0PqoIs=",
      category: "hotdog"
    },
    {
      id: 14,
      name: "Perro Haeaiano",
      description: "Pan bimbo, Salchicha Americana, Queso, Cebolla, Papa cabello de angel, Piña, Jamón",
      price: "$ 14.000",
      image: "https://media.istockphoto.com/id/182819295/es/foto/perrito-caliente.webp?b=1&s=170667a&w=0&k=20&c=3dM328cJiW84c7I7Ja3t4MKEdhBdDV19dwShF0PqoIs=",
      category: "hotdog"
    },
    {
      id: 15,
      name: "Perro GRU",
      description: "Pan bimbo, Salchicha Americana, Queso, Cebolla, Papa cabello de angel, Tocineta, Carne desmechada",
      price: "$ 16.000",
      image: "https://media.istockphoto.com/id/182819295/es/foto/perrito-caliente.webp?b=1&s=170667a&w=0&k=20&c=3dM328cJiW84c7I7Ja3t4MKEdhBdDV19dwShF0PqoIs=",
      category: "hotdog"
    },
    {
      id: 16,
      name: "Chorizo Santarosano",
      description: "",
      price: "$ 7.000",
      image: "https://media.istockphoto.com/id/174749745/es/foto/chorizo.webp?b=1&s=170667a&w=0&k=20&c=Xzing6Ftrb0c-gIt1X3gA-EMiBtzq-X5X3BjboDOHyM=",
      category: "chorizo"
    },
    {
      id: 17,
      name: "Choripán",
      description: "",
      price: "$ 8.000",
      image: "https://media.istockphoto.com/id/174749745/es/foto/chorizo.webp?b=1&s=170667a&w=0&k=20&c=Xzing6Ftrb0c-gIt1X3gA-EMiBtzq-X5X3BjboDOHyM=",
      category: "chorizo"
    },
    {
      id: 18,
      name: "Choriperro",
      description: "",
      price: "$ 13.000",
      image: "https://media.istockphoto.com/id/174749745/es/foto/chorizo.webp?b=1&s=170667a&w=0&k=20&c=Xzing6Ftrb0c-gIt1X3gA-EMiBtzq-X5X3BjboDOHyM=",
      category: "chorizo"
    },
    {
      id: 19,
      name: "Mazorcada",
      description: "",
      price: "$ 16.000",
      image: "https://perlanegracomidas.com/wp-content/uploads/mazorcada-pollo-perla-negra-comidas-rapidas-100.jpg",
      category: "mazorcada"
    },
    {
      id: 20,
      name: "Mazorcada mixta",
      description: "",
      price: "$ 21.000",
      image: "https://perlanegracomidas.com/wp-content/uploads/mazorcada-pollo-perla-negra-comidas-rapidas-100.jpg",
      category: "mazorcada"
    },
    {
      id: 21,
      name: "Salchipapa",
      description: "",
      price: "$ 14.000",
      image: "https://media.istockphoto.com/id/1345222192/es/foto/salchipapas-peruanas.webp?b=1&s=170667a&w=0&k=20&c=QyoeWmOoRTQdyCdsstXAA1D37VuTnilitC4Ayl7rAl4=",
      category: "salchipapa"
    },
    {
      id: 22,
      name: "Salchipapa especial",
      description: "",
      price: "$ 19.000",
      image: "https://media.istockphoto.com/id/1345222192/es/foto/salchipapas-peruanas.webp?b=1&s=170667a&w=0&k=20&c=QyoeWmOoRTQdyCdsstXAA1D37VuTnilitC4Ayl7rAl4=",
      category: "salchipapa"
    },
    {
      id: 23,
      name: "Salchipapa especial carne",
      description: "",
      price: "$ 23.500",
      image: "https://media.istockphoto.com/id/1345222192/es/foto/salchipapas-peruanas.webp?b=1&s=170667a&w=0&k=20&c=QyoeWmOoRTQdyCdsstXAA1D37VuTnilitC4Ayl7rAl4=",
      category: "salchipapa"
    },
    {
      id: 24,
      name: "Papa a la francesa",
      description: "",
      price: "$ 4.500",
      image: "https://media.istockphoto.com/id/604378894/es/foto/papas-fritas-sobre-fondo-blanco.webp?b=1&s=170667a&w=0&k=20&c=YullNVzRkhVyqg1vrcy2LXh4cujlBXbrCcW0rvK_Q4o=",
      category: "acompañamientos"
    },
    {
      id: 25,
      name: "Papa criolla",
      description: "",
      price: "$ 4.500",
      image: "https://media.istockphoto.com/id/1641098622/es/foto/papas-criollas.webp?b=1&s=170667a&w=0&k=20&c=ns8GwFv45IY2YkaZu8VjFLKdz1OJ1EvWaXxihfXET6o=",
      category: "acompañamientos"
    },
    {
      id: 26,
      name: "Papa casquitos",
      description: "",
      price: "$ 4.500",
      image: "https://images.unsplash.com/photo-1623238913973-21e45cced554?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBhcGElMjBjcmlvbGxhfGVufDB8fDB8fHww",
      category: "acompañamientos"
    },
    {
      id: 27,
      name: "Tocineta",
      description: "",
      price: "$ 4.500",
      image: "https://media.istockphoto.com/id/1394211178/es/foto/tocino-cortado-grueso-en-espiral.webp?b=1&s=170667a&w=0&k=20&c=loWxBqeKb8O6BzQy0SXv9f8AW-L5J1a_u7dWVcOl23Q=",
      category: "acompañamientos"
    },
    {
      id: 28,
      name: "Carne desmechada",
      description: "",
      price: "$ 4.000",
      image: "https://media.istockphoto.com/id/121217182/es/foto/ropa-vieja-cubano-rallado-filete-de-costilla-en-salsa-de-tomate-base.webp?b=1&s=170667a&w=0&k=20&c=M85SUFZr-NjpkuEo1vzpkcvcSIZnOM4nT0r7t4CxWVs=",
      category: "acompañamientos"
    },
    {
      id: 29,
      name: "Huevos de codorniz x 4",
      description: "",
      price: "$ 3.000",
      image: "https://media.istockphoto.com/id/156480099/es/foto/huevo-de-codorniz.webp?b=1&s=170667a&w=0&k=20&c=lrgLDaM2p0W3zCxZ5ucERo0_AZBcQoIP0Xfe6nTLFB8=",
      category: "acompañamientos"
    },
    {
      id: 30,
      name: "Nuggets",
      description: "",
      price: "$ 7.000",
      image: "https://media.istockphoto.com/id/146748650/es/foto/pila-de-nuggets-de-pollo.webp?b=1&s=170667a&w=0&k=20&c=DaL-u6enVOS7o_MtUA_GMe5wnpvkm46pufQdZezb7SU=",
      category: "acompañamientos"
    },
    {
      id: 31,
      name: "Agua cristal",
      description: "",
      price: "$ 2.500",
      image: "https://copservir.vtexassets.com/arquivos/ids/763878-800-auto?v=637950268175700000&width=800&height=auto&aspect=true",
      category: "bebidas"
    },
    {
      id: 32,
      name: "Gaseosa 250 ml",
      description: "",
      price: "$ 2.500",
      image: "https://unidrogas.vtexassets.com/arquivos/ids/380968-800-auto?v=638394507049600000&width=800&height=auto&aspect=true",
      category: "bebidas"
    },
    {
      id: 33,
      name: "Jugo Hit",
      description: "",
      price: "$ 3.500",
      image: "https://www.lechoneriaedgar.com/wp-content/uploads/2020/08/jugo-hit.png",
      category: "bebidas"
    },
    {
      id: 34,
      name: "Gaseosa 400 ml",
      description: "",
      price: "$ 3.500",
      image: "https://supermercadolaestacion.com/36513-large_default/gaseosa-postobon-botella-x-400-mililitros-manzana.jpg",
      category: "bebidas"
    },
    {
      id: 35,
      name: "Té",
      description: "",
      price: "$ 3.500",
      image: "https://www.amercarya.com/wp-content/uploads/2023/10/Te-FUZE-TEA-limon-400-ml6b40e35769464e40bc3b54b002517557.jpg",
      category: "bebidas"
    },
    {
      id: 36,
      name: "Limonada natural",
      description: "",
      price: "$ 3.500",
      image: "https://images.unsplash.com/photo-1507281549113-040fcfef650e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGxpbW9uYWRhfGVufDB8fDB8fHww",
      category: "bebidas"
    },
    {
      id: 37,
      name: "Jugo de mora",
      description: "En leche tiene un valor adicional de $ 2.000",
      price: "$ 4.000",
      image: "https://www.figoecomercado.com/up-one/2022/10/BlackberryJuiceweb-1.jpg",
      category: "bebidas"
    },
    {
      id: 38,
      name: "Jugo de lulo",
      description: "En leche tiene un valor adicional de $ 2.000",
      price: "$ 4.000",
      image: "https://vecinavegetariana.com/wp-content/uploads/2022/05/Lulada-Lulo-Drink-Bebida-de-Lulo-Naranjilla-2-1.jpg",
      category: "bebidas"
    },
    {
      id: 39,
      name: "Jugo de fresa",
      description: "En leche tiene un valor adicional de $ 2.000",
      price: "$ 4.000",
      image: "https://sumerlabs.com/sumer-app-90b8f.appspot.com/product_photos%2F4c6069e81dc99a0c3435dd728f6b4d51%2F0bf78af0-7d2f-11ec-a65b-b79fc2521eb6?alt=media&token=4abeab5c-949d-4ce1-9c53-6ab4c09d9260",
      category: "bebidas"
    },
    {
      id: 40,
      name: "Jugo de maracuya",
      description: "En leche tiene un valor adicional de $ 2.000",
      price: "$ 4.000",
      image: "https://lorenzzapizzeria.com/wp-content/uploads/2021/07/maracuya.jpg",
      category: "bebidas"
    },
    {
      id: 41,
      name: "Econolitro",
      description: "",
      price: "$ 5.000",
      image: "https://static.compreloadomicilio.com/dulceriavainilla/products/01472/1396.jpg",
      category: "bebidas"
    },
    {
      id: 42,
      name: "Gatorade",
      description: "",
      price: "$ 5.000",
      image: "https://cdn1.totalcommerce.cloud/gastronomy/product-zoom/es/bebida-gatorade-tropical-fruit-500ml-1.webp",
      category: "bebidas"
    },
    {
      id: 43,
      name: "Gaseosa 1.5 l",
      description: "",
      price: "$ 8.000",
      image: "https://cdn.inoutdelivery.com/hotamericas.inoutdelivery.com.co/lg/1641503977381-bebidas_gaseosas-litro.webp",
      category: "bebidas"
    },
    {
      id: 44,
      name: "Monster energy",
      description: "",
      price: "$ 9.000",
      image: "https://bevgo.com.co/wp-content/uploads/2020/12/3377.jpg",
      category: "bebidas"
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

              <div className='info-item' onClick={()=>setOpen6(!open6)}>
                <div className='info-item_title6'>
                <img src="https://media.istockphoto.com/id/1384617117/es/foto/surtido-de-comida-chatarra-dispersa-sobre-un-fondo-oscuro.webp?b=1&s=170667a&w=0&k=20&c=b_ej02xfjxjcEfHDf_Hw4PkBVk3-qPgRPfjX00lfHNI=" alt=""/>
                  <b>Acompañamientos</b>
                  <i className={open6 ? "fa-solid fa-chevron-up" : "fa-solid fa-chevron-down"}></i>
                </div>
              </div>

                {open6 && (
                  <div>
                    <ul className="info-item_description">
                      { 
                        productsInfo.filter(item => item.category === "acompañamientos").map(item => (
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

              <div className='info-item' onClick={()=>setOpen7(!open7)}>
                <div className='info-item_title'>
                <img src="https://media.istockphoto.com/id/1395240880/es/foto/una-bebida-bien-fr%C3%ADa-y-deliciosa.webp?b=1&s=170667a&w=0&k=20&c=r_gckLIbcEnNnRfugjQRrDOnAouJzO0tk3VUIWP32Ow=" alt=""/>
                  <b>Bebidas</b>
                  <i className={open7 ? "fa-solid fa-chevron-up" : "fa-solid fa-chevron-down"}></i>
                </div>
              </div>

                {open7 && (
                  <div>
                    <ul className="info-item_description">
                      { 
                        productsInfo.filter(item => item.category === "bebidas").map(item => (
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