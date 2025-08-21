"use client"
import React from "react";
import "../../../ComponentStyle/Trip/Day1.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

function Day1() {
    return (
        <div className="day1 grid grid-cols-1 gap-10 mt-5">
            <div className="title text-center">
                <h1 className="text-3xl font-bold">Day 1</h1>
                <h6 className="text-lg font-bold">Jakarta - Singapore - ChengDu</h6>
            </div>

            <div className="grid grid-cols-2 gap-x-10">
                <div className="img">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        pagination={{ clickable: true }}
                        modules={[Pagination]}
                        className="mySwiper"
                        style={{ maxWidth: 500 }}
                    >
                        <SwiperSlide>
                            <img className="w-full" src="../../IMG20250626043849.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="w-full" src="../../IMG20250626043950.jpg" alt="" />
                        </SwiperSlide>
                    </Swiper>
                </div>

                <div className="textOP mx-auto">
                    <h1 className="font-bold text-3xl">Soekarno-Hatta Airport (CGK)</h1>
                    <p>
                        Arrive at 5.00 A.M in Terminal 3 Gate 2 Departure<br />
                        actually, the tour leader (Om Asen) asked us to come early at 4.00 A.M, what a pain to wake up at 4.00 A.M<br />
                        we just tell, our family is on time so don't worry with us😁😁.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-x-10">
                <div className="img max-w-200">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        pagination={{ clickable: true }}
                        modules={[Pagination]}
                        className="mySwiper"
                        style={{ maxWidth: 150 }}
                    >
                        <SwiperSlide className="img1">
                            <img className="1" src="../../IMG20250626061751.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide className="img2">
                            <img className="2" src="../../IMG20250626062938.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide className="img3">
                            <img className="3" src="../../IMG20250626063012.jpg"/>
                        </SwiperSlide>
                        <SwiperSlide className="img4">
                            <img className="4" src="../../IMG20250626075214.jpg" alt="" />
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="text mx-auto">
                    <h1 className="font-bold text-3xl">Check Up & Wait</h1>
                    <p>
                        After meet with Om Asen, we go to the check up hand carry and passport<br/>
                        Then i saw plane that parked (Pelita Air) and taxi (ANA).<br/>
                        After we walk to gate 6 and wait until 7.50 A.M. <br/> i saw many airlines boarding and take off like Xiamen air, Qatar, Garuda indoneisa.<br/>
                        Xiamen Air [boeing 737 MAX 8]<br/>
                        All Nippon Airways (ANA) [boeing 787-9]<br/>
                        Pelita Air [Airbus A320-200]<br/>
                        Garuda indonesia [Boeing 777-300ER]<br/>
                        Qatar airways [Airbus A350-900]
                    </p>
                </div>
            </div>
            <div className="boarding grid grid-cols-2 gap-x-10">
                <div className="img">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        pagination={{ clickable: true }}
                        modules={[Pagination]}
                        className="mySwiper"
                        style={{ maxWidth: 500 }}
                    >
                        <SwiperSlide>
                            <img className="w-full" src="../../IMG20250626075304.jpg" alt="" />
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="text">
                    <h1 className="font-bold text-3xl">Boarding</h1>
                    <p>
                        After 7.53 A.M, we go to boarding using Singapore airlines. with the flight code SQ 819 [Boeing 777-300ER] from Jakarta [CGK] to Singapore [SIN].<br/>
                    </p>
                </div>
            </div>
            <div className="pushback grid grid-cols-2 gap-x-10">
                <div className="text">
                    <h1 className="font-bold text-3xl">Pushback From Gate 6D & Taxi To Runway 25R </h1>
                    <p>
                        After 8.12 A.M, the plane pushback. i saw TransNusa Air [COMAC ARJ21] <br/>
                        After pushback tail to the right, i saw Super Air Jet [Airbus A320-200] touchdown.<br/>
                        Then when the plane turn left to the runway 25R. i saw terminal 3 CGK with the average of Garuda Indonesia planes.
                    </p>
                </div>
                <div className="img">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        pagination={{ clickable: true }}
                        modules={[Pagination]}
                        className="mySwiper"
                        style={{ maxWidth: 500 }}
                    >
                        <SwiperSlide>
                            <img className="w-full" src="../../IMG20250626081344.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="w-full" src="../../IMG20250626083023.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="w-full" src="../../IMG20250626082955.jpg" alt="" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className="takeoff grid grid-cols-2 gap-x-10">
                <div className="text">
                    <h1 className="font-bold text-3xl">Takeoff</h1>
                    <p>
                        The plane takeoff from runway 25R. While the plane takeoff, i saw the Super Air Jet [Airbus A320-200] taxi to gade<br/>
                        At the back there is Batik Air Malasysia [boeing 737-800] or known as Malinda Air.<br/>
                        The last plane that taxi is Garuda Indoensia [boeing 737-800]. Then the plane rotate
                    </p>
                </div>
                <div className="img">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        pagination={{ clickable: true }}
                        modules={[Pagination]}
                        className="mySwiper"
                        style={{ maxWidth: 500 }}
                    >
                        <SwiperSlide>
                            <img src="../../IMG20250626083108.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="w-full" src="../../IMG20250626083110.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="w-full" src="../../IMG20250626083113.jpg" alt="" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className="flightLanding grid grid-cols-2 gap-x-10">
                <div className="img">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        pagination={{ clickable: true }}
                        modules={[Pagination]}
                        className="mySwiper"
                        style={{ maxWidth: 500, textAlign: "center" }}
                    >
                        <SwiperSlide>
                            <img className="w-full" src="../../IMG20250626093845.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="w-full" src="../../IMG20250626094829.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="w-full" src="../../IMG20250626094836.jpg" alt="" srcset="" />
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="text">
                    <h1 className="font-bold text-3xl">Final Approach</h1>
                    <p>
                        Now we are Approaching Changi Airport (SIN) we can see teh port of Singapore many ships<br/>
                        At the next photos we are in state of a very Final Appraoch around 200ft left. At the first plane that we see with a litte bit of red paint on it's tail (i don't kown what airlines is that) beside, I can see a Airbus A380-800 Singapore Airlines that park. it a vary big plane with four engine trust. Beside there is Airbus A350-900 Singapore Airlines and the last is Scoot the child of Singapore Airlines<br/>
                        Around 60ft, i saw a Boeing 747-400F Singapre Airlines(Cargo) and  747-400F Korean Air(Cargo)
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Day1;