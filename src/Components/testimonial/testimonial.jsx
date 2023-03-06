import React from 'react';
import './testimonial.css';
import ShapeWawes from '../../assets/shape-wawes.svg';
// ==================================================
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Navigation, Mousewheel, Keyboard } from "swiper";
// ==================================================

const Testimonial = () => {
    return (
        <>
            <div className='testimonial section'>
                <h2 className='section__title'>Testimonial</h2>
                <span className='section__subtitle'>My client saying</span>
                <div className='container section__border'>
                    {/* =================== Swiper ====================== */}
                    <Swiper
                        style={{
                            '--swiper-navigation-color': '#45484a',
                            '--swiper-navigation-size': '35px',
                            '--swiper-navigation-top-offset': '90%',
                            '--swiper-navigation-sides-offset': '350px',
                        }}
                        slidesPerView={1}
                        mousewheel={true}
                        keyboard={true}
                        navigation={true}
                        modules={[Navigation, Mousewheel, Keyboard]}
                        className="testimonial__mySwiper">
                        <div className='testimonial__container'>
                            {/* ======================= Testimonial 1 ======================= */}
                            <SwiperSlide>
                                <div className='testimonial__content'>
                                    <p className='testimonial__des'>
                                        “Working with Chris is to give a good
                                        impression, I carry out my project at a good
                                        cost, with excellent quality and attention.
                                        Great service and recommended.”
                                    </p>
                                    <div>
                                        <h3 className='testimonial__name'>Klay Harris</h3>
                                        <span className='testimonial__subtitle'>Client</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* ======================= Testimonial 2 ======================= */}
                            <SwiperSlide>
                                <div className='testimonial__content'>
                                    <p className='testimonial__des'>
                                        “Working with Chris is to give a good
                                        impression, I carry out my project at a good
                                        cost, with excellent quality and attention.
                                        Great service and recommended.”
                                    </p>
                                    <div>
                                        <h3 className='testimonial__name'>Klay Harris</h3>
                                        <span className='testimonial__subtitle'>Client</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* ======================= Testimonial 3 ======================= */}
                            <SwiperSlide>
                                <div className='testimonial__content'>
                                    <p className='testimonial__des'>
                                        “Working with Chris is to give a good
                                        impression, I carry out my project at a good
                                        cost, with excellent quality and attention.
                                        Great service and recommended.”
                                    </p>
                                    <div>
                                        <h3 className='testimonial__name'>Klay Harris</h3>
                                        <span className='testimonial__subtitle'>Client</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* ======================= Testimonial 4 ======================= */}
                            <SwiperSlide>
                                <div className='testimonial__content'>
                                    <p className='testimonial__des'>
                                        “Working with Chris is to give a good
                                        impression, I carry out my project at a good
                                        cost, with excellent quality and attention.
                                        Great service and recommended.”
                                    </p>
                                    <div>
                                        <h3 className='testimonial__name'>Klay Harris</h3>
                                        <span className='testimonial__subtitle'>Client</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </div>
                    </Swiper>
                </div>
                <img src={ShapeWawes} alt='testimonial img' className='testimonial__img' />
            </div>
        </>
    );
}

export default Testimonial;
