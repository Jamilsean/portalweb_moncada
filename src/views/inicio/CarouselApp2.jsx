import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// Imagenes
import Car1 from '../../assets/img/Fondo2.jpg';
import Car2 from '../../assets/img/CAR2.jpg';
import Car3 from '../../assets/img/CAR1.jpg';

// import required modules
import { Pagination } from 'swiper/modules';
export default function CarouselApp2() {
  return (
    <div className=''>
       <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper !w-full !h-[600px] !p-0 bg-red-400"
      >
        <SwiperSlide>
          <div>
          <img
        src={Car1}
        alt="image 1"
        className="h-full w-full object-cover my-auto"
      />
          </div>
        </SwiperSlide>
        
      </Swiper>
    </div>
  )
}
