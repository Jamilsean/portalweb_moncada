import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import imagen1 from './../../assets/img/Foto1.jpeg';
import imagen2 from './../../assets/img/Foto2.jpeg';
import imagen3 from './../../assets/img/Foto3.jpeg';
import imagen4 from './../../assets/img/Foto4.jpeg';
import imagen5 from './../../assets/img/Foto5.jpeg';

import '../../App.css'

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

export default function Slide2() {
  return (
    <div className='w-full'>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[Autoplay, EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <a href="/slide">
          <img src={imagen1} /></a>
        </SwiperSlide>
        <SwiperSlide><a href="/slide">
          <img src={imagen2} /></a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/slide">
            <img src={imagen3} />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/slide">
            <img src={imagen4} />
          </a>

        </SwiperSlide>

      </Swiper>
    </div>
  );
}
