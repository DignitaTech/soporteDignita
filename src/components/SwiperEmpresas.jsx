import React from 'react'
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css'
import 'swiper/swiper-bundle.css'

const SwiperEmpresas = () => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  return (
    <div style={{}} className='w-10/12 mx-auto pb-14 relative'>
      <Swiper className=''
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={
          {
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }
        }
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
          }
        }
        loop={true}
        speed={1000}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}

        >
        <SwiperSlide>
          <div className='py-2 bg-white flex items-center justify-center rounded-lg'>
            <img className='h-32' src="https://dignita.tech/wp-content/uploads/2022/12/image-541-min.png" alt="IDEGO" />
          </div>
        </SwiperSlide>  
        <SwiperSlide>
        <div className='py-2 bg-white flex items-center justify-center rounded-lg'>
          <img className='h-32' src="https://dignita.tech/wp-content/uploads/2022/12/image-545-min.png" alt="Data Discovery Solutions" />
        </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='py-2 bg-white flex items-center justify-center rounded-lg'>
            <img className='h-32' src="https://dignita.tech/wp-content/uploads/2022/05/cliente1.png" alt="Falabella" />
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div className='py-2 bg-white flex items-center justify-center rounded-lg'>
            <img className='h-32' src="https://dignita.tech/wp-content/uploads/2022/05/c3.png" alt="Alicorp" />
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div className='py-2 bg-white flex items-center justify-center rounded-lg'>
            <img className='h-32' src="https://dignita.tech/wp-content/uploads/2022/05/457_main.jpg" alt="Fitesa" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='py-2 bg-white flex items-center justify-center rounded-lg'>
            <img className='h-32' src="https://dignita.tech/wp-content/uploads/2022/05/c6.png" alt="BBVA" />
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div className='py-2 bg-white flex items-center justify-center rounded-lg'>
            <img className='h-32' src="https://dignita.tech/wp-content/uploads/2022/05/c8.png" alt="BCP" />
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div className='py-2 bg-white flex items-center justify-center rounded-lg'>
            <img className='h-32 px-4' src="https://dignita.tech/wp-content/uploads/2022/12/image-540.png" alt="Verisure" />
          </div>
        </SwiperSlide>
      </Swiper>
        <div className='bg-red-600 text-white p-3 inline-block cursor-pointer rounded-md absolute -left-7 z-10 top-1/3'
          ref={navigationPrevRef}>&lt;
        </div>
        <div className='bg-red-600 text-white p-3 inline-block cursor-pointer rounded-md absolute -right-7 z-10 top-1/3'
          ref={navigationNextRef}>&gt;
        </div>

    </div>
  )
}

export default SwiperEmpresas