"use client"
import React from "react";
import Link from "next/link";
import "../ComponentStyle/Trip.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import "antd/dist/reset.css";
import { Button } from "antd";

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
            <div className="day1 swiper">
                <h1>Day 1</h1>
                <h6>成都</h6>
                <a  className="p-5" href="/Trip/day1" target="_blank" rel="noopener noreferrer">details</a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="day2 swiper">
                <h1>Day 2</h1>
                <h6>成都</h6>
                
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="day3 swiper">
                <h1>Day 3</h1>
                <h6>成都</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="day4 swiper">
                <h1>Day 4</h1>
                <h6>成都</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="day5 swiper">
                <h1>Day 5</h1>
                <h6>成都</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="day6 swiper">
                <h1>Day 6</h1>
                <h6>成都</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="day7 swiper">
                <h1>Day 7</h1>
                <h6>成都</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="day8 swiper">
                <h1>Day 8</h1>
                <h6>成都</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="day9 swiper">
                <h1>Day 9</h1>
                <h6>成都</h6>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="day10 swiper">
                <h1>Day 10</h1>
                <h6>成都</h6>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Trip;


