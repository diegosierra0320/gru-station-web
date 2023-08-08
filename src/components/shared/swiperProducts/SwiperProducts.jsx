import { Swiper, SwiperSlide } from 'swiper/react'
// import { Autoplay, EffectCoverflow, Navigation, Pagination } from "swiper"
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"

const SwiperProducts = () => {

  return (
    <div className='swiper_container'>
    <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={false}
        slidesPerView={1}
            // modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
            className='swiper_container'
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              el: ".swiper-pagination",
              clickable: true
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
              clickable: true
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
        >
        <SwiperSlide>
            <img src="https://images.unsplash.com/photo-1554306297-0c86e837d24b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1136&q=80" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://images.unsplash.com/photo-1582236820862-d6a92fef7714?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
        </SwiperSlide>
    </Swiper>
    </div>
  )
}

export default SwiperProducts