import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade } from 'swiper';
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/swiper-bundle.min.css"

const SwiperProducts = () => {

  return (
    <div className='swiper_container'>
    <Swiper
        effect="fade"
        fadeEffect={{
          crossFade: true
        }}
        // EffectFade={{
        //   shadow: true,
        //   slideShadows: true,
        //   shadowOffset: 50,
        //   shadowScale: 1.94,
        // }}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        modules={[ Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade ]}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
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