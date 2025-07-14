"use client"
import React from "react";
import "../ComponentStyle/Trip.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

function Trip() {
  return (
    <div className="tripCon">
      <div className="trip">
        <div className="title px-5 my-5">
          <p>Trips</p>
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="ChengDu">
                <h1>ChengDu</h1>
                <h6>成都</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide> 
            <div className="JuiZhaiGou">
                <h1>JuiZhaiGou</h1>
                <h6>九寨沟</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="ChongQing">
                <h1>ChongQing</h1>
                <h6>重庆</h6>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Trip;

