"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import '../ComponentStyle/UseAgent.css';
import { Navigation } from 'swiper/modules';

function UseAgent() {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      <SwiperSlide className='text-align-center my-auto'>
        <div className="text">
          <h1 className='font-bold text-5xl text-red-500'>Thanks for your service</h1>
          <h3 className=' font-bold text-3xl'>Trip to China</h3>
          <h5 className='font-bold text-lg'><span className='text-[#3B4D2F]'>ChengDu</span> - <span className='text-[#0100FC]'>JuiZhaiGou</span> - <span className='text-orange-500'>ChongQing</span></h5>
          <p>成都 - 九寨沟 - 重庆</p>
        </div>
      </SwiperSlide>
      <SwiperSlide className='slide2 my-auto '>
        <img src="https://www.avia.travel/lib/images/logo-aviatour.png" alt="" />
      </SwiperSlide>
      <SwiperSlide className='slide3 bg-[#00000095]' style={{background: "linear-gradient(to bottom, #00064E 88%, #000000 12%)"}}>
        <img src="https://www.uponarriving.com/wp-content/uploads/2017/10/pic2-singaporeair-logo-490x315.png" alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

export default UseAgent;


